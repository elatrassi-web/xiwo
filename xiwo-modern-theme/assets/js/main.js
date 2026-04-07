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

    // Close modal if clicked outside (only if a zone is saved)
    if(zoneModal) {
        window.addEventListener('click', (e) => {
            const currentSavedZone = getCookie('xiwo_zone');
            if (e.target === zoneModal && currentSavedZone) {
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

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const iconSun = document.querySelector('.icon-sun');
    const iconMoon = document.querySelector('.icon-moon');

    // Check local storage for theme preference
    const currentTheme = localStorage.getItem('xiwoTheme') || 'dark';

    // Apply initial theme
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            if (current === 'light') {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('xiwoTheme', 'dark');
                iconSun.style.display = 'none';
                iconMoon.style.display = 'block';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('xiwoTheme', 'light');
                iconSun.style.display = 'block';
                iconMoon.style.display = 'none';
            }
        });
    }

    // --- 3D Neural Network / Vanta.js (Slide 2) ---
    const vantaContainer = document.getElementById('ai-network-container');
    if (vantaContainer && typeof VANTA !== 'undefined') {
        VANTA.NET({
            el: vantaContainer,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x2196f3, // Primary blue
            backgroundColor: 0x05080c, // Dark background
            points: 15.00,
            maxDistance: 25.00,
            spacing: 18.00,
            showDots: true
        });
    }
});

// Dynamic Regional Pricing Logic
const regionalPricing = {
    "Guadeloupe": { pocket: { current: "34€99", sub: "Pendant 3 Mois puis 44.99€/mois." }, viva: { current: "39€99", sub: "Pendant 3 Mois puis 49.99€/mois." }, maxx: { current: "44€99", sub: "Pendant 3 Mois puis 54.99€/mois." } },
    "Martinique": { pocket: { current: "34€99", sub: "Pendant 3 Mois puis 44.99€/mois." }, viva: { current: "39€99", sub: "Pendant 3 Mois puis 49.99€/mois." }, maxx: { current: "44€99", sub: "Pendant 3 Mois puis 54.99€/mois." } },
    "Guyane": { pocket: { current: "39€99", sub: "Pendant 3 Mois puis 49.99€/mois." }, viva: { current: "44€99", sub: "Pendant 3 Mois puis 54.99€/mois." }, maxx: { current: "49€99", sub: "Pendant 3 Mois puis 59.99€/mois." } },
    "La Réunion": { pocket: { current: "29€99", sub: "Pendant 3 Mois puis 39.99€/mois." }, viva: { current: "34€99", sub: "Pendant 3 Mois puis 44.99€/mois." }, maxx: { current: "39€99", sub: "Pendant 3 Mois puis 49.99€/mois." } }
};

function updatePricing(zone) {
    const prices = regionalPricing[zone] || regionalPricing["Guadeloupe"];

    const pocketEl = document.getElementById('price-pocket');
    const pocketSubEl = document.getElementById('price-sub-pocket');
    if (pocketEl && pocketSubEl) {
        pocketEl.innerHTML = prices.pocket.current + '<span>/mois</span>';
        pocketSubEl.textContent = prices.pocket.sub;
    }

    const vivaEl = document.getElementById('price-viva');
    const vivaSubEl = document.getElementById('price-sub-viva');
    if (vivaEl && vivaSubEl) {
        vivaEl.innerHTML = prices.viva.current + '<span>/mois</span>';
        vivaSubEl.textContent = prices.viva.sub;
    }

    const maxxEl = document.getElementById('price-maxx');
    const maxxSubEl = document.getElementById('price-sub-maxx');
    if (maxxEl && maxxSubEl) {
        maxxEl.innerHTML = prices.maxx.current + '<span>/mois</span>';
        maxxSubEl.textContent = prices.maxx.sub;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedZone = getCookie('xiwo_zone');
    if (savedZone) {
        updatePricing(savedZone);
    }
});

// Update the click handler for zone options to trigger pricing update
document.addEventListener('DOMContentLoaded', () => {
    const zoneOptions = document.querySelectorAll('.zone-option');
    if (zoneOptions) {
        zoneOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                const zone = this.getAttribute('data-zone');
                updatePricing(zone);
            });
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // Initialize Hero Swiper
    if (typeof Swiper !== 'undefined') {
        const heroSwiper = new Swiper('.xiwo-hero-swiper', {
            loop: true,
            autoplay: {
                delay: 8000, // Increased delay to allow enjoying the animations
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // --- 3D Globe Initialization (Slide 1) ---
    const globeContainer = document.getElementById('globe-container');
    if (globeContainer && typeof Globe !== 'undefined') {
        // Define coordinates
        const france = { lat: 46.2276, lng: 2.2137, name: 'France' };
        const territories = [
            { lat: 16.2650, lng: -61.5510, name: 'Guadeloupe' },
            { lat: 14.6415, lng: -61.0242, name: 'Martinique' },
            { lat: 3.9339, lng: -53.1258, name: 'Guyane' },
            { lat: -21.1151, lng: 55.5364, name: 'La Réunion' },
            { lat: 18.0708, lng: -63.0501, name: 'Saint-Martin' }
        ];

        const arcsData = territories.map(t => ({
            startLat: france.lat,
            startLng: france.lng,
            endLat: t.lat,
            endLng: t.lng,
            color: ['rgba(255, 255, 255, 0.2)', '#8bc34a']
        }));

        const pointsData = [france, ...territories];

        // Initialize Globe
        const world = Globe()
            (globeContainer)
            .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
            .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
            .backgroundColor('rgba(0,0,0,0)') // Transparent to show glass panel behind
            .pointsData(pointsData)
            .pointColor(() => '#8bc34a')
            .pointAltitude(0.05)
            .pointRadius(0.5)
            .arcsData(arcsData)
            .arcColor('color')
            .arcDashLength(0.4)
            .arcDashGap(4)
            .arcDashInitialGap(() => Math.random() * 5)
            .arcDashAnimateTime(2000)
            .arcStroke(0.5);

        // Configure controls
        world.controls().autoRotate = true;
        world.controls().autoRotateSpeed = 1.5;
        world.controls().enableZoom = false; // Disable scroll zoom so it doesn't trap the user

        // Initial point of view (looking at Atlantic)
        world.pointOfView({ lat: 25, lng: -30, altitude: 2 });

        // Resize handling
        window.addEventListener('resize', () => {
            if(globeContainer) {
                world.width(globeContainer.clientWidth);
                world.height(globeContainer.clientHeight);
            }
        });
    }
});
