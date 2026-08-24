/*
==================================================
T5 ESPORTS
MAIN WEBSITE ANIMATIONS
==================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*
    ==================================================
    HEADER SCROLL
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

        menuButton.addEventListener(
            "click",
            () => {

                const open =
                    mobileMenu.classList.toggle("open");

                menuButton.classList.toggle(
                    "active",
                    open
                );

            }
        );


        /*
        Close menu after clicking a link
        */

        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileMenu.classList.remove(
                            "open"
                        );

                        menuButton.classList.remove(
                            "active"
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
        document.querySelectorAll(".reveal");


    /*
    If the browser supports IntersectionObserver,
    use it for proper scroll animations.
    */

    if ("IntersectionObserver" in window) {

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

                            /*
                            Stop watching once revealed.
                            */

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -80px 0px"
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        /*
        Fallback for older browsers.
        */

        revealElements.forEach(element => {

            element.classList.add(
                "visible"
            );

        });

    }



    /*
    ==================================================
    PLAYER CARD REVEAL
    ==================================================
    */

    function observePlayerCards() {

        const cards =
            document.querySelectorAll(
                ".real-player-card"
            );


        if (!cards.length) return;


        /*
        Remove any accidental inline
        animation state.
        */

        cards.forEach(card => {

            card.classList.remove(
                "visible"
            );

        });


        if ("IntersectionObserver" in window) {

            const cardObserver =
                new IntersectionObserver(
                    (entries, observer) => {

                        entries.forEach(entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                const card =
                                    entry.target;


                                /*
                                Get the card's
                                position in its grid.
                                */

                                const cardsInGrid =
                                    Array.from(
                                        card.parentElement.children
                                    );

                                const index =
                                    cardsInGrid.indexOf(
                                        card
                                    );


                                /*
                                Stagger cards manually.
                                */

                                setTimeout(
                                    () => {

                                        card.classList.add(
                                            "visible"
                                        );

                                    },
                                    index * 130
                                );


                                observer.unobserve(
                                    card
                                );

                            }

                        });

                    },
                    {
                        threshold: 0.08,

                        rootMargin:
                            "0px 0px -100px 0px"
                    }
                );


            cards.forEach(card => {

                cardObserver.observe(card);

            });

        } else {

            cards.forEach(card => {

                card.classList.add(
                    "visible"
                );

            });

        }

    }


    /*
    Players.js creates the cards after
    this script normally loads, so wait
    briefly before observing them.
    */

    setTimeout(
        observePlayerCards,
        100
    );


    /*
    ==================================================
    MUTATION OBSERVER
    ==================================================
    
    This detects cards created dynamically
    by players.js.
    */

    const playerContainers =
        document.querySelectorAll(
            "#rosterPlayers, #allPlayers"
        );


    if (playerContainers.length) {

        const mutationObserver =
            new MutationObserver(() => {

                observePlayerCards();

            });


        playerContainers.forEach(container => {

            mutationObserver.observe(
                container,
                {
                    childList: true
                }
            );

        });

    }



    /*
    ==================================================
    IMAGE LOAD ANIMATION
    ==================================================
    */

    function setupImages() {

        const images =
            document.querySelectorAll(
                ".player-photo"
            );


        images.forEach(image => {

            if (image.complete) {

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
    WATCH FOR NEW PLAYER IMAGES
    ==================================================
    */

    const imageObserver =
        new MutationObserver(() => {

            setupImages();

        });


    document
        .querySelectorAll(
            "#rosterPlayers, #allPlayers"
        )
        .forEach(container => {

            imageObserver.observe(
                container,
                {
                    childList: true,
                    subtree: true
                }
            );

        });



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

        let glowX = 0;
        let glowY = 0;


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


        function animateGlow() {

            glowX +=
                (mouseX - glowX) * 0.08;

            glowY +=
                (mouseY - glowY) * 0.08;


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
    ==================================================
    PARALLAX BACKGROUND
    ==================================================
    */

    const backgrounds =
        document.querySelectorAll(
            ".page-hero-background, .join-background"
        );


    if (
        backgrounds.length &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        let ticking = false;


        window.addEventListener(
            "scroll",
            () => {

                if (ticking) return;

                ticking = true;


                requestAnimationFrame(() => {

                    const scroll =
                        window.scrollY;


                    backgrounds.forEach(
                        background => {

                            const speed =
                                0.12;


                            background.style.transform =
                                `translate3d(0, ${scroll * speed}px, 0) skew(-8deg)`;

                        }
                    );


                    ticking = false;

                });

            },
            {
                passive: true
            }
        );

    }



    /*
    ==================================================
    SMOOTH ANCHOR LINKS
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

        });



    /*
    ==================================================
    HERO LOAD ANIMATION
    ==================================================
    */

    const hero =
        document.querySelector(
            ".page-hero-content"
        );


    if (hero) {

        /*
        Make the hero appear immediately
        instead of waiting for scrolling.
        */

        setTimeout(() => {

            hero.classList.add(
                "visible"
            );

        }, 150);

    }



    /*
    ==================================================
    BUTTON RIPPLE EFFECT
    ==================================================
    */

    const buttons =
        document.querySelectorAll(
            ".button, .nav-button, .pill-button, .real-player-link"
        );


    buttons.forEach(button => {

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
                    `${event.clientX - rect.left}px`;


                ripple.style.top =
                    `${event.clientY - rect.top}px`;


                button.appendChild(
                    ripple
                );


                setTimeout(() => {

                    ripple.remove();

                }, 700);

            }
        );

    });



    /*
    ==================================================
    DONE
    ==================================================
    */

    console.log(
        "T5 Esports animations loaded."
    );

});
