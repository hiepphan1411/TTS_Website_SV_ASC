const curriculumData = {
    // Khối kiến thức giáo dục chuyên nghiệp
    professionalEducation: {
        mandatory: [
            {
                stt: 1,
                semester: 1,
                knowledgeBlock: 'GDCN',
                courseName: 'Nhập môn lập trình',
                courseCode: 'COMP101',
                prerequisite: '-',
                equivalent: '-',
                replacement: '-',
                credits: 4,
                theoryHours: 45,
                practiceHours: 30,
                completed: true,
            },
            {
                stt: 2,
                semester: 1,
                knowledgeBlock: 'GDCN',
                courseName: 'Toán rời rạc',
                courseCode: 'MATH201',
                prerequisite: '-',
                equivalent: '-',
                replacement: '-',
                credits: 3,
                theoryHours: 45,
                practiceHours: 0,
                completed: true,
            },
            {
                stt: 3,
                semester: 2,
                knowledgeBlock: 'GDCN',
                courseName: 'Cấu trúc dữ liệu và giải thuật',
                courseCode: 'COMP201',
                prerequisite: 'COMP101 (b)',
                equivalent: '-',
                replacement: '-',
                credits: 4,
                theoryHours: 45,
                practiceHours: 30,
                completed: true,
            },
            {
                stt: 4,
                semester: 2,
                knowledgeBlock: 'GDCN',
                courseName: 'Lập trình hướng đối tượng',
                courseCode: 'COMP202',
                prerequisite: 'COMP101 (b)',
                equivalent: '-',
                replacement: '-',
                credits: 4,
                theoryHours: 45,
                practiceHours: 30,
                completed: true,
            },
            {
                stt: 5,
                semester: 3,
                knowledgeBlock: 'GDCN',
                courseName: 'Cơ sở dữ liệu',
                courseCode: 'COMP301',
                prerequisite: 'COMP201 (b)',
                equivalent: '-',
                replacement: '-',
                credits: 4,
                theoryHours: 45,
                practiceHours: 30,
                completed: false,
            },
            {
                stt: 6,
                semester: 3,
                knowledgeBlock: 'GDCN',
                courseName: 'Mạng máy tính',
                courseCode: 'COMP302',
                prerequisite: '-',
                equivalent: '-',
                replacement: '-',
                credits: 3,
                theoryHours: 45,
                practiceHours: 0,
                completed: false,
            },
            {
                stt: 7,
                semester: 4,
                knowledgeBlock: 'GDCN',
                courseName: 'Công nghệ phần mềm',
                courseCode: 'COMP401',
                prerequisite: 'COMP202 (b)',
                equivalent: '-',
                replacement: '-',
                credits: 3,
                theoryHours: 45,
                practiceHours: 0,
                completed: false,
            },
            {
                stt: 8,
                semester: 4,
                knowledgeBlock: 'GDCN',
                courseName: 'Phát triển ứng dụng Web',
                courseCode: 'COMP402',
                prerequisite: 'COMP301 (b)',
                equivalent: '-',
                replacement: '-',
                credits: 4,
                theoryHours: 45,
                practiceHours: 30,
                completed: false,
            },
        ],
        elective: {
            block1: [
                {
                    stt: 1,
                    semester: 5,
                    knowledgeBlock: 'GDCN',
                    courseName: 'Trí tuệ nhân tạo',
                    courseCode: 'COMP501',
                    prerequisite: 'COMP201 (b)',
                    equivalent: '-',
                    replacement: '-',
                    credits: 3,
                    theoryHours: 45,
                    practiceHours: 0,
                    completed: false,
                },
                {
                    stt: 2,
                    semester: 5,
                    knowledgeBlock: 'GDCN',
                    courseName: 'Học máy',
                    courseCode: 'COMP502',
                    prerequisite: 'COMP501 (b)',
                    equivalent: '-',
                    replacement: '-',
                    credits: 3,
                    theoryHours: 30,
                    practiceHours: 30,
                    completed: false,
                },
                {
                    stt: 3,
                    semester: 6,
                    knowledgeBlock: 'GDCN',
                    courseName: 'Xử lý ảnh số',
                    courseCode: 'COMP601',
                    prerequisite: 'COMP501 (b)',
                    equivalent: '-',
                    replacement: '-',
                    credits: 3,
                    theoryHours: 30,
                    practiceHours: 30,
                    completed: false,
                },
            ],
            block2: [
                {
                    stt: 1,
                    semester: 5,
                    knowledgeBlock: 'GDCN',
                    courseName: 'An toàn và bảo mật hệ thống',
                    courseCode: 'COMP503',
                    prerequisite: 'COMP302 (b)',
                    equivalent: '-',
                    replacement: '-',
                    credits: 3,
                    theoryHours: 45,
                    practiceHours: 0,
                    completed: false,
                },
                {
                    stt: 2,
                    semester: 6,
                    knowledgeBlock: 'GDCN',
                    courseName: 'Điện toán đám mây',
                    courseCode: 'COMP602',
                    prerequisite: 'COMP302 (b)',
                    equivalent: '-',
                    replacement: '-',
                    credits: 3,
                    theoryHours: 30,
                    practiceHours: 30,
                    completed: false,
                },
                {
                    stt: 3,
                    semester: 6,
                    knowledgeBlock: 'GDCN',
                    courseName: 'Phát triển ứng dụng di động',
                    courseCode: 'COMP603',
                    prerequisite: 'COMP202 (b)',
                    equivalent: '-',
                    replacement: '-',
                    credits: 4,
                    theoryHours: 45,
                    practiceHours: 30,
                    completed: false,
                },
            ],
        },
    },
};

function isPrerequisiteCompleted(prerequisiteStr) {
    if (!prerequisiteStr || prerequisiteStr === '-') return true;

    //"COMP101 (b), COMP201 (b)" -> ["COMP101", "COMP201"]
    // Support both formats: 6 digits (000093) or 4 letters + 3 digits (COMP101)
    const matches = prerequisiteStr.match(/([A-Z]{4}\d{3}|\d{6})/g);
    if (!matches || matches.length === 0) return true;

    const allCourses = [
        ...curriculumData.professionalEducation.mandatory,
        ...curriculumData.professionalEducation.elective.block1,
        ...curriculumData.professionalEducation.elective.block2,
    ];

    return matches.every((prereqCode) => {
        const prereqCourse = allCourses.find(
            (c) => c.courseCode === prereqCode,
        );
        return prereqCourse ? prereqCourse.completed : true;
    });
}

function getPrerequisiteTooltip(prerequisiteStr) {
    if (!prerequisiteStr || prerequisiteStr === '-') return null;

    //"COMP101 (b), COMP201 (b)" -> ["COMP101", "COMP201"]
    // Support both formats: 6 digits (000093) or 4 letters + 3 digits (COMP101)
    const matches = prerequisiteStr.match(/([A-Z]{4}\d{3}|\d{6})/g);
    if (!matches || matches.length === 0) return null;

    const allCourses = [
        ...curriculumData.professionalEducation.mandatory,
        ...curriculumData.professionalEducation.elective.block1,
        ...curriculumData.professionalEducation.elective.block2,
    ];

    const prerequisites = matches
        .map((prereqCode) => {
            const prereqCourse = allCourses.find(
                (c) => c.courseCode === prereqCode,
            );
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

function createTableRow(course, viewMode = 'knowledgeBlock') {
    const isLocked = !isPrerequisiteCompleted(course.prerequisite);
    const lockedClass = isLocked ? ' class="row-locked"' : '';
    const bgStyle = course.completed
        ? ' style="background-color: #F4FFF5 !important;"'
        : '';
    const tooltipData = getPrerequisiteTooltip(course.prerequisite);
    const dataTooltip = tooltipData
        ? ` data-tooltip="${encodeURIComponent(JSON.stringify(tooltipData))}"`
        : '';

    if (viewMode === 'semester') {
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
let currentView = 'semester'; // "semester" / "knowledgeBlock"

//Khối kiến thức
function renderKnowledgeBlockView() {
    const container = document.getElementById('expandableSections');
    const timelineSection = document
        .querySelector('.timeline-section')
        ?.closest('.content-wrapper');
    const knowledgeSection = document
        .querySelector('.knowledge-block-overview')
        ?.closest('.content-wrapper');

    if (timelineSection) {
        timelineSection.style.display = 'none';
        knowledgeSection.style.display = 'block';
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
      <div class="section-content">
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
              ${curriculumData.professionalEducation.mandatory.map((course) => createTableRow(course, 'knowledgeBlock')).join('')}
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
                  <th>STT</th>
                  <th>HỌC KỲ</th>
                  <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                  <th>MÃ HP</th>
                  <th>HỌC PHẦN</th>
                  <th>HP TƯƠNG ĐƯƠNG</th>
                  <th>HP THAY THẾ</th>
                  <th>SỐ TC</th>
                  <th>SỐ TIẾT LÝ</th>
                  <th>SỐ TIẾT THI</th>
                  <th>ĐẠT</th>
                </tr>
              </thead>
              <tbody>
                ${curriculumData.professionalEducation.elective.block1.map((course) => createTableRow(course, 'knowledgeBlock')).join('')}
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
                  <th>STT</th>
                  <th>HỌC KỲ</th>
                  <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                  <th>MÃ HP</th>
                  <th>HỌC PHẦN</th>
                  <th>HP TƯƠNG ĐƯƠNG</th>
                  <th>HP THAY THẾ</th>
                  <th>SỐ TC</th>
                  <th>SỐ TIẾT LÝ</th>
                  <th>SỐ TIẾT THI</th>
                  <th>ĐẠT</th>
                </tr>
              </thead>
              <tbody>
                ${curriculumData.professionalEducation.elective.block2.map((course) => createTableRow(course, 'knowledgeBlock')).join('')}
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
      <div class="section-content active">
        <div class="subtitle-header">Học phần bắt buộc</div>
        <div class="table-frame">
          <table class="table mandatory-courses-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>HỌC KỲ</th>
                <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                <th>MÃ HP</th>
                <th>HỌC PHẦN</th>
                <th>HP TƯƠNG ĐƯƠNG</th>
                <th>HP THAY THẾ</th>
                <th>SỐ TC</th>
                <th>SỐ TIẾT LÝ</th>
                <th>SỐ TIẾT THI</th>
                <th>ĐẠT</th>
              </tr>
            </thead>
            <tbody>
              ${curriculumData.professionalEducation.mandatory.map((course) => createTableRow(course, 'knowledgeBlock')).join('')}
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
                  <th>STT</th>
                  <th>HỌC KỲ</th>
                  <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                  <th>MÃ HP</th>
                  <th>HỌC PHẦN</th>
                  <th>HP TƯƠNG ĐƯƠNG</th>
                  <th>HP THAY THẾ</th>
                  <th>SỐ TC</th>
                  <th>SỐ TIẾT LÝ</th>
                  <th>SỐ TIẾT THI</th>
                  <th>ĐẠT</th>
                </tr>
              </thead>
              <tbody>
                ${curriculumData.professionalEducation.elective.block1.map((course) => createTableRow(course, 'knowledgeBlock')).join('')}
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
                  <th>STT</th>
                  <th>HỌC KỲ</th>
                  <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                  <th>MÃ HP</th>
                  <th>HỌC PHẦN</th>
                  <th>HP TƯƠNG ĐƯƠNG</th>
                  <th>HP THAY THẾ</th>
                  <th>SỐ TC</th>
                  <th>SỐ TIẾT LÝ</th>
                  <th>SỐ TIẾT THI</th>
                  <th>ĐẠT</th>
                </tr>
              </thead>
              <tbody>
                ${curriculumData.professionalEducation.elective.block2.map((course) => createTableRow(course, 'knowledgeBlock')).join('')}
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
      <div class="section-content">
        <div class="subtitle-header">Học phần bắt buộc</div>
        <div class="table-frame">
          <table class="table mandatory-courses-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>HỌC KỲ</th>
                <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                <th>MÃ HP</th>
                <th>HỌC PHẦN</th>
                <th>HP TƯƠNG ĐƯƠNG</th>
                <th>HP THAY THẾ</th>
                <th>SỐ TC</th>
                <th>SỐ TIẾT LÝ</th>
                <th>SỐ TIẾT THI</th>
                <th>ĐẠT</th>
              </tr>
            </thead>
            <tbody>
              ${curriculumData.professionalEducation.mandatory.map((course) => createTableRow(course, 'knowledgeBlock')).join('')}
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
                  <th>STT</th>
                  <th>HỌC KỲ</th>
                  <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                  <th>MÃ HP</th>
                  <th>HỌC PHẦN</th>
                  <th>HP TƯƠNG ĐƯƠNG</th>
                  <th>HP THAY THẾ</th>
                  <th>SỐ TC</th>
                  <th>SỐ TIẾT LÝ</th>
                  <th>SỐ TIẾT THI</th>
                  <th>ĐẠT</th>
                </tr>
              </thead>
              <tbody>
                ${curriculumData.professionalEducation.elective.block1.map((course) => createTableRow(course, 'knowledgeBlock')).join('')}
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
    const container = document.getElementById('expandableSections');
    const timelineSection = document
        .querySelector('.timeline-section')
        ?.closest('.content-wrapper');
    const knowledgeSection = document
        .querySelector('.knowledge-block-overview')
        ?.closest('.content-wrapper');

    if (timelineSection) {
        timelineSection.style.display = 'block';
        knowledgeSection.style.display = 'none';
    }

    const allCourses = [
        ...curriculumData.professionalEducation.mandatory,
        ...curriculumData.professionalEducation.elective.block1,
        ...curriculumData.professionalEducation.elective.block2,
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
            const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
            const completedCredits = courses
                .filter((c) => c.completed)
                .reduce((sum, c) => sum + c.credits, 0);

            return `
        <div class="expandable-section">
          <div class="section-header ${index === 0 ? 'expanded' : ''}" onclick="toggleSection(this)">
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
            <div class="section-icon ${index === 0 ? 'rotated' : ''}">
              <i class="fas fa-chevron-up"></i>
            </div>
          </div>
          <div class="section-content ${index === 0 ? 'active' : ''}">
            <div class="subtitle-header">Học phần bắt buộc</div>
            <div class="table-frame">
              <table class="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>KHỐI KIẾN THỨC</th>
                    <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                    <th>MÃ HP</th>
                    <th>HỌC PHẦN</th>
                    <th>HP TƯƠNG ĐƯƠNG</th>
                    <th>HP THAY THẾ</th>
                    <th>SỐ TC</th>
                    <th>SỐ TIẾT LÝ</th>
                    <th>SỐ TIẾT THI</th>
                    <th>ĐẠT</th>
                  </tr>
                </thead>
                <tbody>
                  ${courses.map((course, idx) => createTableRow({ ...course, stt: idx + 1 }, 'semester')).join('')}
                </tbody>
              </table>
            </div>

            <div class="subtitle-header">Học phần tự chọn</div>
            <div class="table-frame">
              <table class="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>KHỐI KIẾN THỨC</th>
                    <th>TÊN MÔN HỌC/HỌC PHẦN</th>
                    <th>MÃ HP</th>
                    <th>HỌC PHẦN</th>
                    <th>HP TƯƠNG ĐƯƠNG</th>
                    <th>HP THAY THẾ</th>
                    <th>SỐ TC</th>
                    <th>SỐ TIẾT LÝ</th>
                    <th>SỐ TIẾT THI</th>
                    <th>ĐẠT</th>
                  </tr>
                </thead>
                <tbody>
                  ${courses.map((course, idx) => createTableRow({ ...course, stt: idx + 1 }, 'semester')).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
        })
        .join('');

    container.innerHTML = semestersHTML;
}

//Switch view
function switchView(view) {
    currentView = view;

    document.querySelectorAll('.tab-btn').forEach((btn) => {
        btn.classList.remove('active');
    });

    if (view === 'semester') {
        document.querySelector('.tab-btn:first-child').classList.add('active');
        renderSemesterView();
    } else {
        document.querySelector('.tab-btn:last-child').classList.add('active');
        renderKnowledgeBlockView();
    }
}

// Custom Tooltip Functions
let tooltipElement = null;
let tooltipTimeout = null;

function createTooltipElement() {
    if (!tooltipElement) {
        tooltipElement = document.createElement('div');
        tooltipElement.className = 'custom-tooltip';
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
            const statusClass = prereq.completed
                ? 'completed'
                : 'not-completed';
            const statusText = prereq.completed ? 'Đã học' : 'Chưa học';
            const statusIcon = prereq.completed
                ? '<i class="fa-solid fa-circle-check" style="color: #22C55E"></i>'
                : '<i class="fa-solid fa-circle-xmark" style="color: #EA5455"></i>';
            const requiredText = prereq.completed
                ? 'Đã hoàn thành chương trình'
                : 'Môn phải học tiên quyết';

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
        .join('');

    const remindText = allCompleted
        ? 'Môn học đã đủ điều kiện đăng ký.'
        : `<span class='remind-text'>Bạn <span class='text-danger'>CHƯA THỂ ĐĂNG KÝ</span> môn này do chưa hoàn thành học phần tiên quyết: <b>${uncompletedCourses.join(', ')}</b>.</span>`;

    tooltip.innerHTML = `
    <div class="tooltip-title">MÔN HỌC TIÊN QUYẾT${prerequisites.length > 1 ? ' (' + prerequisites.length + ' môn)' : ''}</div>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      ${tooltipFrames}
    </div>
    <div class="tooltip-remind">${remindText}</div>
  `;

    //Position
    const x = event.clientX;
    const y = event.clientY;

    const tooltipLeft = x - 22;
    tooltip.style.left = tooltipLeft + 'px';

    tooltip.style.visibility = 'hidden';
    tooltip.style.display = 'block';

    const tooltipHeight = tooltip.offsetHeight;
    tooltip.style.top = y - tooltipHeight - 8 + 'px';

    tooltip.style.visibility = 'visible';

    const arrowLeft = x - tooltipLeft - 8;
    tooltip.style.setProperty('--arrow-left', arrowLeft + 'px');

    tooltipTimeout = setTimeout(() => {
        tooltip.classList.add('show');
    }, 50);
}

function hideTooltip() {
    // Clear any pending show timeout
    if (tooltipTimeout) {
        clearTimeout(tooltipTimeout);
        tooltipTimeout = null;
    }

    if (tooltipElement) {
        tooltipElement.classList.remove('show');
    }
}

function attachTooltipListeners() {
    const rows = document.querySelectorAll('tr[data-tooltip]');
    rows.forEach((row) => {
        row.addEventListener('mouseenter', function (e) {
            const encodedData = this.getAttribute('data-tooltip');
            if (encodedData) {
                const tooltipData = JSON.parse(decodeURIComponent(encodedData));
                showTooltip(e, tooltipData);
            }
        });

        row.addEventListener('mousemove', function (e) {
            if (tooltipElement && tooltipElement.classList.contains('show')) {
                const tooltipLeft = e.clientX - 22;
                const tooltipHeight = tooltipElement.offsetHeight;

                tooltipElement.style.left = tooltipLeft + 'px';
                tooltipElement.style.top = e.clientY - tooltipHeight - 8 + 'px';

                const arrowLeft = e.clientX - tooltipLeft - 8;
                tooltipElement.style.setProperty(
                    '--arrow-left',
                    arrowLeft + 'px',
                );
            }
        });

        row.addEventListener('mouseleave', hideTooltip);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    switchView(currentView);
    attachTooltipListeners();

    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length >= 2) {
        tabBtns[0].addEventListener('click', () => {
            switchView('semester');
            setTimeout(attachTooltipListeners, 100);
        });
        tabBtns[1].addEventListener('click', () => {
            switchView('knowledgeBlock');
            setTimeout(attachTooltipListeners, 100);
        });
    }
});
