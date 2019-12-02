import React from 'react'
import Layout from '../components/Layout'
import Link from "gatsby-link";
import Button from "react-bootstrap/Button";
import Grid from "@material-ui/core/Grid";


const lawyer = () => {
    return (
            <Layout>
                <section className="section">
                    <div className="full-width-image-container-lawyer"><img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fphoto-of-man-holding-a-book-927022%20(1)%20(1).jpg?alt=media&token=3ac2f77e-31a8-41d7-a6c3-84e59bf6325b"} alt="register"/></div>
                    <div className="container" style={{ bottom: '-100px', }}>
                            <div className="container1" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems:'center', justifyContent:'center', }}>
                            <h1 style={{ color: 'white', fontSize: '50px',}}>Lawyers from MyTribe</h1>
                            <ul>
                                <li style={{ color: 'white',}}>
                                    <Link to="/contact">Lawyers register here</Link>
                                </li>
                            </ul>
                            </div>
                    </div>
                </section>
            </Layout>
    )
}

export default lawyer