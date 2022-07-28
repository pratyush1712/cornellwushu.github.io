import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Logo } from '../styles/HeaderStyles';
import { Typography, Grid, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Content() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Cornell Wushu', '康奈尔武术', 'Chinese Martial Arts', 'Cornell Wushu'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 1000,
      onComplete() {
        typed.cursor.remove();
      }
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  const theme = createTheme();
  theme.typography.h1 = {
    fontFamily: 'Fira Sans',
    textDecorationThickness: 'auto',
    fontWeight: '700',
    position: 'absolute',
    top: '30vw',
    left: '4vw',
    right: '4vw',
    color: '#FEEFDD',
    marginTop: '-10px',
    fontSize: '2.5rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '7rem',
      fontFamily: 'Fira Sans',
      fontWeight: '400',
      top: '28vw',
      left: '7vw',
      right: '7vw',
    }
  };
  return (
    <>
      <Logo />
      <ThemeProvider theme={theme}>
        <Typography justifyContent={'center'} variant="h1" textAlign={"center"}><span ref={el}></span></Typography>
      </ThemeProvider>
      <Grid container direction="row" alignItems="center" justifyContent={'center'} sx={{ position: 'absolute', top: { md: '40vw', xs: '50vw' } }}>
        <Grid item>
          <Button variant="link" href="https://www.instagram.com/cornellwushu/" target="_blank" startIcon={<InstagramIcon sx={{ color: "#FEEFDD" }} />} size="large" sx={{ marginRight: 3 }}></Button>
        </Grid>
        <Grid item>
          <Button variant="link" href="https://www.facebook.com/groups/194421890577476" target="_blank" startIcon={<FacebookIcon sx={{ color: "#FEEFDD" }} />} size="large" sx={{ marginRight: 3 }}></Button>
        </Grid>
        <Grid item>
          <Button variant="link" href="https://www.youtube.com/user/CornellWushu" target="_blank" startIcon={<YouTubeIcon sx={{ color: "#FEEFDD" }} />} size="large"></Button>
        </Grid>
      </Grid>
    </>

  );
}