import React from 'react'
//import leftImg from '../img/hs.jpg'
import Layout from '../components/Layout'
import Link from "gatsby-link";
import Grid from "@material-ui/core/Grid";
import Button from "react-bootstrap/Button";
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import bg from '../../static/img/referrer-1.png'
const referrers = () => {
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
                            // className="is-size-4-mobile is-size-3-tablet is-size-2-widescreen"
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
                            Do you have client’s that need an estate plan, but don’t have the time to meet a lawyer?
        </h2>
                        <p style={{
                            color: 'white',
                            fontSize: '1.75rem',
                            lineHeight: '1.5',
                            padding: '1em',
                        }}>MyTribe allows your organisation to create an account and make bookings on behalf of your clients. </p>
                        <Button variant="primary" style={{
                            margin: '35px',
                            backgroundColor: '#48D1CC',
                            border: 'none',
                            width: '40%',
                            borderRadius: '10px',
                            fontSize: '30px',
                            padding: '15px',

                        }}>
                            <a href="https://app.my-tribe.com.au/referrer-signup" target='_blank' style={{
                                color: '#ffffff',
                                borderRadius: '10px',

                            }}>
                                Join Today
                  </a>
                        </Button>

                    </div>
                </Grid>
            </div>
            <section className="section" style={{ textAlign: 'center', marginTop: '0.5rem', marginBottom: '0.8rem', marginRight: '8vw', marginLeft: '8vw' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75em' }}>Do you want a trusted lawyer you can refer your clients to?
</h1>
                <p style={{

                    fontSize: '1rem',
                    lineHeight: '1.5',

                }}>One of our lawyers will come to your office or to your client’s home, enabling you to be as involved in the process as you like and ensuring that your clients get expert advice and an estate plan.</p>
            </section>
            <section className="section" >
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75em' }}>Trusted lawyers
</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
                    <div style={{ marginTop: '30px', marginRight: '30px', }}><ul className='b'>
                        <li style={{ width: '90%' }}>  All our lawyers are experienced estate planning lawyers
</li>
                        <li style={{ width: '90%' }}>  Your client will receive a comprehensive suite of expertly drafted estate planning documents</li>
                    </ul></div>
                    <div >
                        {/* //<Grid item xs={12} sm={6}> */}
                        <img style={{ borderRadius: '60%', position: 'center', height: '180px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2F59871-min.jpg?alt=media&token=58e5b2c0-f4a2-4bc0-b53d-1ffaf23aa5d7' alt="register"></img>
                        {/* //</Grid> */}
                    </div>
                </div>
            </section>

            <section className="section" style={{ marginBottom: '0.8rem', }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px', marginLeft: '12rem', marginRight: '12rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.75em', }}>Do you want to add value to your client’s experience with your business?</h1>
                </div> {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}> */}
                <Grid container spacing={12}>
                    <Grid item xs={12} sm={6} >

                        <Grid item xs={12} sm={12} style={{ marginLeft: '1em', marginRight: '1em' }} >
                            <div style={{
                                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                                alignItems: 'center'
                            }}>

                                <h1 style={{ fontWeight: '600', fontSize: '1.5rem' }}>Participate in the estate planning process</h1>
                                <img style={{ height: '180px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2F3074320-min.jpg?alt=media&token=803f55fc-ea6b-419f-8bb4-dc3c9a543df4' alt="register"></img>
                                <ul className='a' style={{ fontSize: '1.25rem', width: '80%', marginTop: '25px' }}><li >You can provide our lawyers with detailed instructions based on your knowledge of your client’s circumstances
</li><br />
                                    <li >Collaborate with our lawyers concerning the plan for the clients
</li><br />
                                    <li>Weigh in on what to do with insurances and binding death benefit nominations
</li><br /><br /></ul>
                            </div>

                        </Grid>

                    </Grid>

                    <Grid item xs={12} sm={6} >

                        <Grid item xs={12} sm={12} style={{ marginLeft: '1em', marginRight: '1em' }} >
                            <div style={{
                                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <h1 style={{ fontWeight: '600', fontSize: '1.5rem' }}>Add value to your clients</h1>
                                <img style={{ position: 'center', height: '180px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2F4380-min.jpg?alt=media&token=bd979969-ece8-4463-b2f9-bd5337db59a5' alt="register"></img>
                                <ul className='a' style={{ fontSize: '1.25rem', width: '80%', marginTop: '25px' }}><li>By facilitating this process, you add significant value to your client’s overall experience
</li><br />

                                    <li>Protect your client’s generational wealth, you can even invite your clients to bring their children along to participate in the process where appropriate. </li><br /><br /></ul>
                            </div>


                        </Grid>




                    </Grid>
                </Grid>


                {/* /</div> */}
            </section>













            <section className="section" style={{ marginTop: '0.5rem', marginBottom: '0.8rem', }}>

                <div style={{ display: 'flex' }}>
                    <Grid item xs={12} sm={4}>
                        <img style={{ marginLeft: '5vw' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FCanva%20-%20Lawyer%20Has%20an%20Idea-min-min.jpg?alt=media&token=bc185d12-1099-4aea-858f-5902798f3116' alt="register" ></img>
                    </Grid>
                    <Grid item xs={12} sm={8} >
                        <div style={{ alignItems: 'left', marginLeft: '12vw', }}>
                            <div>

                                <h2 style={{ lineHeight: '1.5em', fontSize: '1.25rem', fontWeight: 'bold' }}>Get started today with a referrer account<br /><br /> </h2>
                                <h3 style={{ lineHeight: '1.5em', }}>We are trusted lawyers whom you can refer to meet the needs of your valued clients. </h3>
                            </div>


                            <div
                                style={{ marginTop: '1rem', }}>


                                <Button variant="primary" href='https://app.my-tribe.com.au/referrer-signup' style={{
                                    //margin: '10px',


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

              </Button>  </div>
                        </div>
                    </Grid>
                </div>




            </section>

        </Layout >
    )
}

export default referrers



