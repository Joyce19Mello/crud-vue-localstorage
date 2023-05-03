import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/">Minha Aplicação</Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/sobre">Sobre</Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/contato">Contato</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
