let curriculumData = null;
let semesterCurriculumData = null;
let currentView = "semester";

//Load data test
async function loadCurriculumData() {
  try {
    const response = await fetch("../data/khoi-kien-thuc.json");
    curriculumData = await response.json();
    return curriculumData;
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu chương trình đào tạo:", error);
    return null;
  }
}

async function loadSemesterCurriculumData() {
  try {
    const response = await fetch("../data/hoc-ky.json");
    semesterCurriculumData = await response.json();
    return semesterCurriculumData;
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu học kỳ:", error);
    return null;
  }
}

function getAllCourses() {
  if (!curriculumData) return [];
  return [
    ...curriculumData.professionalEducation.mandatory,
    ...curriculumData.professionalEducation.elective.block1,
    ...curriculumData.professionalEducation.elective.block2,
  ];
}

function isPrerequisiteCompleted(prerequisiteStr) {
  if (!prerequisiteStr || prerequisiteStr === "-") return true;

  const matches = prerequisiteStr.match(/\d{6}/g);
  if (!matches || matches.length === 0) return true;

  const allCourses = getAllCourses();

  return matches.every((prereqCode) => {
    const prereqCourse = allCourses.find((c) => c.courseCode === prereqCode);
    return prereqCourse ? prereqCourse.completed : true;
  });
}

function getPrerequisiteTooltip(prerequisiteStr) {
  if (!prerequisiteStr || prerequisiteStr === "-") return null;

  const matches = prerequisiteStr.match(/\d{6}/g);
  if (!matches || matches.length === 0) return null;

  const allCourses = getAllCourses();

  const prerequisites = matches
    .map((prereqCode) => {
      const course = allCourses.find((c) => c.courseCode === prereqCode);
      if (!course) return null;
      return {
        courseName: course.courseName,
        courseCode: prereqCode,
        completed: course.completed,
      };
    })
    .filter((p) => p !== null);

  return prerequisites.length > 0 ? prerequisites : null;
}

function createTableRow(course, viewMode = "knowledgeBlock") {
  const isLocked = !isPrerequisiteCompleted(course.prerequisite);
  const lockedClass = isLocked ? ' class="row-locked"' : "";

  const bgStyle = course.completed
    ? ' style="background-color: #F4FFF5 !important;"'
    : "";

  const tooltipData = getPrerequisiteTooltip(course.prerequisite);
  const dataTooltip = tooltipData
    ? ` data-tooltip="${encodeURIComponent(JSON.stringify(tooltipData))}"`
    : "";

  const completedIcon = course.completed
    ? '<span class="checkmark">✓</span>'
    : '<span class="dash">-</span>';

  const secondColumn =
    viewMode === "semester"
      ? `<td class="column-center">${course.knowledgeBlock}</td>`
      : `<td class="column-center">${course.semester}</td>`;

  return `
    <tr${lockedClass}${bgStyle}${dataTooltip}>
      <td class="column-center">${course.stt}</td>
      ${secondColumn}
      <td>${course.courseName}</td>
      <td class="column-center">${course.courseCode}</td>
      <td class="column-center">${course.prerequisite}</td>
      <td class="column-center">${course.equivalent}</td>
      <td class="column-center">${course.replacement}</td>
      <td class="column-center">${course.credits}</td>
      <td class="column-center">${course.theoryHours}</td>
      <td class="column-center">${course.practiceHours}</td>
      <td class="column-center">${completedIcon}</td>
      <td class="column-center">
        <button class="btn btn-sm btn-outline-primary" ${isLocked ? "disabled" : ""}><i class="fa-solid fa-file-invoice"></i></button>
      </td>
    </tr>
  `;
}

function buildTableHeader(viewMode = "knowledgeBlock") {
  const secondColTitle = viewMode === "semester" ? "KHỐI KIẾN THỨC" : "HỌC KỲ";
  return `
    <thead>
      <tr>
        <th class="column-center">STT</th>
        <th class="column-center">${secondColTitle}</th>
        <th>TÊN MÔN HỌC/HỌC PHẦN</th>
        <th class="column-center">MÃ HP</th>
        <th class="column-center">HỌC PHẦN</th>
        <th class="column-center">HP TƯƠNG ĐƯƠNG</th>
        <th class="column-center">HP THAY THẾ</th>
        <th class="column-center">SỐ TC</th>
        <th class="column-center">SỐ TIẾT LÝ</th>
        <th class="column-center">SỐ TIẾT THI</th>
        <th class="column-center">ĐẠT</th>
        <th class="column-center">ĐỀ CƯƠNG</th>
      </tr>
    </thead>
  `;
}

function renderKnowledgeBlockView() {
  if (!curriculumData) return;

  const container = document.getElementById("expandableSections");
  const timelineSection = document
    .querySelector(".timeline-section")
    ?.closest(".content-wrapper");
  const knowledgeSection = document
    .querySelector(".knowledge-block-overview")
    ?.closest(".content-wrapper");

  if (timelineSection) timelineSection.style.display = "none";
  if (knowledgeSection) knowledgeSection.style.display = "block";

  const data = curriculumData.professionalEducation;
  const tableHeader = buildTableHeader("knowledgeBlock");

  function buildElectiveBlock(title, courses) {
    return `
      <div style="width: max-content; min-width: 100%">
        <div class="block-type">${title}</div>
        <table class="table table-sm elective-table">
          ${tableHeader}
          <tbody>
            ${courses.map((c) => createTableRow(c, "knowledgeBlock")).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function buildSection(
    title,
    mandatoryCredits,
    electiveCredits,
    isExpanded,
    electiveBlocks,
  ) {
    const expandedClass = isExpanded ? "expanded" : "";
    const rotatedClass = isExpanded ? "rotated" : "";
    const activeClass = isExpanded ? "active" : "";

    return `
      <div class="expandable-section">
        <div class="section-header ${expandedClass}" onclick="toggleSection(this)">
          <div class="semester-title">
            <div class="semester-head-icon"></div>
            <div>
              <div class="section-header-text">${title}</div>
              <div class="section-meta">
                Bắt buộc: <span class="bold-text">${mandatoryCredits} tín chỉ</span>
                • Tự chọn: <span class="bold-text">${electiveCredits} tín chỉ</span>
              </div>
            </div>
          </div>
          <div class="section-icon ${rotatedClass}">
            <i class="fas fa-chevron-up"></i>
          </div>
        </div>
        <div class="section-contents ${activeClass}">
          <div class="subtitle-header">Học phần bắt buộc</div>
          <div class="table-frame">
            <table class="table table-sm mandatory-courses-table">
              ${tableHeader}
              <tbody>
                ${data.mandatory.map((c) => createTableRow(c, "knowledgeBlock")).join("")}
              </tbody>
            </table>
          </div>
          <div class="subtitle-header">Học phần tự chọn</div>
          <div class="elective-course">
            ${electiveBlocks}
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = [
    buildSection(
      "Khối kiến thức giáo dục đại cương",
      12,
      6,
      false,
      buildElectiveBlock(
        "TỰ CHỌN KHỐI KIẾN THỨC GIÁO DỤC ĐẠI CƯƠNG 1",
        data.elective.block1,
      ) +
        buildElectiveBlock(
          "TỰ CHỌN KHỐI KIẾN THỨC GIÁO DỤC ĐẠI CƯƠNG 2",
          data.elective.block2,
        ),
    ),
    buildSection(
      "Khối kiến thức giáo dục chuyên nghiệp",
      6,
      6,
      true,
      buildElectiveBlock(
        "TỰ CHỌN KHỐI KIẾN THỨC GIÁO DỤC CHUYÊN NGHIỆP 1",
        data.elective.block1,
      ) +
        buildElectiveBlock(
          "TỰ CHỌN KHỐI KIẾN THỨC GIÁO DỤC CHUYÊN NGHIỆP 2",
          data.elective.block2,
        ),
    ),
    buildSection(
      "Khối kiến thức chưa xác định",
      6,
      6,
      false,
      buildElectiveBlock(
        "TỰ CHỌN KHỐI KIẾN THỨC GIÁO DỤC ĐẠI CƯƠNG",
        data.elective.block1,
      ),
    ),
  ].join("");
}

function renderSemesterView() {
  if (!semesterCurriculumData) return;

  const container = document.getElementById("expandableSections");
  const timelineSection = document
    .querySelector(".timeline-section")
    ?.closest(".content-wrapper");
  const knowledgeSection = document
    .querySelector(".knowledge-block-overview")
    ?.closest(".content-wrapper");

  if (timelineSection) timelineSection.style.display = "block";
  if (knowledgeSection) knowledgeSection.style.display = "none";

  const tableHeader = buildTableHeader("semester");

  const semestersHTML = semesterCurriculumData.semesters
    .map((semData, index) => {
      const isExpanded = index === 0;
      const expandedClass = isExpanded ? "expanded" : "";
      const rotatedClass = isExpanded ? "rotated" : "";
      const activeClass = isExpanded ? "active" : "";

      const mandatoryHTML =
        semData.mandatory.length > 0
          ? `
        <div class="subtitle-header">Học phần bắt buộc (${semData.mandatoryCredits} tín chỉ)</div>
        <div class="table-frame">
          <table class="table table-sm mandatory-courses-table">
            ${tableHeader}
            <tbody>
              ${semData.mandatory.map((c, idx) => createTableRow({ ...c, stt: idx + 1 }, "semester")).join("")}
            </tbody>
          </table>
        </div>
      `
          : "";

      const electiveHTML =
        semData.elective.length > 0
          ? `
        <div class="subtitle-header">Học phần tự chọn (${semData.electiveCredits} tín chỉ)</div>
        <div class="table-frame">
          <table class="table table-sm">
            ${tableHeader}
            <tbody>
              ${semData.elective.map((c, idx) => createTableRow({ ...c, stt: idx + 1 }, "semester")).join("")}
            </tbody>
          </table>
        </div>
      `
          : "";

      return `
        <div class="expandable-section">
          <div class="section-header ${expandedClass}" onclick="toggleSection(this)">
            <div class="semester-title">
              <div class="semester-head-icon"></div>
              <div>
                <div class="section-header-text">Học kỳ ${semData.semester}</div>
                <div class="section-meta">
                  Bắt buộc: <span class="bold-text">${semData.mandatoryCredits} tín chỉ</span>
                  • Tự chọn: <span class="bold-text">${semData.electiveCredits} tín chỉ</span>
                </div>
              </div>
            </div>
            <div class="section-icon ${rotatedClass}">
              <i class="fas fa-chevron-up"></i>
            </div>
          </div>
          <div class="section-contents ${activeClass}">
            ${mandatoryHTML}
            ${electiveHTML}
          </div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = semestersHTML;
}

function switchView(view) {
  currentView = view;

  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));

  if (view === "semester") {
    document.querySelector(".tab-btn:first-child")?.classList.add("active");
    renderSemesterView();
  } else {
    document.querySelector(".tab-btn:last-child")?.classList.add("active");
    renderKnowledgeBlockView();
  }

  setTimeout(attachTooltipListeners, 100);
}

let tooltipElement = null;
let tooltipTimeout = null;

function createTooltipElement() {
  if (!tooltipElement) {
    tooltipElement = document.createElement("div");
    tooltipElement.className = "custom-tooltip";
    document.body.appendChild(tooltipElement);
  }
  return tooltipElement;
}

function showTooltip(event, tooltipData) {
  if (tooltipTimeout) {
    clearTimeout(tooltipTimeout);
    tooltipTimeout = null;
  }

  const tooltip = createTooltipElement();
  const prerequisites = Array.isArray(tooltipData)
    ? tooltipData
    : [tooltipData];

  const allCompleted = prerequisites.every((p) => p.completed);
  const uncompletedCourses = prerequisites
    .filter((p) => !p.completed)
    .map((p) => p.courseName);

  const tooltipFrames = prerequisites
    .map((prereq) => {
      const statusClass = prereq.completed ? "completed" : "not-completed";
      const statusText = prereq.completed ? "Đã học" : "Chưa học";
      const statusIcon = prereq.completed
        ? '<i class="fa-solid fa-circle-check" style="color: #22C55E"></i>'
        : '<i class="fa-solid fa-circle-xmark" style="color: #EA5455"></i>';
      const requiredText = prereq.completed
        ? "Đã hoàn thành chương trình"
        : "Môn phải học tiên quyết";

      return `
        <div class="tooltip-frame">
          <div>${statusIcon}</div>
          <div class="tooltip-body">
            <div class="tooltip-content">${prereq.courseName}</div>
            <div class="tooltip-require">Yêu cầu: <i>${requiredText}</i></div>
          </div>
          <div class="tooltip-status ${statusClass}">${statusText}</div>
        </div>
      `;
    })
    .join("");

  const remindText = allCompleted
    ? "Môn học đã đủ điều kiện đăng ký."
    : `<span class='remind-text'>Bạn <span class='text-danger'>CHƯA THỂ ĐĂNG KÝ</span> môn này do chưa hoàn thành học phần tiên quyết: <b>${uncompletedCourses.join(", ")}</b>.</span>`;

  tooltip.innerHTML = `
    <div class="tooltip-title">MÔN HỌC TIÊN QUYẾT${prerequisites.length > 1 ? " (" + prerequisites.length + " môn)" : ""}</div>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      ${tooltipFrames}
    </div>
    <div class="tooltip-remind">${remindText}</div>
  `;

  const tooltipLeft = event.clientX - 22;
  tooltip.style.left = tooltipLeft + "px";
  tooltip.style.visibility = "hidden";
  tooltip.style.display = "block";

  const tooltipHeight = tooltip.offsetHeight;
  tooltip.style.top = event.clientY - tooltipHeight - 8 + "px";
  tooltip.style.visibility = "visible";

  const arrowLeft = event.clientX - tooltipLeft - 8;
  tooltip.style.setProperty("--arrow-left", arrowLeft + "px");

  tooltipTimeout = setTimeout(() => tooltip.classList.add("show"), 50);
}

function hideTooltip() {
  if (tooltipTimeout) {
    clearTimeout(tooltipTimeout);
    tooltipTimeout = null;
  }
  if (tooltipElement) tooltipElement.classList.remove("show");
}

function attachTooltipListeners() {
  document.querySelectorAll("tr[data-tooltip]").forEach((row) => {
    row.addEventListener("mouseenter", function (e) {
      const encodedData = this.getAttribute("data-tooltip");
      if (encodedData) {
        showTooltip(e, JSON.parse(decodeURIComponent(encodedData)));
      }
    });

    row.addEventListener("mousemove", function (e) {
      if (tooltipElement && tooltipElement.classList.contains("show")) {
        const tooltipLeft = e.clientX - 22;
        tooltipElement.style.left = tooltipLeft + "px";
        tooltipElement.style.top =
          e.clientY - tooltipElement.offsetHeight - 8 + "px";

        const arrowLeft = e.clientX - tooltipLeft - 8;
        tooltipElement.style.setProperty("--arrow-left", arrowLeft + "px");
      }
    });

    row.addEventListener("mouseleave", hideTooltip);
  });
}

function toggleSection(header) {
  const icon = header.querySelector(".section-icon");
  const content = header.nextElementSibling;

  document.querySelectorAll(".section-header").forEach((h) => {
    if (h !== header) {
      h.classList.remove("expanded");
      h.querySelector(".section-icon").classList.remove("rotated");
      h.nextElementSibling.classList.remove("active");
    }
  });
  header.classList.toggle("expanded");
  icon.classList.toggle("rotated");
  content.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", async function () {
  await Promise.all([loadCurriculumData(), loadSemesterCurriculumData()]);
  switchView(currentView);
  attachTooltipListeners();

  const tabBtns = document.querySelectorAll(".tab-btn");
  if (tabBtns.length >= 2) {
    tabBtns[0].addEventListener("click", () => switchView("semester"));
    tabBtns[1].addEventListener("click", () => switchView("knowledgeBlock"));
  }
});

// ...existing code...

// Copy từ process-chuong-trinh-khung.js để dùng độc lập
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
//Render tổng quan khối kiến thức
function renderKnowledgeBlocksOverview() {
  if (!knowledgeBlocksData) return;

  const container = document.getElementById("knowledgeBlocksContainer");
  if (!container) return;

  const circumference = Math.round(2 * Math.PI * 50);

  container.innerHTML = knowledgeBlocksData
    .map((block) => {
      const sem = {
        completedCredits: block.completedCredits || 0,
        currentCredits: block.currentCredits || 0,
        totalCredits: block.totalCredits || 0,
        status: block.status || "",
        progress:
          block.totalCredits > 0
            ? Math.round(
                ((block.completedCredits + (block.currentCredits || 0)) /
                  block.totalCredits) *
                  100,
              )
            : 0,
      };

      const { circleClass, completedPercent, currentPercent, totalPercent } =
        getCircleStyles(sem);

      const progressBar = buildProgressBarHTML(
        completedPercent,
        currentPercent,
        totalPercent,
      );
      console.log("Test: ", progressBar);
      const displayPercent = Math.round(totalPercent);

      const completedDash = Math.round(
        (completedPercent / 100) * circumference,
      );
      const currentDash = Math.round((currentPercent / 100) * circumference);

      let strokeCompleted = "transparent";
      let strokeCurrent = "transparent";

      if (circleClass === "completed") {
        strokeCompleted = "#28a745";
      } else if (circleClass === "active" || circleClass === "partial-yellow") {
        strokeCurrent = "#ffb800";
      } else if (circleClass === "partial-mixed") {
        strokeCompleted = "#28a745";
        strokeCurrent = "#ffb800";
      } else if (circleClass === "partial-green") {
        strokeCompleted = "#28a745";
      }

      const displayCredits = `${sem.completedCredits + sem.currentCredits}/${sem.totalCredits}`;

      return `
        <div class="knowledge-block">
          <div class="circle-progress">
            <svg viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#e9ecef" stroke-width="8"/>
              ${
                strokeCompleted !== "transparent"
                  ? `<circle cx="60" cy="60" r="50" fill="none"
                  stroke="${strokeCompleted}"
                  stroke-width="8"
                  stroke-dasharray="${completedDash} ${circumference}"
                  stroke-dashoffset="0"/>`
                  : ""
              }
              <!-- Phần current (vàng), bắt đầu sau phần completed -->
              ${
                strokeCurrent !== "transparent"
                  ? `<circle cx="60" cy="60" r="50" fill="none"
                  stroke="${strokeCurrent}"
                  stroke-width="8"
                  stroke-dasharray="${currentDash} ${circumference}"
                  stroke-dashoffset="-${completedDash}"/>`
                  : ""
              }
            </svg>
            <div class="circle-text ${circleClass}">${block.code}</div>
          </div>
          <div class="block-title">${block.name}</div>
          <div class="block-code">${displayCredits} tín chỉ</div>
            <div class="timeline-progress">
                <div class="timeline-progress-bar">
                ${progressBar.html}
                <div class="timeline-progress-text ${progressBar.textClass}">${displayPercent}%</div>
                </div>
            </div>
        </div>
      `;
    })
    .join("");
}
