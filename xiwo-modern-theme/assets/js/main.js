document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Region Popup Logic ---
    const popup = document.getElementById('xiwo-region-popup');
    const regionButtons = document.querySelectorAll('.xiwo-region-btn');

    // Simple cookie getter
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    // Simple cookie setter
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    // Check if region is set
    if (!getCookie('xiwo_user_region')) {
        // Show popup
        if(popup) {
            popup.style.display = 'flex';
        }
    }

    // Handle region selection
    regionButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const region = e.target.getAttribute('data-region');
            setCookie('xiwo_user_region', region, 30); // Save for 30 days

            if(popup) {
                popup.style.display = 'none';
            }
            // For a real setup, we might preventDefault and do an AJAX reload or redirect
            // e.preventDefault();
            // window.location.href = `/?region=${region}`;
        });
    });


    // --- 2. Tabs Logic ---
    const tabBtns = document.querySelectorAll('.xiwo-tab-btn');
    const tabPanes = document.querySelectorAll('.xiwo-tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding pane
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });


    // --- 3. Simple Carousel Logic (Optional Enhancement) ---
    // The CSS scroll-snap handles the core carousel, but we can add drag-to-scroll if needed
    const carousels = document.querySelectorAll('.xiwo-carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    carousels.forEach(carousel => {
        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.classList.add('active');
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });
        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.classList.remove('active');
        });
        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.classList.remove('active');
        });
        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2; // scroll-fast
            carousel.scrollLeft = scrollLeft - walk;
        });
    });
});
