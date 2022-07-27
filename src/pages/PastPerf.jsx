import { Card, CardMedia, Typography, Avatar, Stack, AvatarGroup, CardActions, Modal, Box, Divider, ListItem, ListItemAvatar, List, ListItemText, Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { Container, Grid, CardContent } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { bgColorPrimaryNoBlur, bgColorSecondary, fontColorPrimary, fontPrimary } from '../styles/ColorsFonts';
import GoogleAd from '../components/GoogleAds';
import notFound from '../MembersPictures/notFound.svg'
const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: bgColorPrimaryNoBlur,
  boxShadow: 24,
  minWidth: 600,
  borderRadius: 1,
  p: 2,
};

function returnAvatar(mem) {
  try {
    return (<Avatar
      src={require('../MembersPictures/' + mem.members.netID + '.jpg')}
      alt={mem.members.fullName}
    />)
  } catch {
    return (<Avatar
      src={notFound}
      alt={mem.members.fullName}
    />)
  }
}

function PastPerf(props) {
  const [performance, setPerformance] = useState(null)
  const streamURL = 'https://2ec2615c32b8.us-east-1.playback.live-video.net/api/video/v1/us-east-1.951388478060.channel.GyudoC5s8aIt.m3u8'
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.performances)
  }, [props])
  return (
    <Container justifyContent='center' sx={{ mb: 3 }}>
      <Typography variant='h2' mt={2} align='center' fontFamily={fontPrimary} color={fontColorPrimary} sx={{ mb: 4 }}>Wushu at Multiple Events</Typography>
      {performance && (
        <Modal
          open={{ xs: false, md: (performance != null) }}
          onClose={() => setPerformance(null)}
          onClickAway={() => setPerformance(null)}
        >
          <Box sx={style}>
            <Typography variant='h6'>{performance.eventName}</Typography>
            <Typography variant='subtitle2' sx={{ mb: 2 }}>{performance.location} &#183; {(new Date(performance.date)).toDateString()}</Typography>
            <Divider variant='middle' sx={{}} />
            <Stack sx={{
              overflowY: 'scroll', maxHeight: 200, "&::-webkit-scrollbar": {
                width: 2,
                height: 2
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: 8
              }
            }}>
              <List sx={{ minWidth: 500 }}>
                {performance.members.map(mem => {
                  return (
                    <>
                      <ListItem alignItems="flex-start"
                        sx={{ width: '100%', cursor: 'pointer', ':hover': { transition: 'smooth', transform: "scale3d(1.025, 1.025, 1.40)", width: '80%' } }}
                        component={Link} href={mem.members.instagram ? mem.members.instagram : mem.members.facebook} target={'_blank'}>
                        <ListItemAvatar>
                          {returnAvatar(mem)}
                        </ListItemAvatar>
                        <ListItemText
                          sx={{ color: 'black' }}
                          primary={mem.members.fullName}
                          secondary={<React.Fragment>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Member Since: {mem.members.yearJoined}
                            </Typography>
                          </React.Fragment>} />
                      </ListItem><Divider variant="inset" component="li" />
                    </>)
                })}
              </List>
            </Stack>
          </Box>
        </Modal>
      )}
      <Grid container xs={12} justifyContent={"center"}>
        {data.map(perf => {
          return (
            <Card color={bgColorSecondary} sx={{ marginRight: { sm: 3, md: 3 }, marginBottom: { xs: 4, sm: 4, md: 8 }, "&:hover": { transition: 'smooth', transform: "scale3d(1.015, 1.015, 1.40)" } }} >
              <CardMedia component="iframe"
                width='fit-content' height='fit-content'
                src={perf.url + '?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0'}
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; 
                picture-in-picture" allowfullscreen>
              </CardMedia>
              <CardContent>
                <Typography variant='subtitle1' ><b>{perf.eventName}</b></Typography>
                <Typography variant='body2'>{perf.location}</Typography>
                <Typography variant='caption'>{(new Date(perf.date)).toDateString()}</Typography>
                <CardActions sx={{ ml: -1 }}>
                  <AvatarGroup max={4} sx={{ ml: 0, cursor: 'pointer', ":hover": { transition: 'smooth', transform: "scale3d(1.5, 1.5, 1.40)", position: 'relative', ml: 3 } }} onClick={() => setPerformance(perf)}>
                    {perf.members !== undefined && (
                      perf.members.map((mem) => {
                        return (
                          <Tooltip title={mem.members.fullName} arrow>
                            {returnAvatar(mem)}
                          </Tooltip>
                        )
                      })
                    )}
                  </AvatarGroup>
                </CardActions>
              </CardContent>
            </Card>
          )
        })}
      </Grid>
      <GoogleAd slot="5288633232" classNames="page-top" />
    </Container >
  );
}

export default PastPerf;