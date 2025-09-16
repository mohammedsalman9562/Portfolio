document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".header-menu-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");   // animate lines
    menu.classList.toggle("active");      // slide menu
  });
});
  

  // ================= H2 Texts =================
    const h2Texts = [
      "Welcome To|My Personal Portfolio", // Step 1: type & erase
      "I'm Mohammed|Salman....."          // Step 2: type & stop
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
          element.innerHTML = formatText(currentText.substring(0, h2Index)) + '<span class="cursor"></span>';
          if (h2Index === currentText.length) {
            h2Deleting = true;
            setTimeout(typeH2, h2Delay);
            return;
          }
        } else {
          h2Index--;
          element.innerHTML = formatText(currentText.substring(0, h2Index)) + '<span class="cursor"></span>';
          if (h2Index === 0) {
            h2Deleting = false;
            h2Count++; // move to second line
          }
        }
      } else if (h2Count === 1) {
        // Step 2: type and STOP
        if (h2Index < currentText.length) {
          h2Index++;
          element.innerHTML = formatText(currentText.substring(0, h2Index)) + '<span class="cursor"></span>';
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
      "Engineering robust and scalable systems Passionate Backend Developer | Powering secure and efficient digital solutions."
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
        element.innerHTML = currentText.substring(0, pIndex) + '<span class="cursor"></span>';
        if (pIndex === currentText.length) {
          pDeleting = true;
          setTimeout(typeP, pDelay);
          return;
        }
      } else {
        pIndex--;
        element.innerHTML = currentText.substring(0, pIndex) + '<span class="cursor"></span>';
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