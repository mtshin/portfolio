module.exports = {
  siteTitle: `Hi, I'm Matthew!`,
  siteDescription: `Matthew Shin Personal Portfolio`,
  keyWords: ['gatsbyjs', 'react'],
  authorName: 'Matthew Shin',
  githubUsername: 'mtshin',
  authorAvatar: '/images/profile_pic.jpeg',
  authorDescription: `Software Engineer at HqO. <br />
    I started working as a quality engineer developing automation infrastructure and tests for an object storage product in Java. <br />
    My interest in front end sparked after working on the first iteration of that product's UI in Typescript and React. I began to study Javascript and work on personal projects in my free time to set me on the path of a full stack developer. <br />
    I enjoy working with <strong>Javascript/Typescript, NodeJS, React, and Redux</strong>. I'm experienced with <strong>Java, and Amazon S3</strong>. I’ve dabbled in Python, MongoDB, SQL, and PromQL.`,
  skills: [
    {
      name: 'Javascript/Typescript',
      level: 75,
    },
    {
      name: 'Java',
      level: 60,
    },
    {
      name: 'HTML',
      level: 45,
    },
    {
      name: 'CSS',
      level: 45,
    },
    {
      name: 'React',
      level: 75,
    },
    {
      name: 'Redux',
      level: 65,
    },
    {
      name: 'NodeJs',
      level: 45,
    },
    {
      name: 'Git',
      level: 70,
    },
    /* more skills here */
  ],
  jobs: [
    /* more portfolio items here */
    {
      company: 'HqO',
      begin: {
        month: 'Nov',
        year: '2020',
      },
      duration: null,
      occupation: 'Software Engineer',
      description:
        'Front end development of web and mobile tenant experience app.',
    },
    {
      company: 'Hitachi Vantara',
      begin: {
        month: 'Jun',
        year: '2017',
      },
      duration: '3 yrs 4 mos',
      occupation: 'Software Engineer',
      description:
        'Development of UI, automation framework infrastructure, and tests for the object storage management product in an agile team environment.',
    },
    {
      company: 'TetraScience',
      begin: {
        month: 'Jun',
        year: '2016',
      },
      duration: '3 mos',
      occupation: 'Software Engineer Intern',
      description:
        'Developed an app to view and modify a database of lab instrument information for the sales team to use in the field with MongoDB, Express, Angular, and NodeJS. Assisted setting up demos for on-site customer visits.',
    },
  ],
  portfolio: [
    {
      image: '/images/emef.png',
      description: `Website for non-proft company, EMEF`,
      url: 'https://github.com/mtshin/emef',
    },
    {
      image: '/images/recipe-search.png',
      description: `Interactive Recipe Search App (React)`,
      url: 'https://github.com/mtshin/recipe-search',
    },
    {
      image: '/images/s3console_poc.png',
      description: `Proof of Concept S3 Console (React)`,
      url: 'https://github.com/mtshin/s3console_poc',
    },
    {
      image: '/images/tetrascience_db.png',
      description: 'TetraScience Driver Database (MEAN)',
      url: 'https://github.com/mtshin/tsdriverapp',
    },
    /* more portfolio items here */
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/mtshin/',
    github: 'https://github.com/mtshin',
    email: 'tshin3232@gmail.com',
    resume: 'MatthewTaesooShinResume.pdf',
  },
  siteUrl: 'https://mtshin.github.io/portfolio',
  pathPrefix: '/portfolio', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.png',
  googleAnalyticsId: 'UA-167281791-1',
  background_color: '#25303B',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'static/images/favicon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    },
  ],
}
