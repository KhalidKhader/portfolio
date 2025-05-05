import React from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  useTheme, 
  alpha,
  Divider,
  Chip
} from "@mui/material";
import { FaCalendarAlt, FaBrain } from "react-icons/fa";
import Report from "../../assets/MyInternshipreport.docx";
import tap from "../../assets/tap.jpeg";
import axsos from "../../assets/axsos.png";
import knowledge from "../../assets/knowledge.png";
import manara from "../../assets/manara.png";
import exalt from "../../assets/exalt.png";
import aaup from "../../assets/aaup.png";
import tnb from "../../assets/tnb.png";

const BrainTumors = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="braintumors"
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
              mb: 3,
              gap: 2
            }}
          >
            <FaBrain 
              size={36} 
              color={theme.palette.primary.main} 
            />
            <Typography
              variant="h3"
              component="h2"
              color="primary.main"
              fontWeight={600}
            >
              Brain Tumors Project
            </Typography>
          </Box>
          
          <Typography
            variant="h5"
            component="h3"
            color="text.primary"
            fontWeight={500}
            sx={{ mb: 3 }}
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
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7142584043887407104"
              height="600"
              width="100%"
              frameBorder="0"
              allowFullScreen=""
              title="Brain Tumors Project LinkedIn Post"
              style={{ display: 'block' }}
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default BrainTumors;
