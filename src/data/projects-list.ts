import peterpitch from "assets/images/projects/pp.png";
import notch from "assets/images/projects/notch.png";
import workof from "assets/images/projects/workof.png";
import souq from "assets/images/projects/souq.png";
import gosave from "assets/images/projects/gosave.png";

export const projectsList = [
  {
    id: 1,
    title: "Project Mgt. Board",
    logo: peterpitch,
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "https://project-mgt-board.netlify.app/",
    desc: `Project Mgt. Board is a project management board to track progress of personal projects and works.
    Inspired by Trello, it allows you to create working structre and track record for your projects, this web app is still a beta version.`,
    technologies: ["typescript", "react", "javascript"]
  },
  {
    id: 2,
    title: "Prospa",
    link: "https://prospa-frontend-one.vercel.app/",
    logo: notch,
    blurHash: "L0Aer?tjH[tPyAayj[j[00ay%xkB",
    desc: `Prospa is a mirror of a Nigerian fintech app that help small businesses and enterprise manage all their finances in one place.
    It is essential for record tracking, effective business and other great toolings for business optimizations.`,
    technologies: ["react", "mui", "javascript"]
  },
  {
    id: 3,
    title: "Movie Nominator",
    logo: workof,
    blurHash: "L2M5%%0000EN00I:-oIp00kC?^sl",
    link: "https://the-shoppies-by-dex.netlify.app/",
    desc: `This web app helps you nominate your favorite movies. It uses OMDB API to query movies on search and allows users to nominate and stores their nomination too.`,
    technologies: ["react", "chakra", "javascript", "api"]
  },
  {
    id: 4,
    title: "StarWars Directory",
    logo: souq,
    blurHash: "L1O^uE0679I00AGT?.H{00y7p2tK",
    link: "https://starwars-api-frontend.netlify.app/",
    desc: `StarWars Directory is an online museum where you can find details of all the Star Wars movie. The characters, the starships, the planets among many others.
    The web app gives the visitors more information on these topics, an intereting way to refresh your memory of the wonderful piece.`,
    technologies: ["react", "api", "javascript", "redux"]
  },
  {
    id: 5,
    title: "Meglio",
    logo: gosave,
    blurHash: "L09sWSxdH;s?%6axWAfk00V?%jax",
    link: "https://desmondsanctity.github.io/meglio-landing-page/",
    desc: `Meglio is a landing page for a crypto enterprise that showcases their mission, objectives and knowlwdge base on what they represent.`,
    technologies: ["html", "javascript", "bulma-css"]
  }
];
