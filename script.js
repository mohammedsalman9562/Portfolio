document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".header-menu-links");

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open"); // animate lines
    menu.classList.toggle("active"); // slide menu
  });

  // Active menu link on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".header-menu-links ul li a");

  function activateMenu() {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // header offset
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateMenu);
});


// ================= H2 Texts =================
const h2Texts = [
  "Welcome To|My Personal Portfolio", // Step 1: type & erase
  "I'm Mohammed|Salman.....", // Step 2: type & stop
];

let h2Count = 0;
let h2Index = 0;
let h2Deleting = false;

const h2Speed = 100;
const h2Erase = 50;
const h2Delay = 1500;

function typeH2() {
  const element = document.getElementById("typewriters");
  const currentText = h2Texts[h2Count];

  if (h2Count === 0) {
    // Step 1: type & erase
    if (!h2Deleting) {
      h2Index++;
      element.innerHTML =
        formatText(currentText.substring(0, h2Index)) +
        '<span class="cursor"></span>';
      if (h2Index === currentText.length) {
        h2Deleting = true;
        setTimeout(typeH2, h2Delay);
        return;
      }
    } else {
      h2Index--;
      element.innerHTML =
        formatText(currentText.substring(0, h2Index)) +
        '<span class="cursor"></span>';
      if (h2Index === 0) {
        h2Deleting = false;
        h2Count++; // move to second line
      }
    }
  } else if (h2Count === 1) {
    // Step 2: type and STOP
    if (h2Index < currentText.length) {
      h2Index++;
      element.innerHTML =
        formatText(currentText.substring(0, h2Index)) +
        '<span class="cursor"></span>';
      setTimeout(typeH2, h2Speed);
      return;
    } else {
      return; // Stop here
    }
  }

  const timeout = h2Deleting ? h2Erase : h2Speed;
  setTimeout(typeH2, timeout);
}

function formatText(str) {
  return str.replace(/\|/g, "<br>");
}

// ================= Paragraph Texts =================
const pTexts = [
  "Building Digital Experiences That Inspire Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions",
  "Designing with purpose and creativity Passionate UI/UX Developer | Crafting intuitive and impactful user experiences.",
  "Harnessing the power of AI and machine learning AI Developer | Creating intelligent solutions that innovate and optimize.",
  "Engineering robust and scalable systems Passionate Backend Developer | Powering secure and efficient digital solutions.",
];

let pCount = 0;
let pIndex = 0;
let pDeleting = false;

const pSpeed = 100;
const pErase = 50;
const pDelay = 1500;

function typeP() {
  const element = document.getElementById("paragraphs");
  const currentText = pTexts[pCount];

  if (!pDeleting) {
    pIndex++;
    element.innerHTML =
      currentText.substring(0, pIndex) + '<span class="cursor"></span>';
    if (pIndex === currentText.length) {
      pDeleting = true;
      setTimeout(typeP, pDelay);
      return;
    }
  } else {
    pIndex--;
    element.innerHTML =
      currentText.substring(0, pIndex) + '<span class="cursor"></span>';
    if (pIndex === 0) {
      pDeleting = false;
      pCount = (pCount + 1) % pTexts.length;
    }
  }

  const timeout = pDeleting ? pErase : pSpeed;
  setTimeout(typeP, timeout);
}

// ================= Start Both at Step 1 =================
document.addEventListener("DOMContentLoaded", () => {
  typeH2();
  typeP();
});

const BUTTON = [
  {
    title: "Frontend",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919828.png",
    skills: [
      { skill: "HTML5", Percentage: "90%" },
      { skill: "CSS3", Percentage: "85%" },
      { skill: "JavaScript", Percentage: "80%" },
      { skill: "React.js", Percentage: "75%" },
      { skill: "Tailwind CSS", Percentage: "85%" },
      { skill: "Bootstrap", Percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    skills: [
      { skill: "Node.js", Percentage: "80%" },
      { skill: "Express.js", Percentage: "75%" },
      { skill: "Nest.js", Percentage: "70%" },
      { skill: "MongoDB", Percentage: "70%" },
      { skill: "MySQL", Percentage: "65%" },
      { skill: "NPM", Percentage: "80%" },
    ],
  },
  {
    title: "UI/UX",
    icon: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
    skills: [
      { skill: "Figma", Percentage: "85%" },
      { skill: "Wireframing", Percentage: "75%" },
      { skill: "Prototyping", Percentage: "70%" },
      { skill: "Miro / FigJam", Percentage: "65%" },
      { skill: "Adobe XD", Percentage: "65%" },
      { skill: "Sketch", Percentage: "55%" },
    ],
  },
  {
    title: "Tools & Programming",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
    skills: [
       { skill: "C", Percentage: "65%" },
       { skill: "C++", Percentage: "75%" },
      { skill: "Git", Percentage: "85%" },
      { skill: "GitHub", Percentage: "85%" },
      { skill: "GitLab", Percentage: "80%" },
      { skill: "Jasmine Framework", Percentage: "85%" },
    ],
  },
];

let selectedSkill = BUTTON[0];

function renderButtonSkill(item) {
  const div = document.createElement("div");
  div.className = `skills-card ${
    selectedSkill.title === item.title ? "active" : ""
  }`;
  div.innerHTML = `
        <div class="skill-icon"><img src="${item.icon}" alt="${item.title} icon" /></div>
        <span>${item.title}</span>
      `;
  div.addEventListener("click", () => {
    selectedSkill = item;
    render();
  });
  return div;
}

function renderSkillsInfoCard(data) {
  const div = document.createElement("div");
  div.className = "skills-info-card";
  div.innerHTML = `<h6>${data.title}</h6><div class="skills-info-content"></div>`;
  const content = div.querySelector(".skills-info-content");

  data.skills.forEach((item) => {
    const fragment = document.createElement("div");
    fragment.innerHTML = `
          <div class="skill-info">
            <p>${item.skill}</p>
            <p class="percentage">${item.Percentage}</p>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress"></div>
          </div>
        `;
    content.appendChild(fragment);

    // Animate progress bar after append
    setTimeout(() => {
      fragment.querySelector(".skill-progress").style.width = item.Percentage;
    }, 100);
  });
  return div;
}

function render() {
  const skillsContainer = document.getElementById("skills");
  const infoContainer = document.getElementById("skills-info");

  skillsContainer.innerHTML = "";
  BUTTON.forEach((item) => {
    skillsContainer.appendChild(renderButtonSkill(item));
  });

  infoContainer.innerHTML = "";
  infoContainer.appendChild(renderSkillsInfoCard(selectedSkill));
}

render();
