import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Button from 'react-bootstrap/Button';

import Layout from '../components/Layout'

//Import material UI
import Grid from '@material-ui/core/Grid';

//Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMousePointer, faAddressBook, faUserTie, faScroll, faHandshake, faBrain, faArrowRight, faUserPlus, faUserCircle, faCalendarPlus, } from '@fortawesome/free-solid-svg-icons'
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
      <Grid container spacing={3}>
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
                marginTop: '60px',
                backgroundColor: '#ffffffcc',
                paddingBottom: '20px',
                paddingTop: '20px',
                lineHeight: '1',
                justifyContent: 'space-around',
                alignItems: 'left',
                flexDirection: 'column',
                borderRadius: '3%',
              }}
            >
              <h3
                className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  // color: '#2b2523a3',
                  fontBold: 'bold',
                  position: 'static',
                  lineHeight: '1.5',
                  padding: '0.5em',

                }}
              >
                Protect your family’s future with MyTribe
              </h3>
              <p
                // className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{

                  fontSize: '1.75rem',
                  lineHeight: '1.5',
                  padding: '1em',
                }}
              >
                MyTribe brings professional and expert legal advice to your doorstep.<br />No need to take time out of your busy schedule.
              </p>


              <Button variant="primary" style={{
                margin: '35px',

                width: '50%',
                borderRadius: '10px',
                fontSize: '30px',
                padding: '15px',

              }}>
                <a href="#nav1" style={{
                  color: '#ffffff',


                }}>
                  Learn More
                  </a>
              </Button>





            </div>
          </Grid>

        </div>
      </Grid>

      <section className="section section--service">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', }}>
          <h1 style={{
            color: 'black',
            fontSize: '2em',
            fontWeight: '700',
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
                    <Grid item xs={12} className="grid-content icon-content">
                      <img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FGfx-Register.png?alt=media&token=d31f25f6-4b03-44e2-9084-0b78143a9035"} alt="register" />
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
                        Join
                  </h3>

                    </Grid>
                    <Grid><p style={{
                      paddingLeft: '1vw',
                      paddungRight: '1vw',
                      color: 'black',
                      fontSize: '1.125rem',
                      lineHeight: '1',

                    }}>
                      <ul><li>Create an account in seconds.</li> <li>No need to provide a detailed family history.</li></ul></p></Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Grid container spacing={12}>
                    <Grid item xs={12} className="grid-content icon-content">
                      <img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FGfx-Book.png?alt=media&token=0c34eeac-12ee-4d71-96a5-ddf970f2680d"} alt="book" />
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
                        Book
                  </h3>
                    </Grid>
                    <Grid><p style={{
                      // paddingLeft: '1vw',
                      // paddungRight: '1vw',
                      width: '28vw',
                      color: 'black',
                      fontSize: '1.125rem',
                      lineHeight: '1',

                    }}><ol>
                        <li>Simply select the right <a style={{ fontSize: '1.25rem', fontWeight: '500' }} href='https://www.my-tribe.com.au//products' target='_blank'>Package</a>;</li>
                        <li>Pick the time and place for your meeting.</li></ol></p></Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={3} >
                  <Grid container spacing={12}>
                    <Grid item xs={12} className="grid-content icon-content">
                      <img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FGfx-Consultation.png?alt=media&token=0ab3128f-edb9-4260-80f3-6192a97eda77"} alt="Consultation" />
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
                        Meet
                  </h3>
                    </Grid>
                    <Grid><p style={{

                      paddingLeft: '1vw',
                      paddungRight: '1vw',
                      color: 'black',
                      fontSize: '1.125rem',
                      lineHeight: '1',
                    }}><ol><li>One of expert lawyers comes to advise you;</li>
                        <li>Prepare tailored documents. </li></ol></p></Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Grid container spacing={12}>
                    <Grid item xs={12} className="grid-content icon-content">
                      <img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FGfx-Will.png?alt=media&token=f137768d-92fe-4d5b-9b85-90cd2b3677d6"} alt="Will" />
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
                        Complete
                      </h3>
                    </Grid>

                    <Grid><p style={{
                      paddingLeft: '1vw',
                      paddungRight: '1vw',
                      color: 'black',
                      fontSize: '1.125rem',
                      lineHeight: '1',

                    }}>Documents will be finalised on the spot or within 7 days of the meeting. </p></Grid>

                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </section>

      <Grid container spacing={3}>
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

      <section style={{ paddingBottom: '0px', }} className="section section--platform">
        <div className="container-fluid">
          <div className="section">
            <div className="column">
              <Grid style={{
                marginBottom: '5px',
              }} container spacing={12}>
                <Grid item xs={12} className="grid-content icon-content">
                  <h3
                    style={{
                      color: 'black',
                      fontWeight: '700',
                      // fontWeight: '700',
                      // position: 'static',
                      lineHeight: '1',
                      marginBottom: '1em',
                      padding: '1.25em',
                    }}
                  >
                    Why MyTribe?
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
              <Grid item xs={12} className="grid-content icon-content">
                <p style={{
                  color: 'black',
                  fontSize: '1.125rem',
                  lineHeight: '1',
                  padding: '0.5em',
                }}>
                  9 to 5 is time that suits business, but it may not suit you. At MyTribe we understand that our clients can’t simply take time out of their day to fit into a business’s opening hours. We believe it’s time that businesses become flexible to accommodate your needs. We have made obtaining the right advice easy and convenient. With the ability to choose a time, place and even language, it has never been easier to speak to a lawyer who understands you.
                </p>
              </Grid>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: '0px' }} className="section section--Booking">
        <div className="container-fluid">
          <div style={{ padding: '0px', }} className="section">
            <div className="column">
              <Grid style={{
                marginBottom: '20px',
              }} container spacing={12}>
                <Grid item xs={12} sm={12} className="grid-content">
                  <Button variant="primary" href='https://app.my-tribe.com.au/signup' style={{

                    width: '90px',
                    borderRadius: '10px',
                    fontSize: '20px',
                    padding: '10px',
                  }}>
                    Book
                </Button>
                </Grid>
              </Grid>




              {/* styling */}


              <h3 id='nav1' style={{ marginLeft: '2vw', fontSize: '3rem' }}>Join Us</h3>
              <Grid container spacing={12}>
                <Grid item xs={12} sm={4} >

                  <Grid item xs={12} sm={12} style={{ padding: '1.25em' }}>
                    <Grid item xs={12} sm={12} className="full-width-image margin-top-0" style={{
                      backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FMother.jpg?alt=media&token=ed879165-644d-441e-bf76-4f244a56c123)',
                      height: '60vh',
                    }}>



                    </Grid>
                    <div style={{
                      paddingTop: '15px', paddingBottom: '15px', backgroundColor: '#17a2b8', paddingLeft: '2vw', paddingRight: '2vw', borderRadius: '0 0 5% 5%', height: '65vh'


                    }}>

                      <h4 style={{ color: '#ffffff', fontSize: '2rem' }}>Clients</h4>
                      <p style={{ color: '#ffffff' }}>Want to work for a law firm but can’t commit to the fixed hours or long commute to the office. With MyTribe, you get to pick your hours, work when you want, where you want and develop your skills as an expert estate planning lawyer all while earning great money. </p>
                      <Button style={{ marginTop: '17vh', backgroundColor: 'rgba(255, 162, 7)', border: 'none' }}>
                        <Link style={{ color: 'white' }} to="/products">
                          Start Now
              </Link></Button>

                    </div>
                  </Grid>

                </Grid>

                <Grid item xs={12} sm={4} >

                  <Grid item xs={12} sm={12} style={{ padding: '1.25em' }}>
                    <Grid item xs={12} sm={12} className="full-width-image margin-top-0" style={{
                      backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fphoto-of-man-holding-a-book-927022-min.jpg?alt=media&token=bacb71c4-bc2c-4bcc-93a6-ea2084f8a460)',
                      height: '60vh',
                    }}>


                    </Grid>

                    <div style={{
                      paddingTop: '15px', paddingBottom: '15px', backgroundColor: 'rgba(255, 162, 7)', paddingLeft: '2vw', paddingRight: '2vw', borderRadius: '0 0 5% 5%', height: '65vh'




                    }}>

                      <h4 style={{ color: '#ffffff', fontSize: '2rem' }}>Lawyers</h4>
                      <p style={{ color: '#ffffff' }}>Want to work for a law firm but can’t commit to the fixed hours or long commute to the office. With MyTribe, you get to pick your hours, work when you want, where you want and develop your skills as an expert estate planning lawyer all while earning great money. </p>
                      <Button style={{ marginTop: '17vh', backgroundColor: '#17a2b8', border: 'none' }}>
                        <Link style={{ color: 'white' }} to="/lawyer">
                          Join Now
              </Link>
                      </Button>
                    </div>


                  </Grid>




                </Grid>
                <Grid item xs={12} sm={4} >

                  <Grid item xs={12} sm={12} style={{ padding: '1.25em' }}>
                    <Grid item xs={12} sm={12} className="full-width-image margin-top-0" style={{
                      backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Freferrers.jpg?alt=media&token=eb60ad56-71f8-475f-920f-64934eee6254)',
                      height: '60vh',
                    }}>


                    </Grid>

                    <div style={{
                      paddingTop: '15px', paddingBottom: '15px', backgroundColor: '#17a2b8 ', paddingLeft: '2vw', paddingRight: '1.5vw', borderRadius: '0 0 5% 5%', height: '65vh'



                    }}>

                      <h4 style={{ color: '#ffffff', fontSize: '2rem' }}>Referrers</h4>
                      <p style={{ color: '#ffffff' }}>If you have client’s that need an estate plan, but don’t have the time to meet a lawyer.  Or, perhaps you don’t have a trusted lawyer you can refer your valued clients to.  MyTribe allows your organisation to create an account and make bookings on behalf of your clients. One of our lawyers can come to your office or to your client’s home, enabling you to be as involved in the process as you like and ensuring that your client’s get expert advice and an estate plan.</p>
                      <Button style={{ marginTop: '10px', backgroundColor: 'rgba(255, 162, 7)', border: 'none' }}>
                        <Link style={{ color: 'white' }} to="/referrers">
                          Join Now
              </Link>
                      </Button>

                    </div>


                  </Grid>




                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </section>


      <Grid container spacing={3}>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FFamily.jpg?alt=media&token=4e8942b1-f4b4-4026-850f-b572025d8774)',
            backgroundAttachment: `fixed`,
          }}
        >
          <Grid item xs={12} sm={6}
            style={{

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
                // height: '150px',
                lineHeight: '1',
                justifyContent: 'space-around',
                alignItems: 'left',
                padding: '2rem',
                flexDirection: 'column',
                backgroundColor: '#ffffffcc',
                borderRadius: '5%'
              }}
            >
              <h3
                className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{

                  position: 'static',
                  lineHeight: '1.5',
                  padding: '0.5em',
                }}
              >
                Not all wills are the same. You have options. <br />Follow the link to learn more about different types of packages.
              </h3>

              <Button variant="primary" style={{
                margin: '15px',
                width: '50%',
                borderRadius: '30px',
                fontSize: '40px',
                padding: '15px',
              }}>
                <Link style={{ color: 'white' }} to='/products'>Learn More</Link>
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
        markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
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
