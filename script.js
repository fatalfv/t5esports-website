/* ==========================================
   T5 ESPORTS
   MAIN JAVASCRIPT
========================================== */


/* ==========================================
   PLAYER DATA
========================================== */

const rosterPlayers = [

    {
        name: "Fatal",
        role: "OWNER",
        region: "EU",
        image: "https://github.com/fatalfv/t5esports-website/blob/main/images/fatal.jpeg?raw=true",
        discord: "https://discord.gg/t5esports"
    },

    {
        name: "PLAYER TWO",
        role: "COMPETITIVE PLAYER",
        region: "EU",
        image: "",
        discord: "https://discord.gg/t5esports"
    },

    {
        name: "PLAYER THREE",
        role: "COMPETITIVE PLAYER",
        region: "EU",
        image: "",
        discord: "https://discord.gg/t5esports"
    }

];


const players = [

    {
        name: "Fatal",
        role: "OWNER",
        region: "EU",
        image: "https://github.com/fatalfv/t5esports-website/blob/main/images/fatal.jpeg?raw=true",
        discord: "https://discord.gg/t5esports"
    },

    {
        name: "PLAYER TWO",
        role: "T5 PLAYER",
        region: "EU",
        image: "",
        discord: "https://discord.gg/t5esports"
    },

    {
        name: "PLAYER THREE",
        role: "CONTENT CREATOR",
        region: "EU",
        image: "",
        discord: "https://discord.gg/t5esports"
    },

    {
        name: "PLAYER FOUR",
        role: "T5 PLAYER",
        region: "EU",
        image: "",
        discord: "https://discord.gg/t5esports"
    }

];


/* ==========================================
   MOBILE MENU
========================================== */

const menu =
    document.getElementById("menu");

const nav =
    document.getElementById("nav");


if (menu && nav) {

    menu.addEventListener("click", () => {

        const isOpen =
            nav.classList.toggle("open");

        menu.classList.toggle(
            "active",
            isOpen
        );

        menu.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menu.classList.remove("active");

            menu.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* ==========================================
   HEADER SCROLL
========================================== */

const header =
    document.getElementById("siteHeader");


function updateHeader() {

    if (!header) return;

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

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
   GITHUB IMAGE URL
========================================== */

function getImageUrl(url) {

    if (!url) {

        return "";

    }


    /*
        Your GitHub URL works with ?raw=true.

        We leave it alone instead of trying
        to modify it.
    */

    return url;

}


/* ==========================================
   PLAYER CARD
========================================== */

function createPlayerCard(
    player,
    index
) {

    const card =
        document.createElement("article");


    card.className =
        "real-player-card reveal";


    const number =
        String(index + 1).padStart(
            2,
            "0"
        );


    const image =
        getImageUrl(player.image);


    card.innerHTML = `

        <div class="real-player-image">

            ${
                image
                    ? `
                        <img
                            src="${image}"
                            alt="${player.name}"
                            class="player-photo"
                        >
                    `
                    : `
                        <div class="empty-player-logo">
                            T5
                        </div>
                    `
            }

        </div>


        <div class="player-card-overlay"></div>


        <div class="real-player-number">

            ${number}

        </div>


        <div class="real-player-region">

            ${player.region}

        </div>


        <div class="real-player-info">

            <div class="real-player-role">

                ${player.role}

            </div>


            <h3>

                ${player.name}

            </h3>


            <a
                href="${player.discord}"
                target="_blank"
                rel="noopener noreferrer"
                class="real-player-link"
            >

                DISCORD

                <span>↗</span>

            </a>

        </div>

    `;


    /*
        Image loading
    */

    const photo =
        card.querySelector(
            ".player-photo"
        );


    if (photo) {

        photo.addEventListener(
            "load",
            () => {

                photo.classList.add(
                    "loaded"
                );

            }
        );


        photo.addEventListener(
            "error",
            () => {

                const imageContainer =
                    photo.parentElement;


                imageContainer.innerHTML = `

                    <div class="empty-player-logo">
                        T5
                    </div>

                `;

                console.error(
                    "T5 image failed to load:",
                    image
                );

            }
        );


        /*
            In case the browser has already
            cached the image.
        */

        if (photo.complete) {

            if (photo.naturalWidth > 0) {

                photo.classList.add(
                    "loaded"
                );

            }

        }

    }


    return card;

}


/* ==========================================
   RENDER ROSTER
========================================== */

const rosterContainer =
    document.getElementById(
        "rosterPlayers"
    );


if (rosterContainer) {

    rosterPlayers.forEach(
        (player, index) => {

            const card =
                createPlayerCard(
                    player,
                    index
                );


            rosterContainer.appendChild(
                card
            );

        }
    );

}


/* ==========================================
   RENDER ALL PLAYERS
========================================== */

const allPlayersContainer =
    document.getElementById(
        "allPlayers"
    );


if (allPlayersContainer) {

    players.forEach(
        (player, index) => {

            const card =
                createPlayerCard(
                    player,
                    index
                );


            allPlayersContainer.appendChild(
                card
            );

        }
    );

}


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (
    "IntersectionObserver"
    in window
) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

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
                threshold: 0.1,
                rootMargin:
                    "0px 0px -50px 0px"
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(
            element
        );

    });

} else {

    revealElements.forEach(element => {

        element.classList.add(
            "visible"
        );

    });

}


/* ==========================================
   SMOOTH LINKS
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
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        id
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


/* ==========================================
   ACTIVE NAV
========================================== */

const pageSections =
    document.querySelectorAll(
        "section[id]"
    );


const desktopLinks =
    document.querySelectorAll(
        ".main-nav a"
    );


if (
    pageSections.length &&
    desktopLinks.length &&
    "IntersectionObserver"
    in window
) {

    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) {

                        return;

                    }


                    const currentId =
                        entry.target.id;


                    desktopLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );


                        const href =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            href ===
                            `#${currentId}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                });

            },
            {
                threshold: 0.35
            }
        );


    pageSections.forEach(section => {

        sectionObserver.observe(
            section
        );

    });

}


/* ==========================================
   HERO PARALLAX
========================================== */

const heroT5 =
    document.querySelector(
        ".hero-background-t5"
    );


if (heroT5) {

    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY <
                window.innerHeight
            ) {

                const movement =
                    window.scrollY * 0.08;


                heroT5.style.transform =
                    `translateY(calc(-50% + ${movement}px)) skew(-8deg)`;

            }

        },
        {
            passive: true
        }
    );

}


/* ==========================================
   CLOSE MOBILE MENU ON ESC
========================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            if (nav) {

                nav.classList.remove(
                    "open"
                );

            }


            if (menu) {

                menu.classList.remove(
                    "active"
                );

                menu.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);


/* ==========================================
   CONSOLE
========================================== */

console.log(
    "%cT5 ESPORTS",
    "font-size:28px;font-weight:900;"
);

console.log(
    "T5 website loaded successfully."
);
