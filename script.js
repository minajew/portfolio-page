let mobileMenuOpen = document.getElementById('mobile-menu-open');
let mobileMenuClose = document.getElementById('mobile-menu-close');
let overlayMenu = document.getElementById('overlay-menu')

mobileMenuOpen.addEventListener('click', () => {
  overlayMenu.style.display = 'block'
});
mobileMenuClose.addEventListener('click', () => {
  overlayMenu.style.display = 'none'
});

let popupLinks = document.querySelectorAll('.popup-link');

popupLinks.forEach(link => {
  link.addEventListener('click', () => {
    overlayMenu.style.display = 'none'
  })
});


let projectsButtons = document.getElementsByClassName('project-btn');
let highlightedProjects = document.getElementById('highlighted-projects');
let frontendProjects = document.getElementById('frontend-projects');
let designProjects = document.getElementById('design-projects');



for (let i = 0; i < projectsButtons.length; i++) {

  projectsButtons[i].onclick = function () {
    let classCheck = this.classList.contains('project-select');


    if (checkClass == true) {
      this.classList.remove('project-select');
      this.classList.add('project-selected');
    } else if (checkClass == false) {
      this.classList.remove('project-selected');
      this.classList.add('project-select');
    }


  }
};


var slider = tns({
  container: '.my-slider',
  items: 1,
  "mouseDrag": true,
  "controls": false,
  "navPosition": "bottom",

});