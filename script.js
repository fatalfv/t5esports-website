/*
==================================================
T5 ESPORTS
MAIN JAVASCRIPT
==================================================
*/


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /*
        ==========================================
        HEADER SCROLL
        ==========================================
        */

        const header =
            document.getElementById(
                "siteHeader"
            );


        function updateHeader() {

            if (!header) return;


            if (window.scrollY > 40) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        }


        window.addEventListener(
            "scroll",
            updateHeader,
            {
                passive: true
            }
        );


        updateHeader();



        /*
        ==========================================
        MOBILE MENU
        ==========================================
        */

        const menuButton =
            document.getElementById(
                "menuButton"
            );


        const mobileMenu =
            document.getElementById(
                "mobileMenu"
            );


        if (
            menuButton &&
            mobileMenu
        ) {

            menuButton.addEventListener(
                "click",
                () => {

                    menuButton.classList.toggle(
                        "active"
                    );


                    mobileMenu.classList.toggle(
                        "open"
                    );

                }
            );


            mobileMenu
                .querySelectorAll("a")
                .forEach(link => {

                    link.addEventListener(
                        "click",
                        () => {

                            menuButton.classList.remove(
                                "active"
                            );

                            mobileMenu.classList.remove(
                                "open"
                            );

                        }
                    );

                });

        }



        /*
        ==========================================
        SCROLL REVEAL
        ==========================================
        */

        let revealObserver;


        function setupRevealAnimations() {

            const elements =
                document.querySelectorAll(
                    ".reveal, .real-player-card"
                );


            if (!elements.length) return;


            if (revealObserver) {

                revealObserver.disconnect();

            }


            revealObserver =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            entry => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    const element =
                                        entry.target;


                                    const delay =
                                        element.style.getPropertyValue(
                                            "--card-delay"
                                        );


                                    if (delay) {

                                        element.style.transitionDelay =
                                            delay;

                                    }


                                    element.classList.add(
                                        "visible"
                                    );


                                    revealObserver.unobserve(
                                        element
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.12,
                        rootMargin:
                            "0px 0px -70px 0px"
                    }
                );


            elements.forEach(
                element => {

                    revealObserver.observe(
                        element
                    );

                }
            );

        }


        window.refreshRevealAnimations =
            setupRevealAnimations;


        setupRevealAnimations();



        /*
        ==========================================
        HERO LOAD ANIMATION
        ==========================================
        */

        const heroElements =
            document.querySelectorAll(
                ".hero-reveal"
            );


        heroElements.forEach(
            (element, index) => {

                setTimeout(
                    () => {

                        element.classList.add(
                            "hero-loaded"
                        );

                    },
                    180 + index * 140
                );

            }
        );



        /*
        ==========================================
        PAGE LOAD ANIMATION
        ==========================================
        */

        const pageAnimation =
            document.querySelector(
                ".page-load-animation"
            );


        if (pageAnimation) {

            setTimeout(
                () => {

                    pageAnimation.classList.add(
                        "page-loaded"
                    );

                },
                150
            );

        }



        /*
        ==========================================
        SMOOTH INTERNAL LINKS
        ==========================================
        */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
                link => {

                    link.addEventListener(
                        "click",
                        event => {

                            const targetId =
                                link.getAttribute(
                                    "href"
                                );


                            if (
                                !targetId ||
                                targetId === "#"
                            ) return;


                            const target =
                                document.querySelector(
                                    targetId
                                );


                            if (!target) return;


                            event.preventDefault();


                            target.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }
                    );

                }
            );



        /*
        ==========================================
        PAGE TRANSITIONS
        ==========================================
        */

        document
            .querySelectorAll(
                "a.page-link"
            )
            .forEach(
                link => {

                    link.addEventListener(
                        "click",
                        event => {

                            const href =
                                link.getAttribute(
                                    "href"
                                );


                            if (
                                !href ||
                                href.startsWith("#") ||
                                link.target === "_blank"
                            ) {

                                return;

                            }


                            /*
                            Don't animate
                            modifier clicks.
                            */

                            if (
                                event.ctrlKey ||
                                event.metaKey ||
                                event.shiftKey ||
                                event.altKey
                            ) {

                                return;

                            }


                            event.preventDefault();


                            document.body.classList.add(
                                "page-exit"
                            );


                            setTimeout(
                                () => {

                                    window.location.href =
                                        href;

                                },
                                400
                            );

                        }
                    );

                }
            );



        /*
        ==========================================
        CURSOR GLOW
        ==========================================
        */

        const cursorGlow =
            document.getElementById(
                "cursorGlow"
            );


        if (
            cursorGlow &&
            window.matchMedia(
                "(pointer: fine)"
            ).matches
        ) {

            let mouseX = 0;

            let mouseY = 0;

            let glowX = 0;

            let glowY = 0;


            document.addEventListener(
                "mousemove",
                event => {

                    mouseX =
                        event.clientX;

                    mouseY =
                        event.clientY;

                }
            );


            function animateGlow() {

                glowX +=
                    (mouseX - glowX) *
                    0.08;

                glowY +=
                    (mouseY - glowY) *
                    0.08;


                cursorGlow.style.left =
                    `${glowX}px`;

                cursorGlow.style.top =
                    `${glowY}px`;


                requestAnimationFrame(
                    animateGlow
                );

            }


            animateGlow();

        }



        /*
        ==========================================
        BUTTON PRESS EFFECT
        ==========================================
        */

        document
            .querySelectorAll(
                ".button, .nav-button, .pill-button, .category-arrow, .real-player-link"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "pointerdown",
                        () => {

                            button.classList.add(
                                "pressed"
                            );

                        }
                    );


                    button.addEventListener(
                        "pointerup",
                        () => {

                            button.classList.remove(
                                "pressed"
                            );

                        }
                    );


                    button.addEventListener(
                        "pointerleave",
                        () => {

                            button.classList.remove(
                                "pressed"
                            );

                        }
                    );

                }
            );



        /*
        ==========================================
        PARALLAX
        ==========================================
        */

        const parallaxItems =
            document.querySelectorAll(
                ".hero-background-t5, .page-hero-background, .join-background"
            );


        if (
            parallaxItems.length &&
            window.matchMedia(
                "(pointer: fine)"
            ).matches
        ) {

            window.addEventListener(
                "scroll",
                () => {

                    const scroll =
                        window.scrollY;


                    parallaxItems.forEach(
                        item => {

                            const speed =
                                0.12;


                            item.style.transform =
                                `translateY(calc(-50% + ${scroll * speed}px)) skew(-8deg)`;

                        }
                    );

                },
                {
                    passive: true
                }
            );

        }



        /*
        ==========================================
        CARD TILT
        ==========================================
        */

        document.addEventListener(
            "mousemove",
            event => {

                const card =
                    event.target.closest(
                        ".real-player-card"
                    );


                if (!card) return;


                if (
                    !window.matchMedia(
                        "(pointer: fine)"
                    ).matches
                ) return;


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const rotateX =
                    ((y / rect.height) - 0.5) *
                    -5;


                const rotateY =
                    ((x / rect.width) - 0.5) *
                    5;


                card.style.setProperty(
                    "--rotate-x",
                    `${rotateX}deg`
                );


                card.style.setProperty(
                    "--rotate-y",
                    `${rotateY}deg`
                );


                card.classList.add(
                    "tilting"
                );

            }
        );


        document.addEventListener(
            "mouseleave",
            event => {

                const card =
                    event.target.closest(
                        ".real-player-card"
                    );


                if (!card) return;


                card.classList.remove(
                    "tilting"
                );

            },
            true
        );


    }
);
