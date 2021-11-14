import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './About.css';
import LabelIcon from '@mui/icons-material/Label';

const About = () => {
  return (
    <Container>
      <Box id='about' sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
        <Grid className='d-flex justify-content-center align-items-center' item xs={12} md={6}>
          <div>
          <h2>About Us</h2>
          <ul className='p-0'>
            <li><LabelIcon/>&nbsp;We provide quick travel booking service.</li>
            <li><LabelIcon/>&nbsp;We provide best travel management system.</li>
            <li><LabelIcon/>&nbsp;We provide awesome tour and travels facility.</li>
            <li><LabelIcon/>&nbsp;We have very friendly tour guides to guide you.</li>
            <li><LabelIcon/>&nbsp;We offer discount on some fascinating place to visit.</li>
          </ul>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <img
            className='img-fluid'
              src="https://i.ibb.co/M8Mjwh6/Tourist-reading-book.jpg"
              alt="about_img"
            />
          </div>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
};

export default About;
