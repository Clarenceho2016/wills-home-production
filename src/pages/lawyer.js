import React from 'react'
import Layout from '../components/Layout'
import Link from "gatsby-link";
import Button from "react-bootstrap/Button";
import Grid from "@material-ui/core/Grid";
import bg from '../../static/img/lawyers.jpg'

const lawyer = () => {
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
                        boxShadow: '0.5rem 0 0 #007bff, -0.5rem 0 0 #007bff',
                        backgroundColor: '#007bff',
                        color: 'white',
                        padding: '1rem',
                    }}
                >
                    Lawyers from MyTribe
        </h2>
            </div>


            <section className="section" >
                <div
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0.5vw' }}>
                    <ul>
                        <li style={{ color: 'white' }}>
                            <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>Lawyers register here</Link>
                        </li>
                    </ul>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p>Lawyers choose MyTribe for flexibility, on-demand client bookings, access to new jobs and more</p>
                </div>

            </section>
        </Layout>
    )
}

export default lawyer