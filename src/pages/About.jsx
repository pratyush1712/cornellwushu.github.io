import { CardHeader, Grid, Typography, Card, CardContent } from '@mui/material'
import React from 'react'
import { rgba } from 'polished';
import about from '../images/about.jpg';
import wushu from '../images/wushu.jpg';
import { Container } from '@mui/system';

function About() {
  return (
    <>
      <Grid container mt={56} backgroundColor={rgba(140, 0, 0, 0.07)} justifyContent={'center'}>
        <Grid element xs={12} align={'center'}>
          <Typography
            lineHeight={2.6}
            sx={{
              paddingTop: { md: 2, xs: 5 },
              width: { md: 700 }
            }}>
            <Typography variant='h2' color={rgba(150, 0, 0, 0.85)} align="center">The Sport</Typography>
            Wushu is the Chinese name for martial arts, and in modern times it refers
            to the sport that comprises various standardized styles derived from
            traditional Chinese martial arts.
          </Typography>
        </Grid>
        <Typography variant='h2' color={rgba(150, 0, 0, 0.85)} style={{
          paddingTop: 20,
        }}>Forms</Typography>
        <Grid container sx={{ paddingLeft: { md: 20 }, paddingRight: { md: 20 } }} pb={8}>
          <Grid element >
            <Card sx={{ minHeight: 200, minWidth: 200, margin: { md: '20px 10px 0 10px' } }}>
              <CardContent>
                hi
              </CardContent>
            </Card>
          </Grid>
          <Grid element >
            <Card sx={{ minHeight: 200, minWidth: 200, margin: { md: '20px 10px 0 10px' } }}>
              <CardContent>
                hi
              </CardContent>
            </Card>
          </Grid><Grid element >
            <Card sx={{ minHeight: 200, minWidth: 200, margin: { md: '20px 10px 0 10px' } }}>
              <CardContent>
                hi
              </CardContent>
            </Card>
          </Grid><Grid element >
            <Card sx={{ minHeight: 200, minWidth: 200, margin: { md: '20px 10px 0 10px' } }}>
              <CardContent>
                hi
              </CardContent>
            </Card>
          </Grid><Grid element >
            <Card sx={{ minHeight: 200, minWidth: 200, margin: { md: '20px 10px 0 10px' } }}>
              <CardContent>
                hi
              </CardContent>
            </Card>
          </Grid><Grid element >
            <Card sx={{ minHeight: 200, minWidth: 200, margin: { md: '20px 10px 0 10px' } }}>
              <CardContent>
                hi
              </CardContent>
            </Card>
          </Grid><Grid element >
            <Card sx={{ minHeight: 200, minWidth: 200, margin: { md: '20px 10px 0 10px' } }}>
              <CardContent>
                hi
              </CardContent>
            </Card>
          </Grid><Grid element >
            <Card sx={{ minHeight: 200, minWidth: 200, margin: { md: '20px 10px 0 10px' } }}>
              <CardContent>
                hi
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default About