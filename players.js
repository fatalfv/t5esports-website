/*
==================================================
T5 ESPORTS
PLAYER DATABASE
==================================================

roster: true
    = appears ONLY in T5 ROSTER

roster: false
    = appears ONLY in ALL PLAYERS

==================================================
*/


const players = [

    {
        name: "FATAL",
        role: "COMPETITIVE PLAYER",
        region: "EU",
        roster: true,
        image: "images/fatal.png",
        profile: "#"
    },


    {
        name: "PLAYER 2",
        role: "COMPETITIVE PLAYER",
        region: "EU",
        roster: true,
        image: "images/player2.png",
        profile: "#"
    },


    {
        name: "PLAYER 3",
        role: "COMPETITIVE PLAYER",
        region: "NA",
        roster: true,
        image: "images/player3.png",
        profile: "#"
    },


    {
        name: "CREATOR",
        role: "CONTENT CREATOR",
        region: "EU",
        roster: false,
        image: "images/creator.png",
        profile: "#"
    },


    {
        name: "PLAYER 4",
        role: "PLAYER",
        region: "EU",
        roster: false,
        image: "images/player4.png",
        profile: "#"
    }

];



/*
==================================================
CREATE PLAYER CARD
==================================================
*/

function createPlayerCard(player, index) {

    const card = document.createElement("article");

    card.className = "real-player-card";

    card.style.setProperty(
        "--card-delay",
        `${index * 100}ms`
    );


    card.innerHTML = `

        <div class="real-player-image">

            ${
                player.image
                ?
                `
                <img
                    class="player-photo"
                    src="${player.image}"
                    alt="${player.name}"
                    loading="lazy"
                >
                `
                :
                `
                <div class="empty-player-logo">
                    T5
                </div>
                `
            }

        </div>


        <div class="player-card-overlay"></div>


        <div class="real-player-number">
            ${String(index + 1).padStart(2, "0")}
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
                href="${player.profile}"
                class="real-player-link"
            >
                VIEW PROFILE
                <span>↗</span>
            </a>

        </div>

    `;


    const image = card.querySelector(".player-photo");


    if (image) {

        if (image.complete) {

            image.classList.add("loaded");

        } else {

            image.addEventListener(
                "load",
                () => {
                    image.classList.add("loaded");
                }
            );

        }

    }


    return card;

}



/*
==================================================
RENDER ROSTER
==================================================
*/

function renderRoster() {

    const container =
        document.getElementById("rosterPlayers");


    if (!container) return;


    /*
    ONLY roster:true
    */

    const rosterPlayers =
        players.filter(
            player => player.roster === true
        );


    rosterPlayers.forEach(
        (player, index) => {

            container.appendChild(
                createPlayerCard(
                    player,
                    index
                )
            );

        }
    );

}



/*
==================================================
RENDER ALL PLAYERS
==================================================
*/

function renderAllPlayers() {

    const container =
        document.getElementById("allPlayers");


    if (!container) return;


    /*
    ONLY roster:false
    */

    const allPlayers =
        players.filter(
            player => player.roster === false
        );


    allPlayers.forEach(
        (player, index) => {

            container.appendChild(
                createPlayerCard(
                    player,
                    index
                )
            );

        }
    );

}



/*
==================================================
START
==================================================
*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderRoster();

        renderAllPlayers();

        /*
        Tell the main animation system
        that the cards now exist.
        */

        if (
            typeof window.refreshRevealAnimations ===
            "function"
        ) {

            window.refreshRevealAnimations();

        }

    }
);
