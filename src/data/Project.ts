import databaseJapaneasy from "../assets/japaneasy/database.png";
import wireframesJapaneasy from "../assets/japaneasy/wireframes.png";
import wireframesQuizMongers from "../assets/quizMongers/QuizMongersWireframe.png";

export const projectData = [
  {
    id: 3,
    title: "CV-Builder",
    location: "Amsterdam, The Netherlands",
    type: "individual front-end",
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
      youtubeLink: "https://www.youtube.com/embed/edb6W06X9AM",
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
      'At the end of our studies, each group was asked to create a web app that follows the given theme of "entertainment". Our team decided to create a multiplayer trivia app. working together over the course of 3 days, we were able to divide the tasks, develop and present the final product.',
    links: {
      frontendLink: "https://github.com/avdalmi/QuizMongersFrontend",
      backendLink: "https://github.com/avdalmi/QuizMongersBackend",
      youtubeLink: "https://youtu.be/YkFYuE3SvBY",
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
    readMe: {
      userStories: [
        "As a user I want to be able to play a trivia game.",
        "As a user I want to be able to create a game with my friends.",
        "As a user I want to be able to be able to invite my friends to play a trivia game.",
        "As a user I want to be able to see who recieved the highest score.",
      ],
      wireframes: wireframesQuizMongers,
    },
  },
];

export const skills = [
  {
    name: "React",
    type: "frontend",
    webUrl: "https://reactjs.org/",
  },
  {
    name: "Redux",
    type: "frontend",
    webUrl: "https://redux.js.org/",
  },
  {
    name: "React Native",
    type: "frontend",
    webUrl: "https://reactnative.dev/",
  },
  {
    name: "JavaScript",
    type: "language",
    webUrl: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    type: "language",
    webUrl: "https://www.typescriptlang.org/",
  },
  {
    name: "Python",
    type: "language",
    webUrl: "https://www.python.org/",
  },
  {
    name: "Formik",
    type: "frontend",
    webUrl: "https://formik.org/",
  },
  {
    name: "Styled Components",
    type: "frontend",
    webUrl: "https://styled-components.com/",
  },
  {
    name: "Material UI",
    type: "frontend",
    webUrl: "https://mui.com/",
  },
  {
    name: "Yup",
    type: "validation",
    webUrl: "https://github.com/jquense/yup",
  },
  {
    name: "Jest",
    type: "validation",
    webUrl: "https://jestjs.io/",
  },

  {
    name: "HTML",
    type: "language",
    webUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    type: "language",
    webUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Lottie",
    type: "frontend",
    webUrl: "https://lottiefiles.com/",
  },
  {
    name: "Bootstrap",
    type: "frontend",
    webUrl: "https://react-bootstrap.github.io/",
  },

  {
    name: "Leaflet",
    type: "frontend",
    webUrl: "https://react-leaflet.js.org/",
  },
  {
    name: "Joyride",
    type: "frontend",
    webUrl: "https://react-joyride.com/",
  },
  {
    name: "Express",
    type: "backend",
    webUrl: "https://expressjs.com/",
  },
  {
    name: "Sequelize",
    type: "backend",
    webUrl: "https://sequelize.org/",
  },
  {
    name: "GraphQL",
    type: "language",
    webUrl: "https://graphql.org/",
  },
  {
    name: "PostgreSQL",
    type: "backend",
    webUrl: "https://www.postgresql.org/",
  },
  {
    name: "Apollo Server",
    type: "backend",
    webUrl: "https://www.apollographql.com/docs/apollo-server/",
  },
  {
    name: "Bcrypt",
    type: "backend",
    webUrl: "https://www.npmjs.com/package/bcryptjs",
  },
  {
    name: "JSONWebToken",
    type: "backend",
    webUrl: "https://jwt.io/",
  },
];
