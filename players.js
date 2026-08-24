/*
==================================================
T5 ESPORTS PLAYER DATABASE
==================================================

roster: true
    = ONLY T5 ROSTER

roster: false
    = ONLY ALL PLAYERS

==================================================
*/


const players = [

    /*
    ==================================================
    T5 ROSTER
    ==================================================
    */


    {
        name: "Fatal",

        role: "OWNER",

        region: "EU",

        roster: true,

        image:
            "https://github.com/fatalfv/t5esports-website/blob/main/images/fatal.jpeg?raw=true",

        discord:
            "https://discord.gg/t5esports"
    },


    {
        name: "Onyx",

        role: "OWNER",

        region: "EU",

        roster: true,

        image:
            "https://cdn.discordapp.com/attachments/1520906820753821776/1541488494545735750/image.png?ex=6a8dc688&is=6a8c7508&hm=cd89d772ef77e7b1a24f78be2887992bb834a4f6a7c4650a068a055bf0ad5cc4&",

        discord:
            "https://discord.gg/t5esports"
    },


    {
        name: "PLAYER THREE",

        role: "COMPETITIVE PLAYER",

        region: "EU",

        roster: true,

        image: "",

        discord:
            "https://discord.gg/t5esports"
    },


    /*
    ==================================================
    ALL PLAYERS ONLY
    ==================================================
    */


    {
        name: "PLAYER FOUR",

        role: "CONTENT CREATOR",

        region: "EU",

        roster: false,

        image: "",

        discord:
            "https://discord.gg/t5esports"
    },


    {
        name: "PLAYER FIVE",

        role: "CONTENT CREATOR",

        region: "EU",

        roster: false,

        image: "",

        discord:
            "https://discord.gg/t5esports"
    },


    {
        name: "PLAYER SIX",

        role: "COMMUNITY MEMBER",

        region: "EU",

        roster: false,

        image: "",

        discord:
            "https://discord.gg/t5esports"
    }

];


/*
==================================================
CREATE PLAYER CARD
==================================================
*/

function createPlayerCard(player, index) {

    const card =
        document.createElement("article");


    card.className =
        "real-player-card reveal";


    const number =
        String(index + 1).padStart(2, "0");


    let imageHTML;


    if (
        player.image &&
        player.image.trim() !== ""
    ) {

        imageHTML = `

            <img
                src="${player.image}"
                alt="${player.name}"
                class="player-photo"
                loading="lazy"
            >

        `;

    } else {

        imageHTML = `

            <div class="empty-player-logo">
                T5
            </div>

        `;

    }


    card.innerHTML = `

        <div class="real-player-image">

            ${imageHTML}

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


    return card;

}


/*
==================================================
ROSTER
==================================================
*/

const rosterContainer =
    document.getElementById(
        "rosterPlayers"
    );


if (rosterContainer) {

    const roster =
        players.filter(
            player =>
                player.roster === true
        );


    roster.forEach(
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


/*
==================================================
ALL PLAYERS
==================================================
*/

const playersContainer =
    document.getElementById(
        "allPlayers"
    );


if (playersContainer) {

    const allPlayers =
        players.filter(
            player =>
                player.roster === false
        );


    allPlayers.forEach(
        (player, index) => {

            playersContainer.appendChild(
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
SCROLL REVEAL
==================================================
*/

const playerRevealElements =
    document.querySelectorAll(
        ".player-grid .reveal"
    );


if (
    "IntersectionObserver" in window
) {

    const observer =
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
                threshold: 0.1
            }
        );


    playerRevealElements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

} else {

    playerRevealElements.forEach(
        element => {

            element.classList.add(
                "visible"
            );

        }
    );

}
