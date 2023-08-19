import React from 'react';
import { Typography, Container } from '@mui/material';


const Hero = () => {
  return (
    <Container style={{ marginTop: '18vh', minHeight: '82vh' }}>
      <Typography variant="h2" align="center">
        Hero Section
      </Typography>
      <Typography align="center">
        This is the content of the hero section.
      </Typography>
    </Container>
  )
}

export default Hero