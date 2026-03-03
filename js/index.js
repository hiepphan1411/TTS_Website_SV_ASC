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

const btnCompact = document.getElementById("btnCompact");
const btnExpanded = document.getElementById("btnExpanded");
const quickAccessCompact = document.getElementById("quickAccessCompact");
const quickAccessExpanded = document.getElementById("quickAccessExpanded");

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
  // GPA Data
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

  // Initialize chart
  const ctx = document.getElementById("gpaChart").getContext("2d");
  const chartConfig = {
    type: "line",
    data: {
      labels: gpaData.grades,
      datasets: [
        {
          label: "GPA Học kỳ",
          data: gpaData.yourGPA4,
          borderColor: "#6366f1",
          backgroundColor: "rgba(99, 102, 241, 0.1)",
          borderWidth: 3,
          fill: true, // tô vùng dưới đường
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: "#6366f1",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointHoverRadius: 7,
        },
        {
          label: "GPA tích lũy",
          data: gpaData.averageGPA4,
          borderColor: "#e87aa8",
          borderDash: [5, 5],
          backgroundColor: "rgba(232, 122, 168, 0.05)",
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: "#e87aa8",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointHoverRadius: 7,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false, // hovering over a column will show tooltip for all datasets
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          backgroundColor: "white",
          borderColor: "#e5eaf1",
          borderRadius: "12",
          borderWidth: 1,
          padding: 16,
          titleFont: { size: 14, weight: "bold" },
          bodyFont: { size: 12 },
          displayColors: true,
          titleColor: (ctx) => {
            return ctx.chart.options.scales.y.max === 10
              ? "#065f46" // hệ 10
              : "#1e3a8a"; // hệ 4
          },
          bodyColor: "#374151",
          callbacks: {
            title: function (context) {
              return context[0].label;
            },
            label: function (context) {
              return context.dataset.label + ": " + context.parsed.y.toFixed(2);
            },
            afterLabel: function (context) {
              return "";
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 4.0,
          ticks: {
            stepSize: 0.5,
            callback: function (value) {
              return value.toFixed(1);
            },
          },
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
            drawBorder: false,
          },
        },
        x: {
          grid: {
            display: true,
            color: "rgba(0, 0, 0, 0.05)",
            drawBorder: false,
          },
        },
      },
    },
  };

  const gpaChart = new Chart(ctx, chartConfig);

  // Grades dropdown handle
  $("#gradesSelect").on("change", function () {
    const selectedScale = $(this).val(); // lấy giá trị tại dropdown

    if (selectedScale === "10") {
      gpaChart.data.datasets[0].data = gpaData.yourGPA10;
      gpaChart.data.datasets[1].data = gpaData.averageGPA10;

      gpaChart.options.scales.y.max = 10;
      gpaChart.options.scales.y.ticks.stepSize = 1;
      gpaChart.options.scales.y.ticks.callback = function (value) {
        return value.toFixed(1);
      };
    } else {
      gpaChart.data.datasets[0].data = gpaData.yourGPA4;
      gpaChart.data.datasets[1].data = gpaData.averageGPA4;

      gpaChart.options.scales.y.max = 4.0;
      gpaChart.options.scales.y.ticks.stepSize = 0.5;
    }

    gpaChart.update();
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
