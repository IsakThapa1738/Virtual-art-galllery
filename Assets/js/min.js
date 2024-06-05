gsap.from("#navbar",{
    delay:0.6,
    opacity:0,
    duration:4,
    y:-60,
    

})
gsap.from('#right h1',{
    delay:1,
    opacity:0,
    duration:4,
    x:60,
    

})

gsap.from("#left h3",{
    delay:1,
    opacity:0,
    duration:4,
    x:-60,

})





// For user profile in nav

let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");

let classList = profileDropdownList.classList;

const toggle = () => classList.toggle("active");

window.addEventListener("click", function (e) {
    if (!btn.contains(e.target)) classList.remove("active");
});




// For Register and Login
function toggleRegister() {
    var container = document.getElementById('container');
    container.classList.add("active");
}

function toggleLogin() {
    var container = document.getElementById('container');
    container.classList.remove("active");
}

// For hamburger menu while making it responsive

function toggleMenu() {
    const menuLinks = document.getElementById("menu-links");
    menuLinks.classList.toggle("active");
}


function openProfilePopup(event) {
    event.preventDefault();
    var profilePopup = document.querySelector('.profile-popup');
    if (profilePopup) {
        profilePopup.style.display = 'block';
    } else {
        alert('Profile popup not found!');
    }
}

console.log("hello")






