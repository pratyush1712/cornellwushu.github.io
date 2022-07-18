import React, { useEffect, useState } from 'react';
import { Card, CardContent, Button, Grid, Typography, CardMedia, CardHeader, Link, Container, Modal, Box, Avatar, Stack, Divider, Icon, CardActions, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import zIndex from '@mui/material/styles/zIndex';
import CloseIcon from '@mui/icons-material/Close';
import { rgba } from 'polished';
import logo from '../images/logo_red.jpg';
import { bgColorPrimary, bgColorPrimaryNoBlur, bgColorSecondary, bgColorSecondaryNoBlur, fontColorPrimary, fontPrimary } from '../styles/ColorsFonts';
import { DataStore } from '@aws-amplify/datastore'; import { Storage } from "@aws-amplify/storage"
import { Members, PerformancesMembers } from '../models';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Portal from '@mui/material/Portal';
import { bgcolor } from '@mui/system';
const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: bgColorPrimaryNoBlur,
  boxShadow: 24,
  borderRadius: 1,
  p: 2,
};

function Member(props) {
  const [showPref, setShowPref] = useState(false)
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(null);
  const i = 1;
  useEffect(() => {
    setData(props.members)
  }, [props])

  const handleOnClick = (mem) => {
    setDisplay(mem);
  }
  return (
    <Container justifyContent={'center'}>
      <Typography variant='h2' mt={2} mb={2} sx={{ fontSize: { xs: 50, md: 80 } }} fontFamily={fontPrimary} align={"center"} color={fontColorPrimary}>Members</Typography>
      {display && (
        <Modal
          display={{ xs: 'none', md: 'block' }}
          open={{ xs: false, md: display != null }}
          onClose={() => setDisplay(null)}
          onClickAway={() => setDisplay(null)}
        >
          <Box sx={style}
            display={{ xs: 'none', md: 'block' }}
          >
            <Stack direction={{ md: 'row', xs: 'column' }} width={'fit-content'} sx={{ maxHeight: '100%', msOverflowY: 'scroll' }}>
              <Card sx={{ bgcolor: bgColorSecondary, minWidth: 230, mr: 2, justifyContent: 'center', height: 'fit-content' }}>
                <CardMedia component={'img'}
                  src={require('../MembersPictures/' + display.netID + '.jpg')}
                  alt={display.fullName}
                  sx={{ objectFit: 'stretch', height: 250, width: '100%' }} />
                <CardContent sx={{ lineHeight: 0.2 }} bgcolor={bgColorPrimary}>
                  <Typography variant='subtitle1'><strong>{display.fullName}</strong></Typography>
                  {display.eboardPosition && (
                    <Typography variant="subtitle1"><strong>Position:</strong> {display.eboardPosition}</Typography>
                  )}
                  <Typography variant='subtitle1'><strong>Member Since:</strong> {display.yearJoined}</Typography>
                  <Typography variant='subtitle1'><strong>Major:</strong> {display.majorAndMinor}</Typography>
                  <Typography variant='subtitle1'><strong>Graduation Year:</strong> {display.graduationYear}</Typography>
                </CardContent>
                <Grid container justifyContent={'space-evenly'} >
                  {display.instagram && (
                    <Grid item>
                      <IconButton href={display.instagram} target="_blank" size="large">
                        <InstagramIcon />
                      </IconButton>
                    </Grid>
                  )}
                  {display.facebook && (
                    <Grid item>
                      <IconButton href={display.facebook} target="_blank" size="large">
                        <FacebookIcon />
                      </IconButton>
                    </Grid>
                  )}
                </Grid>
              </Card>
              <Card sx={{ width: 'fit-content', p: 2, minWidth: 400, bgcolor: bgColorSecondaryNoBlur, height: 'inherit', alignContent: 'space-between' }}>
                <Stack flexDirection='column' alignContent={'space-between'}>
                  <Grid item xs={12}>
                    <Typography variant='body1'>{display.description}<br />
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant='subtitle1' sx={{ alignSelf: 'end' }}><strong>Fun Fact:</strong> {display.funFact}</Typography>
                    <Button onClick={() => { setShowPref(true) }} variant='outlined' sx={{ color: fontColorPrimary, borderColor: fontColorPrimary, mt: 1, ":hover": { borderColor: fontColorPrimary } }}>{'View ' + display.fullName.split(" ")[0] + "'s Performances"}</Button>
                    <Modal
                      open={showPref}
                      onClose={() => setShowPref(false)}
                      aria-labelledby="child-modal-title"
                      aria-describedby="child-modal-description"
                    >
                      <Box sx={style} bgcolor={bgColorSecondaryNoBlur}>
                        <Typography variant='h5' sx={{ mb: 2 }}>{display.fullName}'s Performances</Typography>
                        <Divider variant='middle' />
                        <List sx={{
                          minWidth: 500, maxHeight: 300, overflowY: 'scroll', "&::-webkit-scrollbar": {
                            width: 2,
                            height: 2
                          },
                          "&::-webkit-scrollbar-thumb": {
                            borderRadius: 8
                          }
                        }}>
                          {display.performances.map(pref => {
                            return (
                              <>
                                <ListItem alignItems="flex-start" component={Link} sx={{ textDecoration: 'none', width: '100%', cursor: 'pointer', ':hover': { transition: 'smooth', transform: "scale3d(1.025, 1.025, 1.40)", width: '80%' } }}
                                  href={pref.performances.url} target={'_blank'}>
                                  <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: fontColorPrimary }}>{pref.performances.eventName.split(" ")[0][0]}</Avatar>
                                  </ListItemAvatar>
                                  <ListItemText
                                    sx={{ color: 'black' }}
                                    primary={pref.performances.eventName}
                                    secondary={<React.Fragment>
                                      <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                      >
                                        {pref.performances.location + ' '}
                                      </Typography>
                                      •
                                      {' ' + (new Date(pref.performances.date).toDateString())}
                                    </React.Fragment>} />
                                </ListItem><Divider variant="inset" component="li" />
                              </>)
                          })}
                        </List>
                      </Box>
                    </Modal>
                  </Grid>
                </Stack>
              </Card>
            </Stack>
          </Box>
        </Modal >
      )
      }
      <Grid container xs={12} justifyContent={"center"} >
        {data.map((member) => {
          return (
            <Grid item md={3} xs={12}>
              <Card style={{ cursor: "pointer" }} onClick={() => handleOnClick(member)} sx={{ marginRight: { sm: 3, md: 3 }, marginBottom: { xs: 4, sm: 4, md: 8 }, ":hover": { boxShadow: 5 } }}>
                <CardMedia component={'img'}
                  src={require('../MembersPictures/' + member.netID + '.jpg')}
                  sx={{ objectFit: 'cover', height: 200 }}
                />
                <CardContent zIndex={10} sx={{ width: { md: 220, xs: '100%' }, height: { md: 30, xs: 'fit-content' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', align: 'center' }}>
                  <Typography>{member.fullName}</Typography>
                  {member.eboardPosition && (
                    <Typography variant="subtitle1"><strong>{member.eboardPosition}</strong></Typography>
                  )}
                  <Typography sx={{ display: { md: 'none' } }}>
                    {member.graduationYear}<br></br>
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container >
  )
}

export default React.memo(Member);