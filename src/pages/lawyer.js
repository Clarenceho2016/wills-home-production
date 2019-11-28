import React from 'react'
import Layout from '../components/Layout'
import Link from "gatsby-link";


const lawyer = () => {
    return (
            <Layout>
                <section className="section">
                    <div className="full-width-image-container-lawyer"><img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fphoto-of-man-holding-a-book-927022%20(1)%20(1).jpg?alt=media&token=3ac2f77e-31a8-41d7-a6c3-84e59bf6325b"} alt="register"/></div>
                    <div className="container">
                        <div className="content" style={{ width: '100%', height: '100%', bottom: '-100px', position: 'absolute', top: '0', left: '0', }}>
                            <div className="container1">
                            <h1>Lawyers from MyTribe</h1>
                            <p>
                                Lawyers can earn money by registering themselves on MyTribe as either a contractor or employee.
                            </p>
                            <ul>
                                <li>
                                    <Link to="/contact">Lawyers register here</Link>
                                </li>
                            </ul>

                            <h2>What type of Lawyers can register on MyTribe?</h2>
                            <h3>Lawyers of all types can register.</h3>
                            <p>
                                On MyTribe, we have a strict application and screening process to ensure high standards of service and delivery.
                            </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
    )
}

export default lawyer