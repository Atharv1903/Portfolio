import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMediumM,
  FaJava,
  FaFileExcel,
  FaCube,
  FaCloud,
  FaServer
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
  TbBrandMongodb,
  TbBrandMysql,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { AiFillCode, AiOutlineDatabase } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence, GiChart } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  // { text: "Blogs", path: "/blogs" },
  { text: "Contact", path: "/contact" }
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  // {
  //   interest: "Tech Blog",
  //   icon: FaHashnode,
  // },
  // {
  //   interest: "Internet of Things",
  //   icon: FcElectronics,
  // },

  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  // {
  //   interest: "Robotics",
  //   icon: BsRobot,
  // },
  {
    interest: "Web Development",
    icon: BsGlobe,
  },
  {
    interest: "AI & ML",
    icon: GiArtificialIntelligence,
  },
  {
    interest: "Data Analysis & Visualization",
    icon: BsFileBarGraph,
  }
];

export const skillsData = [
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "MySQL",
    icon: TbBrandMysql,
  },
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  // {
  //   name: "Jquery",
  //   icon: BiLogoJquery,
  // },
  // {
  //   name: "Typescript",
  //   icon: TbBrandTypescript,
  // },
  {
    name: "SASS",
    icon: FaSass,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  
  
  {
    name: "ReactJS",
    icon: FaReact,
  },
  // {
  //   name: "NextJS",
  //   icon: SiNextdotjs,
  // },
  {
    name: "Redux",
    icon: TbBrandRedux,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  // {
  //   name: "PugJs",
  //   icon: SiPug,
  // },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: TbBrandMongodb,
  },
  // {
  //   name: "Docker",
  //   icon: FaDocker,
  // },
  // {
  //   name: "Postgres",
  //   icon: BiLogoPostgresql,
  // },
  {
    name: "NumPy",
    icon: SiNumpy,
  },
  {
    name: "Pandas",
    icon: SiPandas,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "Excel",
    icon: FaFileExcel,
  }
  // {
  //   name: "ChatGPT",
  //   icon: GiArtificialIntelligence,
  // },
  // {
  //   name: "Bash",
  //   icon: SiGnubash,
  // },
  // {
  //   name: "Markdown",
  //   icon: BsMarkdown,
  // },
];

export const courseData = [
  {
    name: "Data Stucture & Algorithms",
    icon: GiChart,
  },
  {
    name: "Object Oriented Programming",
    icon: FaCube,
  },
  {
    name: "Operating Systems",
    icon: FaServer,
  },
  {
    name: "Database Management Systems",
    icon: AiOutlineDatabase,
  },
  {
    name: "Cloud Computing",
    icon: FaCloud,
  },
];

export const workData = [
  {
    company: "Kirabiz Technologies",
    designation: "Front End Developer Intern",
    duration: "October 2023 - December 2023",
    companyImg: "1ds.jpg",
    description: (
      <>
        <ul>
          <li>
            Developed and maintained the frontend architecture of the Puppy Culture e-commerce website using ReactJs,
            resulting in reduced system errors and improved performance.
          </li>
          <li>Improved website performance by optimizing code and assets for a seamless user experience across all major
            browsers.</li>
          <li>Increased mobile user engagement by implementing responsive design principles, creating a seamless experience
            across various devices and screen sizes.
          </li>
          <li>Conducted code reviews and guaranteed compliance with best practices, resulting in faster development time.</li>
          <li>Contributed to Agile development procedures, including sprint planning and daily stand-ups, to ensure project
            milestones were met timely.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "PICT Coday Hackathon by NICE",
    designation: "Solution Seekers",
    duration: "Winner!!!",
    companyImg: "nice.png",
    description: (
      <>
        <ul>
          <li>
            Developed a solution using Java to optimize electric vehicle charging stations across a highway.
          </li>
          <li>Analyzed and processed data on vehicle types, battery capacities, and charging station locations to calculate daily
            electricity consumption and charging times.
          </li>
          <li>Focused on space complexity, time complexity, and scalability in solution design.Validated the solution using all
            possible test cases to ensure accuracy and efficiency.
          </li>
        </ul>
      </>
    ),
  }
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "EduTrack : School Management Platform",
    image: "movie-magnet",
    link: " https://edutrack-awi.vercel.app/",
    source: "https://github.com/Atharv1903/EduTrack",
  },
  {
    type: "WEB-APP",
    title: "CareConnect : Appointment Booking Web App",
    image: "portfolio-website",
    link: "https://careconnect-client.vercel.app/",
    source: "https://github.com/Atharv1903/CareConnect",
  },
  {
    type: "WEB-APP",
    title: "Estate Genius : Predictive Real Estate Insights",
    image: "weather-app",
    link: null,
    source: "https://github.com/Atharv1903/Estate-Genius",
  },
  {
    type: "WEB-APP",
    title: "Hotel Adiraj : Hotel Management System ",
    image: "landing-page",
    link: null,
    source: "https://github.com/Atharv1903/Hotel-Adiraj",
  },
  // {
  //   type: "WEB-APP",
  //   title: "Guess Game",
  //   image: "guess-game",
  //   link: "https://vaheedsk36.github.io/guess-my-number",
  //   source: "https://github.com/vaheedsk36/guess-my-number",
  // },
  // {
  //   type: "WEB-APP",
  //   title: "Notes App",
  //   image: "react-notes-app",
  //   link: "https://vaheedsk36.github.io/react-notes-app/",
  //   source: "https://github.com/vaheedsk36/react-notes-app",
  // },
  // {
  //   type: "WEB-APP",
  //   title: "Dice Multiplayer",
  //   image: "dice-multiplayer",
  //   link: "https://vaheedsk36.github.io/dice-multiplayer",
  //   source: "https://github.com/vaheedsk36/dice-multiplayer",
  // },
  {
    type: "PROJECT",
    title: "Puppy Culture : The Ultimate Pet Store",
    image: "snake-game",
    link: "https://shoppuppyculture.com/",
    source: "https://github.com/Atharv1903/Puppy_Culture",
  }
  // {
  //   type: "PROJECT",
  //   title: "Delta Assistant",
  //   image: "delta-assistant",
  //   link: "",
  //   source: "https://github.com/vaheedsk36/Delta-Desktop-Virtual-Assistant",
  // },
  // {
  //   type: "WEB-APP",
  //   title: "Text Utility App",
  //   image: "text-utility-app",
  //   link: "https://vaheedsk36.github.io/text-utility-app/",
  //   source: "https://github.com/vaheedsk36/text-utility-app",
  // },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/Atharv1903",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.linkedin.com/in/atharv-kharmate-0b048922a/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "https://www.instagram.com/atharv_1903/",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  }
  // {
  //   href: "https://twitter.com/codersk36",
  //   icon: FaXTwitter,
  //   backgroundColor: "gray.700",
  //   hoverColor: "gray.600",
  // },
  // {
  //   href: "https://codersk36.hashnode.dev/",
  //   icon: FaHashnode,
  //   backgroundColor: "social.hashnode",
  //   hoverColor: "social.hashnodeHover",
  // },
  // {
  //   href: "https://medium.com/@vaheedsk36",
  //   icon: FaMediumM,
  //   backgroundColor: "gray.700",
  //   hoverColor: "gray.600",
  // }
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
