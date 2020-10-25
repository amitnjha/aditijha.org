import React from 'react';
import {Navbar, NavDropdown,Form,Button,Nav,FormControl}  from 'react-bootstrap';


const NavBar = () => (
    <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="/">Aditi Jha</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="Apps" id="basic-nav-dropdown">
        <NavDropdown.Item href="/flasky">Flasky</NavDropdown.Item>
        <NavDropdown.Item href="/jenkins">Jenkins</NavDropdown.Item>
	      <NavDropdown.Item href="/mantisbt">Mantis BT</NavDropdown.Item>
        <NavDropdown.Item href="/superlists">Superlists</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/about">About</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="ML Projects" id="basic-nav-dropdown">
        <NavDropdown.Item href="/digit-guess">Digits</NavDropdown.Item>
        <NavDropdown.Item href="/breakout">Breakout</NavDropdown.Item>
	      <NavDropdown.Item href="/autocorrect">Auto Correct</NavDropdown.Item>
        <NavDropdown.Item href="/autocomplete">Auto Complete</NavDropdown.Item>
        <NavDropdown.Item href="/activate">Activate</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
)


export default NavBar;
