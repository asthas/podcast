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
      background: viewHead === activeNav ? '#00796B' : '#009688'
    }}
  >  
    {viewHead}
  </li>
)

export default NavItem;