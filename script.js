// ======================================
// JAVASCRIPT PORTFOLIO GUSTIA NAYLA
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    // ==================================
    // DROPDOWN ABOUT
    // ==================================

    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (dropdown && dropdownMenu) {

        dropdown.addEventListener("click", function (event) {

            if (window.innerWidth <= 600) {

                event.preventDefault();

                dropdownMenu.classList.toggle("show");

            }

        });

    }


    // ==================================
    // ANIMASI SAAT SCROLL
    // ==================================

    const elements = document.querySelectorAll(
        ".info-card, .content-section, .profile-section, .dream-section, .hobby-card, .education-item"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        observer.observe(element);

    });


    // ==================================
    // ANIMASI SKILL
    // ==================================

    const skillProgress =
        document.querySelectorAll(".skill-progress");


    skillProgress.forEach(function (progress) {

        const originalWidth =
            progress.style.width;

        progress.style.width = "0";


        setTimeout(function () {

            progress.style.width =
                originalWidth;

        }, 500);

    });


    // ==================================
    // EFEK KARTU
    // ==================================

    const cards =
        document.querySelectorAll(
            ".info-card, .hobby-card"
        );


    cards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.style.transform =
                    "translateY(-8px)";

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "translateY(0)";

            }
        );

    });


    // ==================================
    // FORM CONTACT
    // ==================================

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const nama =
                    document.getElementById("nama").value.trim();

                const email =
                    document.getElementById("email").value.trim();

                const pesan =
                    document.getElementById("pesan").value.trim();

                const formMessage =
                    document.getElementById("formMessage");


                if (
                    nama === "" ||
                    email === "" ||
                    pesan === ""
                ) {

                    formMessage.textContent =
                        "Silakan isi semua data terlebih dahulu.";

                    return;

                }


                formMessage.textContent =
                    "Pesan berhasil disiapkan. Terima kasih, " +
                    nama + ".";


                contactForm.reset();

            }
        );

    }


    // ==================================
    // EFEK TOMBOL
    // ==================================

    const buttons =
        document.querySelectorAll(".btn");


    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                button.style.transform =
                    "scale(0.95)";


                setTimeout(function () {

                    button.style.transform =
                        "";

                }, 150);

            }
        );

    });


    // ==================================
    // CONSOLE
    // ==================================

    console.log(
        "Portfolio Gustia Nayla berhasil dimuat."
    );

});