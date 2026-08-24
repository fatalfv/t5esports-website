/*
==================================================
T5 ESPORTS
MAIN WEBSITE SCRIPT
==================================================
*/


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /*
        ==========================================
        HEADER
        ==========================================
        */

        const header =
            document.getElementById(
                "siteHeader"
            );


        function updateHeader() {

            if (!header) {
                return;
            }


            if (
                window.scrollY > 40
            ) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        }


        window.addEventListener(
            "scroll",
            updateHeader,
            {
                passive: true
            }
        );


        updateHeader();



        /*
        ==========================================
        MOBILE MENU
        ==========================================
        */

        const menuButton =
            document.getElementById(
                "menuButton"
            );


        const mobileMenu =
            document.getElementById(
                "mobileMenu"
            );


        if (
            menuButton &&
            mobileMenu
        ) {

            menuButton.addEventListener(
                "click",
                () => {

                    menuButton.classList.toggle(
                        "active"
                    );


                    mobileMenu.classList.toggle(
                        "open"
                    );

                }
            );


            mobileMenu
                .querySelectorAll("a")
                .forEach(
                    link => {

                        link.addEventListener(
                            "click",
                            () => {

                                menuButton.classList.remove(
                                    "active"
                                );


                                mobileMenu.classList.remove(
                                    "open"
                                );

                            }
                        );

                    }
                );

        }



        /*
        ==========================================
        SCROLL REVEAL
        ==========================================
        */

        const revealElements =
            document.querySelectorAll(
                ".reveal"
            );


        if (
            !(
                "IntersectionObserver"
                in window
            )
        ) {

            revealElements.forEach(
                element => {

                    element.classList.add(
                        "visible"
                    );

                }
            );

        } else {


            const revealObserver =
                new IntersectionObserver(
                    (
                        entries,
                        observer
                    ) => {

                        entries.forEach(
                            entry => {

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

                            }
                        );

                    },
                    {

                        threshold:
                            0.12,

                        rootMargin:
                            "0px 0px -70px 0px"

                    }
                );


            revealElements.forEach(
                element => {

                    revealObserver.observe(
                        element
                    );

                }
            );

        }



        /*
        ==========================================
        CURSOR GLOW
        ==========================================
        */

        if (
            window.matchMedia(
                "(pointer: fine)"
            ).matches
        ) {

            const glow =
                document.createElement(
                    "div"
                );


            glow.className =
                "cursor-glow";


            document.body.appendChild(
                glow
            );


            let mouseX =
                window.innerWidth / 2;


            let mouseY =
                window.innerHeight / 2;


            let glowX =
                mouseX;


            let glowY =
                mouseY;


            document.addEventListener(
                "mousemove",
                event => {

                    mouseX =
                        event.clientX;

                    mouseY =
                        event.clientY;

                },
                {
                    passive: true
                }
            );


            function animateGlow() {

                glowX +=
                    (
                        mouseX -
                        glowX
                    ) * .08;


                glowY +=
                    (
                        mouseY -
                        glowY
                    ) * .08;


                glow.style.left =
                    `${glowX}px`;


                glow.style.top =
                    `${glowY}px`;


                requestAnimationFrame(
                    animateGlow
                );

            }


            animateGlow();

        }



        /*
        ==========================================
        SMOOTH ANCHOR SCROLL
        ==========================================
        */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
                link => {

                    link.addEventListener(
                        "click",
                        event => {

                            const id =
                                link.getAttribute(
                                    "href"
                                );


                            if (
                                !id ||
                                id === "#"
                            ) {

                                return;

                            }


                            const target =
                                document.querySelector(
                                    id
                                );


                            if (!target) {

                                return;

                            }


                            event.preventDefault();


                            target.scrollIntoView(
                                {
                                    behavior:
                                        "smooth",

                                    block:
                                        "start"
                                }
                            );

                        }
                    );

                }
            );



        /*
        ==========================================
        IMAGE LOAD ANIMATION
        ==========================================
        */

        document
            .querySelectorAll(
                ".player-photo"
            )
            .forEach(
                image => {

                    image.addEventListener(
                        "load",
                        () => {

                            image.classList.add(
                                "loaded"
                            );

                        }
                    );

                }
            );

    }
);
