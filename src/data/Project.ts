import databaseJapaneasy from "../assets/japaneasy/database.png";
import wireframesJapaneasy from "../assets/japaneasy/wireframes.png";
export const projectData = [
  {
    id: 3,
    title: "CV-Builder",
    location: "Amsterdam, The Netherlands",
    type: "front-end",
    description: `As a project for a new start-up secondment company, together with another developer we built a CV-builder. My colleague and I split the responsibilities, where I was in charge of front-end developement and he was in charge of back-end developement. \n\nThe front-end was built using React, Formik, Yup validations, Axios, and Material UI. The back-end utilises MongoDB, Overleaf to produce LaTeX files.\n\nThe goal of this project was to provide a standardized CV format that the company could use to send to clients. By utilizing Formik and Yup validation, I was able to create a user-friendly form that ensured all necessary information was collected and entered correctly. Axios was used to grab and display country data from countryAPI. Material UI was used to create a visually appealing and intuitive user interface. \n\nWith this CV-builder, the secondment company can now quickly and efficiently generate a standardized CV that accurately reflects the skills and qualifications of their employees.`,
    links: {
      frontendLink: "https://github.com/avdalmi/cv-builder-front-end",
      demoLink: "https://cv-builder-avdalmi.netlify.app/",
    },
    date: "20/02/23-07/03/23",
    tech: {
      frontend: ["React", "JavaScript", "Formik", "Yup", "Axios", "MUI"],
    },
  },
  {
    id: 2,
    title: "Japaneasy",
    location: "Amsterdam, The Netherlands",
    type: "individual full-stack",
    description:
      "After 7 weeks of learning, we were tasked with creating our own portfolio project. We were given 2 weeks to complete the project from start to finish. During the lockdown period I started a small bento box business for fun. During this time I noticed that not many people know what homecooked Japanese food is outside of sushi, gyozas and karaage. I wanted to help my friends know a little bit more about how special Japan and Japanese food is, so I created this website.",
    links: {
      frontendLink: "https://github.com/avdalmi/japaneasyFrontend",
      backendLink: "https://github.com/avdalmi/japaneasyBackend",
      demoLink: "https://www.youtube.com/embed/edb6W06X9AM",
    },
    date: "21/11/22-02/12/22",
    tech: {
      frontend: [
        "React",
        "Redux",
        "TypeScript",
        "Lottie",
        "Leaflet",
        "React Joyride",
        "Axios",
        "React Star Ratings",
      ],
      backend: [
        "Express",
        "Sequelize",
        "PostgreSQL",
        "ElephantSQL",
        "Bcrypt",
        "JSONWebToken",
      ],
    },
    readMe: {
      userStories: [
        "As a user I want to be able to be able to browse recipes",
        "As a user I want to be able to log in and see my saved and favorited recipes",
        "As a user I want to learn more about Japan, its prefectures and the specialities of each prefecture.",
        "As a user I want to be able to understand where everything is located on the website.",
        "As a user I want to be able to know what certain ingredients are and what to replace them with if I do not have them.",
        "As a user I want to be able to keep track of which step of the recipe instructions I am on",
      ],
      wireframes: wireframesJapaneasy,
      database: databaseJapaneasy,
    },
  },
  {
    id: 1,
    title: "Quiz Mongers",
    location: "Amsterdam, The Netherlands",
    type: "group full-stack",
    description:
      "After 7 week of learning, we were tasked with creating our own portfolio project. We were given 2 weeks to complete the project from start to finish. During the lockdown period I started a small bento box business for fun. During this time I noticed that not many people know what homecooked Japanese food is outside of sushi, gyozas and karaage.I wanted to help my friends know a little bit more about how special Japan and Japanese food is, so I created this website.",
    links: {
      frontendLink: "https://github.com/Yntepostma/pubQuizfrontend",
      backendLink: "https://github.com/AdneCode/pubQuizbackend",
    },
    date: "5/12/22-08/12/22",
    tech: {
      frontend: [
        "React",
        "Redux",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Lottie",
      ],
      backend: ["Socketio", "JavaScript"],
    },
  },
];

export const techData = [
  {
    name: "React",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    webUrl: "https://reactjs.org/",
  },
  {
    name: "JavaScript",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "HTML",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    webUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    webUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Socketio",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1024px-Socket-io.svg.png",
    webUrl: "https://socket.io/",
  },
  {
    name: "Lottie",
    imageUrl: "https://static3.lottiefiles.com/images/logo/icon.svg",
    webUrl: "https://lottiefiles.com/",
  },
  {
    name: "Bootstrap",
    imageUrl:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--bSimDHKi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/m9brm89w3tbmdohgjfgm.png",
    webUrl: "https://react-bootstrap.github.io/",
  },
  {
    name: "TypeScript",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    webUrl: "https://www.typescriptlang.org/",
  },
  {
    name: "Redux",
    imageUrl:
      "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    webUrl: "https://redux.js.org/",
  },
  {
    name: "Leaflet",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1510602617700950021/K4IoVubu_400x400.jpg",
    webUrl: "https://react-leaflet.js.org/",
  },
  {
    name: "Joyride",
    imageUrl:
      "https://i.pinimg.com/originals/ba/09/30/ba093075617007eeeba329113621084e.png",
    webUrl: "https://react-joyride.com/",
  },
  {
    name: "Express",
    imageUrl:
      "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
    webUrl: "https://expressjs.com/",
  },
  {
    name: "Sequelize",
    imageUrl:
      "https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png",
    webUrl: "https://sequelize.org/",
  },
  {
    name: "PostgreSQL",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png",
    webUrl: "https://www.postgresql.org/",
  },
  {
    name: "Bcrypt",
    imageUrl:
      "https://img.stackshare.io/package/19054/default_2be036aaca5c71baf790e00f1ef80dd37a625905.png",
    webUrl: "https://www.npmjs.com/package/bcryptjs",
  },
];
