import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Link, 
  IconButton, 
  Divider,
  Grid,
  useTheme,
  alpha
} from '@mui/material';
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  
  const menuItems = [
    { id: 1, label: 'Home', href: '#home' },
    { id: 2, label: 'About', href: '#about' },
    { id: 3, label: 'Experience', href: '#experience' },
    { id: 4, label: 'Skills', href: '#skills' },
    { id: 5, label: 'Portfolio', href: '#portfolio' },
    { id: 6, label: 'Contact', href: '#contact' },
  ];
  
  const socialLinks = [
    { 
      id: 1, 
      icon: <FaLinkedin />, 
      href: 'https://www.linkedin.com/in/khalid-khader-3a8b43121',
      label: 'LinkedIn'
    },
    { 
      id: 2, 
      icon: <FaGithub />, 
      href: 'https://github.com/KhalidKhader',
      label: 'GitHub'
    },
    { 
      id: 3, 
      icon: <FiMail />, 
      href: 'mailto:khalid.khader96@gmail.com',
      label: 'Email'
    },
  ];
  
  return (
    <Box 
      component="footer" 
      sx={{
        py: 6,
        backgroundColor: alpha(theme.palette.background.paper, 0.6),
        borderTop: '1px solid',
        borderColor: 'rgba(100, 255, 218, 0.1)',
        mt: 8
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={4}>
          <Typography 
            component={Link}
            href="#home"
            variant="h4" 
            fontWeight={700}
            color="primary.main"
            sx={{ 
              textDecoration: 'none',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.light',
                transform: 'translateY(-3px)'
              },
              display: 'inline-block',
            }}
          >
            KHALID KHADER
          </Typography>
        </Box>
        
        <Grid container justifyContent="center" spacing={3} mb={4}>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: { xs: 2, md: 3 }
              }}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  underline="none"
                  color="text.secondary"
                  sx={{
                    transition: 'all 0.3s ease',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    px: 1,
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
        
        <Box textAlign="center" mb={4}>
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mb: 3
            }}
          >
            {socialLinks.map((link) => (
              <IconButton
                key={link.id}
                component="a"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                sx={{
                  color: 'text.secondary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Box>
          
          <IconButton
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{
              backgroundColor: 'rgba(100, 255, 218, 0.1)',
              color: 'primary.main',
              mb: 3,
              '&:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.2)',
                transform: 'translateY(-5px)'
              }
            }}
          >
            <FaArrowUp />
          </IconButton>
        </Box>
        
        <Divider sx={{ borderColor: 'rgba(100, 255, 218, 0.1)', mb: 3 }} />
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center"
          sx={{ 
            opacity: 0.8,
            fontSize: '0.8rem'
          }}
        >
          &copy; {currentYear} Khalid Khader. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

