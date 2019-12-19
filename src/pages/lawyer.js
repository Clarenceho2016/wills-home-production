import React from 'react'
import Layout from '../components/Layout'
import Link from "gatsby-link";
import Button from "react-bootstrap/Button";
import Grid from "@material-ui/core/Grid";


const lawyer = () => {
    return (
        <Layout>
            <section className="section"  >
                <div className="full-width-image-container-lawyer">

                    <img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fphoto-of-man-holding-a-book-927022%20(1)%20(1).jpg?alt=media&token=3ac2f77e-31a8-41d7-a6c3-84e59bf6325b"} alt="register" />
                </div>

                <div className="container" >
                    <div className="content" style={{
                        minHeight: '35rem', display: 'flex', justifyContent: 'center', alignItems: 'center',
                    }}>
                        <h1 className="has-text-weight-bold is-size-1" style={{ color: 'white', fontSize: '3vw', fontweight: 'bold', backgroundColor: '#007bff', padding: '1vw', }}>Lawyers from MyTribe</h1>

                    </div>
                </div>

            </section>


            <section className="section" >
                <div
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1vw' }}>
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