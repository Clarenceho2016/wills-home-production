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

            <section className="section"  >

                <div >
                    <div style={{ padding: '0.5vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: "10vw", marginRight: '10vw' }}>

                        <p style={{ fontSize: '25px', fontWeight: 'bold' }}>What type of organisations can register on MyTribe?
                        </p>
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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
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



