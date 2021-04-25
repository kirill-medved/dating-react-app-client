import React from 'react';
import header from './Header.module.css';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import IconButton from '@material-ui/core/IconButton';

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
