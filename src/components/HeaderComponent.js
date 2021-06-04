import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React,{Component} from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.jpg' height="30" width="41" alt="programers" /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <span className="fa fa-home fa-lg"></span> 
                            </NavItem>
                            <NavItem>
                                <span className="fa fa-info fa-lg"></span> About Us
                            </NavItem>
                            <NavItem>
                                <span className="fa fa-list fa-lg"></span> Prog1
                            </NavItem>
                            <NavItem>
                                <span className="fa fa-address-card fa-lg"></span> Contact Us
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Programer's Hiring</h1>
                                <p>We have best programers</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
export default Header