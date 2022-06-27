import { Grid, Typography } from '@mui/material'
import React from 'react'
import { rgba } from 'polished';
import about from '../images/about.jpg';
import wushu from '../images/wushu.jpg'

function Home() {
  return (
    <div> {/*style={{ background: "#FEEFDD" }}>*/}
      <Grid container xs={12} justifyContent={"center"} sx={{ marginTop: 56, paddingBottom: 5, backgroundColor: rgba(140, 0, 0, 0.07) }}>
        <Grid element display={{ xs: 'none', md: 'block' }} sx={{ paddingRight: 10 }}>
          <img src={about} style={{ height: 270, width: 440, borderRadius: 8, marginTop: 40, objectFit: 'cover', objectPosition: 'center -130px' }}></img>
        </Grid>
        <Grid element md={6}>
          <Typography
            justifyContent={"center"}
            variant='body1' paragraph
            sx={{
              paddingTop: 3,
              width: { xs: '80vw', md: 'fit-content' },
            }}>
            <Typography variant='h2' color={rgba(150, 0, 0, 0.85)} align="center" >About</Typography>

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
      <Grid container mt={0} sx={{ backgroundColor: rgba(200, 0, 0, 0.1) }}>
        <Grid element md={7}>
          <Typography
            justifyContent={"center"}
            variant='body1' paragraph
            sx={{
              marginLeft: { xs: 3, md: 10 },
              marginRight: { xs: 3, md: 10 },
              paddingTop: 3
            }}>
            <Typography variant='h2' color={rgba(150, 0, 0, 0.85)} align="center">Cornell Wushu</Typography>
            Cornell Wushu is dedicated to promoting, practicing, and performing Wushu.<br></br><br></br>

            We hold open practices which, as the name suggests, are open to all
            members of the Cornell community, including undergraduate students,
            graduate students, teaching staff, and other employees. We welcome
            people of all experience levels. In these open practices, experienced
            members of Cornell Wushu will teach the basics of Wushu and accommodate
            whatever skill level is shown.
            <br></br><br></br>
            We perform at various events in the community. These events range from charity
            fundraising events to cultural celebration events. They take place both in
            Cornell and in the wider community, which includes the city of Ithaca and
            surrounding cities. (For information on how to request, see our Contact Us
            page.) Our most common appearances include JUSA’s Ennichi, CSA’s Mid-autumn
            Festival, Project Hope’s Hope Night, and CAPSU’s Asia Night. Head over to
            the Videos page to watch some of our performances.
            <br></br><br></br>
            Last but not least, we spend a lot of time improving our own abilities.
            We take these abilities to competitions: University Wushu Games and
            Collegiate Wushu Competition. In the past few years, we’ve taken gold
            in Women’s Advanced Changquan, gold in Women’s Beginner Changquan, silver
            in Men’s Intermediate Nanquan, silver in Men’s Intermediate Taijiquan,
            just to list a few.
          </Typography>
        </Grid>
        <Grid element mt={8} md={5} display={{ xs: 'none', md: 'block' }} sx={{ paddingBottom: 9 }}>
          <img src={wushu} style={{ borderRadius: 8, width: 500, height: 500, objectFit: 'cover' }}></img>
        </Grid>
      </Grid>
    </div>
  )

}

export default Home;