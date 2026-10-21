
// 1. Dark mode
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  let dark = document.body.classList.contains("dark-mode");

  localStorage.setItem("darkMode", dark);

  let button = document.getElementById("themeButton");

  if (button) {
    button.textContent = dark ? "Light Mode" : "Dark Mode";
  }
}

// Restore saved theme
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");

  let button = document.getElementById("themeButton");

  if (button) {
    button.textContent = "Light Mode";
  }
}


// 2. Menu filtering
function filterMenu(category) {
  let products = document.querySelectorAll(".menu-item");

  products.forEach(function(product) {
    let productCategory = product.getAttribute("data-category");

    if (category === "all" || productCategory === category) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
}


// 3. Contact form validation
let form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let result = document.getElementById("formResult");

    if (name === "" || email === "" || message === "") {
      result.innerHTML =
        '<div class="alert alert-danger">Please fill in all fields.</div>';
      return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      result.innerHTML =
        '<div class="alert alert-danger">Please enter a valid email.</div>';
      return;
    }

    result.innerHTML =
      '<div class="alert alert-success">Your message has been validated! This is a demo form.</div>';

    form.reset();
  });
}
