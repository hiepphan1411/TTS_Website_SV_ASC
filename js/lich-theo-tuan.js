// Data lịch học và lịch thi đầy đủ
const scheduleData = {
    // Tuần 0: 1-5/1/2026 (Thứ 5-CN)
    '2026-02-25': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Nhập môn Lập trình',
            code: 'DHKTPM18A - 42030001101',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A1.01',
            teacher: 'TS. Nguyễn Văn Z',
            note: '',
        },
    ],
    '2026-02-26': [
        {
            time: 'morning',
            category: 'study',
            type: 'practice',
            title: 'Lập trình C',
            code: 'DHKTPM18A - 42030002201',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'B3.01',
            teacher: 'TS. Trần Thị Y',
            note: '',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'theory',
            title: 'Toán cao cấp',
            code: 'DHKTPM18A - 42030003301',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'A1.02',
            teacher: 'TS. Lê Văn X',
            note: '',
        },
    ],
    '2026-02-27': [
        {
            time: 'morning',
            category: 'exam',
            type: 'exam',
            title: 'Nhập môn CNTT',
            code: 'DHKTPM18A - 42030004401',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A1.05',
            teacher: 'Ban Giám thị',
            note: '',
        },
    ],
    '2026-02-28': [
        {
            time: 'morning',
            category: 'study',
            type: 'online',
            title: 'Tiếng Anh chuyên ngành',
            code: 'DHKTPM18A - 42030005501',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'Trực tuyến',
            teacher: 'ThS. Phạm Thị W',
            note: 'Zoom FI30: 652 722 8922 / 123456',
        },
    ],
    '2026-03-01': [
        {
            time: 'afternoon',
            category: 'study',
            type: 'theory',
            title: 'Giáo dục thể chất',
            code: 'DHKTPM18A - 42030006601',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'Sân vận động',
            teacher: 'Võ Văn V',
            note: '',
        },
    ],

    // Tuần 1: 6-12/1/2026
    '2026-03-02': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Kiến trúc và Thiết kế Phần mềm',
            code: 'DHKTPM18A - 42030015401',
            period: '10 - 12 (7:30 - 12:00)',
            room: 'A2.04',
            teacher: 'TS. Nguyễn Văn A',
            note: '',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'practice',
            title: 'Cơ sở dữ liệu',
            code: 'DHKTPM18B - 42030013701',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'B3.01',
            teacher: 'TS. Trần Thị B',
            note: '',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'practice',
            title: 'Cơ sở dữ liệu',
            code: 'DHKTPM18B - 42030013701',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'B3.01',
            teacher: 'TS. Trần Thị B',
            note: '',
        },
    ],
    '2026-03-03': [
        {
            time: 'morning',
            category: 'study',
            type: 'practice',
            title: 'Kiến trúc và Thiết kế Phần mềm',
            code: 'DHKTPM18A - 42030015401',
            period: '10 - 12 (7:30 - 12:00)',
            room: 'A2.04',
            teacher: 'TS. Hà Thị C',
            note: '',
        },
        {
            time: 'noon',
            category: 'study',
            type: 'online',
            title: 'Lập trình Web',
            code: 'DHKTPM18A - 42030018901',
            period: '10 - 12 (7:30 - 12:00)',
            room: 'Trực tuyến',
            teacher: 'TS. Ngô Thị D',
            note: 'Zoom FI30: 652 722 8922 / 123456',
        },
        {
            time: 'afternoon',
            category: 'exam',
            type: 'exam',
            title: 'Kiểm tra giữa kỳ - Toán rời rạc',
            code: 'DHKTPM18A - 42030010201',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'A1.05',
            teacher: 'TS. Lê Văn E',
            note: '',
        },
    ],
    '2026-03-04': [
        {
            time: 'morning',
            category: 'study',
            type: 'online',
            title: 'Kiến trúc và Thiết kế Phần mềm',
            code: 'DHKTPM18A - 42030015401',
            period: '10 - 12 (7:30 - 12:00)',
            room: 'Trực tuyến',
            teacher: 'TS. Nguyễn Văn A',
            note: 'Zoom FI30: 652 722 8922 / 123456',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'suspended',
            title: 'Hệ điều hành (TẠM NGỪNG)',
            code: 'DHKTPM18A - 42030014801',
            period: '10 - 12 (7:30 - 12:00)',
            room: 'A2.04',
            teacher: 'TS. Trần Văn E',
            note: '',
        },
    ],
    '2026-03-05': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Mạng máy tính',
            code: 'DHKTPM18A - 42030016501',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A3.02',
            teacher: 'TS. Huỳnh Thị B',
            note: '',
        },
        {
            time: 'afternoon',
            category: 'exam',
            type: 'exam',
            title: 'Thi cuối kỳ - Cấu trúc dữ liệu',
            code: 'DHKTPM18A - 42030011101',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'A1.01',
            teacher: 'Ban Giám thị',
            note: '',
        },
    ],
    '2026-03-06': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Trí tuệ nhân tạo',
            code: 'DHKTPM18A - 42030019801',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'A2.05',
            teacher: 'TS. Phạm Văn F',
            note: '',
        },
        {
            time: 'afternoon',
            category: 'exam',
            type: 'exam',
            title: 'Lập trình hướng đối tượng',
            code: 'DHKTPM18A - 42030012801',
            period: '10 - 12 (7:30 - 12:00)',
            room: 'A1.02',
            teacher: 'Ban Giám thị',
            note: '',
        },
    ],
    '2026-03-07': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'An toàn thông tin',
            code: 'DHKTPM18A - 42030020501',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A3.01',
            teacher: 'TS. Võ Thị G',
            note: '',
        },
    ],
    '2026-03-08': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Phân tích thiết kế hệ thống',
            code: 'DHKTPM18A - 42030017201',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'A2.03',
            teacher: 'TS. Đỗ Văn H',
            note: '',
        },
    ],
};

const TODAY = new Date();
let currentMonth = TODAY.getMonth();
let currentYear = TODAY.getFullYear();
let selectedDate = null;
let viewDate = new Date(TODAY);
let activeFilter = 'all';

const MONTH_NAMES = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
];

const DAY_NAMES = [
    'THỨ 2',
    'THỨ 3',
    'THỨ 4',
    'THỨ 5',
    'THỨ 6',
    'THỨ 7',
    'CHỦ NHẬT',
];
const TIME_PERIODS = ['Sáng', 'Trưa', 'Chiều'];
const TIME_KEYS = ['morning', 'noon', 'afternoon'];

$(document).ready(function () {
    initializeCalendar();
    setupEventHandlers();
});

function initializeCalendar() {
    renderMiniCalendar(currentMonth, currentYear);
    renderWeekCalendar(viewDate);
    $('.button-schedule').first().addClass('active');
}

function setupEventHandlers() {
    setupFilterButtons();
    setupNavigationButtons();
    setupMonthNavigation();
    setupTodayButton();
    setupPrintButton();
    setupMiniCalendarClick();
}

function setupFilterButtons() {
    $('.button-schedule').click(function () {
        $('.button-schedule').removeClass('active');
        $(this).addClass('active');

        const filterText = $(this).find('p').text().trim().replace(/\s+/g, ' ');

        const filterMap = {
            'Tất cả': 'all',
            'Lịch học': 'study',
            'Lịch thi': 'exam',
        };

        activeFilter = filterMap[filterText] || 'all';

        renderWeekCalendar(viewDate);
    });
}

function setupNavigationButtons() {
    $('.btn-prev-week').click(function () {
        const newDate = new Date(viewDate);
        newDate.setDate(newDate.getDate() - 7);
        viewDate = newDate;

        currentMonth = viewDate.getMonth();
        currentYear = viewDate.getFullYear();

        renderMiniCalendar(currentMonth, currentYear);
        renderWeekCalendar(viewDate);

        selectedDate = null;
        updateMiniCalendarSelection();
    });

    $('.btn-next-week').click(function () {
        const newDate = new Date(viewDate);
        newDate.setDate(newDate.getDate() + 7);
        viewDate = newDate;

        currentMonth = viewDate.getMonth();
        currentYear = viewDate.getFullYear();

        renderMiniCalendar(currentMonth, currentYear);
        renderWeekCalendar(viewDate);

        selectedDate = null;
        updateMiniCalendarSelection();
    });
}

function setupTodayButton() {
    $('.navbar-brand').click(function () {
        selectedDate = new Date(TODAY);
        viewDate = new Date(TODAY);

        currentMonth = TODAY.getMonth();
        currentYear = TODAY.getFullYear();

        renderMiniCalendar(currentMonth, currentYear);
        renderWeekCalendar(viewDate);
        updateMiniCalendarSelection();
    });
}

function setupMonthNavigation() {
    $('.month-selector button:first-child').click(function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderMiniCalendar(currentMonth, currentYear);
    });

    // Next month
    $('.month-selector button:last-child').click(function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderMiniCalendar(currentMonth, currentYear);
    });
}

function setupPrintButton() {
    $('.btn-print').click(function () {
        window.print();
    });
}

function renderMiniCalendar(month, year) {
    $('.month-text').text(`${MONTH_NAMES[month]}, ${year}`);

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    let html = '';
    let dayCount = 1;
    let nextMonthDay = 1;

    for (let i = 0; i < 6; i++) {
        html += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                const prevDay = daysInPrevMonth - firstDay + j + 1;
                html += `<td class="other-month" data-date="${year}-${month}-${prevDay}">${prevDay}</td>`;
            } else if (dayCount > daysInMonth) {
                html += `<td class="other-month" data-date="${year}-${month + 2}-${nextMonthDay}">${nextMonthDay}</td>`;
                nextMonthDay++;
            } else {
                const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayCount).padStart(2, '0')}`;

                const isToday =
                    dayCount === TODAY.getDate() &&
                    month === TODAY.getMonth() &&
                    year === TODAY.getFullYear();
                const todayClass = isToday ? ' today' : '';
                html += `<td class="${todayClass}" data-date="${dateStr}">${dayCount}</td>`;
                dayCount++;
            }
        }
        html += '</tr>';
        if (dayCount > daysInMonth) break;
    }

    $('.mini-calendar tbody').html(html);
}

function setupMiniCalendarClick() {
    $('.mini-calendar tbody')
        .off('click', 'td:not(.other-month)')
        .on('click', 'td:not(.other-month)', function () {
            const dateStr = $(this).data('date');
            const dateParts = dateStr.split('-');

            selectedDate = new Date(
                dateParts[0],
                dateParts[1] - 1,
                dateParts[2],
            );
            viewDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

            $('.mini-calendar td').removeClass('selected');
            $(this).addClass('selected');

            renderWeekCalendar(viewDate);
        });
}

function updateMiniCalendarSelection() {
    $('.mini-calendar td').removeClass('selected');

    if (!selectedDate) return;

    const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
    $(`.mini-calendar td[data-date="${dateStr}"]`).addClass('selected');
}

function getMonday(date) {
    const d = new Date(date.getTime());
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    d.setDate(diff);
    return d;
}

function formatDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function renderWeekCalendar(date) {
    const monday = getMonday(date);

    renderWeekHeader(monday);
    renderWeekBody(monday);
    attachEventHandlers();
}

function renderWeekHeader(monday) {
    let headerHtml = '<div class="time-row">';
    headerHtml += '<div class="time-slot"></div>';

    for (let i = 0; i < 7; i++) {
        const currentDay = new Date(monday);
        currentDay.setDate(monday.getDate() + i);
        const dayNum = currentDay.getDate();

        const isToday = currentDay.toDateString() === TODAY.toDateString();
        const todayClass = isToday ? ' today-column' : '';

        headerHtml += `
            <div class="day-column${todayClass}">
                <div class="day-name">${DAY_NAMES[i]}</div>
                <div class="day-number${isToday ? ' today' : ''}">${dayNum}</div>
            </div>
        `;
    }
    headerHtml += '</div>';
    $('.calendar-header').html(headerHtml);
}

function renderWeekBody(monday) {
    let bodyHtml = '';

    for (let t = 0; t < TIME_PERIODS.length; t++) {
        bodyHtml += '<div class="time-row">';
        bodyHtml += `<div class="time-slot">${TIME_PERIODS[t]}</div>`;

        for (let i = 0; i < 7; i++) {
            const currentDay = new Date(monday);
            currentDay.setDate(monday.getDate() + i);
            const dateStr = formatDate(currentDay);

            const isToday = currentDay.toDateString() === TODAY.toDateString();
            const todayClass = isToday ? ' today-column' : '';

            const daySchedule = scheduleData[dateStr] || [];

            const timeEvents = daySchedule.filter((e) => {
                if (e.time !== TIME_KEYS[t]) return false;

                if (activeFilter === 'all') return true;
                return e.category === activeFilter;
            });

            bodyHtml += `<div class="day-column${todayClass}">${renderEvents(timeEvents)}</div>`;
        }

        bodyHtml += '</div>';
    }
    $('.calendar-body').html(bodyHtml);
}

function attachEventHandlers() {
    $('.btn-join').click(function () {
        const eventContainer = $(this).closest('.event');

        // Tìm các element trong parent container
        const code = eventContainer.find('.event-code').text();
        const noteElement = eventContainer.find('.event-note');

        let note = noteElement.text().replace('Ghi chú:', '').trim();
        alert(`${code}\nOpen with ${note}`);
    });
}

function renderEvents(events) {
    if (events.length === 0) return '';

    return events
        .map(
            (event) => `
        <div class="event ${event.type}">
            <div class="event-title">${event.title}</div>
            <div class="event-code">${event.code}</div>
            <div class="event-time">
                <span class="label-time">Tiết:</span>
                ${event.period}
            </div>
            <div class="event-room">
                <span class="label-room">Phòng:</span>
                ${event.room}
            </div>
            <div class="event-teacher">
                <span class="label-teacher">GV:</span>
                ${event.teacher}
            </div>
            ${
                event.room === 'Trực tuyến'
                    ? `<div class="event-note"><span class="label-note">Ghi chú:</span> ${event.note}</div>
            <input type='button' class="btn-join" value="Tham gia">`
                    : ''
            }

        </div>
    `,
        )
        .join('');
}
