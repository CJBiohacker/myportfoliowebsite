const getElfromId = (element) => {
    return document.getElementById(element);
};

const contactYear = getElfromId('contact-year');
const currentYear = new Date().getFullYear();
contactYear.innerText = `@${currentYear} All Rights Reserved`;

const inner = window.innerHeight;
console.log("🚀 ~ inner:", inner)
const outer = window.outerHeight;
console.log("🚀 ~ outer:", outer)

