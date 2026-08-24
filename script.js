/*
==================================================
T5 ESPORTS
MAIN WEBSITE JAVASCRIPT
==================================================
*/


document.addEventListener("DOMContentLoaded", () => {


    /*
    ==================================================
    HEADER SCROLL EFFECT
    ==================================================
    */

    const header =
        document.getElementById("siteHeader");


    function updateHeader() {

        if (!header) return;


        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();



    /*
    ==================================================
    MOBILE MENU
    ==================================================
    */

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            menuButton.classList.toggle("active");

            mobileMenu.classList.toggle("open");

        });


        const mobileLinks =
            mobileMenu.querySelectorAll("a");


        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                menuButton.classList.remove("active");

                mobileMenu.classList.remove("open");

            });

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


    if (revealElements.length) {


        const revealObserver =
            new IntersectionObserver(

                (entries, observer) => {

                    entries.forEach(entry => {

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

                    });

                },

                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -70px 0px"
                }

            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    }



    /*
    ==================================================
    PLAYER CARD SCROLL ANIMATION
    ==================================================
    */

    const playerCards =
        document.querySelectorAll(
            ".real-player-card"
        );


    if (playerCards.length) {


        const playerObserver =
            new IntersectionObserver(

                (entries, observer) => {

                    entries.forEach(entry => {

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

                    });

                },

                {
                    threshold: 0.10,

                    rootMargin:
                        "0px 0px -80px 0px"
                }

            );


        playerCards.forEach((card, index) => {

            /*
            Add a slightly different delay
            to each card.
            */

            card.style.transitionDelay =
                `${index * 0.08}s`;


            playerObserver.observe(card);

        });

    }



    /*
    ==================================================
    IMAGE LOAD ANIMATION
    ==================================================
    */

    const playerImages =
        document.querySelectorAll(
            ".player-photo"
        );


    playerImages.forEach(image => {


        if (image.complete) {

            image.classList.add("loaded");

        } else {

            image.addEventListener(
                "load",
                () => {

                    image.classList.add("loaded");

                },
                { once: true }
            );

        }

    });



    /*
    ==================================================
    SMOOTH INTERNAL LINKS
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

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }
            );

        });



    /*
    ==================================================
    PARALLAX EFFECT
    ==================================================
    */

    const parallaxElements =
        document.querySelectorAll(
            ".page-hero-background, .hero-background-t5, .category-background, .join-background"
        );


    if (
        parallaxElements.length &&
        !window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {


        let ticking = false;


        function updateParallax() {

            const scrollY =
                window.scrollY;


            parallaxElements.forEach(element => {

                const rect =
                    element.getBoundingClientRect();


                const speed =
                    element.classList.contains(
                        "join-background"
                    )
                        ? 0.08
                        : 0.12;


                const movement =
                    (window.innerHeight / 2 -
                        rect.top -
                        rect.height / 2) *
                    speed;


                element.style.transform =
                    `translate3d(0, ${movement}px, 0) skew(-8deg)`;

            });


            ticking = false;

        }


        window.addEventListener(
            "scroll",
            () => {

                if (!ticking) {

                    window.requestAnimationFrame(
                        updateParallax
                    );

                    ticking = true;

                }

            },
            { passive: true }
        );


        updateParallax();

    }



    /*
    ==================================================
    CURSOR GLOW
    ==================================================
    */

    const glow =
        document.querySelector(
            ".cursor-glow"
        );


    if (
        glow &&
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


            glow.style.left =
                `${glowX}px`;

            glow.style.top =
                `${glowY}px`;


            requestAnimationFrame(
                animateGlow
            );

        }


        animateGlow();

    }



    /*
    ==================================================
    BUTTON RIPPLE
    ==================================================
    */

    const buttons =
        document.querySelectorAll(
            ".button, .nav-button, .pill-button, .real-player-link"
        );


    buttons.forEach(button => {


        button.addEventListener(
            "mouseenter",
            () => {

                button.style.setProperty(
                    "--mouse-x",
                    "50%"
                );

                button.style.setProperty(
                    "--mouse-y",
                    "50%"
                );

            }
        );

    });



    /*
    ==================================================
    INITIAL PAGE LOAD
    ==================================================
    */

    document.body.classList.add(
        "page-loaded"
    );


});
