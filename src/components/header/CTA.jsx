import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { BiMessageDetail } from 'react-icons/bi';
import { BsCalendarCheck } from 'react-icons/bs';
import CV from '../../assets/Khalid Khader CV.pdf';

const CTA = () => {
  return (
    <Stack 
      direction={{ xs: 'column', sm: 'row' }} 
      spacing={{ xs: 2, sm: 2.5 }}
      sx={{
        justifyContent: { xs: 'center', md: 'flex-start' }
      }}
    >
      <Button 
        href={CV} 
        download 
        variant="outlined" 
        color="primary"
        startIcon={<HiOutlineDocumentDownload size={20} />}
        size="large"
      >
        Download CV
      </Button>
      
      <Button 
        href="#contact" 
        variant="contained" 
        color="primary"
        startIcon={<BiMessageDetail size={20} />}
        size="large"
      >
        Contact Me
      </Button>
      
      <Button 
        href="#calendly" 
        variant="outlined" 
        color="primary"
        startIcon={<BsCalendarCheck size={20} />}
        size="large"
      >
        Book a Meeting
      </Button>
    </Stack>
  );
}

export default CTA;
