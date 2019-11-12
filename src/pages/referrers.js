import React from 'react'

import Layout from '../components/Layout'
import Link from "gatsby-link";

const referrers = () => {
    return (
        <Layout>
            <section className="section">
                <div className="full-width-image-container-lawyer"><img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fphoto-of-people-doing-handshakes-3184420%20(1).jpg?alt=media&token=8688617e-1d81-415b-b5e1-897659383b25"} alt="register"/></div>
                <div className="container" style={{ bottom: '-100px', }}>
                    <div className="content" style={{ padding: '300px', }}>
                        <h1>Referrers from MyTribe</h1>
                        <p>
                            Referrers can easily register their organisations on MyTribe to refer clients to MyTribe Lawyers.
                        </p>
                        <ul>
                            <li>
                                <Link to="/contact">Referrers register here</Link>
                            </li>
                        </ul>

                        <h2>What type of organisations can register on MyTribe</h2>
                        <h3>Financial Planners, Accountants, Law Firms, Wealth Managers and more.</h3>
                        <p>
                            We recommend is to use registering your organisation to get the benefits of trailing commissions provided by MyTribe.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default referrers



