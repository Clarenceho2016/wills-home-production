import React from 'react'
//import leftImg from '../img/hs.jpg'
import Layout from '../components/Layout'
import Link from "gatsby-link";
import Grid from "@material-ui/core/Grid";
import Button from "react-bootstrap/Button";
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import bg from '../../static/img/referees.jpg'
const referrers = () => {
    return (
        <Layout>
            <div
                className="full-width-image-container margin-top-0"
                style={{
                    backgroundImage: `url(${
                        bg
                        })`,
                    backgroundPosition: '10px 18px 18px 20px'
                }}
            >
                <h2
                    className="has-text-weight-bold is-size-1"
                    style={{
                        boxShadow: '0.5rem 0 0 #007bff, -0.5rem 0 0 #007bff',
                        backgroundColor: '#007bff',
                        color: 'white',
                        padding: '1rem',
                    }}
                >
                    Referrers from MyTribe
        </h2>
            </div>

            {/* <section className="section"  >

                <div >
                    <div style={{ padding: '0.5vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: "10vw", marginRight: '10vw' }}>

                        <p style={{ fontSize: '25px', fontWeight: 'bold' }}>What type of organisations can register on MyTribe?
                        </p>
                    </div>
                  

                </div>
                <div style={{ marginLeft: "10vw", marginRight: '10vw' }}>
                    <p>
                        If you have client’s that need an estate plan, but don’t have the time to meet a lawyer.  Or, perhaps you don’t have a trusted lawyer you can refer your valued clients to.  MyTribe allows your organisation to create an account and make bookings on behalf of your clients. One of our lawyers can come to your office or to your client’s home, enabling you to be as involved in the process as you like and ensuring that your client’s get expert advice and an estate plan.
                        </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
                    <ul>
                        <li style={{ color: 'white' }}>
                            <a href="https://app.my-tribe.com.au/referrer-signup">Referrers register here</a>
                        </li>
                    </ul>
                </div>
            </section> */}
            <section className="section" style={{ marginTop: '0.5rem', marginBottom: '0.8rem', backgroundColor: '#E5E5E5' }}>

                <div style={{ display: 'flex' }}>
                    <Grid item xs={12} sm={6}>
                        <img src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Freferrer.jpg?alt=media&token=8c9907c6-681b-4db4-bc9b-7b17a2c405de' alt="register" ></img>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem' }}>
                            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', }}>For referrers</h1>
                            <p style={{ fontSize: '1.5rem', marginTop: '5vh' }}> If you have client’s that need an estate plan, but don’t have the time to meet a lawyer.  Or, perhaps you don’t have a trusted lawyer you can refer your valued clients to.  MyTribe allows your organisation to create an account and make bookings on behalf of your clients. </p></div>
                    </Grid>
                </div>
                <div
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem', padding: '0.5vw' }}>
                    <ul>
                        <li style={{ color: 'white' }}>
                            <a href="https://app.my-tribe.com.au/referrer-signup" style={{ display: 'flex', ali7gnItems: 'center', justifyContent: 'center', fontSize: '32px' }}>Referrers register here</a>
                        </li>
                    </ul>
                </div>



            </section>

        </Layout >
    )
}

export default referrers



