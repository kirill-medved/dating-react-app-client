import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import IconButton from '@material-ui/core/IconButton';
import header from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={header.header}>
      <nav className={header.nav}>
        <IconButton>
          <PersonIcon fontSize='large' className={header.icon__person} />
        </IconButton>
        <p>LOGO</p>
        <IconButton>
          <MessageIcon fontSize='large' className={header.icon__message} />
        </IconButton>
      </nav>
    </header>
  );
};

export default Header;
