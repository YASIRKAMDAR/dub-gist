import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from '../images/GitHub-Mark-32px.png' 

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  focusInput(event) {
    document.getElementById('searchtext').focus();
  }
  render() {
    return (
      <div className="HeaderBlock">
        <div className="container">
          <Navbar light expand="xs">
            <NavbarBrand>
                <img src={logo} alt="gist Logo"/>
            </NavbarBrand>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Header;