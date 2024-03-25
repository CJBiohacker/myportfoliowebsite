const getElementFromId = (id) => document.getElementById(id);
const getElementFromClass = (className) => document.querySelector(className);
const getAllElementsFromClass = (className) => document.querySelectorAll(className);
const createElement = (htmlTag) => document.createElement(htmlTag);
const scrollToElement = (id) => {
  const element = getElementFromId(id);
  const rect = element.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const offsetX =
    rect.left + scrollLeft - window.innerWidth / 2 + rect.width / 2;
  const offsetY =
    rect.top + scrollTop - window.innerHeight / 2 + rect.height / 2;

  window.scrollTo({
    top: offsetY,
    left: offsetX,
  });
};
const hideNavMenu = () => {
  window.innerWidth;
  if (window.innerWidth < 429) {
    const container = document.getElementById("nav-menu");
    container.style.display = "none";
  }
};

let isClicked = false;
const aboutCardInfo = [
  {
    title: `FrontEnd Development`,
    text: `Proficient in Front-End Development, with expertise in HTML, CSS, JavaScript, ReactJS, and VueJS. Skilled in crafting reusable components and designing responsive user interfaces and pages optimized for all devices.`,
    image: `assets/FrontEnd Development.svg`,
  },
  {
    title: `BackEnd Development`,
    text: `Experienced in Back-End development using Node.js to build robust REST APIs and establish software architecture with both SQL and NoSQL databases. Skilled in Software Testing with Jest to ensure high product quality and reliability.`,
    image: `assets/BackEnd Development.svg`,
  },
  {
    title: `Cloud Development`,
    text: `Certified with foundational knowledge of Google Cloud Platform, proficient in creating Cloud Solutions utilizing Container Orchestration, Virtual Machines, Cloud Storage, and IAM. Experienced in using Git and version control systems like GitHub, GitLab, and BitBucket for collaborative coding.`,
    image: `assets/Cloud Development.svg`,
  },
];

const contactYear = getElementFromId("contact-year");
const centerLink = getElementFromId("center-link");
const cardContainer = getElementFromId("about-cards-container");
const contactBtn = getElementFromId("contact-button");
const centerLinks = getAllElementsFromClass(".center-link");
const navMenu = getElementFromId("nav-menu");
const navActiveBtn = getElementFromId("nav-active-btn");
const navLinks = getAllElementsFromClass(".center-link");

const currentYear = new Date().getFullYear();

for (let i = 0; i < 3; i++) {
  let aboutCardDiv = createElement("div");
  let aboutCardTextDiv = createElement("div");
  let aboutCardTitle = createElement("h1");
  let aboutCardText = createElement("p");
  let aboutCardImage = createElement("img");
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
centerLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    scrollToElement(targetId);
    e.preventDefault();
  });
});

navActiveBtn.onclick = () => {
  if (!isClicked) {
    navActiveBtn.style.borderColor = "white";
    navMenu.style.display = "flex";
  } else {
    navActiveBtn.style.borderColor = "transparent";
    navMenu.style.display = "none";
  }

  isClicked = !isClicked;
};

navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});
