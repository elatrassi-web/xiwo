document.addEventListener('DOMContentLoaded', () => {

    // Zone Modal Logic
    const zoneModal = document.getElementById('zoneModal');
    const openZoneBtn = document.getElementById('openZoneModalBtn');
    const closeZoneBtn = document.getElementById('closeZoneModalBtn');
    const currentZoneText = document.getElementById('currentZoneText');
    const zoneOptions = document.querySelectorAll('.zone-option');

    // Check cookie
    const savedZone = getCookie('xiwo_zone');
    if (savedZone) {
        if(currentZoneText) currentZoneText.textContent = `Zone géographique : ${savedZone}`;
    } else {
        // Show modal if no zone selected yet
        if(zoneModal) zoneModal.style.display = 'flex';
    }

    if (openZoneBtn) {
        openZoneBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if(zoneModal) zoneModal.style.display = 'flex';
        });
    }

    if (closeZoneBtn) {
        closeZoneBtn.addEventListener('click', () => {
            if(zoneModal) zoneModal.style.display = 'none';
        });
    }

    // Close modal if clicked outside
    if(zoneModal) {
        window.addEventListener('click', (e) => {
            if (e.target === zoneModal && savedZone) {
                zoneModal.style.display = 'none';
            }
        });
    }

    if (zoneOptions) {
        zoneOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const zone = this.getAttribute('data-zone');
                setCookie('xiwo_zone', zone, 365);
                if(currentZoneText) currentZoneText.textContent = `Zone géographique : ${zone}`;
                if(zoneModal) zoneModal.style.display = 'none';
            });
        });
    }

    // Expose switchPricing globally
    window.switchPricing = function(type) {
        const sansEngGrid = document.getElementById('pricing-sans-engagement');
        const engGrid = document.getElementById('pricing-engagement');
        const tabs = document.querySelectorAll('.tab-btn');

        if(type === 'sans-engagement') {
            sansEngGrid.style.display = 'grid';
            engGrid.style.display = 'none';
            tabs[0].classList.remove('active');
            tabs[1].classList.add('active');
        } else {
            sansEngGrid.style.display = 'none';
            engGrid.style.display = 'grid';
            tabs[0].classList.add('active');
            tabs[1].classList.remove('active');
        }
    };

    // Territory Slider Logic
    const slider = document.getElementById('territory-slider');
    const prevBtn = document.getElementById('territory-prev');
    const nextBtn = document.getElementById('territory-next');

    if (slider && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -300, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
});

// Cookie helpers
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
