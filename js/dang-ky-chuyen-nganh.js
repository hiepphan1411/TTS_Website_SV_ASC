const $ = window.jQuery;
const bootstrap = window.bootstrap;

// Application state
let registrationState = {
    isRegistered: false,
    selectedSpecialty: null,
    selectedCode: null,
    selectedMajor: 'Công nghệ thông tin',
    selectedFaculty: 'Khoa Công nghệ thông tin',
};

const specialtyData = {
    'D09.40.01': {
        name: 'Công nghệ phần mềm',
        major: 'Công nghệ thông tin',
        faculty: 'Khoa Công nghệ thông tin',
        academicYear: '2024 - 2029',
    },
    'D09.40.02': {
        name: 'Hệ thống thông tin',
        major: 'Công nghệ thông tin',
        faculty: 'Khoa Công nghệ thông tin',
        academicYear: '2024 - 2029',
    },
    'D09.40.03': {
        name: 'Khoa học dữ liệu',
        major: 'Công nghệ thông tin',
        faculty: 'Khoa Công nghệ thông tin',
        academicYear: '2024 - 2029',
    },
    'D09.40.04': {
        name: 'An toàn thông tin',
        major: 'Công nghệ thông tin',
        faculty: 'Khoa Công nghệ thông tin',
        academicYear: '2024 - 2029',
    },
    'D09.40.05': {
        name: 'Trí tuệ nhân tạo',
        major: 'Công nghệ thông tin',
        faculty: 'Khoa Công nghệ thông tin',
        academicYear: '2024 - 2029',
    },
};

$(function () {
    bindEventHandlers();

    updateUIState();
});

function bindEventHandlers() {
    $('#specialtyForm').on('submit', function (e) {
        e.preventDefault();
        handleRegistration();
    });

    $('#specialtySelect').on('change', function () {
        const code = $(this).val();

        if (code && specialtyData[code]) {
            const specialty = specialtyData[code];
        }
    });
}

function handleRegistration() {
    const code = $('#specialtySelect').val();

    if (!code) {
        alert('Vui lòng chọn chuyên ngành');
        return;
    }

    const specialty = specialtyData[code];

    if (
        confirm(
            `Bạn chắc chắn muốn đăng ký chuyên ngành: ${specialty.name} (${code})?\n\nLưu ý: Bạn không thể thay đổi lựa chọn sau khi xác nhận.`,
        )
    ) {
        registrationState.isRegistered = true;
        registrationState.selectedSpecialty = specialty.name;
        registrationState.selectedCode = code;

        saveStateToStorage();

        updateUIState();
    }
}

// Toggle between form and info views
function toggleState() {
    registrationState.isRegistered = false;
    localStorage.removeItem('registrationState');
    updateUIState();
}

// Update UI based on registration state
function updateUIState() {
    const formContainer = $('#registrationForm');
    const infoContainer = $('#registrationInfo');
    const warningAlert = $('#warningAlert');
    const infoAlert = $('#infoAlert');

    if (registrationState.isRegistered) {
        formContainer.addClass('d-none');
        infoContainer.removeClass('d-none');

        warningAlert.addClass('d-none');
        infoAlert.removeClass('d-none');

        $('#displaySpecialty').text(registrationState.selectedSpecialty);
        $('#displayCode').text(registrationState.selectedCode);
    } else {
        formContainer.removeClass('d-none');
        infoContainer.addClass('d-none');

        warningAlert.removeClass('d-none');
        infoAlert.addClass('d-none');

        $('#specialtySelect').val('');
    }
}

function saveStateToStorage() {
    try {
        localStorage.setItem(
            'registrationState',
            JSON.stringify(registrationState),
        );
    } catch (error) {
        console.error('Error saving state:', error);
    }
}

function loadStateFromStorage() {
    try {
        const stored = localStorage.getItem('registrationState');
        if (stored) {
            registrationState = JSON.parse(stored);
        }
    } catch (error) {
        console.error('[v0] Error loading state:', error);
    }
}

function clearStoredData() {
    localStorage.removeItem('registrationState');
    registrationState = {
        isRegistered: false,
        selectedSpecialty: null,
        selectedCode: null,
        selectedMajor: 'Công nghệ thông tin',
        selectedFaculty: 'Khoa Công nghệ thông tin',
    };
    updateUIState();
}

function getState() {
    return registrationState;
}

function simulateRegistered(code = 'D09.40.01') {
    registrationState.isRegistered = true;
    registrationState.selectedCode = code;
    registrationState.selectedSpecialty = specialtyData[code].name;
    saveStateToStorage();
    updateUIState();
}
