const TYPE_LABELS = {
  transport: "交通", flight: "航班", airport: "機場", car: "租車",
  parking: "停車", food: "美食", hotel: "住宿", shopping: "購物",
  attraction: "景點", insurance: "保險", rest: "休息"
};

// 由 PDF 內 Google Maps 短網址解析的精確座標（供導航使用）
const MAPS_COORDS = {
  "https://maps.app.goo.gl/95Sgb4BDBae4o4Vn6": { lat: 26.2150228, lng: 127.6874839 },
  "https://maps.app.goo.gl/HixD7ZixjPEgsnwE7": { lat: 26.214844, lng: 127.687208 },
  "https://maps.app.goo.gl/ZBCFQDQoHnp7HoT6A": { lat: 26.2182958, lng: 127.6945378 },
  "https://maps.app.goo.gl/Cx9uR493wvwS1Lmc6": { lat: 26.2186763, lng: 127.6943748 },
  "https://maps.app.goo.gl/mFfeA5753tFXZdkJ6": { lat: 26.2300311, lng: 127.6811351 },
  "https://maps.app.goo.gl/5hdreEuP84i1BPGy5": { lat: 26.2617542, lng: 127.6981799 },
  "https://maps.app.goo.gl/eHQHRxx5HB9JtGYL8": { lat: 26.6187557, lng: 127.9691664 },
  "https://maps.app.goo.gl/8G2fdLW4at7kbPpr7": { lat: 26.6209963, lng: 127.9636717 },
  "https://maps.app.goo.gl/XEEM3LXRVagsfkjA8": { lat: 26.692838, lng: 127.8793828 },
  "https://maps.app.goo.gl/uqe7brpmCiSnFhC97": { lat: 26.6968294, lng: 128.0197784 },
  "https://maps.app.goo.gl/SR742iQVXZkdr17R7": { lat: 26.678494, lng: 128.0125167 },
  "https://maps.app.goo.gl/81LR7HAGxtLMf2TVA": { lat: 26.3177356, lng: 127.7596369 },
  "https://maps.app.goo.gl/9sb43W3naQECKz2T6": { lat: 26.3162888, lng: 127.755221 },
  "https://maps.app.goo.gl/v9mXerULzHZXFjRy7": { lat: 26.3302873, lng: 127.7456435 },
  "https://maps.app.goo.gl/H4otdwonwrGWxVCfA": { lat: 26.2191973, lng: 127.6719382 },
  "https://maps.app.goo.gl/KsdwiZRWksoGt8Qj9": { lat: 26.2185391, lng: 127.6726486 },
  "https://maps.app.goo.gl/XzspLda4g3MhjovC6": { lat: 26.1910343, lng: 127.6707712 }
};

function navigateUrl(loc) {
  if (loc.maps && MAPS_COORDS[loc.maps]) {
    const { lat, lng } = MAPS_COORDS[loc.maps];
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving&dir_action=navigate`;
  }
  if (loc.name) {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.name + " 沖繩")}&travelmode=driving&dir_action=navigate`;
  }
  const compact = (loc.mapcode || "").replace(/\s/g, "");
  return `https://mapcode.app/ja/?q=${encodeURIComponent(compact)}`;
}

function mapcodeLookupUrl(code) {
  const compact = code.replace(/\s/g, "");
  return `https://mapcode.app/ja/?q=${encodeURIComponent(compact)}`;
}

function telLink(tel) {
  return `tel:${tel.replace(/-/g, "")}`;
}

function renderLinks(links) {
  if (!links?.length) return "";
  return `<div class="link-row">${links.map(l => {
    const cls = l.type === "maps" ? "btn-maps" : "btn-ext";
    const icon = l.type === "maps" ? "📍" : "🔗";
    return `<a class="btn-link ${cls}" href="${l.url}" target="_blank" rel="noopener">${icon} ${l.label}</a>`;
  }).join("")}</div>`;
}

function renderLocation(loc) {
  const mapsBtn = loc.maps
    ? `<a class="btn-link btn-maps" href="${loc.maps}" target="_blank" rel="noopener">📍 Google Maps</a>`
    : "";
  const navBtn = (loc.maps || loc.mapcode)
    ? `<a class="btn-link btn-nav" href="${navigateUrl(loc)}" target="_blank" rel="noopener">🚗 開始導航</a>`
    : "";
  const mapcodeBtn = loc.mapcode
    ? `<a class="btn-link btn-ext" href="${mapcodeLookupUrl(loc.mapcode)}" target="_blank" rel="noopener">🔢 Mapcode 查詢</a>`
    : "";
  const telBtn = loc.tel
    ? `<a class="btn-link btn-tel" href="${telLink(loc.tel)}">📞 ${loc.tel}</a>`
    : "";
  return `<div class="location-card">
    <div class="loc-name">${loc.name}</div>
    ${loc.mapcode ? `<div class="mapcode">Mapcode: ${loc.mapcode}</div>` : ""}
    ${loc.note ? `<div class="event-hours">${loc.note}</div>` : ""}
    <div class="link-row">${mapsBtn}${navBtn}${mapcodeBtn}${telBtn}</div>
  </div>`;
}

function renderLocations(event) {
  let html = "";
  if (event.parking) html += renderLocation(event.parking);
  if (event.locations) html += event.locations.map(renderLocation).join("");
  return html;
}

function renderNotes(notes) {
  if (!notes?.length) return "";
  return `<ul class="event-notes">${notes.map(n => {
    const text = n.link
      ? `<a href="${n.link}" target="_blank" rel="noopener">${n.text}</a>`
      : n.text;
    return `<li>${text}</li>`;
  }).join("")}</ul>`;
}

function renderRecs(items, label) {
  if (!items?.length) return "";
  const isObj = typeof items[0] === "object";
  return `<div class="rec-list"><h4>${label}</h4><ul>${items.map(i => {
    if (isObj) {
      return `<li>${i.name}${i.hours ? ` <span style="color:var(--muted)">（${i.hours}）</span>` : ""}</li>`;
    }
    return `<li>${i}</li>`;
  }).join("")}</ul></div>`;
}

function renderSchedule(schedule) {
  if (!schedule?.length) return "";
  return `<div class="schedule-grid">${schedule.map(s =>
    `<div class="schedule-item"><span>${s.label}</span><strong>${s.time}</strong></div>`
  ).join("")}</div>`;
}

function renderImages(pages) {
  if (!pages?.length) return "";
  return `<div class="pdf-viewer">
    <p class="pdf-hint">以下為 PDF 原始頁面參考資料（點擊可放大）</p>
    ${pages.map(p => `<img src="images/page-${String(p).padStart(2, "0")}.png" alt="PDF 第 ${p} 頁" loading="lazy">`).join("")}
  </div>`;
}

function renderEvent(ev) {
  return `<article class="event">
    <div class="event-time">${ev.time}</div>
    <span class="event-type">${TYPE_LABELS[ev.type] || ev.type}</span>
    <h3 class="event-title">${ev.title}</h3>
    ${ev.hours ? `<div class="event-hours">營業時間：${ev.hours}</div>` : ""}
    ${renderLinks(ev.links)}
    ${renderLocations(ev)}
    ${renderNotes(ev.notes)}
    ${renderRecs(ev.shops, "商家參考")}
    ${renderRecs(ev.recommendations, "美食參考")}
    ${renderSchedule(ev.schedule)}
    ${renderImages(ev.imagePages)}
  </article>`;
}

function updateNavOffset() {
  const nav = document.querySelector(".main-nav");
  if (nav) {
    document.documentElement.style.setProperty("--nav-bottom", `${nav.offsetHeight}px`);
  }
}

function syncFixedBarGeometry(bar, barWrap) {
  const rect = barWrap.getBoundingClientRect();
  bar.style.left = `${rect.left}px`;
  bar.style.width = `${rect.width}px`;
}

function clearFixedBarGeometry(bar) {
  bar.style.left = "";
  bar.style.width = "";
}

function setupDayTabsPin() {
  const barWrap = document.getElementById("day-tabs-bar");
  const bar = document.getElementById("day-tabs-sticky");
  const sentinel = document.getElementById("day-tabs-sentinel");
  const placeholder = document.getElementById("day-tabs-placeholder");
  if (!barWrap || !bar || !sentinel || !placeholder) return;

  const pin = () => {
    if (!barWrap.classList.contains("visible")) {
      bar.classList.remove("is-fixed");
      clearFixedBarGeometry(bar);
      placeholder.style.height = "0";
      return;
    }

    updateNavOffset();
    const navBottom = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-bottom")) || 0;
    const shouldPin = sentinel.getBoundingClientRect().top <= navBottom;

    if (shouldPin) {
      bar.classList.add("is-fixed");
      syncFixedBarGeometry(bar, barWrap);
      placeholder.style.height = `${bar.offsetHeight}px`;
    } else {
      bar.classList.remove("is-fixed");
      clearFixedBarGeometry(bar);
      placeholder.style.height = "0";
    }
  };

  window.addEventListener("scroll", pin, { passive: true });
  window.addEventListener("resize", pin);
  pin();
}

function scrollToItineraryContent() {
  const bar = document.getElementById("day-tabs-sticky");
  const content = document.getElementById("itinerary-content");
  if (!bar || !content) return;

  const offset = bar.offsetHeight + parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-bottom")) + 8;
  const y = content.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
}

function renderDay(day) {
  return `<div class="day-header">
    <h2>${day.label}　${day.date}</h2>
    <p>${day.subtitle}</p>
    ${day.accommodation ? `<div class="stay">🏨 住宿：${day.accommodation}</div>` : ""}
  </div>
  <div class="timeline">${day.events.map(renderEvent).join("")}</div>`;
}

function renderItinerary() {
  const container = document.getElementById("itinerary-content");
  const tabs = document.getElementById("day-tabs");

  tabs.innerHTML = TRIP.days.map((d, i) =>
    `<button class="day-tab${i === 0 ? " active" : ""}" data-day="${d.id}">
      <span class="day-num">${d.label}</span>
      <span class="day-date">${d.date.slice(5)}</span>
    </button>`
  ).join("");

  container.innerHTML = renderDay(TRIP.days[0]);

  tabs.querySelectorAll(".day-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.querySelectorAll(".day-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const day = TRIP.days.find(d => d.id === +btn.dataset.day);
      container.innerHTML = renderDay(day);
      scrollToItineraryContent();
    });
  });
}

function renderNotice(notice) {
  let html = `<h3>${notice.title}</h3>`;

  if (notice.links?.length) {
    html += `<div class="quick-links">${notice.links.map(l =>
      `<a class="btn-link btn-ext" href="${l.url}" target="_blank" rel="noopener">🔗 ${l.label}</a>`
    ).join("")}</div>`;
  }

  if (notice.items?.length) {
    html += `<ul class="notice-list">${notice.items.map(i => `<li>${i}</li>`).join("")}</ul>`;
  }

  if (notice.sections?.length) {
    html += notice.sections.map(s =>
      `<div class="packing-section"><h4>${s.title}</h4><ul>${s.items.map(i => `<li>${i}</li>`).join("")}</ul></div>`
    ).join("");
  }

  if (notice.pdfPages?.length) {
    html += renderImages(notice.pdfPages);
  }

  return html;
}

function renderNotices() {
  const tabs = document.getElementById("notice-tabs");
  const content = document.getElementById("notice-content");

  tabs.innerHTML = TRIP.notices.map((n, i) =>
    `<button class="notice-tab${i === 0 ? " active" : ""}" data-notice="${n.id}">${n.title}</button>`
  ).join("");

  content.innerHTML = renderNotice(TRIP.notices[0]);

  tabs.querySelectorAll(".notice-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.querySelectorAll(".notice-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const notice = TRIP.notices.find(n => n.id === btn.dataset.notice);
      content.innerHTML = renderNotice(notice);
    });
  });
}

function setupNav() {
  const mainBtns = document.querySelectorAll(".main-nav button");
  const panels = document.querySelectorAll(".panel");
  const dayTabsBar = document.getElementById("day-tabs-bar");

  mainBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      mainBtns.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.panel).classList.add("active");

      if (dayTabsBar) {
        dayTabsBar.classList.toggle("visible", btn.dataset.panel === "panel-itinerary");
      }
      window.dispatchEvent(new Event("scroll"));
    });
  });
}

function setupLightbox() {
  const lb = document.getElementById("lightbox");
  const lbImg = lb.querySelector("img");

  document.addEventListener("click", e => {
    if (e.target.matches(".pdf-viewer img")) {
      lbImg.src = e.target.src;
      lb.classList.add("open");
    }
    if (e.target === lb) lb.classList.remove("open");
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") lb.classList.remove("open");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hero h1").textContent = TRIP.title;
  document.querySelector(".hero .dates").textContent = TRIP.dates;
  renderItinerary();
  renderNotices();
  setupNav();
  setupLightbox();
  updateNavOffset();
  setupDayTabsPin();
  window.addEventListener("resize", updateNavOffset);
});
