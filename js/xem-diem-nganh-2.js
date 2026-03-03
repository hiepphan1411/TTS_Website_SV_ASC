let overallInfo = null;
let academicData = [];

let gradeDistChart = null;
let gpaTrendChart = null;
let currentView = "current";
let isInitialLoad = true;
let currentFilter = "all";
let currentSelectedSemesterIndex = null;

document.addEventListener("DOMContentLoaded", async function () {
  await loadAcademicData();
  renderOverallSummary();
  renderSemesterTabs();
  renderCurrentSemester();
  populateSemesterSelect();
  initCharts();
  initGraduationModal();
  isInitialLoad = false;
});

function initGraduationModal() {
  const modalElement = document.getElementById("modalXetThuTN");
  if (modalElement) {
    modalElement.addEventListener("show.bs.modal", function () {
      populateGraduationModal();
    });
  }
}

function populateGraduationModal() {
  const graduationData = {
    stcCtk: 144,
    stcPhaiTichLuy: 144,
    stcDaHoc: 142,
    stcTichLuy: 142,
    diemTbcHe10: 8.4,
    diemTbcHe4: 3.62,
    stcKhongDat: 0,
    tyLeHocLai: "0%",
    congNo: 0,
    ghiChu:
      "<strong>- Môn chưa học/ nợ học phần:</strong><br>Nợ môn tự chọn nhóm Kiến thức chuyên ngành: Quan hệ kinh tế quốc tế, Luật tố tụng hình sự, Nghề luật và phương pháp học ngành luật, Pháp luật về quản lý Nhà nước trong lĩnh vực thương mại, Hợp đồng trong hoạt động thương mại...<br><br><strong>- STCTL:</strong> 142/144<br><strong>- TBCTL:</strong> 8,40 - 3,62<br><strong>- Công nợ học phí:</strong> 0 VNĐ",
    ketQua: "Không đạt",
  };

  document.getElementById("xetTnStcCtk").textContent =
    `${graduationData.stcCtk} / ${graduationData.stcPhaiTichLuy}`;
  document.getElementById("xetTnStcHoc").textContent =
    `${graduationData.stcDaHoc} / ${graduationData.stcTichLuy}`;
  document.getElementById("xetTnDiemHe10").textContent =
    graduationData.diemTbcHe10.toFixed(2).replace(".", ",");
  document.getElementById("xetTnDiemHe4").textContent =
    graduationData.diemTbcHe4.toFixed(2).replace(".", ",");
  document.getElementById("xetTnStcKhongDat").textContent =
    graduationData.stcKhongDat;
  document.getElementById("xetTnTyLeHocLai").textContent =
    graduationData.tyLeHocLai;
  document.getElementById("xetTnCongNo").textContent =
    graduationData.congNo === 0
      ? "0 VNĐ"
      : graduationData.congNo.toLocaleString("vi-VN") + " VNĐ";
  document.getElementById("xetTnGhiChu").innerHTML = graduationData.ghiChu;

  // Update result
  const resultElement = document.getElementById("xetTnResult");
  const resultIconElement = document.getElementById("xetTnResultIcon");
  const isPassed = graduationData.ketQua === "Đạt";

  resultElement.textContent = graduationData.ketQua;
  resultElement.className = isPassed
    ? "xet-tn-result-value pass"
    : "xet-tn-result-value fail";
  resultIconElement.className = isPassed
    ? "xet-tn-result-icon pass"
    : "xet-tn-result-icon fail";
  resultIconElement.innerHTML = isPassed
    ? '<i class="fas fa-check-circle"></i>'
    : '<i class="fas fa-times-circle"></i>';
}

async function loadAcademicData() {
  try {
    const response = await fetch("../data/diem-nganh-2.json");
    const data = await response.json();
    overallInfo = data.thongTinChung;
    academicData = data.cacHocKy;
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);

    overallInfo = {
      gpaTichLuy: 3.75,
      xepLoai: "Giỏi",
      tongTinChiHoanThanh: 142,
      tongTinChiYeuCau: 162,
      diemRenLuyen: 85,
      diemRenLuyenXepLoai: "Khá",
      diemTrungBinhHe10: 8.4,
      xepLoaiTichLuyHe10: "Giỏi",
      xepLoaiTichLuyHe10Sub: "Xuất sắc",
    };
    academicData = [];
  }
}

function renderOverallSummary() {
  if (!overallInfo) return;

  document.querySelector(".summary-card.primary .card-value").innerHTML =
    `${overallInfo.gpaTichLuy}<span class="card-scale">/4.0</span>`;
  document.querySelector(".summary-card.primary .card-badge span").textContent =
    `Xếp loại: ${overallInfo.xepLoai}`;

  document
    .querySelectorAll(".summary-card")[1]
    .querySelector(".card-value").innerHTML =
    `${overallInfo.tongTinChiHoanThanh}<span class="card-scale">/${overallInfo.tongTinChiYeuCau}</span>`;

  document
    .querySelectorAll(".summary-card")[2]
    .querySelector(".card-value").innerHTML =
    `${overallInfo.diemRenLuyen}<span class="card-scale">/100</span>`;
  document
    .querySelectorAll(".summary-card")[2]
    .querySelector(".card-sub-label").textContent =
    overallInfo.diemRenLuyenXepLoai;

  document
    .querySelectorAll(".summary-card")[3]
    .querySelector(".card-value").textContent = overallInfo.diemTrungBinhHe10;

  document
    .querySelectorAll(".summary-card")[4]
    .querySelector(".card-value").textContent = overallInfo.xepLoaiTichLuyHe10;
  document
    .querySelectorAll(".summary-card")[4]
    .querySelector(".card-sub-label").textContent =
    overallInfo.xepLoaiTichLuyHe10Sub;
}

function renderSemesterTabs() {
  const tabsContainer = document.querySelector(".semester-tabs");
  const recentSemesters = academicData.slice(-3);
  const latestSemester = academicData[academicData.length - 1];

  let html = `
    <button class="btn-view-all semester-tab" data-view="all">
      <i class="fas fa-list"></i>
      <span>Xem tất cả</span>
    </button>
  `;

  recentSemesters.forEach((semester, index) => {
    const actualIndex = academicData.length - 3 + index;
    const isActive = semester.hienTai ? "active" : "";
    const subtitle = semester.hienTai
      ? "Học kỳ hiện tại"
      : `GPA: ${semester.gpa}`;

    html += `
      <button class="semester-tab ${isActive}" data-index="${actualIndex}">
        <div class="tab-title">${semester.hocKy} (${semester.namHoc})</div>
        <div class="tab-subtitle">${subtitle}</div>
      </button>
    `;
  });

  tabsContainer.innerHTML = html;

  document.querySelectorAll(".semester-tab").forEach((tab) => {
    tab.addEventListener("click", function () {
      document
        .querySelectorAll(".semester-tab")
        .forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const view = this.getAttribute("data-view");
      const index = this.getAttribute("data-index");

      if (view === "all") {
        currentView = "all";
        renderAllSemesters();
        const latestIndex = academicData.length - 1;
        createGradeComparisonChart(latestIndex);
      } else if (index !== null) {
        currentView = "single";
        const semesterIndex = parseInt(index);
        renderSemester(semesterIndex);
        createGradeComparisonChart(semesterIndex);
      }
    });
  });
}

function resetTableStructure() {
  const tableSection = document.querySelector(".table-section");
  tableSection.innerHTML = `
    <div class="table-header">
      <h3>Bảng điểm chi tiết</h3>
      <div class="table-actions">
        <button class="action-btn active">
          <i class="fas fa-check-circle"></i>
          Tất cả
        </button>
        <button class="action-btn">
          <i class="fa-solid fa-triangle-exclamation"></i>
          Cần cải thiện
        </button>
      </div>
    </div>
    <div class="table-container">
    </div>
  `;
}

function renderCurrentSemester() {
  const latestIndex = academicData.length - 1;
  renderSemester(latestIndex);
}

function renderSemester(index) {
  const semester = academicData[index];
  currentSelectedSemesterIndex = index;
  if (document.querySelectorAll(".semester-table-wrapper").length > 0) {
    resetTableStructure();
  }

  const statsCards = document.querySelectorAll(".stat-card");
  statsCards[0].querySelector(".stat-number").textContent =
    semester.monHoc.length;
  statsCards[1].querySelector(".stat-number").textContent =
    semester.tongKet.tinChiDangKy;
  statsCards[2].querySelector(".stat-number").textContent =
    semester.tongKet.diemTrungBinhTichLuyHe4;
  statsCards[3].querySelector(".stat-number").textContent =
    semester.tongKet.diemTrungBinhHK;

  document.querySelector(".table-header h3").textContent =
    `Bảng điểm chi tiết - ${semester.hocKy} (${semester.namHoc})`;

  renderTable(semester);

  scrollToTable();
}

function renderAllSemesters() {
  const statsCards = document.querySelectorAll(".stat-card");
  const totalMonHoc = academicData.reduce((sum, s) => sum + s.monHoc.length, 0);
  statsCards[0].querySelector(".stat-number").textContent = totalMonHoc;
  statsCards[1].querySelector(".stat-number").textContent =
    overallInfo.tongTinChiHoanThanh;
  statsCards[2].querySelector(".stat-number").textContent =
    overallInfo.gpaTichLuy;
  statsCards[3].querySelector(".stat-number").textContent =
    overallInfo.diemTrungBinhHe10;

  const tableSection = document.querySelector(".table-section");
  let html = `
    <div class="table-header" style="margin-bottom: 24px;">
      <h3>Bảng điểm chi tiết - Tất cả học kỳ</h3>
      <div class="table-actions">
        <button class="action-btn active">
          <i class="fas fa-check-circle"></i>
          Tất cả
        </button>
        <button class="action-btn">
          <i class="fa-solid fa-triangle-exclamation"></i>
          Cần cải thiện
        </button>
      </div>
    </div>
  `;

  academicData.forEach((semester, semesterIndex) => {
    let hasVisibleSubjects = false;
    if (currentFilter === "all") {
      hasVisibleSubjects = true;
    } else {
      hasVisibleSubjects = semester.monHoc.some(
        (mon) => mon.diemTongKet.lan3 < 7,
      );
    }

    if (hasVisibleSubjects) {
      html += `
        <div class="semester-table-wrapper" style="margin-bottom: 32px;">
          <div style="background-color: #56A2E8; padding: 16px 24px;">
            <h4 style="color: white; margin: 0; font-size: 18px; font-weight: 600;">
              ${semester.hocKy} (${semester.namHoc})
            </h4>
          </div>
          <div class="table-container" style="border-radius: 0 0 12px 12px; margin-top: 0;">
            <table class="results-table">
              <thead>
                <tr>
                  <th rowspan="2">STT</th>
                  <th rowspan="2">Mã lớp<br />học phần</th>
                  <th rowspan="2">Tên môn học</th>
                  <th rowspan="2">Tín<br />chỉ</th>
                  <th rowspan="2">Tích cực</th>
                  <th colspan="2">Thường kỳ</th>
                  <th colspan="2">TL/BTL</th>
                  <th colspan="2">Cuối kỳ</th>
                  <th colspan="2">Điểm tổng kết</th>
                  <th rowspan="2">Thang<br />điểm 4</th>
                  <th rowspan="2">Điểm<br />chữ</th>
                  <th rowspan="2">Ghi chú</th>
                  <th rowspan="2">Đạt</th>
                </tr>
                <tr>
                  <th>BTL</th>
                  <th>1</th>
                  <th>LT Hệ số 1</th>
                  <th>Tiểu luận</th>
                  <th>Tiểu luận</th>
                  <th>1</th>
                  <th>1</th>
                  <th>2</th>
                </tr>
              </thead>
              <tbody>
      `;

      let visibleCount = 0;
      semester.monHoc.forEach((mon, index) => {
        const rowHtml = renderTableRow(mon, index + 1);
        if (rowHtml) {
          visibleCount++;
          html += rowHtml;
        }
      });

      html += renderSummaryRow(semester, 17);
      html += `
              </tbody>
            </table>
          </div>
        </div>
      `;
    }
  });

  tableSection.innerHTML = html;

  scrollToTable();
}

// Render bảng cho một học kỳ
function renderTable(semester) {
  const tableContainer = document.querySelector(".table-container");

  let html = `
    <div style="background-color: #56A2E8; padding: 16px 24px;">
      <h4 style="color: white; margin: 0; font-size: 18px; font-weight: 600;">
        ${semester.hocKy} (${semester.namHoc})
      </h4>
    </div>
    <table class="results-table">
      <thead>
        <tr>
          <th rowspan="2">STT</th>
          <th rowspan="2">Mã lớp<br />học phần</th>
          <th rowspan="2">Tên môn học</th>
          <th rowspan="2">Tín chỉ</th>
          <th rowspan="2">Tích cực</th>
          <th colspan="2">Thường kỳ</th>
          <th colspan="2">TL/BTL</th>
          <th colspan="2">Cuối kỳ</th>
          <th colspan="2">Điểm tổng kết</th>
          <th rowspan="2">Thang<br />điểm 4</th>
          <th rowspan="2">Điểm<br />chữ</th>
          <th rowspan="2">Ghi chú</th>
          <th rowspan="2">Đạt</th>
        </tr>
        <tr>
          <th>BTL</th>
          <th>1</th>
          <th>LT Hệ số 1</th>
          <th>Tiểu luận</th>
          <th>Tiểu luận</th>
          <th>1</th>
          <th>1</th>
          <th>2</th>
        </tr>
      </thead>
      <tbody>
  `;

  let visibleCount = 0;
  semester.monHoc.forEach((mon, index) => {
    const rowHtml = renderTableRow(mon, index + 1);
    if (rowHtml) {
      visibleCount++;
      html += rowHtml;
    }
  });

  // Hiển thị thông báo nếu không có môn nào
  if (visibleCount === 0) {
    html += `
      <tr>
        <td colspan="17" style="text-align: center; padding: 40px; color: #666;">
          <i class="fas fa-check-circle" style="font-size: 48px; color: #4caf50; margin-bottom: 16px;"></i>
          <p style="font-size: 16px; margin: 0;">Không có môn nào cần cải thiện</p>
        </td>
      </tr>
    `;
  }

  html += renderSummaryRow(semester, 17);
  html += `
      </tbody>
    </table>
  `;

  tableContainer.innerHTML = html;
}

function renderTableRow(mon, stt) {
  if (currentFilter === "needImprovement" && mon.diemTongKet.lan3 >= 7) {
    return "";
  }

  const getGradeBadgeClass = (diemChu) => {
    if (diemChu === "A+" || diemChu === "A") return "excellent";
    if (diemChu === "B+" || diemChu === "B") return "good";
    if (diemChu === "C+" || diemChu === "C") return "average";
    return "poor";
  };

  return `
    <tr>
      <td class="text-center">${stt}</td>
      <td class="text-center">${mon.maLopHocPhan}</td>
      <td class="subject-name">${mon.tenMonHoc}</td>
      <td class="text-center">${mon.soTinChi}</td>
      <td class="text-center">${mon.tichCuc || "-"}</td>
      <td class="text-center">${mon.thuongKy.btl || "-"}</td>
      <td class="text-center">${mon.thuongKy.lan1 || "-"}</td>
      <td class="text-center">${mon.tlBtl.ltHeSo1 || "-"}</td>
      <td class="text-center">${mon.tlBtl.tieuLuan || "-"}</td>
      <td class="text-center">${mon.cuoiKy.tieuLuan || "-"}</td>
      <td class="text-center">${mon.cuoiKy.tbThuongKy || "-"}</td>
      <td class="text-center">${mon.diemTongKet.lan1 || "-"}</td>
      <td class="text-center">${mon.diemTongKet.lan3 || "-"}</td>
      <td class="text-center">${mon.thangDiem4.toFixed(2)}</td>
      <td class="text-center">
        <span class="grade-badge ${getGradeBadgeClass(mon.diemChu)}">${mon.diemChu}</span>
      </td>
      <td class="text-center">${mon.ghiChu || "-"}</td>
      <td class="text-center">
        <span class="status-badge ${mon.dat === "Đạt" ? "passed" : "failed"}">${mon.dat}</span>
      </td>
    </tr>
  `;
}

// Render hàng tổng kết
function renderSummaryRow(semester, totalCols = 17) {
  return `
    <tr class="summary-row">
      <td colspan="${totalCols}">
        <div class="semester-summary">
          <div class="semester-summary-title">
            Tổng kết học kỳ ${semester.hocKy} (${semester.namHoc})
          </div>
          <div class="summary-stats">
            <div class="summary-stat">
              <div class="summary-stat-icon blue">
                <i class="fas fa-award"></i>
              </div>
              <div class="summary-stat-content">
                <div class="summary-stat-label">ĐIỂM TB HK</div>
                <div class="summary-stat-value">${semester.tongKet.diemTrungBinhHK}</div>
              </div>
            </div>
            <div class="summary-stat">
              <div class="summary-stat-icon blue">
                <i class="fas fa-calendar-alt"></i>
              </div>
              <div class="summary-stat-content">
                <div class="summary-stat-label">ĐTB TÍCH LŨY (HỆ 10)</div>
                <div class="summary-stat-value">${semester.tongKet.diemTrungBinhTichLuyHe10}</div>
              </div>
            </div>
            <div class="summary-stat">
              <div class="summary-stat-icon blue">
                <i class="fas fa-chart-line"></i>
              </div>
              <div class="summary-stat-content">
                <div class="summary-stat-label">ĐTB TÍCH LŨY (HỆ 4)</div>
                <div class="summary-stat-value">${semester.tongKet.diemTrungBinhTichLuyHe4}</div>
              </div>
            </div>
            <div class="summary-stat">
              <div class="summary-stat-icon blue">
                <i class="fas fa-book"></i>
              </div>
              <div class="summary-stat-content">
                <div class="summary-stat-label">TC ĐÃ ĐĂNG KÝ</div>
                <div class="summary-stat-value">${semester.tongKet.tinChiDangKy}</div>
              </div>
            </div>
            <div class="summary-stat">
              <div class="summary-stat-icon blue">
                <i class="fas fa-check-circle"></i>
              </div>
              <div class="summary-stat-content">
                <div class="summary-stat-label">TC ĐÃ TÍCH LŨY</div>
                <div class="summary-stat-value">${semester.tongKet.tinChiTichLuy}</div>
              </div>
            </div>
            <div class="summary-stat">
              <div class="summary-stat-icon blue">
                <i class="fas fa-star"></i>
              </div>
              <div class="summary-stat-content">
                <div class="summary-stat-label">XẾP LOẠI HK</div>
                <div class="summary-stat-value">${semester.tongKet.xepLoaiHK}</div>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  `;
}

function scrollToTable() {
  if (isInitialLoad) return;

  setTimeout(() => {
    const tableSection = document.querySelector(".table-section");
    if (tableSection) {
      tableSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 500);
}

function initCharts() {
  createGradeComparisonChart();
  createGpaTrendChart();
}

function populateSemesterSelect() {
  const select = document.getElementById("semesterChartSelect");
  if (!select) return;

  let html = "";
  academicData.forEach((semester, index) => {
    const isLatest = index === academicData.length - 1;
    html += `<option value="${index}" ${isLatest ? "selected" : ""}>
      ${semester.hocKy} (${semester.namHoc})
    </option>`;
  });

  select.innerHTML = html;

  select.addEventListener("change", function () {
    const selectedIndex = parseInt(this.value);
    createGradeComparisonChart(selectedIndex);
  });
}

function createGradeComparisonChart(semesterIndex = null) {
  const canvas = document.getElementById("gradeDistChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  if (gradeDistChart) {
    gradeDistChart.destroy();
  }

  if (semesterIndex === null) {
    semesterIndex =
      currentSelectedSemesterIndex !== null
        ? currentSelectedSemesterIndex
        : academicData.length - 1;
  }

  const semester = academicData[semesterIndex];

  const select = document.getElementById("semesterChartSelect");
  if (select) {
    select.value = semesterIndex;
  }

  const labels = semester.monHoc.map((mon) => {
    const maxLength = 20;
    if (mon.tenMonHoc.length > maxLength) {
      return mon.tenMonHoc.substring(0, maxLength) + "...";
    }
    return mon.tenMonHoc;
  });

  const studentGrades = semester.monHoc.map((mon) => mon.diemTongKet.lan3);

  gradeDistChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          type: "bar",
          label: "Điểm tổng kết",
          data: studentGrades,
          backgroundColor: "#56A2E8",
          borderColor: "#56A2E8",
          borderWidth: 2,
          borderRadius: 6,
          maxBarThickness: 60,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false,
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: {
            usePointStyle: true,
            padding: 15,
            font: {
              size: window.innerWidth < 768 ? 10 : 12,
              family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto",
            },
          },
        },
        tooltip: {
          enabled: true,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          titleFont: {
            size: window.innerWidth < 768 ? 11 : 13,
            weight: "bold",
          },
          bodyFont: {
            size: window.innerWidth < 768 ? 10 : 12,
          },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            title: function (context) {
              const index = context[0].dataIndex;
              return semester.monHoc[index].tenMonHoc;
            },
            label: function (context) {
              const label = context.dataset.label || "";
              const value = context.parsed.y;
              return label + ": " + value.toFixed(2);
            },
            afterLabel: function (context) {
              if (context.datasetIndex === 0) {
                const index = context.dataIndex;
                const diff = (
                  studentGrades[index] - classAverages[index]
                ).toFixed(2);
                const sign = diff >= 0 ? "+" : "";
                return `Chênh lệch: ${sign}${diff}`;
              }
              return "";
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 10,
          ticks: {
            stepSize: 1,
            font: {
              size: window.innerWidth < 768 ? 9 : 11,
            },
          },
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
          title: {
            display: true,
            text: "Điểm",
            font: {
              size: window.innerWidth < 768 ? 10 : 12,
              weight: "bold",
            },
          },
        },
        x: {
          ticks: {
            font: {
              size: window.innerWidth < 768 ? 8 : 10,
            },
            maxRotation: window.innerWidth < 768 ? 90 : 45,
            minRotation: window.innerWidth < 768 ? 90 : 45,
            autoSkip: false,
          },
          grid: {
            display: false,
          },
          title: {
            display: true,
            text: "Môn học",
            font: {
              size: window.innerWidth < 768 ? 10 : 12,
              weight: "bold",
            },
          },
        },
      },
    },
  });
}

// Tạo biểu đồ xu hướng GPA
function createGpaTrendChart() {
  const gpaCtx = document.getElementById("gpaTrendChart");
  if (!gpaCtx) return;

  const labels = academicData.map(
    (s) => `${s.hocKy}/${s.namHoc.split("-")[0].slice(-2)}`,
  );
  const gpaHocKy = academicData.map((s) => s.gpa);
  const gpaTichLuy = academicData.map((s) => s.tongKet.diemTrungBinhTichLuyHe4);

  if (gpaTrendChart) {
    gpaTrendChart.destroy();
  }

  gpaTrendChart = new Chart(gpaCtx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "GPA Học kỳ",
          data: gpaHocKy,
          borderColor: "#56A2E8",
          backgroundColor: "rgba(21, 56, 152, 0.1)",
          tension: 0.4,
          fill: true,
          pointRadius: window.innerWidth < 768 ? 4 : 6,
          pointHoverRadius: window.innerWidth < 768 ? 6 : 8,
          pointBackgroundColor: "#56A2E8",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
        },
        {
          label: "GPA Tích lũy",
          data: gpaTichLuy,
          borderColor: "#4caf50",
          backgroundColor: "rgba(76, 175, 80, 0.1)",
          tension: 0.4,
          fill: true,
          pointRadius: window.innerWidth < 768 ? 4 : 6,
          pointHoverRadius: window.innerWidth < 768 ? 6 : 8,
          pointBackgroundColor: "#4caf50",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: {
            padding: window.innerWidth < 768 ? 10 : 15,
            usePointStyle: true,
            font: {
              size: window.innerWidth < 768 ? 11 : 13,
              weight: "500",
            },
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: 12,
          titleFont: {
            size: window.innerWidth < 768 ? 12 : 14,
            weight: "bold",
          },
          bodyFont: {
            size: window.innerWidth < 768 ? 11 : 13,
          },
          callbacks: {
            title: function (context) {
              const index = context[0].dataIndex;
              const semester = academicData[index];
              return `${semester.hocKy} (${semester.namHoc})`;
            },
            label: function (context) {
              return context.dataset.label + ": " + context.parsed.y.toFixed(2);
            },
            // afterLabel: function (context) {
            //   const value = context.parsed.y;
            //   if (value >= 3.6) return "Xuất sắc";
            //   if (value >= 3.2) return "Giỏi";
            //   if (value >= 2.5) return "Khá";
            //   if (value >= 2.0) return "Trung bình";
            //   return "Yếu";
            // },
          },
        },
      },
      scales: {
        y: {
          min: 3.0,
          max: 4.0,
          ticks: {
            stepSize: 0.2,
            callback: function (value) {
              return value.toFixed(1);
            },
            font: {
              size: window.innerWidth < 768 ? 10 : 12,
            },
          },
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: window.innerWidth < 768 ? 10 : 12,
            },
          },
        },
      },
      interaction: {
        mode: "index",
        intersect: false,
      },
    },
  });
}

// Xử lý lọc bảng điểm
document.addEventListener("click", function (e) {
  const filterBtn = e.target.closest(".action-btn");
  if (filterBtn) {
    document
      .querySelectorAll(".action-btn")
      .forEach((b) => b.classList.remove("active"));
    filterBtn.classList.add("active");

    const btnText = filterBtn.textContent.trim();
    if (btnText.includes("Cần cải thiện")) {
      currentFilter = "needImprovement";
    } else {
      currentFilter = "all";
    }

    if (currentView === "all") {
      renderAllSemesters();
    } else if (typeof currentView === "number") {
      renderSemester(currentView);
    }
  }
});

// Xử lý responsive cho biểu đồ
let resizeTimer;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    if (gradeDistChart) {
      gradeDistChart.destroy();
      createGradeComparisonChart(currentSelectedSemesterIndex);
    }
    if (gpaTrendChart) {
      gpaTrendChart.destroy();
      createGpaTrendChart();
    }
  }, 250);
});
