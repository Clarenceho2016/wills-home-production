import React from 'react'
import Layout from '../components/Layout'
import Link from "gatsby-link";
import Button from "react-bootstrap/Button";
import Grid from "@material-ui/core/Grid";
import bg from '../../static/img/client-1.png'

const clients = () => {
    return (
        <Layout>
            <div
                className="full-width-image margin-top-0"
                style={{
                    marginTop: '100vh',

                    backgroundImage: `url(${
                        bg
                        })`,

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
                    <div style={{


                        display: 'flex',
                        padding: '0.5em',
                        marginTop: '60px',

                        paddingBottom: '20px',
                        paddingTop: '20px',


                        flexDirection: 'column',

                    }}>
                        <h2
                            className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                            style={{

                                // color: '#152189',
                                color: 'white',
                                padding: '1rem',
                                position: 'static',
                                lineHeight: '1.5',
                                fontSize: '3rem',
                                fontWeight: '700',



                            }}
                        >
                            Too busy to go to a law firm but want expert legal advice?
        </h2>
                        <p style={{
                            color: 'white',
                            fontSize: '1.75rem',
                            lineHeight: '1.5',
                            padding: '1em',
                        }}>Make a booking and one of our expert lawyers will come to you whether it be at your home or in your office, the choice is yours. </p>

                        <Button variant="primary" style={{
                            margin: '35px',
                            backgroundColor: '#48D1CC',
                            border: 'none',
                            width: '40%',
                            borderRadius: '10px',
                            fontSize: '30px',
                            padding: '15px',

                        }}>
                            <a href="https://app.my-tribe.com.au/signup" target='_blank' style={{
                                color: '#ffffff',
                                borderRadius: '10px',

                            }}>
                                Join Today
                  </a>
                        </Button></div>
                </Grid>
            </div>
            <section className="section" style={{ marginTop: '0.5rem', marginBottom: '0.8rem', }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75em' }}>For comprehensive estate planning packages</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
                    <div style={{ marginTop: '30px', marginRight: '30px', }}><ul style={{ fontSize: '1.25rem' }}><li className='listItem' > Flexible options to suit your needs</li><br />
                        <li className='listItem'> No matter what your circumstances we have a package for you</li><br />
                        <li className='listItem'> Difficult conversations made easy</li><br />
                        <li className='listItem'> Tailored expert advice</li><br /></ul></div>
                    <div >

                        <img style={{ position: 'center', height: '250px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2F64665-min.jpg?alt=media&token=43b855d0-aeca-4791-9ecd-21cfa2c3c122' alt="register"></img>

                    </div>
                </div>
            </section>
            <section className="section" style={{ marginTop: '0.5rem', marginBottom: '0.8rem', }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75em' }}>Steps to make a booking</h1>
                {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}> */}
                <Grid container spacing={12}>
                    <Grid item xs={12} sm={4} >

                        <Grid item xs={12} sm={12} style={{ marginLeft: '1em', marginRight: '1em' }} >
                            <div style={{
                                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                                alignItems: 'center'
                            }}>

                                <h1 style={{ fontWeight: '600', fontSize: '1.5rem' }}>1. Make a booking</h1>
                                <img style={{ height: '180px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2F2300224.jpg?alt=media&token=d33f3309-85ab-42b1-ac3b-24275675b134' alt="register"></img>
                                <ul className='a' style={{ fontSize: '1.25rem', width: '80%', marginTop: '25px' }}><li >Let us know when and where and we will take care of the rest</li><br />
                                    <li >We speak your language. If English isn’t your fist language, we can arrange for a lawyer who speaks your native tongue to meet with you.</li><br />
                                    <li>Secure payment options</li><br /><br /></ul>
                            </div>

                        </Grid>

                    </Grid>

                    <Grid item xs={12} sm={4} >

                        <Grid item xs={12} sm={12} style={{ marginLeft: '1em', marginRight: '1em' }}>
                            <div style={{
                                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <h1 style={{ fontWeight: '600', fontSize: '1.5rem' }}>2. Meet your lawyer</h1>
                                <img style={{ position: 'center', height: '180px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2F2696087.jpg?alt=media&token=6b850bbe-1683-467b-9b21-6c701ef66232' alt="register"></img>
                                <ul className='a' style={{ fontSize: '1.25rem', width: '80%', marginTop: '25px' }}><li>One of our expert lawyers will meet with you in the comfort of your home, your office or by video conference.</li><br />
                                    <li >No time limit, the meetings take as long as they need to.</li><br />
                                    <li>All of your questions will be answered</li><br /></ul>

                            </div>


                        </Grid>




                    </Grid>

                    <Grid item xs={12} sm={4} >

                        <Grid item xs={12} sm={12} style={{ marginLeft: '1em', marginRight: '1em' }} >
                            <div style={{
                                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <h1 style={{ fontWeight: '600', fontSize: '1.5rem' }}>3. Task completed</h1>
                                <img style={{ position: 'center', height: '180px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FOE5MLR0-min.jpg?alt=media&token=87dd0138-61a0-4c56-b7e7-5699d1014e38' alt="register"></img>
                                <ul className='a' style={{ fontSize: '1.25rem', width: '80%', marginTop: '25px' }}><li>Your wills are prepared on the spot or within 7 days</li><br />
                                    <li style={{}}>Our lawyers can help by witnessing the documents</li><br />
                                    <li>Store a copy of your will securely on our platform</li><br /></ul>
                            </div>


                        </Grid>




                    </Grid>
                </Grid>


                {/* /</div> */}
            </section>
            <section className="section" style={{ marginTop: '0.5rem', marginBottom: '0.8rem', }}>

                <div style={{ display: 'flex' }}>
                    <Grid item xs={12} sm={4}>
                        <img style={{ marginLeft: '5vw' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FCanva%20-%20Health%20Insurance%20Manager%20Talking%20to%20a%20Couple-min.jpg?alt=media&token=3e1929f8-5d04-4fef-9fc2-976bc3fe9c18' alt="register" ></img>
                    </Grid>
                    <Grid item xs={12} sm={8} >
                        <div style={{ alignItems: 'left', marginLeft: '12vw', }}>
                            {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', }}> */}
                            <div>
                                <h2 style={{ lineHeight: '1.5em', fontSize: '1.25rem', fontWeight: 'bold' }}>Create your booking today<br /><br /> </h2>
                                <h3 style={{ lineHeight: '1.5em', }}>With MyTribe, you could experience professional service. </h3>
                            </div>

                            <div style={{ marginTop: '1rem', }}>


                                <Button variant="primary" href='https://app.my-tribe.com.au/signup' target='_blank' style={{


                                    // margin: '10px',

                                    textAlign: 'center',
                                    color: 'white',
                                    fontSize: '1em',
                                    borderColor: '#FFF',
                                    borderRadius: '10px',
                                    paddingLeft: '18px',
                                    paddingRight: '18px',
                                    paddingTop: '10px',
                                    paddingBottom: '10px',

                                    backgroundColor: '#48D1CC',
                                }}>
                                    Register

              </Button>
                                <Button variant="primary" href='https://my-tribe.com.au/packages' target='_blank' style={{

                                    margin: '10px',

                                    textAlign: 'center',
                                    color: 'white',
                                    fontSize: '1em',
                                    borderColor: '#FFF',
                                    borderRadius: '10px',
                                    paddingLeft: '18px',
                                    paddingRight: '18px',
                                    paddingTop: '10px',
                                    paddingBottom: '10px',
                                    backgroundColor: '#8080804d',



                                }}>
                                    Learn More

              </Button>
                            </div>
                        </div>
                    </Grid>
                </div>




            </section>

        </Layout>
    )
}

export default clients