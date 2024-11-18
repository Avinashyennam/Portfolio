import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  expressjs,
  docker,
  budget_tracker,
  collaboration,
  ecart,
  rathriconstructions
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: mobile,
  },
  {
    title: "Cloud",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Rathri Constructions",
    icon: rathriconstructions,
    iconBg: "#E6DEDD",
    date: "February 2024 - April 2024",
    points: [
      "Engineered dynamic property listings and detailed property views, enhancing user experience.",
      "Collaborated with a cross-functional team to integrate responsive design, improving mobile user experience by 20%.",
      "Conducted A/B testing on key features, resulting in a 15% higher conversion rate for property inquiries.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ]
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Developers Collaboration Platform",
    description:
      "Web-based platform that connects developers based on shared skills and interests, fostering collaboration and networking.  Key features include chat, connection requests, skill-based matching, and GitHub project link sharing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "cloudinary",
        color: "pink-text-gradient",
      },
    ],
    image: collaboration,
    source_code_link: "https://github.com/Avinashyennam/Developers_Collaborative_Platform",
  },
  {
    name: "E-Cart",
    description:
      "The E-Cart platform is a dynamic e-commerce website offering a seamless shopping experience for users and efficient management tools for administrators. It features a responsive user interface with categorized product listings, secure JWT-based authentication, and role-based access.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: ecart,
    source_code_link: "https://github.com/Avinashyennam/E-Cart",
  },
  {
    name: "Budget Tracker",
    description:
      "The Budget Tracker is a web application designed to help users efficiently manage their finances. It allows users to manually credit and debit money, providing a clear and accurate calculation of available funds through robust server-side logic, responsive and visually appealing interface built with React and Framer Motion ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "framermotion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: budget_tracker,
    source_code_link: "https://github.com/Avinashyennam/Budget_Tracker",
  },
];

export { services, technologies, experiences, testimonials, projects };
