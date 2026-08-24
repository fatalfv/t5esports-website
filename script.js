/* ==========================================
   T5 ESPORTS
   MAIN JAVASCRIPT
========================================== */


/* ==========================================
   MOBILE MENU
========================================== */

const menu =
    document.getElementById("menu");

const nav =
    document.getElementById("nav");


if (menu && nav) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("open");

        menu.classList.toggle("active");

    });


    document
        .querySelectorAll("#nav a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "open"
                    );

                    menu.classList.remove(
                        "active"
                    );

                }
            );

        });

}


/* ==========================================
   HEADER SCROLL
========================================== */

const header =
    document.querySelector(
        ".site-header"
    );


function updateHeader() {

    if (!header) return;


    if (window.scrollY > 35) {

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


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(
        ".scroll-reveal"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) {

                        return;

                    }


                    entry.target.classList.add(
                        "visible"
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -50px 0px"
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


/* ==========================================
   STAGGER PLAYER CARDS
========================================== */

document
    .querySelectorAll(
        ".player-grid"
    )
    .forEach(grid => {

        grid
            .querySelectorAll(
                ".real-player-card"
            )
            .forEach(
                (card, index) => {

                    card.style.setProperty(
                        "--delay",
                        `${index * 100}ms`
                    );

                }
            );

    });


/* ==========================================
   STAGGER CATEGORY CARDS
========================================== */

document
    .querySelectorAll(
        ".category-grid"
    )
    .forEach(grid => {

        grid
            .querySelectorAll(
                ".category-card"
            )
            .forEach(
                (card, index) => {

                    card.style.setProperty(
                        "--delay",
                        `${index * 120}ms`
                    );

                }
            );

    });


/* ==========================================
   BUTTON RIPPLE
========================================== */

const interactiveButtons =
    document.querySelectorAll(
        ".button, .nav-button, .pill-button, .real-player-link, .category-arrow"
    );


interactiveButtons.forEach(
    button => {

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
                    () => {

                        ripple.remove();

                    },
                    700
                );

            }
        );

    }
);


/* ==========================================
   HERO PARALLAX
========================================== */

const hero =
    document.querySelector(
        ".hero"
    );


const heroBackground =
    document.querySelector(
        ".hero-background-t5"
    );


if (
    hero &&
    heroBackground &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    hero.addEventListener(
        "mousemove",
        event => {

            const rect =
                hero.getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                )
                /
                rect.width
                -
                0.5;


            const y =
                (
                    event.clientY -
                    rect.top
                )
                /
                rect.height
                -
                0.5;


            heroBackground.style.transform =
                `
                translate(
                    ${x * -15}px,
                    ${y * -15}px
                )
                translateY(-50%)
                skew(-8deg)
                `;

        }
    );


    hero.addEventListener(
        "mouseleave",
        () => {

            heroBackground.style.transform =
                `
                translateY(-50%)
                skew(-8deg)
                `;

        }
    );

}


/* ==========================================
   PLAYER IMAGE PARALLAX
========================================== */

document
    .querySelectorAll(
        ".real-player-card"
    )
    .forEach(card => {

        const image =
            card.querySelector(
                ".player-photo"
            );


        if (!image) return;


        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    )
                    /
                    rect.width
                    -
                    0.5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    )
                    /
                    rect.height
                    -
                    0.5;


                image.style.transform =
                    `
                    scale(1.07)
                    translate(
                        ${x * -7}px,
                        ${y * -7}px
                    )
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "scale(1)";

            }
        );

    });


/* ==========================================
   SMOOTH ANCHOR LINKS
========================================== */

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
                ) return;


                const target =
                    document.querySelector(
                        id
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


/* ==========================================
   PAGE LOAD
========================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
