import React from 'react';
import { Box, Typography, Container, Grid, useTheme, useMediaQuery } from '@mui/material';
import ME1 from '../../assets/Khalid-Khader.png';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  return (
    <Box 
      component="header" 
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background.default',
        pt: { xs: 8, md: 9 },
        pb: { xs: 12, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} sx={{textAlign: { xs: 'center', md: 'left' }}}>
            <Box sx={{ maxWidth: '550px', mx: { xs: 'auto', md: 0 } }}>
              <Typography 
                variant="subtitle1" 
                color="primary.main" 
                gutterBottom
                sx={{ fontWeight: 500, mb: 1 }}
              >
                Hello, I'm
              </Typography>
              
              <Typography 
                variant="h1" 
                component="h1"
                sx={{ 
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  mb: 1,
                  background: 'linear-gradient(to right, #e6f1ff, #a8b2d1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Khalid Khader
              </Typography>
              
              <Typography 
                variant="h4" 
                color="text.secondary"
                sx={{ 
                  mb: 3, 
                  fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                  fontWeight: 400
                }}
              >
                AI Engineer | Specialist | Consultant
              </Typography>
              
              <Typography 
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: '550px',
                  lineHeight: 1.7,
                  fontSize: { xs: '0.95rem', md: '1rem' }
                }}
              >
                I'm a Certified Azure AI Engineer with expertise in AI Agents, Generative AI, LLMs, Machine Learning, Deep Learning, and Data Engineering. 
                Experience leading AI-driven projects in healthcare, HR analytics, and cybersecurity across teams in the USA, Canada, Germany, Jordan, and Palestine. 
                Former AI Production Team Lead at MENA DEVS, currently leading AI medical systems at MedidoHealth Solutions (USA) and consulting for Bitlab/Instclinic (Canada). 
                Skilled in AI consulting, enterprise deployment, and full-stack software engineering, with a strong background in research, publications, and curriculum development 
                as a recognized speaker and trainer in AI and deep learning.
              </Typography>
              
              <CTA />
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{ mb: { xs: 6, md: 0 } }}>
            <Box
              sx={{
                position: 'relative',
                maxWidth: '380px',
                mx: 'auto',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  right: '20px',
                  bottom: '20px',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: '30px',
                  zIndex: 0,
                  transition: 'all 0.3s ease-in-out',
                },
                '&:hover::before': {
                  top: '-10px',
                  left: '-10px',
                  right: '30px',
                  bottom: '30px',
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '25px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 80px rgba(0, 0, 0, 0.3)',
                  backgroundColor: 'rgba(100, 255, 218, 0.05)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 25px 100px rgba(0, 0, 0, 0.5)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={ME1}
                  alt="Khalid Khader"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover',
                    transition: 'all 0.3s ease-in-out',
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {!isMobile && <HeaderSocial />}
      
      {!isMobile && (
        <Typography 
          component="a" 
          href="#about" 
          sx={{
            position: 'absolute',
            right: { md: '40px', lg: '80px' },
            bottom: '80px',
            transform: 'rotate(90deg)',
            fontWeight: 300,
            fontSize: '0.95rem',
            color: 'primary.main',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            '&::after': {
              content: '""',
              width: '35px',
              height: '1px',
              backgroundColor: 'primary.main',
              marginLeft: '8px'
            },
            '&:hover': {
              color: 'primary.light',
              '&::after': {
                backgroundColor: 'primary.light',
                width: '50px'
              }
            }
          }}
        >
          Scroll Down
        </Typography>
      )}
    </Box>
  );
}

export default Header;
