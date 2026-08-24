/* ==========================================
T5 ESPORTS - MAIN SCRIPT
========================================== */


/* ==========================================
MOBILE MENU
========================================== */

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");


if (menu && nav) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("open");

        menu.textContent =
            nav.classList.contains("open")
                ? "×"
                : "☰";

    });


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menu.textContent = "☰";

        });

    });

}


/* ==========================================
HEADER SCROLL EFFECT
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
    { passive: true }
);

updateHeader();


/* ==========================================
SCROLL REVEAL ANIMATIONS
========================================== */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

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
                rootMargin: "0px 0px -60px 0px"
            }
        );


    revealElements.forEach(element => {

        observer.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* ==========================================
PLAYER DATA
========================================== */


/*
    IMPORTANT:

    GitHub image:

    https://github.com/fatalfv/t5esports-website/blob/main/images/fatal.jpeg?raw=true

    Local image:

    images/fatal.jpeg
*/


const rosterPlayers = [

    {
        name: "Fatal",
        role: "OWNER",
        region: "EU",

        image:
            "https://github.com/fatalfv/t5esports-website/blob/main/images/fatal.jpeg?raw=true",

        discord:
            "https://discord.gg/t5esports"
    },


    {
        name: "PLAYER TWO",
        role: "COMPETITIVE PLAYER",
        region: "EU",

        image: "",

        discord:
            "https://discord.gg/t5esports"
    },


    {
        name: "PLAYER THREE",
        role: "COMPETITIVE PLAYER",
        region: "EU",

        image: "",

        discord:
            "https://discord.gg/t5esports"
    }

];


const players = [

    {
        name: "Fatal",
        role: "OWNER",
        region: "EU",

        image:
            "https://github.com/fatalfv/t5esports-website/blob/main/images/fatal.jpeg?raw=true",

        discord:
            "https://discord.gg/t5esports"
    },


    {
        name: "PLAYER TWO",
        role: "T5 PLAYER",
        region: "EU",

        image: "",

        discord:
            "https://discord.gg/t5esports"
    },


    {
        name: "PLAYER THREE",
        role: "CONTENT CREATOR",
        region: "EU",

        image: "",

        discord:
            "https://discord.gg/t5esports"
    },


    {
        name: "PLAYER FOUR",
        role: "T5 PLAYER",
        region: "EU",

        image: "",

        discord:
            "https://discord.gg/t5esports"
    }

];


/* ==========================================
CREATE PLAYER CARD
========================================== */

function createPlayerCard(player, index) {

    const card =
        document.createElement("article");


    card.className =
        "real-player-card reveal";


    const number =
        String(index + 1).padStart(2, "0");


    const imageHTML =
        player.image

            ? `
                <img
                    src="${player.image}"
                    alt="${player.name}"
                    class="player-photo"
                    loading="lazy"
                >
            `

            : `
                <div class="empty-player-logo">
                    T5
                </div>
            `;


    card.innerHTML = `

        <div class="real-player-image">

            ${imageHTML}

        </div>


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


    /* IMAGE ERROR FALLBACK */

    const image =
        card.querySelector(".player-photo");


    if (image) {

        image.addEventListener(
            "error",
            () => {

                image.style.display =
                    "none";

                const imageContainer =
                    card.querySelector(
                        ".real-player-image"
                    );


                if (
                    imageContainer &&
                    !imageContainer.querySelector(
                        ".empty-player-logo"
                    )
                ) {

                    const fallback =
                        document.createElement("div");


                    fallback.className =
                        "empty-player-logo";


                    fallback.textContent =
                        "T5";


                    imageContainer.appendChild(
                        fallback
                    );

                }

            }
        );

    }


    return card;

}


/* ==========================================
ROSTER
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


            rosterContainer.appendChild(card);

        }
    );

}


/* ==========================================
ALL PLAYERS
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


            allPlayersContainer.appendChild(card);

        }
    );

}


/* ==========================================
OBSERVE DYNAMIC PLAYER CARDS
========================================== */

function observeDynamicCards() {

    const dynamicCards =
        document.querySelectorAll(
            ".real-player-card.reveal"
        );


    if (
        !("IntersectionObserver" in window)
    ) {

        dynamicCards.forEach(card => {

            card.classList.add("visible");

        });

        return;

    }


    const cardObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        cardObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.1
            }
        );


    dynamicCards.forEach(card => {

        cardObserver.observe(card);

    });

}


observeDynamicCards();


/* ==========================================
SMOOTH INTERNAL LINKS
========================================== */

document
    .querySelectorAll('a[href^="#"]')
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


/* ==========================================
BUTTON RIPPLE
========================================== */

document
    .querySelectorAll(
        ".button, .nav-button, .pill-button, .real-player-link"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                button.animate(
                    [
                        {
                            transform:
                                "translateY(-2px) scale(.98)"
                        },

                        {
                            transform:
                                "translateY(-2px) scale(1)"
                        }
                    ],
                    {
                        duration: 180,
                        easing: "ease-out"
                    }
                );

            }
        );

    });
