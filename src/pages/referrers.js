import React from 'react'
//import leftImg from '../img/hs.jpg'
import Layout from '../components/Layout'
import Link from "gatsby-link";
import Grid from "@material-ui/core/Grid";
import Button from "react-bootstrap/Button";
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import bg from '../../static/img/referrer-o.jpg'
const referrers = () => {
    return (
        <Layout>
            <div
                className="full-width-image-container margin-top-0"
                style={{
                    backgroundImage: `url(${
                        bg
                        })`,


                }}
            >
                <h2
                    className="has-text-weight-bold is-size-1"
                    style={{

                        // marginTop: '19rem',
                        color: '#152189',
                        padding: '1rem',
                        marginLeft: '0.05vw'
                    }}
                >
                    Referrers from MyTribe
        </h2>
            </div>


            <section className="section" style={{ marginTop: '0.5rem', marginBottom: '0.8rem', }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75em' }}>For referrers</h1>
                <div style={{ display: 'flex' }}>
                    <Grid item xs={12} sm={6}>
                        <img src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FCanva%20-%20Lawyer%20Has%20an%20Idea-min.jpg?alt=media&token=a93a4faa-8925-48fd-8061-b04e7a416b93' alt="register" ></img>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '3rem', paddingRight: '3rem' }}>

                            <h2 style={{ lineHeight: '1.5em', fontSize: '1.25rem', fontWeight: 'bold' }}> If you have client’s that need an estate plan, but don’t have the time to meet a lawyer.<br /><br /></h2><h3 style={{ lineHeight: '1.5em', }}>  Or, perhaps you don’t have a trusted lawyer you can refer your valued clients to.  MyTribe allows your organisation to create an account and make bookings on behalf of your clients.
                            </h3></div>


                        <div
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem', paddingTop: '0.5vw' }}>


                            <Button variant="primary" href='https://app.my-tribe.com.au/referrer-signup' style={{
                                margin: '10px',
                                // paddingLeft: '0.75em',
                                // paddingRight: '0.75em',
                                // paddingTop: '0.5em',
                                // paddingBottom: '0.5em',
                                color: 'white',
                                fontSize: '1em',
                                borderColor: '#FFF',
                                borderRadius: '10px',

                                // width: '80px',
                                // height: '37px',
                                lineHeight: '1.5em',
                                backgroundColor: '#007bff',
                            }}>
                                Register

              </Button>
                        </div>
                    </Grid>
                </div>

                {/* <div
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem', padding: '0.5vw' }}>
                    <ul>
                        <li style={{ color: 'white' }}>
                            <a href="https://app.my-tribe.com.au/referrer-signup" style={{ display: 'flex', ali7gnItems: 'center', justifyContent: 'center', fontSize: '32px' }}>Referrers register here</a>
                        </li>
                    </ul>
                </div> */}



            </section>

        </Layout >
    )
}

export default referrers



