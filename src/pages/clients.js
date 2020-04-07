import React from 'react'
import Layout from '../components/Layout'
import Link from "gatsby-link";
import Button from "react-bootstrap/Button";
import Grid from "@material-ui/core/Grid";
import bg from '../../static/img/client.png'

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

                        color: '#152189',
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
                        <img src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fclient-2.png?alt=media&token=2f97c8aa-dc95-4fc6-9e00-3e8704d21173' alt="register" ></img>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '3rem', paddingRight: '3rem' }}>

                            <h2 style={{ lineHeight: '1.5em', fontSize: '1.25rem', fontWeight: 'bold' }}>Add comments about client.<br /><br /> </h2>
                            <h3 style={{ lineHeight: '1.5em', }}>With MyTribe, you could experience professional service. </h3>
                        </div>
                        <div
                            style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginLeft: '10rem', marginRight: '10rem', marginTop: '1rem', paddingTop: '0.5vw' }}>
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


                                lineHeight: '1.5em',
                                backgroundColor: '#007bff',
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