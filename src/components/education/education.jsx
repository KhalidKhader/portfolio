import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip,
  useTheme,
  alpha,
  Divider
} from '@mui/material';
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from 'react-icons/fa';
import dojo from '../../assets/dojo.svg';
import bzu from '../../assets/bzu.png';
import aaup from '../../assets/aaup.png';
import openCv from '../../assets/openCv.webp';
import microsoft from '../../assets/microsoft.webp';
import datacamp from '../../assets/datacamp.png';
import udemy from '../../assets/udemy.png';
const Education = () => {
  const theme = useTheme();

  // Education data
  const educationData = [
    {
      id: 1,
      school: "Arab American University",
      location: "West Bank - Palestine",
      image: aaup,
      degree: "Bachelor degree",
      major: "Computer Systems Engineering",
      period: "2018 - 2022"
    },
    {
      id: 2,
      school: "Birzeit University",
      location: "West Bank - Palestine",
      image: bzu,
      degree: "Master degree",
      major: "Computer Engineering",
      period: "2022 - 2025"
    },
    {
      id: 3,
      school: "Coding Dojo",
      location: "Part of Colorado University - USA",
      image: dojo,
      degree: "Online Courses",
      major: "Data Science, Machine Learning, and FullStack bootcamps",
      period: "2022 - 2024"
    },
    {
      id: 4,
      school: "Open CV University",
      location: "California - USA",
      image: openCv,
      degree: "Online Courses",
      major: "Deep Learning and Computer vision bootcamp",
      period: "2024"
    },
    {
      id: 5,
      school: "Data Camp",
      location: "USA",
      image: datacamp,
      degree: "Online track - diploma",
      major: "Data Engineering, and ML",
      period: "2023 - 2025"
    },
    {
      id: 6,
      school: "Microsoft",
      location: "USA",
      image: microsoft,
      degree: "Microsoft Learn",
      major: "Azure AI services",
      period: "2024"
    },
    {
      id: 7,
      school: "Udemy",
      location: "USA",
      image: udemy,
      degree: "LLM Engineering",
      major: "Master AI, Large Language Models & Agents",
      period: "2025"
    },
    {
      id: 8,
      school: "Open CV University",
      location: "California - USA",
      image: openCv,
      degree: "Online Courses",
      major: "Advanced generative AI for Arts",
      period: "2025"
    }
  ];

  return (
    <Box 
      component="section" 
      id="education" 
      sx={{ 
        py: { xs: 8, md: 10 },
        backgroundColor: 'background.default'
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            gutterBottom
          >
            What I Learned?
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
            Education
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {educationData.map((edu) => (
            <Grid item xs={12} sm={6} md={3} key={edu.id}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  backgroundColor: alpha(theme.palette.background.paper, 0.7),
                  border: '1px solid',
                  borderColor: 'rgba(100, 255, 218, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                    borderColor: 'primary.main',
                    '& .MuiCardMedia-root': {
                      transform: 'scale(1.05)'
                    }
                  }
                }}
              >
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 1
                    }}
                  >
                    {edu.school}
                  </Typography>
                  
                  <Typography 
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
                  >
                    <FaUniversity />
                    {edu.location}
                  </Typography>
                </Box>
                
                <Box sx={{ position: 'relative', height: 180, mx: 3, mb: 3, overflow: 'hidden', borderRadius: '10px' }}>
                  <CardMedia
                    component="img"
                    image={edu.image}
                    alt={edu.school}
                    sx={{
                      height: '100%',
                      objectFit: 'contain',
                      backgroundColor: 'white',
                      p: 2,
                      transition: 'transform 0.6s ease',
                      border: '1px solid',
                      borderColor: 'rgba(100, 255, 218, 0.1)',
                    }}
                  />
                </Box>
                
                <Divider sx={{ mx: 3, borderColor: 'rgba(100, 255, 218, 0.2)' }} />
                
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Box 
                    sx={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      mb: 2,
                      px: 2,
                      py: 1, 
                      borderRadius: '20px',
                      backgroundColor: 'rgba(100, 255, 218, 0.1)', 
                      border: '1px solid rgba(100, 255, 218, 0.2)'
                    }}
                  >
                    <FaGraduationCap color={theme.palette.primary.main} style={{ marginRight: '8px' }} />
                    <Typography 
                      variant="h6" 
                      component="h4"
                      fontWeight={600}
                      color="primary.main"
                    >
                      {edu.degree}
                    </Typography>
                  </Box>
                  
                  <Typography 
                    variant="subtitle1" 
                    component="h5" 
                    color="text.primary"
                    fontWeight={500}
                    sx={{ my: 2 }}
                  >
                    {edu.major}
                  </Typography>
                  
                  <Chip
                    icon={<FaCalendarAlt />}
                    label={edu.period}
                    variant="outlined"
                    color="primary"
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;