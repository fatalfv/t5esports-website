const rosterPlayers = [

    /*
    ==========================================
    T5 ROSTER PLAYERS
    ==========================================

    ADD COMPETITIVE T5 PLAYERS HERE

    Example:

    {
        name: "Player Name",
        role: "COMPETITIVE PLAYER",
        region: "EU",
        image: "images/player.jpeg",
        discord: "https://discord.gg/t5esports"
    }

    ==========================================
    */


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
        name: "Onyx",

        role: "OWNER",

        region: "EU",

        image:
            "https://cdn.discordapp.com/attachments/1520906820753821776/1541488494545735750/image.png?ex=6a8dc688&is=6a8c7508&hm=cd89d772ef77e7b1a24f78be2887992bb834a4f6a7c4650a068a055bf0ad5cc4&",

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



/*
==========================================
ROSTER CONTAINER
==========================================
*/

const rosterContainer =
    document.getElementById("rosterPlayers");



if (!rosterContainer) {

    console.error(
        "T5 Roster: #rosterPlayers was not found."
    );

} else {


    rosterPlayers.forEach(
        (player, index) => {

            const card =
                createRosterPlayerCard(
                    player,
                    index
                );

            rosterContainer.appendChild(card);

        }
    );

}



/*
==========================================
CREATE ROSTER PLAYER CARD
==========================================
*/

function createRosterPlayerCard(
    player,
    index
) {

    const card =
        document.createElement("article");


    card.className =
        "real-player-card reveal";


    const number =
        String(index + 1)
            .padStart(2, "0");


    /*
    ==========================================
    IMAGE
    ==========================================
    */

    let imageHTML;


    if (player.image) {

        imageHTML = `

            <img
                src="${player.image}"
                alt="${player.name}"
                class="player-photo"
                loading="lazy"
                onerror="this.style.display='none';"
            >

        `;

    } else {

        imageHTML = `

            <div class="empty-player-logo">
                T5
            </div>

        `;

    }


    /*
    ==========================================
    CARD
    ==========================================
    */

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
