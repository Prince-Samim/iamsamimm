document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    window.addEventListener("scroll", function() {
        let current = "";
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) current = section.getAttribute("id");
        });
        navLinks.forEach(function(link) {
            link.classList.remove("active-nav", "text-indigo-600");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active-nav", "text-indigo-600");
            }
        });
    });

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", function() {
            mobileMenu.classList.toggle("mobile-menu-active");
        });
    }

    document.querySelectorAll(".mobile-nav-link").forEach(function(link) {
        link.addEventListener("click", function() {
            if (mobileMenu) {
                mobileMenu.classList.remove("mobile-menu-active");
            }
        });
    });

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        const emailInput = document.getElementById("email");
        emailInput.addEventListener("input", function() {
            emailInput.setCustomValidity("");
        });
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const email = emailInput.value;
            if (!email.endsWith("@gmail.com")) {
                emailInput.setCustomValidity("Only Gmail addresses are supported");
                emailInput.reportValidity();
                return;
            }
            emailInput.setCustomValidity("");
            const formFeedback = document.getElementById("formFeedback");
            if (formFeedback) {
                formFeedback.innerHTML = "Thanks! I'll get back within 24 hours.";
                contactForm.reset();
                setTimeout(function() {
                    formFeedback.innerHTML = "";
                }, 3000);
            }
        });
    }
});
