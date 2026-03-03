const studentsData = [
  {
    stt: 1,
    maSV: "252010120",
    hoDem: "Lê Thị Vân",
    ten: "Anh",
    ngaySinh: "05/11/2003",
    gioiTinh: "Nữ",
    diemSinhVien: "—",
    diemLopTruong: "—",
  },
  {
    stt: 2,
    maSV: "252010121",
    hoDem: "Nguyễn Văn",
    ten: "Bình",
    ngaySinh: "12/03/2003",
    gioiTinh: "Nam",
    diemSinhVien: 85,
    diemLopTruong: 80,
  },
  {
    stt: 3,
    maSV: "252010122",
    hoDem: "Trần Thị",
    ten: "Cúc",
    ngaySinh: "08/07/2003",
    gioiTinh: "Nữ",
    diemSinhVien: 92,
    diemLopTruong: 88,
  },
  {
    stt: 4,
    maSV: "252010123",
    hoDem: "Phạm Minh",
    ten: "Đức",
    ngaySinh: "22/01/2003",
    gioiTinh: "Nam",
    diemSinhVien: 78,
    diemLopTruong: 82,
  },
  {
    stt: 5,
    maSV: "252010124",
    hoDem: "Hoàng Thị",
    ten: "Hoa",
    ngaySinh: "15/09/2003",
    gioiTinh: "Nữ",
    diemSinhVien: 90,
    diemLopTruong: 85,
  },
  {
    stt: 6,
    maSV: "252010125",
    hoDem: "Võ Văn",
    ten: "Giang",
    ngaySinh: "03/12/2002",
    gioiTinh: "Nam",
    diemSinhVien: "—",
    diemLopTruong: 75,
  },
  {
    stt: 7,
    maSV: "252010126",
    hoDem: "Đặng Thị",
    ten: "Lan",
    ngaySinh: "28/04/2003",
    gioiTinh: "Nữ",
    diemSinhVien: 88,
    diemLopTruong: "—",
  },
  {
    stt: 8,
    maSV: "252010127",
    hoDem: "Lương Văn",
    ten: "Khôi",
    ngaySinh: "11/06/2003",
    gioiTinh: "Nam",
    diemSinhVien: 95,
    diemLopTruong: 90,
  },
  {
    stt: 9,
    maSV: "252010128",
    hoDem: "Bùi Thị",
    ten: "Mai",
    ngaySinh: "20/08/2003",
    gioiTinh: "Nữ",
    diemSinhVien: 87,
    diemLopTruong: 84,
  },
  {
    stt: 10,
    maSV: "252010129",
    hoDem: "Nguyễn Minh",
    ten: "Nam",
    ngaySinh: "14/02/2003",
    gioiTinh: "Nam",
    diemSinhVien: 82,
    diemLopTruong: 78,
  },
  {
    stt: 11,
    maSV: "252010130",
    hoDem: "Trần Văn",
    ten: "Ơn",
    ngaySinh: "07/10/2003",
    gioiTinh: "Nam",
    diemSinhVien: 91,
    diemLopTruong: 89,
  },
  {
    stt: 12,
    maSV: "252010131",
    hoDem: "Lý Thị",
    ten: "Phương",
    ngaySinh: "25/05/2003",
    gioiTinh: "Nữ",
    diemSinhVien: 86,
    diemLopTruong: 83,
  },
  {
    stt: 13,
    maSV: "252010132",
    hoDem: "Đỗ Văn",
    ten: "Quang",
    ngaySinh: "18/12/2002",
    gioiTinh: "Nam",
    diemSinhVien: 79,
    diemLopTruong: 81,
  },
  {
    stt: 14,
    maSV: "252010133",
    hoDem: "Vũ Thị",
    ten: "Thảo",
    ngaySinh: "09/07/2003",
    gioiTinh: "Nữ",
    diemSinhVien: 93,
    diemLopTruong: 91,
  },
  {
    stt: 15,
    maSV: "252010134",
    hoDem: "Ngô Minh",
    ten: "Tuấn",
    ngaySinh: "03/01/2003",
    gioiTinh: "Nam",
    diemSinhVien: 88,
    diemLopTruong: 85,
  },
  {
    stt: 16,
    maSV: "252010135",
    hoDem: "Phan Thị",
    ten: "Uyên",
    ngaySinh: "16/09/2003",
    gioiTinh: "Nữ",
    diemSinhVien: "—",
    diemLopTruong: 77,
  },
  {
    stt: 17,
    maSV: "252010136",
    hoDem: "Hoàng Văn",
    ten: "Vinh",
    ngaySinh: "22/04/2003",
    gioiTinh: "Nam",
    diemSinhVien: 84,
    diemLopTruong: 86,
  },
  {
    stt: 18,
    maSV: "252010137",
    hoDem: "Cao Thị",
    ten: "Xuân",
    ngaySinh: "30/11/2002",
    gioiTinh: "Nữ",
    diemSinhVien: 90,
    diemLopTruong: "—",
  },
  {
    stt: 19,
    maSV: "252010138",
    hoDem: "Lê Minh",
    ten: "Yên",
    ngaySinh: "08/06/2003",
    gioiTinh: "Nam",
    diemSinhVien: 76,
    diemLopTruong: 79,
  },
  {
    stt: 20,
    maSV: "252010139",
    hoDem: "Nguyễn Thị",
    ten: "Zoan",
    ngaySinh: "12/03/2003",
    gioiTinh: "Nữ",
    diemSinhVien: 89,
    diemLopTruong: 87,
  },
  {
    stt: 21,
    maSV: "252010140",
    hoDem: "Trịnh Văn",
    ten: "An",
    ngaySinh: "05/08/2003",
    gioiTinh: "Nam",
    diemSinhVien: 92,
    diemLopTruong: 90,
  },
  {
    stt: 22,
    maSV: "252010141",
    hoDem: "Đinh Thị",
    ten: "Bình",
    ngaySinh: "19/10/2002",
    gioiTinh: "Nữ",
    diemSinhVien: 85,
    diemLopTruong: 82,
  },
  {
    stt: 23,
    maSV: "252010142",
    hoDem: "Võ Minh",
    ten: "Cường",
    ngaySinh: "27/01/2003",
    gioiTinh: "Nam",
    diemSinhVien: 81,
    diemLopTruong: 84,
  },
  {
    stt: 24,
    maSV: "252010143",
    hoDem: "Phạm Thị",
    ten: "Diệu",
    ngaySinh: "14/07/2003",
    gioiTinh: "Nữ",
    diemSinhVien: 94,
    diemLopTruong: 93,
  },
  {
    stt: 25,
    maSV: "252010144",
    hoDem: "Đặng Văn",
    ten: "Em",
    ngaySinh: "02/12/2002",
    gioiTinh: "Nam",
    diemSinhVien: 87,
    diemLopTruong: 85,
  },
];

let currentPage = 1;
const itemsPerPage = 10;
let totalItems = studentsData.length;
let totalPages = Math.ceil(totalItems / itemsPerPage);

// phần trăm sinh viên đã có điểm
function calculatePercentages() {
  const totalStudents = studentsData.length;

  const studentsWithLT = studentsData.filter(
    (s) =>
      s.diemSinhVien !== "—" &&
      s.diemSinhVien !== undefined &&
      s.diemSinhVien !== "",
  ).length;

  const studentsWithGVCN = studentsData.filter(
    (s) =>
      s.diemLopTruong !== "—" &&
      s.diemLopTruong !== undefined &&
      s.diemLopTruong !== "",
  ).length;

  const percentLT = Math.round((studentsWithLT / totalStudents) * 100);
  const percentGVCN = Math.round((studentsWithGVCN / totalStudents) * 100);

  return { percentLT, percentGVCN };
}

function updateStatusIndicators() {
  const { percentLT, percentGVCN } = calculatePercentages();

  const ltStatus = document.querySelector(".status-lt .status-value d-hidden");
  const gvcnStatus = document.querySelector(
    ".status-gvcn .status-value d-hidden",
  );


}

// bảng sinh viên
function renderStudentTable() {
  const tableBody = document.querySelector("tbody");
  if (!tableBody) return;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = studentsData.slice(startIndex, endIndex);

  tableBody.innerHTML = currentData
    .map(
      (student) => `
        <tr>
            <td>${student.stt}</td>
            <td>${student.maSV}</td>
            <td>${student.hoDem}</td>
            <td>${student.ten}</td>
            <td>${student.ngaySinh}</td>
            <td>${student.gioiTinh}</td>
            <td>${student.diemSinhVien}</td>
            <td>${student.diemLopTruong}</td>
            <td>
                <button class="btn-review" onclick="evaluateStudent('${student.maSV}')">
                    Đánh giá
                </button>
            </td>
            <td class="text-danger">
                <i class="fa-solid fa-trash" style="cursor: pointer;" onclick="deleteStudent('${student.maSV}')"></i>
            </td>
        </tr>
    `,
    )
    .join("");

  updatePaginationInfo();
  updateStatusIndicators();
}

function updatePaginationInfo() {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const paginationInfo = document.querySelector(".text-muted.small");
  if (paginationInfo) {
    paginationInfo.innerHTML = `Hiển thị <b>${startItem} - ${endItem}</b> trong tổng số <b>${totalItems}</b> sinh viên`;
  }

  updatePaginationControls();
}

function updatePaginationControls() {
  const pagination = document.getElementById("paginationControls");
  if (!pagination) return;

  let paginationHTML = `
        <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
            <a class="page-link page-nav" href="#" onclick="changePage(${currentPage - 1})" aria-label="Previous">
                <span aria-hidden="true">‹</span>
            </a>
        </li>
    `;

  for (let i = 1; i <= Math.min(totalPages, 5); i++) {
    paginationHTML += `
            <li class="page-item ${i === currentPage ? "active" : ""}">
                <a class="page-link page-number" href="#" onclick="changePage(${i})">${i}</a>
            </li>
        `;
  }

  if (totalPages > 5) {
    paginationHTML += `
            <li class="page-item disabled">
                <span class="page-link page-dots">...</span>
            </li>
            <li class="page-item">
                <a class="page-link page-number" href="#" onclick="changePage(${totalPages})">${totalPages}</a>
            </li>
        `;
  }

  paginationHTML += `
        <li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
            <a class="page-link page-nav" href="#" onclick="changePage(${currentPage + 1})" aria-label="Next">
                <span aria-hidden="true">›</span>
            </a>
        </li>
    `;

  pagination.innerHTML = paginationHTML;
}

function changePage(page) {
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderStudentTable();
}

function evaluateStudent(maSV) {
  const student = studentsData.find((s) => s.maSV === maSV);
  if (student) {
    alert(`Đánh giá sinh viên: ${student.hoDem} ${student.ten} (${maSV})`);
  }
}

function deleteStudent(maSV) {
  if (confirm("Bạn có chắc muốn xóa sinh viên này?")) {
    const index = studentsData.findIndex((s) => s.maSV === maSV);
    if (index > -1) {
      studentsData.splice(index, 1);
      totalItems = studentsData.length;
      totalPages = Math.ceil(totalItems / itemsPerPage);

      if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
      }

      renderStudentTable();
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderStudentTable();
});
