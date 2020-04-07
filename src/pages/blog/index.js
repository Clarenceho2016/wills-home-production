import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fblog.png?alt=media&token=65527b20-b7da-4aa3-a3cf-7502fde4cd9c')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              // backgroundColor: '#007bff',
              marginTop: '10vh',
              color: 'rgb(21, 33, 137)',
              //color: '#152189',
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
