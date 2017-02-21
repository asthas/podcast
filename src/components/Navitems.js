import React from 'react';
import NavItem from './Navitem'

const NavItems = ({
  viewHeads,
  activeNav,
  onNavClick
}) => (
  <ul>
    {viewHeads.map(viewHead=> 
      <NavItem
        key={viewHead}
        viewHead={viewHead}
        activeNav={activeNav}
        onClick={() => onNavClick(viewHead)}
      />
    )}
  </ul>
)
export default NavItems;