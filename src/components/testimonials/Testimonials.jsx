import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, useTheme, alpha } from '@mui/material';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import IMG1 from "../../assets/img1.JPG";
import IMG2 from "../../assets/img2.jpg";
import IMG3 from "../../assets/img3.JPG";
import IMG4 from "../../assets/img4.jpg";
import IMG5 from "../../assets/img5.jpg";
import IMG6 from "../../assets/img6.jpg";
import IMG7 from "../../assets/img7.jpg";
import IMG8 from "../../assets/img8.jpg";
import IMG9 from "../../assets/img9.jpg";
import IMG10 from "../../assets/img10.JPG";
import IMG11 from "../../assets/img11.jpg";
import IMG12 from "../../assets/img12.JPG";
import IMG13 from "../../assets/img13.jpg";
import IMG14 from "../../assets/img14.jpg";
import IMG16_NEW from "../../assets/IMG_3124.jpg";
import IMG17_NEW from "../../assets/IMG_3126.jpg";
import Khalid from "../../assets/Khalid.png";
import IMG18 from "../../assets/me1A.png";
import IMG19 from "../../assets/me2A.png";
import IMG20 from "../../assets/IMG_4361.jpg";
import IMG21 from "../../assets/IMG_4357.JPG";
import IMG22 from "../../assets/2025 1.jpg";
import IMG23 from "../../assets/2025 2.png";
import IMG24 from "../../assets/2025 3.png";
import IMG25 from "../../assets/2025 6.png";
import IMG26 from "../../assets/2025 7.png";
import IMG27 from "../../assets/2022 1.JPG";
import IMG28 from "../../assets/2022 2.JPG";
import IMG29 from "../../assets/2024 2.JPG";
import IMG30 from "../../assets/2024 3.png";
import IMG31 from "../../assets/2024 4.png";
import IMG32 from "../../assets/2024 5.png";
import IMG33 from "../../assets/2024 6.png";


const Testimonials = () => {
  const theme = useTheme();
  
  const photos = [
    { img: IMG16_NEW, year: "2024" },
    { img: IMG1, year: "2022" },
    { img: IMG2, year: "2021" },
    { img: IMG3, year: "2018" },
    { img: IMG4, year: "2022" },
    { img: IMG5, year: "2018" },
    { img: IMG32, year: "2024" },
    { img: IMG25, year: "2025" },
    { img: IMG30, year: "2024" },
    { img: IMG6, year: "2016" },
    { img: IMG7, year: "2018" },
    { img: IMG8, year: "2015" },
    { img: IMG24, year: "2025" },
    { img: IMG9, year: "2019" },
    { img: IMG10, year: "2020" },
    { img: IMG11, year: "2018" },
    { img: IMG12, year: "2020" },
    { img: IMG28, year: "2022" },
    { img: IMG23, year: "2025" },
    { img: IMG13, year: "2020" },
    { img: IMG14, year: "2020" },
    { img: IMG18, year: "2022" },
    { img: IMG33, year: "2024" },
    { img: IMG26, year: "2025" },
    { img: IMG29, year: "2024" },
    { img: IMG19, year: "2022" },
    { img: IMG22, year: "2024" },
    { img: IMG27, year: "2022" },
    { img: IMG31, year: "2024" },
    
    
    
  ];

  return (
    <Box 
      component="section" 
      id="myPhotos"
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
            Photo Gallery
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
            My Journey
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {photos.map((photo, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
                <Box sx={{ position: 'relative', pt: '100%', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image={photo.img}
                    alt={`Khalid ${photo.year}`}
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
                <CardContent sx={{ textAlign: 'center', py: 2 }}>
                  <Typography 
                    variant="h6" 
                    component="h3"
                    color="primary.main"
                    fontWeight={600}
                  >
                    {photo.year}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
