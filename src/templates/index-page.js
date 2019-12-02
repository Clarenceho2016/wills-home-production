import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Button from 'react-bootstrap/Button';

import Layout from '../components/Layout'

//Import material UI
import Grid from '@material-ui/core/Grid';

//Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMousePointer,faAddressBook,faUserTie,faScroll,faHandshake,faBrain,faArrowRight, faUserPlus, faUserCircle, faCalendarPlus, } from '@fortawesome/free-solid-svg-icons'
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
            transform: 'scale(0.6)',
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
                All Day Wills
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
                We speak your language
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
                Experts in the field of law
              </h3>

              <Button variant="primary" style={{
                  margin: '15px',
                  width: '50%',
                  borderRadius: '10px',
                  fontSize: '20px',
                  padding: '15px',
              }}>
                  <Link to="/products" style={{
                      margin: '15px',
                      width: '50%',
                      borderRadius: '10px',
                      fontSize: '20px',
                      color: '#ffffff',
                      padding: '15px',}}>
                Learn More
                  </Link>
              </Button>
            </div>  
        </Grid>
        
        
      </div>
    </Grid>

      <section className="section section--service">
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh', }}>
              <h1 style={{
                  color: '#2b2523a3',
                  fontSize: '2em',
              }}> Your Next Steps </h1>
          </div>
      </section>

    <section className="section section--service">
      <div className="container-fluid">
        <div className="section">
          <div className="column">
            <Grid container spacing={12}>
              <Grid item xs={12} sm={3}>
                <Grid container spacing={12}>
                  <Grid item xs={12}  className="grid-content icon-content">
                    <img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FGfx-Register.png?alt=media&token=d31f25f6-4b03-44e2-9084-0b78143a9035"} alt="register"/>
                  </Grid>
                  <Grid item xs={12} className="grid-content icon-content">
                  <h3
                    style={{
                      color: '#00008b',
                      fontWeight: '400',
                      position: 'static',
                      lineHeight: '1',
                      padding: '.75em',
                    }}
                  >
                    Sign-up
                  </h3>
                  </Grid>  
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Grid container spacing={12}>
                <Grid item xs={12}  className="grid-content icon-content">
                    <img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FGfx-Book.png?alt=media&token=0c34eeac-12ee-4d71-96a5-ddf970f2680d"} alt="book" />
                  </Grid>
                  <Grid item xs={12}  className="grid-content icon-content">
                  <h3
                    style={{
                      color: '#00008b',
                      fontWeight: '400',
                      position: 'static',
                      lineHeight: '1',
                      padding: '.75em',
                    }}
                  >
                    Book
                  </h3>
                  </Grid>  
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3} >
                <Grid container spacing={12}>
                  <Grid item xs={12}  className="grid-content icon-content">
                      <img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FGfx-Consultation.png?alt=media&token=0ab3128f-edb9-4260-80f3-6192a97eda77"} alt="Consultation" />
                  </Grid>
                  <Grid item xs={12}  className="grid-content icon-content">
                  <h3
                    style={{
                      color: '#00008b',
                      fontWeight: '400',
                      position: 'static',
                      lineHeight: '1',
                      padding: '.75em',
                    }}
                  >
                    Consultation 
                  </h3>
                  </Grid>  
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Grid container spacing={12}>
                <Grid item xs={12}  className="grid-content icon-content">
                    <img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FGfx-Will.png?alt=media&token=f137768d-92fe-4d5b-9b85-90cd2b3677d6"} alt="Will" />
                  </Grid>
                  <Grid item xs={12}  className="grid-content icon-content">
                      <h3
                          style={{
                              color: '#00008b',
                              fontWeight: '400',
                              position: 'static',
                              lineHeight: '1',
                              padding: '.75em',
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
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fhome-real-estate-106399-min.jpg?alt=media&token=f8ae6499-4c26-4e0b-b282-7dcb805ee420)`,
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
              <Grid item xs={12}  className="grid-content icon-content">
                  <h3
                    style={{
                      color: '#2b2523a3',
                      fontWeight: '400',
                      position: 'static',
                      lineHeight: '1',
                      marginBottom: '1em',
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
    
    <section style={{padding: '0px'}} className="section section--Booking">
      <div className="container-fluid">
        <div  style={{padding: '0px', margin: '20px'}} className="section">
          <div className="column">
            <Grid style={{
              marginBottom : '20px',
            }} container spacing={12}>
              <Grid item xs={12} sm={12} className="grid-content">
                <Button variant="primary" href='https://app.my-tribe.com.au/signup' style={{
                    margin: '15px',
                    width: '90px',            
                    borderRadius: '10px',
                    fontSize: '20px',
                    padding: '10px',
                }}>
                  Book            
                </Button>
              </Grid>   
            </Grid> 
            <Grid container spacing={12}>
              <Grid item xs={12} sm={6} style={{textAlign: 'center'}}>
                <Grid item xs={12} >
                  <a
                    style={{
                      fontSize: '2em',
                      color: '#3273dc',
                      fontWeight: '400',
                      position: 'static',
                      lineHeight: '1',
                      padding: '1.25em',
                    }}
                    >
                    For Clients 
                  </a>
                </Grid>
                <Grid item xs={12} sm={12} style={{padding: '1.25em'}}>
                  <Grid item xs={12} sm={12} className="full-width-image margin-top-0" style={{
                      backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FMother.jpg?alt=media&token=ed879165-644d-441e-bf76-4f244a56c123)',
                      height: '60vh',
                      }}>
                  </Grid>          
                </Grid>
                <Grid item xs={12} style={{textAlign: 'left', margin: '20px'}}>
                  <h3
                    style={{
                      color: '#2b2523a3',
                      fontWeight: '400',
                      position: 'static',
                      fontSize: '2rem'
                    }}
                  >
                    Who do you need a will ? 
                  </h3>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'left', margin: '20px'}}> 
                  <h4
                    style={{
                      color: '#2b2523a3',
                      fontWeight: '400',
                      position: 'static',
                      fontSize: '1.5rem'
                    }}
                  >
                    Ask the right questions when it comes to your personal will
                  </h4>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'left', margin: '20px'}}> 
                  <Link to="/products"
                    style={{
                      color: '#3273dc',
                      fontWeight: '400',
                      position: 'static',
                      fontSize: '1.5rem'
                    }}
                  >
                   Learn More
                   <FontAwesomeIcon style={{ marginLeft: '20px'}} icon={faArrowRight} />
                  </Link>
                  
                </Grid>  
              </Grid>
              
              <Grid item xs={12} sm={6} style={{textAlign: 'center'}}>
                <Grid item xs={12}>
                  <a
                    style={{
                      color: '#3273dc',
                      fontWeight: '400',
                      fontSize: '2em',
                      position: 'static',
                      lineHeight: '1',
                      padding: '1.25em',
                    }}
                    >
                    For Referrers
                  </a>
                </Grid>
                <Grid item xs={12} sm={12} style={{padding: '1.25em'}}>
                  <Grid item xs={12} sm={12} className="full-width-image margin-top-0" style={{
                      backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fphoto-of-man-holding-a-book-927022-min.jpg?alt=media&token=bacb71c4-bc2c-4bcc-93a6-ea2084f8a460)',
                      height: '60vh',
                      }}>
                  </Grid> 
                </Grid>
                <Grid item xs={12} style={{textAlign: 'left', margin: '20px'}}>
                  <h3
                    style={{
                      color: '#2b2523a3',
                      fontWeight: '400',
                      position: 'static',
                      fontSize: '2rem'
                    }}
                  >
                    Who do you need a will ? 
                  </h3>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'left', margin: '20px'}}> 
                  <h4
                    style={{
                      color: '#2b2523a3',
                      fontWeight: '400',
                      position: 'static',
                      fontSize: '1.5rem'
                    }}
                  >
                    Ask the right questions when it comes to your personal will
                  </h4>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'left', margin: '20px'}}> 
                  <a
                    style={{
                      color: '#3273dc',
                      fontWeight: '400',
                      position: 'static',
                      fontSize: '1.5rem'
                    }}
                  >
                   Learn More
                   <FontAwesomeIcon style={{ marginLeft: '20px'}} icon={faArrowRight} />
                  </a>          
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
          backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FFamily.jpg?alt=media&token=4e8942b1-f4b4-4026-850f-b572025d8774)',
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
            transform: 'scale(0.4)',
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
                Learn about our packages
              </h3>

              <Button variant="primary" style={{
                  margin: '15px',
                  width: '50%',
                  borderRadius: '30px',
                  fontSize: '40px',
                  padding: '15px',
              }}>
                Learn More          
              </Button>
            </div>  
        </Grid>
        
        
      </div>
    </Grid>

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
