const skills_count = document.getElementsByClassName('knowledge-bookcase');
const show_skills = document.querySelector('.skills-amount');
const alter_image = document.querySelector('.my-contacts');
const project_items = document.getElementById('projects-item');
show_skills.innerHTML = skills_count[0].children.length - 3;
const menu_opening = document.querySelector('.menu');

function openMenu() {
  menu_opening.style.animation = "menu_slide 2s forwards";
}

function closeMenu() {
  menu_opening.style.animation = "menu_slide 2s reverse forwards";
}

function createItemList(project) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const item = li.appendChild(a);
  const text = document.createTextNode(project.name);
  const item_list = project_items.appendChild(item);
  item_list.href = project.html_url;
  item_list.target = '_blank';
  item_list.appendChild(text);
}

function getRepositories() {
  fetch('https://api.github.com/users/LeoSouza221/repos', { method: 'get' })
    .then((response) => {
      response.json()
        .then((result) => { 
          const projects = result;
          projects.forEach((project) => {
            createItemList(project) 
          });
        });
    })
    .catch(error => console.log(error));
}

window.onload = getRepositories();
