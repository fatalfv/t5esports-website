/*
==================================================
T5 ESPORTS
MAIN WEBSITE SCRIPT
==================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*
    ==================================================
    HEADER SCROLL
    ==================================================
    */

    const siteHeader =
        document.getElementById("siteHeader");

    function handleHeaderScroll() {

        if (!siteHeader) return;

        if (window.scrollY > 30) {

            siteHeader.classList.add("scrolled");

        } else {

            siteHeader.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        { passive: true }
    );

    handleHeaderScroll();


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


        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

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
        document.querySelectorAll(".reveal");


    if (revealElements.length) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        entry.target.classList.add("visible");


                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -60px 0px"
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    }


    /*
    ==================================================
    STAGGER CHILDREN
    ==================================================
    */

    document
        .querySelectorAll(".player-grid")
        .forEach(grid => {

            const cards =
                grid.querySelectorAll(".real-player-card");


            cards.forEach((card, index) => {

                card.style.transitionDelay =
                    `${index * 100}ms`;

            });

        });


    /*
    ==================================================
    MOUSE CURSOR GLOW
    ==================================================
    */

    let cursorGlow =
        document.querySelector(".cursor-glow");


    if (!cursorGlow) {

        cursorGlow =
            document.createElement("div");

        cursorGlow.className =
            "cursor-glow";

        document.body.appendChild(
            cursorGlow
        );

    }


    let mouseX = 0;
    let mouseY = 0;

    let glowX = 0;
    let glowY = 0;


    window.addEventListener(
        "mousemove",
        event => {

            mouseX = event.clientX;
            mouseY = event.clientY;

        },
        { passive: true }
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


    /*
    ==================================================
    PARALLAX BACKGROUND
    ==================================================
    */

    const parallaxElements =
        document.querySelectorAll(
            ".hero-background-t5, .page-hero-background"
        );


    if (parallaxElements.length) {

        let ticking = false;


        window.addEventListener(
            "scroll",
            () => {

                if (ticking) return;

                window.requestAnimationFrame(() => {

                    const scroll =
                        window.scrollY;


                    parallaxElements.forEach(
                        element => {

                            const speed =
                                0.12;


                            element.style.transform =
                                `translateY(calc(-50% + ${scroll * speed}px)) skew(-8deg)`;

                        }
                    );


                    ticking = false;

                });


                ticking = true;

            },
            { passive: true }
        );

    }


    /*
    ==================================================
    BUTTON RIPPLE
    ==================================================
    */

    document
        .querySelectorAll(
            ".button, .nav-button, .pill-button, .category-arrow, .real-player-link"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    const ripple =
                        document.createElement("span");


                    ripple.className =
                        "button-ripple";


                    const rect =
                        button.getBoundingClientRect();


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
    CARD MOUSE EFFECT
    ==================================================
    */

    document
        .querySelectorAll(".real-player-card")
        .forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX - rect.left;


                    const y =
                        event.clientY - rect.top;


                    const rotateY =
                        ((x / rect.width) - 0.5) * 5;


                    const rotateX =
                        ((y / rect.height) - 0.5) * -5;


                    card.style.transform =
                        `translateY(-10px) perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });


    /*
    ==================================================
    IMAGE LOAD ANIMATION
    ==================================================
    */

    document
        .querySelectorAll(".player-photo")
        .forEach(image => {

            image.addEventListener(
                "load",
                () => {

                    image.classList.add(
                        "image-loaded"
                    );

                }
            );

        });


    /*
    ==================================================
    ACTIVE NAV ON SCROLL
    ==================================================
    */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".main-nav a"
        );


    if (
        sections.length &&
        navLinks.length
    ) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        const id =
                            entry.target.id;


                        navLinks.forEach(link => {

                            link.classList.remove(
                                "active"
                            );


                            if (
                                link.getAttribute(
                                    "href"
                                ) === `#${id}`
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            }

                        });

                    });

                },
                {
                    threshold: 0.4
                }
            );


        sections.forEach(section => {

            sectionObserver.observe(
                section
            );

        });

    }

});
