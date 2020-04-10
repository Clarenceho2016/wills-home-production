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
            marginTop: '100vh',
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FCanva%20-%20Close%20up%20photo%20of%20young%20but%20professional%20female%20journalist%2C%20she%20is%20looking%20at%20the%20monitor%20and%20typing%20an%20article%20for%20a%20magazine.jpg?alt=media&token=33422501-7dcb-4589-ad01-8da222d0e68f')`,
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
