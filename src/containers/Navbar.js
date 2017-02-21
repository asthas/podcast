import React, { Component } from 'react';
import NavItems from '../components/Navitems';
import { connect } from 'react-redux';
import { setActiveNavItem } from '../actions';

const mapStateToProps = (state) => {
  console.log(state.navItems.viewHeads)
  console.log(state.navItems.activeNavItem)
  return {
    viewHeads: {state.navItems.viewHeads},
    activeNav: {state} 
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