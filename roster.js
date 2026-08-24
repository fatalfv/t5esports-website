const rosterPlayers = [

    /*
    ==================================================
    T5 COMPETITIVE ROSTER
    ==================================================

    GitHub image example:

    image:
    "https://github.com/fatalfv/t5esports-website/blob/main/images/fatal.jpeg?raw=true"

    ==================================================
    */

    {
        name: "Fatal",
        role: "OWNER",
        region: "EU",
        image: "https://github.com/fatalfv/t5esports-website/blob/main/images/fatal.jpeg?raw=true",
        discord: "https://discord.gg/t5esports"
    },

    {
        name: "Onyx",
        role: "OWNER",
        region: "EU",
        image: "https://cdn.discordapp.com/attachments/1520906820753821776/1541486221878894672/image.png?ex=6a8dc46a&is=6a8c72ea&hm=cd251a02c57e78c770e61119fa67de2625bd7511008174f632adbc5d037a6ba6&",
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


const container =
    document.getElementById("rosterPlayers");


if (!container) {

    console.error("Could not find #rosterPlayers");

} else {

    rosterPlayers.forEach((player, index) => {

        const card =
            document.createElement("article");


        card.className =
            "real-player-card";


        const number =
            String(index + 1).padStart(2, "0");


        const imageHTML = player.image

            ? `
                <img
                    src="${player.image}"
                    alt="${player.name}"
                    class="player-photo"
                    loading="lazy"
                    onerror="this.style.display='none';"
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


        container.appendChild(card);

    });

}
