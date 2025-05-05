import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Snackbar,
  Alert,
  AlertTitle,
  Divider,
  IconButton,
  useTheme,
  alpha,
  Paper
} from "@mui/material";
import { MdOutlineMarkEmailRead, MdSend } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import emailjs from 'emailjs-com';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState({
    type: '',
    message: '',
    open: false
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = () => {
    setSubmissionStatus({ ...submissionStatus, open: false });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_rfd05zg', 'template_176evqa', e.target, 'sIY1d9ALoqDRyU_eO')
      .then((result) => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        console.log('Email sent successfully:', result.text);
        setSubmissionStatus({
          type: 'success',
          message: 'Your message has been sent successfully! I will get back to you soon.',
          open: true
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSubmissionStatus({
          type: 'error',
          message: 'There was an error sending your message. Please try again later.',
          open: true
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const contactOptions = [
    {
      id: 1,
      icon: <MdOutlineMarkEmailRead />,
      title: "Email",
      value: "Khalidalkhader@gmail.com",
      link: "mailto:khalidalkhader@gmail.com",
      buttonText: "Send an Email"
    },
    {
      id: 2,
      icon: <SiMessenger />,
      title: "Messenger",
      value: "Khalid Khader",
      link: "https://m.me/khalidalkhader2000/",
      buttonText: "Send a Message"
    },
    {
      id: 3,
      icon: <ImWhatsapp />,
      title: "WhatsApp",
      value: "+972568807701",
      link: "https://wa.me/972568807701",
      buttonText: "Send a Message"
    }
  ];

  return (
    <Box 
      component="section" 
      id="contact" 
      sx={{ 
        py: { xs: 8, md: 10 },
        backgroundColor: 'background.default'
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Get In Touch
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
            Contact Me
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Grid container spacing={3} direction="column">
              {contactOptions.map((option) => (
                <Grid item key={option.id}>
                  <Card
                    elevation={3}
                    sx={{
                      borderRadius: '12px',
                      backgroundColor: alpha(theme.palette.background.paper, 0.6),
                      transition: 'all 0.3s ease',
                      overflow: 'hidden',
                      border: '1px solid',
                      borderColor: 'rgba(100, 255, 218, 0.1)',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                        borderColor: 'primary.main',
                        '& .contactIcon': {
                          transform: 'translateY(-5px) scale(1.2)',
                          color: 'primary.main'
                        }
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <IconButton
                          className="contactIcon"
                          sx={{
                            fontSize: '1.8rem',
                            color: 'primary.light',
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            mr: 2,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {option.icon}
                        </IconButton>
                        <Box>
                          <Typography variant="h6" component="h4" gutterBottom>
                            {option.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {option.value}
                          </Typography>
                        </Box>
                      </Box>
                      <Divider sx={{ my: 2, borderColor: 'rgba(100, 255, 218, 0.1)' }} />
                      <Box sx={{ textAlign: 'right' }}>
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          href={option.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ textTransform: 'none' }}
                        >
                          {option.buttonText}
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={7}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                borderRadius: '15px',
                backgroundColor: alpha(theme.palette.background.paper, 0.7),
                border: '1px solid',
                borderColor: 'rgba(100, 255, 218, 0.1)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography variant="h5" component="h3" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
                Send Me a Message
              </Typography>
              
              <Box
                component="form"
                onSubmit={sendEmail}
                sx={{
                  '& .MuiTextField-root': { mb: 3 },
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}
              >
                <TextField
                  fullWidth
                  label="Your Full Name"
                  name="name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  InputProps={{
                    sx: {
                      borderRadius: '8px',
                      bgcolor: alpha(theme.palette.background.paper, 0.3)
                    }
                  }}
                />
                
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  InputProps={{
                    sx: {
                      borderRadius: '8px',
                      bgcolor: alpha(theme.palette.background.paper, 0.3)
                    }
                  }}
                />
                
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={7}
                  variant="outlined"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  sx={{ flexGrow: 1 }}
                  InputProps={{
                    sx: {
                      borderRadius: '8px',
                      bgcolor: alpha(theme.palette.background.paper, 0.3)
                    }
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={loading}
                  endIcon={<MdSend />}
                  sx={{
                    mt: 2,
                    alignSelf: 'flex-end',
                    fontWeight: 600,
                    py: 1.2,
                    px: 3
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar 
        open={submissionStatus.open} 
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleClose} 
          severity={submissionStatus.type || 'info'} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          <AlertTitle>{submissionStatus.type === 'error' ? 'Error' : 'Success'}</AlertTitle>
          {submissionStatus.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
