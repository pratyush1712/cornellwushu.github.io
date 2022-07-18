import React from 'react';
import { Card, CardContent, Grid, Typography, CardMedia, CardHeader, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { rgba } from 'polished';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const DetailView = (props) => {
  const display = props.member;
  if (display != undefined) {
    return (
      <div style={{ position: 'fixed', top: '12vw', bottom: '18vw', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', left: '20%', right: '20%' }}>
        <Grid container bgcolor='whitesmoke' height={'fit-content'} width={800} paddingRight={2} paddingLeft={3} borderRadius={1.7} alignItems={'center'}>
          <Grid element mt={3} xs={4} width={500}>
            <CardMedia
              sx={{ objectFit: 'cover', borderRadius: 60, objectPosition: 'center', width: 200, display: { md: 'block', xs: 'none' }, height: 200, ":hover": { boxShadow: 5 }, zIndex: 10, align: 'center' }}
              component="img"
              src={display.image[0]}
              alt={display.FullName}>
            </CardMedia>
            <CardContent>
              {display.name}<br></br>
              <b>Major:</b> {display.Major}<br></br>
              <b>Class:</b> {display.GraduationYear}<br></br>
            </CardContent>
          </Grid>
          <Grid element xs={8} boxShadow={0.4} mt={2} mb={2} bgcolor={rgba(250, 250, 250, 1)} sx={{ borderRadius: 3 }} height={'fit-content'}>
            <CardContent sx={{ height: 210 }}>
              <CloseIcon cursor={'pointer'} onClick={() => {
                props.setDisplay(undefined)
              }} sx={{ float: 'right' }} position={'absolute'} borderRadius={300} />
              <Typography variant='body1' lineHeight={2}>
                {display.Description}<br />
                <b>Fun Fact:</b> {display.FunFact}
              </Typography>
            </CardContent>
            <Grid container xs={12} mb={2} justifyContent={'center'}><Grid element alignItems={'center'}><InstagramIcon cursor={'pointer'} /></Grid></Grid>
          </Grid>
        </Grid >
      </div >
    )
  }
}

export default DetailView