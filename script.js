
// getting all necessary elements and assigning them to a variable
body = document.querySelector('body');
nav = document.querySelector('ul')
mobileNav = document.querySelector('.mobile_nav')
btn = document.querySelector('.hamburger')
btn.addEventListener('click',showLinks)

function showLinks(){
    body.style.overflow = 'hidden' // makes the page unscrollable while the mobile menu is displayed
    mobileNav.style.display = 'block' // displays the mobile nav list/menu items
}

// This is to close the mobile menu 
mobileNav.querySelector('svg').addEventListener('click', ()=> {mobileNav.style.display = 'none'
    body.style.overflow = 'auto'
})