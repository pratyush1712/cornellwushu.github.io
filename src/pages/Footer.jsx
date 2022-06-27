import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import { Grid, Typography, Container, Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Typing, Logo } from '../styles/FooterStyles';
import { rgba } from 'polished';

const Footer = () => {
  return (
    <>
      <Grid container bgcolor={'whitesmoke'} alignItems={'center'} pt={2}>
        <Grid element xs={12} md={5} align={'center'} sx={{ paddingRight: { md: 14 } }}>
          <Container sx={{ width: { md: 300, xs: 250 } }}>
            <Logo style={{ marginLeft: -31 }} />
            <Typography variant={'h4'} sx={{ color: '#201E1F', marginLeft: { md: -3, xs: -1 } }}><i>Cornell Wushu</i></Typography>
            <Grid container align={'center'}>
              <Grid element xs={4}>
                <Button variant="link" href="https://www.instagram.com/cornellwushu/" target="_blank" startIcon={<InstagramIcon sx={{ color: "#FF4000" }} />} size="large" sx={{ marginRight: 3 }}></Button>
              </Grid>
              <Grid element xs={4}>
                <Button variant="link" href="https://www.facebook.com/groups/194421890577476" target="_blank" startIcon={<FacebookIcon sx={{ color: "#FF4000" }} />} size="large" sx={{ marginRight: 3 }}></Button>
              </Grid>
              <Grid element xs={4}>
                <Button variant="link" href="https://www.youtube.com/user/CornellWushu" target="_blank" startIcon={<YouTubeIcon sx={{ color: "#FF4000" }} />} size="large"></Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid element xs={12} md={7} align={'center'} sx={{ paddingLeft: { md: 17 }, paddingBottom: { xs: 6 }, paddingTop: { xs: 3 }, marginLeft: { xs: -0.2 } }}>
          <Container>
            <Typography variant="p" fontSize={20}>
              <mark style={{ backgroundColor: rgba(255, 64, 0, 0.07) }}><i>@ cornell university<br />
                Built by Pratyush Sudhakar</i></mark>
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;