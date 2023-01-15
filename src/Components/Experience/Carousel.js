import PersonalWebsite from "../../assets/Personal Website.png";
import Calculator from "../../assets/Calculator.png";
import JPCountries from "../../assets/JPCountries.png";
import NavBug from "../../assets/NavBug.png"
import TellMeMoreBug from "../../assets/TellMeMoreBug.png"
import ComingSoon from "../../assets/ComingSoon.png"

const CarouselData = [
  {
    title: "Fabien. T",
    status: "In Progress",
    description:
      "Personal website that documents my experience at North P&D as well as my education history.",
    image: PersonalWebsite,
    link: "https://fabienthich.github.io/",
  },

  {
    title: "Calculator",
    status: "",
    description:
    "A simple calculator built with React.js as a learning project.",
    image: Calculator,
    link: "https://fabienthich.github.io/calculator",
  },
  
  {
    title: "SVG Lag",
    status: "",
    description:
    "Implemented a solution to resolve a delayed loading for a Scalable Vector Graphic of a map.",
    image: JPCountries,
    link: "https://www.jpabadir.com/countries",
  },
  
  {
    title: "Navigation Bug",
    status: "",
    description:
    "Implemented a solution which prevented users from clicking on the same navigation destination twice in a row.",
    image: NavBug,
    link: "https://www.northpnd.com/",
  },
  
  {
    title: "Stalling Bug",
    status: "",
    description:
    "Debugged React.js code that caused the scrolling to the about section to stall before actually scrolling when the user clicked on “Tell Me More”.",
    image: TellMeMoreBug,
    link: "https://www.northpnd.com/",
  },

  {
    title: "Budget Planner",
    status: "Coming Soon",
    description:
      "Stay tuned...",
    image: ComingSoon,
    link: "",
  },
];

export default CarouselData;
