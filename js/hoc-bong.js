// Data JSON
const scholarshipData = {
  myApplications: [
    {
      id: 1,
      title: "Học bổng Khuyến khích học tập - Loại B",
      type: "Nội bộ",
      typeBadgeClass: "type-academic",
      status: "approved",
      statusText: "Đã duyệt",
      statusIcon: "fa-check-circle",
      semester: "HK1 2024-2025",
      amount: "2.000.000đ",
      gpa: "3.75",
      date: "15/01/2025",
      dateLabel: "Ngày duyệt",
      progressSteps: [
        {
          label: "Nộp hồ sơ",
          date: "05/01/2025",
          status: "completed",
          icon: "fa-check",
        },
        {
          label: "Xét duyệt",
          date: "10/01/2025",
          status: "completed",
          icon: "fa-file-signature",
        },
        {
          label: "Phê duyệt",
          date: "15/01/2025",
          status: "completed",
          icon: "fa-check-double",
        },
        {
          label: "Nhận học bổng",
          date: "Dự kiến: 20/01/2025",
          status: "pending",
          icon: "fa-gift",
        },
      ],
      actions: [{ text: "Xem chi tiết", modal: "applicationDetailModal" }],
    },
    {
      id: 2,
      title: "Học bổng Tài năng CNTT",
      type: "Tài trợ ngoài",
      typeBadgeClass: "type-external",
      status: "pending",
      statusText: "Đang xét duyệt",
      statusIcon: "fa-clock",
      semester: "HK2 2024-2025",
      amount: "5.000.000đ",
      gpa: "3.62",
      date: "02/02/2025",
      dateLabel: "Ngày nộp",
      progressSteps: [
        {
          label: "Nộp hồ sơ",
          date: "02/02/2025",
          status: "completed",
          icon: "fa-check",
        },
        {
          label: "Xét duyệt ban đầu",
          date: "05/02/2025",
          status: "active",
          icon: "fa-file-signature",
        },
        {
          label: "Đang phỏng vấn",
          date: "Dự kiến: 12/02/2025",
          status: "pending",
          icon: "fa-comments",
        },
        {
          label: "Công bố kết quả",
          date: "20/02/2025",
          status: "pending",
          icon: "fa-bullhorn",
        },
      ],
      actions: [
        { text: "Chỉnh sửa", modal: "editModal" },
        { text: "Xem chi tiết", modal: "applicationDetailModal" },
      ],
    },
  ],
  availableScholarships: [
    {
      id: 1,
      title: "Học bổng Khuyến khích - Loại A",
      typeBadge: "Nội bộ",
      typeBadgeClass: "type-academic",
      amount: "100% học phí",
      amountNote: "Bình quân học phí học kỳ",
      requirements: [
        { text: "Kết quả: Xuất sắc", met: true },
        { text: "Rèn luyện: Khá trở lên", met: true },
        { text: "Top 5% GPA", met: false },
        { text: ">= 15 tín chỉ/HK", met: false },
      ],
      deadline: "Tự động xét sau mỗi kỳ",
      slots: "-",
      canApply: false,
      isAutomatic: true,
    },
    {
      id: 2,
      title: "Học bổng Khuyến khích - Loại B",
      typeBadge: "Nội bộ",
      typeBadgeClass: "type-academic",
      amount: "70% học phí",
      amountNote: "Bình quân học phí học kỳ",
      requirements: [
        { text: "Kết quả: Xuất sắc", met: true },
        { text: "Rèn luyện: Khá trở lên", met: true },
        { text: "Top 5% GPA", met: false },
        { text: ">= 15 tín chỉ/HK", met: false },
      ],
      deadline: "Tự động xét sau mỗi kỳ",
      slots: "-",
      canApply: false,
      isAutomatic: true,
    },
    {
      id: 3,
      title: "Học bổng Hỗ trợ học tập",
      typeBadge: "Nội bộ",
      typeBadgeClass: "type-academic",
      amount: "1.500.000đ",
      amountNote: "Theo kết quả học tập",
      requirements: [
        { text: "GPA ≥ 2.5", met: true },
        { text: "Rèn luyện: Khá trở lên", met: true },
        { text: "Đối tượng chính sách", met: false },
      ],
      deadline: "Hạn: 10/03/2025",
      slots: "100 suất",
      canApply: true,
      isAutomatic: false,
    },
    {
      id: 4,
      title: "Học bổng Tài năng CNTT VNG",
      typeBadge: "Tài trợ ngoài",
      typeBadgeClass: "type-support",
      amount: "10.000.000đ",
      amountNote: "+ Cơ hội thực tập",
      requirements: [
        { text: "Ngành CNTT", met: true },
        { text: "GPA ≥ 3.5", met: true },
        { text: "Dự án cá nhân", met: false },
        { text: "Phỏng vấn kỹ thuật", met: false },
      ],
      deadline: "Hạn: 25/03/2025",
      slots: "10 suất",
      canApply: true,
      isAutomatic: false,
    },
  ],
};

function calculateProgressPercentage(steps) {
  const totalSteps = steps.length;
  const completedSteps = steps.filter((s) => s.status === "completed").length;
  const activeSteps = steps.filter((s) => s.status === "active").length;

  const percentage = ((completedSteps + activeSteps * 0.5) / totalSteps) * 100;
  return Math.min(Math.max(percentage, 0), 100);
}

function renderApplicationCard(app) {
  const progressPercentage = calculateProgressPercentage(app.progressSteps);

  const progressStepsTop = app.progressSteps
    .map(
      (step) => `
    <div class="progress-step ${step.status}">
      <div class="step-icon">
        <i class="fas ${step.icon}"></i>
      </div>
    </div>
  `,
    )
    .join("");

  const progressStepsBottom = app.progressSteps
    .map(
      (step) => `
    <div class="progress-step ${step.status}">
      <div class="step-label">${step.label}</div>
      <div class="step-date">${step.date}</div>
    </div>
  `,
    )
    .join("");

  const actions = app.actions
    .map(
      (action) => `
    <button
      class="btn-action"
      data-bs-toggle="modal"
      data-bs-target="#${action.modal}"
      data-app-id="${app.id}"
    >
      ${action.text}
    </button>
  `,
    )
    .join("");

  const amountClass = app.status === "pending" ? "amount-pending" : "amount";

  return `
    <div class="application-card status-${app.status}" data-app-id="${app.id}">
      <div class="application-header">
        <div class="application-title">
          <h4>${app.title}</h4>
          <span class="scholarship-type-badge ${app.typeBadgeClass}">
            ${app.type}
          </span>
        </div>
        <div class="application-status status-${app.status}-stats">
          <i class="fas ${app.statusIcon}"></i>
          ${app.statusText}
        </div>
      </div>

      <div class="progress-timeline">
        <div class="progress-steps">
          ${progressStepsTop}
        </div>
        <div class="progress-bar">
          <div class="progress-line" style="width: ${progressPercentage}%"></div>
        </div>
        <div class="progress-steps">
          ${progressStepsBottom}
        </div>
      </div>

      <div class="application-body">
        <div class="application-info-grid">
          <div class="info-item">
            <span class="info-label">Học kỳ</span>
            <span class="info-value">${app.semester}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Số tiền</span>
            <span class="info-value ${amountClass}">${app.amount}</span>
          </div>
          <div class="info-item">
            <span class="info-label">GPA</span>
            <span class="info-value">${app.gpa}</span>
          </div>
          <div class="info-item">
            <span class="info-label">${app.dateLabel}</span>
            <span class="info-value">${app.date}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Thao tác</span>
            <div class="d-flex flex-row gap-1">
              ${actions}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderScholarshipCard(scholarship) {
  const requirements = scholarship.requirements
    .map((req) => {
      if (req.met) {
        return `
      <div class="requirement-item">
        <div class="req-icon req-icon-met"><i class="fas fa-check"></i></div>
        <span>${req.text}</span>
      </div>
    `;
      } else {
        return `
      <div class="requirement-item">
        <div class="req-icon req-icon-unmet"></div>
        <span class="req-text-unmet">${req.text}</span>
      </div>
    `;
      }
    })
    .join("");

  const applyButton = scholarship.isAutomatic
    ? `<button class="btn btn-secondary btn-apply disabled" disabled>Tự động xét</button>`
    : `<button class="btn-apply" data-bs-toggle="modal" data-bs-target="#applyModal" data-scholarship-id="${scholarship.id}">Đăng ký</button>`;

  return `
    <div class="scholarship-card" data-scholarship-id="${scholarship.id}">
      <div class="scholarship-card-header">
        <h4>${scholarship.title}</h4>
        <span class="type-badge ${scholarship.typeBadgeClass}">${scholarship.typeBadge}</span>
      </div>

      <div class="scholarship-card-body">
        <div class="scholarship-amount">
          <div class="amount-value">${scholarship.amount}</div>
          <div class="amount-note">${scholarship.amountNote}</div>
        </div>

        <div class="scholarship-requirements">
          ${requirements}
        </div>

        <div class="scholarship-meta">
          <span>${scholarship.deadline}</span>
          <span>${scholarship.slots}</span>
        </div>
      </div>

      <div class="scholarship-card-footer">
        ${applyButton}
        <button class="btn-details" data-bs-toggle="modal" data-bs-target="#detailModal" data-scholarship-id="${scholarship.id}">Chi tiết</button>
      </div>
    </div>
  `;
}

function renderScholarshipTable(scholarship) {
  const requirementsCompact = scholarship.requirements
    .map((req) => {
      if (req.met) {
        return `
      <div class="requirement-compact">
        <div class="req-icon req-icon-met"><i class="fas fa-check"></i></div>
        <span>${req.text}</span>
      </div>
    `;
      } else {
        return `
      <div class="requirement-compact">
        <div class="req-icon req-icon-unmet"></div>
        <span class="req-text-unmet">${req.text}</span>
      </div>
    `;
      }
    })
    .join("");

  const applyButton = scholarship.isAutomatic
    ? `<button class="btn-table disabled" disabled>Tự động xét</button>`
    : `<button class="btn-apply" data-bs-toggle="modal" data-bs-target="#applyModal" data-scholarship-id="${scholarship.id}">Đăng ký</button>`;

  return `
    <tr data-scholarship-id="${scholarship.id}">
      <td>
        <div class="scholarship-name">${scholarship.title}</div>
        <span class="type-badge ${scholarship.typeBadgeClass}">${scholarship.typeBadge}</span>
      </td>
      <td>
        <div class="amount-highlight">${scholarship.amount}</div>
        <div style="font-size: 0.75rem; color: #6b7280;">${scholarship.amountNote}</div>
      </td>
      <td>
        <div class="requirements-compact">
          ${requirementsCompact}
        </div>
      </td>
      <td>
        <div style="font-size: 0.75rem; color: #6b7280; margin-bottom: 0.25rem;">${scholarship.deadline}</div>
        <div style="font-size: 0.75rem; color: #6b7280;">${scholarship.slots}</div>
      </td>
      <td >
        <div class="table-actions">
          ${applyButton}
          <button class="btn-table" data-bs-toggle="modal" data-bs-target="#detailModal" data-scholarship-id="${scholarship.id}">Chi tiết</button>
        </div>
      </td>
    </tr>
  `;
}

function renderApplications() {
  const container = document.querySelector(".applications-list");
  if (!container) return;

  container.innerHTML = scholarshipData.myApplications
    .map((app) => renderApplicationCard(app))
    .join("");
  updateFilterCounts();
}

function renderScholarships(viewMode = "grid") {
  const container = document.querySelector(".scholarships-grid");
  if (!container) return;

  if (viewMode === "table") {
    container.classList.add("table-view");
    const tableRows = scholarshipData.availableScholarships
      .map((s) => renderScholarshipTable(s))
      .join("");

    container.innerHTML = `
      <table class="scholarship-table">
        <thead>
          <tr>
            <th>Tên học bổng</th>
            <th>Mức học bổng</th>
            <th>Điều kiện</th>
            <th>Thông tin</th>
            <th class="text-center">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    `;
  } else {
    container.classList.remove("table-view");
    container.innerHTML = scholarshipData.availableScholarships
      .map((s) => renderScholarshipCard(s))
      .join("");
  }
}

function updateFilterCounts() {
  const total = scholarshipData.myApplications.length;
  const pending = scholarshipData.myApplications.filter(
    (a) => a.status === "pending",
  ).length;
  const approved = scholarshipData.myApplications.filter(
    (a) => a.status === "approved",
  ).length;

  document.querySelectorAll(".filter-tab").forEach((tab) => {
    const filter = tab.dataset.filter;
    if (filter === "all") {
      tab.textContent = `Tất cả (${total})`;
    } else if (filter === "pending") {
      tab.textContent = `Đang xét (${pending})`;
    } else if (filter === "approved") {
      tab.textContent = `Đã duyệt (${approved})`;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderApplications();
  renderScholarships();

  const viewToggleBtns = document.querySelectorAll(".view-toggle-btn");
  viewToggleBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      viewToggleBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const viewMode = this.dataset.view;
      renderScholarships(viewMode);
    });
  });

  const filterTabs = document.querySelectorAll(".filter-tab");
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      filterTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const filter = this.dataset.filter;
      const applications = document.querySelectorAll(".application-card");

      applications.forEach((app) => {
        if (filter === "all") {
          app.style.display = "block";
        } else if (
          filter === "pending" &&
          app.classList.contains("status-pending")
        ) {
          app.style.display = "block";
        } else if (
          filter === "approved" &&
          app.classList.contains("status-approved")
        ) {
          app.style.display = "block";
        } else {
          app.style.display = "none";
        }
      });
    });
  });

  document.addEventListener("click", function (e) {
    if (
      e.target.closest(".btn-details") &&
      (e.target.closest(".scholarship-card") ||
        e.target.closest(".scholarship-table"))
    ) {
      const element =
        e.target.closest(".scholarship-card") ||
        e.target.closest("tr[data-scholarship-id]");
      const scholarshipId = parseInt(element.dataset.scholarshipId);
      const scholarship = scholarshipData.availableScholarships.find(
        (s) => s.id === scholarshipId,
      );
      if (scholarship) {
        openDetailModal(scholarship);
      }
    }

    if (e.target.closest(".btn-apply:not(.disabled)")) {
      const card =
        e.target.closest(".scholarship-card") ||
        e.target.closest("tr[data-scholarship-id]");
      if (card) {
        const scholarshipId = parseInt(card.dataset.scholarshipId);
        openApplyModal(scholarshipId);
      }
    }

    if (e.target.closest(".application-card .btn-action")) {
      const button = e.target.closest(".btn-action");
      const appId = parseInt(button.closest(".application-card").dataset.appId);
      const app = scholarshipData.myApplications.find((a) => a.id === appId);

      if (button.textContent.includes("Xem chi tiết")) {
        openApplicationDetailModal(app);
      }
    }

    if (e.target.closest(".remove-file")) {
      e.target.closest(".uploaded-file").remove();
    }
  });

  setupFileUpload("applyFileInput", "uploadedFilesList");
  setupFileUpload("editFileInput", null);
});

function openDetailModal(scholarship) {
  document.getElementById("detailName").textContent = scholarship.title;
  document.getElementById("detailType").textContent = scholarship.typeBadge;
  document.getElementById("detailAmount").textContent =
    `${scholarship.amount} (${scholarship.amountNote})`;
  document.getElementById("detailSlots").textContent = scholarship.slots;
  document.getElementById("detailDeadline").textContent = scholarship.deadline;
  document.getElementById("detailSemester").textContent = "HK2 2024-2025";

  const reqList = document.getElementById("detailRequirements");
  reqList.innerHTML = "";
  scholarship.requirements.forEach((req) => {
    const li = document.createElement("li");
    if (req.met) {
      li.innerHTML = `<div class="req-icon req-icon-met"><i class="fas fa-check"></i></div><span>${req.text}</span>`;
    } else {
      li.innerHTML = `<div class="req-icon req-icon-unmet"></div><span class="req-text-unmet">${req.text}</span>`;
    }
    reqList.appendChild(li);
  });

  document.getElementById("detailDescription").textContent =
    "Học bổng dành cho sinh viên có thành tích học tập xuất sắc, có ý thức rèn luyện tốt. Học bổng được cấp hàng học kỳ dựa trên kết quả học tập của học kỳ trước đó. Sinh viên được nhận học bổng dưới hình thức miễn giảm học phí trực tiếp.";

  const applyBtn = document.querySelector(
    "#detailModal .modal-footer .btn-apply",
  );
  if (applyBtn) {
    applyBtn.style.display = scholarship.isAutomatic ? "none" : "";
  }
}

// function openApplyModal(scholarshipId) {
//   closeModal("detailModal");
// }

function openApplicationDetailModal(app) {
  document.getElementById("appDetailName").textContent = app.title;
  document.getElementById("appDetailType").textContent = app.type;
  document.getElementById("appDetailAmount").textContent = app.amount;
  document.getElementById("appDetailSemester").textContent = app.semester;
  document.getElementById("appDetailGPA").textContent = app.gpa;
  document.getElementById("appDetailSubmitDate").textContent = app.date;

  const statusElement = document.getElementById("appDetailStatus");
  statusElement.textContent = app.statusText;
  statusElement.className = "detail-value";
  if (app.status === "approved") {
    statusElement.style.color = "#065f46";
  } else {
    statusElement.style.color = "#92400e";
  }

  const approvalNote = document.getElementById("approvalNote");
  const pendingNote = document.getElementById("pendingNote");

  if (app.status === "approved") {
    approvalNote.style.display = "block";
    pendingNote.style.display = "none";
  } else {
    approvalNote.style.display = "none";
    pendingNote.style.display = "block";
  }
}

function setupFileUpload(inputId, listId) {
  const input = document.getElementById(inputId);
  if (!input) return;

  input.addEventListener("change", function (e) {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    if (listId) {
      const list = document.getElementById(listId);
      if (list) {
        files.forEach((file) => {
          addFileToList(file, list);
        });
      }
    }
  });
}

function addFileToList(file, list) {
  const fileDiv = document.createElement("div");
  fileDiv.className = "uploaded-file";

  const icon =
    file.type === "application/pdf"
      ? "fa-file-pdf"
      : file.type.startsWith("image/")
        ? "fa-file-image"
        : "fa-file";

  fileDiv.innerHTML = `
    <div class="uploaded-file-info">
      <i class="fas ${icon}"></i>
      <span>${file.name}</span>
    </div>
    <button type="button" class="remove-file" onclick="this.parentElement.remove()">
      <i class="fas fa-times"></i>
    </button>
  `;

  list.appendChild(fileDiv);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { scholarshipData };
}
