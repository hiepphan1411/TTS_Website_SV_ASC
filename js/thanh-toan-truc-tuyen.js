const paymentData = [
  {
    id: 1,
    type: "TN",
    name: "Học phí tốt nghiệp",
    credit: null,
    obligate: true,
    amount: 1000000,
  },
  {
    id: 2,
    type: "001549",
    name: "Kiến trúc và Thiết kế Phần mềm",
    credit: 4,
    obligate: false,
    amount: 3380000,
  },
  {
    id: 3,
    type: "003147",
    name: "Công nghệ mới trong phát triển ứng dụng CNTT",
    credit: 3,
    obligate: "Tùy chọn",
    amount: 2630000,
  },
  {
    id: 4,
    type: "003098",
    name: "Thực tập doanh nghiệp",
    credit: 5,
    obligate: false,
    amount: 3750000,
  },
  {
    id: 5,
    type: "BHYT2026",
    name: "Thu bảo hiểm y tế năm 2026",
    credit: null,
    obligate: false,
    amount: 632000,
  },
];

const paymentData2 = [
  {
    id: 1,
    code: "KT2301",
    name: "Thu đoàn phí năm học 2025 - 2026",
    type: "Lệ phí",
    qty: 1,
    price: 24000,
  },
  {
    id: 2,
    code: "KT2001",
    name: "Thu hội phí năm học 2025 - 2026",
    type: "Lệ phí",
    qty: 2,
    price: 24000,
  },
];

let currentFilter = "";

function renderPaymentTable(filterType = "") {
  const tableBody = document.getElementById("tableBody");
  if (!tableBody) return;

  const filteredData = filterType
    ? paymentData.filter((item) => item.type === filterType)
    : paymentData;

  let html = "";
  filteredData.forEach((item, index) => {
    html += `
      <tr data-code="${item.type}" data-name="${item.name}" data-amount="${item.amount}">
        <td class="text-center">${index + 1}</td>
        <td class="ps-2 fw-bold">${item.type}</td>
        <td class="ps-2">${item.name}</td>
        <td class="text-center">${item.credit ? item.credit : "-"}</td>
        <td class="text-center">
          <span class="status-badge ${item.obligate ? "required" : "optional"} ">${item.obligate ? "Bắt buộc" : "Tùy chọn"}</span>
        </td>
        <td class="text-end">
          <span class="amount">${item.amount.toLocaleString("vi-VN")}</span>
        </td>
        <td class="action-cell">
          <button class="select-btn" onclick="toggleSelect(this)">
            <i class="fas fa-arrow-right"></i>
          </button>
        </td>
      </tr>
    `;
  });

  tableBody.innerHTML = html;
}

function renderPaymentTableForService(filterType = "") {
  const tableBody = document.getElementById("serviceTableBody");
  if (!tableBody) return;

  const filteredData = filterType
    ? paymentData2.filter((item) => item.type === filterType)
    : paymentData2;

  let html = "";
  filteredData.forEach((item, index) => {
    const typeClass =
      item.type === "Lệ phí"
        ? `<span class="status-badge required">Lệ phí</span>`
        : `<span class="status-badge optional">... phí</span>`;

    const amount = item.price * item.qty;

    html += `
      <tr data-code="${item.code}" data-name="${item.name}" data-amount="${amount}">
        <td class="text-center">${index + 1}</td>
        <td class="ps-2 fw-bold">${item.code}</td>
        <td class="ps-2">${item.name}</td>
        <td class="text-center">
          ${typeClass}
        </td>
        <td class="text-center">${item.qty ? item.qty : 0}</td>
        <td class="text-end">
          <span class="amount">${item.price.toLocaleString("vi-VN")}</span>
        </td>
        <td class="text-end">
          <span class="amount">${amount.toLocaleString("vi-VN")}</span>
        </td>
        <td class="action-cell">
          <button class="select-btn" onclick="toggleSelect(this)">
            <i class="fas fa-arrow-right"></i>
          </button>
        </td>
      </tr>
    `;
  });

  tableBody.innerHTML = html;
}

function toggleSelect(button) {
  const row = button.closest("tr");
  const isSelected = row.classList.contains("selected");

  if (isSelected) {
    row.classList.remove("selected");
    button.classList.remove("selected");
    button.innerHTML = '<i class="fas fa-arrow-right"></i>';
  } else {
    row.classList.add("selected");
    button.classList.add("selected");
    button.innerHTML = '<i class="fas fa-check"></i>';
  }

  updateSelectedItems();
}

function updateSelectedItems() {
  const selectedRows = document.querySelectorAll("tbody tr.selected");
  const allRows = document.querySelectorAll("tbody tr");
  const selectedItemsList = document.getElementById("selectedItemsList");
  const selectedCount = document.getElementById("selectedCount");
  const selectedItemsTotal = document.getElementById("selectedItemsTotal");
  const selectedTotalAmount = document.getElementById("selectedTotalAmount");
  const selectAllBtn = document.querySelector(".select-all-btn");

  selectedCount.textContent = selectedRows.length;
  selectedItemsList.innerHTML = "";

  if (selectedRows.length === allRows.length && allRows.length > 0) {
    selectAllBtn.disabled = true;
    selectAllBtn.classList.add("btn-disabled");
    selectAllBtn.innerHTML = "Chọn tất cả";
  } else {
    selectAllBtn.disabled = false;
    selectAllBtn.classList.remove("btn-disabled");
    selectAllBtn.innerHTML = "Chọn tất cả";
  }

  let total = 0;

  if (selectedRows.length === 0) {
    selectedItemsList.innerHTML = `
            <div class="empty-selection">
              <i class="fas fa-shopping-cart"></i>
              <div>Chưa chọn khoản nào</div>
            </div>
          `;
    document.getElementById("paymentBtn").disabled = true;
    selectedItemsTotal.style.display = "none";
  } else {
    document.getElementById("paymentBtn").disabled = false;
    selectedItemsTotal.style.display = "flex";

    selectedRows.forEach((row) => {
      const amount = parseInt(row.dataset.amount);
      const code = row.dataset.code;
      const name = row.dataset.name;

      total += amount;

      const itemHtml = `
              <div class="selected-item" data-code="${code}">
                <div class="selected-item-info">
                  <div class="selected-item-name">${name}</div>
                  <div class="selected-item-code">Mã: ${code}</div>
                </div>
                <div class="selected-item-amount">${amount.toLocaleString("vi-VN")}₫</div>
                <button class="remove-item-btn" onclick="removeSelectedItem('${code}')">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            `;

      selectedItemsList.innerHTML += itemHtml;
    });

    selectedTotalAmount.textContent = `${total.toLocaleString("vi-VN")}₫`;
  }

  return total;
}

function removeSelectedItem(code) {
  const row = document.querySelector(`tbody tr[data-code="${code}"]`);
  if (row) {
    const button = row.querySelector(".select-btn");
    toggleSelect(button);
  }
}

function selectAllItems() {
  const allRows = document.querySelectorAll("tbody tr");
  const allSelected = Array.from(allRows).every((row) =>
    row.classList.contains("selected"),
  );

  allRows.forEach((row) => {
    const button = row.querySelector(".select-btn");
    const isSelected = row.classList.contains("selected");

    if (allSelected) {
      if (isSelected) {
        row.classList.remove("selected");
        button.classList.remove("selected");
        button.innerHTML = '<i class="fas fa-arrow-right"></i>';
      }
    } else {
      if (!isSelected) {
        row.classList.add("selected");
        button.classList.add("selected");
        button.innerHTML = '<i class="fas fa-check"></i>';
      }
    }
  });

  updateSelectedItems();
}

function discardAllItems() {
  const allRows = document.querySelectorAll("tbody tr");

  allRows.forEach((row) => {
    const button = row.querySelector(".select-btn");

    row.classList.remove("selected");
    button.classList.remove("selected");
    button.innerHTML = '<i class="fas fa-arrow-right"></i>';
  });

  updateSelectedItems();
}

function calculateTotal() {
  let total = 0;
  document.querySelectorAll("tbody tr.selected").forEach((row) => {
    total += parseInt(row.dataset.amount);
  });
  return total;
}

document.addEventListener("DOMContentLoaded", function () {
  renderPaymentTable();
  renderPaymentTableForService();

  document.querySelectorAll("tbody tr.selected").forEach((row) => {
    row.classList.remove("selected");
    const button = row.querySelector(".select-btn");
    if (button) {
      button.classList.remove("selected");
      button.innerHTML = 'Chọn <i class="fas fa-arrow-right"></i>';
    }
  });

  updateSelectedItems();
});

document.querySelectorAll(".method-option").forEach((option) => {
  option.addEventListener("click", function () {
    document.querySelectorAll(".method-option").forEach((opt) => {
      opt.classList.remove("selected");
    });
    this.classList.add("selected");
    this.querySelector('input[type="radio"]').checked = true;

    const method = this.dataset.method;
    const btnText = {
      vietqr: '<i class="fas fa-qrcode"></i> Thanh toán QR-Code',
    };
    document.getElementById("paymentBtn").innerHTML = btnText[method];
  });
});

function closeModal() {
  document.getElementById("qrModal").classList.remove("active");
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Đã sao chép: " + text);
  });
}

let countdownInterval;
function startCountdown() {
  let minutes = 30;
  let seconds = 0;

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(countdownInterval);
        alert("Giao dịch đã hết hạn!");
        closeModal();
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("paymentBtn");
  if (this.disabled) {
    e.preventDefault();
    return;
  }
  if (!btn) return;

  btn.addEventListener("click", function () {
    const total = calculateTotal();

    const totalPaymentElement = document.getElementById("totalPayment");
    if (totalPaymentElement) {
      totalPaymentElement.textContent = `${total.toLocaleString("vi-VN")} VNĐ`;
    }

    startCountdown();
  });
});
