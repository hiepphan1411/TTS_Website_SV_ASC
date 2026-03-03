const notesData = [
    {
        id: 1,
        title: 'Thông báo v/v đề xuất hoãn xét tốt nghiệp và xét tốt nghiệp cho sinh viên',
        startDate: '16/01/2026',
        endDate: '19/01/2026',
        uploadTime: '2 giờ trước',
        status: 'new', 
        content: [
            'Căn cứ Quy chế đào tạo hiện hành và kế hoạch đào tạo của Nhà trường, Nhà trường thông báo về việc đề xuất hoãn xét tốt nghiệp và xét tốt nghiệp cho sinh viên.',
            'Sinh viên đủ điều kiện xét tốt nghiệp theo quy định sẽ được Nhà trường tổng hợp danh sách để thực hiện xét tốt nghiệp theo kế hoạch.',
            'Trường hợp sinh viên đã đủ điều kiện nhưng có nguyện vọng hoãn xét tốt nghiệp vì lý do học tập hoặc lý do cá nhân chính đáng thì thực hiện đề xuất hoãn xét theo quy định.',
            '<strong>Đề nghị sinh viên chủ động kiểm tra</strong> kết quả học tập, chuẩn đầu ra và các điều kiện liên quan; đồng thời thực hiện nộp hồ sơ đề xuất hoãn xét tốt nghiệp (nếu có) đúng thời hạn và đúng hướng dẫn của Nhà trường.',
            'Sau thời hạn quy định, Nhà trường sẽ tiến hành xét tốt nghiệp theo danh sách tổng hợp, các trường hợp không thực hiện đúng thời gian sẽ không được giải quyết.',
        ],
    },
    {
        id: 2,
        title: 'Thông báo v/v điều chỉnh ngày thi chuẩn đầu ra ngoại ngữ đợt tháng 4/2024',
        startDate: '10/03/2024',
        endDate: '15/04/2024',
        uploadTime: '3 tháng trước',
        status: 'active', 
        content: [
            'Căn cứ Quy chế đào tạo hiện hành và kế hoạch đào tạo của Nhà trường, Nhà trường thông báo về việc đề xuất hoãn xét tốt nghiệp và xét tốt nghiệp cho sinh viên. Sinh viên đủ điều kiện xét tốt nghiệp theo quy định sẽ được Nhà trường tổng hợp danh sách để thực hiện xét tốt nghiệp theo kế hoạch. Trường hợp sinh viên có nhu cầu hoãn xét tốt nghiệp vì lý do học tập hoặc lý do cá nhân chính đáng thì thực hiện đề xuất hoãn xét theo quy định.',
            'Để nghị sinh viên chủ động kiểm tra kết quả học tập, chuẩn đầu ra và các điều kiện liên quan; đồng thời thực hiện nộp hồ sơ đề xuất hoãn xét tốt nghiệp (nếu có) đúng thời hạn và đúng hướng dẫn của Nhà trường. Sau thời hạn quy định, Nhà trường sẽ tiến hành xét tốt nghiệp theo danh sách tổng hợp, các trường hợp không thực hiện đúng thời gian sẽ không được giải quyết.',
        ],
    },
    {
        id: 3,
        title: 'Thông báo v/v đăng ký học phần học kỳ 2 năm học 2025-2026',
        startDate: '15/12/2025',
        endDate: '20/12/2025',
        uploadTime: '1 tháng trước',
        status: 'active',
        content: [
            'Phòng Đào tạo thông báo về việc đăng ký học phần học kỳ 2 năm học 2025-2026. Sinh viên đăng nhập vào hệ thống để đăng ký học phần theo lịch quy định.',
            'Thời gian đăng ký: Từ ngày 15/12/2025 đến hết ngày 20/12/2025. Sinh viên cần hoàn thành đăng ký đúng thời hạn để đảm bảo có lớp học.',
            '<strong>Lưu ý:</strong> Sinh viên nợ học phí sẽ không được đăng ký học phần. Vui lòng liên hệ Phòng Tài chính để giải quyết.',
        ],
    },
    {
        id: 4,
        title: 'Thông báo v/v thu học phí học kỳ 2 năm học 2025-2026',
        startDate: '25/01/2026',
        endDate: '10/02/2026',
        uploadTime: '1 ngày trước',
        status: 'new',
        content: [
            'Phòng Tài chính - Kế toán thông báo về việc thu học phí học kỳ 2 năm học 2025-2026. Sinh viên có thể đóng học phí qua các hình thức: Chuyển khoản ngân hàng, nộp trực tiếp tại Phòng Tài chính.',
            'Thời hạn đóng học phí: Trước ngày 10/02/2026. Sinh viên nộp trễ sẽ bị xử lý theo quy định.',
        ],
    },
];

let currentFilter = 'all';

function parseDate(dateString) {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day);
}

function isExpired(endDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const noteEndDate = parseDate(endDate);
    noteEndDate.setHours(0, 0, 0, 0);

    return noteEndDate < today;
}

function updateNotesStatus() {
    notesData.forEach((note) => {
        // hết hạn -> set status = expired
        if (isExpired(note.endDate) && note.status !== 'expired') {
            note.status = 'expired';
        }
    });
}

function renderNotesAccordion(filter = 'all') {
    const accordion = document.getElementById('notesAccordion');
    if (!accordion) return;

    updateNotesStatus();

    let filteredData = notesData;
    if (filter === 'new') {
        filteredData = notesData.filter((note) => note.status === 'new');
    } else if (filter === 'expired') {
        filteredData = notesData.filter((note) => note.status === 'expired');
    }

    updateCount(notesData.length);

    let html = '';

    filteredData.forEach((note, index) => {
        const isExpanded = false; 
        const badgeHtml =
            note.status === 'new'
                ? '<span class="badge bg-danger badge-pill">Mới</span>'
                : '';

        // content paragraphs
        const contentHtml = note.content
            .map((paragraph) => `<p>${paragraph}</p>`)
            .join('');

        html += `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading${note.id}">
                    <button 
                        class="accordion-button ${isExpanded ? '' : 'collapsed'}" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapse${note.id}" 
                        aria-expanded="${isExpanded}" 
                        aria-controls="collapse${note.id}"
                        data-note-id="${note.id}">
                        <div class="d-flex align-items-center gap-2 flex-grow-1">
                            <span class="note-title-text">${note.title}</span>
                            ${badgeHtml}
                        </div>
                        <span class="note-date-range">${note.startDate} - ${note.endDate}</span>
                    </button>
                </h2>
                <div 
                    id="collapse${note.id}" 
                    class="accordion-collapse collapse ${isExpanded ? 'show' : ''}" 
                    aria-labelledby="heading${note.id}" 
                    data-bs-parent="#notesAccordion">
                    <div class="accordion-body"> 
                        ${contentHtml}
                        <div class="meta-info">
                            <span class="time">${note.uploadTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    accordion.innerHTML = html;

    addAccordionEventListeners();
}

// số lượng ghi chú
 
function updateCount(count) {
    const countElement = document.getElementById('totalCount');
    if (countElement) {
        countElement.textContent = count;
    }
}

function handleFilterClick(e) {
    const button = e.target.closest('.filter-btns button');
    if (!button) return;

    document.querySelectorAll('.filter-btns button').forEach((btn) => {
        btn.classList.remove('active', 'btn-primary');
        btn.classList.add('btn-outline-secondary');
    });

    button.classList.add('active', 'btn-primary');
    button.classList.remove('btn-outline-secondary');

    const filter = button.getAttribute('data-filter');
    currentFilter = filter;

    renderNotesAccordion(filter);
}

function addAccordionEventListeners() {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach((button) => {
        button.addEventListener('click', function (e) {
            const isCollapsed = this.classList.contains('collapsed');

            if (!isCollapsed) {
                return;
            }

            const noteId = parseInt(this.getAttribute('data-note-id'));

            const note = notesData.find((n) => n.id === noteId);

            if (note && note.status === 'new') {
                note.status = 'active';

                setTimeout(() => {
                    const collapseId = `collapse${note.id}`;

                    renderNotesAccordion(currentFilter);

                    setTimeout(() => {
                        const collapseElement =
                            document.getElementById(collapseId);
                        if (collapseElement) {
                            const bsCollapse = new bootstrap.Collapse(
                                collapseElement,
                                {
                                    toggle: true,
                                },
                            );
                        }
                    }, 50);
                }, 50);
            }
        });
    });
}

function initNotesReminder() {
    renderNotesAccordion('all');

    const filterBtns = document.querySelector('.filter-btns');
    if (filterBtns) {
        filterBtns.addEventListener('click', handleFilterClick);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(initNotesReminder, 100);
});
