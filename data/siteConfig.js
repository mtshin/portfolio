module.exports = {
  siteTitle: `Hi, I'm Matthew!`,
  siteDescription: `Matthew Shin Personal Portfolio`,
  keyWords: ['gatsbyjs', 'react'],
  authorName: 'Matthew Shin',
  githubUsername: 'mtshin',
  authorAvatar: '/images/profile_pic.jpeg',
  authorDescription: `Software Engineer at Hitachi Vantara. <br />
    I started working as a quality engineer developing automation infrastructure and tests for an object storage product in Java. <br />
    My interest in front end sparked after working on the first iteration of the product's UI in Typescript and Angular. I began to study Javascript and work on personal projects in my free time to become a dull stack developer. <br /> 
    I'm currently developing a revamped UI for our product in Typescript and React while balancing my quality team responsibilities. <br />
    I love to work with <strong>Javascript/Typescript, NodeJS, React, and Redux</strong>. I'm experienced with <strong>Java, and Amazon S3</strong>. I’ve dabbled in Python, MongoDB, SQL, and PromQL.`,
  skills: [
    {
      name: 'Javascript/Typescript',
      level: 70,
    },
    {
      name: 'Java',
      level: 60,
    },
    {
      name: 'HTML',
      level: 55,
    },
    {
      name: 'CSS',
      level: 50,
    },
    {
      name: 'React',
      level: 60,
    },
    {
      name: 'Redux',
      level: 40,
    },
    {
      name: 'NodeJs',
      level: 50,
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
      company: 'Hitachi Vantara',
      begin: {
        month: 'June',
        year: '2017',
      },
      duration: null,
      occupation: 'Software Engineer',
      description:
        'Development of UI, automation framework infrastructure, and tests for the object storage management product in an agile team environment.',
    },
    {
      company: 'TetraScience',
      begin: {
        month: 'June',
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
