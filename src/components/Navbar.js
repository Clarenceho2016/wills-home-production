import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import Button from 'react-bootstrap/Button';


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"

        style={{position: 'fixed', width: '100%'}}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img hlt="testtesttest"  src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2Fmy-tribe-blue-logo-horz.png?alt=media&token=67bac6f5-5d80-4970-87f6-96e08abaadc3"}  style={{ position: 'relative' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered" style={{marginLeft: "auto", marginRight: "inherit",}}>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              {/* <Link className="navbar-item" to="/products">
                Products
              </Link> */}
              {/* <Link className="navbar-item" to="/blog">
                Blog
              </Link> */}
              <Link className="navbar-item" to="/contact">
                Contact Us
              </Link>
              <Link className="navbar-item">
                Pricing
              </Link>
              <Button variant="primary" href='https://app.my-tribe.com.au/login' style={{
                  margin: '10px',
                  color: '#4a4a4a',
                  fontSize: '1em',
                  borderColor: '#FFF',
                  backgroundColor: '#8080804d',
                  borderRadius: '10px',
                  width: '80px',
                  height: '37px',
              }}>
                Login

              </Button>
              <Button variant="primary" href='https://app.my-tribe.com.au/signup' style={{
                  margin: '10px',
                  color: '#4a4a4a',
                  fontSize: '1em',
                  borderColor: '#FFF',
                  borderRadius: '10px',
                  width: '80px',
                  height: '37px',
                  backgroundColor: '#ffa207d1',
              }}>
                Join

              </Button>
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
