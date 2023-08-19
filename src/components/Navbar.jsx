import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';
import ColorButton from './ColorButton';

const Navbar = () => {
  return (
    <AppBar position="fixed" className="appBar">
      <Toolbar className="menuToolbar">
        <div className="logo">
          <img src={logo} alt="Logo" height={75} width={200} />
        </div>
        <div className="menuItems">
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>Education</Typography>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>Projects</Typography>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>Tech Stack</Typography>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>Contact</Typography>
        </div>
        <ColorButton
          variant="contained"
          className="resumeButton"
          size='large'
        >
          My Resume
        </ColorButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar