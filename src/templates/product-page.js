import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Button from "react-bootstrap/Button";
import Grid from "@material-ui/core/Grid";
// import bg1 from '../../static/img/helloquence-oqmzwnd3thu-unsplash-3-.jpg'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
    <div>

      <div
        className="full-width-image margin-top-0"
        style={{
          marginTop: '100vh',
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
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
          <div
            style={{
              display: 'flex',
              // padding: '0.5em',
              marginTop: '60px',

              paddingBottom: '20px',
              paddingTop: '20px',


              flexDirection: 'column',

            }}
          >
            <h2
              className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
              style={{
                // color: '#2b2523a3',

                position: 'static',
                lineHeight: '1.5',
                padding: '0.5em',
                color: 'white',
                fontWeight: '700',
                //fontSize: '50px',
              }}
            >
              Don’t risk those most important to you missing out by failing to have a will
              </h2>

            <p style={{
              color: 'white',
              fontSize: '1.75rem',
              lineHeight: '1.5',
              padding: '1em',
            }}>Not all wills are the same. You have options. Learn about the different types of wills here. </p>



          </div>


        </Grid>






      </div>
      <section className='section'>
        {/* <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-12"> */}
        {/* <h3 className="has-text-weight-semibold is-size-2" style={{
                  justifyContent: 'center !important',
                  textAlign: 'center',
                  boxShadow: '0.5rem 0 0 #007bff, -0.5rem 0 0 #007bff',
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '2rem',
                }}
                >{heading}</h3> */}
        {/* <p style={{
                  marginTop: '20px',
                  marginBottom: '20px',
                  justifyContent: 'center !important',
                  textAlign: 'center',
                }}>{description}{pricing.description}</p> */}
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75em' }}>Don’t risk it all with a will kit</h1>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '25px' }}>
          <div style={{ marginTop: '30px', marginRight: '30px' }}>
            <p>Get a tailored package to suit your specific circumstances. We have a package to suit your needs.</p>
          </div>
          <div >

            {/* <img style={{ position: 'center', height: '180px' }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2F549%20(1).jpg?alt=media&token=12e28b3b-4f34-49a2-9aba-db88f1cc2fb1' alt="register"></img> */}

          </div>
        </div>

      </section>
      <section className="section" style={{ marginTop: '0.5rem', marginBottom: '0.8rem', }}>
        <Grid container spacing={12}>
          <Grid item xs={12} sm={6} >

            <Grid item xs={12} sm={12} style={{ padding: '15px', borderRadius: '20px', boxShadow: '0px 50px 80px 50px rgba(106,114,154,0.2)', marginLeft: '1em', marginRight: '1em' }} >

              <div style={{
                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{ textAlign: 'center', }}>
                  <h1 style={{ fontSize: '1.5em', fontWeight: '700' }} >
                    Standard Wills Individual
          </h1></div>
                <div>
                  <h2 style={{ padding: '10px', marginTop: '0.5em', backgroundColor: '#6EC1E4', fontSize: '2rem', borderRadius: '10px' }}>
                    $275
          </h2>
                </div>


                <div

                  style={{

                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      marginTop: '10px',

                      paddingBottom: '20px',
                      paddingTop: '20px',

                      justifyContent: 'space-around',
                      alignItems: 'left',
                      flexDirection: 'column',

                    }}
                  >

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', marginBottom: '40PX' }}>

                      <p className="has-text-weight-semibold" style={{ marginLeft: '35px', }}>What’s included:
</p>
                      <ul className='a' style={{ marginLeft: '35px', marginRight: '20px', }}><li >Standard form Will
</li>
                        <li >Enduring Power of Attorney

</li>
                        <li>Medical Power of Attorney (or equivalent depending on the State)

</li>
                        <li >Binding Death Benefit Nominations

</li>  <li >Privacy consent form


</li></ul>
                    </div>

                  </div></div>
                {/* <img style={{ position: 'center', }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fhelloquence-oqmzwnd3thu-unsplash-3-.jpg?alt=media&token=23cb9f96-748a-4bfe-8f31-480353afa678' alt="register" /> */}


              </div>
            </Grid>

          </Grid>

          <Grid item xs={12} sm={6} >

            <Grid item xs={12} sm={12} style={{ padding: '15px', borderRadius: '20px', boxShadow: '0px 50px 80px 50px rgba(106,114,154,0.2)', marginLeft: '1em', marginRight: '1em' }} >
              <div style={{
                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <h1 style={{ fontSize: '1.5em', fontWeight: '700' }} >
                    Testamentary Trust Wills Individual
</h1></div><div>
                  <h2 style={{ borderRadius: '10px', padding: '12px', marginTop: '0.5em', backgroundColor: '#FBF37E', fontSize: '2rem' }}>
                    $770
</h2></div>
                <div

                  style={{

                    // backgroundImage: `url(${
                    //   bg2
                    //   })`,
                    // backgroundSize: 'cover'
                  }}
                >

                  <div
                    style={{
                      display: 'flex',
                      marginTop: '10px',

                      paddingBottom: '20px',
                      paddingTop: '20px',

                      justifyContent: 'space-around',
                      alignItems: 'left',
                      flexDirection: 'column',

                    }}
                  >

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', marginBottom: '40PX' }}>

                      <p className="has-text-weight-semibold" style={{ marginLeft: '35px', }}>What’s included:
</p>
                      <ul className='a' style={{ marginLeft: '35px', marginRight: '20px', }}><li >A Will that creates testamentary trusts
</li>
                        <li >Enduring Power of Attorney

</li>
                        <li>Medical Power of Attorney (or equivalent depending on the State)

</li>
                        <li >Binding Death Benefit Nominations

</li>  <li >Privacy consent form


</li></ul>
                    </div>

                  </div></div>
                {/* <img style={{ position: 'center', }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fhelloquence-oqmzwnd3thu-unsplash-3-.jpg?alt=media&token=23cb9f96-748a-4bfe-8f31-480353afa678' alt="register" /> */}


              </div>
            </Grid>

          </Grid>












          <Grid item xs={12} sm={6} style={{ marginTop: '30px' }}>

            <Grid item xs={12} sm={12} style={{ padding: '15px', borderRadius: '20px', boxShadow: '0px 50px 80px 50px rgba(106,114,154,0.2)', marginLeft: '1em', marginRight: '1em' }} >
              <div style={{
                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <h1 style={{ fontSize: '1.5em', fontWeight: '700' }}>
                    Standard Wills Couple
</h1></div><div>
                  <h2 style={{ borderRadius: '10px', padding: '12px', marginTop: '0.5em', backgroundColor: '#EF81D4', fontSize: '2rem' }}>
                    $550
</h2></div>
                <div

                  style={{

                    // backgroundImage: `url(${
                    //   bg3
                    //   })`,
                    // backgroundSize: 'cover'
                  }}
                >

                  <div
                    style={{
                      display: 'flex',
                      marginTop: '10px',

                      paddingBottom: '20px',
                      paddingTop: '20px',

                      justifyContent: 'space-around',
                      alignItems: 'left',
                      flexDirection: 'column',

                    }}
                  >

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', marginBottom: '40PX' }}>

                      <p className="has-text-weight-semibold" style={{ marginLeft: '35px', }}>What’s included:
</p>
                      <ul className='a' style={{ marginLeft: '35px', marginRight: '20px', }}><li >A standard form Will for each of you
</li>
                        <li >Enduring Power of Attorney for each of you

</li>
                        <li>Medical Power of Attorney for each of you (or equivalent depending on the State)

</li>
                        <li >Binding Death Benefit Nominations for each of you

</li>  <li >Privacy consent form


</li></ul>
                    </div>

                  </div></div>
                {/* <img style={{ position: 'center', }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fhelloquence-oqmzwnd3thu-unsplash-3-.jpg?alt=media&token=23cb9f96-748a-4bfe-8f31-480353afa678' alt="register" /> */}


              </div>
            </Grid>

          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: '30px' }}>

            <Grid item xs={12} sm={12} style={{ padding: '15px', borderRadius: '20px', boxShadow: '0px 50px 80px 50px rgba(106,114,154,0.2)', marginLeft: '1em', marginRight: '1em' }} >
              <div style={{
                display: 'flex', justifyContent: 'center', flexDirection: 'column',
                alignItems: 'center'
              }}><div style={{ textAlign: 'center' }}>
                  <h1 style={{ fontSize: '1.5em', fontWeight: '700' }} >
                    Testamentary Trust Wills Couple
</h1> </div><div><h2 style={{ borderRadius: '10px', padding: '12px', marginTop: '0.5em', backgroundColor: '#7CE485', fontSize: '2rem' }}>
                  $1400
</h2></div>
                <div

                  style={{

                    // backgroundImage: `url(${
                    //   bg4
                    //   })`,
                    // backgroundSize: 'cover'
                  }}
                >

                  <div
                    style={{
                      display: 'flex',
                      marginTop: '10px',

                      paddingBottom: '20px',
                      paddingTop: '20px',

                      justifyContent: 'space-around',
                      alignItems: 'left',
                      flexDirection: 'column',

                    }}
                  >


                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', marginBottom: '40PX' }}>

                      <p className="has-text-weight-semibold" style={{ marginLeft: '35px', }}>What’s included:
</p>
                      <ul className='a' style={{ marginLeft: '35px', marginRight: '20px', }}><li >A Will that creates testamentary trusts for each of you
</li>
                        <li >Enduring Power of Attorning for each of you

</li>
                        <li>Medical Power of Attorney for each of you (or equivalent depending on the State)

</li>
                        <li >Binding Death Benefit Nominations

</li>  <li >Privacy consent form


</li></ul>
                    </div>

                  </div></div>
                {/* <img style={{ position: 'center', }} src='https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fhelloquence-oqmzwnd3thu-unsplash-3-.jpg?alt=media&token=23cb9f96-748a-4bfe-8f31-480353afa678' alt="register" /> */}


              </div>
            </Grid>

          </Grid>

        </Grid>





      </section>
      <div style={{
        //marginTop: '85vh',
        justifyContent: 'center',
        display: 'flex'
      }}>
        <Button variant="primary" href='https://app.my-tribe.com.au/signup' target='_blank' style={{

          backgroundColor: '#48D1CC',
          border: 'none',
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



        }}>
          Sign-Up and Book
          </Button>
      </div>
      <section className="section" >
        <div className="columns">
          <div className="column is-10 is-offset-1">
            {/* <Features gridItems={intro.blurbs} /> */}
            {/* <div className="columns" style={{ marginBottom: '25px' }}>

            </div> */}

            <Testimonials testimonials={testimonials} />

          </div>

        </div>





      </section>
      {/* <div
        className="full-width-image-container-product"
        style={{
          backgroundImage: `url(${
            fullImage.childImageSharp
              ? fullImage.childImageSharp.fluid.src
              : fullImage
            })`,
        }}
      >





      </div> */}



    </div >
  )


ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string])

  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />

    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
              markdownRemark(id: {eq: $id }) {
              frontmatter {
              title
        image {
              childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
              blurbs {
              image {
              childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
              ...GatsbyImageSharpFluid
            }
              }
            }
            text
          }
          heading
          description
        }
        main {
              heading
          description
          image1 {
              alt
            image {
              childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
              ...GatsbyImageSharpFluid
            }
              }
            }
          }
          image2 {
              alt
            image {
              childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
              ...GatsbyImageSharpFluid
            }
              }
            }
          }
          image3 {
              alt
            image {
              childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
              ...GatsbyImageSharpFluid
            }
              }
            }
          }

        }
        testimonials {
              author
          quote
        }
        full_image {
              childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
              heading
          description
          plans {
              description
            items
            plan
            price
          }
        }
      }
    }
  }
`
