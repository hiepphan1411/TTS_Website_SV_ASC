const curriculumData = {
  // Khối kiến thức giáo dục chuyên nghiệp
  professionalEducation: {
    mandatory: [
      {
        stt: 1,
        semester: 1,
        knowledgeBlock: "GDCN",
        courseName: "Kỹ năng tham gia giải quyết các vụ án dân sự",
        courseCode: "000093",
        prerequisite: "-",
        equivalent: "[010115]",
        replacement: "-",
        credits: 3,
        theoryHours: 30,
        practiceHours: 30,
        completed: true,
      },
      {
        stt: 2,
        semester: 1,
        knowledgeBlock: "GDCN",
        courseName: "Phương pháp điều tra xã hội học",
        courseCode: "000901",
        prerequisite: "-",
        equivalent: "[010006]",
        replacement: "-",
        credits: 1,
        theoryHours: 10,
        practiceHours: 0,
        completed: true,
      },
      {
        stt: 3,
        semester: 2,
        knowledgeBlock: "GDDC",
        courseName: "Pháp luật đại cương 1",
        courseCode: "000902",
        prerequisite: "-",
        equivalent: "[010116]",
        replacement: "-",
        credits: 2,
        theoryHours: 20,
        practiceHours: 0,
        completed: false,
      },
      {
        stt: 4,
        semester: 1,
        knowledgeBlock: "GDCN",
        courseName: "Luật Hiến pháp Việt Nam",
        courseCode: "000110",
        prerequisite: "-",
        equivalent: "-",
        replacement: "-",
        credits: 3,
        theoryHours: 45,
        practiceHours: 0,
        completed: false,
      },
    ],
    elective: {
      block1: [
        {
          stt: 1,
          semester: 1,
          knowledgeBlock: "GDCN",
          courseName: "Kỹ năng tham gia giải quyết các vụ án dân sự 1",
          courseCode: "000093",
          prerequisite: "-",
          equivalent: "[010115]",
          replacement: "-",
          credits: 3,
          theoryHours: 30,
          practiceHours: 30,
          completed: false,
        },
        {
          stt: 2,
          semester: 2,
          knowledgeBlock: "GDCN",
          courseName: "Phương pháp điều tra xã hội học 1",
          courseCode: "000901",
          prerequisite: "-",
          equivalent: "[010006]",
          replacement: "-",
          credits: 1,
          theoryHours: 10,
          practiceHours: 0,
          completed: true,
        },
        {
          stt: 3,
          semester: 2,
          knowledgeBlock: "GDDC",
          courseName: "Pháp luật đại cương 1",
          courseCode: "000902",
          prerequisite: "-",
          equivalent: "[010116]",
          replacement: "-",
          credits: 2,
          theoryHours: 20,
          practiceHours: 0,
          completed: false,
        },
        {
          stt: 4,
          semester: 1,
          knowledgeBlock: "GDCN",
          courseName: "Pháp luật về quyền con người",
          courseCode: "000121",
          prerequisite: "000901 (b)",
          equivalent: "-",
          replacement: "-",
          credits: 2,
          theoryHours: 30,
          practiceHours: 0,
          completed: false,
        },
      ],
      block2: [
        {
          stt: 1,
          semester: 3,
          knowledgeBlock: "GDCN",
          courseName: "Kỹ năng tham gia giải quyết các vụ án dân sự 2",
          courseCode: "000094",
          prerequisite: "000093 (b)",
          equivalent: "[010115]",
          replacement: "-",
          credits: 3,
          theoryHours: 30,
          practiceHours: 30,
          completed: false,
        },
        {
          stt: 2,
          semester: 3,
          knowledgeBlock: "GDCN",
          courseName: "Phương pháp điều tra xã hội học 2",
          courseCode: "000905",
          prerequisite: "000901 (b)",
          equivalent: "[010006]",
          replacement: "-",
          credits: 1,
          theoryHours: 10,
          practiceHours: 0,
          completed: false,
        },
        {
          stt: 3,
          semester: 1,
          knowledgeBlock: "GDDC",
          courseName: "Pháp luật đại cương 2",
          courseCode: "000906",
          prerequisite: "000902 (b), 000093 (b)",
          equivalent: "[010116]",
          replacement: "-",
          credits: 2,
          theoryHours: 20,
          practiceHours: 0,
          completed: false,
        },
      ],
    },
  },
};

function isPrerequisiteCompleted(prerequisiteStr) {
  if (!prerequisiteStr || prerequisiteStr === "-") return true;

  //"000902 (b), 000093 (b)" -> ["000902", "000093"]
  const matches = prerequisiteStr.match(/\d{6}/g);
  if (!matches || matches.length === 0) return true;

  const allCourses = [
    ...curriculumData.professionalEducation.mandatory,
    ...curriculumData.professionalEducation.elective.block1,
    ...curriculumData.professionalEducation.elective.block2,
  ];

  return matches.every((prereqCode) => {
    const prereqCourse = allCourses.find((c) => c.courseCode === prereqCode);
    return prereqCourse ? prereqCourse.completed : true;
  });
}

function getPrerequisiteTooltip(prerequisiteStr) {
  if (!prerequisiteStr || prerequisiteStr === "-") return null;

  //"000902 (b), 000093 (b)" -> ["000902", "000093"]
  const matches = prerequisiteStr.match(/\d{6}/g);
  if (!matches || matches.length === 0) return null;

  const allCourses = [
    ...curriculumData.professionalEducation.mandatory,
    ...curriculumData.professionalEducation.elective.block1,
    ...curriculumData.professionalEducation.elective.block2,
  ];

  const prerequisites = matches
    .map((prereqCode) => {
      const prereqCourse = allCourses.find((c) => c.courseCode === prereqCode);
      if (!prereqCourse) return null;
      return {
        courseName: prereqCourse.courseName,
        courseCode: prereqCode,
        completed: prereqCourse.completed,
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

  if (viewMode === "semester") {
    //HK
    return `
      <tr${lockedClass}${bgStyle}${dataTooltip}>
        <td class="column-center">${course.stt}</td>
        <td class="column-center">${course.knowledgeBlock}</td>
        <td>${course.courseName}</td>
        <td class="column-center">${course.courseCode}</td>
        <td class="column-center">${course.prerequisite}</td>
        <td class="column-center">${course.equivalent}</td>
        <td class="column-center">${course.replacement}</td>
        <td class="column-center">${course.credits}</td>
        <td class="column-center">${course.theoryHours}</td>
        <td class="column-center">${course.practiceHours}</td>
        <td class="column-center">${course.completed ? '<span class="checkmark">✓</span>' : '<span class="dash">-</span>'}</td>
      </tr>
    `;
  } else {
    //Khối kiến thức
    return `
      <tr${lockedClass}${bgStyle}${dataTooltip}>
        <td class="column-center">${course.stt}</td>
        <td class="column-center">${course.semester}</td>
        <td>${course.courseName}</td>
        <td class="column-center">${course.courseCode}</td>
        <td class="column-center">${course.prerequisite}</td>
        <td class="column-center">${course.equivalent}</td>
        <td class="column-center">${course.replacement}</td>
        <td class="column-center">${course.credits}</td>
        <td class="column-center">${course.theoryHours}</td>
        <td class="column-center">${course.practiceHours}</td>
        <td class="column-center">${course.completed ? '<span class="checkmark">✓</span>' : '<span class="dash">-</span>'}</td>
      </tr>
    `;
  }
}

// const VIEW = {
//   SEMESTER: "semester",
//   KNOWLEDGE: "knowledgeBlock",
// };

//View mode
let currentView = "semester"; // "semester" / "knowledgeBlock"

//Khối kiến thức
function renderKnowledgeBlockView() {
  const container = document.getElementById("expandableSections");
  const timelineSection = document
    .querySelector(".timeline-section")
    ?.closest(".content-wrapper");
  const knowledgeSection = document
    .querySelector(".knowledge-block-overview")
    ?.closest(".content-wrapper");

  if (timelineSection) {
    timelineSection.style.display = "none";
    knowledgeSection.style.display = "block";
  }

  container.innerHTML = `
    <!-- Section 1 -->
    <div class="expandable-section">
      <div class="section-header" onclick="toggleSection(this)">
        <div class="semester-title">
          <div class="semester-head-icon"></div>
          <div>
            <div class="section-header-text">
              Khối kiến thức giáo dục đại cương
            </div>
            <div class="section-meta">
              Bắt buộc:
              <span class="bold-text">12 tín chỉ</span>
              • Tự chọn:
              <span class="bold-text">6 tín chỉ</span>
            </div>
          </div>
        </div>
        <div class="section-icon">
          <i class="fas fa-chevron-up"></i>
        </div>
      </div>
      <div class="section-contents">
        <div class="subtitle-header">Học phần bắt buộc</div>
        <div class="table-frame">
          <table class="table mandatory-courses-table">
            <thead>
              <tr>
                <th class="column-center">STT</th>
                <th class="column-center">HỌC KỲ</th>
                <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                <th class="column-center">MÃ HP</th>
                <th class="column-center">HỌC PHẦN</th>
                <th class="column-center">HP TƯƠNG ĐƯƠNG</th>
                <th class="column-center">HP THAY THẾ</th>
                <th class="column-center">SỐ TC</th>
                <th class="column-center">SỐ TIẾT LÝ</th>
                <th class="column-center">SỐ TIẾT THI</th>
                <th class="column-center">ĐẠT</th>
              </tr>
            </thead>
            <tbody>
              ${curriculumData.professionalEducation.mandatory.map((course) => createTableRow(course, "knowledgeBlock")).join("")}
            </tbody>
          </table>
        </div>

        <div class="subtitle-header">Học phần tự chọn</div>
        <div class="elective-course">
          <div style="width: max-content; min-width: 100%">
            <div class="block-type">
              TỰ CHỌN KHỐI KIẾN THỨC GIÁO DỤC ĐẠI CƯƠNG 1
            </div>
            <table class="table elective-table" id="elective-block1-table">
              <thead>
                <tr>
                  <th class="column-center">STT</th>
                  <th class="column-center">HỌC KỲ</th>
                  <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                  <th class="column-center">MÃ HP</th>
                  <th class="column-center">HỌC PHẦN</th>
                  <th class="column-center">HP TƯƠNG ĐƯƠNG</th>
                  <th class="column-center">HP THAY THẾ</th>
                  <th class="column-center">SỐ TC</th>
                  <th class="column-center">SỐ TIẾT LÝ</th>
                  <th class="column-center">SỐ TIẾT THI</th>
                  <th class="column-center">ĐẠT</th>
                </tr>
              </thead>
              <tbody>
                ${curriculumData.professionalEducation.elective.block1.map((course) => createTableRow(course, "knowledgeBlock")).join("")}
              </tbody>
            </table>
          </div>

          <div style="width: max-content; min-width: 100%">
            <div class="block-type">
              TỰ CHỌN KHỐI KIẾN THỨC GIÁO DỤC ĐẠI CƯƠNG 2
            </div>
            <table class="table elective-table" id="elective-block2-table">
              <thead>
                <tr>
                  <th class="column-center">STT</th>
                  <th class="column-center">HỌC KỲ</th>
                  <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                  <th class="column-center">MÃ HP</th>
                  <th class="column-center">HỌC PHẦN</th>
                  <th class="column-center">HP TƯƠNG ĐƯƠNG</th>
                  <th class="column-center">HP THAY THẾ</th>
                  <th class="column-center">SỐ TC</th>
                  <th class="column-center">SỐ TIẾT LÝ</th>
                  <th class="column-center">SỐ TIẾT THI</th>
                  <th class="column-center">ĐẠT</th>
                </tr>
              </thead>
              <tbody>
                ${curriculumData.professionalEducation.elective.block2.map((course) => createTableRow(course, "knowledgeBlock")).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2 -->
    <div class="expandable-section">
      <div class="section-header expanded" onclick="toggleSection(this)">
        <div class="semester-title">
          <div class="semester-head-icon"></div>
          <div>
            <div class="section-header-text">
              Khối kiến thức giáo dục chuyên nghiệp
            </div>
            <div class="section-meta">
              Bắt buộc:
              <span class="bold-text">6 tín chỉ</span>
              • Tự chọn:
              <span class="bold-text">6 tín chỉ</span>
            </div>
          </div>
        </div>
        <div class="section-icon rotated">
          <i class="fas fa-chevron-up"></i>
        </div>
      </div>
      <div class="section-contents active">
        <div class="subtitle-header">Học phần bắt buộc</div>
        <div class="table-frame">
          <table class="table mandatory-courses-table">
            <thead>
              <tr>
                <th class="column-center">STT</th>
                <th class="column-center">HỌC KỲ</th>
                <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                <th class="column-center">MÃ HP</th>
                <th class="column-center">HỌC PHẦN</th>
                <th class="column-center">HP TƯƠNG ĐƯƠNG</th>
                <th class="column-center">HP THAY THẾ</th>
                <th class="column-center">SỐ TC</th>
                <th class="column-center">SỐ TIẾT LÝ</th>
                <th class="column-center">SỐ TIẾT THI</th>
                <th class="column-center">ĐẠT</th>
              </tr>
            </thead>
            <tbody>
              ${curriculumData.professionalEducation.mandatory.map((course) => createTableRow(course, "knowledgeBlock")).join("")}
            </tbody>
          </table>
        </div>

        <div class="subtitle-header">Học phần tự chọn</div>
        <div class="elective-course">
          <div style="width: max-content; min-width: 100%">
            <div class="block-type">
              TỰ CHỌN KHỐI KIẾN THỨC GIÁO DỤC CHUYÊN NGHIỆP 1
            </div>
            <table class="table elective-table" id="elective-block1-table">
              <thead>
                <tr>
                  <th class="column-center">STT</th>
                  <th class="column-center">HỌC KỲ</th>
                  <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                  <th class="column-center">MÃ HP</th>
                  <th class="column-center">HỌC PHẦN</th>
                  <th class="column-center">HP TƯƠNG ĐƯƠNG</th>
                  <th class="column-center">HP THAY THẾ</th>
                  <th class="column-center">SỐ TC</th>
                  <th class="column-center">SỐ TIẾT LÝ</th>
                  <th class="column-center">SỐ TIẾT THI</th>
                  <th class="column-center">ĐẠT</th>
                </tr>
              </thead>
              <tbody>
                ${curriculumData.professionalEducation.elective.block1.map((course) => createTableRow(course, "knowledgeBlock")).join("")}
              </tbody>
            </table>
          </div>

          <div style="width: max-content; min-width: 100%">
            <div class="block-type">
              TỰ CHỌN KHỐI KIẾN THỨC GIÁO DỤC CHUYÊN NGHIỆP 2
            </div>
            <table class="table elective-table" id="elective-block2-table">
              <thead>
                <tr>
                  <th class="column-center">STT</th>
                  <th class="column-center">HỌC KỲ</th>
                  <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                  <th class="column-center">MÃ HP</th>
                  <th class="column-center">HỌC PHẦN</th>
                  <th class="column-center">HP TƯƠNG ĐƯƠNG</th>
                  <th class="column-center">HP THAY THẾ</th>
                  <th class="column-center">SỐ TC</th>
                  <th class="column-center">SỐ TIẾT LÝ</th>
                  <th class="column-center">SỐ TIẾT THI</th>
                  <th class="column-center">ĐẠT</th>
                </tr>
              </thead>
              <tbody>
                ${curriculumData.professionalEducation.elective.block2.map((course) => createTableRow(course, "knowledgeBlock")).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3 -->
    <div class="expandable-section">
      <div class="section-header" onclick="toggleSection(this)">
        <div class="semester-title">
          <div class="semester-head-icon"></div>
          <div>
            <div class="section-header-text">
              Khối kiến thức chưa xác định
            </div>
            <div class="section-meta">
              Bắt buộc:
              <span class="bold-text">6 tín chỉ</span>
              • Tự chọn:
              <span class="bold-text">6 tín chỉ</span>
            </div>
          </div>
        </div>
        <div class="section-icon">
          <i class="fas fa-chevron-up"></i>
        </div>
      </div>
      <div class="section-contents">
        <div class="subtitle-header">Học phần bắt buộc</div>
        <div class="table-frame">
          <table class="table mandatory-courses-table">
            <thead>
              <tr>
                <th class="column-center">STT</th>
                <th class="column-center">HỌC KỲ</th>
                <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                <th class="column-center">MÃ HP</th>
                <th class="column-center">HỌC PHẦN</th>
                <th class="column-center">HP TƯƠNG ĐƯƠNG</th>
                <th class="column-center">HP THAY THẾ</th>
                <th class="column-center">SỐ TC</th>
                <th class="column-center">SỐ TIẾT LÝ</th>
                <th class="column-center">SỐ TIẾT THI</th>
                <th class="column-center">ĐẠT</th>
              </tr>
            </thead>
            <tbody>
              ${curriculumData.professionalEducation.mandatory.map((course) => createTableRow(course, "knowledgeBlock")).join("")}
            </tbody>
          </table>
        </div>

        <div class="subtitle-header">Học phần tự chọn</div>
        <div class="elective-course">
          <div style="width: max-content; min-width: 100%">
            <div class="block-type">
              TỰ CHỌN KHỐI KIẾN THỨC GIÁO DỤC ĐẠI CƯƠNG
            </div>
            <table class="table elective-table" id="elective-block1-table">
              <thead>
                <tr>
                  <th class="column-center">STT</th>
                  <th class="column-center">HỌC KỲ</th>
                  <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                  <th class="column-center">MÃ HP</th>
                  <th class="column-center">HỌC PHẦN</th>
                  <th class="column-center">HP TƯƠNG ĐƯƠNG</th>
                  <th class="column-center">HP THAY THẾ</th>
                  <th class="column-center">SỐ TC</th>
                  <th class="column-center">SỐ TIẾT LÝ</th>
                  <th class="column-center">SỐ TIẾT THI</th>
                  <th class="column-center">ĐẠT</th>
                </tr>
              </thead>
              <tbody>
                ${curriculumData.professionalEducation.elective.block1.map((course) => createTableRow(course, "knowledgeBlock")).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
}

//Học kỳ
function renderSemesterView() {
  const container = document.getElementById("expandableSections");
  const timelineSection = document
    .querySelector(".timeline-section")
    ?.closest(".content-wrapper");
  const knowledgeSection = document
    .querySelector(".knowledge-block-overview")
    ?.closest(".content-wrapper");

  if (timelineSection) {
    timelineSection.style.display = "block";
    knowledgeSection.style.display = "none";
  }

  const allCourses = [
    ...curriculumData.professionalEducation.mandatory.map((c) => ({
      ...c,
      type: "mandatory",
    })),
    ...curriculumData.professionalEducation.elective.block1.map((c) => ({
      ...c,
      type: "elective",
    })),
    ...curriculumData.professionalEducation.elective.block2.map((c) => ({
      ...c,
      type: "elective",
    })),
  ];

  //Group theo học kỳ
  const semesterGroups = {};
  allCourses.forEach((course) => {
    if (!semesterGroups[course.semester]) {
      semesterGroups[course.semester] = [];
    }
    semesterGroups[course.semester].push(course);
  });

  const semestersHTML = Object.keys(semesterGroups)
    .sort((a, b) => a - b)
    .map((semester, index) => {
      const courses = semesterGroups[semester];

      console.log("Courses: ", courses);

      const mandatoryCourses = courses.filter((c) => c.type === "mandatory");
      const electiveCourses = courses.filter((c) => c.type === "elective");

      const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
      const completedCredits = courses
        .filter((c) => c.completed)
        .reduce((sum, c) => sum + c.credits, 0);

      return `
        <div class="expandable-section">
          <div class="section-header ${index === 0 ? "expanded" : ""}" onclick="toggleSection(this)">
            <div class="semester-title">
              <div class="semester-head-icon"></div>
              <div>
                <div class="section-header-text">
                  Học kỳ ${semester}
                </div>
                <div class="section-meta">
                  Đã hoàn thành:
                  <span class="bold-text">${completedCredits} tín chỉ</span>
                  • Tổng:
                  <span class="bold-text">${totalCredits} tín chỉ</span>
                </div>
              </div>
            </div>
            <div class="section-icon ${index === 0 ? "rotated" : ""}">
              <i class="fas fa-chevron-up"></i>
            </div>
          </div>
          <div class="section-contents ${index === 0 ? "active" : ""}">
            ${
              mandatoryCourses.length > 0
                ? `
            <div class="subtitle-header">Học phần bắt buộc</div>
            <div class="table-frame">
              <table class="table">
                <thead>
                  <tr>
                    <th class="column-center">STT</th>
                    <th class="column-center">KHỐI KIẾN THỨC</th>
                    <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                    <th class="column-center">MÃ HP</th>
                    <th class="column-center">HỌC PHẦN</th>
                    <th class="column-center">HP TƯƠNG ĐƯƠNG</th>
                    <th class="column-center">HP THAY THẾ</th>
                    <th class="column-center">SỐ TC</th>
                    <th class="column-center">SỐ TIẾT LÝ</th>
                    <th class="column-center">SỐ TIẾT THI</th>
                    <th class="column-center">ĐẠT</th>
                  </tr>
                </thead>
                <tbody>
                  ${mandatoryCourses.map((course, idx) => createTableRow({ ...course, stt: idx + 1 }, "semester")).join("")}
                </tbody>
              </table>
            </div>
            `
                : ""
            }

            ${
              electiveCourses.length > 0
                ? `
            <div class="subtitle-header">Học phần tự chọn</div>
            <div class="table-frame">
              <table class="table">
                <thead>
                  <tr>
                    <th class="column-center">STT</th>
                    <th class="column-center">KHỐI KIẾN THỨC</th>
                    <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                    <th class="column-center">MÃ HP</th>
                    <th class="column-center">HỌC PHẦN</th>
                    <th class="column-center">HP TƯƠNG ĐƯƠNG</th>
                    <th class="column-center">HP THAY THẾ</th>
                    <th class="column-center">SỐ TC</th>
                    <th class="column-center">SỐ TIẾT LÝ</th>
                    <th class="column-center">SỐ TIẾT THI</th>
                    <th class="column-center">ĐẠT</th>
                  </tr>
                </thead>
                <tbody>
                  ${electiveCourses.map((course, idx) => createTableRow({ ...course, stt: idx + 1 }, "semester")).join("")}
                </tbody>
              </table>
            </div>
            `
                : ""
            }
          </div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = semestersHTML;
}

//Switch view
function switchView(view) {
  currentView = view;

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  if (view === "semester") {
    document.querySelector(".tab-btn:first-child").classList.add("active");
    renderSemesterView();
  } else {
    document.querySelector(".tab-btn:last-child").classList.add("active");
    renderKnowledgeBlockView();
  }
}

// Custom Tooltip Functions
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

  // Generate tooltip frames for each prerequisite
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
          <div>
              ${statusIcon}
          </div>
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

  //Position
  const x = event.clientX;
  const y = event.clientY;

  const tooltipLeft = x - 22;
  tooltip.style.left = tooltipLeft + "px";

  tooltip.style.visibility = "hidden";
  tooltip.style.display = "block";

  const tooltipHeight = tooltip.offsetHeight;
  tooltip.style.top = y - tooltipHeight - 8 + "px";

  tooltip.style.visibility = "visible";

  const arrowLeft = x - tooltipLeft - 8;
  tooltip.style.setProperty("--arrow-left", arrowLeft + "px");

  tooltipTimeout = setTimeout(() => {
    tooltip.classList.add("show");
  }, 50);
}

function hideTooltip() {
  // Clear any pending show timeout
  if (tooltipTimeout) {
    clearTimeout(tooltipTimeout);
    tooltipTimeout = null;
  }

  if (tooltipElement) {
    tooltipElement.classList.remove("show");
  }
}

function attachTooltipListeners() {
  const rows = document.querySelectorAll("tr[data-tooltip]");
  rows.forEach((row) => {
    row.addEventListener("mouseenter", function (e) {
      const encodedData = this.getAttribute("data-tooltip");
      if (encodedData) {
        const tooltipData = JSON.parse(decodeURIComponent(encodedData));
        showTooltip(e, tooltipData);
      }
    });

    row.addEventListener("mousemove", function (e) {
      if (tooltipElement && tooltipElement.classList.contains("show")) {
        const tooltipLeft = e.clientX - 22;
        const tooltipHeight = tooltipElement.offsetHeight;

        tooltipElement.style.left = tooltipLeft + "px";
        tooltipElement.style.top = e.clientY - tooltipHeight - 8 + "px";

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

document.addEventListener("DOMContentLoaded", function () {
  switchView(currentView);
  attachTooltipListeners();

  const tabBtns = document.querySelectorAll(".tab-btn");
  if (tabBtns.length >= 2) {
    tabBtns[0].addEventListener("click", () => {
      switchView("semester");
      setTimeout(attachTooltipListeners, 100);
    });
    tabBtns[1].addEventListener("click", () => {
      switchView("knowledgeBlock");
      setTimeout(attachTooltipListeners, 100);
    });
  }
});
