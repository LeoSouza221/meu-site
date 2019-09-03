const skills_count = document.getElementsByClassName('knowledge-bookcase');
const show_skills = document.querySelector('.skills-amount');
show_skills.innerHTML = skills_count[0].children.length;