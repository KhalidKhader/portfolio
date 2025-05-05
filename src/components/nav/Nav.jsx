import React, { useState, useEffect } from 'react';
import { Box, IconButton, Tooltip, useScrollTrigger, Zoom, AppBar, Container } from '@mui/material';
import { AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen, AiOutlineMessage } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section, header');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = `#${section.id}`;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveNav(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Navigation links data
  const navLinks = [
    { href: '#home', icon: <AiOutlineHome />, label: 'Home' },
    { href: '#about', icon: <AiOutlineUser />, label: 'About' },
    { href: '#experience', icon: <BiBook />, label: 'Experience' },
    { href: '#portfolio', icon: <AiOutlineFolderOpen />, label: 'Portfolio' },
    { href: '#contact', icon: <AiOutlineMessage />, label: 'Contact' }
  ];
  
  // Scroll trigger for back to top button
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 800,
  });
  
  return (
    <>
      {/* Main Navigation */}
      <AppBar 
        position="fixed" 
        color="transparent" 
        elevation={0}
        sx={{ 
          top: 'auto', 
          bottom: 0,
          background: 'transparent',
          pointerEvents: 'none',
          zIndex: 10
        }}
      >
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Box
            sx={{
              background: 'rgba(10, 25, 47, 0.85)',
              backdropFilter: 'blur(10px)',
              borderRadius: '30px',
              padding: { xs: '10px 15px', md: '12px 25px' },
              display: 'flex',
              gap: { xs: '8px', md: '16px' },
              boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(100, 255, 218, 0.1)',
              pointerEvents: 'auto',
            }}
          >
            {navLinks.map(({ href, icon, label }) => (
              <Tooltip key={href} title={label} placement="top" TransitionComponent={Zoom}>
                <IconButton
                  component="a"
                  href={href}
                  onClick={() => setActiveNav(href)}
                  aria-label={label}
                  sx={{
                    width: { xs: 40, md: 50 },
                    height: { xs: 40, md: 50 },
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    transition: 'all 0.3s ease-in-out',
                    color: activeNav === href ? 'primary.main' : 'text.secondary',
                    backgroundColor: activeNav === href ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(100, 255, 218, 0.08)',
                      color: 'primary.main',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  {icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Container>
      </AppBar>

      {/* Back to top button */}
      <Zoom in={trigger}>
        <Box
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveNav('#home');
          }}
          role="presentation"
          sx={{
            position: 'fixed',
            bottom: { xs: '80px', md: '100px' },
            right: { xs: '20px', md: '40px' },
            zIndex: 9,
          }}
        >
          <IconButton
            aria-label="Back to top"
            sx={{
              backgroundColor: 'rgba(100, 255, 218, 0.1)',
              color: 'primary.main',
              border: '2px solid',
              borderColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.2)',
                transform: 'translateY(-5px)',
              },
            }}
          >
            <AiOutlineHome />
          </IconButton>
        </Box>
      </Zoom>
    </>
  );
};

export default Nav;
