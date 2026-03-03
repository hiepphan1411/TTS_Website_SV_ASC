const examData = {
    'thi-lai': {
        'HK1 (2025 - 2026)': [
            {
                id: 1,
                maMon: '003592',
                maLHP: '420300359202',
                tenMon: 'Đảm bảo chất lượng kiểm thử phần mềm',
                tinChi: 3,
                ketQua: '4.0',
                ghiChu: '-',
            },
            {
                id: 2,
                maMon: '003591',
                maLHP: '420300359205',
                tenMon: 'Automat & ngôn ngữ hình thức',
                tinChi: 3,
                ketQua: '0',
                ghiChu: '-',
            },
            {
                id: 3,
                maMon: '003582',
                maLHP: '420300359201',
                tenMon: 'Lý thuyết tuyển tính',
                tinChi: 3,
                ketQua: '0',
                ghiChu: '-',
            },
            {
                id: 4,
                maMon: '003593',
                maLHP: '420300359206',
                tenMon: 'Lập trình hướng đối tượng',
                tinChi: 4,
                ketQua: '3.5',
                ghiChu: '-',
            },
            {
                id: 5,
                maMon: '003581',
                maLHP: '42030035902',
                tenMon: 'Tiếng anh 2',
                tinChi: 3,
                ketQua: '0',
                ghiChu: '-',
            },
        ],
        'HK2 (2024 - 2025)': [
            {
                id: 6,
                maMon: '003594',
                maLHP: '420300359207',
                tenMon: 'Cơ sở dữ liệu',
                tinChi: 3,
                ketQua: '5.0',
                ghiChu: '-',
            },
            {
                id: 7,
                maMon: '003595',
                maLHP: '420300359208',
                tenMon: 'Mạng máy tính',
                tinChi: 3,
                ketQua: '0',
                ghiChu: '-',
            },
            {
                id: 8,
                maMon: '003596',
                maLHP: '420300359209',
                tenMon: 'Hệ điều hành',
                tinChi: 3,
                ketQua: '4.5',
                ghiChu: '-',
            },
        ],
        'HK1 (2024 - 2025)': [
            {
                id: 9,
                maMon: '003597',
                maLHP: '420300359210',
                tenMon: 'Cấu trúc dữ liệu và giải thuật',
                tinChi: 4,
                ketQua: '0',
                ghiChu: '-',
            },
            {
                id: 10,
                maMon: '003598',
                maLHP: '420300359211',
                tenMon: 'Kiến trúc máy tính',
                tinChi: 3,
                ketQua: '5.5',
                ghiChu: '-',
            },
        ],
    },
    'cai-thien': {
        'HK1 (2025 - 2026)': [
            {
                id: 11,
                maMon: '003592',
                maLHP: '420300359202',
                tenMon: 'Đảm bảo chất lượng kiểm thử phần mềm',
                tinChi: 3,
                ketQua: '6.0',
                ghiChu: 'Cải thiện',
            },
            {
                id: 12,
                maMon: '003599',
                maLHP: '420300359212',
                tenMon: 'Phân tích thiết kế hệ thống',
                tinChi: 3,
                ketQua: '5.5',
                ghiChu: 'Cải thiện',
            },
            {
                id: 13,
                maMon: '003600',
                maLHP: '420300359213',
                tenMon: 'Công nghệ phần mềm',
                tinChi: 3,
                ketQua: '6.5',
                ghiChu: 'Cải thiện',
            },
        ],
        'HK2 (2024 - 2025)': [
            {
                id: 14,
                maMon: '003594',
                maLHP: '420300359207',
                tenMon: 'Cơ sở dữ liệu',
                tinChi: 3,
                ketQua: '7.0',
                ghiChu: 'Cải thiện',
            },
            {
                id: 15,
                maMon: '003601',
                maLHP: '420300359214',
                tenMon: 'Lập trình Web',
                tinChi: 4,
                ketQua: '6.0',
                ghiChu: 'Cải thiện',
            },
        ],
        'HK1 (2024 - 2025)': [
            {
                id: 16,
                maMon: '003602',
                maLHP: '420300359215',
                tenMon: 'Trí tuệ nhân tạo',
                tinChi: 3,
                ketQua: '6.5',
                ghiChu: 'Cải thiện',
            },
        ],
    },
};

let currentTab = 'thi-lai';
let currentSemester = 'HK1 (2025 - 2026)';

function getCurrentData() {
    return examData[currentTab][currentSemester] || [];
}

let registeredSubjects = [
    {
        stt: 1,
        maLHP: 'DKT020301',
        tenMon: 'Kiểm toán căn bản',
        tinChi: 3,
        lePhi: '50000',
        ttLePhi: 'Đã đóng',
        ngayDK: '20/01/2026',
    },
    {
        stt: 2,
        maLHP: 'DKT020021',
        tenMon: 'Vật lý đại cương',
        tinChi: 3,
        lePhi: '100000',
        ttLePhi: 'Đã đóng',
        ngayDK: '10/01/2026',
    },
    {
        stt: 3,
        maLHP: 'DKT020101',
        tenMon: 'Xác suất thống kê',
        tinChi: 3,
        lePhi: '50000',
        ttLePhi: 'Đã đóng',
        ngayDK: '10/01/2026',
    },
];

function renderAllowedTable() {
    const tbody = document.getElementById('allowedTableBody');
    tbody.innerHTML = '';

    const allowedSubjects = getCurrentData();

    if (allowedSubjects.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="text-center" style="padding: 20px; color: #999;">
                    Không có học phần nào trong học kỳ này
                </td>
            </tr>
        `;
        return;
    }

    allowedSubjects.forEach((subject, index) => {
        const row = document.createElement('tr');
        const isChecked = index === 0 ? 'checked' : '';

        row.innerHTML = `
                <td class="checkbox-col">
                    <input type="checkbox" class="custom-checkbox row-checkbox" ${isChecked} data-id="${subject.id}">
                </td>
                <td>${subject.maMon}</td>
                <td>${subject.maLHP}</td>
                <td>${subject.tenMon}</td>
                <td class="text-center-col">${subject.tinChi}</td>
                <td class="text-center-col">${subject.ketQua}</td>
                <td class="text-center-col">${subject.ghiChu}</td>
            `;

        tbody.appendChild(row);
    });

    updateRowStyles();
}

function renderRegisteredTable() {
    const tbody = document.getElementById('registeredTableBody');
    tbody.innerHTML = '';

    registeredSubjects.forEach((subject) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td class="text-center-col">${subject.stt}</td>
                <td>${subject.maLHP}</td>
                <td>${subject.tenMon}</td>
                <td class="text-center-col">${subject.tinChi}</td>
                <td class="text-center-col">${subject.lePhi}</td>
                <td class="text-center-col">${subject.ttLePhi}</td>
                <td class="text-center-col">${subject.ngayDK}</td>
            `;
        tbody.appendChild(row);
    });
}

function updateRowStyles() {
    document.querySelectorAll('.row-checkbox').forEach((checkbox) => {
        const row = checkbox.closest('tr');
        if (checkbox.checked) {
            row.classList.add('selected');
        } else {
            row.classList.remove('selected');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const selectAllCheckbox = document.getElementById('selectAll');

    selectAllCheckbox.addEventListener('change', function () {
        const checkboxes = document.querySelectorAll('.row-checkbox');
        checkboxes.forEach((cb) => {
            cb.checked = this.checked;
        });
        updateRowStyles();
    });

    document.addEventListener('change', function (e) {
        if (e.target.classList.contains('row-checkbox')) {
            updateRowStyles();

            const allCheckboxes = document.querySelectorAll('.row-checkbox');
            const checkedCount = document.querySelectorAll(
                '.row-checkbox:checked',
            ).length;
            selectAllCheckbox.checked = checkedCount === allCheckboxes.length;
        }
    });

    document.querySelectorAll('.tab-buttons .btn').forEach((btn) => {
        btn.addEventListener('click', function () {
            document
                .querySelectorAll('.tab-buttons .btn')
                .forEach((b) => b.classList.remove('active'));
            this.classList.add('active');

            // update current tab
            currentTab = this.getAttribute('data-tab');

            renderAllowedTable();
        });
    });

    // Semester selection change
    const semesterSelect = document.querySelector('.filter-select');
    if (semesterSelect) {
        semesterSelect.addEventListener('change', function () {
            const value = this.value;

            if (value) {
                currentSemester = value;

                renderAllowedTable();
            }
        });
    }

    renderAllowedTable();
    renderRegisteredTable();
});

function refreshAllowedTable() {
    document.getElementById('selectAll').checked = false;
    document
        .querySelectorAll('.row-checkbox')
        .forEach((cb) => (cb.checked = false));
    updateRowStyles();

    const btn = event.target.closest('.btn-refresh');
    const icon = btn.querySelector('i');
    icon.classList.add('fa-spin');
}

function registerSubjects() {
    const checkedBoxes = document.querySelectorAll('.row-checkbox:checked');

    if (checkedBoxes.length === 0) {
        alert('Vui lòng chọn ít nhất một môn học để đăng ký!');
        return;
    }

    const selectedIds = Array.from(checkedBoxes).map((cb) =>
        parseInt(cb.dataset.id),
    );
    const allowedSubjects = getCurrentData();
    const selectedSubjects = allowedSubjects.filter((s) =>
        selectedIds.includes(s.id),
    );

    const today = new Date().toLocaleDateString('vi-VN');
    selectedSubjects.forEach((subject) => {
        registeredSubjects.push({
            stt: registeredSubjects.length + 1,
            maLHP: subject.maLHP,
            tenMon: subject.tenMon,
            tinChi: subject.tinChi,
            lePhi: '50000',
            ttLePhi: 'Chưa đóng',
            ngayDK: today,
        });
    });

    renderRegisteredTable();

    document
        .getElementById('registeredTable')
        .scrollIntoView({ behavior: 'smooth', block: 'start' });

    alert(`Đã đăng ký thành công ${checkedBoxes.length} môn học!`);

    document.getElementById('selectAll').checked = false;
    checkedBoxes.forEach((cb) => (cb.checked = false));
    updateRowStyles();
}
