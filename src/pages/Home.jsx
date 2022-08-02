import { Grid, Typography } from '@mui/material'
import React from 'react'
import about from '../images/about.jpg';
import wushu from '../images/wushu.jpg';
import { fontColorPrimary, fontPrimary } from '../styles/ColorsFonts';
import { Container } from '@mui/system';

function Home() {
  return (
    <Container justifycontent={'center'}>
      <Grid container sx={{ justifyContent: 'center', align: 'center' }}>
        <Grid container alignItems={'center'} p={3}>
          <Grid item md={6} display={{ xs: 'none', md: 'flex' }} sx={{ justifyContent: 'space-evenly' }}>
            <img
              align='center'
              alt="Cornell Wushu"
              src={about}
              style={{ width: '80%', height: 250, objectFit: 'cover', objectPosition: 'center', borderRadius: 8 }}
            />
          </Grid>
          <Grid item md={6} sx={{ mt: 2 }}>
            <Typography variant='body1' paragraph sx={{ lineHeight: 1.9 }}>
              Wushu is the Chinese name for martial arts, and in modern
              times it refers to the sport that comprises various standardized
              styles derived from traditional Chinese martial arts. Cornell Wushu is
              dedicated to promoting, practicing and performing Wushu, and we
              are actively involved in the community via supporting many non-profit
              and cultural events throughout the year. Our members both compete in
              collegiate wushu competitions and spend time teaching new learners.
              We welcome members of any experience level to our open practices.
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems={'center'} mt={5}>
          <Grid item md={7} justifyContent={'space-evenly'} sx={{ p: 1, pb: 4 }}>
            <Typography variant='h2' fontFamily={fontPrimary} color={fontColorPrimary} align={'center'} p={1}>
              Cornell Wushu
            </Typography>
            <Typography sx={{ lineHeight: 1.9 }}>
              Cornell Wushu is dedicated to promoting, practicing, and performing Wushu.
              <br /><br />
              We hold open practices which, as the name suggests, are open to all
              members of the Cornell community, including undergraduate students,
              graduate students, teaching staff, and other employees. We welcome
              people of all experience levels. In these open practices, experienced
              members of Cornell Wushu will teach the basics of Wushu and accommodate
              whatever skill level is shown.
              <br /><br />
              We perform at various events in the community. These events range from charity
              fundraising events to cultural celebration events. They take place both in
              Cornell and in the wider community, which includes the city of Ithaca and
              surrounding cities. (For information on how to request, see our Contact Us
              page.) Our most common appearances include JUSA’s Ennichi, CSA’s Mid-autumn
              Festival, Project Hope’s Hope Night, and CAPSU’s Asia Night. Head over to
              the Videos page to watch some of our performances.
              <br /><br />
              Last but not least, we spend a lot of time improving our own abilities.
              We take these abilities to competitions: University Wushu Games and
              Collegiate Wushu Competition. In the past few years, we’ve taken gold
              in Women’s Advanced Changquan, gold in Women’s Beginner Changquan, silver
              in Men’s Intermediate Nanquan, silver in Men’s Intermediate Taijiquan,
              just to list a few.
            </Typography>
          </Grid>
          <Grid item md={5} display={{ xs: 'none', md: 'flex' }} sx={{ pl: 5 }}>
            <img
              alt="Cornell Wushu"
              src={wushu}
              style={{ width: '100%', height: 500, objectFit: 'cover', objectPosition: 'center', borderRadius: 8 }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )

}

export default Home;