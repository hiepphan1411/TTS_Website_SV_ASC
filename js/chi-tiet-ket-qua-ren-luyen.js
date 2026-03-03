const $ = window.jQuery;

$(document).ready(function () {
    loadSemesterData();

    animateStatCards();

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
    $('.detail-table tbody tr').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.detail-table tbody tr').on('mouseenter', function () {
        $(this).css('cursor', 'pointer');
    });
}

function exportTableToCSV(filename = 'chi-tiet-ren-luyen.csv') {
    const csv = [];
    const rows = document.querySelectorAll('.detail-table tr');

    const semesterData = sessionStorage.getItem('selectedSemester');
    if (semesterData) {
        const data = JSON.parse(semesterData);
        csv.push(`Chi tiết đánh giá rèn luyện ${data.semester}`);
        csv.push(`Điểm: ${data.score}, Xếp loại: ${data.status}`);
        csv.push('');
    }

    for (let i = 0; i < rows.length; i++) {
        const row = [];
        const cols = rows[i].querySelectorAll('td, th');

        for (let j = 0; j < cols.length; j++) {
            row.push('"' + cols[j].innerText.replace(/"/g, '""') + '"');
        }

        csv.push(row.join(','));
    }

    downloadCSV(csv.join('\n'), filename);
}

function downloadCSV(csv, filename) {
    const csvFile = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(csvFile);

    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

function formatNumber(num, type = 'decimal') {
    if (type === 'currency') {
        return num.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
    }
    return num.toLocaleString('vi-VN');
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

$(function () {
    $(document).tooltip({
        position: { my: 'center bottom', at: 'center top-10' },
        effect: 'fade',
        effectLength: 200,
        hide: { effect: 'fade', duration: 200 },
    });
});

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
            // Show child rows for first category
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
            selfScore: 15.0,
            cvhtScore: 15.0,
            khoaScore: 15.0,
            pctsScore: 15.0,
            children: [
                {
                    id: 'I.1',
                    title: 'Sinh viên được đánh giá tối đa 20 điểm, nếu',
                    minScore: 0,
                    maxScore: 20,
                    selfScore: 15.0,
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
                            selfScore: 6.0,
                            cvhtScore: 6.0,
                            khoaScore: 6.0,
                            pctsScore: 6.0,
                            isBold: false,
                            children: [
                                {
                                    id: '-',
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
                                    id: '-',
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
                            selfScore: 2.0,
                            cvhtScore: 2.0,
                            khoaScore: 2.0,
                            pctsScore: 2.0,
                            isBold: false,
                            children: [
                                {
                                    id: '-',
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
                            id: '-',
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
                    id: '-',
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
                    id: '-',
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
                    id: '-',
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
                    id: '-',
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
                    id: '-',
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

function createCategoryRow(category, isExpanded) {
    const tr = document.createElement('tr');
    tr.className = `category-row ${isExpanded ? 'expanded' : ''}`;
    tr.setAttribute('data-category', category.id);
    tr.setAttribute('onclick', 'toggleCategory(this)');

    tr.innerHTML = `
        <td>${category.id}</td>
        <td class="text-start"><strong>${category.title}</strong></td>
        <td>${category.minScore}</td>
        <td>${category.maxScore}</td>
        <td>-</td>
        <td>${formatScore(category.selfScore)}</td>
        <td>-</td>
        <td>${formatScore(category.cvhtScore)}</td>
        <td>${formatScore(category.khoaScore)}</td>
        <td>${formatScore(category.pctsScore)}</td>
    `;

    return tr;
}

function renderChildRow(tbody, item, parentId, isVisible) {
    const tr = document.createElement('tr');
    tr.className = `child-row ${isVisible ? 'show' : ''}`;
    tr.setAttribute('data-parent', parentId);
    if (!isVisible) tr.style.display = 'none';

    let dataLevel = '0';
    if (item.id === '-') {
        dataLevel = '3';
    } else if (item.id.match(/^[IVX]+\.\d+\.\d+/)) {
        dataLevel = '2';
    } else if (item.id.match(/^[IVX]+\.\d+$/)) {
        dataLevel = '1';
    }
    tr.setAttribute('data-level', dataLevel);

    if (item.hasNote) {
        tr.innerHTML = `
            <td>${item.id}</td>
            <td class="text-start">${item.title}</td>
            <td>${item.minScore}</td>
            <td>${item.maxScore}</td>
            <td>-</td>
            <td>${formatScore(item.selfScore)}</td>
            <td>-</td>
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
            <td>${item.id}</td>
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

function formatScore(score) {
    if (score === '-' || score === undefined || score === null) return '-';
    return typeof score === 'number' ? score.toFixed(2) : score;
}

document.addEventListener('DOMContentLoaded', function () {
    renderTrainingDetailTable();

    initializeCategoryToggle();
});

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
