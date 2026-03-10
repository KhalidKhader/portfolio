import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
  useTheme,
  alpha,
  Paper,
  Chip,
  Link,
  Stack,
  Avatar
} from "@mui/material";
import { FaLinkedin, FaFacebook, FaExternalLinkAlt, FaDownload, FaRobot } from "react-icons/fa";
import Report from "../../assets/MyInternshipreport.docx";
import tap from "../../assets/tap.jpeg";
import axsos from "../../assets/axsos.png";
import knowledge from "../../assets/knowledge.png";
import teia from "../../assets/teia.jpg";


import exalt from "../../assets/exalt.png";
import aaup from "../../assets/aaup.png";
import AI_Consulting_Services from "../../assets/AI-Consulting-Services.jpeg";
import MenaDevs from "../../assets/MenaDevs.jpeg";
import Bitlab from "../../assets/Bitlab.png";
import MedidoHealth from "../../assets/Medido.png";

const Experience = () => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Experience data
  const experiences = [
    {
      id: 1,
      company: "MedidoHealth - USA 🇺🇸",
      role: "AI Specialist",
      period: "July 2025 – PRESENT",
      description: "Leading advanced AI initiatives focused on medical prescription recognition, triage automation, and patient identification for U.S. and Colombian healthcare clients. Developed intelligent pharmacy systems by integrating Vision-Language Models, Graph RAG, and Vertex AI, alongside Neo4j graph databases and FastAPI-based AI microservices. Implemented scalable, secure, and compliant architectures leveraging Google Cloud, AWS Bedrock, and OpenAI Studio for multilingual medical AI systems. Collaborated across full-stack, AI, and DevOps workflows, ensuring HIPAA/PIPEDA compliance, performance optimization, and production-grade deployment.",
      image: MedidoHealth,
      links: []
    },
      {
      id: 3.5,
      company: "TEIA - Germany 🇩🇪 - Switzerland 🇨🇭",
      role: "AI Engineer & Machine Learning Researcher",
      period: "2023 – 2025",
      description: "Worked as an AI Engineer and Machine Learning Researcher at TEIA, contributing to R&D projects focused on AI-powered solutions for healthcare, intelligent systems, and data-driven applications. Developed computer vision models for medical image analysis, implemented NLP pipelines, and collaborated on brain tumor detection research that led to a published IEEE paper (2025). Spearheaded AI product prototyping and integration with cloud-based ML deployment pipelines.",
      image: teia,
      badge: "Research",
      links: []
    },
    {
      id: 2,
      company: "Bitlab - Canada 🇨🇦",
      role: "AI and Software Engineering Consultant",
      period: "Mar 2025 – PRESENT",
      description: "Providing consultation services in AI and software engineering, working with clients to design and implement cutting-edge machine learning solutions and robust software architectures. Integrating Graph RAG, Azure AI Speech, Whisper v3 tuning, and Fast API/Nest JS systems into production healthcare workflows. Developing AI-powered medical systems using LLMs, speech-to-text, text-to-speech, and graph databases (Neo4J).",
      image: Bitlab,
      links: []
    },
    {
      id: 3,
      company: "MenaDevs - Jordan 🇯🇴",
      role: "AI Team Lead",
      period: "Dec 2024 – May 2025",
      description: "Led the AI team in developing and implementing machine learning solutions for clients in the MENA region. Coordinated project timelines, mentored junior developers, and ensured the delivery of high-quality solutions that met client requirements.",
      image: MenaDevs,
      links: []
    },
    {
      id: 4,
      company: "AI Consulting Services - KSA 🇸🇦",
      role: "AI Consultant",
      period: "Mar 2024 – PRESENT",
      description: "As a Data Scientist and Machine Learning Engineer, I played a pivotal role in leveraging data to drive informed decision-making and enhance business processes. By developing and implementing advanced machine learning models and algorithms to analyze vast datasets, predict trends, and optimize financial strategies. Collaborating closely with database administrators, you will design and maintain robust data architectures, ensuring seamless integration and accessibility of data for analytical purposes.",
      image: AI_Consulting_Services,
      links: []
    },
    {
      id: 5,
      company: "AXSOS ACADEMY GMBH - Germany 🇩🇪",
      role: "DATA SCIENCE AND MACHINE LEARNNG ENGINEER/TA",
      period: "AUG 2023 – PRESENT",
      description: "Start working on data science and machine learning with basic knowledge of NumPy, Pandas, MatPlotlib, Seaborn, Folium, scikit learn, XGBOOST, LightGBM, Keras, Tensorflow, SHAP, LIMA, Stats Model, Tableau Work on Brain Tumors Detection using open CV and Tensorflow with Keras and PyTorch and working in Advanced Machine learning using some Deep learning ANN like CNN and RNN.",
      image: axsos,
      links: [
        {
          type: "linkedin",
          url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7086262245428502528"
        }
      ]
    },
    {
      id: 6,
      company: "AXSOS ACADEMY GMBH - Germany 🇩🇪",
      role: "FULLSTACK DEVELOPER/TEACHING ASSISTANT",
      period: "NOV 2022 – FEB 2024",
      description: "Full Stack Teaching Assistant. Assisting students with problem solving, different stacks, code review. Certified in Coding Dojo in MERN, Python (Django and Flask) stacks, and Java Spring boot stack. I worked a bit on development of the ALGOS LABS project for AXSOS Academy with a team of specialists in React TS, JAVA SPRING, Mongo, and Postgres database, and working on AI Sessions with some basic AI Apps.",
      image: axsos,
      links: [
        {
          type: "facebook",
          url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAXSOSAcademy%2Fposts%2Fpfbid037jiHQSF6LRiMzdfFJoWkBr5jcpBRaZdvvAoD1bs8H4GcCTq9SUxEM4QLssMdw5FXl&show_text=true&width=500"
        }
      ]
    },
    {
      id: 7,
      company: "Exalt Technologies - Palestine 🇵🇸",
      role: "FRONTEND DEVELOPMENT",
      period: "JULY 2022 – SEP 2022",
      description: "Html, CSS and JavaScript, firebase database, git, GitHub, AJAX, jQuery regex for validation and React JS, and create many applications with JSX, React State, React Events, Reducers, JSON web token, Hooks, React Styling, Fragments, Portals, Http Requests, Connecting Database, React Router, Single-Page Applications SPA, Deploying React Apps, Authentication, React Forms, Context API, Rest API, and some APIs.",
      additionalRole: "INTERN DESIGN AND VERIFICATION",
      additionalDescription: "Learned some basic concepts about Verilog programming language and System Verilog.",
      image: exalt,
      links: [
        {
          type: "download",
          url: Report,
          title: "Download My Internship Report"
        }
      ]
    },
    {
      id: 8,
      company: "ARAB AMERICAN UNIVERSITY - Palestine 🇵🇸",
      role: "SMART ADVISING SYSTEM",
      period: "SEP 2021 - JULY 2022",
      description: "Our System Created in APEX ORACLE, Using Artificial Intelligence Techniques. Our System aims to guide our CSE students of all student's educational levels. It will show the courses on the student's plan and the description of all courses.",
      image: aaup,
      links: [
        {
          type: "linkedin",
          url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6953434291766743041"
        },
        {
          type: "external",
          url: "https://apex.oracle.com/pls/apex/r/aaup/smart-advising-system/home?session=14967676746998",
          title: "Smart Advising System"
        }
      ]
    },
    {
      id: 9,
      company: "TAP - Netherland 🇳🇱",
      role: "PROFESSIONAL MENTOR",
      period: "OCT 2023 – PRESENT",
      description: "Start as a Part Time professional mentor in Software development program, leading sessions about Artificial Intellgence, Machine Learning, Data Science, Deep Learning, Computer vision.",
      image: tap,
      links: [
        {
          type: "linkedin",
          url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7134841966789316608"
        }
      ]
    },
  ];

  // Function to render link buttons
  const renderLink = (link, index, company) => {
    switch (link.type) {
      case "linkedin":
      case "facebook":
        return (
          <Box sx={{ width: '100%', my: 2, borderRadius: '10px', overflow: 'hidden' }}>
            <iframe 
              src={link.url} 
              height="350" 
              width="100%" 
              frameBorder="0" 
              allowFullScreen 
              title={`${company} ${link.type}`}
              style={{ borderRadius: '10px' }}
            />
          </Box>
        );
      case "download":
        return (
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaDownload />}
            href={link.url}
            download
            sx={{ mt: 2 }}
          >
            {link.title}
          </Button>
        );
      case "external":
        return (
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FaExternalLinkAlt />}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 2 }}
          >
            {link.title}
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      component="section"
      id="experience"
      ref={sectionRef}
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '20%',
          right: '-8%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.04)} 0%, transparent 70%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Container>
        <Box
          sx={{
            textAlign: "center",
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
            <FaRobot style={{ color: theme.palette.primary.main, fontSize: '0.9rem' }} />
            <Typography variant="subtitle2" color="primary.main" fontWeight={600}>
              Professional Journey
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
            My Experience
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={exp.id}>
              <Box
                sx={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : index % 2 === 0 ? 'translateX(-40px)' : 'translateX(40px)',
                  transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
                }}
              >
              <Card
                elevation={0}
                sx={{
                  borderRadius: '18px',
                  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.secondary.light, 0.2)} 100%)`,
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '1px solid',
                  borderColor: alpha(theme.palette.primary.main, 0.1),
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: `0 20px 50px ${alpha(theme.palette.primary.main, 0.12)}`,
                    borderColor: alpha(theme.palette.primary.main, 0.4),
                    '& .exp-logo': {
                      transform: 'scale(1.05)',
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  },
                  '&:hover::before': {
                    opacity: 1,
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Grid container spacing={4} alignItems="flex-start">
                    <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          position: 'relative',
                          height: 160,
                          mb: 2,
                          overflow: 'hidden',
                          borderRadius: '12px',
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                          backgroundColor: 'white',
                        }}
                      >
                        <CardMedia
                          className="exp-logo"
                          component="img"
                          image={exp.image}
                          alt={exp.company}
                          sx={{
                            height: '100%',
                            objectFit: 'contain',
                            p: 2,
                            transition: 'transform 0.4s ease',
                          }}
                        />
                      </Box>
                      <Chip
                        label={exp.period}
                        color="primary"
                        variant="outlined"
                        size="small"
                        sx={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          borderColor: alpha(theme.palette.primary.main, 0.5),
                          backgroundColor: alpha(theme.palette.primary.main, 0.06),
                        }}
                      />
                      {exp.badge && (
                        <Box sx={{ mt: 1 }}>
                          <Chip
                            label={exp.badge}
                            size="small"
                            sx={{
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              backgroundColor: alpha('#a78bfa', 0.15),
                              color: '#a78bfa',
                              border: `1px solid ${alpha('#a78bfa', 0.3)}`,
                            }}
                          />
                        </Box>
                      )}
                    </Grid>

                    <Grid item xs={12} md={9}>
                      <Typography
                        variant="h5"
                        component="h2"
                        color="primary.main"
                        fontWeight={700}
                        sx={{ mb: 0.5, fontSize: { xs: '1.1rem', md: '1.3rem' } }}
                      >
                        {exp.company}
                      </Typography>

                      <Typography
                        variant="h6"
                        component="h3"
                        color="text.primary"
                        fontWeight={500}
                        sx={{ mb: 2.5, fontSize: { xs: '0.95rem', md: '1.1rem' }, opacity: 0.85 }}
                      >
                        {exp.role}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3, lineHeight: 1.9, fontSize: '0.92rem' }}
                      >
                        {exp.description}
                      </Typography>

                      {exp.additionalRole && (
                        <>
                          <Divider sx={{ mb: 2, borderColor: alpha(theme.palette.primary.main, 0.1) }} />
                          <Typography
                            variant="subtitle2"
                            color="text.primary"
                            fontWeight={600}
                            sx={{ mt: 2, mb: 1 }}
                          >
                            {exp.additionalRole}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 3, lineHeight: 1.9 }}
                          >
                            {exp.additionalDescription}
                          </Typography>
                        </>
                      )}

                      {exp.links.length > 0 && (
                        <Box sx={{ mt: 3 }}>
                          <Divider sx={{ mb: 3, borderColor: alpha(theme.palette.primary.main, 0.1) }} />
                          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                            {exp.links.map((link, idx) => (
                              <Box key={idx} sx={{ width: '100%' }}>
                                {renderLink(link, idx, exp.company)}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      )}
                    </Grid>
                  </Grid>
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

export default Experience;
