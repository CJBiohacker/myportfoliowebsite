const getElementFromId = (id) => document.getElementById(id);
const getElementFromClass = (className) => document.querySelector(className);
const getAllElementsFromClass = (className) =>
  document.querySelectorAll(className);
const createElement = (htmlTag) => document.createElement(htmlTag);
const openNewWindow = (path) =>
  window.open(path, "_blank", "width=420,height=420");
const hideNavMenu = () => {
  if (window.innerWidth < 429) {
    const container = document.getElementById("nav-menu");
    container.style.display = "none";
  }
};
const handleClickOutside = (event) => {
  if (!navActiveBtn.contains(event.target) && !navMenu.contains(event.target)) {
    hideNavMenu();
  }
};

let isMenuActive = false;
const aboutCardInfo = [
  {
    title: `FrontEnd Development`,
    text: `Proficient in Front-End Development, with expertise in HTML, CSS, JavaScript, ReactJS, and VueJS. Skilled in crafting reusable components and designing responsive user interfaces and pages optimized for all devices.`,
    image: `./images/FrontEnd Development.svg`,
  },
  {
    title: `BackEnd Development`,
    text: `Experienced in Back-End development using Node.js to build robust REST APIs and establish software architecture with both SQL and NoSQL databases. Skilled in Software Testing with Jest to ensure high product quality and reliability.`,
    image: `./images/BackEnd Development.svg`,
  },
  {
    title: `Cloud Development`,
    text: `Certified with foundational knowledge of Google Cloud Platform, proficient in creating Cloud Solutions utilizing Container Orchestration, Virtual Machines, Cloud Storage, and IAM. Experienced in using Git and version control systems like GitHub, GitLab, and BitBucket for collaborative coding.`,
    image: `./images/Cloud Development.svg`,
  },
];

const experienceSkillsInfo = [
  {
    name: "html",
    image: "./images/html5-logo.svg",
  },
  {
    name: "css",
    image: "./images/css3-logo.svg",
  },
  {
    name: "js",
    image: "./images/javascript-logo.svg",
  },
  {
    name: "ts",
    image: "./images/typescript-logo.svg",
  },
  {
    name: "vue",
    image: "./images/vue-logo.svg",
  },
  {
    name: "pinia",
    image: "./images/pinia-logo.svg",
  },
  {
    name: "react",
    image: "./images/react-logo.svg",
  },
  {
    name: "node",
    image: "./images/nodejs-logo.svg",
  },
  {
    name: "express",
    image: "./images/express-logo.svg",
  },
  {
    name: "koa",
    image: "./images/koa-logo.svg",
  },
  {
    name: "postgre",
    image: "./images/postgresql-logo.svg",
  },
  {
    name: "mongo",
    image: "./images/mongodb-logo.svg",
  },
  {
    name: "firebase",
    image: "./images/firebase-logo.svg",
  },
  {
    name: "gcp",
    image: "./images/googlecloud-logo.svg",
  },
  {
    name: "aws",
    image: "./images/aws-logo.svg",
  },
  {
    name: "git",
    image: "./images/git-logo.svg",
  },
  {
    name: "docker",
    image: "./images/docker-logo.svg",
  },
  {
    name: "k8s",
    image: "./images/kubernetes-logo.svg",
  },
  {
    name: "terraform",
    image: "./images/terraform-logo.svg",
  },
  {
    name: "linux",
    image: "./images/linux-logo.svg",
  },
  {
    name: "windows",
    image: "./images/windows-logo.svg",
  },
];

const experienceJobsInfo = [
  {
    position: "Junior Full Stack Developer",
    company: "Zoox Smart Data",
    date: "Jun 2022 - Jan 2024",
    image: "./images/zoox-smart-data-logo.svg",
    description: {
      topic_1: `Worked in Zoox Eye project, a CDP based in ETL and Big Data.`,
      topic_2: `Responsive Front End Web Development with VueJS.`,
      topic_3: `Back End Web Development of RESTful APIs with NodeJS.`,
    },
  },
  {
    position: "Tech Support",
    company: "Self-Employed",
    date: "Jun 2018 - Aug 2022",
    image: "./images/self-employed-icon.svg",
    description: {
      topic_1: `Installation and maintenance of network infrastructure.`,
      topic_2: `Budget consultation, assembly and maintenance of PC.`,
      topic_3: `Technical software support for computers and notebooks`,
    },
  },
];

const projectsInfo = [
  {
    title: "Project 1",
    image: "./images/googlecloud-logo.svg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, justo nec volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallisLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallisLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis`,
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com",
    hosted: "https://github.com",
  },
  {
    title: "Project 2",
    image: "./images/googlecloud-logo.svg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, justo nec volutpat.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com",
    hosted: "https://github.com",
  },
  {
    title: "Project 3",
    image: "./images/googlecloud-logo.svg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, justo nec volutpat.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com",
    hosted: "https://github.com",
  },
  {
    title: "Project 4",
    image: "./images/googlecloud-logo.svg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, justo nec volutpat.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com",
    hosted: "https://github.com",
  },
  {
    title: "Project 5",
    image: "./images/googlecloud-logo.svg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, justo nec volutpat.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com",
    hosted: "https://github.com",
  },
  {
    title: "Project 6",
    image: "./images/googlecloud-logo.svg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, justo nec volutpat.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com",
    hosted: "https://github.com",
  },
  {
    title: "Project 7",
    image: "./images/googlecloud-logo.svg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, justo nec volutpat.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com",
    hosted: "https://github.com",
  },
];

const contactYear = getElementFromId("contact-year");
const cardContainer = getElementFromId("about-cards-container");
const contactBtn = getElementFromId("contact-button");
const navMenu = getElementFromId("nav-menu");
const navActiveBtn = getElementFromId("nav-active-btn");
const navLinks = getAllElementsFromClass(".nav-link");
const contactEmail = getElementFromId("contact-email");
const experienceSkillsContainer = getElementFromClass(
  ".experience-skills-container"
);
const experienceJobsContainer = getElementFromClass(
  ".experience-jobs-container"
);
const projectsContainer = getElementFromClass(".projects-container");

const currentYear = new Date().getFullYear();

for (let i = 0; i < 3; i++) {
  const aboutCardDiv = createElement("div");
  const aboutCardTextDiv = createElement("div");
  const aboutCardTitle = createElement("h1");
  const aboutCardText = createElement("p");
  const aboutCardImage = createElement("img");
  aboutCardDiv.classList.add("about-card", `card-${i}`);
  cardContainer.appendChild(aboutCardDiv);
  aboutCardDiv.appendChild(aboutCardImage);
  aboutCardDiv.appendChild(aboutCardTextDiv);
  aboutCardTextDiv.appendChild(aboutCardTitle);
  aboutCardTextDiv.appendChild(aboutCardText);
  aboutCardTextDiv.classList.add("text-card-container");
  aboutCardImage.classList.add("about-card-image");
  aboutCardTitle.classList.add("about-card-title");
  aboutCardText.classList.add("about-card-text");
}

const aboutCardClass = getAllElementsFromClass(".about-card");

for (let i = 0; i < 3; i++) {
  aboutCardClass[i].childNodes[0].src = aboutCardInfo[i].image;
  aboutCardClass[i].childNodes[1].childNodes[0].innerText =
    aboutCardInfo[i].title;
  aboutCardClass[i].childNodes[1].childNodes[1].innerText =
    aboutCardInfo[i].text;
}

contactYear.innerText = `@${currentYear} All Rights Reserved`;

for (let _ of experienceSkillsInfo) {
  const skillCardDiv = createElement("div");
  const skillImageDiv = createElement("div");
  const skillImage = createElement("img");
  const skillName = createElement("p");

  skillCardDiv.classList.add("skill-card");
  skillImage.classList.add("skill-image");
  skillName.classList.add("skill-name");

  experienceSkillsContainer.appendChild(skillCardDiv);
  skillCardDiv.appendChild(skillImageDiv);
  skillCardDiv.appendChild(skillName);
  skillImageDiv.appendChild(skillImage);
}

for (const job of experienceJobsInfo) {
  const jobCardDiv = createElement("div");
  const imgContainerDiv = createElement("div");
  const jobImage = createElement("img");
  const textContainerDiv = createElement("div");
  const jobTitle = createElement("h3");
  const jobDescription = createElement("p");
  const jobTopicsList = createElement("ul");

  jobCardDiv.classList.add("job-card");
  imgContainerDiv.classList.add("img-container");
  textContainerDiv.classList.add("text-container");

  experienceJobsContainer.appendChild(jobCardDiv);
  jobCardDiv.appendChild(imgContainerDiv);
  jobCardDiv.appendChild(textContainerDiv);
  imgContainerDiv.appendChild(jobImage);
  textContainerDiv.appendChild(jobTitle);
  textContainerDiv.appendChild(jobDescription);
  textContainerDiv.appendChild(jobTopicsList);

  jobImage.src = job.image;
  jobTitle.innerText = job.position;
  jobDescription.innerText = `${job.company} - ${job.date}`;

  for (const topic in job.description) {
    const listItem = createElement("li");
    listItem.innerText = job.description[topic];
    jobTopicsList.appendChild(listItem);
  }
}

const skillImagesList = getAllElementsFromClass(".skill-image");
const skillNamesList = getAllElementsFromClass(".skill-name");

for (let i = 0; i < experienceSkillsInfo.length; i++) {
  skillImagesList[i].src = experienceSkillsInfo[i].image;
  skillNamesList[i].innerText = experienceSkillsInfo[i].name;
}

for (const project of projectsInfo) {
  const projectCard = document.createElement('div');
  const projectImg = document.createElement('img');
  const projectTextDiv = document.createElement('div');
  const projectName = document.createElement('h1');
  const projectDescription = document.createElement('p');
  const projectTechnologiesDiv = document.createElement('div');
  const projectTech1 = document.createElement('p');
  const projectTech2 = document.createElement('p');
  const projectTech3 = document.createElement('p');
  const projectButtonDiv = document.createElement('div');
  const projectRepositoryBtn = document.createElement('button');
  const projectHostedBtn = document.createElement('button');
  const projectRepoBtnSpan = document.createElement('span');
  const projectHostedBtnSpan = document.createElement('span');

  projectCard.className = 'project-card';
  projectImg.className = 'project-img';
  projectTextDiv.className = 'project-text-container';
  projectTechnologiesDiv.className = 'project-tech-container';
  projectButtonDiv.className = 'project-btn-container';
  projectRepositoryBtn.className = 'pushable';
  projectHostedBtn.className = 'pushable';
  projectRepoBtnSpan.className = 'front';
  projectHostedBtnSpan.className = 'front';

  projectImg.src = project.image;
  projectImg.alt = project.title;
  projectName.innerText = project.title;
  projectDescription.innerText = project.description;
  projectTech1.innerText = project.technologies[0];  
  projectTech2.innerText = project.technologies[1];  
  projectTech3.innerText = project.technologies[2];
  projectRepoBtnSpan.innerText = 'Source Code';
  projectHostedBtnSpan.innerText = 'Hosted Page';

  projectTextDiv.appendChild(projectName);
  projectTextDiv.appendChild(projectDescription);
  projectButtonDiv.appendChild(projectRepositoryBtn);
  projectButtonDiv.appendChild(projectHostedBtn);
  projectTechnologiesDiv.appendChild(projectTech1);
  projectTechnologiesDiv.appendChild(projectTech2);
  projectTechnologiesDiv.appendChild(projectTech3);
  projectButtonDiv.appendChild(projectRepositoryBtn);
  projectButtonDiv.appendChild(projectHostedBtn);
  projectRepositoryBtn.appendChild(projectRepoBtnSpan);
  projectHostedBtn.appendChild(projectHostedBtnSpan);
  projectCard.appendChild(projectImg);
  projectCard.appendChild(projectTextDiv);
  projectCard.appendChild(projectTechnologiesDiv);
  projectCard.appendChild(projectButtonDiv);

  projectsContainer.appendChild(projectCard);

}

contactBtn.onclick = () => {
  const newWindow = window.open(
    "https://calendar.app.google/bFMpRnjudAx6C2ct5",
    "_blank",
    "width=900,height=800"
  );
  if (newWindow) {
    newWindow.focus();
  }
};

navActiveBtn.onclick = () => {
  if (!isMenuActive) {
    navActiveBtn.style.borderColor = "white";
  } else {
    navActiveBtn.style.borderColor = "transparent";
  }
  navMenu.classList.toggle("active");
  isMenuActive = !isMenuActive;
};

navActiveBtn.onblur = () => {
  isMenuActive = false;
};

navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

contactEmail.addEventListener("click", (event) => {
  openNewWindow("mailto:cj.moyses@gmail.com");
  event.preventDefault();
});

document.addEventListener("click", handleClickOutside);
