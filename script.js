// script.js

// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
    console.log("Sagar Bastola Portfolio Loaded Successfully!");
  
    // Highlight skills when mouse hovers over them
    const skills = document.querySelectorAll("#skills ul li");
    skills.forEach(skill => {
      skill.addEventListener("mouseover", () => {
        skill.style.backgroundColor = "#d1e7dd";
      });
      skill.addEventListener("mouseout", () => {
        skill.style.backgroundColor = "#e0e0e0";
      });
    });
  
    // Optional: Alert when email is clicked
    const emailLink = document.querySelector("#contact a");
    emailLink.addEventListener("click", (event) => {
      alert("Opening email app to contact Sagar Bastola.");
    });
  });