document.addEventListener('DOMContentLoaded', () => {

    // Theme Toggle Logic
    const themeBtn = document.getElementById('themeToggleBtn');
    const savedTheme = getCookie('xiwo_theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeBtn) themeBtn.textContent = '🌙';
    } else {
        if (themeBtn) themeBtn.textContent = '☀️';
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                setCookie('xiwo_theme', 'light', 365);
                themeBtn.textContent = '🌙';
            } else {
                setCookie('xiwo_theme', 'dark', 365);
                themeBtn.textContent = '☀️';
            }
        });
    }


    const filterRegionCards = (zone) => {
        // Classes mapping
        const zoneMap = {
            'Guadeloupe': 'gp-only',
            'Martinique': 'mq-only',
            'Guyane': 'gf-only',
            'Hexagone': 'hex-only',
            'Saint-Martin': 'sm-only',
            'Saint-Barthélemy': 'sb-only'
        };

        const targetClass = zoneMap[zone] || 'gp-only';

        // Hide all cards by default, using a class
        document.querySelectorAll('.pricing-card').forEach(card => {
            card.classList.remove('is-visible');
            card.classList.add('is-hidden');
        });

        // Show only the target region cards
        document.querySelectorAll('.' + targetClass).forEach(card => {
            card.classList.remove('is-hidden');
            card.classList.add('is-visible');
        });

        const toggleContainer = document.querySelector('.pricing-toggle-container');
        const boxTitle = document.querySelector('.box-internet-title');

        if (zone === 'Martinique' || zone === 'Saint-Martin') {
            if (toggleContainer) toggleContainer.style.display = 'none';
            if (boxTitle) boxTitle.style.display = 'block';
            window.switchPricing('sans-engagement'); // Force sans engagement
        } else {
            if (toggleContainer) toggleContainer.style.display = 'flex';
            if (boxTitle) boxTitle.style.display = 'none';
            window.switchPricing('engagement'); // Default to engagement for others
        }
    };


    // Zone Modal Logic
    const zoneModal = document.getElementById('regionModalOverlay');
    const openZoneBtn = document.getElementById('openZoneModalBtn');
    const currentZoneText = document.getElementById('currentZoneText');

    // Check cookie
    const savedZone = getCookie('xiwo_zone');
    if (savedZone) {
        if(currentZoneText) currentZoneText.textContent = `Zone géographique : ${savedZone}`;
        filterRegionCards(savedZone);
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
        if(typeof filterRegionCards === 'function') filterRegionCards(zone);
        else location.reload();
        if(zoneModal) zoneModal.classList.remove('active');
    };

    // Expose switchPricing globally
    window.switchPricing = function(type) {
        const sansEngGrid = document.getElementById('pricing-sans-engagement');
        const engGrid = document.getElementById('pricing-engagement');
        const tabs = document.querySelectorAll('.pricing-toggle-btn');

        if(type === 'sans-engagement') {
            if(sansEngGrid) sansEngGrid.style.display = 'grid';
            if(engGrid) engGrid.style.display = 'none';
            if(tabs[0]) tabs[0].classList.add('active');
            if(tabs[1]) tabs[1].classList.remove('active');
        } else {
            if(sansEngGrid) sansEngGrid.style.display = 'none';
            if(engGrid) engGrid.style.display = 'grid';
            if(tabs[0]) tabs[0].classList.remove('active');
            if(tabs[1]) tabs[1].classList.add('active');
        }
    };

    // Attach event listeners for pricing toggle
    const btnSansEngagement = document.getElementById('btn-sans-engagement');
    const btnEngagement = document.getElementById('btn-engagement');

    if (btnSansEngagement) {
        btnSansEngagement.addEventListener('click', () => switchPricing('sans-engagement'));
    }
    if (btnEngagement) {
        btnEngagement.addEventListener('click', () => switchPricing('engagement'));
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
