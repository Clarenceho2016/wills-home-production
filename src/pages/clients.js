import React from 'react'
import Layout from '../components/Layout'
import Link from "gatsby-link";
import Button from "react-bootstrap/Button";
import Grid from "@material-ui/core/Grid";
import bg from '../../static/img/client-3.png'

const clients = () => {
    return (
        <Layout>
            <div
                className="full-width-image-container margin-top-0"
                style={{
                    marginTop: '100vh',
                    backgroundImage: `url(${
                        bg
                        })`,

                }}
            >
                <h2
                    className="has-text-weight-bold is-size-1"
                    style={{

                        // color: '#152189',
                        color: 'white',
                        padding: '1rem',

                    }}
                >
                    Welcome to MyTribe
        </h2>
            </div>
            <section className="section" style={{ marginTop: '0.5rem', marginBottom: '0.8rem', }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75em' }}>For Clients</h1>
                <div style={{ display: 'flex' }}>
                    <Grid item xs={12} sm={6}>
                        <img src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FCanva%20-%20Health%20Insurance%20Manager%20Talking%20to%20a%20Couple-min.jpg?alt=media&token=3e1929f8-5d04-4fef-9fc2-976bc3fe9c18' alt="register" ></img>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '3rem', paddingRight: '3rem' }}>

                            <h2 style={{ lineHeight: '1.5em', fontSize: '1.25rem', fontWeight: 'bold' }}>Add comments about client.<br /><br /> </h2>
                            <h3 style={{ lineHeight: '1.5em', }}>With MyTribe, you could experience professional service. </h3>
                        </div>
                        <div
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem', paddingTop: '0.5vw' }}>
                            {/* <ul>
                                <li style={{ color: 'white' }}>
                                    <a href="https://app.my-tribe.com.au/lawyer-signup" style={{ backgroundColor: '#007bff', padding: '0.5em', fontSize: '32px' }}>register</a>
                                </li>
                            </ul> */}

                            <Button variant="primary" href='https://app.my-tribe.com.au/signup' target='_blank' style={{
                                //margin: '10px',

                                color: 'white',
                                fontSize: '1em',
                                borderColor: '#FFF',
                                borderRadius: '10px',

                                marginRight: '1.5rem',
                                lineHeight: '1.5em',
                                backgroundColor: '#007bff',
                            }}>
                                Register

              </Button>
                            <Button variant="primary" href='https://my-tribe.com.au/packages' target='_blank' style={{
                                //margin: '10px',

                                color: 'white',
                                fontSize: '1em',
                                borderColor: '#FFF',
                                borderRadius: '10px',

                                //borderColor: '#FFF',
                                backgroundColor: '#8080804d',

                                borderRadius: '10px',
                                lineHeight: '1.5em',

                            }}>
                                Learn More

              </Button>
                        </div>
                    </Grid>
                </div>




            </section>

        </Layout>
    )
}

export default clients