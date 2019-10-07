import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Button from 'react-bootstrap/Button';

import Layout from '../components/Layout'

//Import material UI
import Grid from '@material-ui/core/Grid';

//Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMousePointer,faAddressBook,faUserTie,faScroll } from '@fortawesome/free-solid-svg-icons'




export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <Grid container  spacing={3}>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundAttachment: `fixed`,
        }}
      >
        <Grid item xs={12} sm={6}
          style={{
            backgroundColor : '#ffffffcc',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'scale(0.8)',
          }}
        >
          <div
              style={{
                display: 'flex',
                height: '150px',
                lineHeight: '1',
                justifyContent: 'space-around',
                alignItems: 'left',
                flexDirection: 'column',
              }}
            >
              <h3
                className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  color: '#2b2523a3',
                  fontWeight: '400',
                  position: 'static',
                  lineHeight: '1',
                  padding: '0.25em',
                }}
              >
                Wills in a Day.
              </h3>
              <h3
                className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  color: '#2b2523a3',
                  fontWeight: '400',
                  position: 'static',
                  lineHeight: '1',
                  padding: '0.25em',
                }}
              >
                Wills in a week.
              </h3>
              <h3
                className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  color: '#2b2523a3',
                  fontWeight: '400',
                  position: 'static',
                  lineHeight: '1',
                  padding: '0.25em',
                }}
              >
                We come to you.
              </h3>

              <Button variant="primary" style={{
                  margin: '15px',
                  width: '50%',
                  borderRadius: '10px',
                  fontSize: '20px',
                  padding: '15px',
              }}>
                Learn More
              
              </Button>
            </div>  
        </Grid>
        
        
      </div>
    </Grid>
    
    <section className="section section--service">
      <div className="container-fluid">
        <div className="section">
          <div className="column">
            <Grid container spacing={12}>
              <Grid item xs={12} sm={3}>
                <Grid container spacing={12}>
                  <Grid item xs={12}  className="grid-content">
                    <FontAwesomeIcon icon={faMousePointer} />
                  </Grid>
                  <Grid item xs={12} className="grid-content">
                  <h3
                    className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                    style={{
                      color: '#2b2523a3',
                      fontWeight: '400',
                      position: 'static',
                      lineHeight: '1',
                      padding: '1.25em',
                    }}
                  >
                    Register
                  </h3>
                  </Grid>  
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Grid container spacing={12}>
                  <Grid item xs={12} className="grid-content">
                    <FontAwesomeIcon icon={faAddressBook} />
                  </Grid>
                  <Grid item xs={12} className="grid-content">
                  <h3
                    className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                    style={{
                      color: '#2b2523a3',
                      fontWeight: '400',
                      position: 'static',
                      lineHeight: '1',
                      padding: '1.25em',
                    }}
                  >
                    Book
                  </h3>
                  </Grid>  
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3} >
                <Grid container spacing={12}>
                  <Grid item xs={12} className="grid-content">
                    <FontAwesomeIcon icon={faUserTie} />
                  </Grid>
                  <Grid item xs={12}  className="grid-content">
                  <h3
                    className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                    style={{
                      color: '#2b2523a3',
                      fontWeight: '400',
                      position: 'static',
                      lineHeight: '1',
                      padding: '1.25em',
                    }}
                  >
                    Consultation 
                  </h3>
                  </Grid>  
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Grid container spacing={12}>
                  <Grid item xs={12} className="grid-content">
                    <FontAwesomeIcon icon={faScroll} />
                  </Grid>
                  <Grid item xs={12} className="grid-content">
                  <h3
                    className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                    style={{
                      color: '#2b2523a3',
                      fontWeight: '400',
                      position: 'static',
                      lineHeight: '1',
                      padding: '1.25em',
                    }}
                  >
                    Will 
                  </h3>
                  </Grid>  
                </Grid>
              </Grid>    
            </Grid>
          </div>
        </div>     
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
