// Add event listener to window scroll event
window.addEventListener("scroll", function() {
    // Get the navigation menu element
    const nav = document.querySelector(".nav");
    
    // Check if the user has scrolled down
    if (window.scrollY > 200) {
      // Add the "scrolled" class to the navigation menu
      nav.classList.add("scrolled");
    } else {
      // Remove the "scrolled" class from the navigation menu
      nav.classList.remove("scrolled");
    }
  });
  
  // Add event listener to navigation menu items
  const navItems = document.querySelectorAll(".nav a");
  navItems.forEach(function(item) {
    item.addEventListener("mouseover", function() {
      // Change the background color of the navigation menu
      document.querySelector(".nav").style.backgroundColor = "#555";
    });
    
    item.addEventListener("mouseout", function() {
      // Reset the background color of the navigation menu
      document.querySelector(".nav").style.backgroundColor = "#333";
    });
  });