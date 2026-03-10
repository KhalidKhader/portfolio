import React, { useEffect, useRef, useState } from 'react';
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
import { MdOutlineCastForEducation } from 'react-icons/md';
import dojo from '../../assets/dojo.svg';
import bzu from '../../assets/bzu.png';
import aaup from '../../assets/aaup.png';
import openCv from '../../assets/openCv.webp';
import microsoft from '../../assets/microsoft.webp';
import datacamp from '../../assets/datacamp.png';
import udemy from '../../assets/udemy.png';
const Education = () => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
      ref={sectionRef}
      sx={{ 
        py: { xs: 8, md: 10 },
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container>
        <Box
          sx={{
            textAlign: 'center',
            mb: 8,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2.5,
              py: 0.75,
              borderRadius: '20px',
              backgroundColor: alpha(theme.palette.primary.main, 0.08),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              mb: 3,
            }}
          >
            <MdOutlineCastForEducation style={{ color: theme.palette.primary.main, fontSize: '1rem' }} />
            <Typography variant="subtitle2" color="primary.main" fontWeight={600}>
              Academic Journey
            </Typography>
          </Box>
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
                bottom: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
                borderRadius: '2px',
              }
            }}
          >
            Education
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {educationData.map((edu, index) => (
            <Grid item xs={12} sm={6} md={3} key={edu.id}>
              <Box
                sx={{
                  height: '100%',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                  transition: `opacity 0.6s ease ${index * 0.07}s, transform 0.6s ease ${index * 0.07}s`,
                }}
              >
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.secondary.light, 0.2)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 50px ${alpha(theme.palette.primary.main, 0.12)}`,
                    borderColor: alpha(theme.palette.primary.main, 0.4),
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  },
                  '&:hover::before': { opacity: 1 },
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
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;