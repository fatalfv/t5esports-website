const players = [

    {
        name: "PLAYER FOUR",
        role: "CONTENT CREATOR",
        region: "EU",
        image: "",
        discord: "https://discord.gg/t5esports"
    },

    {
        name: "PLAYER FIVE",
        role: "CONTENT CREATOR",
        region: "EU",
        image: "",
        discord: "https://discord.gg/t5esports"
    },

    {
        name: "PLAYER SIX",
        role: "COMMUNITY MEMBER",
        region: "EU",
        image: "",
        discord: "https://discord.gg/t5esports"
    }

];


const playersContainer =
    document.getElementById("allPlayers");


if (playersContainer) {

    players.forEach((player, index) => {

        const card =
            createPlayerCard(player, index);

        playersContainer.appendChild(card);

    });

}


function createPlayerCard(player, index) {

    const card =
        document.createElement("article");

    card.className =
        "real-player-card reveal";


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
