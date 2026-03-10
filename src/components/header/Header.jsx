import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid, useTheme, useMediaQuery, Chip } from '@mui/material';
import ME1 from '../../assets/Khalid-Khader.jpg';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';

const ROLES = [
  'AI Engineer',
  'ML Researcher',
  'AI Consultant',
  'Deep Learning Specialist',
  'IEEE Published Author',
  'Full-Stack Developer',
];

const TypewriterText = ({ words }) => {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 80);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 45);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words]);

  return (
    <Box component="span" sx={{ color: 'primary.main' }}>
      {displayed}
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          width: '2px',
          height: '1.1em',
          backgroundColor: 'primary.main',
          ml: '2px',
          verticalAlign: 'text-bottom',
          animation: 'blink 0.8s step-end infinite',
          '@keyframes blink': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } },
        }}
      />
    </Box>
  );
};

// Animated floating orb
const FloatingOrb = ({ size, top, left, right, delay, color }) => (
  <Box
    sx={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      top,
      left,
      right,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      animation: `floatOrb 6s ease-in-out infinite`,
      animationDelay: delay,
      pointerEvents: 'none',
      '@keyframes floatOrb': {
        '0%, 100%': { transform: 'translateY(0) scale(1)' },
        '50%': { transform: 'translateY(-20px) scale(1.05)' },
      },
    }}
  />
);

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box
      component="header"
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background.default',
        pt: { xs: 8, md: 9 },
        pb: { xs: 12, md: 8 },
      }}
    >
      {/* Floating background orbs */}
      <FloatingOrb size="500px" top="-100px" left="-100px" delay="0s" color="rgba(100,255,218,0.04)" />
      <FloatingOrb size="350px" top="60%" right="-80px" delay="2s" color="rgba(100,255,218,0.03)" />
      <FloatingOrb size="250px" top="30%" left="40%" delay="4s" color="rgba(100,255,218,0.025)" />

      {/* Animated grid lines */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(100,255,218,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,255,218,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid
            item xs={12} md={6}
            order={{ xs: 2, md: 1 }}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <Box
              sx={{
                maxWidth: '580px',
                mx: { xs: 'auto', md: 0 },
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateX(0)' : 'translateX(-40px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
              }}
            >
              {/* Greeting badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.6,
                  borderRadius: '20px',
                  backgroundColor: 'rgba(100,255,218,0.08)',
                  border: '1px solid rgba(100,255,218,0.2)',
                  mb: 2.5,
                  animation: 'fadeSlideDown 0.6s ease 0.2s both',
                  '@keyframes fadeSlideDown': {
                    from: { opacity: 0, transform: 'translateY(-10px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                      '50%': { opacity: 0.6, transform: 'scale(1.3)' },
                    },
                  }}
                />
                <Typography variant="caption" color="primary.main" fontWeight={600} sx={{ letterSpacing: '0.08em' }}>
                  Available for New Projects
                </Typography>
              </Box>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
                sx={{
                  fontWeight: 500,
                  mb: 1,
                  animation: 'fadeSlideDown 0.6s ease 0.3s both',
                }}
              >
                Hello, I'm
              </Typography>

              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.8rem', sm: '3.2rem', md: '4rem' },
                  mb: 1.5,
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #e6f1ff 0%, #a8b2d1 50%, #64ffda 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                  animation: 'fadeSlideDown 0.6s ease 0.4s both',
                }}
              >
                Khalid Khader
              </Typography>

              {/* Typewriter role */}
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                  fontWeight: 500,
                  minHeight: '2.2rem',
                  animation: 'fadeSlideDown 0.6s ease 0.5s both',
                }}
              >
                <TypewriterText words={ROLES} />
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: '560px',
                  lineHeight: 1.8,
                  fontSize: { xs: '0.93rem', md: '0.97rem' },
                  animation: 'fadeSlideDown 0.6s ease 0.6s both',
                }}
              >
                Certified Azure AI Engineer with expertise in AI Agents, Generative AI, LLMs, Machine
                Learning, and Data Engineering. IEEE published researcher in medical AI. Leading
                AI-driven healthcare projects at MedidoHealth (USA) and consulting for Bitlab (Canada).
                Recognized speaker & trainer across USA, Canada, Germany, Jordan, and Palestine.
              </Typography>

              {/* Tag chips */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  mb: 4,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  animation: 'fadeSlideDown 0.6s ease 0.7s both',
                }}
              >
                {['IEEE Author', 'Azure Certified', 'LLM/GenAI', 'Graph RAG', 'Medical AI'].map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(100,255,218,0.07)',
                      color: 'primary.main',
                      border: '1px solid rgba(100,255,218,0.2)',
                      fontWeight: 600,
                      fontSize: '0.72rem',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(100,255,218,0.14)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  />
                ))}
              </Box>

              <Box sx={{ animation: 'fadeSlideDown 0.6s ease 0.8s both' }}>
                <CTA />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{ mb: { xs: 6, md: 0 } }}>
            <Box
              sx={{
                position: 'relative',
                maxWidth: '380px',
                mx: 'auto',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateX(0)' : 'translateX(40px)',
                transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
              }}
            >
              {/* Rotating ring */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: '-20px',
                  border: `2px dashed rgba(100,255,218,0.2)`,
                  borderRadius: '50%',
                  animation: 'rotateSlow 20s linear infinite',
                  '@keyframes rotateSlow': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                  },
                }}
              />
              {/* Static accent ring */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-14px',
                  left: '-14px',
                  right: '14px',
                  bottom: '14px',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: '28px',
                  zIndex: 0,
                  opacity: 0.4,
                  transition: 'all 0.4s ease',
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 80px rgba(0,0,0,0.4)',
                  animation: 'floatImage 5s ease-in-out infinite',
                  '@keyframes floatImage': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                  },
                }}
              >
                <Box
                  component="img"
                  src={ME1}
                  alt="Khalid Khader"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover',
                    filter: 'saturate(1.05) contrast(1.02)',
                  }}
                />
                {/* Image overlay glow */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(10,25,47,0.6) 100%)',
                    pointerEvents: 'none',
                  }}
                />
              </Box>

              {/* Floating badges on the image */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: -20,
                  backgroundColor: 'background.paper',
                  border: '1px solid rgba(100,255,218,0.3)',
                  borderRadius: '12px',
                  px: 2,
                  py: 1,
                  zIndex: 2,
                  backdropFilter: 'blur(10px)',
                  animation: 'badgeFloat 4s ease-in-out infinite',
                  '@keyframes badgeFloat': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-6px)' },
                  },
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                }}
              >
                <Typography variant="caption" color="primary.main" fontWeight={700} display="block">
                  🏆 IEEE Published
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                  2025 Research Paper
                </Typography>
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  top: 20,
                  right: -20,
                  backgroundColor: 'background.paper',
                  border: '1px solid rgba(100,255,218,0.3)',
                  borderRadius: '12px',
                  px: 2,
                  py: 1,
                  zIndex: 2,
                  backdropFilter: 'blur(10px)',
                  animation: 'badgeFloat 4s ease-in-out infinite 1.5s',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                  textAlign: 'center',
                }}
              >
                <Typography variant="caption" color="primary.main" fontWeight={700} display="block">
                  ☁️ Azure Certified
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                  AI Engineer
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {!isMobile && <HeaderSocial />}

      {!isMobile && (
        <Typography
          component="a"
          href="#about"
          sx={{
            position: 'absolute',
            right: { md: '40px', lg: '80px' },
            bottom: '80px',
            transform: 'rotate(90deg)',
            fontWeight: 300,
            fontSize: '0.9rem',
            color: 'text.secondary',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '0.1em',
            transition: 'color 0.3s ease',
            '&::after': {
              content: '""',
              width: '35px',
              height: '1px',
              backgroundColor: 'currentColor',
              marginLeft: '8px',
              transition: 'width 0.3s ease',
            },
            '&:hover': {
              color: 'primary.main',
              '&::after': { width: '55px' },
            },
          }}
        >
          Scroll Down
        </Typography>
      )}
    </Box>
  );
};

export default Header;
