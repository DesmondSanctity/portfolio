import HTLogo from "assets/images/logos/huawei.png";
import MCLogo from "assets/images/logos/logo.png";
import TKLogo from "assets/images/logos/logo.png";
import HNGLogo from "assets/images/logos/hng.png";
import UniLogo from "assets/images/logos/futo.png";
import react from "assets/images/skills/react.png";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import python from "assets/images/skills/python.png";
import bootstrap from "assets/images/skills/bootstrap.png";
import mui from "assets/images/skills/mui.png";
import chakra from "assets/images/skills/chakra.png";
import postgres from "assets/images/skills/postgresql.png";
import mysql from "assets/images/skills/mysql.png";
import mongo from "assets/images/skills/mongo.png";
import aws from "assets/images/skills/aws.png";


export const companies = [
  {
    title: "Huawei Technologies",
    alt: "HT image",
    role: "Software Engineer",
    skills: ["python", "javascript", "react", "cloud"],
    period: "2020 - Present",
    logo: HTLogo
  },
  {
    title: "Manifest and Company",
    alt: "MC image",
    role: "Software Engineer Intern",
    skills: ["nodejs", "aws", "javascript", "react"],
    period: "2020 - 2020",
    logo: MCLogo
  },
  {
    title: "Tokwehu.com",
    alt: "TK image",
    role: "Web Application Developer",
    skills: ["javascript", "react", "php", "sql"],
    period: "2019 - 2020",
    logo: TKLogo
  },
  {
    title: "Hotel.ng",
    alt: "HNG image",
    role: "Frontend Engineer Intern",
    skills: ["javascript", "react", "html", "css"],
    period: "2018 - 2018",
    logo: HNGLogo
  }
];

export const institutes = [
  {
    short_title: "FUTO",
    title: "Federal University of Technology Owerri",
    alt: "FUTO image",
    role: "Bachelor's Degree in Chemistry",
    skills: ["project management", "web development", "data structures"],
    period: "2014 - 2019",
    startingYear: "2014",
    logo: UniLogo,
  },
];

export const skills = [
  {
    name: "JavaScript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript
  },
  {
    name: "Python",
    description: "Web development, scrapping",
    link: "https://www.python.org/",
    type: "development",
    image: python
  },
  {
    name: "HTML5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "CSS3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap
  },
  {
    name: "MUI",
    description: "Web design",
    link: "https://mui.com/",
    type: "design",
    image: mui
  },
  {
    name: "Chakra UI",
    description: "Web design",
    link: "https://chakra-ui.com/",
    type: "design",
    image: chakra
  },
  {
    name: "Postgres",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgres
  },
  {
    name: "MySQL",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql
  },
  {
    name: "MongoDB",
    description: "Devops",
    link: "https://www.mongodb.com/",
    type: "database",
    image: mongo
  },
  {
    name: "AWS",
    description: "Devops",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: aws
  },
];
