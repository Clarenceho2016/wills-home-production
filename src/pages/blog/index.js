import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import bg from '../../../static/img/blog.jpg'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            marginTop: '100vh',
            backgroundImage: `url(${
              bg
              })`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              // backgroundColor: '#007bff',
              color: 'rgb(21, 33, 137)',
              padding: '1rem',
            }}
          >
            Blog
          </h1>
        </div>
        <section className="section" >
          <div className="container" >
            <div className="content" >
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
