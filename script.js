function loadSection(section, elementId) {
    fetch(`sections/${section}.html`)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data);
}

// Jab page load ho to sections load ho jayein
document.addEventListener("DOMContentLoaded", function () {
    loadSection("header", "header-container");
    loadSection("home", "home-container");
    loadSection("luxuriousRoom", "luxuriousRoom-container");
    loadSection("services", "service-container");
    loadSection("popularRoom", "PopularRoom-container");
    loadSection("testimonial", "testimonial-container");
    loadSection("cta", "CTA-container");
    loadSection("footer", "footer-container");
    loadSection("login", "login-container");
});
