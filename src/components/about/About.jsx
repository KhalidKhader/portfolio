import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Avatar, 
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme
} from '@mui/material';
import { FaAward } from 'react-icons/fa';
import { MdOutlineCastForEducation } from 'react-icons/md';
import { GoProject } from 'react-icons/go';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import Rawabi from '../../assets/rawabi.JPG';

const About = () => {
  const theme = useTheme();

  // About card data
  const aboutCards = [
    {
      id: 1,
      icon: <FaAward fontSize="inherit" />,
      title: "Experience",
      items: [
        "+3 Years Professional Experience",
        "+1 Year Web Development",
        "+2 Years AI and ML Engineering"
      ]
    },
    {
      id: 2,
      icon: <MdOutlineCastForEducation fontSize="inherit" />,
      title: "Education",
      items: [
        "BSc. Computer Systems Engineering",
        "MSc. Computer Engineering - ML & AI"
      ]
    },
    {
      id: 3,
      icon: <GoProject fontSize="inherit" />,
      title: "Projects",
      items: [
        "+15 Completed Projects",
        "Focus on ML and Data Science in Healthcare"
      ]
    },
    {
      id: 4,
      icon: <MdOutlineVerifiedUser fontSize="inherit" />,
      title: "Future Goals",
      items: [
        "PhD in Machine Learning",
        "Industry Experience in AI Research"
      ]
    }
  ];

  return (
    <Box 
      component="section" 
      id="about" 
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
            Get To Know
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
            About Me
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          {/* Image column */}
          <Grid item xs={12} md={5}>
            <Box 
              sx={{
                position: 'relative',
                maxWidth: '400px',
                mx: 'auto',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  width: '100%',
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: '15px',
                  zIndex: 0
                }
              }}
            >
              <Box
                component="img"
                src={Rawabi}
                alt="Khalid Khader"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '15px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translate(-5px, -5px)'
                  }
                }}
              />
            </Box>
          </Grid>

          {/* Content column */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={2.5}>
              {aboutCards.map(({ id, icon, title, items }) => (
                <Grid item xs={12} sm={6} key={id}>
                  <Card 
                    elevation={3}
                    sx={{
                      height: '100%',
                      borderRadius: '15px',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(100, 255, 218, 0.1)',
                      backgroundColor: 'rgba(17, 34, 64, 0.7)',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                        borderColor: 'primary.main'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                        <Avatar 
                          sx={{ 
                            bgcolor: 'rgba(100, 255, 218, 0.1)', 
                            color: 'primary.main',
                            mr: 1.5,
                            fontSize: '1.5rem'
                          }}
                        >
                          {icon}
                        </Avatar>
                        <Typography variant="h6" component="h3" color="text.primary">
                          {title}
                        </Typography>
                      </Box>
                      <Divider sx={{ mb: 2, borderColor: 'rgba(100, 255, 218, 0.2)' }} />
                      <List dense disablePadding>
                        {items.map((item, index) => (
                          <ListItem key={index} disablePadding sx={{ pb: 0.75 }}>
                            <ListItemText 
                              primary={item} 
                              primaryTypographyProps={{ 
                                variant: 'body2',
                                color: 'text.secondary',
                                sx: { fontSize: '0.9rem' }
                              }} 
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{ 
                mt: 4, 
                mb: 3,
                lineHeight: 1.8,
                fontSize: { xs: '0.95rem', md: '1rem' }
              }}
            >
              Previously, I was the AI Production Team Lead at MENA DEVS, specializing in NLP, computer vision, and AI-driven solutions. I have a proven track record in developing AI models for healthcare, HR analytics, and cybersecurity, including brain tumor classification, HR insights, and IoT security. With experience as a data scientist, machine learning engineer, and AI consultant, I have worked on AI-powered web applications integrating Oracle PL/SQL, MySQL, and Java, along with front-end development using React JS. I am passionate about AI consulting, curriculum development, and enterprise AI deployment, with a focus on integrating AI into software development to drive innovation and business impact. Additionally, I actively give talks and workshops on AI, machine learning, deep learning, and computer vision at well-known Palestinian academies like AXSOS Academy and TAP. I am also currently tuning the Whisper v3 model for Canadian French and English medical data and applying my expertise in medical AI research and technology entrepreneurship.
            </Typography>
            
            <Button 
              variant="contained" 
              color="primary" 
              href="#contact"
              size="large"
              sx={{ 
                mt: 2,
                fontWeight: 500
              }}
            >
              Contact Me
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
