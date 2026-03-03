const familyData = [
    {
        id: 1,
        title: 'Người thân 1',
        relationship: 'Cha',
        name: 'Nguyễn Văn A',
        birthDate: '20/07/1970',
        phone: '0123456789',
        ethnicity: 'Kinh',
        nationality: 'Việt Nam',
        position: '-----',
        occupation: '-----',
        workplace: '-----',
        permanentAddress: '2 Nguyen The Loc Str.,W.Bay Hien, HCM City, VIETNAM',
        currentAddress: '2 Nguyen The Loc Str.,W.Bay Hien, HCM City, VIETNAM',
    },
];

function renderFamilyAccordion() {
    const accordion = document.getElementById('familyAccordion');
    if (!accordion) return;

    let html = '';

    familyData.forEach((member, index) => {
        const isExpanded = index === 0;
        const hasData = member.relationship !== null;

        html += `
            <div class="family-accordion-item">
                <div class="family-accordion-header">
                    <button 
                        class="family-accordion-button ${isExpanded ? '' : 'collapsed'}" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#family${member.id}"
                        aria-expanded="${isExpanded}"
                        aria-controls="family${member.id}">
                        ${member.title}
                        <i class="fas ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} ms-auto"></i>
                    </button>
                </div>
                <div 
                    id="family${member.id}" 
                    class="collapse ${isExpanded ? 'show' : ''}" 
                    data-bs-parent="#familyAccordion">
                    <div class="family-accordion-body">
                        ${hasData ? renderFamilyGrid(member) : '<p class="text-muted mb-0">Chưa có thông tin</p>'}
                    </div>
                </div>
            </div>
        `;
    });

    accordion.innerHTML = html;

    addAccordionToggleListeners();
}

function renderFamilyGrid(member) {
    return `
        <div class="family-info-grid">
            <div class="family-row">
                <div class="family-col">
                    <div class="family-label">MỐI QUAN HỆ</div>
                    <div class="family-value">${member.relationship}</div>
                </div>
                <div class="family-col">
                    <div class="family-label">DÂN TỘC</div>
                    <div class="family-value">${member.ethnicity}</div>
                </div>
                <div class="family-col">
                    <div class="family-label">NGHỀ NGHIỆP</div>
                    <div class="family-value">${member.occupation}</div>
                </div>
            </div>
            
            <div class="family-row">
                <div class="family-col">
                    <div class="family-label">HỌ TÊN</div>
                    <div class="family-value">${member.name}</div>
                </div>
                <div class="family-col">
                    <div class="family-label">TÔN GIÁO</div>
                    <div class="family-value">${member.nationality}</div>
                </div>
                <div class="family-col">
                    <div class="family-label">CƠ QUAN CÔNG TÁC</div>
                    <div class="family-value">${member.workplace}</div>
                </div>
            </div>
            
            <div class="family-row">
                <div class="family-col">
                    <div class="family-label">NĂM SINH</div>
                    <div class="family-value">${member.birthDate}</div>
                </div>
                <div class="family-col">
                    <div class="family-label">QUỐC TỊCH</div>
                    <div class="family-value">${member.nationality}</div>
                </div>
                <div class="family-col">
                    <div class="family-label">CHỨC VỤ</div>
                    <div class="family-value">${member.position}</div>
                </div>
            </div>
            
            <div class="family-row">
                <div class="family-col full-width">
                    <div class="family-label">SỐ ĐIỆN THOẠI</div>
                    <div class="family-value">${member.phone}</div>
                </div>
            </div>
            
            <div class="family-row">
                <div class="family-col full-width">
                    <div class="family-label">HỘ KHẨU THƯỜNG TRÚ</div>
                    <div class="family-value">${member.permanentAddress}</div>
                </div>
            </div>
            
            <div class="family-row">
                <div class="family-col full-width">
                    <div class="family-label">CHỖ Ở HIỆN TẠI</div>
                    <div class="family-value">${member.currentAddress}</div>
                </div>
            </div>
        </div>
    `;
}

function addAccordionToggleListeners() {
    const buttons = document.querySelectorAll('.family-accordion-button');

    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            const icon = this.querySelector('i');
            const isCollapsed = this.classList.contains('collapsed');

            if (isCollapsed) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });

        const targetId = button.getAttribute('data-bs-target');
        const collapseElement = document.querySelector(targetId);

        if (collapseElement) {
            collapseElement.addEventListener('shown.bs.collapse', function () {
                const icon = button.querySelector('i');
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            });

            collapseElement.addEventListener('hidden.bs.collapse', function () {
                const icon = button.querySelector('i');
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            });
        }
    });
}

function initStudentInfo() {
    renderFamilyAccordion();
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(initStudentInfo, 100);
});
