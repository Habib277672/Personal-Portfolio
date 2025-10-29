document.addEventListener("DOMContentLoaded", () => {
  // Circle progress bars
  document.querySelectorAll(".circle").forEach((circle) => {
    const percent = circle.dataset.percent;
    const canvas = circle.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const radius = canvas.width / 2 - 10;
    const lineWidth = 8;

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "#333";
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.strokeStyle = "#00ff7f";
    ctx.beginPath();
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      radius,
      -0.5 * Math.PI,
      (percent / 100) * 2 * Math.PI - 0.5 * Math.PI
    );
    ctx.stroke();
  });

  // Contact form
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! (In a real project, connect to backend)");
    form.reset();
  });

  // Dynamic Projects
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Created with: HTML, CSS, and JavaScript <br> A modern and fully responsive e-commerce website built to deliver a smooth shopping experience. It includes product listing, a shopping cart, and a checkout. Designed with clean UI/UX, mobile-friendly layouts, and scalable code, this project highlights my ability to create professional online stores tailored for businesses.",
      image: "./assets/E-Commerce Web/Web-logo.png",
      link: "./assets/E-Commerce Web/index.html",
    },
    {
      title: "Product-Landing-Page",
      description:
        "Created with: HTML, CSS, and JavaScript <br> A sleek and responsive product landing page designed to highlight features, benefits, and call-to-action elements effectively. The layout is clean, user-friendly, and optimized for conversions, ensuring a great user experience on all devices. This project demonstrates my ability to design engaging marketing pages that capture attention and drive results.",
      image: "./assets/Product-Landing-Page/Web-logo.png",
      link: "./assets/Product-Landing-Page/index.html",
    },
    {
      title: "Weather-Web-App",
      description:
        "Created with: HTML, CSS, JavaScript, and Weather API <br> A responsive and interactive weather application that provides real-time weather updates using a third-party API. Users can search for any city to instantly view temperature, conditions, and other weather details. The app is designed with a clean UI, smooth transitions, and mobile-friendly layouts to ensure a great user experience.",
      image: "./assets/Weather-Web-App/Web-logo.png",
      link: "./assets/Weather-Web-App/index.html",
    },
  ];

  const projectContainer = document.querySelector("#projects .row");

  projects.forEach((project, index) => {
    const delay =
      index === 1
        ? " animate__delay-1s"
        : index === 2
        ? " animate__delay-2s"
        : "";
    const col = document.createElement("div");
    col.className = `col-md-4 mb-4 animate__animated animate__fadeInUp${delay}`;
    col.innerHTML = `
      <div class="project-card">
        <img src="${project.image}" alt="${project.title}" class="img-fluid rounded mb-3">
        <h5>${project.title}</h5>
        <p>${project.description}</p>
        <a href="${project.link}" class="btn btn-outline-green btn-sm">View Project</a>
      </div>
    `;
    projectContainer.appendChild(col);
  });
});
