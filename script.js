/* ==========================================
   T5 ESPORTS — MAIN JAVASCRIPT
========================================== */


/* ==========================================
   MOBILE MENU
========================================== */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


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


/* ==========================================
   NAVBAR SCROLL EFFECT
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
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

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
                rootMargin: "0px 0px -50px 0px"
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* ==========================================
   PLAYER DATA
========================================== */

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


const allPlayers = [

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
        role: "T5 PLAYER",
        region: "EU",
        image: "",
        discord:
            "https://discord.gg/t5esports"
    },


    {
        name: "PLAYER FOUR",
        role: "CONTENT CREATOR",
        region: "EU",
        image: "",
        discord:
            "https://discord.gg/t5esports"
    }

];


/* ==========================================
   PLAYER CARD
========================================== */

function createPlayerCard(player, index) {

    const card =
        document.createElement("article");


    card.className =
        "real-player-card reveal";


    const number =
        String(index + 1).padStart(2, "0");


    const imageHTML = player.image

        ? `
            <div class="real-player-image">

                <img
                    src="${player.image}"
                    alt="${player.name}"
                    class="player-photo"
                    loading="lazy"
                >

                <div class="player-card-overlay"></div>

            </div>
        `

        : `
            <div class="real-player-image">

                <div class="empty-player-logo">
                    T5
                </div>

                <div class="player-card-overlay"></div>

            </div>
        `;


    card.innerHTML = `

        ${imageHTML}


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


    return card;

}


/* ==========================================
   RENDER ROSTER
========================================== */

const rosterContainer =
    document.getElementById("rosterPlayers");


if (rosterContainer) {

    rosterPlayers.forEach(
        (player, index) => {

            rosterContainer.appendChild(
                createPlayerCard(
                    player,
                    index
                )
            );

        }
    );

}


/* ==========================================
   RENDER ALL PLAYERS
========================================== */

const allPlayersContainer =
    document.getElementById("allPlayers");


if (allPlayersContainer) {

    allPlayers.forEach(
        (player, index) => {

            allPlayersContainer.appendChild(
                createPlayerCard(
                    player,
                    index
                )
            );

        }
    );

}


/* ==========================================
   CARD REVEAL FOR DYNAMIC PLAYERS
========================================== */

setTimeout(() => {

    const dynamicCards =
        document.querySelectorAll(
            ".real-player-card.reveal"
        );


    if ("IntersectionObserver" in window) {

        const cardObserver =
            new IntersectionObserver(

                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target
                            .classList
                            .add("visible");


                        observer.unobserve(
                            entry.target
                        );

                    });

                },

                {
                    threshold: 0.1
                }

            );


        dynamicCards.forEach(card => {

            cardObserver.observe(card);

        });

    } else {

        dynamicCards.forEach(card => {

            card.classList.add(
                "visible"
            );

        });

    }

}, 50);


/* ==========================================
   SMOOTH INTERNAL LINKS
========================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetID =
                    link.getAttribute("href");


                const target =
                    document.querySelector(
                        targetID
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
