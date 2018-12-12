const path = require('path');

module.exports = {
    name:"mittlener.com",
    siteTitle: "Tomasz Mittlener ,Frontend developer,Javascript,ReactJs,Poland", // Site title.
    siteLogo: `${__dirname}/src/static/images/me.png`,
    siteURL: "https://mittlener.com", // Domain of your website without pathPrefix.
    siteKeywords:"Tomasz Mittlener, software engineer, frontend developer, javascript, react js, vue js, node js, graphql, jquery, lodash, javascript expert, ES6, software engineer, web developer, front end developer, bootstrap, material design, styled components, gatsby, react gatsby.",
    siteDescription: "Frontend developer, I have designed and developed fast and responsive web applications using Javascript, ReactJS, Redux, NodeJs, GraphQl, Bootstrap, Gatsby", // Website description used for RSS feeds/meta description tag.
    googleAnalyticsID: "UA-130772433-1", // GA tracking ID.
    userName: "Tomasz Mittlener", // Username to display in the author segment.
    userTwitter: "t_mittlener", // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "Gdańsk, Poland", // User location to display in the author segment.
    userAvatar: "./src/static/images/me.png", // User avatar to display in the author segment.
    favicon32:`./src/static/images/me.png`,
    favicon16:`./src/static/images/me.png`,
    ogImage: `./src/static/images/me.png`,
    userDescription: "Frontend developer, I have designed and developed fast and responsive web applications using Javascript, ReactJS, Redux, NodeJs, GraphQl, Gatsby, Styled Components, Vue.js.", // Website description used for RSS feeds/meta description tag.
    userPhone:"+48 696 412 010",
    userEmail:"t.mittlener@gmail.com",
    skills:[
        {
            name:"Javascript",
            rating: "8"
        },
        {
            name:"HTML",
            rating: "9"
        },
        {
            name:"CSS",
            rating: "8"
        },
        {
            name:"ReactJs",
            rating: "9"
        },
        {
            name:"Vue.js",
            rating: "6"
        },
        {
            name:"Styled Components",
            rating: "9"
        },
        {
            name:"Lodash",
            rating: "7"
        },
        {
            name:"GraphQL",
            rating: "5"
        },
        {
            name:"NodeJs",
            rating: "7"
        }
    ],
    langauges:[
        {
            name:"Polish",
            rating: 10
        },
        {
            name: "English",
            rating: 9
        },
    ],
    experience:[
        {
            position:"Front-End Developer",
            company: "Scalac.io",
            current: true,
            startDate: "Jun 2017",
            endDate: "current",
            overview: `Working for various multinational clients, as a Front-End consultant. Providing expertise in fields such as building MVPs, maintaining and improving existing projects. Sometimes working on internal projects which help the company strive for better`
        },
        {
            position:"Lawyer",
            company: "Clifford Chance",
            current: false,
            startDate: "November 2015",
            endDate: "March 2017",
            overview: "Lawyer in a corporate department, gaining experience in public and private mergers and acquisitions, taking part in due diligence process and providing legal services for multinational companies. During my university studies and after graduation, I've been learning javaScript and creating branding websites as a part time job.",
        }
    ],
    projects :[
        {
            position:"Front-End Developer",
            name: "Perseus",
            company: "Scalac",
            teamSize: "15+",
            current: true,
            startDate: "January 2018",
            endDate: "current",
            overview: `Perseus is the company, which wants to bring security awareness to companies by providing a platform for both employees who can train their skills as well as managers who can keep track of their team progress and level of security awareness. I have joined the project in the beginning of 2018, where together with two other Frontend Developers we managed to rewrite the frontend application from scratch in a very short period of time. As a base tech stack we decided to use React, Redux, Styled Components for styling and Jest for writing tests. We are working in Scrum driven environment, starting each day with a short daily meeting and finishing each sprint presenting our work in demo sessions. In recent months I have been mainly delivering new features, implementing redesigned layouts and increasing our test coverage. During this period I have been also working on creating Perseus landing pages: https://signal-iduna.perseus.de/ https://www.perseus.de/`,
            techStack: ['React', 'Redux', 'Styled Components', 'Prismic SDK', 'Redux Forms', 'GitLab', 'JIRA',],
        },
        {
            position:"Front-End Developer",
            name: "wrelacji.com.pl",
            company: "W relacji",
            teamSize: "1",
            current: false,
            startDate: "October 2018",
            endDate: "November 2018",
            overview: `As a freelancer and a hobbyist Im always having great fun designing and creating all sorts of web applications including websites and landing pages. As one of my recent projects, I have created a website of psychotherapy and personal development Office "W relacji". It was created with React Gatsby and Styled Components.`,
            techStack: ['React', 'Gatsby', 'Styled Components', 'Netlify', 'Github'],
        },
        {
            position:"Front-End Developer",
            name: "Graupel.com",
            company: "Graupel Inc.",
            teamSize: "4",
            current: false,
            startDate: "January 2018",
            endDate: "Jun 2018",
            overview: `Graupel is new e-commerce store based in Miami that utilizes 3d scanning system to best fit clothes for you. I have been working in a team of two Fronted Developers, one Backend Developer and Graphic Designer on delivering a functional MVP in given deadline which required prioritizing features and focusing on them. We managed to deliver fully functioning platform which we believe will be a great starting point for this ambitious project. As a basic tech stack we used: React, Redux, Styled Components, Jest, Contentful SDK, Jira, Trello, Apiary and Netlify`,
            techStack: ['React', 'Redux', 'Styled Components', 'Contentul SDK', 'Netlify', 'Redux Forms', 'recompose', 'React Intl'],
        },
        {
            position:"Front-End Developer",
            name: "Hire-Help",
            company: "Scalac.io",
            teamSize: "10",
            current: false,
            startDate: "Jun 2017",
            endDate: "current",
            overview: `Worked on creating an innovative application designed for improving developers recruitment process. I've been developing features using React, Redux, Webpack and cutting edge libraries. Worked in Scrum driven environment (with daily startups, demo sessions and sprint planning) with 5 - 6 frontend, up to 3 backend and testers based teams. We used Slack/Hangouts to communicate (english only) and Jira for agile task management. Daily basis work aimed to implement new features, code review, bug fixes for frontend part of the application and improving UI/UX in application. The work required strong cooperation with both frontend and backend team, as well as the testers and application users.`,
            techStack: ['React', 'Redux', 'Sass', 'Jest', 'Formik', 'Github', 'Jira', 'Jenkins'],
        }
    ],
    education:[
        {
            college:"University of Gdańsk",
            degree:"Master of Law",
            startDate:"July 2009",
            endDate: "Jun 2015",
            current: false,
            overview: "I graduated from the law school with a master's degree. During my studies I have been also learning programming and creating simple websites, which makes me a lawyer and Front-End developer in love with computer science and web technologies :)"
        }
    ],
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
      {
        label: "GitHub",
        url: "https://github.com/tomaszmittlener",
        iconClassName: "fa fa-github"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/t_mittlener",
        iconClassName: "fa fa-twitter"
      },
      {
        label: "Email",
        url: "mailto:t.mittlenerj@gmail.com",
        iconClassName: "fa fa-envelope"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/tomasz-mittlener-885768157",
        iconClassName: "fa fa-linkedin"
      }
    ],
    copyright: "Copyright © 2018. @t.mittlener", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#5a76b9", // Used for setting manifest and progress theme colors.
    backgroundColor: "#fff" // Used for setting manifest background color.
  };
