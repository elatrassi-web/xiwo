document.addEventListener('DOMContentLoaded', () => {

    // Zone Modal Logic
    const zoneModal = document.getElementById('regionModalOverlay');
    const openZoneBtn = document.getElementById('openZoneModalBtn');
    const currentZoneText = document.getElementById('currentZoneText');

    // Check cookie
    const savedZone = getCookie('xiwo_zone');
    if (savedZone) {
        if(currentZoneText) currentZoneText.textContent = `Zone géographique : ${savedZone}`;
    } else {
        // Show modal if no zone selected yet
        if(zoneModal) zoneModal.classList.add('active');
    }

    if (openZoneBtn) {
        openZoneBtn.addEventListener('click', (e) => {
            e.preventDefault();
            zoneModal.classList.add('active');
        });
    }

    // Close modal if clicked outside
    if(zoneModal) {
        zoneModal.addEventListener('click', (e) => {
            if (e.target === zoneModal && savedZone) {
                zoneModal.classList.remove('active');
            }
        });
    }

    // Expose selectZone globally
    window.selectZone = function(zone) {
        setCookie('xiwo_zone', zone, 365);
        if(currentZoneText) currentZoneText.textContent = `Zone géographique : ${zone}`;
        if(zoneModal) zoneModal.classList.remove('active');
    };

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
