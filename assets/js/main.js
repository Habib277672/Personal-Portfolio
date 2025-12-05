/* Home Split Text */
const { animate, text, stagger } = anime;

const { chars: chars1 } = text.split(".home__profession-1", {
  chars: true,
});
const { chars: chars2 } = text.split(".home__profession-2", {
  chars: true,
});

animate(chars1, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});

/* Swiper Projects */
const swiperProjects = new Swiper(".projects__swiper", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  speed: 600,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/* Work Tabs */
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetSelector = tab.dataset.target,
      targetContent = document.querySelector(targetSelector);

    // Disable all content and active tabs
    tabContents.forEach((content) => content.classList.remove("work-active"));
    tabs.forEach((t) => t.classList.remove("work-active"));

    // Active the tab and corresponding content
    tab.classList.add("work-active");
    targetContent.classList.add("work-active");
  });
});

/* Services */
const buttons = document.querySelectorAll(".services__button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const cards = document.querySelectorAll(".services__card");
    const card = button.closest(".services__card");
    const info = card.querySelector(".services__info");

    const isOpen = card.classList.contains("services__open");

    // Close all cards first
    cards.forEach((c) => {
      c.classList.remove("services__open");
      c.classList.add("services__close");

      const i = c.querySelector(".services__info");
      i.style.height = "0px";
    });

    // Open the clicked card
    if (!isOpen) {
      info.style.height = "auto";
      let height = info.scrollHeight + "px";

      card.classList.remove("services__close");
      card.classList.add("services__open");

      info.style.height = height;
    }
  });
});

/* Testimonials of Duplicate Cards */
// Duplicate images to make the animation work
const tracks = document.querySelectorAll(".testimonials__content");

tracks.forEach((track) => {
  const cards = [...track.children]; // spread to make a static copy

  // Duplicate cards only once
  for (const card of cards) {
    track.appendChild(card.cloneNode(true));
  }
});

/* Copy Email In Contact */
const copyBtn = document.getElementById("contact-btn"),
  copyEmail = document.getElementById("contact-email").textContent;

copyBtn.addEventListener("click", () => {
  //use the clipboard Api to copy text
  navigator.clipboard.writeText(copyEmail).then(() => {
    copyBtn.innerHTML = 'Email Copied <i class="ri-check-line"></i>';

    // Restore the original text
    setTimeout(() => {
      copyBtn.innerHTML = 'Copy email <i class="ri-file-copy-line"></i>';
    }, 2000);
  });
});

/* Current Year of Footer */
const textYear = document.getElementById("footer-year"),
  currentYear = new Date().getFullYear();

//Each year it is updated to the current year
textYear.textContent = currentYear;

/* Scroll Section Active Link */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  // We get the position by scrolling down
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const id = section.id, //id of each section
      top = section.offsetTop - 50, // Distance from the top edge
      height = section.offsetHeight, //Element height
      link = document.querySelector(".nav__menu a[href*=" + id + "]"); //id nav link

    if (!link) return;
    link.classList.toggle(
      "active-link",
      scrollY > top && scrollY <= top + height
    );
  });
};
window.addEventListener("scroll", scrollActive);

/* Custom Cursor */
const cursor = document.querySelector(".cursor");
let mouseX = 0,
  mouseY = 0; // Store mouse position

const cursorMove = () => {
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
  cursor.style.transform = "translate(-50%, -50%)";

  //update the cursor animation
  requestAnimationFrame(cursorMove);
};
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
cursorMove();

/* Hide custom cursor on links */
const a = document.querySelectorAll("a");

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hide-cursor");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hide-cursor");
  });
});

/* Scroll Reveal Animation */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
  reset: true, // Animation repeat
});

//home, project and work section animations
sr.reveal(
  `.home__image, .projects__container, .work__container, .testimonials__container, .contact__container`
);
sr.reveal(`.home__data`, { delay: 900, origin: "bottom" });
sr.reveal(`.home__info`, { delay: 1200, origin: "bottom" });
sr.reveal(`.home__social, .home__cv`, { delay: 1200 });
//About section animations
sr.reveal(`.about__data`, { origin: "left" });
sr.reveal(`.about__image`, { origin: "right" });
//services section animation
sr.reveal(`.services__card`, { intervarl: 100 });
