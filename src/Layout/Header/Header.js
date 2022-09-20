import React from 'react'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,NavLink } from 'react-router-dom';
import './Header.css'
import {useNavigate} from 'react-router-dom'


export default function Header() {

  const navigate=useNavigate();

  const logout=()=>{
    window.localStorage.clear();
    alert("You have successfully logged out");
    navigate('/login');
  }

  const isAuth=window.localStorage.getItem("TokenValue");
  if(isAuth)
  navigate('/orderOnline')

  return (
    <>
        <Navbar collapseOnSelect expand="lg" className='navigationBar'>
      <Container >
        <Navbar.Brand as={Link} to="/" className='navText '> <img src="../../../../../images/cd5.png" alt="logo" className='logo img-responsive'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle' />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav  className="ms-auto">
            <NavLink  to="/" className='navText' >HOME</NavLink>
            <NavLink  to="/orderOnline" className='navText'>MENU</NavLink>
            {/* <NavLink  to="/weServe" className='navText'>WE SERVE</NavLink> */}
            <NavLink  to="/aboutUs" className='navText'>ABOUT US</NavLink>
            <NavLink  to="/gallery" className='navText'>GALLERY</NavLink>
            <NavLink  to='/bookTable' className='navText'>BOOK A TABLE</NavLink>
            </Nav>
            

            { isAuth?
            <Nav>
            <NavLink onClick={logout} to="/login" className='navTextLogin'>LOG OUT ( {JSON.parse(isAuth).data.firstname} )</NavLink>
            </Nav>
            :
            <Nav>
             <NavLink  to="/login" className='navTextLogin'>LOGIN</NavLink>
            <NavLink  to="/signUp" className='navTextLogin'>SIGN UP</NavLink>
          </Nav>
          }

       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
