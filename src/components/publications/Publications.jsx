import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
  alpha,
  Grid,
  Avatar,
  Divider,
} from '@mui/material';
import { FaExternalLinkAlt, FaBook, FaBrain, FaCertificate } from 'react-icons/fa';
import { SiIeee } from 'react-icons/si';
import { MdScience, MdVerified } from 'react-icons/md';

const publicationsData = [
  {
    id: 1,
    title: 'AI-Driven Approach for Brain Tumor Detection and Classification Using Deep Learning',
    journal: 'IEEE Xplore',
    conference: 'IEEE International Conference',
    year: '2025',
    abstract:
      'This research presents a state-of-the-art deep learning framework for automated brain tumor detection and multi-class classification from MRI scans. The proposed system achieves high accuracy using advanced Convolutional Neural Network (CNN) architectures combined with transfer learning, contributing to AI-assisted medical diagnosis and clinical decision support.',
    url: 'https://ieeexplore.ieee.org/document/11208575',
    tags: ['Deep Learning', 'Brain Tumor Detection', 'CNN', 'Medical Imaging', 'Transfer Learning', 'MRI Analysis'],
    isNew: true,
    doi: '10.1109/11208575',
  },
];

const Publications = () => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="section"
      id="publications"
      ref={sectionRef}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.06)} 0%, transparent 70%)`,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '5%',
          right: '-5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
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
            <MdScience style={{ color: theme.palette.primary.main, fontSize: '1rem' }} />
            <Typography variant="subtitle2" color="primary.main" fontWeight={600}>
              Research & Publications
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
              },
            }}
          >
            Published Work
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 3, maxWidth: '600px', mx: 'auto' }}>
            Peer-reviewed research contributing to AI and machine learning in healthcare
          </Typography>
        </Box>

        {/* Publication Cards */}
        {publicationsData.map((pub, index) => (
          <Box
            key={pub.id}
            sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(50px)',
              transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
            }}
          >
            <Card
              elevation={0}
              sx={{
                borderRadius: '20px',
                background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.secondary.light, 0.3)} 100%)`,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                position: 'relative',
                overflow: 'visible',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: `0 20px 60px ${alpha(theme.palette.primary.main, 0.15)}`,
                  borderColor: theme.palette.primary.main,
                  '& .pub-glow': {
                    opacity: 1,
                  },
                },
              }}
            >
              {/* Glow effect */}
              <Box
                className="pub-glow"
                sx={{
                  position: 'absolute',
                  inset: -1,
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, transparent, ${alpha(theme.palette.primary.main, 0.05)})`,
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* NEW Badge */}
              {pub.isNew && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: -14,
                    left: 30,
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    px: 2,
                    py: 0.5,
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, #00e5ff)`,
                    boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.5)}`,
                    animation: 'pubPulse 2s infinite',
                    '@keyframes pubPulse': {
                      '0%, 100%': { boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.5)}` },
                      '50%': { boxShadow: `0 4px 25px ${alpha(theme.palette.primary.main, 0.9)}` },
                    },
                  }}
                >
                  <MdVerified style={{ color: '#0a192f', fontSize: '0.85rem' }} />
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#0a192f',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    New Publication
                  </Typography>
                </Box>
              )}

              <CardContent sx={{ p: { xs: 3, md: 5 }, position: 'relative', zIndex: 1 }}>
                <Grid container spacing={4} alignItems="flex-start">
                  {/* Journal Badge */}
                  <Grid item xs={12} md={2}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'center' }, gap: 2, pt: 1 }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '16px',
                          background: `linear-gradient(135deg, #00629B, #1a2a6c)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 8px 20px rgba(0,98,155,0.4)',
                          flexShrink: 0,
                        }}
                      >
                        <SiIeee style={{ fontSize: '2.5rem', color: '#fff' }} />
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 700,
                          textAlign: 'center',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          fontSize: '0.7rem',
                        }}
                      >
                        {pub.year}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Content */}
                  <Grid item xs={12} md={10}>
                    {/* Title */}
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 700,
                        mb: 1.5,
                        lineHeight: 1.4,
                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                      }}
                    >
                      {pub.title}
                    </Typography>

                    {/* Journal */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                      <FaBook style={{ color: theme.palette.primary.main, fontSize: '0.9rem' }} />
                      <Typography variant="subtitle2" color="primary.main" fontWeight={600}>
                        {pub.journal}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        — {pub.conference}
                      </Typography>
                    </Box>

                    <Divider sx={{ borderColor: alpha(theme.palette.primary.main, 0.1), mb: 3 }} />

                    {/* Abstract */}
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.9, mb: 3, fontSize: '0.95rem' }}
                    >
                      {pub.abstract}
                    </Typography>

                    {/* Tags */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                      {pub.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: alpha(theme.palette.primary.main, 0.08),
                            color: theme.palette.primary.main,
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                            fontWeight: 500,
                            fontSize: '0.75rem',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              backgroundColor: alpha(theme.palette.primary.main, 0.15),
                              transform: 'scale(1.05)',
                            },
                          }}
                        />
                      ))}
                    </Box>

                    {/* Actions */}
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Button
                        variant="contained"
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<FaExternalLinkAlt />}
                        sx={{
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}, #00e5ff)`,
                          color: '#0a192f',
                          fontWeight: 700,
                          px: 3,
                          py: 1,
                          borderRadius: '10px',
                          textTransform: 'none',
                          fontSize: '0.9rem',
                          boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: `linear-gradient(135deg, #00e5ff, ${theme.palette.primary.main})`,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.5)}`,
                          },
                        }}
                      >
                        View on IEEE Xplore
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<FaCertificate />}
                        sx={{
                          borderColor: alpha(theme.palette.primary.main, 0.4),
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          px: 3,
                          py: 1,
                          borderRadius: '10px',
                          textTransform: 'none',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: theme.palette.primary.main,
                            backgroundColor: alpha(theme.palette.primary.main, 0.06),
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        IEEE Peer-Reviewed
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        ))}

        {/* Stats Row */}
        <Box
          sx={{
            mt: 8,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
          }}
        >
          <Grid container spacing={3} justifyContent="center">
            {[
              { icon: <FaBook />, value: '1+', label: 'IEEE Publications' },
              { icon: <MdScience />, value: 'AI/ML', label: 'Research Domain' },
              { icon: <FaBrain />, value: 'Medical', label: 'Application Area' },
            ].map((stat, i) => (
              <Grid item xs={12} sm={4} key={i}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: '16px',
                    background: alpha(theme.palette.background.paper, 0.5),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    textAlign: 'center',
                    py: 3,
                    px: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: alpha(theme.palette.primary.main, 0.4),
                      transform: 'translateY(-4px)',
                      boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.1)}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 1.5,
                      borderRadius: '12px',
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                      fontSize: '1.4rem',
                      mb: 1.5,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography variant="h4" color="primary.main" fontWeight={700}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Publications;
