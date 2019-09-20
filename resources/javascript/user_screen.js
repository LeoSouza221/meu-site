const skills_count = document.getElementsByClassName('knowledge-bookcase');
const show_skills = document.querySelector('.skills-amount');
show_skills.innerHTML = skills_count[0].children.length - 3;

const menu_opening = document.querySelector('.menu');

function openMenu() {
  console.log('aki')
  menu_opening.style.animation = "menu_slide 2s forwards";
}

function closeMenu() {
  console.log('aki')
  menu_opening.style.animation = "menu_slide 2s inverse forwards";
}