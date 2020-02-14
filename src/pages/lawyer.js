import React from 'react'
import Layout from '../components/Layout'
import Link from "gatsby-link";
import Button from "react-bootstrap/Button";
import Grid from "@material-ui/core/Grid";
import bg from '../../static/img/lawyer2.png'


const lawyer = () => {
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
                        color: 'white',
                        padding: '1rem',
                        // marginTop: '19rem'
                    }}
                >
                    Lawyers from MyTribe
        </h2>
            </div>
            <section className="section" style={{ marginTop: '0.5rem', marginBottom: '0.8rem', }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75em' }}>For Lawyers</h1>
                <div style={{ display: 'flex' }}>
                    <Grid item xs={12} sm={6}>
                        <img src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Flawyer3.jpg?alt=media&token=4db651a2-3106-426a-a9de-c03ecdccad22' alt="register" ></img>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem' }}>

                            <p style={{ fontSize: '1.5rem', }}>Want to work for a law firm but can’t commit to the fixed hours or long commute to the office. With MyTribe, you get to pick your hours, work when you want, where you want and develop your skills as an expert estate planning lawyer all while earning great money.  </p>
                        </div>
                    </Grid>
                </div>
                <div
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem', paddingTop: '0.5vw' }}>
                    <ul>
                        <li style={{ color: 'white' }}>
                            <a href="https://app.my-tribe.com.au/lawyer-signup" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>Lawyers register here</a>
                        </li>
                    </ul>
                </div>



            </section>
            <div style={{ height: '1vh' }}></div>
        </Layout>
    )
}

export default lawyer