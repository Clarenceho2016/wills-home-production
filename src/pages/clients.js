import React from 'react'
import Layout from '../components/Layout'
import Link from "gatsby-link";
import Button from "react-bootstrap/Button";
import Grid from "@material-ui/core/Grid";
import bg from '../../static/img/client-1.png'

const clients = () => {
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
                            Too busy to go to a law firm but want expert legal advice?
        </h2>
                        <p style={{
                            color: 'white',
                            fontSize: '1.75rem',
                            lineHeight: '1.5',
                            padding: '1em',
                        }}>Make a booking and one of our expert lawyers will come to you whether it be at your home or in your office, the choice is yours. </p>

                        <Button variant="primary" style={{
                            margin: '35px',
                            backgroundColor: '#48D1CC',
                            border: 'none',
                            width: '40%',
                            borderRadius: '10px',
                            fontSize: '30px',
                            padding: '15px',

                        }}>
                            <a href="https://app.my-tribe.com.au/signup" target='_blank' style={{
                                color: '#ffffff',
                                borderRadius: '10px',

                            }}>
                                Join Today
                  </a>
                        </Button></div>
                </Grid>
            </div>
            <section className="section" style={{ marginTop: '0.5rem', marginBottom: '0.8rem', }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75em' }}>For comprehensive estate planning packages</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
                    <div style={{ marginTop: '30px', marginRight: '30px', }}><ul style={{ fontSize: '1.25rem' }}><li className='listItem' > Flexible options to suit your needs</li><br />
                        <li className='listItem'> No matter what your circumstances we have a package for you</li><br />
                        <li className='listItem'> Difficult conversations made easy</li><br />
                        <li className='listItem'> Tailored expert advice</li><br /></ul></div>
                    <div >

                        <img style={{ position: 'center', height: '250px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2F64665-min.jpg?alt=media&token=43b855d0-aeca-4791-9ecd-21cfa2c3c122' alt="register"></img>

                    </div>
                </div>
            </section>
            <section className="section" style={{ marginTop: '0.5rem', marginBottom: '0.8rem', }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75em' }}>Steps to make a booking</h1>
                {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}> */}
                <Grid container spacing={12}>
                    <Grid item xs={12} sm={4} >

                        <Grid item xs={12} sm={12} style={{ marginLeft: '1em', marginRight: '1em' }} >
                            <div style={{
                                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                                alignItems: 'center'
                            }}>

                                <h1 style={{ fontWeight: '600', fontSize: '1.5rem' }}>1. Make a booking</h1>
                                {/* //<img style={{ height: '180px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2F2300224.jpg?alt=media&token=d33f3309-85ab-42b1-ac3b-24275675b134' alt="register"></img> */}
                                {/* <img style={{ height: '180px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Ftest.png?alt=media&token=535b79e5-dfd9-4d9f-983c-5335fae33c68' alt="register"></img> */}

                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="1 130 150 80" style={{ height: '150px' }}><g xmlns="http://www.w3.org/2000/svg"><path d="M81.08,205.16h-46c-0.552,0-1-0.448-1-1v-49c3.905-3.905,6.095-6.095,10-10h37c0.552,0,1,0.448,1,1v58    C82.08,204.712,81.632,205.16,81.08,205.16z" fill="rgb(72, 209, 204)"></path><polygon fill="#7598D9" points="44.08,145.16 34.08,155.16 44.081,155.16   "></polygon><rect x="38.081" y="178.162" fill="#85ABEF" width="5.5" height="6.999"></rect><rect x="43.581" y="175.161" fill="#7598D9" width="5.5" height="10"></rect><path d="M85.08,209.163h-46c-0.552,0-1-0.448-1-1v-57.002c0.781-0.781,1.219-1.22,2-2h45c0.552,0,1,0.447,1,1    v58.002C86.08,208.715,85.632,209.163,85.08,209.163z" fill="rgb(72, 209, 204)"></path><rect x="49.081" y="170.161" fill="#3353B6" width="5.5" height="15"></rect><rect x="54.581" y="165.161" fill="#1D3285" width="5.5" height="20"></rect><rect x="54.581" y="165.161" fill="#1D3285"></rect><path fill="#3353B6" d="M41.678,200.617c-1.386,0-2.607-0.774-3.111-1.973c-0.161-0.382,0.019-0.821,0.401-0.981    c0.382-0.162,0.822,0.019,0.982,0.4c0.265,0.631,0.959,1.054,1.728,1.054c1.014,0,1.839-0.72,1.839-1.603    c0-1.064-0.622-1.604-1.849-1.604c-2.462,0-3.339-1.604-3.339-3.104c0-1.711,1.498-3.102,3.339-3.102    c1.386,0,2.607,0.773,3.111,1.973c0.161,0.381-0.019,0.82-0.401,0.981c-0.381,0.161-0.822-0.019-0.982-0.401    c-0.265-0.63-0.959-1.053-1.729-1.053c-1.014,0-1.839,0.719-1.839,1.602c0,1.064,0.619,1.604,1.839,1.604    c2.469,0,3.349,1.604,3.349,3.104C45.018,199.226,43.52,200.617,41.678,200.617z"></path><path fill="#3353B6" d="M41.669,191.206c-0.414,0-0.75-0.336-0.75-0.75v-1.295c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75    v1.295C42.419,190.87,42.083,191.206,41.669,191.206z"></path><path fill="#3353B6" d="M41.669,201.911c-0.414,0-0.75-0.336-0.75-0.75v-1.294c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75    v1.294C42.419,201.575,42.083,201.911,41.669,201.911z"></path><path fill="#3353B6" d="M66.758,195.911h-5.838c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h5.838    c0.414,0,0.75,0.336,0.75,0.75S67.172,195.911,66.758,195.911z"></path><path fill="#3353B6" d="M56.919,195.911h-8.839c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h8.839    c0.414,0,0.75,0.336,0.75,0.75S57.333,195.911,56.919,195.911z"></path><path fill="#3353B6" d="M61.757,190.911h-4.838c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h4.838    c0.414,0,0.75,0.336,0.75,0.75S62.171,190.911,61.757,190.911z"></path><path fill="#3353B6" d="M52.919,190.911h-4.838c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h4.838    c0.414,0,0.75,0.336,0.75,0.75S53.333,190.911,52.919,190.911z"></path><path fill="#3353B6" d="M61.757,200.911h-4.839c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h4.839    c0.414,0,0.75,0.336,0.75,0.75S62.171,200.911,61.757,200.911z"></path><path fill="#3353B6" d="M52.918,200.911h-4.838c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h4.838    c0.414,0,0.75,0.336,0.75,0.75S53.333,200.911,52.918,200.911z"></path><path fill="#EBF3FD" d="M77.08,155.91h-11c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h11c0.414,0,0.75,0.336,0.75,0.75    S77.494,155.91,77.08,155.91z"></path><path fill="#EBF3FD" d="M62.079,155.91h-14c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h14c0.414,0,0.75,0.336,0.75,0.75    S62.493,155.91,62.079,155.91z"></path><path fill="#EBF3FD" d="M70.079,160.911h-7.5c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h7.5    c0.414,0,0.75,0.336,0.75,0.75S70.493,160.911,70.079,160.911z"></path><path fill="#EBF3FD" d="M58.579,160.911h-7.5c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h7.5    c0.414,0,0.75,0.336,0.75,0.75S58.993,160.911,58.579,160.911z"></path><path fill="#EBF3FD" d="M47.079,160.911H39.08c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h7.999    c0.414,0,0.75,0.336,0.75,0.75S47.493,160.911,47.079,160.911z"></path><path fill="#EBF3FD" d="M50.081,165.911H39.08c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h11.001    c0.414,0,0.75,0.336,0.75,0.75S50.495,165.911,50.081,165.911z"></path><path fill="#EBF3FD" d="M45.08,170.911h-6c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h6c0.414,0,0.75,0.336,0.75,0.75    S45.494,170.911,45.08,170.911z"></path><circle fill="#EBF3FD" cx="95.081" cy="161.161" r="2"></circle><path fill="#3353B6" d="M95.081,163.911c-1.517,0-2.75-1.232-2.75-2.75c0-1.516,1.233-2.75,2.75-2.75s2.75,1.234,2.75,2.75    C97.831,162.679,96.597,163.911,95.081,163.911z M95.081,159.911c-0.689,0-1.25,0.561-1.25,1.25s0.561,1.25,1.25,1.25    s1.25-0.561,1.25-1.25S95.77,159.911,95.081,159.911z"></path><circle fill="#EBF3FD" cx="91.08" cy="150.16" r="2"></circle><path fill="#3353B6" d="M91.08,152.91c-1.517,0-2.75-1.233-2.75-2.75s1.233-2.75,2.75-2.75s2.75,1.233,2.75,2.75    S92.597,152.91,91.08,152.91z M91.08,148.91c-0.689,0-1.25,0.561-1.25,1.25s0.561,1.25,1.25,1.25s1.25-0.561,1.25-1.25    S91.77,148.91,91.08,148.91z"></path><circle fill="#EBF3FD" cx="93.08" cy="200.165" r="2"></circle><path fill="#3353B6" d="M93.08,202.915c-1.517,0-2.75-1.232-2.75-2.75c0-1.516,1.233-2.75,2.75-2.75s2.75,1.234,2.75,2.75    C95.83,201.683,94.597,202.915,93.08,202.915z M93.08,198.915c-0.689,0-1.25,0.561-1.25,1.25s0.561,1.25,1.25,1.25    s1.25-0.561,1.25-1.25S93.77,198.915,93.08,198.915z"></path><path fill="#1D3285" d="M64.081,180.16c0,5.265,2.393,9.968,6.15,13.086L81.08,180.16v-16.998    C71.691,163.162,64.081,170.772,64.081,180.16z"></path><path fill="#3353B6" d="M81.08,163.162v16.998l7.668-15.161C86.443,163.83,83.841,163.162,81.08,163.162z"></path><path fill="#85ABEF" d="M88.748,164.999L81.08,180.16l16.301-4.819C96.046,170.821,92.881,167.095,88.748,164.999z"></path><path fill="#3353B6" d="M70.231,193.246c2.944,2.443,6.724,3.913,10.849,3.913c4.951,0,9.406-2.119,12.513-5.496L81.08,180.16    L70.231,193.246z"></path><path fill="#7598D9" d="M97.38,175.341L81.08,180.16l0,0l12.513,11.503c2.784-3.027,4.485-7.066,4.485-11.503    C98.078,178.485,97.832,176.869,97.38,175.341z"></path><circle fill="#E39C26" cx="81.081" cy="180.161" r="8.5"></circle><path fill="#DF751B" d="M78.651,186.231c-1.726,0-3.329-0.518-4.669-1.401c1.52,2.306,4.13,3.831,7.099,3.831    c4.694,0,8.5-3.807,8.5-8.5c0-2.969-1.524-5.579-3.831-7.1c0.884,1.341,1.401,2.944,1.401,4.67    C87.151,182.427,83.346,186.231,78.651,186.231z"></path></g></svg>




                                <ul className='a' style={{ fontSize: '1.25rem', width: '80%', marginTop: '25px' }}><li >Let us know when and where and we will take care of the rest</li><br />
                                    <li >We speak your language. If English isn’t your fist language, we can arrange for a lawyer who speaks your native tongue to meet with you.</li><br />
                                    <li>Secure payment options</li><br /><br /></ul>
                            </div>

                        </Grid>

                    </Grid>

                    <Grid item xs={12} sm={4} >

                        <Grid item xs={12} sm={12} style={{ marginLeft: '1em', marginRight: '1em' }}>
                            <div style={{
                                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <h1 style={{ fontWeight: '600', fontSize: '1.5rem' }}>2. Meet your lawyer</h1>
                                {/* <img style={{ position: 'center', height: '180px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2F2696087.jpg?alt=media&token=6b850bbe-1683-467b-9b21-6c701ef66232' alt="register"></img> */}

                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="1 250 400 80" style={{ height: '150px' }}>

                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="190.223" cy="295.998" r="32" fill="rgb(72, 209, 204)" />
                                        <circle cx="190.223" cy="295.998" r="24" fill="rgb(32, 150, 153)" />
                                        <path fill="#7598D9" d="M204.624,295.5l-3.994,4.488l-6.543,7.259l-15.244,5.667l0.487-4.818l12.71-6.348    c4.679-3.27,7.282-7.479,9.189-8.313C202.989,292.665,204.353,293.897,204.624,295.5z" />
                                        <path fill="#85ABEF" d="M194.597,302.666c-0.723,0.725-2.679,0.133-5.013,1.504c-0.001,0.001-12.528,2.548-21.884,6.383    c-0.012,0.006,3.236,7.512,3.236,7.512c3.367-0.13,22.43,3.337,37.002-22.802c0.016-0.027,0.032-0.054,0.05-0.079    c0.12-0.176,1.165-1.766-0.007-2.673C205.753,290.787,199.938,297.315,194.597,302.666z" />
                                        <path fill="#B1CDFC" d="M198.197,302.685c-0.647,0.792-1.318,1.612-2.014,2.446c0,0.001-0.002,0.001-0.002,0.002    c-0.003,0.004-0.004,0.009-0.007,0.013c-1.692,1.954-3.749,3.449-6.28,4.54c-1.955,0.843-4.194,1.443-6.765,1.828    c-0.49,0.072-0.948-0.266-1.021-0.757c-0.074-0.49,0.269-0.946,0.756-1.021c5.445-0.812,9.239-2.642,11.937-5.75l0-0.001    c1.171-1.42,1.084-1.718,0.909-2.311c-0.289-0.982-0.736-1.611-1.329-1.871c-0.883-0.388-1.915,0.109-1.928,0.114    c-7.859,3.548-9.672,3.323-11.763,3.063c-1.892-0.235-6.027,0.271-15.384,4.106c-0.012,0.005,5.852,13.583,5.852,13.583    c3.367-0.131,22.274,3.248,37.002-22.803c0.015-0.027,1.215-1.845,0.043-2.752C205.976,293.391,202.951,296.869,198.197,302.685z" />
                                        <path fill="#DF751B" d="M164.579,306.592l-5.751,2.479c-0.507,0.218-0.741,0.807-0.523,1.313l5.747,13.34    c0.218,0.507,0.807,0.741,1.314,0.522l5.751-2.478c0.507-0.219,0.741-0.807,0.522-1.314l-5.747-13.339    C165.674,306.607,165.086,306.374,164.579,306.592z" />
                                        <circle fill="#EBF3FD" cx="166.77" cy="319.593" r="1.239" />
                                        <path fill="#7598D9" d="M175.822,296.497l3.994-4.488l6.543-7.26l15.244-5.667l-0.487,4.819l-12.71,6.348    c-4.679,3.27-7.282,7.478-9.189,8.313C177.457,299.332,176.093,298.1,175.822,296.497z" />
                                        <path fill="#85ABEF" d="M185.849,289.33c0.723-0.724,2.679-0.133,5.013-1.503c0.001-0.001,12.528-2.549,21.884-6.384    c0.012-0.005-3.236-7.512-3.236-7.512c-3.367,0.13-22.43-3.336-37.002,22.803c-0.016,0.026-0.031,0.054-0.05,0.079    c-0.12,0.175-1.165,1.766,0.007,2.673C174.692,301.209,180.507,294.681,185.849,289.33z" />
                                        <path fill="#B1CDFC" d="M182.249,289.313c0.647-0.792,1.318-1.612,2.014-2.447c0-0.001,0.002-0.001,0.002-0.002    c0.003-0.004,0.004-0.009,0.007-0.013c1.692-1.953,3.749-3.449,6.28-4.54c1.955-0.842,4.194-1.442,6.765-1.827    c0.49-0.072,0.948,0.265,1.021,0.756c0.074,0.491-0.269,0.947-0.756,1.021c-5.445,0.813-9.239,2.643-11.937,5.751h0    c-1.171,1.42-1.084,1.718-0.909,2.312c0.289,0.981,0.736,1.61,1.329,1.87c0.883,0.388,1.915-0.109,1.928-0.113    c7.859-3.549,9.672-3.323,11.763-3.063c1.892,0.234,6.027-0.271,15.384-4.106c0.012-0.005-5.852-13.583-5.852-13.583    c-3.367,0.13-22.274-3.249-37.002,22.803c-0.015,0.026-1.215,1.845-0.043,2.752C174.47,298.605,177.495,295.128,182.249,289.313z" />
                                        <path fill="#1D3285" d="M215.867,285.404l5.751-2.478c0.507-0.219,0.741-0.807,0.523-1.314l-5.747-13.339    c-0.218-0.508-0.807-0.741-1.314-0.523l-5.751,2.479c-0.507,0.218-0.741,0.807-0.522,1.313l5.747,13.34    C214.771,285.389,215.36,285.623,215.867,285.404z" />
                                        <circle fill="#EBF3FD" cx="213.676" cy="272.404" r="1.239" />
                                        <polygon fill="#FFFFFF" points="179.016,272.373 179.971,274.373 179.016,276.373 181.016,275.418 183.016,276.373     182.061,274.373 183.016,272.373 181.016,273.328   " />
                                        <polygon fill="#FFFFFF" points="164.016,292.123 164.971,294.123 164.016,296.123 166.016,295.168 168.016,296.123     167.061,294.123 168.016,292.123 166.016,293.078   " />
                                        <polygon fill="#FFFFFF" points="211.516,298.498 212.471,300.498 211.516,302.498 213.516,301.543 215.516,302.498     214.561,300.498 215.516,298.498 213.516,299.453   " />
                                        <polygon fill="#FFFFFF" points="194.766,316.748 195.721,318.748 194.766,320.748 196.766,319.793 198.766,320.748     197.811,318.748 198.766,316.748 196.766,317.703   " />
                                    </g>
                                </svg>




                                <ul className='a' style={{ fontSize: '1.25rem', width: '80%', marginTop: '25px' }}><li>One of our expert lawyers will meet with you in the comfort of your home, your office or by video conference.</li><br />
                                    <li >No time limit, the meetings take as long as they need to.</li><br />
                                    <li>All of your questions will be answered</li><br /></ul>

                            </div>


                        </Grid>




                    </Grid>

                    <Grid item xs={12} sm={4} >

                        <Grid item xs={12} sm={12} style={{ marginLeft: '1em', marginRight: '1em' }} >
                            <div style={{
                                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <h1 style={{ fontWeight: '600', fontSize: '1.5rem' }}>3. Task completed</h1>
                                {/* <img style={{ position: 'center', height: '180px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FOE5MLR0-min.jpg?alt=media&token=87dd0138-61a0-4c56-b7e7-5699d1014e38' alt="register"></img> */}

                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="120 250 600 80" style={{ height: '150px' }}>
                                    <g xmlns="http://www.w3.org/2000/svg"><polygon fill="#7598D9" points="452.08,273.161 452.08,277.162 458.08,275.162 456.08,271.828 452.08,273.161   "></polygon><polygon fill="#B1CDFC" points="452.08,273.161 448.081,271.828 446.08,275.162 452.08,277.162   "></polygon><polygon fill="#3353B6" points="452.08,265.161 448.081,271.828 452.08,273.161   "></polygon><path fill="rgb(72, 209, 204)" d="M457.396,327.39c0.408-0.137,0.684-0.519,0.684-0.949v-3.278l-6,2v3.999L457.396,327.39z"></path><path fill="rgb(72, 209, 204)" d="M446.765,327.39l5.315,1.771v-3.999l-6-2v3.278C446.08,326.871,446.355,327.253,446.765,327.39z"></path><polygon fill="#7598D9" points="458.08,323.161 458.08,321.161 452.08,323.161 452.08,325.161   "></polygon><polygon fill="#B1CDFC" points="446.08,323.161 452.08,325.161 452.08,323.161 446.08,321.161   "></polygon><polygon fill="#1D3285" points="452.08,273.161 456.08,271.828 452.08,265.161 452.08,273.161   "></polygon><polygon fill="#1D3285" points="452.08,323.161 458.08,321.161 458.08,275.162 452.08,277.162   "></polygon><polygon fill="#3353B6" points="452.08,323.161 452.08,277.162 446.08,275.162 446.08,321.161   "></polygon><path fill="rgb(72, 209, 204)" d="M440.08,329.161h-44c-1.104,0-2-0.895-2-2v-60c0-1.104,0.896-2,2-2h44c1.104,0,2,0.896,2,2v60    C442.08,328.267,441.185,329.161,440.08,329.161z"></path><path fill="rgb(72, 209, 204)" d="M437.08,325.161h-38c-0.553,0-1-0.447-1-1v-54c0-0.552,0.447-1,1-1h38c0.552,0,1,0.448,1,1v54    C438.08,324.714,437.632,325.161,437.08,325.161z"></path><path fill="#EBF3FD" d="M406.08,265.161v5.001c0,1.656,1.343,3,3,3h18c1.656,0,3-1.344,3-3v-5.001H406.08z M428.58,270.162    c0,0.827-0.673,1.5-1.5,1.5h-18c-0.827,0-1.5-0.673-1.5-1.5v-3.501h21V270.162z"></path><path fill="#3353B6" d="M433.081,281.445h-10.403c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h10.403    c0.414,0,0.75,0.336,0.75,0.75S433.495,281.445,433.081,281.445z"></path><path fill="#3353B6" d="M418.677,281.445h-6.595c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h6.595    c0.414,0,0.75,0.336,0.75,0.75S419.091,281.445,418.677,281.445z"></path><path fill="#3353B6" d="M424.08,285.445h-11.998c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h11.998    c0.414,0,0.75,0.336,0.75,0.75S424.494,285.445,424.08,285.445z"></path><path fill="#3353B6" d="M418.323,292.411h-6.241c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h6.241    c0.414,0,0.75,0.336,0.75,0.75S418.737,292.411,418.323,292.411z"></path><path fill="#3353B6" d="M417.08,296.411h-4.998c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h4.998    c0.414,0,0.75,0.336,0.75,0.75S417.494,296.411,417.08,296.411z"></path><path fill="#3353B6" d="M417.08,303.412h-4.998c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h4.998    c0.414,0,0.75,0.336,0.75,0.75S417.494,303.412,417.08,303.412z"></path><path fill="#3353B6" d="M418.323,307.412h-6.241c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h6.241    c0.414,0,0.75,0.336,0.75,0.75S418.737,307.412,418.323,307.412z"></path><path fill="#3353B6" d="M424.08,314.413h-11.998c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h11.998    c0.414,0,0.75,0.336,0.75,0.75S424.494,314.413,424.08,314.413z"></path><path fill="#3353B6" d="M428.081,318.413h-7c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h7c0.414,0,0.75,0.336,0.75,0.75    S428.495,318.413,428.081,318.413z"></path><path fill="#3353B6" d="M417.08,318.413h-4.998c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h4.998    c0.414,0,0.75,0.336,0.75,0.75S417.494,318.413,417.08,318.413z"></path><circle fill="#FFFFFF" cx="405.08" cy="282.695" r="3"></circle><path fill="#EBF3FD" d="M405.94,279.835c0.082,0.274,0.14,0.56,0.14,0.86c0,1.656-1.343,3-3,3c-0.301,0-0.585-0.058-0.859-0.141    c0.371,1.235,1.504,2.141,2.859,2.141c1.657,0,3-1.343,3-3C408.08,281.339,407.175,280.207,405.94,279.835z"></path><circle fill="#FFFFFF" cx="405.08" cy="293.661" r="3"></circle><path fill="#EBF3FD" d="M405.94,290.802c0.082,0.273,0.14,0.559,0.14,0.859c0,1.657-1.343,3-3,3c-0.301,0-0.585-0.058-0.859-0.141    c0.371,1.235,1.504,2.141,2.859,2.141c1.657,0,3-1.343,3-3C408.08,292.306,407.175,291.173,405.94,290.802z"></path><circle fill="#FFFFFF" cx="405.08" cy="304.662" r="3"></circle><path fill="#EBF3FD" d="M405.94,301.803c0.082,0.273,0.14,0.559,0.14,0.859c0,1.657-1.343,3-3,3c-0.301,0-0.585-0.058-0.859-0.14    c0.371,1.234,1.504,2.14,2.859,2.14c1.657,0,3-1.343,3-3C408.08,303.307,407.175,302.174,405.94,301.803z"></path><circle fill="#FFFFFF" cx="405.08" cy="315.663" r="3"></circle><path fill="#EBF3FD" d="M405.94,312.804c0.082,0.274,0.14,0.559,0.14,0.859c0,1.657-1.343,3-3,3c-0.301,0-0.585-0.058-0.859-0.14    c0.371,1.234,1.504,2.14,2.859,2.14c1.657,0,3-1.343,3-3C408.08,314.308,407.175,313.175,405.94,312.804z"></path><circle fill="#E39C26" cx="434.08" cy="299.162" r="15"></circle><path fill="#DF751B" d="M444.152,288.07c1.223,2.171,1.927,4.672,1.927,7.341c0,8.284-6.716,15-15,15    c-3.883,0-7.409-1.487-10.073-3.908c2.571,4.568,7.458,7.659,13.074,7.659c8.284,0,15-6.716,15-15    C449.08,294.761,447.172,290.814,444.152,288.07z"></path><path fill="#EBF3FD" d="M443.842,296.652l-2.565-2.565c-0.413-0.413-1.082-0.413-1.495-0.002l-6.285,6.261    c-0.413,0.412-1.082,0.411-1.495-0.002l-3.193-3.193c-0.206-0.206-0.541-0.206-0.748,0l-2.939,2.939    c-0.413,0.413-0.413,1.083,0,1.497l6.881,6.88c0.413,0.413,1.082,0.413,1.495,0.001l10.345-10.318    C444.255,297.736,444.255,297.065,443.842,296.652z"></path><path fill="#FFFFFF" d="M432.001,304.898l-5.845-5.845l-1.036,1.036c-0.413,0.413-0.413,1.083,0,1.497l6.881,6.88    c0.413,0.413,1.082,0.413,1.495,0.001l10.345-10.318c0.414-0.413,0.414-1.084,0.001-1.497l-1.037-1.037l-9.309,9.284    C433.083,305.312,432.414,305.312,432.001,304.898z"></path></g>


                                </svg>













                                <ul className='a' style={{ fontSize: '1.25rem', width: '80%', marginTop: '25px' }}><li>Your wills are prepared on the spot or within 7 days</li><br />
                                    <li style={{}}>Our lawyers can help by witnessing the documents</li><br />
                                    <li>Store a copy of your will securely on our platform</li><br /></ul>
                            </div>


                        </Grid>




                    </Grid>
                </Grid>


                {/* /</div> */}
            </section>
            <section className="section" style={{ marginTop: '0.5rem', marginBottom: '0.8rem', }}>

                <div style={{ display: 'flex' }}>
                    <Grid item xs={12} sm={4}>
                        <img style={{ marginLeft: '5vw' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FCanva%20-%20Health%20Insurance%20Manager%20Talking%20to%20a%20Couple-min.jpg?alt=media&token=3e1929f8-5d04-4fef-9fc2-976bc3fe9c18' alt="register" ></img>
                    </Grid>
                    <Grid item xs={12} sm={8} >
                        <div style={{ alignItems: 'left', marginLeft: '12vw', }}>
                            {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', }}> */}
                            <div>
                                <h2 style={{ lineHeight: '1.5em', fontSize: '1.25rem', fontWeight: 'bold' }}>Create your booking today<br /><br /> </h2>
                                <h3 style={{ lineHeight: '1.5em', }}>With MyTribe, you could experience professional service. </h3>
                            </div>

                            <div style={{ marginTop: '1rem', }}>


                                <Button variant="primary" href='https://app.my-tribe.com.au/signup' target='_blank' style={{


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
                                <Button variant="primary" href='https://my-tribe.com.au/packages' target='_blank' style={{

                                    margin: '10px',

                                    textAlign: 'center',
                                    color: 'white',
                                    fontSize: '1em',
                                    borderColor: '#FFF',
                                    borderRadius: '10px',
                                    paddingLeft: '18px',
                                    paddingRight: '18px',
                                    paddingTop: '10px',
                                    paddingBottom: '10px',
                                    backgroundColor: '#8080804d',



                                }}>
                                    Learn More

              </Button>
                            </div>
                        </div>
                    </Grid>
                </div>




            </section>

        </Layout >
    )
}

export default clients