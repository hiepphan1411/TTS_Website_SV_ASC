const examData = {
    'lan-1': {
        'HK1 (2025-2026)': [
            {
                id: 1,
                maMon: '003592',
                tenMon: 'Đảm bảo chất lượng kiểm thử phần mềm',
                maLHP: '420300359202',
                tinChi: 3,
                diemThi: 4.5,
                thoiHan: '25/01/2026 (Còn 5 ngày)',
            },
            {
                id: 2,
                maMon: '003592',
                tenMon: 'Automat & ngôn ngữ hình thức',
                maLHP: '420300359202',
                tinChi: 3,
                diemThi: 3.5,
                thoiHan: '26/01/2026 (Còn 6 ngày)',
            },
            {
                id: 3,
                maMon: '003592',
                tenMon: 'Đảm bảo chất lượng kiểm thử phần mềm',
                maLHP: '420300359202',
                tinChi: 3,
                diemThi: 3.0,
                thoiHan: '12/01/2026 (Hết hạn)',
            },
        ],
        'HK2 (2024-2025)': [
            {
                id: 4,
                maMon: '003594',
                tenMon: 'Cơ sở dữ liệu',
                maLHP: '420300359207',
                tinChi: 3,
                diemThi: 5.0,
                thoiHan: '15/12/2025 (Hết hạn)',
            },
            {
                id: 5,
                maMon: '003595',
                tenMon: 'Mạng máy tính',
                maLHP: '420300359208',
                tinChi: 3,
                diemThi: 4.0,
                thoiHan: '20/12/2025 (Hết hạn)',
            },
        ],
        'HK1 (2024-2025)': [
            {
                id: 6,
                maMon: '003597',
                tenMon: 'Cấu trúc dữ liệu và giải thuật',
                maLHP: '420300359210',
                tinChi: 4,
                diemThi: 2.5,
                thoiHan: '10/08/2025 (Hết hạn)',
            },
        ],
    },
    'lan-2': {
        'HK1 (2025-2026)': [
            {
                id: 7,
                maMon: '003599',
                tenMon: 'Phân tích thiết kế hệ thống',
                maLHP: '420300359212',
                tinChi: 3,
                diemThi: 5.5,
                thoiHan: '28/01/2026 (Còn 8 ngày)',
            },
            {
                id: 8,
                maMon: '003600',
                tenMon: 'Công nghệ phần mềm',
                maLHP: '420300359213',
                tinChi: 3,
                diemThi: 6.0,
                thoiHan: '30/01/2026 (Còn 10 ngày)',
            },
        ],
        'HK2 (2024-2025)': [
            {
                id: 9,
                maMon: '003601',
                tenMon: 'Lập trình Web',
                maLHP: '420300359214',
                tinChi: 4,
                diemThi: 5.0,
                thoiHan: '18/12/2025 (Hết hạn)',
            },
        ],
        'HK1 (2024-2025)': [
            {
                id: 10,
                maMon: '003598',
                tenMon: 'Kiến trúc máy tính',
                maLHP: '420300359211',
                tinChi: 3,
                diemThi: 4.5,
                thoiHan: '12/08/2025 (Hết hạn)',
            },
        ],
    },
};

let currentTab = 'lan-1';
let currentSemester = 'HK1 (2025-2026)';

function getCurrentData() {
    return examData[currentTab][currentSemester] || [];
}

let registeredSubjects = [
    {
        maMon: 'DKT0203',
        maLHP: 'DKT020301',
        tenMon: 'Kiểm toán căn bản',
        diemThi: 6.5,
        lePhi: '50000',
        ttLePhi: 'Đã đóng',
        diemPhucKhao: 7.5,
        phanHoiPhucKhao: 'Công thiều điểm',
        trangThai: 'Đã cập nhật KQHT',
        lyDo: 'Em muốn phúc khảo vì muốn biết bài sai ở đâu',
    },
    {
        maMon: 'DTN0219',
        maLHP: 'DTN021908',
        tenMon: 'Thuế',
        diemThi: 4.5,
        lePhi: '100000',
        ttLePhi: 'Đã đóng',
        diemPhucKhao: 4.5,
        phanHoiPhucKhao: 'Không thay đổi',
        trangThai: 'Đã cập nhật KQHT',
        lyDo: 'Em muốn xem lại bài',
    },
    {
        maMon: 'DKT0203',
        maLHP: 'DKT020301',
        tenMon: 'Kiểm toán căn bản',
        diemThi: 6.5,
        lePhi: '50000',
        ttLePhi: 'Đã đóng',
        diemPhucKhao: 7.5,
        phanHoiPhucKhao: 'Công thiều điểm',
        trangThai: 'Đã cập nhật KQHT',
        lyDo: 'Em muốn phúc khảo vì muốn biết bài sai ở đâu',
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
                <td>${subject.tenMon}</td>
                <td>${subject.maLHP}</td>
                <td class="text-center-col">${subject.tinChi}</td>
                <td class="text-center-col">${subject.diemThi}</td>
                <td class="text-center-col">${subject.thoiHan}</td>
            `;

        tbody.appendChild(row);
    });

    updateRowStyles();
}

function renderRegisteredTable() {
    const tbody = document.getElementById('registeredTableBody');
    tbody.innerHTML = '';

    registeredSubjects.forEach((subject, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td class="text-center-col">${index + 1}</td>
                <td>${subject.maMon}</td>
                <td>${subject.maLHP}</td>
                <td>${subject.tenMon}</td>
                <td class="text-center-col">${subject.diemThi}</td>
                <td class="text-center-col">${subject.lePhi}</td>
                <td class="text-center-col">${subject.ttLePhi}</td>
                <td class="text-center-col">${subject.diemPhucKhao}</td>
                <td class="text-center-col">${subject.phanHoiPhucKhao}</td>
                <td class="text-center-col">${subject.trangThai}</td>
                <td>${subject.lyDo}</td>
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

    document.querySelectorAll('.tab-buttons-dkpk .btn').forEach((btn) => {
        btn.addEventListener('click', function () {
            document
                .querySelectorAll('.tab-buttons-dkpk .btn')
                .forEach((b) => b.classList.remove('active'));
            this.classList.add('active');

            currentTab = this.getAttribute('data-tab');
            console.log(
                'Changed to tab:',
                currentTab,
                'semester:',
                currentSemester,
            );

            renderAllowedTable();
        });
    });

    const semesterSelect = document.querySelector('#semesterSelect');
    if (semesterSelect) {
        semesterSelect.addEventListener('change', function () {
            const value = this.value;

            if (value) {
                currentSemester = value;
                console.log('Changed to semester:', currentSemester);

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

    // thêm đăng ký mới
    selectedSubjects.forEach((subject) => {
        registeredSubjects.push({
            maMon: subject.maMon,
            maLHP: subject.maLHP,
            tenMon: subject.tenMon,
            diemThi: subject.diemThi,
            lePhi: '50000',
            ttLePhi: 'Chưa đóng',
            diemPhucKhao: '-',
            phanHoiPhucKhao: '-',
            trangThai: '-',
            lyDo: '-',
        });
    });

    renderRegisteredTable();

    document
        .getElementById('registeredTable')
        .scrollIntoView({ behavior: 'smooth', block: 'start' });

    alert(`Đã đăng ký thành công ${checkedBoxes.length} môn phúc khảo!`);

    document.getElementById('selectAll').checked = false;
    checkedBoxes.forEach((cb) => (cb.checked = false));
    updateRowStyles();
}
