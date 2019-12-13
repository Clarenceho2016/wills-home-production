import React from 'react'
import leftImg from '../img/hs.jpg'
import Layout from '../components/Layout'
import Link from "gatsby-link";
import Grid from "@material-ui/core/Grid";
import Button from "react-bootstrap/Button";
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';

const referrers = () => {
    return (
        <Layout>
            <section className="section" >

                <div className="full-width-image-container-lawyer"><img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fphoto-of-people-doing-handshakes-3184420%20(1).jpg?alt=media&token=8688617e-1d81-415b-b5e1-897659383b25"} alt="register" /></div>

                <div className="container" >
                    <div className="content" style={{ minHeight: "80vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h1 style={{ color: 'white', fontSize: '3vw', background: 'orange', padding: '1vw', }}>Referrers from MyTribe</h1>
                    </div>
                </div>

            </section>

            <section className="section" style={{ paddingTop: "15vh" }} >

                <div >
                    <div style={{ padding: '1vw', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

                        <h1 style={{ fontSize: '3vw' }}>What type of organisations can register on MyTribe?
                        </h1>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: "10vw", marginRight: '10vw' }}>
                        <p> Financial Planners, Accountants, Law Firms, Wealth Managers and more. We recommend is to use registering your organisation to get the benefits of trailing commissions provided by MyTribe.
                        </p>
                    </div>

                </div>
                <div style={{ marginLeft: "10vw", marginRight: '10vw' }}>
                    <p>
                        Referrers can easily register their organisations on MyTribe to refer clients to MyTribe Lawyers.
                        </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ul>
                        <li style={{ color: 'white' }}>
                            <Link to="/contact">Referrers register here</Link>
                        </li>
                    </ul>
                </div>
            </section>

        </Layout >
    )
}

export default referrers



