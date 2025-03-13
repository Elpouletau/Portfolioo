document.addEventListener("DOMContentLoaded", () => {
    // Effet de défilement progressif
    const sections = document.querySelectorAll("section");
    
    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    };
    
    window.addEventListener("scroll", revealSection);
    revealSection();
});
document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll(".section-title");
    
    sections.forEach(title => {
        title.addEventListener("click", function() {
            let content = this.nextElementSibling;
            content.classList.toggle("hidden");
        });
    });
});
