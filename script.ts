var toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
var skillsSection = document.getElementById("skills");

toggleSkillsBtn?.addEventListener("click", () => {
  if (skillsSection) { 
    if (skillsSection.style.display === "none") {
      skillsSection.style.display = "block";
    } else {
      skillsSection.style.display = "none";
    }
  }
});
