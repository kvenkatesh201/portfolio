import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar,NavItem,Nav} from 'react-bootstrap'
import Twitter from './svg/twitter'
import LinkedIn from './svg/linkedIn'
import './common.less'
import './navigation.less'

const Navigation = () => (
    <Navbar collapseOnSelect fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/">Venkatesh Komma</Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem>
        <Link to="/about">Work</Link>
      </NavItem>
      <NavItem>
        <Link to="/quotes">Quotes</Link>
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem href="http://twitter.com" target="_blank">
        <div className="nav-animation"><Twitter /></div>
      </NavItem>
      <NavItem href="https://github.com/kvenkatesh201" target="_blank">
      <div className="nav-animation"><LinkedIn /></div>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default Navigation;