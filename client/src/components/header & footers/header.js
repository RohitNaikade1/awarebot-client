import React from 'react'
import { Nav, Navbar,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../components.css';
const Header = (props) => {
    // const renderContent = () => {
    //     switch (props.user) {
    //         case null:
    //             return (
    //                 <Button variant="outline-primary">
    //                     <NavLink exact className="active_class login_btn" to="/login">
    //                         <span className="fa fa-sign-in fa-lg mr-2"></span>
    //                         Login
    //                     </NavLink>
    //                 </Button>)
    //         case false:
    //             return (
    //                 <Button variant="outline-primary">
    //                     <NavLink exact className="active_class login_btn" to="/login">
    //                         <span className="fa fa-sign-in fa-lg mr-2"></span>
    //                         Login
    //                     </NavLink>
    //                 </Button>)
    //         default:
    //             return (
    //                 <>
    //                     {/* <img className="profileImg mr-3" alt="poor network" src={props.user.picture}/> */}
    //                     <Button variant="outline-primary">
    //                         <NavLink exact className="active_class login_btn" to="/api/logout">
    //                             <span className="fa fa-sign-out fa-lg mr-2"></span>
    //                                 Logout
    //                             </NavLink>
    //                     </Button></>
    //             )
    //     }
    // }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>AwareBot</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink exact activeClassName="active_class" className="links" to="/">
                        <span className="fa fa-home fa-lg mr-2"></span>Home</NavLink>
                    <NavLink exact activeClassName="active_class" className="links" to="/notice">
                        <div className="ml-3"><span className="fa fa-file-text fa-lg mr-2"></span>Notice Board</div></NavLink>
                    <NavLink exact activeClassName="active_class" className="links" to="/admin">
                        <div className="ml-3"><span className="fa fa-unlock-alt fa-lg mr-2"></span>Admin Section</div>
                    </NavLink>
                </Nav>
                <Nav className="ml-auto mr-2">
                    <Button variant="outline-primary">
                        <NavLink exact className="active_class login_btn" to="/login">
                            <span className="fa fa-sign-in fa-lg mr-2"></span>Login 
                        </NavLink>
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Header;