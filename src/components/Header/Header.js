import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';
import { StoreContext } from '../../store';
import './index.scss';

export const Header = () => {
  const [{ user }] = useContext(StoreContext);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = path => {
    history.push(path);
    handleClose();
  };

  const renderGreetings = () => {
    if (!user.name) return null;

    return (
      <p onClick={handleClick} className="header__greetings">
        Olá, {user.name}
      </p>
    );
  };

  return (
    <header className="header">
      <Link to="/">
        <h1>VenturaHR</h1>
      </Link>
      {renderGreetings()}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleRedirect('/dashboard')}>
          Dashboard
        </MenuItem>
        <MenuItem onClick={() => handleRedirect('/minhas-vagas')}>
          Minhas vagas
        </MenuItem>
        <MenuItem onClick={() => handleRedirect('/logout')}>Logout</MenuItem>
      </Menu>
    </header>
  );
};
