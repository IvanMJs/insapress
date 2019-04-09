/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

const Footer = props => (
  <div className="footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer">
            <h3 className="footer-title">{props.data.site.siteMetadata.title}</h3>
            <ul className="footer-menu">
              <li>
                {' '}
                <Link to="/">Inicio</Link>
              </li>
              <li>
                {' '}
                <Link to="/contact">Contacto</Link>
              </li>
              <li className="copyright">
                ©
{' '}
{new Date().getFullYear()}
{' '}
{props.data.site.siteMetadata.title}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
