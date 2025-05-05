import React from 'react';
import { Box, Typography, Container, Paper, useTheme, alpha } from '@mui/material';
import { InlineWidget } from "react-calendly";
import { FaCalendar } from 'react-icons/fa';

const Calendly = (props) => {
  const theme = useTheme();
  let link = `https://calendly.com/${props.link}`;
  
  return (
    <Box 
      component="section"
      id="calendly"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            gutterBottom
          >
            Schedule a Meeting
          </Typography>
          <Typography 
            variant="h2" 
            component="h2" 
            color="primary.main"
            sx={{ 
              mb: 2,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                backgroundColor: 'primary.main'
              }
            }}
          >
            Book a Meeting with Khalid
          </Typography>
          
          <Typography 
            variant="h5" 
            component="h3"
            color="text.primary"
            sx={{ mt: 3, mb: 5 }}
          >
            Book a {props.type} with Khalid
          </Typography>
        </Box>
        
        <Paper
          elevation={4}
          sx={{
            borderRadius: '15px',
            overflow: 'hidden',
            backgroundColor: alpha(theme.palette.background.paper, 0.7),
            border: '1px solid',
            borderColor: 'rgba(100, 255, 218, 0.1)',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
            height: '700px'
          }}
        >
          <InlineWidget 
            url={link}
            styles={{
              height: '100%'
            }}
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default Calendly;
