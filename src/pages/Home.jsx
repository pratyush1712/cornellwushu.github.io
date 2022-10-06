import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import about from "../images/about.jpg";
import wushu from "../images/wushu.jpg";
import { Container } from "@mui/system";
import {
  bgColorPrimary,
  bgColorPrimaryNoBlur,
  bgColorSecondary,
  bgColorSecondaryNoBlur,
  fontColorPrimary,
  fontPrimary,
} from "../styles/ColorsFonts";

function Home(props) {
  const events = props.events;
  return (
    <Container justifycontent={"center"}>
      <Grid container sx={{ justifyContent: "center", align: "center" }}>
        <Grid container alignItems={"center"} pt={3}>
          <Grid
            item
            md={5}
            display={{ xs: "none", md: "flex" }}
            sx={{ justifyContent: "space-evenly" }}
          >
            <img
              align="center"
              alt="Cornell Wushu"
              src={about}
              style={{
                width: "80%",
                height: 250,
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 8,
              }}
            />
          </Grid>
          <Grid item md={7} sx={{ mt: 2, p: 1 }}>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.9 }}>
              Wushu is the Chinese name for martial arts, and in modern times it
              refers to the sport that comprises various standardized styles
              derived from traditional Chinese martial arts. Cornell Wushu is
              dedicated to promoting, practicing and performing Wushu, and we
              are actively involved in the community via supporting many
              non-profit and cultural events throughout the year. Our members
              both compete in collegiate wushu competitions and spend time
              teaching new learners. We welcome members of any experience level
              to our open practices.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems={"center"}
          sx={{ justifyContent: "center" }}
          mt={1}
          p={{ md: 5 }}
        >
          <Grid
            item
            md={12}
            justifyContent={"space-evenly"}
            sx={{ p: 1, pb: 4 }}
          >
            <Typography
              variant="h2"
              fontFamily={fontPrimary}
              color={fontColorPrimary}
              align={"center"}
              p={1}
            >
              Cornell Wushu
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.9 }}>
              Cornell Wushu is dedicated to promoting, practicing, and
              performing Wushu.
              <br />
              <br />
              We hold open practices which, as the name suggests, are open to
              all members of the Cornell community, including undergraduate
              students, graduate students, teaching staff, and other employees.
              We welcome people of all experience levels. In these open
              practices, experienced members of Cornell Wushu will teach the
              basics of Wushu and accommodate whatever skill level is shown.
              <br />
              <br />
              <Typography
                variant="h4"
                fontFamily={fontPrimary}
                color={fontColorPrimary}
              >
                Practice Timings
              </Typography>
              <Typography variant="body1" lineHeight={2.5}>
                <ul>
                  <li>Mondays: 7:30 - 9:00pm Barton Hall</li>
                  <li>Fridays: 6:50 - 8:20pm Helen Newman Hall</li>
                  <li>Saturdays: 7:30 - 9:00pm Barton Hall</li>
                </ul>
              </Typography>
              <Typography
                variant="h4"
                fontFamily={fontPrimary}
                color={fontColorPrimary}
                mb={3}
              >
                Performances
              </Typography>
              We perform at various events in the community. These events range
              from charity fundraising events to cultural celebration events.
              They take place both in Cornell and in the wider community, which
              includes the city of Ithaca and surrounding cities. (For
              information on how to request, see our Contact Us page.) Our most
              common appearances include JUSA’s Ennichi, CSA’s Mid-autumn
              Festival, Project Hope’s Hope Night, and CAPSU’s Asia Night. Head
              over to the Performances page to watch some of our performances.
              <br />
              Some of our upcoming performances are as follows:
              <br />
              <br />
              <Stack
                variant={"outlined"}
                direction={{ md: "row" }}
                sx={{
                  maxHeight: { md: 300 },
                  maxWidth: { xs: "80vw" },
                  mb: 3,
                  overflowX: { md: "scroll" },
                  overflowY: { xs: "scroll", md: "auto" },
                  "&::-webkit-scrollbar": {
                    width: 2,
                    height: 2,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    borderRadius: 8,
                  },
                  // boxShadow: 1,
                  background: bgColorPrimary,
                  p: 0.8,
                  pt: 1.1,
                  borderColor: fontColorPrimary,
                }}
              >
                {props.events.map((event) => (
                  <Card
                    color={bgColorSecondary}
                    sx={{
                      minWidth: { md: 300, xs: "80%" },
                      marginRight: { xs: 1, md: 1 },
                      marginBottom: { xs: 0.5 },
                    }}
                  >
                    <CardContent>
                      <Typography variant="subtitle1">
                        <b>{event.eventName}</b>
                      </Typography>
                      <Typography variant="body2">{event.location}</Typography>
                      <Typography variant="caption">
                        {new Date(event.date.replace("-", "/")).toDateString()}
                      </Typography>
                      <br />
                      <Button
                        size="medium"
                        sx={{ ml: -1, color: fontColorPrimary }}
                      >
                        Get Notified
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
              <Typography
                variant="h4"
                fontFamily={fontPrimary}
                color={fontColorPrimary}
                mb={3}
              >
                Competitions
              </Typography>
              Last but not least, we spend a lot of time improving our own
              abilities. We take these abilities to competitions: University
              Wushu Games and Collegiate Wushu Competition. In the past few
              years, we’ve taken gold in Women’s Advanced Changquan, gold in
              Women’s Beginner Changquan, silver in Men’s Intermediate Nanquan,
              silver in Men’s Intermediate Taijiquan, just to list a few.
            </Typography>
          </Grid>
          {/* <Grid item md={5} display={{ xs: "none", md: "flex" }} sx={{ pl: 5 }}>
            <img
              alt="Cornell Wushu"
              src={wushu}
              style={{
                width: "100%",
                height: 500,
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 8,
              }}
            />
          </Grid> */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
