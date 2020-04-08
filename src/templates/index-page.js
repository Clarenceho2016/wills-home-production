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
                // backgroundColor: '#ffffffcc',
                backgroundColor: 'rgba(255,255,255,0.4)',
                paddingBottom: '20px',
                paddingTop: '20px',
                lineHeight: '1',
                justifyContent: 'space-around',
                alignItems: 'left',
                flexDirection: 'column',

              }}
            >
              <h2
                className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  // color: '#2b2523a3',

                  position: 'static',
                  lineHeight: '1.5',
                  padding: '0.5em',
                  color: '#152189',
                  fontWeight: '700',
                  fontSize: '3rem',
                }}
              >
                Protect your family’s future with MyTribe
              </h2>
              <p
                // className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{

                  fontSize: '1.75rem',
                  lineHeight: '1.5',
                  padding: '1em',
                }}
              >
                MyTribe brings professional and expert legal advice to your doorstep. Simply pick a time and place that suits you and one of our lawyers will take care of the rest!
              </p>

              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Button variant="primary" style={{
                  margin: '35px',

                  width: '40%',
                  borderRadius: '10px',
                  fontSize: '30px',
                  padding: '15px',

                }}>
                  <a href="https://app.my-tribe.com.au/signup" target='_blank' style={{
                    color: '#ffffff',
                    borderRadius: '10px',

                  }}>
                    Book Today
                  </a>
                </Button>
                <Button variant="primary" style={{
                  margin: '35px',
                  backgroundColor: '#8080804d',
                  borderRadius: '10px',
                  width: '40%',
                  borderRadius: '10px',
                  fontSize: '30px',
                  padding: '15px',
                  border: 'none'

                }}>
                  <a href="#nav1" style={{
                    color: '#ffffff',


                  }}>
                    Learn More
                  </a>
                </Button>
              </div>



            </div>
          </Grid>

        </div>
      </Grid>

      {/* <section style={{ paddingBottom: '0px', }} className="section section--service">
        <div id='nav1' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <h1 style={{
            color: 'black',
            fontSize: '2em',
            fontWeight: '700',
          }}> Your Next Steps </h1>
        </div>
      </section> */}

      <section style={{ paddingBottom: '0px', }} className="section section--service">
        <div className="container-fluid">
          <div id='nav1' className="section">
            <div className="column">
              <Grid style={{
                marginBottom: '5px',
              }} container spacing={12}>
                <Grid item xs={12} className="grid-content icon-content">
                  <h2
                    style={{

                      fontWeight: '700',
                      lineHeight: '1',
                      marginBottom: '1em',
                      color: '#152189',
                      paddingTop: '0',
                      fontSize: '3rem',
                    }}
                  >
                    How it works
                  </h2>
                </Grid>
              </Grid>

              <Grid container spacing={12}>
                <Grid item xs={12} sm={3}>
                  <Grid container spacing={12}>
                    <Grid item xs={12} className="grid-content icon-content">
                      <img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FGfx-Register.png?alt=media&token=d31f25f6-4b03-44e2-9084-0b78143a9035"} alt="register" />
                    </Grid>

                    <Grid item xs={12} className="grid-content icon-content">
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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


                        <p style={{
                          paddingLeft: '1.5vw',
                          marginRight: '3vw',
                          color: 'black',
                          fontSize: '1.125rem',
                          lineHeight: '1.5',


                        }}>
                          Create an account in seconds. There is no need to provide a detailed family history our lawyers will know the right questions to ask.
                        </p>
                      </div>
                    </Grid>

                  </Grid>
                </Grid>


                <Grid item xs={12} sm={3}>
                  <Grid container spacing={12}>
                    <Grid item xs={12} className="grid-content icon-content">
                      <img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FGfx-Book.png?alt=media&token=0c34eeac-12ee-4d71-96a5-ddf970f2680d"} alt="book" />
                    </Grid>
                    <Grid item xs={12} className="grid-content icon-content">
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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

                        <p style={{
                          marginLeft: '2.5vw',
                          paddungRight: '2vw',

                          color: 'black',
                          fontSize: '1.125rem',
                          lineHeight: '1.5',

                        }}>
                          Simply select the <a style={{ fontWeight: '500' }} href='https://www.my-tribe.com.au//products' target='_blank'>Package</a> and set the time and place for your meeting.
                            </p></div></Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={3} >
                  <Grid container spacing={12}>
                    <Grid item xs={12} className="grid-content icon-content">
                      <img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FGfx-Consultation.png?alt=media&token=0ab3128f-edb9-4260-80f3-6192a97eda77"} alt="Consultation" />
                    </Grid>
                    <Grid item xs={12} className="grid-content icon-content">
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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

                        <p style={{

                          paddingLeft: '1.5vw',
                          paddungRight: '2vw',
                          color: 'black',
                          fontSize: '1.125rem',
                          lineHeight: '1.5',
                        }}>One of our expert lawyers comes to you, explains your options and prepares tailored documents that will protect your loved one’s future.
                            </p>  </div></Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Grid container spacing={12}>
                    <Grid item xs={12} className="grid-content icon-content">
                      <img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FGfx-Will.png?alt=media&token=f137768d-92fe-4d5b-9b85-90cd2b3677d6"} alt="Will" />
                    </Grid>
                    <Grid item xs={12} className="grid-content icon-content">
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
                        <p style={{
                          paddingLeft: '1.5vw',
                          paddungRight: '2vw',
                          color: 'black',
                          fontSize: '1.125rem',
                          lineHeight: '1.5',

                        }}>Documents will be finalised on the spot or within 7 days of the meeting. </p></div></Grid>

                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </section >

      <Grid container spacing={3}>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fhouse.png?alt=media&token=380cdadb-bef8-4ebc-8066-f0f87a827803)`,
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
                  {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}> */}
                  <h3
                    style={{
                      fontWeight: '700',
                      lineHeight: '1',
                      marginBottom: '1em',
                      color: '#152189',
                      paddingTop: '0',
                      fontSize: '3rem',
                    }}
                  >
                    Why MyTribe?
                  </h3>

                </Grid>


                <Grid item xs={12} className="grid-content icon-content">

                  <div style={{
                    marginTop: '2vh',
                    color: 'black',
                    fontSize: '1.125rem',
                    lineHeight: '1.5',
                    width: '50vw',
                    position: 'center',
                    paddingBottom: '4em',
                  }}>
                    <p>Nine to five is time that suits business, but it may not suit you. At MyTribe we understand that our clients can’t simply take time out of their day to fit into a business’s opening hours. </p>
                    <p><br />We believe it’s time that businesses become flexible to accommodate your needs. We have made obtaining the right advice easy and convenient. With the ability to choose a time, place and even language, it has never been easier to speak to a lawyer who understands you.</p>
                  </div>
                  {/* </div> */}
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
                        <Typography variant="h5" component="h3" style={{
                          color: '#152189',
                          fontWeight: '600'
                        }}>
                          Professional
                     </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} className="grid-content">
                        <Typography component="p">
                          We are a law firm with a team of qualified professionals.
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
                        <Typography variant="h5" component="h3" style={{
                          color: '#152189',
                          fontWeight: '600'
                        }}>
                          Knowledge
                     </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} className="grid-content">
                        <Typography component="p">
                          Our lawyers have demonstrated experience and a deep understanding of all things relevant to creating an estate plan.
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
                        <Typography variant="h5" component="h3" style={{
                          color: '#152189',
                          fontWeight: '600'
                        }}>
                          Understanding
                     </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} className="grid-content">
                        <Typography component="p">
                          We speak your language, we understand your concerns, we listen and we implement.
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
      {/* <section style={{ padding: '0px' }} className="section section--Booking">
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



              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h3 style={{
                  color: 'black',
                  fontWeight: '700',

                  position: 'center',
                  lineHeight: '1',
                  padding: '0.5em',

                  fontSize: '3rem',
                }}>Join Us</h3></div>
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
                      <Button style={{ marginTop: '18vh', backgroundColor: 'rgba(255, 162, 7)', border: 'none' }}>
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
                      <Button style={{ marginTop: '18vh', backgroundColor: '#17a2b8', border: 'none' }}>
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

      </section> */}

      <section style={{ padding: '0px' }} className="section section--Booking">
        <div className="container-fluid">
          <div style={{ padding: '0px', margin: '20px' }} className="section">
            <div className="column">
              <Grid style={{
                marginBottom: '20px',
              }} container spacing={12}>
                <Grid item xs={12} sm={12} className="grid-content">
                  <Button variant="primary" href='https://app.my-tribe.com.au/signup' style={{
                    //margin: '15px',
                    width: '90px',
                    borderRadius: '10px',
                    fontSize: '20px',
                    padding: '3px',

                    //height: '37px',
                    // margin: '10px',
                    // color: 'white',
                    // fontSize: '1em',
                    // borderColor: '#FFF',
                    // borderRadius: '10px',

                    // backgroundColor: '#007bff',
                  }}>
                    Book
                </Button>
                </Grid>
              </Grid>



              <h3 style={{ display: 'flex', justifyContent: 'center', fontSize: '3rem', marginBottom: '2vh' }}>Join us</h3>
              <Grid container spacing={12}>
                <Grid item xs={12} sm={4} >

                  <Grid item xs={12} sm={12} >
                    <Grid item xs={12} sm={12} className="full-width-image margin-top-0" style={{
                      backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fclient-play-kids.png?alt=media&token=abad257b-1c55-4631-9f54-a8770057c0fc)',
                      height: '60vh',
                    }}>




                    </Grid>
                    <div style={{
                      paddingTop: '15px', paddingBottom: '15px', backgroundColor: '#007bff', paddingLeft: '2vw'

                    }}>

                      <h4 style={{ color: '#ffffff', fontSize: '2rem' }}>Clients</h4>
                      <p style={{ color: '#ffffff' }}>Book a consultation today.</p>
                      <Button style={{ marginTop: '5px', backgroundColor: '#17a2b8', border: 'none' }}>
                        <Link style={{ color: 'white' }} to="/clients" >
                          Start Now
              </Link></Button>

                    </div>
                  </Grid>

                </Grid>

                <Grid item xs={12} sm={4} >

                  <Grid item xs={12} sm={12} style={{ marginLeft: '1.25em', marginRight: '1.25em' }}>
                    <Grid item xs={12} sm={12} className="full-width-image margin-top-0" style={{
                      backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Flawyer-h.png?alt=media&token=5dbf65a8-7279-4f22-8691-cdbb496fda18)',
                      height: '60vh',
                    }}>


                    </Grid>

                    <div style={{
                      paddingTop: '15px', paddingBottom: '15px', backgroundColor: 'rgba(255, 162, 7)', paddingLeft: '2vw'



                    }}>

                      <h4 style={{ color: '#ffffff', fontSize: '2rem' }}>Lawyers</h4>
                      <p style={{ color: '#ffffff' }}>Join as a lawyer on the platform.</p>
                      <Button style={{ marginTop: '5px', backgroundColor: '#17a2b8', border: 'none' }}>
                        <Link style={{ color: 'white' }} to="/lawyer">
                          Join Now
              </Link>
                      </Button>
                    </div>


                  </Grid>




                </Grid>
                <Grid item xs={12} sm={4} >

                  <Grid item xs={12} sm={12} >
                    <Grid item xs={12} sm={12} className="full-width-image margin-top-0" style={{
                      backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Freferee-h.png?alt=media&token=ba20ef31-d92d-4c78-9757-dbe3b3756b80)',
                      height: '60vh',
                    }}>


                    </Grid>

                    <div style={{
                      paddingTop: '15px', paddingBottom: '15px', backgroundColor: '#152189 ', paddingLeft: '2vw'



                    }}>

                      <h4 style={{ color: '#ffffff', fontSize: '2rem' }}>Referrers</h4>
                      <p style={{ color: '#ffffff' }}>Become a referrer on the platform.</p>
                      <Button style={{ marginTop: '5px', backgroundColor: '#17a2b8', border: 'none' }}>
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
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fhp-t.png?alt=media&token=71cdc880-1fc6-4b1a-b26d-e2cbf15168c6)',
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

                paddingBottom: '20px',
                paddingTop: '20px',
                lineHeight: '1',
                justifyContent: 'space-around',
                alignItems: 'left',
                flexDirection: 'column',
                backgroundColor: 'rgba(255,255,255,0.4)',


              }}
            >
              <h2
                className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  // color: '#2b2523a3',
                  position: 'static',
                  lineHeight: '1.5',
                  padding: '0.5em',
                  color: '#152189',
                  fontWeight: '700',
                  fontSize: '3rem',
                }}
              >
                Not all wills are the same.
              </h2>
              <p style={{

                fontSize: '1.75rem',
                lineHeight: '1.5',
                padding: '1em',
              }}>You have options. Follow the link below to learn more about different types of packages.</p>
              <div style={{

                display: 'flex',

                position: 'center',
                justifyContent: 'center'
              }}>
                <Button variant="primary" style={{
                  // margin: '15px',
                  // display: 'flex',

                  // width: '40%',
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  // borderRadius: '10px',
                  // fontSize: '1.5em',
                  //padding: '8px',
                  margin: '35px',

                  width: '40%',
                  borderRadius: '10px',
                  fontSize: '30px',
                  padding: '15px',
                }}>
                  <Link style={{ color: 'white' }} to='/products'>Learn More</Link>
                </Button>
              </div>
            </div>
          </Grid>


        </div>
      </Grid>

    </div >
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
