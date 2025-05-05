import React from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Button,
  Divider, 
  useTheme, 
  alpha,
  Chip,
  Link
} from "@mui/material";
import { FaCalendarAlt, FaHospital, FaExternalLinkAlt } from "react-icons/fa";

const MedApp = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="medapp"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: '15px',
            backgroundColor: alpha(theme.palette.background.paper, 0.7),
            border: '1px solid',
            borderColor: 'rgba(100, 255, 218, 0.1)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
            textAlign: 'center'
          }}
        >
          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
              gap: 2
            }}
          >
            <FaHospital 
              size={36} 
              color={theme.palette.primary.main} 
            />
            <Typography
              variant="h3"
              component="h1"
              color="primary.main"
              fontWeight={600}
            >
              My Medical System
            </Typography>
          </Box>
          
          <Typography
            variant="h5"
            component="h2"
            color="text.primary"
            fontWeight={500}
            sx={{ mb: 1 }}
          >
            Check It Now, It's Deployed!
          </Typography>
          
          <Typography
            variant="h6"
            component="h3"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            By Khalid Khader
          </Typography>
          
          <Chip
            icon={<FaCalendarAlt />}
            label="Jan 2023 – PRESENT"
            variant="outlined"
            color="primary"
            sx={{ mb: 4 }}
          />
          
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<FaExternalLinkAlt />}
            component={Link}
            href="http://khalidkhadermedapp.site/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
              mb: 4,
              px: 4,
              py: 1.5
            }}
          >
            Visit it now!
          </Button>
          
          <Divider sx={{ my: 4, borderColor: 'rgba(100, 255, 218, 0.2)' }} />
          
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '600px',
              margin: '0 auto',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              border: '1px solid',
              borderColor: 'rgba(100, 255, 218, 0.2)',
            }}
          >
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7161675089657237504"
              height="700"
              width="100%"
              frameBorder="0"
              allowFullScreen=""
              title="Medical App LinkedIn Post"
              style={{ display: 'block' }}
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default MedApp;
