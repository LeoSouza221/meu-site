const skills_count = document.getElementsByClassName('knowledge-bookcase');
const show_skills = document.querySelector('.skills-amount');
const alter_image = document.querySelector('.my-contacts');
const images_array = [
  {
    link: 'https://www.facebook.com/leonardo.felipe.98096',
    src: 'resources/images/facebook.png',
  },
  {
    link: 'https://www.linkedin.com/in/leonardo-de-souza-a75557156/',
    src: 'resources/images/linkedin.png',
  },
  {
    link: 'https://github.com/LeoSouza221',
    src: 'resources/images/github.png',
  },
];
show_skills.innerHTML = skills_count[0].children.length - 3;
const menu_opening = document.querySelector('.menu');

function openMenu() {
  menu_opening.style.animation = "menu_slide 2s forwards";
}

function closeMenu() {
  menu_opening.style.animation = "menu_slide 2s reverse forwards";
}

function defineImage(event) {
  console.log(event)
}

function randomImage() {
  
}

window.onload = randomImage();

alter_image.addEventListener("click", function(event) {
  defineImage(event);
});
