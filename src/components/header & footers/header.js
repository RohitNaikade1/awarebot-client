import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { IoHome, IoSchool, IoNotificationsCircleSharp } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import { isAuth, signout } from '../helpers/auth';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import '../components.css';
const Header = (props) => {
    const signOut = () => {
        store.addNotification({
            title: "Signed out Successfully!",
            message: 'You will be redirected on home page!',
            type: "success",
            container: 'top-right',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 3000,
                showIcon: true
            }
        })
        signout();

    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="brand">AwareBot</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink exact activeClassName="active_class" className="links" to="/">
                        <IoHome className="mr-2" />Home</NavLink>
                    <NavLink exact activeClassName="active_class" className="links ml-3" to="/about">
                        <IoSchool className="mr-2" />About Visionware</NavLink>
                    <NavLink exact activeClassName="active_class" className="links ml-3" to="/notice">
                        <IoNotificationsCircleSharp className="mr-2" />Notice Board</NavLink>
                    <NavLink exact activeClassName="active_class" className="links ml-3" to="/adHome">
                        <RiAdminFill className="mr-2" />Admin Section</NavLink>
                </Nav>
                <Nav className="ml-auto mr-2">
                    {isAuth() ? <Button variant="outline-primary" onClick={signOut}>
                        <span className="fa fa-sign-in fa-lg mr-2"></span>
                            Logout
                    </Button> : <Button variant="outline-primary">
                            <NavLink exact className="active_class login_btn" to="/login">
                                <span className="fa fa-sign-in fa-lg mr-2"></span>
                            Login
                        </NavLink>
                        </Button>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Header;