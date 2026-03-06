const paymentData = [
  {
    id: 1,
    type: "room_fee",
    name: "Tiền phòng",
    coSo: "Cơ sở 1",
    dayNha: "Dãy A",
    tang: "Tầng 2",
    phong: "A201",
    giuong: "G01",
    thang: "01",
    nam: "2026",
    amount: 200000,
  },
  {
    id: 2,
    type: "room_fee",
    name: "Tiền phòng",
    coSo: "Cơ sở 1",
    dayNha: "Dãy A",
    tang: "Tầng 2",
    phong: "A201",
    giuong: "G01",
    thang: "02",
    nam: "2026",
    amount: 200000,
  },
  {
    id: 3,
    type: "room_fee",
    name: "Tiền phòng",
    coSo: "Cơ sở 1",
    dayNha: "Dãy A",
    tang: "Tầng 2",
    phong: "A201",
    giuong: "G01",
    thang: "03",
    nam: "2026",
    amount: 200000,
  },
  {
    id: 4,
    type: "room_fee",
    name: "Tiền phòng",
    coSo: "Cơ sở 1",
    dayNha: "Dãy A",
    tang: "Tầng 2",
    phong: "A201",
    giuong: "G01",
    thang: "04",
    nam: "2026",
    amount: 200000,
  },
  {
    id: 5,
    type: "internet_fee",
    name: "Tiền internet",
    coSo: "Cơ sở 1",
    dayNha: "Dãy A",
    tang: "Tầng 2",
    phong: "A201",
    giuong: "G01",
    thang: "01",
    nam: "2026",
    amount: 50000,
  },
  {
    id: 6,
    type: "internet_fee",
    name: "Tiền internet",
    coSo: "Cơ sở 1",
    dayNha: "Dãy A",
    tang: "Tầng 2",
    phong: "A201",
    giuong: "G01",
    thang: "02",
    nam: "2026",
    amount: 50000,
  },
  {
    id: 7,
    type: "electricity_fee",
    name: "Tiền điện",
    coSo: "Cơ sở 1",
    dayNha: "Dãy A",
    tang: "Tầng 2",
    phong: "A201",
    giuong: "G01",
    thang: "01",
    nam: "2026",
    amount: 120000,
  },
  {
    id: 8,
    type: "water_fee",
    name: "Tiền nước",
    coSo: "Cơ sở 1",
    dayNha: "Dãy A",
    tang: "Tầng 2",
    phong: "A201",
    giuong: "G01",
    thang: "01",
    nam: "2026",
    amount: 80000,
  },
  {
    id: 9,
    type: "laundry_fee",
    name: "Tiền giặt sấy",
    coSo: "Cơ sở 1",
    dayNha: "Dãy A",
    tang: "Tầng 2",
    phong: "A201",
    giuong: "G01",
    thang: "01",
    nam: "2026",
    amount: 30000,
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
      <tr data-id="${item.id}" data-name="${item.name}" data-amount="${item.amount}" data-thang="${item.thang}" data-nam="${item.nam}">
        <td class="text-center">${index + 1}</td>
        <td class="ps-2">${item.name}</td>
        <td class="text-center">${item.coSo}</td>
        <td class="text-center">${item.dayNha}</td>
        <td class="text-center">${item.tang}</td>
        <td class="text-center">${item.phong}</td>
        <td class="text-center">${item.giuong}</td>
        <td class="text-center">${item.thang}/${item.nam}</td>
        <td class="text-end text-danger fw-bold">${item.amount.toLocaleString("vi-VN")}</td>
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
      const id = row.dataset.id;
      const thang = row.dataset.thang;
      const nam = row.dataset.nam;
      const monthYear = thang + "/" + nam;
      const name = row.dataset.name;

      total += amount;

      const itemHtml = `
              <div class="selected-item" data-id="${id}">
                <div class="selected-item-info">
                  <div class="selected-item-name">${name}</div>
                  <div class="selected-item-code">Thời gian: ${monthYear}</div>
                </div>
                <div class="selected-item-amount">${amount.toLocaleString("vi-VN")}₫</div>
                <button class="remove-item-btn" onclick="removeSelectedItem('${id}')">
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

function removeSelectedItem(id) {
  const row = document.querySelector(`tbody tr[data-id="${id}"]`);
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

  const paymentMethods = document.querySelector(".payment-methods");
  if (paymentMethods) {
    paymentMethods.scrollIntoView({ behavior: "smooth", block: "start" });
  }
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

function filterByType(type) {
  currentFilter = type;

  // Bỏ chọn tất cả trước khi lọc
  discardAllItems();

  // Render lại bảng với bộ lọc mới
  renderPaymentTable(type);
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

  document.querySelectorAll("tbody tr.selected").forEach((row) => {
    row.classList.remove("selected");
    const button = row.querySelector(".select-btn");
    if (button) {
      button.classList.remove("selected");
      button.innerHTML = "Chọn";
    }
  });

  updateSelectedItems();

  // Xử lý filter dropdown
  const filterDropdown = document.querySelector(".filter-dropdown");
  if (filterDropdown) {
    filterDropdown.addEventListener("change", function () {
      const selectedType = this.value;
      filterByType(selectedType);
    });
  }
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

  const discardBtn = document.getElementById("discardAll");
  discardBtn.addEventListener("click", function () {
    discardAllItems();
  });
});
