import React from 'react';
import { Box, IconButton, Tooltip, Stack } from '@mui/material';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <>
      {/* Left vertical social icons */}
      <Stack
        spacing={2}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: { md: '40px', lg: '60px' },
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 10,
          '&::after': {
            content: '""',
            width: '1px',
            height: '90px',
            backgroundColor: 'primary.main',
            marginTop: '15px'
          }
        }}
      >
        <Tooltip title="LinkedIn" placement="right" arrow>
          <IconButton 
            component="a" 
            href='https://www.linkedin.com/in/khalid-khader-3a8b43121' 
            target='_blank'
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            sx={{
              color: 'text.secondary',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-4px)'
              }
            }}
          >
            <BsLinkedin size={22} />
          </IconButton>
        </Tooltip>

        <Tooltip title="GitHub" placement="right" arrow>
          <IconButton 
            component="a" 
            href='https://github.com/KhalidKhader' 
            target='_blank'
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            sx={{
              color: 'text.secondary',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-4px)'
              }
            }}
          >
            <BsGithub size={22} />
          </IconButton>
        </Tooltip>
      </Stack>
    </>
  );
}

export default HeaderSocial;
