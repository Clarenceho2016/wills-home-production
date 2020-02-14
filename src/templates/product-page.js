import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Button from "react-bootstrap/Button";

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
    <div className="content">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
        }}
      >
        <h2
          className="has-text-weight-bold is-size-1"
          style={{
            // boxShadow: '0.5rem 0 0 #007bff, -0.5rem 0 0 #007bff',
            // backgroundColor: '#007bff',
            marginTop: '10vh',
            color: 'white',
            padding: '1rem',
          }}
        >
          {title}
        </h2>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <h3 className="has-text-weight-semibold is-size-2" style={{
                  justifyContent: 'center !important',
                  textAlign: 'center',
                  boxShadow: '0.5rem 0 0 #007bff, -0.5rem 0 0 #007bff',
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '2rem',
                }}
                >{heading}</h3>
                <h5 style={{
                  justifyContent: 'center !important',
                  textAlign: 'center',
                }}>{description}{pricing.description}</h5>

                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <h4 className="has-text-centered has-text-weight-semibold">
                          Standard Wills Individual
          </h4>

                        <article style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                          <PreviewCompatibleImage imageInfo={main.image1} />
                        </article>

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                          <h2 style={{ marginTop: '0.5em', color: '#007bff', fontSize: '2rem' }}>
                            $275
          </h2>
                          <p className="has-text-weight-semibold">Perfect for singles</p>
                          <ul>

                            <li >
                              Includes XYZ
              </li>

                          </ul>
                        </div></div>

                      <div className="tile is-parent is-vertical">
                        <h4 className="has-text-centered has-text-weight-semibold">
                          Testamentary Trust Wills Individual
          </h4>


                        <article style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                          <PreviewCompatibleImage imageInfo={main.image2} />
                        </article>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                          <h2 style={{ marginTop: '0.5em', color: '#007bff', fontSize: '2rem' }}>
                            $770
          </h2>
                          <p className="has-text-weight-semibold">Perfect for something</p>
                          <ul>

                            <li >
                              Great for XYZ
              </li>

                          </ul>
                        </div>
                      </div>
                    </div>


                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <h4 className="has-text-centered has-text-weight-semibold">
                          Standard Wills Couple
          </h4>

                        <article style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                          <PreviewCompatibleImage imageInfo={main.image3} />
                        </article>

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                          <h2 style={{ marginTop: '0.5em', color: '#007bff', fontSize: '2rem' }}>
                            $550
          </h2>
                          <p className="has-text-weight-semibold">Wills for couples</p>
                          <ul>

                            <li className="is-size-5">
                              Great for AOS
              </li>

                          </ul>
                        </div>
                      </div>

                      <div className="tile is-parent is-vertical">
                        <h4 className="has-text-centered has-text-weight-semibold">
                          Testamentary Trust Wills Couple
          </h4>


                        <article style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                          <PreviewCompatibleImage imageInfo={main.image3} />
                        </article>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                          <h2 style={{ marginTop: '0.5em', color: '#007bff', fontSize: '2rem' }}>
                            $1400
          </h2>
                          <p className="has-text-weight-semibold">Full package for all couples</p>
                          <ul>

                            <li className="is-size-5">
                              This is great for RST
              </li>

                          </ul>
                        </div>
                      </div> </div>





                  </div>
                </div>







              </div>
            </div>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                {/* <Features gridItems={intro.blurbs} /> */}
                <div className="columns">
                  <div className="column is-12" >
                    <h3 className="has-text-weight-semibold is-size-3" style={{
                      justifyContent: 'center !important',
                      textAlign: 'center',
                      color: '#007bff',
                      padding: '2rem',
                    }} >
                      {main.heading}
                    </h3>
                    <p>{main.description}</p>

                  </div>
                </div>

                <Testimonials testimonials={testimonials} />
                <div
                  className="full-width-image-container"
                  style={{
                    backgroundImage: `url(${
                      fullImage.childImageSharp
                        ? fullImage.childImageSharp.fluid.src
                        : fullImage
                      })`,
                  }}
                />

                {/* <h2 className="has-text-weight-semibold is-size-2">
                  {pricing.heading}
                </h2>
                <p className="is-size-5">{pricing.description}</p>
                <Pricing data={pricing.plans} /> */}

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
        <Button variant="primary" style={{
          margin: '15px',

          borderRadius: '10px',
          fontSize: '20px',
          padding: '15px',




        }}>
          <Link to="/products" style={{
            margin: '15px',
            width: '50%',
            position: 'center',
            borderRadius: '10px',
            fontSize: '20px',
            color: '#ffffff',
            padding: '15px',
          }}>
            Sign-Up and Book
        </Link>
        </Button>
      </div>
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
    markdownRemark(id: { eq: $id }) {
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
                fluid(maxWidth: 1075, quality: 72) {
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
