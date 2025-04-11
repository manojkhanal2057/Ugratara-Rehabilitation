// Header Scroll 
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse"); // FIXED SELECTOR

console.log(navCollapse); // Debugging check

if (navCollapse) { // Ensure navCollapse is found before using it
    navBar.forEach(function (a) {
        a.addEventListener("click", function () {
            navCollapse.classList.remove("show");
        });
    });
} else {
    console.error("Navbar collapse element not found!");
}


document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const title = this.getAttribute("data-title");
            const content = this.getAttribute("data-content");
            modalTitle.innerText = title;
            modalContent.innerText = content;
            new bootstrap.Modal(document.getElementById("readMoreModal")).show();
        });
    });
});


