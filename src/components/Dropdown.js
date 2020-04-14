import React from 'react';
import './style.css';
import { Link } from 'gatsby'

class Dropdown extends React.Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }
    // style={{ background: "red", width: "200px" }}
    render() {
        return (
            <div className="dropdown"  >
                <div className="button" style={{
                    margin: '10px',
                    fontSize: '1em',
                    border: 'none',
                    borderRadius: '10px',
                    width: '80px',
                    height: '37px',
                    color: 'white',
                    backgroundColor: '#48D1CC',
                }} onClick={this.showDropdownMenu}> Menu </div>

                {this.state.displayMenu ? (
                    <ul className='dropdown_ul'>
                        <li className='dropdown_li'>
                            <Link className="navbar-item" to="/clients">
                                Client
                </Link>
                        </li>
                        <li className='dropdown_li'>
                            <Link className="navbar-item" to="/lawyer">
                                Lawyer
              </Link>
                        </li>
                        <li className='dropdown_li'>
                            <Link className="navbar-item" to="/referrers">
                                Referrer
                </Link>
                        </li>
                        <li className='dropdown_li'>
                            <Link className="navbar-item" to="/packages">
                                Packages
              </Link>
                        </li>
                        <li className='dropdown_li'>
                            <Link className="navbar-item" to="/blog">
                                Blog
              </Link>
                        </li>
                        <li className='dropdown_li'>
                            <Link className="navbar-item" to="/contact">
                                Contact Us
              </Link>
                        </li>
                    </ul>
                ) :
                    (
                        null
                    )
                }

            </div>

        );
    }
}

export default Dropdown;
