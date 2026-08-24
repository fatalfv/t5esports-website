/* =========================================================
   T5 ESPORTS - PRO ANIMATIONS
   ========================================================= */


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

.reveal,
.player-category,
.real-player-card,
.about-content,
.about-visual,
.section-heading,
.players-page-heading {

    opacity: 0;

    transform:
        translateY(45px);

    transition:
        opacity .8s ease,
        transform .8s cubic-bezier(.2,.8,.2,1);

}


.reveal.visible,
.player-category.visible,
.real-player-card.visible,
.about-content.visible,
.about-visual.visible,
.section-heading.visible,
.players-page-heading.visible {

    opacity: 1;

    transform:
        translateY(0);

}


/* =========================================================
   HEADER SCROLL
   ========================================================= */

.site-header {

    transition:
        height .3s ease,
        background .3s ease,
        box-shadow .3s ease;

}


.site-header.scrolled {

    height: 70px;

    background:
        rgba(5,5,7,.94);

    box-shadow:
        0 10px 40px rgba(0,0,0,.35);

}


/* =========================================================
   NAV ACTIVE
   ========================================================= */

.main-nav a {

    position: relative;

}


.main-nav a::after {

    content: "";

    position: absolute;

    left: 0;
    right: 100%;

    bottom: -8px;

    height: 2px;

    background: #fff;

    transition:
        right .3s ease;

}


.main-nav a:hover::after,
.main-nav a.active::after {

    right: 0;

}


/* =========================================================
   PROFESSIONAL ROUND BUTTONS
   ========================================================= */

.button,
.header-discord,
.switch-page,
.real-player-link,
.category-link {

    position: relative;

    overflow: hidden;

    border-radius: 999px;

}


.button {

    min-height: 52px;

    padding:
        16px 25px;

}


.header-discord {

    border-radius: 999px;

    padding:
        12px 19px;

}


.switch-page {

    border-radius: 999px;

}


.real-player-link {

    border-radius: 999px;

}


.category-link {

    border-radius: 999px;

    padding:
        13px 18px;

    border:
        1px solid #333;

}


/* =========================================================
   BUTTON HOVER
   ========================================================= */

.button,
.header-discord,
.switch-page,
.real-player-link,
.category-link {

    transition:
        transform .25s ease,
        background .25s ease,
        color .25s ease,
        border-color .25s ease,
        box-shadow .25s ease;

}


.button:hover,
.header-discord:hover,
.switch-page:hover,
.real-player-link:hover,
.category-link:hover {

    transform:
        translateY(-3px);

    box-shadow:
        0 12px 35px rgba(0,0,0,.35);

}


/* =========================================================
   RIPPLE
   ========================================================= */

.button-ripple {

    position: absolute;

    width: 10px;

    height: 10px;

    border-radius: 50%;

    background:
        rgba(255,255,255,.35);

    transform:
        translate(-50%, -50%)
        scale(0);

    animation:
        t5Ripple .6s ease-out;

    pointer-events: none;

}


@keyframes t5Ripple {

    to {

        transform:
            translate(-50%, -50%)
            scale(25);

        opacity: 0;

    }

}


/* =========================================================
   CATEGORY CARDS
   ========================================================= */

.player-category {

    border-radius: 24px;

}


.player-category:hover {

    transform:
        translateY(-10px)
        scale(1.01);

    box-shadow:
        0 25px 70px rgba(0,0,0,.4);

}


/* =========================================================
   PLAYER CARDS
   ========================================================= */

.real-player-card {

    border-radius: 22px;

}


.real-player-card:hover {

    transform:
        translateY(-10px)
        scale(1.015);

    box-shadow:
        0 25px 70px rgba(0,0,0,.5);

}


/* =========================================================
   PLAYER IMAGE
   ========================================================= */

.real-player-image {

    overflow: hidden;

}


.player-photo {

    width: 100%;

    height: 100%;

    object-fit: cover;

    object-position: center;

    display: block;

    transition:
        transform .8s cubic-bezier(.2,.8,.2,1),
        filter .5s ease;

}


.real-player-card:hover
.player-photo {

    transform:
        scale(1.08);

    filter:
        brightness(1.08);

}


/* =========================================================
   PLAYER IMAGE LIGHT
   ========================================================= */

.real-player-image::before {

    content: "";

    position: absolute;

    z-index: 2;

    inset: 0;

    background:
        linear-gradient(
            120deg,
            transparent 35%,
            rgba(255,255,255,.08) 50%,
            transparent 65%
        );

    transform:
        translateX(-120%);

    transition:
        transform .8s ease;

    pointer-events: none;

}


.real-player-card:hover
.real-player-image::before {

    transform:
        translateX(120%);

}


/* =========================================================
   PLAYER NUMBER
   ========================================================= */

.real-player-number {

    transition:
        transform .3s ease,
        color .3s ease;

}


.real-player-card:hover
.real-player-number {

    transform:
        translateX(5px);

    color:
        #fff;

}


/* =========================================================
   PLAYER REGION
   ========================================================= */

.real-player-region {

    border-radius:
        999px;

}


/* =========================================================
   PLAYER NAME
   ========================================================= */

.real-player-info h3 {

    transition:
        transform .3s ease;

}


.real-player-card:hover
.real-player-info h3 {

    transform:
        translateX(5px);

}


/* =========================================================
   T5 EMPTY PLAYER LOGO
   ========================================================= */

.empty-player-logo {

    animation:
        t5Float 5s ease-in-out infinite;

}


@keyframes t5Float {

    0%,
    100% {

        transform:
            translate(-50%, -50%)
            skew(-8deg)
            translateY(0);

    }

    50% {

        transform:
            translate(-50%, -50%)
            skew(-8deg)
            translateY(-12px);

    }

}


/* =========================================================
   HERO ANIMATION
   ========================================================= */

.hero-content {

    animation:
        heroContentIn 1s
        cubic-bezier(.2,.8,.2,1)
        both;

}


@keyframes heroContentIn {

    from {

        opacity: 0;

        transform:
            translateY(35px);

    }

    to {

        opacity: 1;

        transform:
            translateY(0);

    }

}


.hero-t5 {

    transition:
        transform .25s ease-out;

    animation:
        heroT5In 1.5s
        ease-out
        both;

}


@keyframes heroT5In {

    from {

        opacity: 0;

        transform:
            translateX(100px)
            translateY(-50%)
            skew(-8deg);

    }

    to {

        opacity: 1;

        transform:
            translateX(0)
            translateY(-50%)
            skew(-8deg);

    }

}


/* =========================================================
   GLOW ANIMATION
   ========================================================= */

.hero-glow {

    animation:
        heroGlow 7s ease-in-out infinite;

}


@keyframes heroGlow {

    0%,
    100% {

        transform:
            translateY(-50%)
            scale(1);

        opacity:
            .7;

    }

    50% {

        transform:
            translateY(-50%)
            scale(1.12);

        opacity:
            1;

    }

}


/* =========================================================
   CATEGORY ART
   ========================================================= */

.category-lines {

    animation:
        categorySpin 18s linear infinite;

}


@keyframes categorySpin {

    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }

}


/* =========================================================
   ABOUT T5
   ========================================================= */

.about-big-t5 {

    transition:
        transform 1s ease;

}


.about-visual:hover
.about-big-t5 {

    transform:
        scale(1.05)
        skew(-8deg);

}


/* =========================================================
   JOIN SECTION
   ========================================================= */

.join-background {

    animation:
        joinFloat 10s ease-in-out infinite;

}


@keyframes joinFloat {

    0%,
    100% {

        transform:
            scale(1)
            rotate(-2deg);

    }

    50% {

        transform:
            scale(1.05)
            rotate(2deg);

    }

}


/* =========================================================
   PAGE HERO
   ========================================================= */

.page-hero-content {

    animation:
        heroContentIn 1s
        cubic-bezier(.2,.8,.2,1)
        both;

}


.page-hero-t5 {

    animation:
        pageT5In 1.2s
        ease-out
        both;

}


@keyframes pageT5In {

    from {

        opacity: 0;

        transform:
            translateX(100px)
            translateY(-50%)
            skew(-8deg);

    }

    to {

        opacity: 1;

        transform:
            translateX(0)
            translateY(-50%)
            skew(-8deg);

    }

}


/* =========================================================
   FOOTER
   ========================================================= */

.footer-socials a {

    transition:
        color .2s ease,
        transform .2s ease;

}


.footer-socials a:hover {

    transform:
        translateY(-3px);

}


/* =========================================================
   MOBILE
   ========================================================= */

@media(max-width: 600px) {

    .button,
    .header-discord,
    .switch-page,
    .real-player-link,
    .category-link {

        border-radius:
            999px;

    }


    .real-player-card {

        border-radius:
            18px;

    }


    .player-category {

        border-radius:
            18px;

    }

}


/* =========================================================
   REDUCED MOTION
   ========================================================= */

.reduce-motion *,
@media (prefers-reduced-motion: reduce) {

    animation-duration:
        .01ms !important;

    animation-iteration-count:
        1 !important;

    transition-duration:
        .01ms !important;

    scroll-behavior:
        auto !important;

}
