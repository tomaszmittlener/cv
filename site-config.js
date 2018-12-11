const path = require('path');

module.exports = {
    name:"mittlener.com",
    siteTitle: "Tomasz Mittlener ,Frontend developer,Javascript,ReactJs,Poland", // Site title.
    siteLogo: `${__dirname}/src/static/images/me.png`,
    siteUrl: "https://mittlener.com", // Domain of your website without pathPrefix.
    siteKeyword:"Tomasz Mittlener, software engineer, frontend developer, javascript, react js, vue js, node js, graphql, jquery, lodash, javascript expert, ES6, software engineer, web developer, front end developer, bootstrap, material design, styled components, gatsby, react gatsby.",
    siteDescription: "Frontend developer, I have designed and developed fast and responsive web applications using Javascript, ReactJS, Redux, NodeJs, GraphQl, Bootstrap, Gatsby", // Website description used for RSS feeds/meta description tag.
    googleAnalyticsID: "UA-130772433-1", // GA tracking ID.
    userName: "Tomasz mittlener", // Username to display in the author segment.
    userTwitter: "t_mittlener", // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "Gdańsk, Poland", // User location to display in the author segment.
    userAvatar: "./src/static/images/me.png", // User avatar to display in the author segment.
    favicon32:`./src/static/images/me.png`,
    favicon16:`./src/static/images/me.png`,
    ogImage: `./src/static/images/me.png`,
    userDescription: "Frontend developer, I have designed and developed fast and responsive web applications using Javascript, ReactJS, Redux, NodeJs, GraphQl, Bootstrap, Gatsby, Styled Components, Vue.js", // Website description used for RSS feeds/meta description tag.
    userPhone:"+48 696 412 010",
    userEmail:"t.mittlener@gmail.com",
    skills:[
        {
            name:"Javascript",
            rating: "8"
        },
        {
            name:"HTML",
            rating: "8"
        },
        {
            name:"ReactJs",
            rating: "9"
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
            position:"Software Enginer",
            company: "Company Pvt. Ltd.",
            current:true,
            startDate: "March 2017",
            endDate: "current",
            overview:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            position:"Software Enginer ",
            company: "Company 2 Pvt. Ltd.",
            current:false,
            startDate: "March 2017",
            endDate: "March 2017",
            overview:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            position:"Software Enginer",
            company: "Company 3 Pvt. Ltd.",
            current:false,
            startDate: "March 2017",
            endDate: "March 2017",
            overview:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            position:"Software Enginer",
            company: "Company 4 Pvt. Ltd.",
            current:false,
            startDate: "March 2017",
            endDate: "March 2017",
            overview:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        }
    ],
    education:[
        {
            college:"Some College of Engineering 1",
            degree:"Compouter Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: true,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            college:"Some College of Engineering 2",
            degree:"Compouter Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: false,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            college:"Some College of Engineering 3",
            degree:"Compouter Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: false,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            college:"Some College of Engineering 4",
            degree:"Compouter Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: false,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            college:"Some College of Engineering 5",
            degree:"Compouter Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: false,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
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
