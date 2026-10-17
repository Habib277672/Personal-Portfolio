export const siteConfig = {
  brand: "Panda Coders",
  name: "Habib Ur Rehman",
  email: "habibqureshi54321@gmail.com",
  location: "Sukkur, Sindh, Pakistan",
  resumePath: "assets/pdf/Habib-Ur-Rehman-Resume.pdf",
};

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/habibqureshi123/",
    icon: "ri-linkedin-fill",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Habib277672",
    icon: "ri-github-line",
    label: "GitHub",
  },
  {
    href: "https://www.tiktok.com/@pandaxcoder",
    icon: "ri-tiktok-line",
    label: "TikTok",
  },
  {
    href: "https://www.instagram.com/panda_coders/reels/",
    icon: "ri-instagram-line",
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/pandacoders1",
    icon: "ri-facebook-line",
    label: "Facebook",
  },
];

export type Project = {
  number: string;
  title: string;
  stack: string;
  image: string;
  url: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Real-time\nChat Application",
    stack: "React JS, Tailwind CSS, React Hot Toast and Supabase",
    image: "assets/img/project-6.png",
    url: "https://chat-app-two-sigma-95.vercel.app/",
  },
  {
    number: "02",
    title: "Ek Chup Chai",
    stack:
      "React JS,Tailwind CSS ,Framer Motion, React Parallex Tilt, and React Intersection Observer",
    image: "assets/img/project-1.png",
    url: "https://buy-me-coffee-project.vercel.app/",
  },
  {
    number: "03",
    title: "Portfolio Website",
    stack:
      "React JS, Tailwind CSS, React Router DOM, React Parallax Tilt, React Icons, AOS",
    image: "assets/img/project-8.png",
    url: "https://seerat-munir.netlify.app/",
  },
  {
    number: "04",
    title: "Portfolio Website",
    stack: "HTML, CSS, JavaScript, Anime JS, & Swiper JS",
    image: "assets/img/project-2.png",
    url: "https://seerat-portfolio-1.netlify.app/",
  },
  {
    number: "05",
    title: "Sales Team Dashboard",
    stack: "React JS, Tailwind CSS and Supabase",
    image: "assets/img/project-7.png",
    url: "https://sales-team-dashboard-lilac.vercel.app/",
  },
  {
    number: "06",
    title: "Employee\nManagement System",
    stack: "React JS, Tailwind CSS and Context API",
    image: "assets/img/project-3.png",
    url: "https://habib277672.github.io/Employee-Management-System/",
  },
  {
    number: "07",
    title: "World\nInformation Website",
    stack: "React JS, & Rest Countries API",
    image: "assets/img/project-4.png",
    url: "https://habib277672.github.io/World-Information-Website/",
  },
  {
    number: "08",
    title: "E-Commerce\nWebsite",
    stack: "HTML,CSS, & JavaScript",
    image: "assets/img/project-5.png",
    url: "https://habib277672.github.io/e-commerce-site/",
  },
];

export type WorkItem = {
  title: string;
  subtitle: string;
  year: string;
  description: string;
};

export const experienceItems: WorkItem[] = [
  {
    title: "Frontend Web Developer",
    subtitle: "Phaton",
    year: "Oct-\nJan-26",
    description:
      "Completed a Frontend Web Developer internship, where I collaborated with a team to build a fully functional e-commerce platform, developing responsive and dynamic interfaces using React.js and Tailwind CSS.",
  },
  {
    title: "Frontend Web Developer",
    subtitle: "Skillify Zone",
    year: "Aug-July\n2025",
    description:
      "Completed a 4-project Frontend Web Developer internship, creating a personal portfolio, landing page, weather app, and a music website clone using HTML, CSS, and JavaScript.",
  },
];

export const educationItems: WorkItem[] = [
  {
    title: "ADS (B.Sc)",
    subtitle: "Shah Abdul Latif University Khairpur",
    year: "2025-Present",
    description:
      "ADS (Pre-Engineering) student gaining essential skills in programming, problem-solving, and Web Development.",
  },
  {
    title: "Intermediate\n(Pre-Eng)",
    subtitle: "Govt Islamia Science College Sukkur",
    year: "2023-2024",
    description:
      "Completed my Intermediate (12th) in Pre-Engineering, gaining a strong foundation in mathematics, physics, and problem-solving skills.",
  },
  {
    title: "Matric\n(Science)",
    subtitle: "Govt Modern High School Sukkur",
    year: "2021-2022",
    description:
      "Completed my Matriculation (10th) in Science, building a strong foundation in science, mathematics, and analytical thinking.",
  },
];

export type ServiceCard = {
  title: string;
  description: string;
  subtitle: string;
  skills: string[];
  blobClass?: string;
};

export const services: ServiceCard[] = [
  {
    title: "Development Skills",
    description:
      "Website Creation with React JS, Tailwind CSS & Node JS. Professional websites with React, Tailwind and lots of creativity.",
    subtitle: "Skills",
    skills: [
      "Html",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "React JS",
      "Framer Motion",
      "Node JS",
      "Express JS",
      "SupaBase",
      "Mongo DB",
      "My SQL",
      "Postman",
      "Rest API's",
      "Git & GitHub",
    ],
  },
  {
    title: "Development Tools",
    description:
      "I leverage powerful tools to streamline my workflow, improve productivity, and deliver high-quality projects.",
    subtitle: "Tools",
    blobClass: "blob-2",
    skills: [
      "VS Code",
      "Postman",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "SupaBase",
      "MS Copilot",
      "Claude",
      "Git",
      "GitHub",
      "ChatGPT",
    ],
  },
];

export type Testimonial = {
  name: string;
  image: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Internship Mentor",
    image: "assets/img/testimonial-1.png",
    text: "Habib is a dedicated Frontend Developer. His ability to quickly learn and implement new technologies made a strong impact on our projects.",
  },
  {
    name: "Team Lead",
    image: "assets/img/testimonial-2.png",
    text: "Working with Habib on React projects was seamless. He contributed creative solutions and built interactive, responsive interfaces.",
  },
  {
    name: "Peer / Colleague",
    image: "assets/img/testimonial-3.png",
    text: "Habib combines technical skills with creativity. His projects reflect attention to detail, clean code, and user-friendly design.",
  },
  {
    name: "Project Supervisor",
    image: "assets/img/testimonial-4.png",
    text: "Habib is highly professional and reliable. He adapts quickly, collaborates well, and consistently delivers high-quality frontend solutions.",
  },
];
