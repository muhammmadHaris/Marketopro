// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenuBtn.querySelector("i").classList.toggle("fa-bars");
  mobileMenuBtn.querySelector("i").classList.toggle("fa-times");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileMenuBtn.querySelector("i").classList.add("fa-bars");
    mobileMenuBtn.querySelector("i").classList.remove("fa-times");
  });
});

// Form submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all fields");
    return;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // In a real application, you would send this data to a server
  // For this example, we'll just show a success message
  alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
  contactForm.reset();
});

// Scroll animations
function initAnimations() {
  const animatedElements = document.querySelectorAll("[data-aos]");

  function checkScroll() {
    const windowHeight = window.innerHeight;
    const windowTop = window.scrollY;
    const windowBottom = windowTop + windowHeight;

    animatedElements.forEach((element) => {
      const elementHeight = element.offsetHeight;
      const elementTop = element.offsetTop;
      const elementBottom = elementTop + elementHeight;

      // Check if element is in viewport
      if (elementBottom >= windowTop && elementTop <= windowBottom) {
        element.classList.add("aos-animate");
      }
    });
  }

  // Check on load and scroll
  window.addEventListener("load", checkScroll);
  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Initial check
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
});
