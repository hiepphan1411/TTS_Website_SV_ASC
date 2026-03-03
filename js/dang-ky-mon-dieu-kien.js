const courses = [
    {
        id: 1,
        code: 'THCS101',
        name: 'Ôn tập chuẩn đầu ra ngoại ngữ TOEIC 01',
        credits: 4,
        required: true,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },

    {
        id: 2,
        code: 'THCS102',
        name: 'Ôn tập chuẩn đầu ra ngoại ngữ TOEIC 02',
        credits: 4,
        required: true,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },

    {
        id: 3,
        code: 'THCS201',
        name: 'Ôn tập chuẩn đầu ra ngoại ngữ TOEIC 03',
        credits: 3,
        required: true,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },

    {
        id: 4,
        code: 'THCS202',
        name: 'Ôn tập chuẩn đầu ra ngoại ngữ TOEIC 04',
        credits: 4,
        required: true,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },

    {
        id: 5,
        code: 'THCS203',
        name: 'Ôn tập chuẩn đầu ra ngoại ngữ TOEIC 05',
        credits: 3,
        required: true,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },

    {
        id: 6,
        code: 'THCS204',
        name: 'Ôn tập chuẩn đầu ra ngoại ngữ TOEIC 06',
        credits: 3,
        required: false,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },

    {
        id: 7,
        code: 'THCS301',
        name: 'Ôn tập chuẩn đầu ra ngoại ngữ TOEIC 07',
        credits: 3,
        required: true,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },

    {
        id: 8,
        code: 'THCS302',
        name: 'Ôn tập chuẩn đầu ra ngoại ngữ TOEIC 08',
        credits: 4,
        required: false,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },

    {
        id: 9,
        code: 'THCS303',
        name: 'Ôn tập chuẩn đầu ra ngoại ngữ TOEIC 09',
        credits: 3,
        required: false,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },

    {
        id: 10,
        code: 'THCS304',
        name: 'Ôn tập chuẩn đầu ra ngoại ngữ TOEIC 10',
        credits: 3,
        required: true,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },

    {
        id: 11,
        code: 'THCS401',
        name: 'Ôn tập chuẩn đầu ra ngoại ngữ TOEIC 11',
        credits: 4,
        required: true,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },

    {
        id: 12,
        code: 'THCS402',
        name: 'Ôn tập chuẩn đầu ra ngoại ngữ TOEIC 12',
        credits: 3,
        required: false,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },
];

// Data lớp học phần

const classes = {
    1: [
        // Lớp 01 - Chờ sinh viên đăng ký (30/100 = 30%)
        {
            id: '01',
            courseCode: 'THCS101',
            courseName: 'TOEIC 011',
            credits: 4,
            slots: 100,
            registered: 30,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.101',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Nguyễn Văn A',
                    slots: 100,
                    registered: 30,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 4 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Trần Thị B',
                    slots: 30,
                    registered: 10,
                },
                {
                    group: 2,
                    day: 'Th 5 (Tiết 7 -> 9)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Trần Thị B',
                    slots: 30,
                    registered: 10,
                },
            ],
        },
        // Lớp 02 - Đang lên kế hoạch (65/100 = 65%)
        {
            id: '02',
            courseCode: 'THCS101',
            courseName: 'TOEIC 012',
            credits: 4,
            slots: 100,
            registered: 65,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.102',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Lê Văn C',
                    slots: 100,
                    registered: 65,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 6 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Phạm Văn D',
                    slots: 35,
                    registered: 30,
                },
                {
                    group: 2,
                    day: 'Th 7 (Tiết 7 -> 9)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Phạm Văn D',
                    slots: 35,
                    registered: 35,
                },
            ],
        },
        // Lớp 03 - Đã khóa (80/80 = 100%)
        {
            id: '03',
            courseCode: 'THCS101',
            courseName: 'TOEIC 013',
            credits: 4,
            slots: 80,
            registered: 80,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T5',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.103',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Võ Thị E',
                    slots: 80,
                    registered: 80,
                },
            ],
            practiceClasses: [],
        },
    ],

    // Môn 2: Cấu trúc dữ liệu và giải thuật - THCS102
    2: [
        // Lớp 01 - Chờ sinh viên đăng ký (25/100 = 25%)
        {
            id: '01',
            courseCode: 'THCS102',
            courseName: 'TOEIC 021',
            credits: 4,
            slots: 100,
            registered: 25,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.201',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Hoàng Văn F',
                    slots: 100,
                    registered: 25,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 3 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B2.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Đỗ Thị G',
                    slots: 30,
                    registered: 12,
                },
            ],
        },
        // Lớp 02 - Đang lên kế hoạch (70/90 = 78%)
        {
            id: '02',
            courseCode: 'THCS102',
            courseName: 'TOEIC 022',
            credits: 4,
            slots: 90,
            registered: 70,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T4',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.202',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Bùi Văn H',
                    slots: 90,
                    registered: 70,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS102',
            courseName: 'TOEIC 023',
            credits: 4,
            slots: 100,
            registered: 100,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T6',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.203',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Ngô Văn I',
                    slots: 100,
                    registered: 100,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B2.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Mai Thị J',
                    slots: 35,
                    registered: 35,
                },
            ],
        },
    ],

    3: [
        {
            id: '01',
            courseCode: 'THCS201',
            courseName: 'TOEIC 031',
            credits: 3,
            slots: 120,
            registered: 35,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.301',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Lý Văn K',
                    slots: 120,
                    registered: 35,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 5 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Vũ Văn L',
                    slots: 40,
                    registered: 15,
                },
                {
                    group: 2,
                    day: 'Th 6 (Tiết 7 -> 9)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Vũ Văn L',
                    slots: 40,
                    registered: 10,
                },
            ],
        },
        // Lớp 02 - Đang lên kế hoạch (85/110 = 77%)
        {
            id: '02',
            courseCode: 'THCS201',
            courseName: 'TOEIC 032',
            credits: 3,
            slots: 110,
            registered: 85,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T5',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.302',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Đặng Thị M',
                    slots: 110,
                    registered: 85,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 2 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Trương Văn N',
                    slots: 40,
                    registered: 38,
                },
            ],
        },
        // Lớp 03 - Đã khóa (90/90 = 100%)
        {
            id: '03',
            courseCode: 'THCS201',
            courseName: 'TOEIC 033',
            credits: 3,
            slots: 90,
            registered: 90,
            registered: 90,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T7',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.303',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Phan Văn O',
                    slots: 90,
                    registered: 90,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.03',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Huỳnh Thị P',
                    slots: 30,
                    registered: 30,
                },
            ],
        },
    ],

    // Môn 4-12: Tạo data tương tự (mỗi môn 3 lớp: chờ đăng ký, đang lên kế hoạch, đã khóa)
    4: [
        {
            id: '01',
            courseCode: 'THCS202',
            courseName: 'TOEIC 041',
            credits: 4,
            slots: 100,
            registered: 40,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Sáng (1 -> 4)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.401',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Nguyễn Q',
                    slots: 100,
                    registered: 40,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 3 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B4.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Trần R',
                    slots: 30,
                    registered: 15,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS202',
            courseName: 'TOEIC 042',
            credits: 4,
            slots: 90,
            registered: 70,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T4',
                    time: 'Chiều (7 -> 10)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.402',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Lê S',
                    slots: 90,
                    registered: 70,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS202',
            courseName: 'TOEIC 043',
            credits: 4,
            slots: 80,
            registered: 80,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T6',
                    time: 'Sáng (1 -> 4)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.403',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Phạm T',
                    slots: 80,
                    registered: 80,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B4.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Võ U',
                    slots: 30,
                    registered: 30,
                },
            ],
        },
    ],

    5: [
        {
            id: '01',
            courseCode: 'THCS203',
            courseName: 'TOEIC 051',
            credits: 3,
            slots: 100,
            registered: 35,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.501',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Hoàng V',
                    slots: 100,
                    registered: 35,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 5 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B5.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Đỗ W',
                    slots: 35,
                    registered: 12,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS203',
            courseName: 'TOEIC 052',
            credits: 3,
            slots: 95,
            registered: 60,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T5',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.502',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Bùi X',
                    slots: 95,
                    registered: 60,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS203',
            courseName: 'TOEIC 53',
            credits: 3,
            slots: 85,
            registered: 85,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T7',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.503',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Ngô Y',
                    slots: 85,
                    registered: 85,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 7 -> 9)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B5.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Lý Z',
                    slots: 30,
                    registered: 30,
                },
            ],
        },
    ],

    6: [
        {
            id: '01',
            courseCode: 'THCS204',
            courseName: 'TOEIC 061',
            credits: 3,
            slots: 110,
            registered: 45,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.601',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Mai AA',
                    slots: 110,
                    registered: 45,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 4 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B6.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Vũ BB',
                    slots: 40,
                    registered: 18,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS204',
            courseName: 'TOEIC 062',
            credits: 3,
            slots: 100,
            registered: 75,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T4',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.602',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Trương CC',
                    slots: 100,
                    registered: 75,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS204',
            courseName: 'TOEIC 063',
            credits: 3,
            slots: 90,
            registered: 90,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T6',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.603',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Phan DD',
                    slots: 90,
                    registered: 90,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 2 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B6.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Huỳnh EE',
                    slots: 30,
                    registered: 30,
                },
            ],
        },
    ],

    7: [
        {
            id: '01',
            courseCode: 'THCS301',
            courseName: 'TOEIC 071',
            credits: 3,
            slots: 100,
            registered: 38,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.701',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Nguyễn FF',
                    slots: 100,
                    registered: 38,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 6 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B7.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Trần GG',
                    slots: 35,
                    registered: 15,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS301',
            courseName: 'TOEIC 072',
            credits: 3,
            slots: 95,
            registered: 68,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T5',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.702',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Lê HH',
                    slots: 95,
                    registered: 68,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS301',
            courseName: 'TOEIC 073',
            credits: 3,
            slots: 85,
            registered: 85,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T7',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.703',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Phạm II',
                    slots: 85,
                    registered: 85,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B7.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Võ JJ',
                    slots: 30,
                    registered: 30,
                },
            ],
        },
    ],

    8: [
        {
            id: '01',
            courseCode: 'THCS302',
            courseName: 'TOEIC 081',
            credits: 4,
            slots: 90,
            registered: 42,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Sáng (1 -> 4)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.801',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Hoàng KK',
                    slots: 90,
                    registered: 42,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 3 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B8.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Đỗ LL',
                    slots: 30,
                    registered: 14,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS302',
            courseName: 'TOEIC 082',
            credits: 4,
            slots: 85,
            registered: 62,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T4',
                    time: 'Chiều (7 -> 10)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.802',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Bùi MM',
                    slots: 85,
                    registered: 62,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS302',
            courseName: 'TOEIC 083',
            credits: 4,
            slots: 80,
            registered: 80,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T6',
                    time: 'Sáng (1 -> 4)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.803',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Ngô NN',
                    slots: 80,
                    registered: 80,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 7 -> 9)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B8.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Lý OO',
                    slots: 28,
                    registered: 28,
                },
            ],
        },
    ],

    9: [
        {
            id: '01',
            courseCode: 'THCS303',
            courseName: 'TOEIC 091',
            credits: 3,
            slots: 100,
            registered: 48,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.901',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Mai PP',
                    slots: 100,
                    registered: 48,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 5 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B9.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Vũ QQ',
                    slots: 35,
                    registered: 18,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS303',
            courseName: 'TOEIC 092',
            credits: 3,
            slots: 90,
            registered: 72,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T5',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.902',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Trương RR',
                    slots: 90,
                    registered: 72,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS303',
            courseName: 'TOEIC 093',
            credits: 3,
            slots: 85,
            registered: 85,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T7',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.903',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Phan SS',
                    slots: 85,
                    registered: 85,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 2 (Tiết 7 -> 9)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B9.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Huỳnh TT',
                    slots: 30,
                    registered: 30,
                },
            ],
        },
    ],

    10: [
        {
            id: '01',
            courseCode: 'THCS304',
            courseName: 'TOEIC 0101',
            credits: 3,
            slots: 95,
            registered: 40,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1001',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Nguyễn UU',
                    slots: 95,
                    registered: 40,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 4 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B10.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Trần VV',
                    slots: 32,
                    registered: 16,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS304',
            courseName: 'TOEIC 0102',
            credits: 3,
            slots: 88,
            registered: 65,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T4',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1002',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Lê WW',
                    slots: 88,
                    registered: 65,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS304',
            courseName: 'TOEIC 0103',
            credits: 3,
            slots: 80,
            registered: 80,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T6',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1003',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Phạm XX',
                    slots: 80,
                    registered: 80,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B10.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Võ YY',
                    slots: 28,
                    registered: 28,
                },
            ],
        },
    ],

    11: [
        {
            id: '01',
            courseCode: 'THCS401',
            courseName: 'TOEIC 0111',
            credits: 4,
            slots: 80,
            registered: 32,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Sáng (1 -> 4)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1101',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Hoàng ZZ',
                    slots: 80,
                    registered: 32,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 6 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B11.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Đỗ AAA',
                    slots: 25,
                    registered: 10,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS401',
            courseName: 'TOEIC 0112',
            credits: 4,
            slots: 75,
            registered: 58,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T5',
                    time: 'Chiều (7 -> 10)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1102',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Bùi BBB',
                    slots: 75,
                    registered: 58,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS401',
            courseName: 'TOEIC 0113',
            credits: 4,
            slots: 70,
            registered: 70,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T7',
                    time: 'Sáng (1 -> 4)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1103',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Ngô CCC',
                    slots: 70,
                    registered: 70,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 7 -> 9)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B11.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Lý DDD',
                    slots: 25,
                    registered: 25,
                },
            ],
        },
    ],

    12: [
        {
            id: '01',
            courseCode: 'THCS402',
            courseName: 'TOEIC 0121',
            credits: 3,
            slots: 90,
            registered: 36,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1201',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Mai EEE',
                    slots: 90,
                    registered: 36,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 3 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B12.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Vũ FFF',
                    slots: 30,
                    registered: 12,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS402',
            courseName: 'TOEIC 0122',
            credits: 3,
            slots: 85,
            registered: 64,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T4',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1202',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Trương GGG',
                    slots: 85,
                    registered: 64,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS402',
            courseName: 'TOEIC 0123',
            credits: 3,
            slots: 80,
            registered: 80,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T6',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1203',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Phan HHH',
                    slots: 80,
                    registered: 80,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 2 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B12.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Huỳnh III',
                    slots: 28,
                    registered: 28,
                },
            ],
        },
    ],
};

let selectedCourse = null;
let selectedClass = null;
let registeredClasses = [];

function init() {
    renderCourseTable();
    initScheduleGrid();
    updateMobileSchedule(2);
    attachEventHandlers();
}

//bảng môn học
function renderCourseTable() {
    const searchText = $('#searchCourse').val().toLowerCase();
    const activeTab = $('.tab-item.active').data('tab');

    const filtered = courses.filter((course) => {
        const matchSearch =
            course.code.includes(searchText) ||
            course.name.toLowerCase().includes(searchText);
        const matchTab = course.type === activeTab;

        // môn học đã được đăng ký chưa
        const isRegistered = registeredClasses.some(
            (reg) => reg.courseId === course.id,
        );

        // các môn chưa đăng ký
        return matchSearch && matchTab && !isRegistered;
    });

    const tbody = $('#courseTable tbody');
    tbody.empty();

    filtered.forEach((course, index) => {
        let rowClass = '';
        const row = $(`
                    <tr data-course-id="${course.id}" class="${rowClass}">
                        <td>${index + 1}</td>
                        <td>${course.code}</td>
                        <td>${course.name}</td>
                        <td>${course.credits}</td>
                    </tr>
                `);
        row.on('click', function () {
            selectCourse(course);
        });

        tbody.append(row);
    });
}

// Xem chi tiết môn học trong modal
function viewCourseDetail(course) {
    const classesForCourse = classes[course.id] || [];

    // Thông tin chung - layout ngang
    let modalHtml = `
        <div class="course-info-header">
            <div class="info-item">
                <label>MÃ MÔN HỌC</label>
                <div class="value">${course.code}</div>
            </div>
            <div class="info-item">
                <label>TÊN MÔN HỌC</label>
                <div class="value">${course.name}</div>
            </div>
            <div class="info-item">
                <label>SỐ TÍN CHỈ</label>
                <div class="value">${course.credits}</div>
            </div>
        
        </div>
    `;

    // Bảng danh sách lớp học phần
    if (classesForCourse.length > 0) {
        modalHtml += `
            <div class="schedule-section-new">
                <h3 class="section-title-new">DANH SÁCH LỚP HỌC PHẦN</h3>
                <table class="schedule-table-new">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>MÃ LỚP</th>
                            <th>SĨ SỐ</th>
                            <th>TRẠNG THÁI</th>
                            <th>LỊCH HỌC</th>
                            <th>GIẢNG VIÊN</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        classesForCourse.forEach((cls, index) => {
            const available = cls.slots - cls.registered;
            let statusClass = 'ready';
            let statusText = 'Chờ đăng ký';

            if (available <= 0) {
                statusClass = 'disabled';
                statusText = 'Đã khóa';
            } else if (cls.registered > cls.slots * 0.5) {
                statusClass = 'waiting';
                statusText = 'Đang lên kế hoạch';
            }

            // Lấy lịch học lý thuyết
            const theorySchedule =
                cls.theoryClasses.length > 0 ? cls.theoryClasses[0] : null;
            const scheduleText = theorySchedule
                ? `${theorySchedule.day} - ${theorySchedule.time}`
                : '-';

            const teacherText =
                theorySchedule && theorySchedule.instructor
                    ? theorySchedule.instructor
                    : '-';

            modalHtml += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${course.code}${cls.id}</td>
                    <td>${cls.registered}/${cls.slots}</td>
                    <td><span class="status-label ${statusClass}">${statusText}</span></td>
                    <td>${scheduleText}</td>
                    <td>${teacherText}</td>
                </tr>
            `;
        });

        modalHtml += `
                    </tbody>
                </table>
            </div>
        `;
    } else {
        modalHtml += `
            <div class="empty-state">
                <p>Chưa có lớp học phần nào được mở</p>
            </div>
        `;
    }

    openDetailModal('Chi tiết lớp học phần', modalHtml);
}

// Chọn môn học
function selectCourse(course) {
    selectedCourse = course;
    selectedClass = null;

    $('#courseTable tbody tr').removeClass('selected');
    $('#courseTable tbody tr[data-course-id="' + course.id + '"]').addClass(
        'selected',
    );

    // Render lớp học phần
    renderWaitingClasses(course.id);

    // Reset chi tiết
    $('#classDetailContainer').html(`
                <div class="empty-state">
                    <p>Chọn một lớp học phần để xem chi tiết</p>
                </div>
            `);

    // Scroll xuống phần lớp học phần
    setTimeout(() => {
        const waitingSection = $('.two-column');
        if (waitingSection.length) {
            $('html, body').animate(
                {
                    scrollTop: waitingSection.offset().top - 100,
                },
                500,
            );
        }
    }, 100);
}

// lớp học phần chờ đăng ký
function renderWaitingClasses(courseId) {
    const classesForCourse = classes[courseId] || [];
    const tbody = $('#waitingClassBody');
    tbody.empty();

    if (classesForCourse.length === 0) {
        tbody.html(`
                    <tr>
                        <td colspan="2" class="text-center text-muted" style="padding: 30px;">
                            Không có lớp học phần được mở
                        </td>
                    </tr>
                `);
        return;
    }

    classesForCourse.forEach((cls, index) => {
        const course = courses.find((c) => c.id === courseId);
        const available = cls.slots - cls.registered;

        // Trạng thái lớp học phần
        let statusClass = 'ready';
        let statusText = 'Chờ sinh viên đăng ký';
        let canRegister = true; // cho phép đăng ký

        if (available <= 0) {
            statusClass = 'disabled';
            statusText = 'Đã khóa';
            canRegister = false; // Không cho phép đăng ký
        } else if (cls.registered > cls.slots * 0.5) {
            statusClass = 'waiting';
            statusText = 'Đang lên kế hoạch';
            canRegister = false; // Không cho phép đăng ký
        }

        cls.statusClass = statusClass;
        cls.statusText = statusText;
        cls.canRegister = canRegister;

        const row = $(`
                    <tr data-class-id="${cls.id}">
                        <td style="text-align: center;">${index + 1}</td>
                        <td style="text-align: left;font-size: 12px;">
                            <div style=color:black;"><strong>${course.name}</strong></div>
                            <div style="color: #505050; margin-top: 4px;">Mã lớp học phần: ${course.code}${cls.id}</div>
                            <div style="color: #505050;">Sĩ số: ${cls.registered}/${cls.slots}</div>
                        </td>
                        <td style="text-align: left;">
                            <span class="status-label ${statusClass}">${statusText}</span>
                        </td>
                    </tr>
                `);

        row.on('click', function () {
            selectClass(courseId, cls.id);
        });

        tbody.append(row);
    });
}

// Chọn lớp học phần - Hiển thị chi tiết bên phải
function selectClass(courseId, classId) {
    const cls = classes[courseId].find((c) => c.id === classId);
    const course = courses.find((c) => c.id === courseId);

    if (!cls || !course) return;

    selectedClass = { courseId, classId, class: cls };

    $('#waitingClassBody tr').removeClass('selected');
    $('#waitingClassBody tr[data-class-id="' + classId + '"]').addClass(
        'selected',
    );

    // Hiển thị chi tiết ở panel bên phải
    renderClassDetail(courseId, cls);
}

// Hiển thị modal chi tiết lớp học phần
function viewClassDetail(course, cls) {
    // Thông tin chung - layout ngang
    let modalHtml = `
        <div class="course-info-header">
            <div class="info-item">
                <label>TÊN MÔN HỌC</label>
                <div class="value">${course.name}</div>
            </div>
            <div class="info-item">
                <label>MÃ MÔN HỌC</label>
                <div class="value">${course.code}</div>
            </div>
            <div class="info-item">
                <label>LỚP HỌC PHẦN</label>
                <div class="value">${course.code}${cls.id}</div>
            </div>
            <div class="info-item">
                <label>SỐ TÍN CHỈ</label>
                <div class="value">${course.credits}</div>
            </div>
            <div class="info-item">
                <label>SĨ SỐ</label>
                <div class="value">${cls.registered}/${cls.slots}</div>
            </div>
        </div>
    `;

    // Bảng lịch học lý thuyết
    if (cls.theoryClasses.length > 0) {
        modalHtml += `
            <div class="schedule-section-new">
                <h3 class="section-title-new">LỊCH HỌC LÝ THUYẾT</h3>
                <table class="schedule-table-new">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>LỊCH HỌC</th>
                            <th>NHÓM</th>
                            <th>PHÒNG</th>
                            <th>CƠ SỞ</th>
                            <th>GIẢNG VIÊN</th>
                            <th>THỜI GIAN</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        cls.theoryClasses.forEach((theory, index) => {
            modalHtml += `
                <tr>
                    <td>${index + 1}</td>
                    <td>LT - ${theory.day} ${theory.time}</td>
                    <td>${theory.group || '-'}</td>
                    <td>${theory.building || '-'}</td>
                    <td>${theory.room || '-'}</td>
                    <td>${theory.instructor || '-'}</td>
                    <td>${theory.startDate} - ${theory.endDate}</td>
                </tr>
            `;
        });

        modalHtml += `
                    </tbody>
                </table>
            </div>
        `;
    }

    // Bảng lịch học thực hành
    if (cls.practiceClasses.length > 0) {
        modalHtml += `
            <div class="schedule-section-new">
                <h3 class="section-title-new">LỊCH HỌC THỰC HÀNH</h3>
                <table class="schedule-table-new">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>LỊCH HỌC</th>
                            <th>NHÓM</th>
                            <th>PHÒNG</th>
                            <th>CƠ SỞ</th>
                            <th>GIẢNG VIÊN</th>
                            <th>THỜI GIAN</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        cls.practiceClasses.forEach((practice, index) => {
            modalHtml += `
                <tr>
                    <td>${index + 1}</td>
                    <td>TH - ${practice.day}</td>
                    <td>${practice.group || '-'}</td>
                    <td>${practice.building || '-'}</td>
                    <td>${practice.room || '-'}</td>
                    <td>${practice.instructor || '-'}</td>
                    <td>${practice.startDate} - ${practice.endDate}</td>
                </tr>
            `;
        });

        modalHtml += `
                    </tbody>
                </table>
            </div>
        `;
    }

    openDetailModal('Chi tiết lớp học phần', modalHtml);
}

//chi tiết lớp học phần
function renderClassDetail(courseId, cls) {
    const course = courses.find((c) => c.id === courseId);
    const available = cls.slots - cls.registered;

    // Sử dụng trạng thái từ cls
    let statusClass = cls.statusClass || 'ready';
    let statusText = cls.statusText || 'Chờ sinh viên đăng ký';
    let canRegister = cls.canRegister !== undefined ? cls.canRegister : true;

    // Nếu chưa có trạng thái, tính lại
    if (!cls.statusClass) {
        if (available <= 0) {
            statusClass = 'disabled';
            statusText = 'Đã khóa';
            canRegister = false;
        } else if (cls.registered > cls.slots * 0.5) {
            statusClass = 'waiting';
            statusText = 'Đang lên kế hoạch';
            canRegister = false;
        }
    }

    let html = ``;

    // Hiển thị cảnh báo nếu có thực hành
    if (cls.practiceClasses.length > 0) {
        html += `
                    <div class="alert-box">
                        Lớp học phần có chia nhóm thực hành, vui lòng chọn lịch cố nhóm.
                    </div>
                    `;
    }

    html += `
                <div style="background-color: #F7F8FA; border-radius: 4px; margin-bottom: 20px;padding: 15px 0;">
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
                        <div style="text-align: center;">
                            <div style="font-size: 12px; color: #505050; margin-bottom: 5px;">Trạng thái</div>
                            <div style="font-size: 14px; font-weight: bold;">
                                <span class="status-label ${statusClass}">${statusText}</span>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 12px; color: #505050; margin-bottom: 5px;">Nhóm</div>
                            <div id="selectedGroup" style="font-size: 14px; color: #505050; font-weight: 500;">-</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 12px; color: #505050; margin-bottom: 5px;">Sĩ số tối đa</div>
                            <div style="font-size: 14px; color: #505050; font-weight: 500;">${cls.slots}</div>
                        </div>
                    </div>
                </div>
            `;

    // Hiển thị lý thuyết
    if (cls.theoryClasses.length > 0) {
        html += `
                    <div class="class-detail">
                        <div class="detail-title">A. LỊCH HỌC LÝ THUYẾT (LT)</div>
                        <table class="schedule-detail-table">
                            <thead>
                                <tr>
                                    <th>LỊCH HỌC</th>
                                    <th>CƠ SỞ</th>
                                    <th>DÃY NHÀ</th>
                                    <th>PHÒNG</th>
                                    <th>GIẢNG VIÊN</th>
                                    <th>THỜI GIAN HỌC</th>
                                </tr>
                            </thead>
                            <tbody>
                `;

        cls.theoryClasses.forEach((theory, index) => {
            html += `
                        <tr>
                            <td>${theory.day} (${theory.time})</td>
                            <td>${theory.room}</td>
                            <td>X (CS1)</td>
                            <td>X${theory.building}</td>
                            <td>${theory.instructor}</td>
                            <td>${theory.startDate} - ${theory.endDate}</td>
                        </tr>
                    `;
        });

        html += `
                            </tbody>
                        </table>
                    </div>
                `;
    }

    // Hiển thị thực hành nếu có
    if (cls.practiceClasses.length > 0) {
        html += `
                    <div class="class-detail">
                        <div class="detail-title">B. LỊCH HỌC THỰC HÀNH (TH)</div>
                        <table class="schedule-detail-table">
                            <thead>
                                <tr>
                                    <th style="width: 60px;">CHỌN</th>
                                    <th style="width: 80px;">NHÓM</th>
                                    <th>LỊCH HỌC</th>
                                    <th>CƠ SỞ</th>
                                    <th>DÃY NHÀ</th>
                                    <th>PHÒNG</th>
                                    <th>GIẢNG VIÊN</th>
                                    <th style="width: 80px;">SĨ SỐ</th>
                                </tr>
                            </thead>
                            <tbody>
                `;

        cls.practiceClasses.forEach((practice, index) => {
            const isFull = practice.registered >= practice.slots;
            html += `
                        <tr style="${isFull ? 'opacity: 0.5; background-color: #f5f5f5;' : ''}">
                            <td><input type="radio" name="practice" value="${index}" ${isFull ? 'disabled' : ''} ${index === 0 && !isFull ? 'checked' : ''}></td>
                            <td>${practice.group}</td>
                            <td>${practice.day}</td>
                            <td>${practice.room}</td>
                            <td>B (CS1)</td>
                            <td>${practice.building}</td>
                            <td>${practice.instructor}</td>
                            <td>${practice.registered}/${practice.slots}</td>
                        </tr>
                    `;
        });

        html += `
                            </tbody>
                        </table>
                    </div>
                `;
    }

    html += `
                <button class="btn-register" onclick="registerClass()" ${!canRegister ? 'disabled' : ''}>
                    ĐĂNG KÝ
                </button>

            `;

    $('#classDetailContainer').html(html);

    // event radio buttons cập nhật số nhóm
    $('input[name="practice"]').on('change', function () {
        const selectedIndex = $(this).val();
        const selectedPractice = cls.practiceClasses[selectedIndex];
        if (selectedPractice) {
            $('#selectedGroup').text(selectedPractice.group);
        }
    });

    // Set nhóm mặc định nếu có radio đã chọn
    const checkedRadio = $('input[name="practice"]:checked');
    if (checkedRadio.length > 0) {
        const selectedIndex = checkedRadio.val();
        const selectedPractice = cls.practiceClasses[selectedIndex];
        if (selectedPractice) {
            $('#selectedGroup').text(selectedPractice.group);
        }
    }
}

// Đăng ký lớp học phần
function registerClass() {
    if (!selectedClass) return;

    const courseId = selectedClass.courseId;
    const course = courses.find((c) => c.id === courseId);
    const cls = selectedClass.class;

    // Kiểm tra lớp đã đăng ký
    if (
        registeredClasses.some(
            (r) => r.courseId === courseId && r.classId === cls.id,
        )
    ) {
        alert('Lớp này đã được đăng ký!');
        return;
    }

    // Kiểm tra nếu có thực hành thì phải chọn nhóm
    if (cls.practiceClasses.length > 0) {
        const practiceChoice = $('input[name="practice"]:checked').val();
        if (practiceChoice === undefined) {
            alert('Vui lòng chọn nhóm thực hành trước khi đăng ký!');
            return;
        }
    }

    // Thêm vào danh sách đã đăng ký
    registeredClasses.push({
        courseId: courseId,
        classId: cls.id,
        course: course,
        class: cls,
        registeredDate: new Date().toLocaleDateString('vi-VN'),
        theoryChoice: 0,
        practiceChoice: $('input[name="practice"]:checked').val() || null,
    });

    renderRegisteredTable();

    updateSchedule();

    renderCourseTable();

    selectedClass = null;
    selectedCourse = null;

    $('#courseTable tbody tr').removeClass('selected');

    // reset bảng lớp chờ đăng ký
    $('#waitingClassBody').html(`
                    <tr>
                        <td colspan="3" class="text-center text-muted" style="padding: 30px;">
                            Chọn một môn học để xem danh sách lớp
                        </td>
                    </tr>
                `);

    // reset bảng chi tiết HP
    $('#classDetailContainer').html(`
                    <div class="empty-state">  
                        <p>Chọn một lớp học phần để xem chi tiết</p>
                    </div>
                `);

    alert('Đăng ký lớp học phần thành công!');
}

// bảng đã đăng ký
function renderRegisteredTable() {
    const tbody = $('#registeredTableBody');

    if (registeredClasses.length === 0) {
        tbody.html(`
                    <tr>
                        <td colspan="13" class="text-center text-muted" style="padding: 30px;">
                            Chưa có lớp học phần đã đăng ký
                        </td>
                    </tr>
                `);
        return;
    }

    tbody.empty();

    registeredClasses.forEach((reg, index) => {
        const theorySchedule = reg.class.theoryClasses[reg.theoryChoice];
        const practiceSchedule =
            reg.practiceChoice !== null
                ? reg.class.practiceClasses[reg.practiceChoice]
                : null;

        const practiceGroup = practiceSchedule ? practiceSchedule.group : '-';

        const row = $(`
                    <tr>
                        <td>${index + 1}</td>
                        <td>${reg.course.code}</td>
                        <td>${reg.course.name}</td>
                        <td>${reg.course.credits}</td>
                        <td>${practiceGroup}</td>
                        <td>3,380,000</td>
                        <td>3,380,000</td>
                        <td>30/05/2025</td>
                        <td>Đã thu</td>
                       
                        <td><span class="status-label ready">Đăng ký mới</span></td>
                         <td>${reg.registeredDate}</td>
                        <td>Chờ sinh viên đăng ký</td>
                        <td>
                            <span class="action-icon view" onclick="viewRegistered(${index})" title="Xem"><i class="fa-solid fa-eye"></i></span>
                            <span class="action-icon delete" onclick="deleteRegistered(${index})" title="Xóa"><i class="fa-solid fa-trash"></i></span>
                        </td>
                    </tr>
                `);

        tbody.append(row);
    });
}

// xóa đăng ký
function deleteRegistered(index) {
    if (confirm('Bạn chắc chắn muốn hủy đăng ký lớp này?')) {
        registeredClasses.splice(index, 1);
        renderRegisteredTable();
        updateSchedule();

        renderCourseTable();
    }
}

function viewRegistered(index) {
    const reg = registeredClasses[index];
    const theorySchedule =
        reg.class.theoryClasses.length > 0 ? reg.class.theoryClasses[0] : null;
    const practiceSchedule =
        reg.practiceChoice !== null
            ? reg.class.practiceClasses[reg.practiceChoice]
            : null;

    // Thông tin chung - layout ngang theo ảnh
    let modalHtml = `
        <div class="course-info-header">
            <div class="info-item">
                <label>TÊN MÔN HỌC</label>
                <div class="value">${reg.course.name}</div>
            </div>
            <div class="info-item">
                <label>MÃ MÔN HỌC</label>
                <div class="value">${reg.course.code}</div>
            </div>
            <div class="info-item">
                <label>LỚP HỌC PHẦN</label>
                <div class="value">${reg.class.id}</div>
            </div>
            <div class="info-item">
                <label>SỐ TÍN CHỈ</label>
                <div class="value">${reg.course.credits}</div>
            </div>
            <div class="info-item">
                <label>NGÀY ĐĂNG KÝ</label>
                <div class="value">${reg.registeredDate}</div>
            </div>
        </div>
    `;

    // Bảng lịch học và chi tiết
    modalHtml += `
        <div class="schedule-section-new">
            <h3 class="section-title-new">LỊCH HỌC & CHI TIẾT</h3>
            <table class="schedule-table-new">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>LỊCH HỌC</th>
                        <th>NHÓM</th>
                        <th>PHÒNG</th>
                        <th>DÃY NHÀ</th>
                        <th>CƠ SỞ</th>
                        <th>GIẢNG VIÊN</th>
                        <th>THỜI GIAN</th>
                    </tr>
                </thead>
                <tbody>
    `;

    modalHtml += `
        <tr class="registered-practice-row">
            <td>1</td>
            <td>TH - Thứ 3 (Tiết 1 → 4)</td>
            <td>1</td>
            <td>A.01</td>
            <td>Nhà A</td>
            <td>Cơ sở 1</td>
            <td>TS Nguyễn Văn A</td>
            <td>02/02/2026 - 15/05/2026</td>
        </tr>
    `;

    modalHtml += `
        <tr class="registered-practice-row">
            <td>2</td>
            <td>TH - Thứ 5 (Tiết 1 → 4)</td>
            <td>2</td>
            <td>A.01</td>
            <td>Nhà A</td>
            <td>Cơ sở 1</td>
            <td>TS Nguyễn Văn A</td>
            <td>02/02/2026 - 15/05/2026</td>
        </tr>
    `;

    const hasRegisteredPractice = reg.practiceChoice !== null;
    const row3Class = hasRegisteredPractice ? '' : 'unregistered-row';

    modalHtml += `
        <tr class="${row3Class}">
            <td>3</td>
            <td>LT - Thứ 2 (Tiết 1 → 4)</td>
            <td></td>
            <td>A.01</td>
            <td>Nhà A</td>
            <td>Cơ sở 1</td>
            <td>TS Nguyễn Văn A</td>
            <td>02/02/2026 - 15/05/2026</td>
        </tr>
    `;

    modalHtml += `
                </tbody>
            </table>
        </div>
    `;

    openDetailModal('Chi tiết lớp học phần', modalHtml);
}

// Mở modal
function openDetailModal(title, content) {
    const html = `
        <div class="modal-overlay" onclick="closeDetailModal(event)">
            <div class="modal-dialog" onclick="event.stopPropagation();">
                <div class="modal-header">
                    <h3 class="modal-title">${title}</h3>
                    <button onclick="closeDetailModal()" class="modal-close-btn">×</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        </div>

    `;

    $('.modal-overlay').remove();
    $('body').append(html);
}

function closeDetailModal(event) {
    if (event && event.target.classList.contains('modal-overlay')) {
        $('.modal-overlay').fadeOut(200, function () {
            $(this).remove();
        });
    } else if (!event) {
        $('.modal-overlay').fadeOut(200, function () {
            $(this).remove();
        });
    }
}

$(document).keyup(function (e) {
    if (e.key === 'Escape') {
        closeDetailModal();
    }
});

// lịch biểu
function initScheduleGrid() {
    const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
    const sessions = [
        {
            label: 'Sáng <br> (1-6)',
            slots: ['(1-3)', '(4-6)'],
            time: 'morning',
        },
        {
            label: 'Chiều </br> (7-12)',
            slots: ['(7-9)', '(10-12)'],
            time: 'afternoon',
        },
        {
            label: 'Tối </br> (13-16)',
            slots: ['(13-15)', '(16)'],
            time: 'evening',
        },
    ];

    const grid = $('#scheduleGrid');
    grid.empty();

    grid.append('<div class="time-slot">Ca</div>');
    days.forEach((day) => {
        grid.append(`<div class="grid-header">${day}</div>`);
    });

    sessions.forEach((session) => {
        grid.append(
            `<div class="time-slot" style="grid-row: span 2; display: flex; align-items: center; justify-content: center;">${session.label}</div>`,
        );

        // tiết 1-3,7-9, 13-15
        days.forEach((day) => {
            grid.append(
                `<div class="schedule-cell empty" data-day="${day}" data-time="${session.time}" data-slot="1"></div>`,
            );
        });

        // tiết 4-6, 10-12, 16
        days.forEach((day) => {
            grid.append(
                `<div class="schedule-cell empty" data-day="${day}" data-time="${session.time}" data-slot="2"></div>`,
            );
        });
    });
}

// Update lịch biểu
function updateSchedule() {
    $('.schedule-cell')
        .removeClass('theory practice online')
        .addClass('empty')
        .html('')
        .css('grid-row', '')
        .show();

    let totalCredits = 0;
    let totalCourses = new Set();

    registeredClasses.forEach((reg) => {
        totalCourses.add(reg.courseId);
        totalCredits += reg.course.credits;

        const theorySchedule =
            reg.class.theoryClasses.length > 0
                ? reg.class.theoryClasses[0]
                : null;
        if (theorySchedule) {
            const dayMatch = theorySchedule.day.match(/T(\d)/);
            if (dayMatch) {
                const day = 'T' + dayMatch[1];
                const timeInfo = getTimeAndSlot(theorySchedule.time);

                const cells = $(
                    `.schedule-cell[data-day="${day}"][data-time="${timeInfo.time}"]`,
                );

                if (timeInfo.fullSession) {
                    const firstCell = $(
                        `.schedule-cell[data-day="${day}"][data-time="${timeInfo.time}"][data-slot="1"]`,
                    );
                    if (firstCell.length) {
                        const existing = firstCell.html();
                        if (
                            existing &&
                            existing.trim() !== '' &&
                            !firstCell.hasClass('empty')
                        ) {
                            firstCell.html(
                                existing +
                                    '<div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed #ddd;"></div>' +
                                    `<div style="text-align: left; padding: 4px 0;">
                                        <p class="schedule-course-code-theory">${reg.course.code}</p>
                                        <p class="schedule-building-theory">${theorySchedule.building}</p>
                                    </div>`,
                            );
                        } else {
                            firstCell
                                .removeClass('empty')
                                .addClass('theory')
                                .css('grid-row', 'span 2')
                                .html(
                                    `<div style="text-align: left; padding: 4px 0;">
                                        <p class="schedule-course-code-theory">${reg.course.code}</p>
                                        <p class="schedule-building-theory">${theorySchedule.building}</p>
                                    </div>`,
                                );

                            // Ẩn dòng thứ 2
                            const secondCell = $(
                                `.schedule-cell[data-day="${day}"][data-time="${timeInfo.time}"][data-slot="2"]`,
                            );
                            secondCell.hide();
                        }
                    }
                } else {
                    const cell = $(
                        `.schedule-cell[data-day="${day}"][data-time="${timeInfo.time}"][data-slot="${timeInfo.slot}"]`,
                    );
                    if (cell.length) {
                        const existing = cell.html();
                        if (existing && existing.trim() !== '') {
                            cell.html(
                                existing +
                                    '<div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed #ddd;"></div>' +
                                    `<div style="text-align: left; padding: 4px 0;">
                                        <p class="schedule-course-code-theory">${reg.course.code}</p>
                                        <p class="schedule-building-theory">${theorySchedule.building}</p>
                                    </div>`,
                            );
                        } else {
                            cell.removeClass('empty')
                                .addClass('theory')
                                .html(
                                    `<div style="text-align: left; padding: 4px 0;">
                                        <p class="schedule-course-code-theory">${reg.course.code}</p>
                                        <p class="schedule-building-theory">${theorySchedule.building}</p>
                                    </div>`,
                                );
                        }
                    }
                }
            }
        }

        if (reg.practiceChoice !== null) {
            const practiceSchedule =
                reg.class.practiceClasses[reg.practiceChoice];
            if (practiceSchedule) {
                const dayMatch = practiceSchedule.day.match(/Th (\d)/);
                if (dayMatch) {
                    const dayNum = parseInt(dayMatch[1]);
                    const day = 'T' + dayNum;
                    const timeInfo = getTimeAndSlot(practiceSchedule.day);

                    if (timeInfo.fullSession) {
                        const firstCell = $(
                            `.schedule-cell[data-day="${day}"][data-time="${timeInfo.time}"][data-slot="1"]`,
                        );
                        if (firstCell.length) {
                            const existing = firstCell.html();
                            if (
                                existing &&
                                existing.trim() !== '' &&
                                !firstCell.hasClass('empty')
                            ) {
                                firstCell.html(
                                    existing +
                                        '<div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed #ddd;"></div>' +
                                        `<div style="text-align: left; padding: 4px 0;">
                                            <p class="schedule-course-code-practice" >${reg.course.code}</p>
                                            <p class="schedule-building-practice" >${practiceSchedule.building}</p>
                                        </div>`,
                                );
                            } else {
                                firstCell
                                    .removeClass('empty')
                                    .addClass('practice')
                                    .css('grid-row', 'span 2')
                                    .html(
                                        `<div style="text-align: left; padding: 4px 0;">
                                            <p class="schedule-course-code-practice" >${reg.course.code}</p>
                                            <p class="schedule-building-practice" >${practiceSchedule.building}</p>
                                        </div>`,
                                    );

                                const secondCell = $(
                                    `.schedule-cell[data-day="${day}"][data-time="${timeInfo.time}"][data-slot="2"]`,
                                );
                                secondCell.hide();
                            }
                        }
                    } else {
                        const cell = $(
                            `.schedule-cell[data-day="${day}"][data-time="${timeInfo.time}"][data-slot="${timeInfo.slot}"]`,
                        );
                        if (cell.length) {
                            const existing = cell.html();
                            if (existing && existing.trim() !== '') {
                                cell.html(
                                    existing +
                                        '<div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed #ddd;"></div>' +
                                        `<div style="text-align: left; padding: 4px 0;">
                                            <p class="schedule-course-code-practice" >${reg.course.code}</p>
                                            <p class="schedule-building-practice" >${practiceSchedule.building}</p>
                                        </div>`,
                                );
                            } else {
                                cell.removeClass('empty')
                                    .addClass('practice')
                                    .html(
                                        `<div style="text-align: left; padding: 4px 0;">
                                            <p class="schedule-course-code-practice">${reg.course.code}</p>
                                            <p class="schedule-building-practice" >${practiceSchedule.building}</p>
                                        </div>`,
                                    );
                            }
                        }
                    }
                }
            }
        }
    });

    $('#creditCount').text(totalCredits);
    $('#courseCount').text(totalCourses.size);

    const activeDay = $('.mobile-day-tab.active').data('day') || 2;
    updateMobileSchedule(activeDay);
}

function getTimeAndSlot(timeStr) {
    const slotMatch = timeStr.match(/(\d+)\s*->\s*(\d+)/);

    if (slotMatch) {
        const startSlot = parseInt(slotMatch[1]);
        const endSlot = parseInt(slotMatch[2]);

        if (startSlot >= 1 && endSlot <= 6) {
            // Ca sáng
            if (endSlot <= 3) {
                return {
                    time: 'morning',
                    slot: 1,
                    fullSession: false,
                };
            } else if (startSlot >= 4) {
                return {
                    time: 'morning',
                    slot: 2,
                    fullSession: false,
                };
            } else {
                return {
                    time: 'morning',
                    slot: 1,
                    fullSession: true,
                };
            }
        } else if (startSlot >= 7 && endSlot <= 12) {
            // Ca chiều
            if (endSlot <= 9) {
                return {
                    time: 'afternoon',
                    slot: 1,
                    fullSession: false,
                };
            } else if (startSlot >= 10) {
                return {
                    time: 'afternoon',
                    slot: 2,
                    fullSession: false,
                };
            } else {
                return {
                    time: 'afternoon',
                    slot: 1,
                    fullSession: true,
                };
            }
        } else if (startSlot >= 13 && endSlot <= 16) {
            // Ca tối
            if (endSlot <= 15) {
                return {
                    time: 'evening',
                    slot: 1,
                    fullSession: false,
                };
            } else {
                return {
                    time: 'evening',
                    slot: 2,
                    fullSession: false,
                };
            }
        }
    }

    if (timeStr.includes('Sáng'))
        return { time: 'morning', slot: 1, fullSession: true };
    if (timeStr.includes('Chiều'))
        return { time: 'afternoon', slot: 1, fullSession: true };
    if (timeStr.includes('Tối'))
        return { time: 'evening', slot: 1, fullSession: true };

    return { time: 'morning', slot: 1, fullSession: false };
}

function getTimeType(timeStr) {
    if (timeStr.includes('Sáng') || timeStr.includes('1-6')) return 'morning';
    if (timeStr.includes('Chiều') || timeStr.includes('7-12'))
        return 'afternoon';
    return 'evening';
}

// Gắn sự kiện
function attachEventHandlers() {
    $('#searchCourse').on('input', renderCourseTable);

    $('.tab-item').on('click', function () {
        $('.tab-item').removeClass('active');
        $(this).addClass('active');
        renderCourseTable();
    });

    $('.mobile-day-tab').on('click', function () {
        $('.mobile-day-tab').removeClass('active');
        $(this).addClass('active');
        const selectedDay = $(this).data('day');
        updateMobileSchedule(selectedDay);
    });
}

function updateMobileSchedule(selectedDay = null) {
    const dayNames = {
        2: 'Th 2',
        3: 'Th 3',
        4: 'Th 4',
        5: 'Th 5',
        6: 'Th 6',
        7: 'Th 7',
        8: 'CN',
    };

    const fullScheduleByDay = {};
    const scheduleByDay = {};

    if (registeredClasses.length === 0) {
        $('#mobileScheduleContent').html(
            '<div style="text-align: center; padding: 30px; color: #999;">Chưa đăng ký lớp học phần nào</div>',
        );
        return;
    }

    registeredClasses.forEach((item, index) => {
        const course = item.course;
        const cls = item.class;

        if (cls.theoryClasses && cls.theoryClasses.length > 0) {
            cls.theoryClasses.forEach((theory) => {
                const dayMatch = theory.day.match(/T[h]?\s*(\d+|CN)/i);
                if (dayMatch) {
                    const dayNum =
                        dayMatch[1] === 'CN' ? 8 : parseInt(dayMatch[1]);

                    const scheduleItem = {
                        title: course.name,
                        time: theory.time,
                        group: theory.group || '-',
                        room: theory.building,
                        instructor: theory.instructor,
                        type: 'theory',
                    };

                    if (!fullScheduleByDay[dayNum]) {
                        fullScheduleByDay[dayNum] = [];
                    }
                    fullScheduleByDay[dayNum].push(scheduleItem);

                    if (selectedDay === null || dayNum === selectedDay) {
                        if (!scheduleByDay[dayNum]) {
                            scheduleByDay[dayNum] = [];
                        }
                        scheduleByDay[dayNum].push(scheduleItem);
                    }
                }
            });
        }

        if (cls.practiceClasses && cls.practiceClasses.length > 0) {
            const selectedPracticeIndex = item.practiceChoice;
            if (
                selectedPracticeIndex !== null &&
                selectedPracticeIndex !== undefined
            ) {
                const practice = cls.practiceClasses[selectedPracticeIndex];
                if (practice) {
                    const dayMatch = practice.day.match(/T[h]?\s*(\d+|CN)/i);
                    if (dayMatch) {
                        const dayNum =
                            dayMatch[1] === 'CN' ? 8 : parseInt(dayMatch[1]);

                        const scheduleItem = {
                            title: course.name,
                            time: practice.time,
                            group: practice.group || '-',
                            room: practice.building,
                            instructor: practice.instructor,
                            type: 'practice',
                        };

                        if (!fullScheduleByDay[dayNum]) {
                            fullScheduleByDay[dayNum] = [];
                        }
                        fullScheduleByDay[dayNum].push(scheduleItem);

                        if (selectedDay === null || dayNum === selectedDay) {
                            if (!scheduleByDay[dayNum]) {
                                scheduleByDay[dayNum] = [];
                            }
                            scheduleByDay[dayNum].push(scheduleItem);
                        }
                    }
                }
            }
        }
    });

    let html = '';
    const sortedDays = Object.keys(scheduleByDay).sort(
        (a, b) => parseInt(a) - parseInt(b),
    );

    if (sortedDays.length === 0) {
        html =
            '<div style="text-align: center; padding: 30px; color: #999;">Không có lịch học</div>';
    } else {
        sortedDays.forEach((dayNum) => {
            const schedules = scheduleByDay[dayNum];
            const dayName = dayNames[dayNum];

            html += `<div class="mobile-date-header">${dayName}</div>`;

            schedules.forEach((schedule) => {
                html += `
                                <div class="mobile-schedule-card ${schedule.type}">
                                    <div class="mobile-card-title">${schedule.title}</div>
                                    <div class="mobile-card-info">
                                        <div class="mobile-card-info-row">
                                            <span>Tiết :</span>
                                            <span>${schedule.time}</span>
                                        </div>
                                        <div class="mobile-card-info-row">
                                            <span>Nhóm :</span>
                                            <span>${schedule.group}</span>
                                        </div>
                                        <div class="mobile-card-info-row">
                                            <span>Phòng :</span>
                                            <span>${schedule.room}</span>
                                        </div>
                                        <div class="mobile-card-info-row">
                                            <span>Giảng viên :</span>
                                            <span>${schedule.instructor}</span>
                                        </div>
                                    </div>
                                </div>
                            `;
            });
        });
    }

    $('#mobileScheduleContent').html(html);
    $('#mobileScheduleList').css('display', 'block');

    highlightTabsWithSchedule(fullScheduleByDay);
}

function highlightTabsWithSchedule(scheduleByDay) {
    $('.mobile-day-tab').removeClass('has-schedule');

    Object.keys(scheduleByDay).forEach((dayNum) => {
        $(`.mobile-day-tab[data-day="${dayNum}"]`).addClass('has-schedule');
    });
}

function getCurrentDateForDay(dayOfWeek) {
    const today = new Date();
    const currentDay = today.getDay();
    const targetDay = dayOfWeek === 8 ? 0 : dayOfWeek;
    let diff = targetDay - currentDay;
    if (diff < 0) diff += 7;

    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + diff);

    const day = String(targetDate.getDate()).padStart(2, '0');
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');

    return `${day}/${month}`;
}

$(document).ready(init);
