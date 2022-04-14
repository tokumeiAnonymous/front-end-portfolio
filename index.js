import reposData from './repos.js'

document.addEventListener('DOMContentLoaded', () => {
  const repos = document.querySelector('.repos');
  reposData.forEach(data => {
    repos.appendChild(CreateCard(data));
  });
})

function CreateCard(data) {
  const project = document.createElement('article');
  project.classList.add('project');

  const title = document.createElement('h2');
  title.innerText = data.title;
  project.appendChild(title);

  const image = document.createElement('img');
  image.src = data.image;
  image.alt = data.title;
  project.appendChild(image);

  const techUsed = document.createElement('div');
  techUsed.classList.add('tech');
  techUsed.innerText = 'Tech used: '
  project.appendChild(techUsed);

  const list = document.createElement('ul');
  data.technologies.forEach(tech => {
    list.appendChild(CreateLi(tech));
  })
  project.appendChild(list);

  const description = document.createElement('p');
  description.classList.add('description');
  description.innerText = data.description;
  project.appendChild(description);

  const link = document.createElement('a');
  link.classList.add('repo-link');
  link.href = data.path;
  link.appendChild(project);

  return link;
}

function CreateLi(input) {
  const li = document.createElement('li');
  li.innerText = input;
  return li;
}