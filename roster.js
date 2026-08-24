const rosterPlayers = [

    {
        name: "PLAYER ONE",
        role: "COMPETITIVE PLAYER",
        region: "EU",
        image: "",
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


const container = document.getElementById("rosterPlayers");


rosterPlayers.forEach(player => {

    const card = document.createElement("article");

    card.className = "player-card";


    card.innerHTML = `

        <div
            class="player-image"
            style="
                ${player.image
                    ? `background-image:url('${player.image}')`
                    : ""
                }
            "
        >

            ${
                !player.image
                ? `<span>T5</span>`
                : ""
            }

        </div>


        <div class="player-card-content">

            <div class="player-region">
                ${player.region}
            </div>

            <h2>
                ${player.name}
            </h2>

            <p>
                ${player.role}
            </p>

            <a
                href="${player.discord}"
                target="_blank"
                class="player-button"
            >
                DISCORD ↗
            </a>

        </div>

    `;


    container.appendChild(card);

});
