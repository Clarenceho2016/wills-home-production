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
              <img src={"https://firebasestorage.googleapis.com/v0/b/wills-platform.appspot.com/o/public%2Fimage%2FMy_TRIBE_LOGO.png?alt=media&token=4f517636-506c-44be-a0af-429e1f63bd0e"}  style={{ width: '88px' }} />
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
              <Button variant="primary" style={{
                  margin: '10px',
                  color: '#4a4a4a',
                  fontSize: '1em',
                  borderColor: '#FFF',
                  backgroundColor: '#8080804d',
                  borderRadius: '10px',
                  width: '80px',
                  padding: '0.5rem 0.75rem',
              }}>
                Login
              
              </Button>
              <Button variant="primary" style={{
                  margin: '10px',
                  color: '#4a4a4a',
                  fontSize: '1em',
                  borderColor: '#FFF',
                  borderRadius: '10px',
                  width: '80px',
                  backgroundColor: '#ffa207d1',
                  padding: '0.5rem 0.75rem',
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
