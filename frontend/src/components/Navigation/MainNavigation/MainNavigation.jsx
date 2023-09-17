import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

import MobileToggle from '../MobileToggle/MobileToggle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import './MainNavigation.css';

const mainNavigation = props => (
  <nav className="main-nav">
    <MobileToggle onOpen={props.onOpenMobileNav} />
    <div className="main-nav__logo">
      <NavLink to="/">
        <Logo />
      </NavLink>
    </div>
    <div className="main-nav__logo" style={{marginLeft: "20px"}}>
      <Link to={{pathname: "https://github.com/exemplar-codes/posts-express-api-app"}} target="_blank">
        <Logo title="Source code"/>
      </Link>
    </div>
    <div className="main-nav__logo" style={{marginLeft: "20px"}}>
      <Link to={{pathname: "https://dashboard.render.com/web/srv-ck333mmru70s73b2db3g"}} target="_blank">
        <Logo title="Render.com link (private)"/>
      </Link>
    </div>
    <div className="spacer" />
    <ul className="main-nav__items">
      <NavigationItems isAuth={props.isAuth} onLogout={props.onLogout} />
    </ul>
  </nav>
);

export default mainNavigation;
