import React from 'react'
import Layout from '../components/Layout'
import Link from "gatsby-link";
import Button from "react-bootstrap/Button";
import Grid from "@material-ui/core/Grid";

import bg from '../../static/img/lawyers.png'


const lawyer = () => {
    return (
        <Layout>
            <div
                className="full-width-image margin-top-0"
                style={{
                    marginTop: '100vh',

                    backgroundImage: `url(${
                        bg
                        })`,

                }}
            >
                <Grid item xs={12} sm={6}
                    style={{

                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        transform: 'scale(0.6)',


                    }}
                >
                    <div style={{


                        display: 'flex',
                        padding: '0.5em',
                        marginTop: '60px',

                        paddingBottom: '20px',
                        paddingTop: '20px',


                        flexDirection: 'column',

                    }}>
                        <h2
                            className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                            style={{

                                // color: '#152189',
                                color: 'white',
                                padding: '1rem',
                                position: 'static',
                                lineHeight: '1.5',
                                fontSize: '3rem',
                                fontWeight: '700',



                            }}
                        >
                            Uncapped earnings, working when you want and where you want.
        </h2>

                        <p style={{
                            color: 'white',
                            fontSize: '1.75rem',
                            lineHeight: '1.5',
                            padding: '1em',
                        }}>Nine to five is time that suits business, but it may not suit you. At MyTribe we provide you uncapped earnings, working when you want and where you want. </p>

                        <Button variant="primary" style={{
                            margin: '35px',
                            backgroundColor: '#48D1CC',
                            border: 'none',
                            width: '40%',
                            borderRadius: '10px',
                            fontSize: '30px',
                            padding: '15px',

                        }}>
                            <a href="https://app.my-tribe.com.au/lawyer-signup" target='_blank' style={{
                                color: '#ffffff',
                                borderRadius: '10px',

                            }}>
                                Join Today
                  </a>
                        </Button>



                    </div>
                </Grid>
            </div>

            <section className="section" style={{ marginTop: '0.5rem', marginBottom: '0.8rem', }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75em' }}>Steps to join as a lawyer</h1>
                {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}> */}
                <Grid container spacing={12}>
                    <Grid item xs={12} sm={4} >

                        <Grid item xs={12} sm={12} style={{ marginLeft: '1em', marginRight: '1em' }} >
                            <div style={{
                                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                                alignItems: 'center'
                            }}>

                                <h1 style={{ fontWeight: '600', fontSize: '1.5rem' }}>Earn great money</h1>
                                <img style={{ position: 'center', height: '180px', marginTop: '15px', marginBottom: '15px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fearn-money-min.jpg?alt=media&token=bb77d3ca-e395-433d-9965-c34693aec9c2' alt="register"></img>
                                <ul className='a' style={{ width: '80%' }}><li >Up to 70% of the fees for each package
</li>
                                    <li >Full fee is payable within 48 hours of the appointment, so your earnings are secure despite late cancellations</li>
                                    <li>Get paid monthly </li></ul>
                            </div>

                        </Grid>

                    </Grid>

                    <Grid item xs={12} sm={4} >

                        <Grid item xs={12} sm={12} style={{ marginLeft: '1em', marginRight: '1em' }}>
                            <div style={{
                                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <h1 style={{ fontWeight: '600', fontSize: '1.5rem' }}>Perks
</h1>
                                <img style={{ position: 'center', height: '180px', marginTop: '15px', marginBottom: '15px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fbenefit-min.jpg?alt=media&token=72fda167-3da4-463d-bb7a-68fd54e090a5' alt="register"></img>
                                <ul className='a' style={{ width: '80%' }}><li>Insurance</li>
                                    <li >Great online resources and precedence
</li>
                                    <li>Support from an experienced team
</li>
                                    <li >Build your own client base
</li></ul>

                            </div>


                        </Grid>




                    </Grid>

                    <Grid item xs={12} sm={4} >

                        <Grid item xs={12} sm={12} style={{ marginLeft: '1em', marginRight: '1em' }} >
                            <div style={{
                                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <h1 style={{ fontWeight: '600', fontSize: '1.5rem' }}>What you will need</h1>
                                <img style={{ position: 'center', height: '180px', marginTop: '15px', marginBottom: '15px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Flaw-min.jpg?alt=media&token=ee32db8b-c97e-46d1-a89b-5274dd3f75f9' alt="register"></img>
                                <ul className='a' style={{ width: '80%' }}><li>A car to get around</li>
                                    <li>At least 3 years’ experience in estate panning</li>
                                    <li>A current practicing certificate</li>
                                    <li>We provide the rest</li></ul>
                            </div>


                        </Grid>




                    </Grid>
                </Grid>


                {/* /</div> */}
            </section>






            <section className="section" style={{ marginTop: '0.5rem', marginBottom: '0.8rem', }}>


                <div style={{ display: 'flex' }}>
                    <Grid item xs={12} sm={4}>
                        <img style={{ marginLeft: '5vw' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FCanva%20-%20Lawyer%20Signing%20Documents%20at%20His%20Desk%20in%20an%20Office-min-min.jpg?alt=media&token=271cef66-8d34-4a10-baaf-2bec4126c68a' alt="register" ></img>
                    </Grid>
                    <Grid item xs={12} sm={8} >
                        <div style={{ alignItems: 'left', marginLeft: '12vw', }}>
                            <div>
                                <h2 style={{ lineHeight: '1.5em', fontSize: '1.25rem', fontWeight: 'bold' }}>Choose when you work<br /><br /> </h2>
                                <h3 style={{ lineHeight: '1.5em', }}>Jobs will be offered to you, pick the ones that suit your schedule, but only accept the jobs you want  </h3>
                            </div>
                            <div style={{ marginTop: '1rem', }}>

                                <Button variant="primary" href='https://app.my-tribe.com.au/lawyer-signup' style={{

                                    // margin: '10px',

                                    textAlign: 'center',
                                    color: 'white',
                                    fontSize: '1em',
                                    borderColor: '#FFF',
                                    borderRadius: '10px',
                                    paddingLeft: '18px',
                                    paddingRight: '18px',
                                    paddingTop: '10px',
                                    paddingBottom: '10px',

                                    backgroundColor: '#48D1CC',
                                }}>
                                    Register

              </Button>
                            </div>
                        </div>
                    </Grid>
                </div>




            </section>

        </Layout>
    )
}

export default lawyer