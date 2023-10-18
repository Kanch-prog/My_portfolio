document.addEventListener("DOMContentLoaded", function() {
    const projectsTab = document.getElementById("projects-tab");
    const skillsTab = document.getElementById("skills-tab");
    const projectsSection = document.getElementById("projects");
    const skillsSection = document.getElementById("skills");
    const sliderBar = document.querySelector(".slider-bar");

    projectsTab.addEventListener("click", function() {
        sliderBar.style.transform = "translateX(0)";
        projectsTab.classList.add("active");
        skillsTab.classList.remove("active");
        projectsSection.style.display = "flex"; // Ensure the flex layout
        skillsSection.style.display = "none";
    });

    skillsTab.addEventListener("click", function() {
        sliderBar.style.transform = "translateX(100%)";
        skillsTab.classList.add("active");
        projectsTab.classList.remove("active");
        skillsSection.style.display = "block";
        projectsSection.style.display = "none";
    });
});
