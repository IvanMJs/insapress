/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
const path = require('path');

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            services: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/services/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
            team: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/team/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
            testimonials: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/testimonials/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
          }
        `,
      ).then((result) => {
        result.data.services.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/service.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.team.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/team.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.testimonials.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/testimonial.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        resolve();
      }),
    );
  });
};