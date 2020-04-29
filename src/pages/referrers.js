import React from 'react'
//import leftImg from '../img/hs.jpg'
import Layout from '../components/Layout'
import Link from "gatsby-link";
import Grid from "@material-ui/core/Grid";
import Button from "react-bootstrap/Button";
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import bg from '../../static/img/referrer-1.png'
const referrers = () => {
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
                            // className="is-size-4-mobile is-size-3-tablet is-size-2-widescreen"
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
                            Do you have client’s that need an estate plan, but don’t have the time to meet a lawyer?
        </h2>
                        <p style={{
                            color: 'white',
                            fontSize: '1.75rem',
                            lineHeight: '1.5',
                            padding: '1em',
                        }}>MyTribe allows your organisation to create an account and make bookings on behalf of your clients. </p>
                        <Button variant="primary" style={{
                            margin: '35px',
                            backgroundColor: '#48D1CC',
                            border: 'none',
                            width: '40%',
                            borderRadius: '10px',
                            fontSize: '30px',
                            padding: '15px',

                        }}>
                            <a href="https://app.my-tribe.com.au/referrer-signup" target='_blank' style={{
                                color: '#ffffff',
                                borderRadius: '10px',

                            }}>
                                Join Today
                  </a>
                        </Button>

                    </div>
                </Grid>
            </div>
            <section className="section" style={{ textAlign: 'center', marginTop: '0.5rem', marginBottom: '0.8rem', marginRight: '8vw', marginLeft: '8vw' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75em' }}>Do you want a trusted lawyer you can refer your clients to?
</h1>
                <p style={{

                    fontSize: '1rem',
                    lineHeight: '1.5',

                }}>One of our lawyers will come to your office or to your client’s home, enabling you to be as involved in the process as you like and ensuring that your clients get expert advice and an estate plan.</p>
            </section>
            <section className="section" >
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75em' }}>Trusted lawyers
</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
                    <div style={{ marginTop: '30px', marginRight: '30px', }}><ul className='b'>
                        <li style={{ width: '90%' }}>  All our lawyers are experienced estate planning lawyers
</li>
                        <li style={{ width: '90%' }}>  Your client will receive a comprehensive suite of expertly drafted estate planning documents</li>
                    </ul></div>
                    <div >
                        {/* //<Grid item xs={12} sm={6}> */}
                        <img style={{ borderRadius: '60%', position: 'center', height: '180px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2F59871-min.jpg?alt=media&token=58e5b2c0-f4a2-4bc0-b53d-1ffaf23aa5d7' alt="register"></img>
                        {/* //</Grid> */}
                    </div>
                </div>
            </section>

            <section className="section" style={{ marginBottom: '0.8rem', }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px', marginLeft: '12rem', marginRight: '12rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.75em', }}>Do you want to add value to your client’s experience with your business?</h1>
                </div> {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}> */}
                <Grid container spacing={12}>
                    <Grid item xs={12} sm={6} >

                        <Grid item xs={12} sm={12} style={{ marginLeft: '1em', marginRight: '1em' }} >
                            <div style={{
                                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                                alignItems: 'center'
                            }}>

                                <h1 style={{ fontWeight: '600', fontSize: '1.5rem' }}>Participate in the estate planning process</h1>
                                {/* <img style={{ height: '180px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2F3074320-min.jpg?alt=media&token=803f55fc-ea6b-419f-8bb4-dc3c9a543df4' alt="register"></img> */}

                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="300 250 300 80" style={{ height: '180px' }} >

                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#7598D9" d="M401.169,273.16h62.999c0.552,0,1,0.448,1,1v54c0,0.553-0.448,1-1,1h-54.999c-4.419,0-8-3.582-8-8V273.16z    " />
                                        <path fill="rgb(72, 209, 204)" d="M401.167,273.16h60c0.553,0,1,0.448,1,1v51c0,0.552-0.447,1-1,1h-52c-4.418,0-8-3.582-8-8V273.16z" />
                                        <path fill="rgb(72, 209, 204)" d="M401.169,318.16c0-4.418,3.581-8,8-8v-45c-4.419,0-8,3.582-8,8V318.16z" />
                                        <circle fill="#3353B6" cx="437.167" cy="278.16" r="13" />
                                        <path fill="#1D3285" d="M444.792,267.647c1.557,2.143,2.486,4.771,2.486,7.624c0,7.18-5.82,13-13,13    c-2.853,0-5.481-0.93-7.625-2.486c2.363,3.252,6.187,5.375,10.514,5.375c7.18,0,13-5.82,13-13    C450.167,273.833,448.043,270.01,444.792,267.647z" />
                                        <path fill="#EBF3FD" d="M444.352,276.25l-2.302-2.303c-0.252-0.251-0.659-0.252-0.912-0.001l-5.245,5.226    c-0.252,0.251-0.659,0.251-0.911-0.001l-2.503-2.503c-0.252-0.252-0.66-0.252-0.912,0l-2.302,2.302    c-0.252,0.252-0.252,0.66,0,0.912l5.717,5.717c0.251,0.252,0.659,0.252,0.911,0.001l8.459-8.438    C444.604,276.911,444.604,276.502,444.352,276.25z" />
                                        <path fill="#FFFFFF" d="M443.352,275.25l-1.302-1.303c-0.252-0.251-0.659-0.252-0.912-0.001l-5.245,5.226    c-0.252,0.251-0.659,0.251-0.911-0.001l-2.503-2.503c-0.252-0.252-0.66-0.252-0.912,0l-2.302,2.302    c-0.252,0.252-0.252,0.66,0,0.912l4.717,4.717c0.251,0.252,0.659,0.252,0.911,0.001l8.458-8.438    C443.604,275.91,443.604,275.502,443.352,275.25z" />
                                        <path fill="#3353B6" d="M439.172,313.16h-4c-1.657,0-3,1.343-3,3v4c0,1.656,1.343,3,3,3h4c1.656,0,3-1.344,3-3v-4    C442.172,314.503,440.829,313.16,439.172,313.16z" />
                                        <path fill="#3353B6" d="M422.17,313.16h-4c-1.657,0-3,1.343-3,3v4c0,1.656,1.343,3,3,3h4c1.657,0,3-1.344,3-3v-4    C425.17,314.503,423.828,313.16,422.17,313.16z" />
                                        <path fill="#3353B6" d="M430.671,299.158h-4c-1.656,0-3,1.343-3,3v4c0,1.657,1.344,3,3,3h4c1.657,0,3-1.343,3-3v-4    C433.671,300.501,432.329,299.158,430.671,299.158z" />
                                        <path fill="#3353B6" d="M456.174,313.16h-4c-1.657,0-3,1.343-3,3v4c0,1.656,1.343,3,3,3h4c1.656,0,3-1.344,3-3v-4    C459.174,314.503,457.831,313.16,456.174,313.16z" />
                                        <path fill="#3353B6" d="M456.174,313.16h-4c-1.657,0-3,1.343-3,3v4c0,1.656,1.343,3,3,3h4c1.656,0,3-1.344,3-3v-4    C459.174,314.503,457.831,313.16,456.174,313.16z" />
                                        <path fill="#3353B6" d="M447.673,299.158h-4c-1.657,0-3,1.343-3,3v4c0,1.657,1.343,3,3,3h4c1.656,0,3-1.343,3-3v-4    C450.673,300.501,449.33,299.158,447.673,299.158z" />
                                        <path fill="#DD4A11" d="M447.173,301.658h-3c-0.553,0-1,0.448-1,1v3c0,0.553,0.447,1,1,1h3c0.552,0,1-0.447,1-1v-3    C448.173,302.106,447.725,301.658,447.173,301.658z" />
                                        <path fill="#DD4A11" d="M430.171,301.658h-3c-0.552,0-1,0.448-1,1v3c0,0.553,0.448,1,1,1h3c0.553,0,1-0.447,1-1v-3    C431.171,302.106,430.724,301.658,430.171,301.658z" />
                                        <path fill="#DF751B" d="M421.67,315.66h-3c-0.552,0-1,0.447-1,1v3c0,0.552,0.448,1,1,1h3c0.553,0,1-0.448,1-1v-3    C422.67,316.107,422.223,315.66,421.67,315.66z" />
                                        <path fill="#E39C26" d="M438.672,315.66h-3c-0.553,0-1,0.447-1,1v3c0,0.552,0.447,1,1,1h3c0.552,0,1-0.448,1-1v-3    C439.672,316.107,439.224,315.66,438.672,315.66z" />
                                        <path fill="#DF751B" d="M455.674,315.66h-3c-0.553,0-1,0.447-1,1v3c0,0.552,0.447,1,1,1h3c0.552,0,1-0.448,1-1v-3    C456.674,316.107,456.226,315.66,455.674,315.66z" />
                                        <rect x="425.171" y="317.16" fill="#EBF3FD" width="7" height="2" />
                                        <path fill="#EBF3FD" d="M455.174,313.16h-2v-8.002h-2.501v-2h3.501c0.553,0,1,0.447,1,1V313.16z" />
                                        <path fill="#EBF3FD" d="M421.17,313.159h-2v-9.001c0-0.553,0.447-1,1-1h3.501v2h-2.501V313.159z" />
                                        <rect x="444.673" y="293.391" fill="#EBF3FD" width="2" height="5.768" />
                                        <polygon fill="#EBF3FD" points="448.266,294.149 445.673,289.659 443.081,294.149   " />
                                        <rect x="427.671" y="293.391" fill="#EBF3FD" width="2" height="5.768" />
                                        <polygon fill="#EBF3FD" points="431.264,294.149 428.671,289.659 426.079,294.149   " />
                                        <path fill="#B1CDFC" d="M451.173,281.773c1.658,0,3,1.342,3,3c0-1.658,1.342-3,3-3c-1.658,0-3-1.342-3-3    C454.173,280.432,452.832,281.773,451.173,281.773z" />
                                        <path fill="#B1CDFC" d="M455.174,295.029c1.658,0,3,1.342,3,3c0-1.658,1.342-3,3-3c-1.658,0-3-1.342-3-3    C458.174,293.688,456.833,295.029,455.174,295.029z" />
                                        <path fill="#B1CDFC" d="M412.17,291.029c1.658,0,3,1.342,3,3c0-1.658,1.342-3,3-3c-1.658,0-3-1.342-3-3    C415.17,289.688,413.829,291.029,412.17,291.029z" />
                                        <path fill="#B1CDFC" d="M416.169,278.16c1.658,0,3,1.342,3,3c0-1.658,1.342-3,3-3c-1.658,0-3-1.342-3-3    C419.169,276.818,417.828,278.16,416.169,278.16z" />
                                    </g></svg>




                                <ul className='a' style={{ fontSize: '1.25rem', width: '80%', marginTop: '25px' }}><li >You can provide our lawyers with detailed instructions based on your knowledge of your client’s circumstances
</li><br />
                                    <li >Collaborate with our lawyers concerning the plan for the clients
</li><br />
                                    <li>Weigh in on what to do with insurances and binding death benefit nominations
</li><br /><br /></ul>
                            </div>

                        </Grid>

                    </Grid>

                    <Grid item xs={12} sm={6} >

                        <Grid item xs={12} sm={12} style={{ marginLeft: '1em', marginRight: '1em' }} >
                            <div style={{
                                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <h1 style={{ fontWeight: '600', fontSize: '1.5rem', }}>Add value to your clients</h1>
                                {/* <img style={{ position: 'center', height: '180px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2F4380-min.jpg?alt=media&token=bd979969-ece8-4463-b2f9-bd5337db59a5' alt="register"></img> */}

                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="5 370 150 80" style={{ height: '180px' }}>

                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <rect x="77.464" y="410.995" fill="#3353B6" width="2" height="35.999" />
                                        <circle fill="#E39C26" cx="78.464" cy="401.995" r="12" />
                                        <circle fill="#EBF3FD" cx="85.459" cy="401.995" r="1" />
                                        <circle fill="#EBF3FD" cx="71.459" cy="401.995" r="1" />
                                        <path fill="#DF751B" d="M78.464,389.995c-6.627,0-12,5.373-12,12c0,6.628,5.373,12,12,12s12-5.372,12-12    C90.464,395.368,85.092,389.995,78.464,389.995z M78.464,412.495c-5.79,0-10.5-4.71-10.5-10.5s4.71-10.5,10.5-10.5    c5.79,0,10.5,4.71,10.5,10.5S84.254,412.495,78.464,412.495z" />
                                        <path fill="#EBF3FD" d="M78.47,408.628c-1.657,0-3.116-0.923-3.716-2.351c-0.161-0.382,0.019-0.822,0.401-0.982    c0.383-0.16,0.822,0.02,0.982,0.4c0.36,0.857,1.298,1.433,2.333,1.433c1.371,0,2.486-0.983,2.486-2.191    c0-1-0.434-2.191-2.498-2.191c-2.94,0-3.987-1.906-3.987-3.69c0-2.035,1.789-3.691,3.987-3.691c1.657,0,3.116,0.923,3.716,2.352    c0.161,0.382-0.019,0.821-0.401,0.981c-0.381,0.163-0.822-0.02-0.982-0.401c-0.36-0.856-1.297-1.432-2.333-1.432    c-1.371,0-2.487,0.983-2.487,2.191c0,0.999,0.432,2.19,2.487,2.19c2.948,0,3.998,1.907,3.998,3.691    C82.457,406.972,80.668,408.628,78.47,408.628z" />
                                        <path fill="#EBF3FD" d="M78.458,396.863c-0.414,0-0.75-0.336-0.75-0.75v-1.618c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75    v1.618C79.208,396.527,78.873,396.863,78.458,396.863z" />
                                        <path fill="#EBF3FD" d="M78.458,410.245c-0.414,0-0.75-0.336-0.75-0.75v-1.617c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75    v1.617C79.208,409.909,78.873,410.245,78.458,410.245z" />
                                        <path fill="#1D3285" d="M93.464,445.994h-58c-1.657,0-3,1.344-3,3l0,0h64l0,0C96.464,447.338,95.121,445.994,93.464,445.994z" />
                                        <path fill="#3353B6" d="M67.101,391.258l-2.18-2.281c-0.046-0.049-0.122-0.055-0.175-0.014l-11.273,8.714    c-0.919,0.71-2.048,1.096-3.21,1.096h-8.354l-4.156,0.561c-1.696,0.229-3.028,1.565-3.251,3.262l-1.971,15.031    c-0.014,0.102,0.056,0.194,0.156,0.211l2.923,0.489c0.1,0.017,0.195-0.048,0.216-0.147l2.467-11.663    c0.047-0.223,0.375-0.188,0.375,0.039l-0.001,11.631h14.7l0-9.812c0-1.695,0.656-3.325,1.831-4.548L67.1,391.439    C67.149,391.389,67.149,391.309,67.101,391.258z" />
                                        <path fill="#1D3285" d="M65.849,389.948l-12.384,12.063c-1.741,1.696-2.724,4.024-2.723,6.456v9.718h2.625l0-9.813    c0-1.694,0.656-3.324,1.831-4.546L67.1,391.439c0.049-0.051,0.049-0.131,0-0.182L65.849,389.948z" />
                                        <path fill="#E6C1BD" d="M46.007,401.323c0,0,4.073-0.895,4.1-2.551c-0.863-0.442-1.511-1.233-1.693-2.203    c-0.027-0.142-0.047-1.043-0.063-1.18l-4.691,0.004c-0.018,0.156-0.043,1.081-0.075,1.249c-0.185,0.951-0.823,1.711-1.675,2.13    C41.945,400.423,46.007,401.323,46.007,401.323z" />
                                        <ellipse fill="#F3D3CF" cx="46.007" cy="392.296" rx="4.178" ry="5.238" />
                                        <path fill="#1D3285" d="M41.893,391.548c0,0-1.022-1.309-0.375-3.789c0.668-2.565,2.627-2.091,2.627-2.091    s0.636-0.674,2.126-0.674c1.845,0,3.44,0.439,4.169,2.218c0.729,1.777-0.25,4.336-0.25,4.336s-0.625-2.246-2.668-2.91    c0,0-0.792,0.879-3.19,0.879S41.893,391.548,41.893,391.548z" />
                                        <path fill="#F3D3CF" d="M50.42,391.001c-0.446-0.095-1.036,0.491-1.187,1.177c-0.151,0.685,0.088,1.317,0.533,1.412    s0.989-0.368,1.14-1.054C51.057,391.852,50.865,391.096,50.42,391.001z" />
                                        <path fill="#F3D3CF" d="M41.594,391.001c0.445-0.095,1.036,0.491,1.187,1.177c0.151,0.685-0.087,1.317-0.533,1.412    c-0.445,0.095-0.989-0.368-1.14-1.054C40.957,391.852,41.149,391.096,41.594,391.001z" />
                                        <path fill="#E6C1BD" d="M66.985,391.138l2.088-2.167c0.404-0.419,0.392-1.086-0.027-1.49l-0.226-0.217    c-0.376-0.364-0.962-0.396-1.376-0.076l-2.415,1.902L66.985,391.138z" />
                                        <path fill="#E6C1BD" d="M32.827,417.857l2.667,0.445l-0.723,3.068c-0.114,0.482-0.581,0.795-1.07,0.718l-0.438-0.069    c-0.501-0.079-0.851-0.539-0.793-1.043L32.827,417.857z" />
                                        <path fill="#3353B6" d="M41.718,443.123h-5.241c-1.315,0-2.382,1.066-2.382,2.383l0,0c0,0.263,0.213,0.477,0.477,0.477    l7.078,0.012c0.296,0.001,0.521-0.266,0.47-0.558L41.718,443.123z" />
                                        <path fill="#3353B6" d="M50.295,443.123h5.241c1.316,0,2.382,1.066,2.382,2.383l0,0c0,0.263-0.213,0.477-0.477,0.477l-7.078,0.012    c-0.296,0.001-0.521-0.266-0.47-0.558L50.295,443.123z" />
                                        <path fill="rgb(72, 209, 204)" d="M54.611,443.122l-1.244-24.937h-14.7l-1.244,24.937h4.305l3.946-19.802c0.075-0.375,0.611-0.375,0.685,0    l3.946,19.802H54.611z" />
                                        <polygon fill="rgb(72, 209, 204)" points="53.367,418.186 50.742,418.186 51.976,443.123 54.601,443.123   " />
                                        <circle fill="#B1CDFC" cx="63.029" cy="410.315" r="2" />
                                        {/* #7598D9 85ABEF*/}
                                        <circle fill="#B1CDFC" cx="61.362" cy="403.633" r="1" />
                                        <circle fill="#B1CDFC" cx="56.987" cy="416.444" r="1" />
                                        <circle fill="#B1CDFC" cx="61.029" cy="423.194" r="1.5" />
                                        <circle fill="#B1CDFC" cx="58.939" cy="436.994" r="1" />
                                        <circle fill="#B1CDFC" cx="64.029" cy="442.122" r="1.5" />
                                        <circle fill="#B1CDFC" cx="72.529" cy="440.31" r="1" />
                                        <path fill="#E39C26" d="M78.463,424.992h-6c-5.523,0-10-4.477-10-10l0,0h6C73.986,414.992,78.463,419.47,78.463,424.992    L78.463,424.992z" />
                                        <path fill="#DF751B" d="M78.463,424.992h-6c-5.523,0-10-4.477-10-10l0,0C62.463,414.992,72.687,418.329,78.463,424.992    L78.463,424.992z" />
                                        <path fill="#E39C26" d="M78.465,428.992h6c5.523,0,10-4.477,10-10l0,0h-6C82.942,418.992,78.465,423.47,78.465,428.992    L78.465,428.992z" />
                                        <path fill="#DF751B" d="M78.465,428.992h6c5.523,0,10-4.477,10-10l0,0C94.465,418.992,84.242,422.329,78.465,428.992    L78.465,428.992z" />
                                        <path fill="#E39C26" d="M78.465,441.994h8c5.522,0,10-4.478,10-10l0,0h-8C82.942,431.994,78.465,436.471,78.465,441.994    L78.465,441.994z" />
                                        <path fill="#DF751B" d="M78.465,441.994h8c5.522,0,10-4.478,10-10l0,0C96.465,431.994,87.062,434.467,78.465,441.994    L78.465,441.994z" />
                                        <path fill="#E39C26" d="M78.463,437.994h-8c-5.523,0-10-4.478-10-10l0,0h8C73.986,427.994,78.463,432.471,78.463,437.994    L78.463,437.994z" />
                                        <path fill="#DF751B" d="M78.463,437.994h-8c-5.523,0-10-4.478-10-10l0,0C60.463,427.994,69.867,430.467,78.463,437.994    L78.463,437.994z" />
                                        <circle fill="#B1CDFC" cx="94.465" cy="443.31" r="1" />
                                        <circle fill="#B1CDFC" cx="83.528" cy="416.444" r="1" />
                                        <circle fill="#B1CDFC" cx="90.464" cy="413.319" r="1.5" />
                                        <circle fill="#B1CDFC" cx="83.464" cy="386.494" r="1.5" />
                                        <circle fill="#B1CDFC" cx="88.964" cy="390.436" r="1" />
                                    </g></svg>





                                <ul className='a' style={{ fontSize: '1.25rem', width: '80%', marginTop: '25px' }}><li>By facilitating this process, you add significant value to your client’s overall experience
</li><br />

                                    <li>Protect your client’s generational wealth, you can even invite your clients to bring their children along to participate in the process where appropriate. </li><br /><br /></ul>
                            </div>


                        </Grid>




                    </Grid>
                </Grid>


                {/* /</div> */}
            </section>













            <section className="section" style={{ marginTop: '0.5rem', marginBottom: '0.8rem', }}>

                <div style={{ display: 'flex' }}>
                    <Grid item xs={12} sm={4}>
                        <img style={{ marginLeft: '5vw' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FCanva%20-%20Lawyer%20Has%20an%20Idea-min-min.jpg?alt=media&token=bc185d12-1099-4aea-858f-5902798f3116' alt="register" ></img>
                    </Grid>
                    <Grid item xs={12} sm={8} >
                        <div style={{ alignItems: 'left', marginLeft: '12vw', }}>
                            <div>

                                <h2 style={{ lineHeight: '1.5em', fontSize: '1.25rem', fontWeight: 'bold' }}>Get started today with a referrer account<br /><br /> </h2>
                                <h3 style={{ lineHeight: '1.5em', }}>We are trusted lawyers whom you can refer to meet the needs of your valued clients. </h3>
                            </div>


                            <div
                                style={{ marginTop: '1rem', }}>


                                <Button variant="primary" href='https://app.my-tribe.com.au/referrer-signup' style={{
                                    //margin: '10px',


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

              </Button>  </div>
                        </div>
                    </Grid>
                </div>




            </section>

        </Layout >
    )
}

export default referrers



