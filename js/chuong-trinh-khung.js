let progressData = null;
let currentAcademicYear = "";
let timelineData = [];
let chartData = null;
let knowledgeBlocksData = null;

//Load data test
async function loadProgressData() {
  try {
    const response = await fetch("../data/chuong-trinh-khung.json");
    const data = await response.json();

    progressData = data.progressData;
    currentAcademicYear = data.currentAcademicYear;
    timelineData = data.timelineData;
    chartData = data.chartData;
    knowledgeBlocksData = data.knowledgeBlocks;

    return data;
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu tiến độ:", error);
    return null;
  }
}

function renderProgress() {
  if (!progressData) return;

  const ids = [
    "totalCredits",
    "completedCredits",
    "currentCredits",
    "remainingCredits",
    "progressDiff",
  ];
  const keys = [
    "totalCredits",
    "completedCredits",
    "currentCredits",
    "remainingCredits",
    "progressDiff",
  ];

  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = progressData[keys[i]];
  });

  const overallEl = document.getElementById("overallPercentage");
  if (overallEl) {
    const percent = (
      (progressData.completedCredits / progressData.totalCredits) *
      100
    ).toFixed(1);
    overallEl.textContent = percent + "%";
  }
}

function initKendoChart() {
  if (!chartData || typeof $ === "undefined" || !$.fn.kendoChart) return;

  $("#chart").kendoChart({
    chartArea: {
      height: 30,
      background: "#f4fbff",
    },
    legend: { visible: false },
    seriesDefaults: {
      type: "bar",
      stack: true,
    },
    series: [
      { data: [chartData.completed], color: "#2865EB" }, // Đã hoàn thành (xanh)
      { data: [chartData.current], color: "#ffb800" }, // Đang học (vàng)
      { data: [chartData.remaining], color: "#e0e0e0" }, // Còn lại (xám)
    ],
    valueAxis: {
      min: 0,
      max: 100,
      visible: false,
      majorGridLines: { visible: false },
      minorGridLines: { visible: false },
    },
    categoryAxis: {
      categories: [""],
      visible: false,
      majorGridLines: { visible: false },
      minorGridLines: { visible: false },
    },
    tooltip: {
      visible: true,
      template: "#= value #%",
    },

    dataBound: function () {
      $("#chart svg")
        .find("rect[fill]")
        .each(function () {
          var rect = $(this);
          if (rect.attr("fill") && !rect.attr("fill").includes("url")) {
            rect.attr("rx", 8);
            rect.attr("ry", 8);
          }
        });
    },
  });
}

/* Timeline lộ trình học tập (Desktop) */

/* Tính phần trăm cho vòng tròn timeline */
function getCircleStyles(sem) {
  const completedPercent = (sem.completedCredits / sem.totalCredits) * 100;
  const currentPercent = (sem.currentCredits / sem.totalCredits) * 100;
  const totalPercent = completedPercent + currentPercent;

  let circleClass = "";
  let circleStyle = "";

  if (sem.status === "completed" && sem.progress === 100) {
    circleClass = "completed";
  } else if (sem.status === "active" && sem.completedCredits === 0) {
    circleClass = "active";
  } else if (
    (sem.status === "mixed" || totalPercent > 0) &&
    sem.completedCredits > 0 &&
    sem.currentCredits > 0
  ) {
    circleClass = "partial-mixed";
    circleStyle = `style="--progress-green: ${completedPercent}; --progress-total: ${totalPercent}"`;
  } else if (
    sem.completedCredits > 0 &&
    sem.completedCredits < sem.totalCredits
  ) {
    circleClass = "partial-green";
    circleStyle = `style="--progress-green: ${completedPercent}"`;
  } else if (sem.currentCredits > 0 && sem.completedCredits === 0) {
    circleClass = "partial-yellow";
    circleStyle = `style="--progress-yellow: ${currentPercent}"`;
  } else {
    circleClass = "future";
  }

  return {
    circleClass,
    circleStyle,
    completedPercent,
    currentPercent,
    totalPercent,
  };
}

function buildProgressBarHTML(completedPercent, currentPercent, totalPercent) {
  let html = "";
  let textClass = "";

  if (completedPercent > 0 && currentPercent > 0) {
    html = `
      <div class="timeline-progress-segment completed" style="width: ${completedPercent}%;"></div>
      <div class="timeline-progress-segment active" style="width: ${currentPercent}%;"></div>
    `;
    textClass = totalPercent > 50 ? "light" : "";
  } else if (completedPercent > 0) {
    html = `<div class="timeline-progress-segment completed" style="width: ${completedPercent}%;"></div>`;
    textClass = completedPercent > 50 ? "light" : "";
  } else if (currentPercent > 0) {
    html = `<div class="timeline-progress-segment active" style="width: ${currentPercent}%;"></div>`;
    textClass = currentPercent > 50 ? "light" : "";
  }

  return { html, textClass };
}

function renderTimeline() {
  const container = document.getElementById("timelineItems");
  const markersContainer = document.getElementById("timelineYearMarkers");
  const trackProgress = document.getElementById("timelineTrackProgress");

  if (!container || !markersContainer || !trackProgress) return;
  container.innerHTML = "";
  markersContainer.innerHTML = "";

  const yearGroups = {};
  timelineData.forEach((sem) => {
    if (!yearGroups[sem.year]) yearGroups[sem.year] = [];
    yearGroups[sem.year].push(sem);
  });

  const uniqueYears = Object.keys(yearGroups);
  const totalSemesters = timelineData.length;

  const currentYearIndex = uniqueYears.indexOf(currentAcademicYear);
  if (currentYearIndex >= 0) {
    const firstSemIndex = timelineData.findIndex(
      (s) => s.year === currentAcademicYear,
    );
    trackProgress.style.width =
      ((firstSemIndex + 1) / totalSemesters) * 100 + "%";
  }

  timelineData.forEach((sem) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.setAttribute("data-semester", sem.semester);
    item.style.cursor = "pointer";

    const {
      circleClass,
      circleStyle,
      completedPercent,
      currentPercent,
      totalPercent,
    } = getCircleStyles(sem);
    const progressBar = buildProgressBarHTML(
      completedPercent,
      currentPercent,
      totalPercent,
    );
    const displayPercent = Math.round(totalPercent);
    const displayCredits = `${sem.completedCredits + sem.currentCredits}/${sem.totalCredits}`;

    item.innerHTML = `
      <div class="timeline-circle-wrapper">
        <div class="timeline-circle ${circleClass}" ${circleStyle}>
          <span>HK${sem.semester}</span>
        </div>
      </div>
      <div class="timeline-info">
        <div class="timeline-semester">Học kỳ ${sem.semester}</div>
        <div class="timeline-credits">${displayCredits} tín chỉ</div>
      </div>
      <div class="timeline-progress">
        <div class="timeline-progress-bar">
          ${progressBar.html}
          <div class="timeline-progress-text ${progressBar.textClass}">${displayPercent}%</div>
        </div>
      </div>
    `;

    container.appendChild(item);
  });

  /* Bắt đầu */
  const startMarker = document.createElement("div");
  startMarker.className = "timeline-year-marker";
  startMarker.style.left = "0%";
  startMarker.innerHTML = `
    <div class="timeline-year-dot current"></div>
    <div class="timeline-year-label">9/2022</div>
  `;
  markersContainer.appendChild(startMarker);

  /* Mốc từng năm học */
  uniqueYears.forEach((year) => {
    const firstSemIndex = timelineData.findIndex((s) => s.year === year);
    const positionPercent = ((firstSemIndex + 1) / totalSemesters) * 100;

    const marker = document.createElement("div");
    marker.className = "timeline-year-marker";
    marker.style.left = positionPercent + "%";

    const dotClass = year <= currentAcademicYear ? "current" : "future";
    const semestersList = yearGroups[year]
      .map((s) => `HK${s.semester}`)
      .join(", ");

    if (positionPercent === 100) {
      marker.innerHTML = ``;
    } else {
      marker.innerHTML = `
      <div class="timeline-year-dot ${dotClass}"></div>
      <div class="timeline-year-label">${year}</div>
      <div class="timeline-year-semesters">${semestersList}</div>
    `;
    }
    markersContainer.appendChild(marker);
  });

  /* Kết thúc */
  const endMarker = document.createElement("div");
  endMarker.className = "timeline-year-marker";
  endMarker.style.left = "100%";
  endMarker.innerHTML = `
    <div class="timeline-year-dot ${currentYearIndex >= 0 ? "future" : "current"}"></div>
    <div class="timeline-year-label">6/2028</div>
  `;
  markersContainer.appendChild(endMarker);

  const minItemWidth = 140;
  const totalMinWidth = totalSemesters * minItemWidth;
  container.style.minWidth = totalMinWidth + "px";
  const trackContainerEl = document.querySelector(".timeline-track-container");
  if (trackContainerEl) {
    trackContainerEl.style.minWidth = totalMinWidth + "px";
  }
}

/* Timeline trên mobile */

function handleResize() {
  const isMobile = window.innerWidth <= 768;
  const container = document.querySelector(".timeline-container");
  if (!container) return;

  const wrapper = container.querySelector(".timeline-wrapper");
  let mobileTimeline = container.querySelector(".timeline-mobile");

  if (isMobile) {
    if (wrapper) wrapper.style.display = "none";
    if (!mobileTimeline) {
      mobileTimeline = document.createElement("div");
      mobileTimeline.className = "timeline-mobile";
      container.appendChild(mobileTimeline);
    }
    renderMobileTimeline();

    setTimeout(() => {
      document.querySelectorAll(".timeline-semester-card").forEach((card) => {
        card.addEventListener("click", function () {
          const semester = this.getAttribute("data-semester");
          if (window.scrollToSemester) window.scrollToSemester(semester);
        });
      });
    }, 100);
  } else {
    if (wrapper) wrapper.style.display = "block";
    if (mobileTimeline) mobileTimeline.remove();
  }
}

function renderMobileTimeline() {
  const container = document.querySelector(".timeline-mobile");
  if (!container) return;

  container.innerHTML = "";

  const yearGroups = {};
  timelineData.forEach((sem) => {
    if (!yearGroups[sem.year]) yearGroups[sem.year] = [];
    yearGroups[sem.year].push(sem);
  });

  const uniqueYears = Object.keys(yearGroups);
  const totalYears = uniqueYears.length;
  const currentYearIndex = uniqueYears.indexOf(currentAcademicYear);

  uniqueYears.forEach((year, yearIndex) => {
    const yearSems = yearGroups[year];
    const dotClass = year <= currentAcademicYear ? "current" : "future";

    const progressPercent = (yearIndex / totalYears) * 100 + 3;
    if (yearIndex === currentYearIndex && currentYearIndex >= 0) {
      container.style.setProperty("--progress-percent", progressPercent + "%");
    } else if (currentYearIndex < 0) {
      container.style.setProperty("--progress-percent", "100%");
    }

    const yearGroup = document.createElement("div");
    yearGroup.className = "timeline-year-group";

    const yearMarker = document.createElement("div");
    yearMarker.className = "timeline-year-marker-mobile";
    yearMarker.innerHTML = `<div class="timeline-year-dot ${dotClass}"></div>`;
    yearGroup.appendChild(yearMarker);

    const semestersContainer = document.createElement("div");
    semestersContainer.className = "timeline-semesters-horizontal";

    yearSems.forEach((sem) => {
      const card = document.createElement("div");
      card.className = "timeline-semester-card";
      card.setAttribute("data-semester", sem.semester);
      card.style.cursor = "pointer";

      const {
        circleClass,
        circleStyle,
        completedPercent,
        currentPercent,
        totalPercent,
      } = getCircleStyles(sem);
      const progressBar = buildProgressBarHTML(
        completedPercent,
        currentPercent,
        totalPercent,
      );

      if (sem.status === "completed" && sem.progress === 100)
        card.classList.add("completed");
      else if (sem.status === "active") card.classList.add("active");
      else if (sem.status === "mixed") card.classList.add("mixed");

      const displayPercent = Math.round(totalPercent);
      const displayCredits = `${sem.completedCredits + sem.currentCredits}/${sem.totalCredits}`;

      card.innerHTML = `
        <div class="timeline-circle ${circleClass}" ${circleStyle}>
          <span>HK${sem.semester}</span>
        </div>
        <div class="timeline-info">
          <div class="timeline-semester">Học kỳ ${sem.semester}</div>
          <div class="timeline-credits">${displayCredits} tín chỉ</div>
        </div>
        <div class="timeline-progress">
          <div class="timeline-progress-bar">
            ${progressBar.html}
            <div class="timeline-progress-text ${progressBar.textClass}">${displayPercent}%</div>
          </div>
        </div>
        <div class="semester-tooltip">
          <div class="tooltip-row">
            <span class="tooltip-label">Học kỳ:</span>
            <span class="tooltip-value">HK${sem.semester}</span>
          </div>
          <div class="tooltip-row">
            <span class="tooltip-label">Đã học:</span>
            <span class="tooltip-value">${sem.completedCredits}/${sem.totalCredits} TC</span>
          </div>
          <div class="tooltip-row">
            <span class="tooltip-label">Đang học:</span>
            <span class="tooltip-value">${sem.currentCredits} TC</span>
          </div>
        </div>
      `;

      semestersContainer.appendChild(card);
    });

    yearGroup.appendChild(semestersContainer);
    container.appendChild(yearGroup);
  });
}
//THêm sự kiện click cho timeline
function addTimelineClickHandlers() {
  document.querySelectorAll(".timeline-item").forEach((item) => {
    item.addEventListener("click", function () {
      const semester = this.getAttribute("data-semester");
      scrollToSemester(semester);
    });
  });
}

function scrollToSemester(semester) {
  const semesterTab = document.querySelector(".tab-btn:first-child");
  if (semesterTab && !semesterTab.classList.contains("active")) {
    semesterTab.click();
  }

  setTimeout(() => {
    const sections = document.querySelectorAll(".expandable-section");
    let targetSection = null;

    sections.forEach((section) => {
      const headerText = section.querySelector(".section-header-text");
      if (headerText && headerText.textContent.includes(`Học kỳ ${semester}`)) {
        targetSection = section;
      }
    });

    if (targetSection) {
      const header = targetSection.querySelector(".section-header");
      if (!header.classList.contains("expanded")) {
        header.click();
      }

      setTimeout(() => {
        const headerHeight =
          document.querySelector(".header-container")?.offsetHeight || 70;
        const y =
          targetSection.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight -
          20;
        window.scrollTo({ top: y, behavior: "smooth" });
        highlightIncompleteCourses(targetSection);
      }, 100);
    }
  }, 200);
}

if (typeof window !== "undefined") {
  window.scrollToSemester = scrollToSemester;
}

// Hightlight nhưng môn chưa học
function highlightIncompleteCourses(section) {
  document.querySelectorAll(".highlight-incomplete").forEach((el) => {
    el.classList.remove("highlight-incomplete");
  });

  section.querySelectorAll("tbody tr").forEach((row) => {
    const completedCell = row.querySelector("td:last-child");
    if (completedCell && !completedCell.querySelector(".checkmark")) {
      row.classList.add("highlight-incomplete");
      setTimeout(() => row.classList.remove("highlight-incomplete"), 3000);
    }
  });
}

function initBootstrapTooltips() {
  if (typeof bootstrap === "undefined") return;

  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]'),
  );
  tooltipTriggerList.map(function (el) {
    return new bootstrap.Tooltip(el);
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  await loadProgressData();

  renderProgress();
  renderKnowledgeBlocksOverview();
  initKendoChart();

  renderTimeline();
  handleResize();

  setTimeout(() => addTimelineClickHandlers(), 100);

  initBootstrapTooltips();
});

window.addEventListener("resize", handleResize);
