/* =========================================
   CIVIQ LANDING PAGE JAVASCRIPT
========================================= */


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking a link */

const navItems = navLinks.querySelectorAll("a");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   ACTIVE NAV LINK
========================================= */

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   COUNTER ANIMATION
========================================= */

const counters = document.querySelectorAll(".counter");

let countersStarted = false;


function animateCounters() {

    if (countersStarted) return;

    const statsSection =
        document.querySelector(".stats-section");

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        countersStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.dataset.target);

            let current = 0;

            const duration = 1400;

            const startTime = performance.now();


            function updateCounter(time) {

                const progress =
                    Math.min(
                        (time - startTime) / duration,
                        1
                    );


                const eased =
                    1 - Math.pow(1 - progress, 3);


                current =
                    Math.floor(target * eased);


                counter.textContent =
                    current.toLocaleString();


                if (progress < 1) {

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent =
                        target.toLocaleString();

                }

            }


            requestAnimationFrame(updateCounter);

        });

    }

}


window.addEventListener("scroll", animateCounters);

animateCounters();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".process-item, .feature-card, .issue-dashboard, .lifecycle, .report-content, .report-visual"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   MAP PIN INTERACTION
========================================= */

const pins =
    document.querySelectorAll(".dashboard-pin");


pins.forEach(pin => {

    pin.addEventListener("click", () => {

        pins.forEach(item => {

            item.style.transform = "scale(1)";

        });


        pin.style.transform =
            "scale(1.25)";


        setTimeout(() => {

            pin.style.transform =
                "scale(1)";

        }, 1200);

    });

});


/* =========================================
   FILTER BUTTON DEMO
========================================= */

const filterBtn =
    document.getElementById("filterBtn");


filterBtn.addEventListener("click", () => {

    const rows =
        document.querySelectorAll(".issue-row");


    const showing =
        filterBtn.dataset.filtered === "true";


    rows.forEach((row, index) => {

        if (!showing) {

            if (index >= 2) {

                row.style.display = "none";

            }

        } else {

            row.style.display = "flex";

        }

    });


    filterBtn.dataset.filtered =
        showing ? "false" : "true";


    filterBtn.innerHTML =
        showing

            ? `<i class="fa-solid fa-sliders"></i> Filter`

            : `<i class="fa-solid fa-xmark"></i> Clear`;

});


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        if (
            targetId === "#" ||
            !document.querySelector(targetId)
        ) {

            return;

        }


        event.preventDefault();


        const target =
            document.querySelector(targetId);


        const navbarHeight =
            navbar.offsetHeight;


        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;


        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


/* =========================================
   REPORT PHONE DEMO
========================================= */

const phoneButton =
    document.querySelector(".phone-button");


phoneButton.addEventListener("click", () => {

    const originalText =
        phoneButton.textContent;


    phoneButton.textContent =
        "Report Submitted ✓";


    phoneButton.style.background =
        "#2f8b67";


    setTimeout(() => {

        phoneButton.textContent =
            originalText;

        phoneButton.style.background =
            "";

    }, 2200);

});


/* =========================================
   HERO MAP PINS
========================================= */

const heroPins =
    document.querySelectorAll(".map-pin");


heroPins.forEach(pin => {

    pin.addEventListener("click", () => {

        pin.style.transform =
            "rotate(-45deg) scale(1.3)";


        setTimeout(() => {

            pin.style.transform =
                "rotate(-45deg) scale(1)";

        }, 800);

    });

});


/* =========================================
   INITIAL PAGE LOAD
========================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
