import React from 'react'

import Layout from '../components/Layout'
import Link from "gatsby-link";

const lawyer = () => {
    return (
            <Layout>
                <section className="section">
                    <div className="full-width-image-container-lawyer"><img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fphoto-of-man-holding-a-book-927022%20(1)%20(1).jpg?alt=media&token=3ac2f77e-31a8-41d7-a6c3-84e59bf6325b"} alt="register"/></div>
                    <div className="container" style={{ bottom: '-250px', }}>
                        <div className="content" style={{ padding: '300px', }}>
                            <h1>Lawyers from MyTribe</h1>
                            <p>
                                This is an example site integrating Netlify’s form handling with
                                Gatsby
                            </p>
                            <ul>
                                <li>
                                    <Link to="/contact">Basic contact form</Link>
                                </li>
                                <li>
                                    <Link to="/contact/file-upload/">Form with file upload</Link>
                                </li>
                            </ul>

                            <h2>Troubleshooting</h2>
                            <h3>Forms stop working after upgrading to Gatsby v2</h3>
                            <p>
                                This can be caused by the offline-plugin.{' '}
                                <a href="https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232">
                                    Workaround
                                </a>{' '}
                                is to use <code>?no-cache=1</code> in the POST url to prevent
                                the service worker from handling form submissions
                            </p>
                            <h3>Adding reCAPTCHA</h3>
                            <p>
                                If you are planning to add reCAPTCHA please go to{' '}
                                <a href="https://github.com/imorente/gatsby-netlify-form-example">
                                    imorente/gatsby-netlify-form-example
                                </a>{' '}
                                for a working example.
                            </p>
                        </div>
                    </div>
                </section>
            </Layout>
    )
}

export default lawyer