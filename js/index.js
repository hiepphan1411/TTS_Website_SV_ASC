document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    if (!this.classList.contains("active")) {
      this.classList.add("bg-light");
      this.style.color = "var(--primary-color)";
    }
  });
  link.addEventListener("mouseleave", function () {
    if (!this.classList.contains("active")) {
      this.classList.remove("bg-light");
      this.style.color = "";
    }
  });
});

const btnCompact = document.querySelector(".btn-compact");
const btnExpanded = document.querySelector(".btn-expanded");
const quickAccessCompact = document.querySelector(".quick-access-compact");
const quickAccessExpanded = document.querySelector(".quick-access-expanded");

btnCompact.addEventListener("click", function () {
  quickAccessCompact.classList.remove("d-none");
  quickAccessExpanded.classList.add("d-none");
  btnCompact.classList.add("active");
  btnExpanded.classList.remove("active");
});

btnExpanded.addEventListener("click", function () {
  quickAccessCompact.classList.add("d-none");
  quickAccessExpanded.classList.remove("d-none");
  btnExpanded.classList.add("active");
  btnCompact.classList.remove("active");
});
$(document).ready(function () {
  const gpaData = {
    grades: [
      "HK1 (2023-2024)",
      "HK2 (2023-2024)",
      "HK1 (2024-2025)",
      "HK2 (2024-2025)",
      "HK1 (2025-2026)",
      "HK2 (2025-2026)",
      "HK1 (2026-2027)",
      "HK2 (2026-2027)",
    ],
    yourGPA4: [2.5, 2.4, 2.7, 2.0, 3.5, 2.8, 3.2, 3.8],
    averageGPA4: [2.3, 2.7, 2.5, 2.3, 2.8, 2.7, 3.1, 3.4],
    yourGPA10: [7.5, 7.2, 7.7, 7.0, 8.5, 7.8, 8.2, 8.8],
    averageGPA10: [7.3, 7.7, 7.5, 7.3, 7.8, 7.7, 8.1, 8.4],
  };

  function buildChartData(scale) {
    const yourData = scale === "10" ? gpaData.yourGPA10 : gpaData.yourGPA4;
    const avgData = scale === "10" ? gpaData.averageGPA10 : gpaData.averageGPA4;
    const maxVal = scale === "10" ? 10 : 4;

    return {
      seriesData: [
        { name: "GPA Học kỳ", data: yourData, color: "#6366f1" },
        {
          name: "GPA Tích lũy",
          data: avgData,
          color: "#e87aa8",
          dashType: "dash",
        },
      ],
      maxVal,
    };
  }

  function createChart(scale) {
    const { seriesData, maxVal } = buildChartData(scale);

    // Destroy chart cũ trước khi tạo mới
    const existing = $("#gpaChart").data("kendoChart");
    if (existing) existing.destroy();

    $("#gpaChart").kendoChart({
      dataSource: {
        data: gpaData.grades.map((label) => ({ label })),
      },

      categoryAxis: {
        field: "label",
        labels: {
          rotation: -30,
          font: "12px Inter, sans-serif",
          color: "#6b7280",
        },
        line: { visible: false },
        majorGridLines: { visible: false },
        minorGridLines: { visible: false },
      },

      valueAxis: {
        min: 0,
        max: maxVal,
        majorUnit: scale === "10" ? 1 : 0.5,
        labels: {
          font: "12px Inter, sans-serif",
          color: "#6b7280",
          template: "#= value #",
        },
        line: { visible: false },
        majorGridLines: {
          color: "#f0f0f0",
          dashType: "dash",
          width: 1,
        },
      },

      series: [
        {
          type: "line",
          name: seriesData[0].name,
          data: seriesData[0].data,
          color: "#6366f1",
          width: 3,
          style: "smooth",
          markers: {
            visible: true,
            size: 9,
            type: "circle",
            background: "#6366f1",
            border: { color: "#fff", width: 2 },
          },
          highlight: {
            markers: {
              visible: true,
              size: 12,
              border: { color: "#6366f1", width: 2 },
              background: "#fff",
            },
          },
        },
        {
          type: "line",
          name: seriesData[1].name,
          data: seriesData[1].data,
          color: "#e87aa8",
          width: 3,
          dashType: "dash",
          style: "smooth",
          markers: {
            visible: true,
            size: 9,
            type: "circle",
            background: "#e87aa8",
            border: { color: "#fff", width: 2 },
          },
          highlight: {
            markers: {
              visible: true,
              size: 12,
              border: { color: "#e87aa8", width: 2 },
              background: "#fff",
            },
          },
        },
      ],

      legend: {
        visible: true,
        position: "top",
        align: "end",
        labels: {
          font: "13px Inter, sans-serif",
          color: "#374151",
        },
        markers: {
          type: "circle",
          width: 10,
          height: 10,
        },
      },

      tooltip: {
        visible: true,
        shared: true,
        sharedTemplate: `
    <div style="padding:10px 14px; background:\\#1f2937; border-radius:8px; color:\\#fff; font-family:Inter,sans-serif;">
      
      <div style="font-size:12px; color:\\#9ca3af; margin-bottom:6px;">
        #= category #
      </div>

      # for (var i = 0; i < points.length; i++) { #
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:3px;">
          
          <span style="
            width:10px;
            height:10px;
            border-radius:50%;
            background:#= points[i].series.color #;
            display:inline-block;
          "></span>

          <span style="font-size:13px;">
            #= points[i].series.name #:
            <b>#= kendo.toString(points[i].value, "n2") #</b>
          </span>

        </div>
      # } #

    </div>
  `,
        background: "transparent",
        border: { width: 0 },
      },

      chartArea: {
        background: "transparent",
        margin: { top: 10, bottom: 10 },
      },

      plotArea: {
        margin: { top: 20, bottom: 10, left: 10, right: 20 },
        padding: 0,
      },

      transitions: true,
    });
  }

  createChart("4");

  $("#gradesSelect").on("change", function () {
    createChart($(this).val());
  });
});

// Lớp học phần theo kỳ
$(document).ready(function () {
  const courseData = {
    "HK1 (2025-2026)": [
      {
        name: "Kiến trúc và Thiết kế Phần mềm",
        code: "420300154901",
        credits: 4,
        teacher: "ThS. Nguyễn Văn A",
        theory: { done: 8, total: 15 },
        practice: { done: 6, total: 12 },
      },
      {
        name: "Công nghệ mới trong phát triển ứng dụng",
        code: "420300314705",
        credits: 3,
        teacher: "ThS. Trần Thị B",
        theory: { done: 6, total: 12 },
        practice: { done: 6, total: 12 },
      },
      {
        name: "Công nghệ mới trong phát triển ứng dụng",
        code: "420300314705",
        credits: 3,
        teacher: "ThS. Trần Thị B",
        theory: { done: 6, total: 12 },
        practice: { done: 6, total: 12 },
      },
      {
        name: "Công nghệ mới trong phát triển ứng dụng",
        code: "420300314705",
        credits: 3,
        teacher: "ThS. Trần Thị B",
        theory: { done: 6, total: 12 },
        practice: { done: 6, total: 12 },
      },
    ],
    "HK2 (2025-2026)": [
      {
        name: "Hệ thống thông tin quản lý",
        code: "420301998877",
        credits: 3,
        teacher: "TS. Lê Văn C",
        theory: { done: 5, total: 15 },
        practice: { done: 4, total: 10 },
      },
    ],
  };

  /* Render function card LHP */
  function renderCourses(semester) {
    const courses = courseData[semester] || [];
    const $list = $("#courseList");
    $list.empty();

    if (!courses.length) {
      $list.html('<p class="text-muted">Không có học phần</p>');
      return;
    }

    courses.forEach((c) => {
      const theoryPercent = (c.theory.done / c.theory.total) * 100;
      const practicePercent = (c.practice.done / c.practice.total) * 100;

      $list.append(`
                          <div class="course-item mb-3">
                              <div class="course-header d-flex mt-3">
                                  <span class="faculty-badge flex-shrink-0">LHP</span>
                              
                                  <div class="course-info w-100 ">
                                      <h6 class="course-title mb-1">${c.name}</h6>
                                  
                                      <div
                                          class="course-meta d-flex flex-wrap gap-2 small text-muted "
                                      >
                                          <span>${c.code}</span>
                                          <span class="credit-badge fw-semibold">${c.credits} TC</span>
                                          <span>${c.teacher}</span>
                                      </div>
                                  </div>
                              </div>
                            
                              <hr class="course-divider" />
                            
                              <div class="progress-section">
                                  <div class="progress-title mb-2">Tiến độ học</div>
                              
                                  <!-- Lý thuyết -->
                                  <div class="progress-row">
                                      <span>Lý thuyết</span>
                                      <span class="progress-value">
                                          ${c.theory.done}/${c.theory.total} buổi
                                      </span>
                                  </div>
                                  <div class="progress mb-2">
                                      <div
                                          class="progress-bar"
                                          style="width:${theoryPercent}%"
                                      ></div>
                                  </div>
                                
                                  <!-- Thực hành -->
                                  <div class="progress-row">
                                      <span>Thực hành</span>
                                      <span class="progress-value">
                                          ${c.practice.done}/${c.practice.total} buổi
                                      </span>
                                  </div>
                                  <div class="progress">
                                      <div
                                          class="progress-bar dark"
                                          style="width:${practicePercent}%"
                                      ></div>
                                  </div>
                              </div>
                          </div>
                        `);
    });
  }

  $("#semesterSelect").on("change", function () {
    renderCourses(this.value);
  });

  renderCourses($("#semesterSelect").val());
});

const resizeObserver = new ResizeObserver(function (entries) {
  const chart = $("#gpaChart").data("kendoChart");
  if (chart) {
    chart.resize();
  }
});

// Chỉ theo dõi container của chart
resizeObserver.observe(document.querySelector(".chart-wrapper"));
