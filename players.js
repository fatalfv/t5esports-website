const players = [

    /*
    ==========================================
    ADD T5 PLAYERS BELOW
    ==========================================

    image = direct image URL

    Example:

    image: "https://example.com/player.png"

    ==========================================
    */


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



const container =
    document.getElementById("allPlayers");



players.forEach((player, index) => {


    const card =
        document.createElement("article");


    card.className =
        "real-player-card";


    const number =
        String(index + 1).padStart(2, "0");


    const imageStyle =
        player.image
            ? `background-image:
                linear-gradient(
                    180deg,
                    transparent 30%,
                    rgba(0,0,0,.95) 100%
                ),
                url("${player.image}");`
            : "";



    card.innerHTML = `

        <div
            class="real-player-image"
            style="${imageStyle}"
        >

            ${
                !player.image
                    ? `<div class="empty-player-logo">T5</div>`
                    : ""
            }

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
                rel="noopener"
                class="real-player-link"
            >

                DISCORD

                <span>↗</span>

            </a>

        </div>

    `;


    container.appendChild(card);

});
