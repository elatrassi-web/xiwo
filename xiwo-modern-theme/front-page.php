<?php get_header(); ?>

<main class="xiwo-main-content">

    <!-- Hero Slider Section (2 Modules Layout) -->
    <section class="xiwo-hero-slider-section">
        <div class="swiper xiwo-hero-swiper">
            <div class="swiper-wrapper">
                <!-- Slide 1: France & Caraïbe + Network Particles -->
                <div class="swiper-slide">
                    <div class="hero-slide-inner two-modules">
                        <!-- Left Module: Content -->
                        <div class="hero-module-left">
                            <div class="hero-badge">
                                <span class="badge-dot"></span> RÉSEAU HAUT DÉBIT ULTRA-PERFORMANT
                            </div>

                            <h1 class="hero-title">
                                XIWO, un réseau<br>
                                présent en<br>
                                <span class="text-primary">France & Caraïbe</span>
                            </h1>

                            <p class="hero-desc">
                                XIWO connecte les territoires là où les autres s'arrêtent.<br>
                                Fibre et solutions sans fil déployées avec exigence<br>
                                pour les particuliers et les professionnels.
                            </p>

                            <div class="hero-stats">
                                <div class="stat-item">
                                    <div class="stat-number">5</div>
                                    <div class="stat-label">territoires</div>
                                </div>
                                <div class="stat-divider"></div>
                                <div class="stat-item">
                                    <div class="stat-number">+100 000</div>
                                    <div class="stat-label">clients connectés</div>
                                </div>
                                <div class="stat-divider"></div>
                                <div class="stat-item">
                                    <div class="stat-number">1</div>
                                    <div class="stat-label">ambition</div>
                                </div>
                            </div>

                            <div class="hero-actions">
                                <a href="#eligibility" class="btn-glowing">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                    Tester mon éligibilité
                                </a>
                                <a href="#reseau" class="btn-text">Découvrir le réseau</a>
                            </div>
                        </div>

                        <!-- Right Module: AI/Network Animation -->
                        <div class="hero-module-right">
                            <div class="network-container glass-panel">
                                <!-- Particle container for Slide 1 -->
                                <div id="tsparticles-network" class="particle-canvas-container"></div>
                                <div class="module-overlay-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide 2: Fibre Speed + Electrons Animation -->
                <div class="swiper-slide">
                    <div class="hero-slide-inner two-modules">
                        <!-- Left Module: Content -->
                        <div class="hero-module-left">
                            <div class="hero-badge">
                                <span class="badge-dot" style="background:var(--wp--preset--color--primary)"></span> FIBRE OPTIQUE
                            </div>

                            <h1 class="hero-title">
                                La vitesse<br>
                                sans compromis<br>
                                <span class="text-primary">pour tous.</span>
                            </h1>

                            <p class="hero-desc">
                                Profitez d'une connexion ultra-rapide jusqu'à 5 Gbit/s.<br>
                                Intelligence artificielle et routage dynamique pour une<br>
                                latence minimale.
                            </p>

                            <div class="hero-stats">
                                <div class="stat-item">
                                    <div class="stat-number">5 Gb/s</div>
                                    <div class="stat-label">débit max</div>
                                </div>
                                <div class="stat-divider"></div>
                                <div class="stat-item">
                                    <div class="stat-number">< 5ms</div>
                                    <div class="stat-label">latence</div>
                                </div>
                            </div>

                            <div class="hero-actions">
                                <a href="#pricing" class="btn-glowing">
                                    Voir nos offres Box
                                </a>
                            </div>
                        </div>

                        <!-- Right Module: Electron/AI Animation -->
                        <div class="hero-module-right">
                            <div class="network-container glass-panel">
                                <!-- Particle container for Slide 2 -->
                                <div id="tsparticles-electrons" class="particle-canvas-container"></div>
                                <div class="module-overlay-glow blue-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Swiper Pagination -->
            <div class="swiper-pagination"></div>

            <!-- Swiper Navigation -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </section>

    <!-- Territories Section (New Design) -->
    <section class="xiwo-territories" id="reseau">
        <div class="section-subtitle">NOS TERRITOIRES</div>
        <h2 class="section-title">Une présence locale, une exigence globale</h2>

        <div class="territory-slider-wrapper">
            <button class="slider-btn prev-btn" id="territory-prev" aria-label="Précédent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>

            <div class="territory-grid" id="territory-slider">
                <div class="territory-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Guadeloupe_%28local%29.svg" alt="Guadeloupe" class="territory-flag">
                    <div class="territory-name">Guadeloupe</div>
                    <div class="territory-sub">XIATEL GUADELOUPE</div>
                    <div class="territory-badge">Fibre & Sans fil</div>
                </div>

                <div class="territory-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Snake_Flag_of_Martinique.svg" alt="Martinique" class="territory-flag">
                    <div class="territory-name">Martinique</div>
                    <div class="territory-sub">XIATEL MARTINIQUE</div>
                    <div class="territory-badge">Fibre & Sans fil</div>
                </div>

                <div class="territory-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Saint-Martin_%28local%29.svg" alt="Saint-Martin" class="territory-flag">
                    <div class="territory-name">Saint-Martin</div>
                    <div class="territory-sub">XIATEL SAINT-MARTIN</div>
                    <div class="territory-badge">Fibre & Sans fil</div>
                </div>

                <div class="territory-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_French_Guiana.svg" alt="Guyane" class="territory-flag">
                    <div class="territory-name">Guyane</div>
                    <div class="territory-sub">Prochainement</div>
                    <div class="territory-badge">Très haut débit</div>
                </div>

                <div class="territory-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" alt="France" class="territory-flag">
                    <div class="territory-name">France</div>
                    <div class="territory-sub">Métropolitaine</div>
                    <div class="territory-badge">Fibre</div>
                </div>
            </div>

            <button class="slider-btn next-btn" id="territory-next" aria-label="Suivant">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
        </div>
    </section>

    <!-- Pricing Section -->
    <section class="xiwo-pricing-section">
        <h2 class="section-title">Choisissez une box internet</h2>

        <div class="pricing-tabs">
            <button class="tab-btn" onclick="switchPricing('engagement')">Avec Engagement</button>
            <button class="tab-btn active" onclick="switchPricing('sans-engagement')">Sans Engagement</button>
        </div>

        <div class="pricing-grid" id="pricing-sans-engagement">
            <!-- Pocket -->
            <div class="pricing-card">
                <div class="card-badge">OFFRE <strong>XIWO Pocket</strong></div>
                <div class="card-desc">La Box 4G Home de la dernière génération de Wi-Fi. Une nouvelle expérience TV.</div>

                <div class="card-feature-highlight">La 4G Home essentielle !</div>
                <div class="card-feature-sub">Offrez vous une connexion internet fiable</div>

                <ul class="feature-list">
                    <li class="feature-list-title">Internet</li>
                    <li><svg><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Jusqu'à 150 Mbit/s en débit descendant</li>
                    <li><svg><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Jusqu'à 50 Mbit/s En débit montant</li>
                    <li><svg><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Jusqu'à 250 Go inclus</li>
                    <li style="opacity:0.5"><svg viewBox="0 0 24 24" style="fill:#999"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg> Non inclus (Appels)</li>
                    <li style="opacity:0.5"><svg viewBox="0 0 24 24" style="fill:#999"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg> Non inclus (TV)</li>
                </ul>

                <div class="card-price-area">
                    <div style="font-weight:700; margin-bottom:1rem;">Votre Box Home 4G aussi rapide c'est avec <span style="color:var(--wp--preset--color--primary)">XIWO !</span></div>
                    <div class="card-price" id="price-pocket">34€99<span>/mois</span></div>
                    <div class="card-price-sub" id="price-sub-pocket">Pendant 3 Mois puis 44.99€/mois.</div>
                    <a href="#" class="btn-discover">DÉCOUVRIR L'OFFRE</a>
                    <div style="font-size:0.6rem; color:#888; margin-top:1rem; line-height:1.4;">*Débit maximum théorique jusqu'à 150 Mbit/s partagés en descendant et 100 Mbit/s en Wi-Fi.</div>
                </div>
            </div>

            <!-- VIVA -->
            <div class="pricing-card" style="border: 2px solid var(--wp--preset--color--primary);">
                <div class="card-badge">OFFRE <strong>XIWO VIVA</strong></div>
                <div class="card-desc">La Fibre stable et de dernière génération de Wi-Fi. Une nouvelle expérience TV.</div>

                <div class="card-feature-highlight">La fibre stable</div>
                <div class="card-feature-sub">Offrez vous une connexion internet stable</div>

                <ul class="feature-list">
                    <li class="feature-list-title">Internet</li>
                    <li><svg><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Jusqu'à 1 Gbit/s Partagés* en débit descendant</li>
                    <li><svg><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Jusqu'à 500 Mbit/s En débit montant</li>
                    <li><svg><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Plus de 100 fois plus rapide que l'ADSL</li>
                    <li><svg><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Inclus – Fixes (110 destinations)</li>
                    <li><svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg> Optionnelle</li>
                </ul>

                <div class="card-price-area">
                    <div style="font-weight:700; margin-bottom:1rem;">La Fibre aussi rapide, c'est avec <span style="color:var(--wp--preset--color--primary)">XIWO !</span></div>
                    <div class="card-price" id="price-viva">39€99<span>/mois</span></div>
                    <div class="card-price-sub" id="price-sub-viva">Pendant 3 Mois puis 49.99€/mois.</div>
                    <a href="#" class="btn-discover">DÉCOUVRIR L'OFFRE</a>
                    <div style="font-size:0.6rem; color:#888; margin-top:1rem; line-height:1.4;">*Débit maximum théorique jusqu'à 1 Gbit/s partagés en descendant et 500 Mbit/s en Wi-Fi.</div>
                </div>
            </div>

            <!-- MAXX -->
            <div class="pricing-card">
                <div class="card-badge">OFFRE <strong>XIWO MAXX</strong></div>
                <div class="card-desc">Le meilleur des Wi-Fi et la Fibre la plus rapide. Vos contenus favoris inclus et bien plus encore !</div>

                <div class="card-feature-highlight">La fibre ultra rapide.</div>
                <div class="card-feature-sub">Offrez-vous la meilleure connectivité Internet</div>

                <ul class="feature-list">
                    <li class="feature-list-title">Internet</li>
                    <li><svg><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Jusqu'à 5 Gbit/s Partagés* en débit descendant</li>
                    <li><svg><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Jusqu'à 1 Gbit/s En débit montant</li>
                    <li><svg><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Plus de 400 fois plus rapide que l'ADSL</li>
                    <li><svg><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Inclus – Fixes (110) + Mobiles (28)</li>
                    <li><svg><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Inclus (TV)</li>
                </ul>

                <div class="card-price-area">
                    <div style="font-weight:700; margin-bottom:1rem;">la fibre ultra rapide c'est aussi avec <span style="color:var(--wp--preset--color--primary)">XIWO !</span></div>
                    <div class="card-price" id="price-maxx">44€99<span>/mois</span></div>
                    <div class="card-price-sub" id="price-sub-maxx">Pendant 3 Mois puis 54.99€/mois.</div>
                    <a href="#" class="btn-discover">DÉCOUVRIR L'OFFRE</a>
                    <div style="font-size:0.6rem; color:#888; margin-top:1rem; line-height:1.4;">*Débit maximum théorique jusqu'à 5 Gbit/s partagés en descendant et 500 Mbit/s en Wi-Fi.</div>
                </div>
            </div>
        </div>

        <div class="pricing-grid" id="pricing-engagement" style="display: none;">
            <div class="pricing-card" style="grid-column: 1 / -1; text-align: center; padding: 4rem;">
                <h3>Les offres avec engagement arrivent bientôt.</h3>
            </div>
        </div>
    </section>

    <!-- Advantages Section -->
    <section class="xiwo-advantages">
        <h2 class="section-title">Pourquoi choisir XiWO ?</h2>
        <div class="advantages-grid">
            <div class="advantage-item">
                <div class="advantage-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h3>Satisfait ou Remboursé</h3>
                <p>Testez nos services en toute sérénité. Si vous n'êtes pas convaincu, nous vous remboursons intégralement.</p>
            </div>
            <div class="advantage-item">
                <div class="advantage-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3>Installation Rapide</h3>
                <p>Nos techniciens qualifiés interviennent sous 48h pour mettre en service votre équipement.</p>
            </div>
            <div class="advantage-item">
                <div class="advantage-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <h3>Prix Transparents</h3>
                <p>Aucune surprise sur votre facture. Nos offres sans engagement vous garantissent le juste prix.</p>
            </div>
            <div class="advantage-item">
                <div class="advantage-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h3>Support Proactif</h3>
                <p>Une assistance locale et dédiée prête à répondre à toutes vos questions, 7 jours sur 7.</p>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="xiwo-services">
        <div style="text-align: center;">
            <h2 class="section-title">Nos services</h2>
        </div>

        <div class="services-grid">
            <!-- Service 1 -->
            <div class="service-card">
                <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <div class="service-title"><span>Internet</span></div>
                <div class="service-subtitle">XIWO BOX,</div>
                <div class="service-desc">LA PUISSANCE MAX</div>
                <a href="#" class="btn-service">DÉCOUVRIR NOS OFFRES</a>
            </div>

            <!-- Service 2 -->
            <div class="service-card">
                <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                    <polyline points="17 2 12 7 7 2"></polyline>
                </svg>
                <div class="service-title"><span>Télévision</span></div>
                <div class="service-subtitle">XIWO TV By <span style="color:var(--wp--preset--color--primary)">Viberax</span></div>
                <div class="service-desc">UNE VARIÉTÉ POUR TOUS</div>
                <a href="#" class="btn-service">VOIR LES CHAÎNES XIWO TV</a>
            </div>

            <!-- Service 3 -->
            <div class="service-card">
                <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <path d="M12 9v2"></path>
                    <circle cx="12" cy="16" r="1"></circle>
                </svg>
                <div class="service-title"><span>Assistance</span></div>
                <div class="service-subtitle">XIWO ASSIS</div>
                <div class="service-desc">TOUTES VOS QUESTIONS</div>
                <a href="#" class="btn-service">CONSULTER</a>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="xiwo-testimonials">
        <h2 class="section-title">Ce que nos clients disent</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="stars">★★★★★</div>
                <p class="testimonial-text">"La fibre XiWO a complètement changé notre quotidien. La vitesse est incroyable et le service client a été réactif dès le premier jour. Sans engagement en plus !"</p>
                <div class="testimonial-author">
                    <div class="author-avatar">M</div>
                    <div class="author-info">
                        <h4>Marc D.</h4>
                        <span>Client Fibre MAX</span>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="stars">★★★★★</div>
                <p class="testimonial-text">"J'ai pris l'offre Pocket pour ma résidence secondaire. L'installation a pris 5 minutes et la 4G est hyper stable. Le 'satisfait ou remboursé' m'a convaincu d'essayer."</p>
                <div class="testimonial-author">
                    <div class="author-avatar">S</div>
                    <div class="author-info">
                        <h4>Sophie L.</h4>
                        <span>Cliente Box 4G</span>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="stars">★★★★☆</div>
                <p class="testimonial-text">"Une offre transparente, pas de frais cachés et un débit au top pour le télétravail. Je recommande vivement pour ceux qui cherchent la tranquillité."</p>
                <div class="testimonial-author">
                    <div class="author-avatar">T</div>
                    <div class="author-info">
                        <h4>Thomas P.</h4>
                        <span>Client VIVA</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </div>


</main>

<?php get_footer(); ?>
