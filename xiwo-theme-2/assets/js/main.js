document.addEventListener('DOMContentLoaded', () => {
    /* ======================================================================
       1. Region/Zone Selection Logic
       ====================================================================== */
    const zoneBar = document.getElementById('currentZoneBar');
    const zoneNameSpan = document.getElementById('currentZoneName');
    const changeZoneBtn = document.getElementById('changeZoneBtn');

    const modalOverlay = document.getElementById('regionModalOverlay');
    const regionButtons = document.querySelectorAll('.region-btn');

    const STORAGE_KEY = 'xiwo_selected_region';

    // Show modal
    const openModal = () => {
        if(modalOverlay) {
            modalOverlay.classList.add('active');
        }
    };

    // Hide modal
    const closeModal = () => {
        if(modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    };

    // Update the UI with selected region
    const updateRegionUI = (regionObj) => {
        if(zoneNameSpan) {
            zoneNameSpan.textContent = regionObj.name;
        }
        if(zoneBar) {
            zoneBar.style.display = 'block';
        }

        // Update currency displays
        const currencyElements = document.querySelectorAll('.currency-symbol');
        currencyElements.forEach(el => {
            el.textContent = regionObj.currency;
        });

        // Price updates (simple example, would need real exchange rates ideally)
        const prices = document.querySelectorAll('.price-val');
        prices.forEach(el => {
            const basePrice = el.getAttribute('data-base');
            if(basePrice) {
                let converted = parseFloat(basePrice);
                if(regionObj.code === 'MA') {
                    converted = converted * 10; // rough example EUR -> MAD
                } else if(regionObj.code === 'DZ') {
                    converted = converted * 145; // rough example EUR -> DZD
                } else if(regionObj.code === 'TN') {
                    converted = converted * 3.3; // rough example EUR -> TND
                }

                // Allow decimals for EUR regions like GP, MQ, GF
                const maxDigits = regionObj.currency === '€' ? 2 : 0;
                const minDigits = regionObj.currency === '€' ? 2 : 0;

                el.textContent = converted.toLocaleString(undefined, {
                    minimumFractionDigits: minDigits,
                    maximumFractionDigits: maxDigits
                });
            }
        });
    };

    // Init region
    const savedRegion = localStorage.getItem(STORAGE_KEY);
    if (!savedRegion) {
        openModal();
    } else {
        try {
            const regionData = JSON.parse(savedRegion);
            updateRegionUI(regionData);
        } catch(e) {
            openModal();
        }
    }

    if(changeZoneBtn) {
        changeZoneBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    }

    regionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const regionCode = btn.getAttribute('data-region');
            const regionName = btn.getAttribute('data-name');
            const currency = btn.getAttribute('data-currency');

            const regionData = {
                code: regionCode,
                name: regionName,
                currency: currency
            };

            localStorage.setItem(STORAGE_KEY, JSON.stringify(regionData));
            updateRegionUI(regionData);
            closeModal();
        });
    });

    // Close modal if clicking outside
    if(modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay && localStorage.getItem(STORAGE_KEY)) {
                closeModal();
            }
        });
    }


    /* ======================================================================
       2. Smooth Scroll & Intersection Observer Animations (Bento Style)
       ====================================================================== */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        scrollObserver.observe(el);
    });

    /* ======================================================================
       3. Pricing Toggle Logic
       ====================================================================== */
    const toggleMonthly = document.getElementById('toggleMonthly');
    const toggleAnnual = document.getElementById('toggleAnnual');
    const prices = document.querySelectorAll('.price-val');

    if(toggleMonthly && toggleAnnual) {
        const updatePricing = (isAnnual) => {
            toggleMonthly.classList.toggle('active', !isAnnual);
            toggleAnnual.classList.toggle('active', isAnnual);

            prices.forEach(el => {
                const baseMonthly = parseFloat(el.getAttribute('data-base'));
                if(baseMonthly) {
                    // Update data-base to reflect annual/monthly base logic so region currency logic still works
                    // In a real app, you might have separate data-monthly and data-annual attributes
                    if(isAnnual) {
                        el.setAttribute('data-base', baseMonthly * 10); // Example: 2 months free
                    } else {
                        // Assuming the original HTML base is monthly.
                        // We need a better way if we switch back and forth.
                        // For this demo, let's just use data-monthly and data-annual.
                    }
                }
            });
        };

        // Improved toggle logic
        toggleMonthly.addEventListener('click', () => {
            toggleMonthly.classList.add('active');
            toggleAnnual.classList.remove('active');

            prices.forEach(el => {
                const monthlyBase = el.getAttribute('data-monthly');
                if(monthlyBase) {
                    el.setAttribute('data-base', monthlyBase);
                }
            });
            // Re-trigger region UI update to apply currency math
            const saved = localStorage.getItem(STORAGE_KEY);
            if(saved) updateRegionUI(JSON.parse(saved));
        });

        toggleAnnual.addEventListener('click', () => {
            toggleAnnual.classList.add('active');
            toggleMonthly.classList.remove('active');

            prices.forEach(el => {
                const annualBase = el.getAttribute('data-annual');
                if(annualBase) {
                    el.setAttribute('data-base', annualBase);
                }
            });
            const saved = localStorage.getItem(STORAGE_KEY);
            if(saved) updateRegionUI(JSON.parse(saved));
        });
    }
});
