const $ = window.jQuery;

let currentSemester = 'HK1 (2025-2026)';

$(document).ready(function () {
    renderTrainingDetailTable();
    updateTotalScore();
    loadSavedAssessment();

    $('#semesterSelect').on('change', function () {
        currentSemester = $(this).val();
        renderTrainingDetailTable();
        updateTotalScore();
        loadSavedAssessment();
    });

    $('.btn-print').on('click', function () {
        printAssessment();
    });

    $('.btn-confirm').on('click', function () {
        confirmAndSave();
    });

    // Add event listener for score inputs to calculate hierarchical totals
    $(document).on('input', '.self-score-input', function () {
        calculateHierarchicalScores();
    });

    initializeTableInteractions();
});

function loadSemesterData() {
    const semesterData = sessionStorage.getItem('selectedSemester');

    if (semesterData) {
        const data = JSON.parse(semesterData);

        $('#semesterTitle').text(
            `Chi tiết đánh giá rèn luyện ${data.semester}`,
        );

        $('#scoreValue').text(data.score);

        const statusBadge = $('#statusBadge');
        statusBadge.text(data.status);
        statusBadge.removeClass().addClass('status-badge');
        statusBadge.addClass(getStatusClass(data.score));

        document.title = `Chi tiết - ${data.semester}`;
    }
}

function getStatusClass(score) {
    if (score >= 85) return 'status-excellent';
    if (score >= 70) return 'status-good';
    if (score >= 50) return 'status-average';
    if (score >= 35) return 'status-weak';
    return 'status-poor';
}

function animateStatCards() {
    const cards = $('.stat-card');
    cards.each(function (index) {
        const card = $(this);
        card.css({ opacity: 0, transform: 'translateY(20px)' });

        setTimeout(function () {
            card.animate(
                { opacity: 1 },
                {
                    duration: 400,
                    step: function (now) {
                        const transformed = 1 - now;
                        card.css(
                            'transform',
                            `translateY(${transformed * 20}px)`,
                        );
                    },
                },
            );
        }, index * 100);
    });
}

function initializeTableInteractions() {
    $('.detail-table tbody').on('mouseenter', 'tr', function () {
        $(this).css('cursor', 'pointer');
    });
}

function printAssessment() {
    const elementsToHide = document.querySelectorAll(
        '.btn-print, .btn-confirm, .semesterSelect',
    );
    elementsToHide.forEach((elem) => (elem.style.display = 'none'));

    window.print();

    setTimeout(() => {
        elementsToHide.forEach((elem) => (elem.style.display = ''));
    }, 100);
}

function printDetailPage() {
    window.print();
}

function editTrainingRecord() {
    const semesterData = sessionStorage.getItem('selectedSemester');
    if (semesterData) {
        const data = JSON.parse(semesterData);

        alert(
            `Chỉnh sửa đánh giá rèn luyện ${data.semester}\n\nForm chỉnh sửa sẽ được mở trong trang tiếp theo.`,
        );
    }
}

function generateSummaryStats() {
    const rows = $('.detail-table tbody tr');
    let totalScore = 0;
    let rowCount = 0;

    rows.each(function () {
        const scoreCell = $(this).find('td:nth-child(6)');
        if (scoreCell.length) {
            const score = parseFloat(scoreCell.text());
            if (!isNaN(score)) {
                totalScore += score;
                rowCount++;
            }
        }
    });

    const averageScore = rowCount > 0 ? (totalScore / rowCount).toFixed(2) : 0;

    return {
        total: totalScore,
        average: averageScore,
        count: rowCount,
    };
}

function highlightRows(criteria) {
    $('.detail-table tbody tr').each(function () {
        const text = $(this).text().toLowerCase();
        if (text.includes(criteria.toLowerCase())) {
            $(this).css('background-color', '#fffacd');
        }
    });
}

function expandAllRows() {
    $('.detail-table tbody tr').show();
}

function collapseAllRows() {
    $('.detail-table tbody tr').hide();
    $('.detail-table tbody tr:first-child').show();
}

function toggleCategory(element) {
    const category = element.getAttribute('data-category');
    const childRows = document.querySelectorAll(
        `tr[data-parent="${category}"]`,
    );
    const isExpanded = element.classList.contains('expanded');

    element.classList.toggle('expanded');

    childRows.forEach((row) => {
        if (isExpanded) {
            row.classList.remove('show');

            setTimeout(() => {
                row.style.display = 'none';
            }, 300);
        } else {
            row.style.display = '';
            setTimeout(() => {
                row.classList.add('show');
            }, 10);
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const categoryRows = document.querySelectorAll('.category-row');

    categoryRows.forEach((row, index) => {
        const category = row.getAttribute('data-category');
        if (index === 0) {
            row.classList.add('expanded');

            const childRows = document.querySelectorAll(
                `tr[data-parent="${category}"]`,
            );
            childRows.forEach((child) => {
                child.classList.add('show');
                child.style.display = '';
            });
        } else {
            const childRows = document.querySelectorAll(
                `tr[data-parent="${category}"]`,
            );
            childRows.forEach((child) => {
                child.classList.remove('show');
                child.style.display = 'none';
            });
        }
    });
});

const trainingDetailData = {
    categories: [
        {
            id: 'I',
            title: 'ĐÁNH GIÁ VỀ Ý THỨC HỌC TẬP',
            minScore: 0,
            maxScore: 20,
            selfScore: 0,
            cvhtScore: 15.0,
            khoaScore: 15.0,
            pctsScore: 15.0,
            children: [
                {
                    id: 'I.1',
                    title: 'Sinh viên được đánh giá tối đa 20 điểm, nếu',
                    minScore: 0,
                    maxScore: 20,
                    selfScore: 0,
                    cvhtScore: 15.0,
                    khoaScore: 15.0,
                    pctsScore: 15.0,
                    isBold: false,
                    children: [
                        {
                            id: 'I.1.1',
                            title: 'Ý thức và thái độ trong học tập:',
                            minScore: 0,
                            maxScore: 6,
                            selfScore: 0,
                            cvhtScore: 6.0,
                            khoaScore: 6.0,
                            pctsScore: 6.0,
                            isBold: false,
                            children: [
                                {
                                    id: 'I.1.1.a',
                                    title: 'Đi học đầy đủ và đúng giờ',
                                    minScore: 0,
                                    maxScore: 2,
                                    selfScore: 15.0,
                                    cvhtNote: 'Nhận xét:',
                                    cvhtScore: 2.0,
                                    khoaNote: 'Nhận xét:',
                                    khoaScore: 2.0,
                                    pctsNote: 'Nhận xét:',
                                    pctsScore: 2.0,
                                    hasNote: true,
                                },
                                {
                                    id: 'I.1.1.b',
                                    title: 'Thực hiện đầy đủ, nghiêm túc các loại bài tập',
                                    minScore: 0,
                                    maxScore: 2,
                                    selfScore: 15.0,
                                    cvhtNote: 'Nhận xét:',
                                    cvhtScore: 2.0,
                                    khoaNote: 'Nhận xét:',
                                    khoaScore: 2.0,
                                    pctsNote: 'Nhận xét:',
                                    pctsScore: 2.0,
                                    hasNote: true,
                                },
                            ],
                        },
                        {
                            id: 'I.1.2',
                            title: 'Ý thức và thái độ tham gia các kỳ thi, cuộc thi:',
                            minScore: 0,
                            maxScore: 3,
                            selfScore: 0,
                            cvhtScore: 2.0,
                            khoaScore: 2.0,
                            pctsScore: 2.0,
                            isBold: false,
                            children: [
                                {
                                    id: 'I.1.2.a',
                                    title: 'Thực hiện đầy đủ, nghiêm túc các loại bài tập',
                                    minScore: 0,
                                    maxScore: 2,
                                    selfScore: 2.0,
                                    cvhtNote: 'Nhận xét:',
                                    cvhtScore: 2.0,
                                    khoaNote: 'Nhận xét:',
                                    khoaScore: 2.0,
                                    pctsNote: 'Nhận xét:',
                                    pctsScore: 2.0,
                                    hasNote: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'I.2',
                    title: 'Trừ vào những điểm đã đạt được tai muc 1 đối với sinh viên có một trong những vi phạm sau (điểm trừ không quá 20 điểm):',
                    minScore: -20,
                    maxScore: 0,
                    selfScore: 0.0,
                    cvhtScore: 0.0,
                    khoaScore: 0.0,
                    pctsScore: 0.0,
                    isBold: false,
                    children: [
                        {
                            id: 'I.2.a',
                            title: 'Sinh viên bỏ thì không có lí do',
                            minScore: -4,
                            maxScore: 0,
                            selfScore: '-',
                            cvhtNote: 'Nhận xét:',
                            cvhtScore: 0.0,
                            khoaNote: 'Nhận xét:',
                            khoaScore: 0.0,
                            pctsNote: 'Nhận xét:',
                            pctsScore: 0.0,
                            hasNote: true,
                        },
                    ],
                },
            ],
        },
        {
            id: 'II',
            title: 'ĐÁNH GIÁ VỀ Ý THỨC HỌC TẬP',
            minScore: 0,
            maxScore: 20,
            selfScore: 15.0,
            cvhtScore: 15.0,
            khoaScore: 15.0,
            pctsScore: 15.0,
            children: [
                {
                    id: 'II.a',
                    title: 'Sinh viên bỏ thì không có Ý định',
                    minScore: -4,
                    maxScore: 0,
                    selfScore: '-',
                    cvhtNote: 'Nhận xét:',
                    cvhtScore: 0.0,
                    khoaNote: 'Nhận xét:',
                    khoaScore: 0.0,
                    pctsNote: 'Nhận xét:',
                    pctsScore: 0.0,
                    hasNote: true,
                },
            ],
        },
        {
            id: 'III',
            title: 'ĐÁNH GIÁ VỀ Ý THỨC HỌC TẬP',
            minScore: 0,
            maxScore: 20,
            selfScore: 15.0,
            cvhtScore: 15.0,
            khoaScore: 15.0,
            pctsScore: 15.0,
            children: [
                {
                    id: 'III.a',
                    title: 'Sinh viên bỏ thì không có Ý định',
                    minScore: -4,
                    maxScore: 0,
                    selfScore: '-',
                    cvhtNote: 'Nhận xét:',
                    cvhtScore: 0.0,
                    khoaNote: 'Nhận xét:',
                    khoaScore: 0.0,
                    pctsNote: 'Nhận xét:',
                    pctsScore: 0.0,
                    hasNote: true,
                },
            ],
        },
        {
            id: 'IV',
            title: 'ĐÁNH GIÁ VỀ Ý THỨC HỌC TẬP',
            minScore: 0,
            maxScore: 20,
            selfScore: 15.0,
            cvhtScore: 15.0,
            khoaScore: 15.0,
            pctsScore: 15.0,
            children: [
                {
                    id: 'IV.a',
                    title: 'Sinh viên bỏ thì không có Ý định',
                    minScore: -4,
                    maxScore: 0,
                    selfScore: '-',
                    cvhtNote: 'Nhận xét:',
                    cvhtScore: 0.0,
                    khoaNote: 'Nhận xét:',
                    khoaScore: 0.0,
                    pctsNote: 'Nhận xét:',
                    pctsScore: 0.0,
                    hasNote: true,
                },
            ],
        },
        {
            id: 'V',
            title: 'ĐÁNH GIÁ VỀ Ý THỨC HỌC TẬP',
            minScore: 0,
            maxScore: 20,
            selfScore: 15.0,
            cvhtScore: 15.0,
            khoaScore: 15.0,
            pctsScore: 15.0,
            children: [
                {
                    id: 'V.a',
                    title: 'Sinh viên bỏ thì không có Ý định',
                    minScore: -4,
                    maxScore: 0,
                    selfScore: '-',
                    cvhtNote: 'Nhận xét:',
                    cvhtScore: 0.0,
                    khoaNote: 'Nhận xét:',
                    khoaScore: 0.0,
                    pctsNote: 'Nhận xét:',
                    pctsScore: 0.0,
                    hasNote: true,
                },
            ],
        },
        {
            id: 'VI',
            title: 'ĐÁNH GIÁ VỀ Ý THỨC HỌC TẬP',
            minScore: 0,
            maxScore: 20,
            selfScore: 15.0,
            cvhtScore: 15.0,
            khoaScore: 15.0,
            pctsScore: 15.0,
            children: [
                {
                    id: 'VI.a',
                    title: 'Sinh viên bỏ thì không có Ý định',
                    minScore: -4,
                    maxScore: 0,
                    selfScore: '-',
                    cvhtNote: 'Nhận xét:',
                    cvhtScore: 0.0,
                    khoaNote: 'Nhận xét:',
                    khoaScore: 0.0,
                    pctsNote: 'Nhận xét:',
                    pctsScore: 0.0,
                    hasNote: true,
                },
            ],
        },
    ],
};

// tạo bảng chi tiết
function renderTrainingDetailTable() {
    const tbody = document.querySelector('.detail-table tbody');
    if (!tbody) return;

    tbody.innerHTML = '';

    trainingDetailData.categories.forEach((category, index) => {
        const categoryRow = createCategoryRow(category, index === 0);
        tbody.appendChild(categoryRow);

        if (category.children) {
            category.children.forEach((child) => {
                renderChildRow(tbody, child, category.id, index === 0);
            });
        }
    });
}

// Tạo hàng danh mục
function createCategoryRow(category, isExpanded) {
    const tr = document.createElement('tr');
    tr.className = `category-row ${isExpanded ? 'expanded' : ''}`;
    tr.setAttribute('data-category', category.id);
    tr.setAttribute('onclick', 'toggleCategory(this)');

    tr.innerHTML = `
        <td><strong>${category.id}</strong></td>
        <td class="text-start"><strong>${category.title}</strong></td>
        <td><strong>${category.minScore}</strong></td>
        <td><strong>${category.maxScore}</strong></td>
        <td><strong>-</strong></td>
        <td><strong>${formatScore(category.selfScore)}</strong></td>
        <td><strong>-</strong></td>
        <td><strong>${formatScore(category.cvhtScore)}</strong></td>
        <td><strong>${formatScore(category.khoaScore)}</strong></td>
        <td><strong>${formatScore(category.pctsScore)}</strong></td>
    `;

    return tr;
}

// tạo hàng con
function renderChildRow(tbody, item, parentId, isVisible) {
    const tr = document.createElement('tr');
    tr.className = `child-row ${isVisible ? 'show' : ''}`;
    tr.setAttribute('data-parent', parentId);
    if (!isVisible) tr.style.display = 'none';

    let dataLevel = '0';
    if (item.id.match(/^[IVX]+\.\d+\.\d+\.[a-z]$/)) {
        // I.1.1.a
        dataLevel = '3';
    } else if (item.id.match(/^[IVX]+\.\d+\.[a-z]$/)) {
        // I.2.a
        dataLevel = '3';
    } else if (item.id.match(/^[IVX]+\.[a-z]$/)) {
        // II.a
        dataLevel = '3';
    } else if (item.id.match(/^[IVX]+\.\d+\.\d+$/)) {
        // I.1.1
        dataLevel = '2';
    } else if (item.id.match(/^[IVX]+\.\d+$/)) {
        // I.1
        dataLevel = '1';
    }
    tr.setAttribute('data-level', dataLevel);

    const displayId = dataLevel === '3' ? '-' : item.id;

    if (item.hasNote) {
        tr.innerHTML = `
            <td>${displayId}</td>
            <td class="text-start">${item.title}</td>
            <td>${item.minScore}</td>
            <td>${item.maxScore}</td>
            <td><input type="text" class="form-control text-center" placeholder="Nhận xét" /></td>
            <td><input type="text" class="form-control text-center self-score-input" placeholder="0" min="${item.minScore}" max="${item.maxScore}" data-item-id="${item.id}" /></td>
            <td>
                <div class="custom-file-upload">
                    <input type="file" id="file-${parentId}-${item.id}" class="file-input" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
                    <label for="file-${parentId}-${item.id}" class="file-upload-btn">
                        <i class="fas fa-upload"></i>
                       
                    </label>
                    <span class="file-name"></span>
                </div>
            </td>
            <td>
                <div class="note-item">
                    <div>${item.cvhtNote}</div>
                    <div>Điểm: ${formatScore(item.cvhtScore)}</div>
                </div>
            </td>
            <td>
                <div class="note-item">
                    <div>${item.khoaNote}</div>
                    <div>Điểm: ${formatScore(item.khoaScore)}</div>
                </div>
            </td>
            <td>
                <div class="note-item">
                    <div>${item.pctsNote}</div>
                    <div>Điểm: ${formatScore(item.pctsScore)}</div>
                </div>
            </td>
        `;
    } else {
        tr.innerHTML = `
            <td>${displayId}</td>
            <td class="text-start">${item.title}</td>
            <td>${item.minScore}</td>
            <td>${item.maxScore}</td>
            <td>-</td>
            <td>${formatScore(item.selfScore)}</td>
            <td>-</td>
            <td>${formatScore(item.cvhtScore)}</td>
            <td>${formatScore(item.khoaScore)}</td>
            <td>${formatScore(item.pctsScore)}</td>
        `;
    }

    tbody.appendChild(tr);

    if (item.children) {
        item.children.forEach((child) => {
            renderChildRow(tbody, child, parentId, isVisible);
        });
    }
}

// định dạng điểm
function formatScore(score) {
    if (score === '-' || score === undefined || score === null) return '-';
    return typeof score === 'number' ? score.toFixed(2) : score;
}

document.addEventListener('DOMContentLoaded', function () {
    renderTrainingDetailTable();

    initializeCategoryToggle();

    fileUploads();
});

// tải lên tệp
function fileUploads() {
    document.addEventListener('change', function (e) {
        if (e.target.classList.contains('file-input')) {
            const fileInput = e.target;
            const fileNameDisplay = fileInput
                .closest('.custom-file-upload')
                .querySelector('.file-name');

            if (fileInput.files.length > 0) {
                const fileName = fileInput.files[0].name;
                fileNameDisplay.textContent = fileName;
                fileNameDisplay.style.color = '#56a2e8';
            } else {
                fileNameDisplay.textContent = '';
            }
        }
    });
}

// sự kiện các hàng danh mục
function initializeCategoryToggle() {
    const categoryRows = document.querySelectorAll('.category-row');

    categoryRows.forEach((row, index) => {
        const category = row.getAttribute('data-category');
        if (index === 0) {
            row.classList.add('expanded');
            const childRows = document.querySelectorAll(
                `tr[data-parent="${category}"]`,
            );
            childRows.forEach((child) => {
                child.classList.add('show');
                child.style.display = '';
            });
        } else {
            const childRows = document.querySelectorAll(
                `tr[data-parent="${category}"]`,
            );
            childRows.forEach((child) => {
                child.classList.remove('show');
                child.style.display = 'none';
            });
        }
    });
}

// tính điểm số theo cấp bậc
function calculateHierarchicalScores() {
    const tbody = document.querySelector('.detail-table tbody');
    if (!tbody) return;

    trainingDetailData.categories.forEach((category) => {
        updateCategoryScores(category);

        // Tính tổng điểm cho từng cột
        const totals = {
            self: 0,
            cvht: 0,
            khoa: 0,
            pcts: 0,
        };

        if (category.children) {
            category.children.forEach((child) => {
                const childTotals = calculateItemTotal(child);
                totals.self += childTotals.self;
                totals.cvht += childTotals.cvht;
                totals.khoa += childTotals.khoa;
                totals.pcts += childTotals.pcts;
            });
        }

        // Cập nhật hiển thị hàng danh mục
        const categoryRow = document.querySelector(
            `tr.category-row[data-category="${category.id}"]`,
        );
        if (categoryRow) {
            const cells = categoryRow.querySelectorAll('td');
            if (cells[5]) {
                cells[5].querySelector('strong').textContent =
                    totals.self.toFixed(2);
            }
            if (cells[7]) {
                cells[7].querySelector('strong').textContent =
                    totals.cvht.toFixed(2);
            }
            if (cells[8]) {
                cells[8].querySelector('strong').textContent =
                    totals.khoa.toFixed(2);
            }
            if (cells[9]) {
                cells[9].querySelector('strong').textContent =
                    totals.pcts.toFixed(2);
            }
        }
    });

    updateGrandTotalScore();
}

// cập nhật điểm số cho từng mục
function updateCategoryScores(item) {
    if (item.hasNote) {
        const input = document.querySelector(
            `.self-score-input[data-item-id="${item.id}"]`,
        );
        if (input) {
            item.selfScore = parseFloat(input.value) || 0;
        }
    }

    if (item.children) {
        item.children.forEach((child) => updateCategoryScores(child));
    }
}

// tính tổng điểm cho từng mục
function calculateItemTotal(item) {
    const totals = {
        self: 0,
        cvht: 0,
        khoa: 0,
        pcts: 0,
    };

    if (item.hasNote) {
        totals.self = item.selfScore || 0;
        totals.cvht = item.cvhtScore || 0;
        totals.khoa = item.khoaScore || 0;
        totals.pcts = item.pctsScore || 0;
    } else if (item.children) {
        item.children.forEach((child) => {
            const childTotals = calculateItemTotal(child);
            totals.self += childTotals.self;
            totals.cvht += childTotals.cvht;
            totals.khoa += childTotals.khoa;
            totals.pcts += childTotals.pcts;
        });

        const rows = document.querySelectorAll('tr.child-row');
        rows.forEach((row) => {
            const cells = row.querySelectorAll('td');
            const rowId = cells[0]?.textContent?.trim();
            if (rowId === item.id) {
                if (cells[5]) {
                    cells[5].textContent = totals.self.toFixed(2);
                }
                if (cells[7]) {
                    cells[7].textContent = totals.cvht.toFixed(2);
                }
                if (cells[8]) {
                    cells[8].textContent = totals.khoa.toFixed(2);
                }
                if (cells[9]) {
                    cells[9].textContent = totals.pcts.toFixed(2);
                }
            }
        });

        item.selfScore = totals.self;
        item.cvhtScore = totals.cvht;
        item.khoaScore = totals.khoa;
        item.pctsScore = totals.pcts;
    }

    return totals;
}

// total
function updateGrandTotalScore() {
    let totalSelfScore = 0;
    let totalCvhtScore = 0;
    let totalKhoaScore = 0;
    let totalPctsScore = 0;

    const categoryRows = document.querySelectorAll('.category-row');
    categoryRows.forEach((categoryRow) => {
        const cells = categoryRow.querySelectorAll('td');

        // tự đánh giá
        const selfScoreText = cells[5]?.querySelector('strong')?.textContent;
        const selfScore = parseFloat(selfScoreText) || 0;
        totalSelfScore += selfScore;

        // CVHT
        const cvhtScoreText = cells[7]?.querySelector('strong')?.textContent;
        const cvhtScore = parseFloat(cvhtScoreText) || 0;
        totalCvhtScore += cvhtScore;

        // Khoa
        const khoaScoreText = cells[8]?.querySelector('strong')?.textContent;
        const khoaScore = parseFloat(khoaScoreText) || 0;
        totalKhoaScore += khoaScore;

        // PCTSV
        const pctsScoreText = cells[9]?.querySelector('strong')?.textContent;
        const pctsScore = parseFloat(pctsScoreText) || 0;
        totalPctsScore += pctsScore;
    });

    const totalRow = document.querySelector('.total-row');
    if (totalRow) {
        const scoreCells = totalRow.querySelectorAll('td');

        if (scoreCells[1]) {
            scoreCells[1].textContent = totalSelfScore.toFixed(2);
        }
        if (scoreCells[3]) {
            scoreCells[3].textContent = totalCvhtScore.toFixed(2);
        }
        if (scoreCells[4]) {
            scoreCells[4].textContent = totalKhoaScore.toFixed(2);
        }
        if (scoreCells[5]) {
            scoreCells[5].textContent = totalPctsScore.toFixed(2);
        }
    }
}

// cập nhật tổng điểm
function updateTotalScore() {
    let totalSelfScore = 0;

    document.querySelectorAll('.self-score-input').forEach((input) => {
        const value = parseFloat(input.value) || 0;
        totalSelfScore += value;
    });

    const totalRow = document.querySelector('.total-row');
    if (totalRow) {
        const scoreCells = totalRow.querySelectorAll('td');
        if (scoreCells[5]) {
            scoreCells[5].textContent = totalSelfScore.toFixed(2);
        }
    }
}

// in
function printAssessment() {
    const buttons = document.querySelectorAll('.btn-print, .btn-confirm');
    buttons.forEach((btn) => (btn.style.display = 'none'));

    // Print
    window.print();

    setTimeout(() => {
        buttons.forEach((btn) => (btn.style.display = ''));
    }, 100);
}

// xác nhận và lưu
function confirmAndSave() {
    const allInputs = document.querySelectorAll('.self-score-input');
    let isValid = true;
    let emptyCount = 0;

    allInputs.forEach((input) => {
        if (!input.value || input.value.trim() === '') {
            isValid = false;
            emptyCount++;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (!isValid) {
        alert(
            `Vui lòng điền đầy đủ điểm tự đánh giá cho tất cả các tiêu chí!\nCòn ${emptyCount} tiêu chí chưa điền.`,
        );
        return;
    }
    const assessmentData = {
        semester: currentSemester,
        timestamp: new Date().toISOString(),
        categories: [],
    };

    document.querySelectorAll('.child-row[data-level="3"]').forEach((row) => {
        const cells = row.querySelectorAll('td');
        const commentInput = cells[4]?.querySelector('input[type="text"]');
        const scoreInput = cells[5]?.querySelector('.self-score-input');
        const fileInput = cells[6]?.querySelector('.file-input');

        if (scoreInput) {
            assessmentData.categories.push({
                id: cells[0]?.textContent,
                title: cells[1]?.textContent,
                comment: commentInput?.value || '',
                selfScore: parseFloat(scoreInput.value) || 0,
                fileName: fileInput?.files[0]?.name || '',
            });
        }
    });

    assessmentData.totalScore = assessmentData.categories.reduce(
        (sum, cat) => sum + cat.selfScore,
        0,
    );

    const savedAssessments = JSON.parse(
        localStorage.getItem('selfAssessments') || '{}',
    );
    savedAssessments[currentSemester] = assessmentData;
    localStorage.setItem('selfAssessments', JSON.stringify(savedAssessments));

    allInputs.forEach((input) => {
        input.setAttribute('readonly', 'true');
        input.style.backgroundColor = '#f8f9fa';
    });

    $('.btn-confirm').text('Đã lưu').prop('disabled', true);
}

// Tải dữ liệu đã lưu
function loadSavedAssessment() {
    const savedAssessments = JSON.parse(
        localStorage.getItem('selfAssessments') || '{}',
    );
    const savedData = savedAssessments[currentSemester];

    if (savedData) {
        const rows = document.querySelectorAll('.child-row[data-level="3"]');
        savedData.categories.forEach((cat, index) => {
            if (rows[index]) {
                const cells = rows[index].querySelectorAll('td');
                const commentInput =
                    cells[4]?.querySelector('input[type="text"]');
                const scoreInput = cells[5]?.querySelector('.self-score-input');

                if (commentInput) commentInput.value = cat.comment;
                if (scoreInput) {
                    scoreInput.value = cat.selfScore;
                    scoreInput.setAttribute('readonly', 'true');
                    scoreInput.style.backgroundColor = '#f8f9fa';
                }
            }
        });

        updateTotalScore();

        $('.btn-confirm').text('Đã lưu ✓').prop('disabled', true);
    } else {
        document.querySelectorAll('.self-score-input').forEach((input) => {
            input.removeAttribute('readonly');
            input.style.backgroundColor = '';
        });
        $('.btn-confirm').text('Xác nhận').prop('disabled', false);
    }
}
