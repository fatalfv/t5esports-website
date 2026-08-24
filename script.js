/*
==================================================
T5 ESPORTS WEBSITE JAVASCRIPT
==================================================
*/


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /*
        ==========================================
        HEADER SCROLL
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


            if (window.scrollY > 30) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        }


        updateHeader();


        window.addEventListener(
            "scroll",
            updateHeader,
            {
                passive: true
            }
        );



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

                    mobileMenu.classList.toggle(
                        "open"
                    );


                    menuButton.classList.toggle(
                        "active"
                    );

                }
            );


            mobileMenu
                .querySelectorAll("a")
                .forEach(link => {

                    link.addEventListener(
                        "click",
                        () => {

                            mobileMenu.classList.remove(
                                "open"
                            );


                            menuButton.classList.remove(
                                "active"
                            );

                        }
                    );

                });

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
            "IntersectionObserver" in window
        ) {

            const revealObserver =
                new IntersectionObserver(
                    (entries, observer) => {

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
                        threshold: 0.12
                    }
                );


            revealElements.forEach(
                element => {

                    revealObserver.observe(
                        element
                    );

                }
            );

        } else {

            revealElements.forEach(
                element => {

                    element.classList.add(
                        "visible"
                    );

                }
            );

        }



        /*
        ==========================================
        ACTIVE NAVIGATION
        ==========================================
        */

        const currentPage =
            window.location.pathname
                .split("/")
                .pop() || "index.html";


        document
            .querySelectorAll(".main-nav a")
            .forEach(link => {

                const href =
                    link
                        .getAttribute("href")
                        ?.split("#")[0];


                if (
                    href === currentPage
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });



        /*
        ==========================================
        CURSOR GLOW
        ==========================================
        */

        const cursorGlow =
            document.querySelector(
                ".cursor-glow"
            );


        if (
            cursorGlow &&
            window.matchMedia(
                "(pointer:fine)"
            ).matches
        ) {

            window.addEventListener(
                "mousemove",
                event => {

                    cursorGlow.style.left =
                        `${event.clientX}px`;

                    cursorGlow.style.top =
                        `${event.clientY}px`;

                },
                {
                    passive: true
                }
            );

        }



        /*
        ==========================================
        SMOOTH INTERNAL LINKS
        ==========================================
        */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(link => {

                link.addEventListener(
                    "click",
                    event => {

                        const id =
                            link.getAttribute(
                                "href"
                            );


                        const target =
                            document.querySelector(
                                id
                            );


                        if (!target) {
                            return;
                        }


                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }
                );

            });

    }
);
