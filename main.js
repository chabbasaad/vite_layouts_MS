import "./style.scss";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/500.css"; // Specify weight
import "@fontsource/poppins/600.css"; // Specify weight
import "@fontsource/poppins/700.css"; // Specify weight
import "@fontsource/poppins/800.css"; // Specify weight
import "@fontsource/poppins/900.css"; // Specify weight

const darkModeButton = document.getElementById("dark_mode");
const darkIconButton = document.getElementById("dark_icon");

window.addEventListener("DOMContentLoaded", () => {
  const storedDarkMode = localStorage.getItem("dark_mode");

  // Set the initial dark mode state based on local storage
  if (storedDarkMode === "dark") {
    document.body.classList.add("dark-mode");
    darkIconButton.innerHTML = "light_mode";
  } else {
    document.body.classList.remove("dark-mode");
    darkIconButton.innerHTML = "dark_mode";
  }
});

darkModeButton.addEventListener("click", () => {
  // Toggle dark mode
  document.body.classList.toggle("dark-mode");

  // Update local storage and icon based on the new mode
  if (document.body.classList.contains("dark-mode")) {
    setDarkMode("dark");
  } else {
    setDarkMode("light");
  }
});

// Function to change dark mode
function setDarkMode(mode) {
  localStorage.setItem("dark_mode", mode);
  darkIconButton.innerHTML = mode === "dark" ? "light_mode" : "dark_mode";
}



const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");
const toggleSidebarButton = document.getElementById("toggle-sidebar");
const sidebarIcon = document.getElementById("sidebar-icon");

toggleSidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
  content.classList.toggle("sidebar-closed");

  // Update the icon for open/close state
  if (sidebar.classList.contains("closed")) {
    sidebarIcon.innerHTML = "menu_open";
  } else {
    sidebarIcon.innerHTML = "menu";
  }
});
