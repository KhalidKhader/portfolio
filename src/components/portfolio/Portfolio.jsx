import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Button,
  Chip,
  Divider,
  useTheme,
  alpha
} from '@mui/material';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import IMG16 from '../../assets/16.png';
import IMG17 from '../../assets/17.png';
import IMG18 from '../../assets/18.png';
import BTMD from '../../assets/BrainTumorsDet.jpeg';
import LegClc from '../../assets/legclc.jpg';
import TvApp from '../../assets/TV.webp';
import CRUD from '../../assets/crud.png';
import HR from "../../assets/HR.avif";
import AI from "../../assets/AI.webp";
import security from "../../assets/security.webp";
import medical from "../../assets/medical.webp";

const Portfolio = () => {
  const theme = useTheme();

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Brain Tumors Detection",
      image: BTMD,
      linkedin: "https://www.linkedin.com/posts/khalid-khader-3a8b43121_after-a-long-and-tiring-day-i-achieved-great-activity-7069022676014538752-a1om?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/KhalidKhader/BrainTumorsDetection",
      description: "Deep Learning system with 98% accuracy for tumor detection, plus Alzheimer's and COVID-19 classification models",
      tags: ["Deep Learning", "Healthcare", "Computer Vision", "TensorFlow", "Flask"]
    },
    {
      id: 2,
      title: "AI Powered HR System",
      image: HR,
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/KhalidKhader",
      description: "ML model for predicting employee salary from text data, plus CV analysis using LLMs for job fit assessment",
      tags: ["Machine Learning", "NLP", "HR Tech", "LLM", "Dashboard"]
    },
    {
      id: 3,
      title: "Healthcare Data Platform",
      image: medical,
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/KhalidKhader",
      description: "Data pipeline for cancer detection using DNA data, creating a personalized healthcare platform",
      tags: ["Healthcare", "Data Pipeline", "Bioinformatics", "Cancer Detection"]
    },
    {
      id: 4,
      title: "Cybersecurity ML Solutions",
      image: security,
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/KhalidKhader",
      description: "ML models for IoT attack detection (99% recall), PIN side-channel attack analysis, and DLL analysis for Windows 11",
      tags: ["Cybersecurity", "Machine Learning", "IoT", "Attack Detection"]
    },
    {
      id: 5,
      title: "AI-Powered Advertising",
      image: AI,
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/KhalidKhader",
      description: "Consulting project for an advertising app using AI to scrape and cluster user data for targeted ads",
      tags: ["AI", "Clustering", "Marketing", "Data Science"]
    },
    {
      id: 6,
      title: "Legal Clinic",
      image: LegClc,
      linkedin: "https://www.linkedin.com/posts/khalid-khader-3a8b43121_during-the-participation-as-a-visitor-to-activity-7066733698838147072-0VbM?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/KhalidKhader",
      description: "Legal services management application for Birzeit University",
      tags: ["Web Development", "Team Project", "Legal Tech"]
    },
    {
      id: 7,
      title: "Smart Advising System",
      image: IMG17,
      linkedin: "https://www.linkedin.com/posts/khalid-khader-3a8b43121_finally-this-is-smart-advising-system-activity-6953444289213304833-BJs6?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/KhalidKhader",
      description: "APEX ORACLE system with AI techniques for guiding CSE students at all educational levels",
      tags: ["AI", "Education", "Oracle APEX"]
    },
    {
      id: 8,
      title: "Software Maintainability Index",
      image: CRUD,
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/KhalidKhader",
      description: "Dashboard to check maintainability of software code using metrics and analysis",
      tags: ["Code Quality", "Dashboard", "Software Metrics"]
    },
    {
      id: 9,
      title: "Palestinian Civil Defense",
      image: IMG18,
      linkedin: "https://www.linkedin.com/posts/khalid-khader-3a8b43121_this-is-a-voluntary-project-submitted-to-activity-6935975946151763968-Db2F?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/KhalidKhader",
      description: "CRM project for Palestinian Civil Defense - Tulkarm",
      tags: ["CRM", "Public Service", "Volunteer"]
    }
  ];

  return (
    <Box 
      component="section" 
      id="portfolio" 
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
            My Recent Work
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
            Portfolio
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {projects.map(({ id, title, image, linkedin, github, description, tags }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Card 
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  backgroundColor: alpha(theme.palette.background.paper, 0.8),
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 30px rgba(0, 0, 0, 0.3)',
                    '& .MuiCardMedia-root': {
                      transform: 'scale(1.05)'
                    }
                  }
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden', pt: '60%' }}>
                  <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                  />
                </Box>
                
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 1
                    }}
                  >
                    {title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                    {tags && tags.map((tag, index) => (
                      <Chip 
                        key={index} 
                        label={tag} 
                        size="small"
                        sx={{ 
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          color: 'primary.main',
                          fontSize: '0.7rem'
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                
                <Divider sx={{ borderColor: 'rgba(100, 255, 218, 0.1)' }} />
                
                <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                  <Button 
                    startIcon={<BsLinkedin />} 
                    href={linkedin} 
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    color="primary"
                    variant="text"
                    sx={{ borderRadius: '8px' }}
                  >
                    LinkedIn
                  </Button>
                  
                  <Button
                    startIcon={<BsGithub />}
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    color="primary"
                    variant="contained"
                    sx={{ borderRadius: '8px' }}
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;