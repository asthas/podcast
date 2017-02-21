import React from 'react';

const NavItem = ({
  // key,
  viewHead,
  activeNav,
  onClick
}) => (
  <li
    onClick={onClick}
    style={{
      background: viewHead === activeNav ? 'grey' : '#E0E0E0'
    }}
  >  
    {viewHead}
  </li>
)

export default NavItem;