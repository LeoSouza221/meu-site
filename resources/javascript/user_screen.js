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

function getRepositories() {
  fetch('https://api.github.com/users/LeoSouza221/repos', { method: 'get' })
    .then((response) => {
      response.json()
        .then((result) => { 
          console.log(result); 
        }) 
    })
    .catch(error => console.log(error));
}

// function defineImage(event) {
//   console.log(event)
// }

// function alterElementAttributes(element, item) {
//   element.getElementsByTagName('a').href = item.link;
//   element.getElementsByTagName('img').src = item.src;
//   return;
// }

// function createElementAttributes(element, item) {
//   const a = document.createElement('a');
//   const img = document.createElement('img');
//   let create_link = element.appendChild(a);
//   create_link.href = item.link;
//   let create_img = element.appendChild(img)
//   create_img.src = item.src;
//   create_img.width = 30;
//   create_img.height = 30;
//   return;
// }

// function randomImage() {
//   setInterval(() => {
//     images_array.forEach((item) => {
//       const element = alter_image.getElementsByClassName('contact-box-back')[0];
//       const element_child = element.children;
//       if (element_child.length > 0) {
//         alterElementAttributes(element, item);
//         return;
//       }
//       createElementAttributes(element, item);
//       console.log('aki')
//     });
//   }, 500)
// }

window.onload = getRepositories();

// alter_image.addEventListener("click", function(event) {
//   defineImage(event);
// });
