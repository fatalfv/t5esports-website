document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
        ==================================================
        PAGE TRANSITION
        ==================================================
        */

        const pageTransition =
            document.querySelector(
                ".page-transition"
            );


        /*
        Page enters
        */

        requestAnimationFrame(() => {

            setTimeout(() => {

                document.body.classList.add(
                    "page-loaded"
                );

            }, 50);

        });


        /*
        ==================================================
        PAGE LINK TRANSITIONS
        ==================================================
        */

        document
            .querySelectorAll(
                "a.page-link"
            )
            .forEach(link => {

                link.addEventListener(
                    "click",
                    event => {

                        const href =
                            link.getAttribute(
                                "href"
                            );


                        if (!href) return;


                        /*
                        Don't animate external links.
                        */

                        if (
                            href.startsWith(
                                "http"
                            )
                        ) {
                            return;
                        }


                        /*
                        Don't animate same-page
                        anchor links.
                        */

                        if (
                            href.startsWith("#")
                        ) {
                            return;
                        }


                        event.preventDefault();


                        document.body.classList.add(
                            "page-exiting"
                        );


                        if (pageTransition) {

                            pageTransition.classList.add(
                                "active"
                            );

                        }


                        setTimeout(
                            () => {

                                window.location.href =
                                    href;

                            },
                            500
                        );

                    }
                );

            });



        /*
        ==================================================
        HEADER
        ==================================================
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
        ==================================================
        MOBILE MENU
        ==================================================
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
        ==================================================
        SCROLL REVEAL
        ==================================================
        */

        const revealElements =
            document.querySelectorAll(
                ".reveal"
            );


        if (
            "IntersectionObserver"
            in window
        ) {

            const observer =
                new IntersectionObserver(
                    entries => {

                        entries.forEach(
                            entry => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "visible"
                                    );

                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: .12,

                        rootMargin:
                            "0px 0px -80px 0px"
                    }
                );


            revealElements.forEach(
                element => {

                    observer.observe(
                        element
                    );

                }
            );

        } else {

            revealElements.forEach(
                element => {

                    element.classList.add(
                        "visible"
                    );

                }
            );

        }



        /*
        ==================================================
        HERO ANIMATION
        ==================================================
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
                            "visible"
                        );

                    },
                    250 + index * 140
                );

            }
        );



        /*
        ==================================================
        PLAYER CARDS
        ==================================================
        */

        function observePlayers() {

            const cards =
                document.querySelectorAll(
                    ".real-player-card"
                );


            if (!cards.length) return;


            if (
                "IntersectionObserver"
                in window
            ) {

                const playerObserver =
                    new IntersectionObserver(
                        entries => {

                            entries.forEach(
                                entry => {

                                    if (
                                        entry.isIntersecting
                                    ) {

                                        const card =
                                            entry.target;


                                        const index =
                                            Array
                                                .from(
                                                    card.parentElement.children
                                                )
                                                .indexOf(
                                                    card
                                                );


                                        setTimeout(
                                            () => {

                                                card.classList.add(
                                                    "visible"
                                                );

                                            },
                                            index * 130
                                        );


                                        playerObserver.unobserve(
                                            card
                                        );

                                    }

                                }
                            );

                        },
                        {
                            threshold: .08,

                            rootMargin:
                                "0px 0px -80px 0px"
                        }
                    );


                cards.forEach(
                    card => {

                        playerObserver.observe(
                            card
                        );

                    }
                );

            } else {

                cards.forEach(
                    card => {

                        card.classList.add(
                            "visible"
                        );

                    }
                );

            }

        }


        setTimeout(
            observePlayers,
            100
        );


        /*
        Detect cards created by players.js.
        */

        const playerContainers =
            document.querySelectorAll(
                "#rosterPlayers, #allPlayers"
            );


        if (
            playerContainers.length
        ) {

            const mutationObserver =
                new MutationObserver(
                    () => {

                        observePlayers();

                        setupImages();

                    }
                );


            playerContainers.forEach(
                container => {

                    mutationObserver.observe(
                        container,
                        {
                            childList: true
                        }
                    );

                }
            );

        }



        /*
        ==================================================
        IMAGE LOAD
        ==================================================
        */

        function setupImages() {

            document
                .querySelectorAll(
                    ".player-photo"
                )
                .forEach(image => {

                    if (
                        image.complete
                    ) {

                        image.classList.add(
                            "loaded"
                        );

                    } else {

                        image.addEventListener(
                            "load",
                            () => {

                                image.classList.add(
                                    "loaded"
                                );

                            },
                            {
                                once: true
                            }
                        );

                    }

                });

        }


        setupImages();



        /*
        ==================================================
        CURSOR GLOW
        ==================================================
        */

        const cursorGlow =
            document.querySelector(
                ".cursor-glow"
            );


        if (
            cursorGlow &&
            window.matchMedia(
                "(pointer: fine)"
            ).matches
        ) {

            let mouseX = 0;
            let mouseY = 0;

            let currentX = 0;
            let currentY = 0;


            document.addEventListener(
                "mousemove",
                event => {

                    mouseX =
                        event.clientX;

                    mouseY =
                        event.clientY;

                },
                {
                    passive: true
                }
            );


            function animateCursor() {

                currentX +=
                    (mouseX - currentX)
                    * .08;

                currentY +=
                    (mouseY - currentY)
                    * .08;


                cursorGlow.style.left =
                    `${currentX}px`;

                cursorGlow.style.top =
                    `${currentY}px`;


                requestAnimationFrame(
                    animateCursor
                );

            }


            animateCursor();

        }



        /*
        ==================================================
        BUTTON RIPPLE
        ==================================================
        */

        document
            .querySelectorAll(
                ".button, .nav-button, .pill-button, .real-player-link, .category-arrow"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    event => {

                        const rect =
                            button.getBoundingClientRect();


                        const ripple =
                            document.createElement(
                                "span"
                            );


                        ripple.className =
                            "button-ripple";


                        ripple.style.left =
                            `${
                                event.clientX
                                - rect.left
                            }px`;


                        ripple.style.top =
                            `${
                                event.clientY
                                - rect.top
                            }px`;


                        button.appendChild(
                            ripple
                        );


                        setTimeout(
                            () => {

                                ripple.remove();

                            },
                            700
                        );

                    }
                );

            });



        /*
        ==================================================
        PARALLAX
        ==================================================
        */

        const parallax =
            document.querySelectorAll(
                ".page-hero-background, .join-background"
            );


        if (
            parallax.length
        ) {

            window.addEventListener(
                "scroll",
                () => {

                    const scroll =
                        window.scrollY;


                    parallax.forEach(
                        element => {

                            element.style.setProperty(
                                "--scroll-y",
                                `${scroll * .08}px`
                            );

                        }
                    );

                },
                {
                    passive: true
                }
            );

        }



        /*
        ==================================================
        SMOOTH ANCHOR SCROLL
        ==================================================
        */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(link => {

                link.addEventListener(
                    "click",
                    event => {

                        const id =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !id ||
                            id === "#"
                        ) {
                            return;
                        }


                        const target =
                            document.querySelector(
                                id
                            );


                        if (!target) return;


                        event.preventDefault();


                        target.scrollIntoView({
                            behavior:
                                "smooth",

                            block:
                                "start"
                        });

                    }
                );

            });

    }
);
