import React from "react";
import Helmet from 'react-helmet'
import './index.scss';
import 'normalize.css'
import {
  userName
  ,userDescription
  ,userLocation
  ,userEmail
  ,userPhone
  ,userLinks
  ,skills
  ,langauges
  ,experience
  ,projects
  ,education
  ,siteTitle
  ,siteDescription
  ,siteKeywords
  ,siteURL
} from "../../site-config"

import BirdOne from '../images/BirdOne'
import Logo from '../images/Logo'

import userAvatar from  "../static/images/me.png";
import favicon32  from   "../static/images/me.png";
import favicon16  from   "../static/images/me.png";
import ogImage  from   "../static/images/me.png";

export default () => (
  <div className="container-fluid">
   <Helmet
      title={siteTitle}
      meta={[
        { name: 'description', content: siteDescription },
        { name: 'keywords', content: siteKeywords },
        { property: 'og:url', content: siteURL },
        { property: 'og:image', content: ogImage },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
      ]}
      link={[
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: favicon16 },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon32 }
      ]}
    />
      <main className="main-container">
          <a href="https://www.linkedin.com/in/tomasz-mittlener-885768157/" target="_blank" className="logo_link">
          <Logo className="logo"/>
          </a>

      </main>
</div>
)
