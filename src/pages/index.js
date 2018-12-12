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
import Baloon from '../images/Baloon'
import CloudOne from '../images/CloudOne'
import CloudTwo from '../images/CloudTwo'
import Sun from '../images/Sun'

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
          {/*<Sun className="sun"/>*/}
          {/*<CloudOne className="cloud cloud__one"/>*/}
          {/*<CloudTwo className="cloud cloud__two"/>*/}
          {/*<Baloon className="baloon_img"/>*/}
          <a href="https://www.linkedin.com/in/tomasz-mittlener-885768157/" target="_blank" className="logo">
              <BirdOne className="logo__bird"/>
              <Logo className="logo__text"/>
          </a>

      </main>
</div>
)
