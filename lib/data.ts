import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import Ecommerce from "@/public/E-Commerce.png";
import EcommerceAdmin from "@/public/E-Commerce-Admin.png";
import Ecommerce_product from "@/public/ecommerce-next-js-product-page-vercel-app.png";
import Ecommerce_admin from "@/public/Ecommerce-Admin.png";
import Blackmagic from "@/public/Blackmagic.png";
import Montono_portfolio from "@/public/Next-Portfolio-Web-Page.png";
import Youtube_clone from "@/public/React App (1).png";
import Login_Register from "@/public/React App.png";
import React_ReduxToolkit from "@/public/Sammi-Movie-List.png";
import Hungry_people from "@/public/Hungry - People.png";
import Invest_bloga from "@/public/INVEST-BlaGO-KAPITAL.png";
import Invest from "@/public/Example.png";
import Exchange from "@/public/Exchange.png";
import Active_box from "@/public/PROJECT.png";
import Watch_store from "@/public/Document.png";
import Egg_socialApp from "@/public/MAIN.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University",
    location: "Tashkent University of Information Technologies",
    description:
      "For 4 years at the university, I studied ECONOMICS IN THE FIELD OF ICT at the Faculty of Economics. Currently, I am a highly educated economist, marketer, and programmer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer (Верстка сайт)",
    location: "Toshkent Ц1",
    description:
      "With the help of YouTube, Udemy and other such video tutorials, my interest in learning web programming increased and I made single page websites using html css javascript for Freelancer group. During the course of the work, I learned that paying attention to clients and documentation is the key to getting the job done right and most importantly, completing the task on time. It taught me to be responsible.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2022",
  },
  {
    title: "Full-Stack Developer (React & Next.js)",
    location: "No Job Location",
    description:
      "I'm now a full-stack developer working as a freelancer however, I am currently unemployed and willing to work in a new team to grow and develop in my field to the fullest. I'm open to full-time opportunities. In order to increase my knowledge and skills, I tried to prepare Ecommerce, (Internet stores) based on several excellent modern technologies. I can say that this caused me to gain many experiences. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. ",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce",
    description:
      "I prepared this project using youtube video tutorials to increase my experience and learned a lot from this project.",
    tags: [
      "React",
      "Next.js",
      "Next-auth",
      "Prisma",
      "MongoDB",
      "Stripe",
      "Tailwind",
      "Firebase",
      "Mui",
      "React App Router",
    ],
    imageUrl: Ecommerce,
    sourceCode: "https://github.com/HalimjonHalimov/Ecommerce-App",
    sourceLink: "https://ecommerce-app-six-smoky.vercel.app/",
  },
  {
    title: "Ecommerce-Admin",
    description:
      "The admin page is a part that only the admin can see and add new types of products and perform actions on them.",
    tags: [
      "React",
      "Next.js",
      "Next-auth",
      "Prisma",
      "MongoDB",
      "Stripe",
      "Tailwind",
      "Firebase",
      "Mui",
      "React App Router",
    ],
    imageUrl: EcommerceAdmin,
    sourceCode: "https://github.com/HalimjonHalimov/Ecommerce-App",
    sourceLink: "https://ecommerce-app-six-smoky.vercel.app/",
  },
  {
    title: "Ecommerce Product",
    description:
      "This is one of my first ecommerce online stores and I may have made some mistakes. This project was also prepared with the help of video tutorials.",
    tags: [
      "React",
      "Next.js",
      "Styled-components",
      "Stripe",
      "React Page Router",
    ],
    imageUrl: Ecommerce_product,
    sourceCode: "https://github.com/HalimjonHalimov/Ecommerce-Next-js-Product-Page",
    sourceLink: "https://ecommerce-next-js-product-page.vercel.app/",
  },
  {
    title: "Ecommerce Admin",
    description:
      " User page and Admin page are designed separately, user page is written in javascript, typescript is used in admin page.",
    tags: [
      "React",
      "Next.js",
      "Next-auth",
      "Tailwind",
      "Stripe",
      "React Page Router",
      "Uploadthing",
    ],
    imageUrl: Ecommerce_admin,
    sourceCode: "https://github.com/HalimjonHalimov/Ecommerce-Next-js-Admin-Page",
    sourceLink: "",
  },
  {
    title: "Blackmagic",
    description:
      "A web-application made using Next.js, typescript and graphql, it uses hygraph for data storage and so on. Personal blog web page",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Graphql",
      "Hygraph",
      "React Page Router",
    ],
    imageUrl: Blackmagic,
    sourceCode: "https://github.com/HalimjonHalimov/nextjs_hygraph",
    sourceLink: "https://nextjs-hygraph-eq2d.vercel.app/",
  },
  {
    title: "Montono Portfolio",
    description:
      "This website, made using React next.js, is mainly designed to improve my programming experience",
    tags: ["React", "Next.js", "Mui", "Bootstrap", "React Page Router"],
    imageUrl: Montono_portfolio,
    sourceCode: "https://github.com/HalimjonHalimov/Next-Portfolio-App",
    sourceLink: "https://next-portfolio-app-gamma.vercel.app/",
  },
  {
    title: "Youtube Clone",
    description:
      "In Youtube clone react app I learned new skills like working with APIs, using them and sending requests to the server through Postman and receiving them.",
    tags: ["React", "Mui", "Bootstrap", "React Page Router"],
    imageUrl: Youtube_clone,
    sourceCode: "https://github.com/HalimjonHalimov/youtube-clone",
    sourceLink: "",
  },
  {
    title: "Login Register ",
    description:
      "I learned about errors and shortcomings in the login and register parts, sending requests through Postman, setting up the server using XAMP and Docker.",
    tags: ["React", "Mui", "Redux", "Xamp", "Docker", "React Page Router"],
    imageUrl: Login_Register,
    sourceCode: "https://github.com/HalimjonHalimov/ShoppingExample",
    sourceLink: "",
  },
  {
    title: "React Redux-toolkit",
    description:
      "This project based on React Reduc toolkit is mainly based on using Context provider to wrap the project in Context and create an environment for easy use of it.",
    tags: ["React", "Mui", "Redux", "Xamp", "Docker", "React Page Router"],
    imageUrl: React_ReduxToolkit,
    sourceCode: "https://github.com/HalimjonHalimov/Movie-App-.git",
    sourceLink: "https://movie-app-ruddy-nu.vercel.app/",
  },
  {
    title: "Hungry People",
    description:
      "Html css javascript was used and json data was used using json-server in order to use the database prepared only for the purpose of improving the experience.",
    tags: ["Html", "Css", "Sass", "json-server"],
    imageUrl: Hungry_people,
    sourceCode: "",
    sourceLink: "",
  },
  {
    title: "Invest Bloga",
    description:
      "Based on the order of my freelance acquaintances, only the front-end part was prepared in html css javascript.",
    tags: ["Html", "Css", "Sass", "Javascript"],
    imageUrl: Invest_bloga,
    sourceCode: "",
    sourceLink: "https://attempapps.netlify.app/",
  },
  {
    title: "Invest",
    description:
      "Based on the order of my freelance acquaintances, only the front-end part was prepared in html css javascript.",
    tags: ["Html", "Css", "Sass", "Javascript"],
    imageUrl: Invest,
    sourceCode: "",
    sourceLink: "https://crezypageapp.netlify.app/",
  },
  {
    title: "Exchange",
    description:
      "Based on the order of my freelance acquaintances, only the front-end part was prepared in html css javascript.",
    tags: ["Html", "Css", "Sass", "Javascript"],
    imageUrl: Exchange,
    sourceCode: "",
    sourceLink: "https://meek-frangipane-03aa21.netlify.app/",
  },
  {
    title: "Watch Store",
    description:
      "Based on the order of my freelance acquaintances, only the front-end part was prepared in html css javascript.",
    tags: ["Html", "Css", "Sass", "Javascript"],
    imageUrl: Watch_store,
    sourceCode: "",
    sourceLink: "https://tasksapps.netlify.app/",
  },
  {
    title: "Egg Social App ",
    description:
      "Based on the order of my freelance acquaintances, only the front-end part was prepared in html css javascript",
    tags: ["Html", "Css", "Sass", "Javascript"],
    imageUrl: Egg_socialApp,
    sourceCode: "",
    sourceLink: "https://publichtmlapps.netlify.app/",
  },
  {
    title: "Active Box",
    description:
      "My first html css javascript project work done using psd layout",
    tags: ["Html", "Css", "Sass", "Javascript"],
    imageUrl: Active_box,
    sourceCode: "",
    sourceLink: "https://acticboxapps.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "Jquery",
  "Bootstrap",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Mui",
  "Framer Motion",
] as const;
