const players = [

    {
        name: "PLAYER ONE",
        role: "T5 PLAYER",
        region: "EU",
        image: "",
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


const container = document.getElementById("allPlayers");


if (!container) {

    console.error("Could not find #allPlayers.");

} else {

    players.forEach((player, index) => {

        const card = document.createElement("article");

        card.className = "real-player-card";


        const number =
            String(index + 1).padStart(2, "0");


        const imageHTML = player.image

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


        container.appendChild(card);

    });

}
