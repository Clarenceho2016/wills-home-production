import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Button from 'react-bootstrap/Button';

import Layout from '../components/Layout'

//Import material UI
import Grid from '@material-ui/core/Grid';

//Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMousePointer,faAddressBook,faUserTie,faScroll,faHandshake,faBrain } from '@fortawesome/free-solid-svg-icons'
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';



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

    <Grid container  spacing={3}>
      <div
        className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            height: '60vh',
            backgroundPosition: 'center',
          }}
        >  
      </div>
    </Grid>
      
    <section  style={{paddingBottom: '0px',}} className="section section--platform">
      <div className="container-fluid">
        <div className="section">
          <div className="column">
            <Grid style={{
              marginBottom : '20px',
            }} container spacing={12}>
              <Grid item xs={12} sm={12} className="grid-content">
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
                    Why choose Wills platform? 
                  </h3>
              </Grid>
            </Grid>
            <Grid container spacing={12}>
              <Grid item xs={12} sm={4} className="grid-content">
                <Paper>
                  <Grid container spacing={12} style={{
                    padding: '1.25em',
                  }}>
                    <Grid item xs={12} sm={12} className="grid-content">
                      <FontAwesomeIcon style={{
                        padding: '20px',
                        borderRadius: '50%',
                        width: '100px',
                        height: '100px',
                        position: 'absolute',
                        backgroundColor: '#ffa207d1',
                        marginTop: '-63px',
                      }} icon={faUserTie} />
                    </Grid>               
                    <Grid item xs={12} style={{
                      padding: '10px',
                    }} sm={12} className="grid-content">
                      <Typography variant="h5" component="h3">
                        Professional
                     </Typography> 
                    </Grid>
                    <Grid item xs={12} sm={12} className="grid-content">
                      <Typography component="p">
                        We're experts at drafing Wills.
                    </Typography>
                    </Grid>
                  </Grid>     
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} className="grid-content">
                <Paper>
                  <Grid container spacing={12} style={{
                    padding: '1.25em',
                  }}>
                    <Grid item xs={12} sm={12} className="grid-content">
                      <FontAwesomeIcon style={{
                        padding: '20px',
                        borderRadius: '50%',
                        width: '100px',
                        height: '100px',
                        position: 'absolute',
                        backgroundColor: '#ffa207d1',
                        marginTop: '-63px',
                      }} icon={faBrain} />
                    </Grid>               
                    <Grid item xs={12} style={{
                      padding: '10px',
                    }} sm={12} className="grid-content">
                      <Typography variant="h5" component="h3">
                        Knowledge
                     </Typography> 
                    </Grid>
                    <Grid item xs={12} sm={12} className="grid-content">
                      <Typography component="p">
                        We've got the answers to your pool of questions
                    </Typography>
                    </Grid>
                  </Grid>     
                </Paper>    
              </Grid>
              <Grid item xs={12} sm={4} className="grid-content">
                <Paper>
                  <Grid container spacing={12} style={{
                    padding: '1.25em',
                  }}>
                    <Grid item xs={12} sm={12} className="grid-content">
                      <FontAwesomeIcon style={{
                        padding: '20px',
                        borderRadius: '50%',
                        width: '100px',
                        height: '100px',
                        position: 'absolute',
                        backgroundColor: '#ffa207d1',
                        marginTop: '-63px',
                      }} icon={faHandshake} />
                    </Grid>               
                    <Grid item xs={12} style={{
                      padding: '10px',
                    }} sm={12} className="grid-content">
                      <Typography variant="h5" component="h3">
                        Understanding
                     </Typography> 
                    </Grid>
                    <Grid item xs={12} sm={12} className="grid-content">
                      <Typography component="p">
                        We understand and we listen
                    </Typography>
                    </Grid>
                  </Grid>     
                </Paper>       
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </section>      
    
    <section style={{padding: '0px',}} className="section section--Booking">
      <div className="container-fluid">
        <div  style={{padding: '0px',}} className="section">
          <div className="column">
            <Grid style={{
              marginBottom : '20px',
            }} container spacing={12}>
              <Grid item xs={12} sm={12} className="grid-content">
                <Button variant="primary" style={{
                    margin: '15px',
                    
                    borderRadius: '10px',
                    fontSize: '20px',
                    padding: '15px',
                }}>
                  Book            
                </Button>
              </Grid>   
            </Grid> 
            <Grid container spacing={12}>
              <Grid style={{justifyContent: 'right', textAlign: 'right',}} item xs={6} >
                <a
                  className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                  style={{
                    color: '#2b2523a3',
                    fontWeight: '400',
                    position: 'static',
                    lineHeight: '1',
                    padding: '1.25em',
                  }}
                  >
                  For Clients 
                </a>
              </Grid>
              <Grid item xs={6} >
                <a
                  className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                  style={{
                    color: '#2b2523a3',
                    fontWeight: '400',
                    position: 'static',
                    lineHeight: '1',
                    padding: '1.25em',
                  }}
                  >
                  For Lawyers 
                </a>
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
