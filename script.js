/*
==================================================
T5 ESPORTS — MAIN SCRIPT
==================================================
- Mobile menu
- Header scroll effect
- Scroll reveal animations
- Staggered card animations
- Active navigation
- Smooth scrolling
- Parallax effects
==================================================
*/


document.addEventListener("DOMContentLoaded", () => {

    /*
    ==================================================
    ELEMENTS
    ==================================================
    */

    const header =
        document.getElementById("siteHeader");

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");


    /*
    ==================================================
    MOBILE MENU
    ==================================================
    */

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("open");

            menuButton.classList.toggle("active");

        });


        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    mobileMenu.classList.remove("open");

                    menuButton.classList.remove("active");

                });

            });

    }


    /*
    ==================================================
    HEADER SCROLL EFFECT
    ==================================================
    */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    /*
    ==================================================
    SCROLL REVEAL
    ==================================================
    */

    const revealElements =
        document.querySelectorAll(".reveal");


    /*
    Reduced motion
    */

    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reduceMotion) {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

        return;

    }


    /*
    ==================================================
    INTERSECTION OBSERVER
    ==================================================
    */

    const revealObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const element =
                        entry.target;


                    /*
                    Small delay based on
                    the element's position
                    */

                    const delay =
                        element.dataset.delay || 0;


                    setTimeout(() => {

                        element.classList.add(
                            "visible"
                        );

                    }, Number(delay));


                    observer.unobserve(element);

                });

            },

            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -80px 0px"

            }

        );


    revealElements.forEach(
        element => {

            revealObserver.observe(element);

        }
    );


    /*
    ==================================================
    STAGGER GRID ITEMS
    ==================================================
    */

    const grids =
        document.querySelectorAll(
            ".category-grid, .player-grid"
        );


    grids.forEach(grid => {

        const cards =
            grid.querySelectorAll(
                ".reveal"
            );


        cards.forEach(
            (card, index) => {

                card.dataset.delay =
                    index * 100;

            }
        );

    });


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
    MOUSE PARALLAX
    ==================================================
    */

    const hero =
        document.querySelector(".hero");

    const heroT5 =
        document.querySelector(
            ".hero-background-t5"
        );

    const heroGlow =
        document.querySelector(
            ".hero-glow"
        );


    if (
        hero &&
        heroT5 &&
        heroGlow
    ) {

        hero.addEventListener(
            "mousemove",
            event => {

                const rect =
                    hero.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left)
                    / rect.width
                    - 0.5;


                const y =
                    (event.clientY - rect.top)
                    / rect.height
                    - 0.5;


                heroT5.style.transform =
                    `
                    translate(
                        ${x * 18}px,
                        calc(-50% + ${y * 12}px)
                    )
                    skew(-8deg)
                    `;


                heroGlow.style.transform =
                    `
                    translate(
                        ${x * -25}px,
                        calc(-50% + ${y * -20}px)
                    )
                    `;

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                heroT5.style.transform =
                    `
                    translateY(-50%)
                    skew(-8deg)
                    `;


                heroGlow.style.transform =
                    `
                    translateY(-50%)
                    `;

            }
        );

    }


    /*
    ==================================================
    CARD MOUSE EFFECT
    ==================================================
    */

    const cards =
        document.querySelectorAll(
            ".real-player-card, .category-card"
        );


    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) / centerY)
                    * -2.5;


                const rotateY =
                    ((x - centerX) / centerX)
                    * 2.5;


                card.style.setProperty(
                    "--rotate-x",
                    `${rotateX}deg`
                );


                card.style.setProperty(
                    "--rotate-y",
                    `${rotateY}deg`
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.setProperty(
                    "--rotate-x",
                    "0deg"
                );


                card.style.setProperty(
                    "--rotate-y",
                    "0deg"
                );

            }
        );

    });


    /*
    ==================================================
    ACTIVE NAVIGATION
    ==================================================
    */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    document
        .querySelectorAll(
            ".main-nav a"
        )
        .forEach(link => {

            const href =
                link.getAttribute("href");


            if (!href) return;


            if (
                currentPage === "players.html" &&
                href.includes("players.html")
            ) {

                link.classList.add("active");

            }


            if (
                (
                    currentPage === "" ||
                    currentPage === "index.html"
                ) &&
                href === "index.html"
            ) {

                link.classList.add("active");

            }

        });


    /*
    ==================================================
    BUTTON RIPPLE
    ==================================================
    */

    document
        .querySelectorAll(
            ".button, .pill-button, .nav-button, .real-player-link, .category-arrow"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    const ripple =
                        document.createElement(
                            "span"
                        );


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


                    setTimeout(
                        () => ripple.remove(),
                        650
                    );

                }
            );

        });


    /*
    ==================================================
    SCROLL PROGRESS
    ==================================================
    */

    let ticking = false;


    function updateScrollProgress() {

        if (ticking) return;


        ticking = true;


        requestAnimationFrame(() => {

            const scrollTop =
                window.scrollY;


            const documentHeight =
                document.documentElement
                    .scrollHeight
                - window.innerHeight;


            const progress =
                documentHeight > 0
                    ? scrollTop / documentHeight
                    : 0;


            document.documentElement
                .style.setProperty(
                    "--scroll-progress",
                    progress
                );


            ticking = false;

        });

    }


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );


    updateScrollProgress();


    /*
    ==================================================
    IMAGE LOADING
    ==================================================
    */

    document
        .querySelectorAll(
            ".player-photo"
        )
        .forEach(image => {

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

                    }
                );

            }

        });


});
