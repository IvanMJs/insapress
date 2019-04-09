/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
// import { StaticQuery, graphql } from 'gatsby';
// eslint-disable-next-line linebreak-style
// import Helmet from 'react-helmet'
// import MenuMobile from '../components/MenuMobile';
import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';

import '../scss/style.scss';

// eslint-disable-next-line arrow-parens
const Layout = props => (
    <React.Fragment>
      <SEO />
      <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
        <div id="wrapper" className="wrapper">
          <Header />
          {props.children}
        </div>
        <Footer />
        <SubFooter />
      </div>
    </React.Fragment>
);

export default Layout;
