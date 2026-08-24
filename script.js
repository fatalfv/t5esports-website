/* ==========================================
   PLAYER IMAGE LOADING
========================================== */

.player-photo {
    opacity: 0;
    filter: blur(8px);
    transition:
        opacity .6s ease,
        filter .6s ease,
        transform .7s ease;
}

.player-photo.loaded {
    opacity: 1;
    filter: blur(0);
}


/* ==========================================
   BUTTON CLICK EFFECT
========================================== */

.button-clicked {
    animation: buttonClick .35s ease;
}

@keyframes buttonClick {

    0% {
        transform: scale(1);
    }

    45% {
        transform: scale(.96);
    }

    100% {
        transform: scale(1);
    }

}


/* ==========================================
   BETTER PLAYER IMAGE
========================================== */

.real-player-image {
    background:
        radial-gradient(
            circle at center,
            rgba(118,80,255,.08),
            transparent 65%
        ),
        #0a0a0d;
}


/* ==========================================
   PLAYER CARD LIGHT
========================================== */

.real-player-card::before {

    content: "";

    position: absolute;

    z-index: 4;

    inset: 0;

    border-radius: inherit;

    pointer-events: none;

    opacity: 0;

    background:
        linear-gradient(
            120deg,
            transparent 30%,
            rgba(255,255,255,.08),
            transparent 70%
        );

    transform:
        translateX(-100%);

    transition:
        opacity .3s,
        transform .7s;

}

.real-player-card:hover::before {

    opacity: 1;

    transform:
        translateX(100%);

}


/* ==========================================
   BETTER ROUND BUTTONS
========================================== */

.button,
.nav-button,
.pill-button,
.real-player-link {

    border-radius: 999px;

}


/* ==========================================
   CARD HOVER GLOW
========================================== */

.real-player-card:hover {

    box-shadow:
        0 25px 80px rgba(0,0,0,.45),
        0 0 40px rgba(118,80,255,.06);

}


/* ==========================================
   SMOOTH PAGE
========================================== */

html {
    scroll-behavior: smooth;
}


/* ==========================================
   MOBILE TOUCH
========================================== */

@media (hover: none) {

    .real-player-card:hover {

        transform: none;

    }

    .button:hover {

        transform: none;

    }

}
