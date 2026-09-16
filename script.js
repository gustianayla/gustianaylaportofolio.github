document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. EFEK TOMBOL SAAT DIKLIK
    // ==========================================

    const buttons = document.querySelectorAll(
        ".btn, .instagram-button, .github-button"
    );

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.classList.add("button-click");

            setTimeout(function () {
                button.classList.remove("button-click");
            }, 180);

        });

    });


    // ==========================================
    // 2. ANIMASI ELEMENT SAAT SCROLL
    // ==========================================

    const animatedElements = document.querySelectorAll(
        ".info-card, .education-item, .skill-item, .hobby-card"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(function (element) {
        observer.observe(element);
    });


    // ==========================================
    // 3. ANIMASI BAR SKILL
    // ==========================================

    const skillBars = document.querySelectorAll(".skill-progress");

    skillBars.forEach(function (bar) {

        const skillWidth = bar.style.width;

        bar.style.width = "0%";

        setTimeout(function () {

            bar.style.width = skillWidth;

        }, 500);

    });


    // ==========================================
    // 4. DROPDOWN MENU ABOUT
    // ==========================================

    const dropdown = document.querySelector(".dropdown");
    const dropdownLink = document.querySelector(".dropdown > a");

    if (dropdown && dropdownLink) {

        dropdownLink.addEventListener("click", function (event) {

            if (window.innerWidth <= 600) {

                event.preventDefault();

                dropdown.classList.toggle("open");

            }

        });

    }


    // ==========================================
    // 5. MENUTUP DROPDOWN KETIKA KLIK DI LUAR
    // ==========================================

    document.addEventListener("click", function (event) {

        if (
            dropdown &&
            !dropdown.contains(event.target)
        ) {

            dropdown.classList.remove("open");

        }

    });


    // ==========================================
    // 6. SMOOTH SCROLL
    // ==========================================

    const anchorLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target = document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    // ==========================================
    // 7. EFEK NAVBAR SAAT SCROLL
    // ==========================================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (navbar) {

            if (window.scrollY > 50) {

                navbar.classList.add("navbar-scroll");

            } else {

                navbar.classList.remove("navbar-scroll");

            }

        }

    });


    // ==========================================
    // 8. EFEK FOTO PROFILE
    // ==========================================

    const profileImage = document.querySelector(
        ".hero-image img, .profile-image img"
    );

    if (profileImage) {

        profileImage.addEventListener(
            "mouseenter",
            function () {

                profileImage.classList.add(
                    "image-hover"
                );

            }
        );


        profileImage.addEventListener(
            "mouseleave",
            function () {

                profileImage.classList.remove(
                    "image-hover"
                );

            }
        );

    }


    // ==========================================
    // 9. FORM CONTACT
    // ==========================================

    const contactForm = document.querySelector(
        ".contact-form"
    );

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const nama =
                    document.getElementById("nama");

                const email =
                    document.getElementById("email");

                const pesan =
                    document.getElementById("pesan");


                if (
                    nama &&
                    email &&
                    pesan &&
                    nama.value.trim() !== "" &&
                    email.value.trim() !== "" &&
                    pesan.value.trim() !== ""
                ) {

                    alert(
                        "Terima kasih, " +
                        nama.value +
                        ". Pesan kamu sudah diterima."
                    );

                    contactForm.reset();

                } else {

                    alert(
                        "Silakan isi semua bagian form terlebih dahulu."
                    );

                }

            }
        );

    }


    // ==========================================
    // 10. VALIDASI EMAIL
    // ==========================================

    const emailInput =
        document.getElementById("email");

    if (emailInput) {

        emailInput.addEventListener(
            "blur",
            function () {

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (
                    emailInput.value !== "" &&
                    !emailPattern.test(emailInput.value)
                ) {

                    emailInput.setCustomValidity(
                        "Masukkan alamat email yang valid."
                    );

                } else {

                    emailInput.setCustomValidity("");

                }

            }
        );

    }


    // ==========================================
    // 11. EFEK INPUT FORM
    // ==========================================

    const formInputs = document.querySelectorAll(
        ".contact-form input, .contact-form textarea"
    );

    formInputs.forEach(function (input) {

        input.addEventListener(
            "focus",
            function () {

                input.classList.add(
                    "input-focus"
                );

            }
        );


        input.addEventListener(
            "blur",
            function () {

                input.classList.remove(
                    "input-focus"
                );

            }
        );

    });


    // ==========================================
    // 12. TAHUN OTOMATIS FOOTER
    // ==========================================

    const footer = document.querySelector("footer");

    if (footer) {

        const tahun = new Date().getFullYear();

        footer.innerHTML =
            "<p>© " +
            tahun +
            " Gustia Nayla. All Rights Reserved.</p>";

    }


    // ==========================================
    // 13. TOMBOL KEMBALI KE ATAS
    // ==========================================

    const backToTop =
        document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 300) {

                    backToTop.classList.add("show");

                } else {

                    backToTop.classList.remove("show");

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    // ==========================================
    // 14. EFEK KARTU INFO
    // ==========================================

    const infoCards =
        document.querySelectorAll(".info-card");

    infoCards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.classList.add(
                    "card-active"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.classList.remove(
                    "card-active"
                );

            }
        );

    });


    // ==========================================
    // 15. EFEK HOBI
    // ==========================================

    const hobbyCards =
        document.querySelectorAll(".hobby-card");

    hobbyCards.forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                card.classList.toggle(
                    "hobby-active"
                );

            }
        );

    });


    // ==========================================
    // 16. EFEK PENDIDIKAN
    // ==========================================

    const educationItems =
        document.querySelectorAll(
            ".education-item"
        );

    educationItems.forEach(function (item) {

        item.addEventListener(
            "mouseenter",
            function () {

                item.classList.add(
                    "education-active"
                );

            }
        );


        item.addEventListener(
            "mouseleave",
            function () {

                item.classList.remove(
                    "education-active"
                );

            }
        );

    });


    // ==========================================
    // 17. EFEK KETIKA HALAMAN SELESAI DIMUAT
    // ==========================================

    document.body.classList.add(
        "page-loaded"
    );


    // ==========================================
    // 18. TAMPILKAN POSISI SCROLL
    // ==========================================

    window.addEventListener(
        "scroll",
        function () {

            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scrollTop =
                document.documentElement.scrollTop;

            if (scrollHeight > 0) {

                const scrollPercent =
                    (scrollTop / scrollHeight) * 100;

                document.body.style.setProperty(
                    "--scroll-progress",
                    scrollPercent + "%"
                );

            }

        }
    );


    // ==========================================
    // 19. EFEK KLIK LINK INSTAGRAM
    // ==========================================

    const instagramButton =
        document.querySelector(
            ".instagram-button"
        );

    if (instagramButton) {

        instagramButton.addEventListener(
            "click",
            function () {

                console.log(
                    "Instagram Gustia Nayla dibuka."
                );

            }
        );

    }


    // ==========================================
    // 20. EFEK KLIK LINK GITHUB
    // ==========================================

    const githubButton =
        document.querySelector(
            ".github-button"
        );

    if (githubButton) {

        githubButton.addEventListener(
            "click",
            function () {

                console.log(
                    "GitHub Gustia Nayla dibuka."
                );

            }
        );

    }


    // ==========================================
    // 21. DETEKSI UKURAN LAYAR
    // ==========================================

    function checkScreenSize() {

        if (window.innerWidth <= 600) {

            document.body.classList.add(
                "mobile-screen"
            );

        } else {

            document.body.classList.remove(
                "mobile-screen"
            );

        }

    }


    checkScreenSize();


    window.addEventListener(
        "resize",
        function () {

            checkScreenSize();

        }
    );


    // ==========================================
    // 22. PESAN DI CONSOLE
    // ==========================================

    console.log(
        "Portfolio Gustia Nayla berhasil dimuat."
    );

});