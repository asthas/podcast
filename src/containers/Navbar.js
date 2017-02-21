import React, { Component } from 'react';
import NavItems from '../components/Navitems';
import { connect } from 'react-redux';
import { setActiveNavItem } from '../actions';

const mapStateToProps = (state) => {
  return {
    viewHeads: {state.navItems.viewHeads},
    activeNav: {state.navItems.activeNavItem} 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNavClick: (viewHead) => {
      dispatch(setActiveNavItem(viewHead))
    }
  }
}

const Navbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavItems)

export default Navbar