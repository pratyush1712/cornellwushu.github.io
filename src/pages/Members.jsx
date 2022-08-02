import React, { useEffect, useState } from 'react';
import { Card, CardContent, Button, Grid, Typography, CardMedia, Link, Container, Modal, Box, Avatar, Stack, Divider, List, ListItem, ListItemAvatar, ListItemText, ToggleButton, ToggleButtonGroup, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { bgColorPrimary, bgColorPrimaryNoBlur, bgColorSecondary, bgColorSecondaryNoBlur, fontColorPrimary, fontPrimary } from '../styles/ColorsFonts';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import notFound from '../MembersPictures/notFound.svg';
import { useRef } from 'react';
const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: bgColorPrimaryNoBlur,
  boxShadow: 24,
  borderRadius: 1,
  p: 2,
  display: { xs: 'none', md: 'flex' },
  flex: 2
};

function returnImage(member) {
  try {
    return (<CardMedia component={'img'}
      src={require('../MembersPictures/' + member.netID + '.jpg')}
      alt={member.fullName}
      sx={{ objectFit: 'stretch', height: 250, width: '100%' }} />
    )
  } catch {
    return (<CardMedia component={'img'}
      src={notFound}
      alt={member.fullName}
      sx={{ objectFit: 'stretch', height: 250, width: '100%' }} />
    )
  }
}

function returnGridItem(member, handleOnClick) {
  return (<Grid item xs={12} sm={12} md={3}>
    <Card style={{ cursor: "pointer" }} onClick={() => handleOnClick(member)} sx={{ marginRight: { sm: 3, md: 3 }, marginBottom: { xs: 4, sm: 4, md: 8 }, ":hover": { boxShadow: 5 } }}>
      {returnImage(member)}
      <CardContent sx={{ width: { md: 220, xs: '100%' }, height: { md: 30, xs: 'fit-content' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', align: 'center' }}>
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
  </Grid>)
}

function Member(props) {
  const [year, setYear] = useState((new Date()).getFullYear() + 1);
  const minYear = useRef();
  const maxYear = useRef((new Date()).getFullYear() + 1);
  const [years, setYears] = useState([]);
  const [showPref, setShowPref] = useState(false)
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(null);
  useEffect(() => {
    if (props.members.currentMember) {
      setData(props.members)
      minYear.current = parseInt(Object.keys(props.members.alumni).sort((a, b) => a - b)[0]);
      let yers = [];
      for (let i = maxYear.current; i >= minYear.current; i -= 1) {
        yers.push(i);
      }
      setYears(yers);
    }
  }, [props])

  const handleOnClick = (mem) => {
    setDisplay(mem);
  }
  const handleYearChange = (event, year) => {
    setYear(year)
  }
  const handleMobileYearChange = (event, year) => {
    setYear(year.props.value)
  }
  if (data.currentEboard) {
    return (
      <Container justifycontent={'center'}>
        <Typography variant='h2' mt={2} mb={2} sx={{ fontSize: { xs: 50, sm: 80 } }} fontFamily={fontPrimary} align={"center"} color={fontColorPrimary}>Members</Typography>
        <FormControl fullWidth sx={{ display: { sm: 'none' } }}>
          <InputLabel id="demo-simple-select-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            label="Year"
            color="primary"
            sx={{ borderColor: fontColorPrimary, color: fontColorPrimary }}
            onChange={handleMobileYearChange}
          >
            {years.map((year) => (
              <MenuItem color={'primary'} key={year} value={year} sx={{ color: fontColorPrimary, borderColor: fontColorPrimary, textDecorationColor: fontColorPrimary, mt: 1, ":hover": { borderColor: fontColorPrimary } }}>{year - 1} - {year}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <ToggleButtonGroup
          color="primary"
          value={year}
          exclusive
          sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', width: '100%' }}
          onChange={handleYearChange}
          fullWidth
        >
          {years.map((year) => (
            <ToggleButton color={'primary'} size='medium' key={year} value={year} sx={{ color: fontColorPrimary, borderColor: fontColorPrimary, textDecorationColor: fontColorPrimary, mt: 1, ":hover": { borderColor: fontColorPrimary } }}>{year - 1} - {year}</ToggleButton>
          ))}
        </ToggleButtonGroup>
        {display && (
          <Modal
            open={{ xs: false, md: display !== null, s: false }}
            onClose={() => setDisplay(null)}
            onClickAway={() => setDisplay(null)}
          >
            <Box sx={style}
            >
              <Stack direction={{ md: 'row', xs: 'column' }} width={'100%'} sx={{ maxHeight: '100%', msOverflowY: 'scroll' }}>
                <Card sx={{ bgcolor: bgColorSecondary, minWidth: 230, mr: 2, justifyContent: 'center', height: '100%' }}>
                  {returnImage(display)}
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
                      <Typography variant='subtitle1' sx={{ alignSelf: 'end' }}><strong>Fun Fact:</strong> {display.fullName === 'Pratyush Sudhakar' ? <code>{display.funFact}</code> : display.funFact}</Typography>
                      <Button onClick={() => { setShowPref(true) }} variant='outlined' sx={{ color: fontColorPrimary, borderColor: fontColorPrimary, mt: 1, ":hover": { borderColor: fontColorPrimary } }}>{'View ' + display.fullName.split(" ")[0] + "'s Performances"}</Button>
                      <Modal
                        open={showPref}
                        onClose={() => setShowPref(false)}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box sx={{ ...style, flexDirection: 'column' }} bgcolor={bgColorSecondaryNoBlur}>
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
                            {display.performances && (
                              display.performances.map(pref => {
                                return (
                                  <>
                                    <ListItem alignItems="flex-start" component={Link} sx={{ textDecoration: 'none', width: '100%', cursor: 'pointer', ':hover': { transition: 'smooth', transform: "scale3d(1.025, 1.025, 1.40)", width: '80%' } }}
                                      href={pref.performances.url} target={'_blank'} key={pref.performances.date}>
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
                              })
                            )}
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
        {year === (new Date()).getFullYear() + 1 && (<><Typography variant='h5' mt={6} mb={0.5} sx={{ fontSize: { xs: 30, sm: 40 } }} fontFamily={fontPrimary} color={fontColorPrimary}>Eboard</Typography><Divider variant='fullWidth' sx={{ mb: 3 }} />
          <Grid container>
            {data.currentEboard.map((member) => {
              return (<>{returnGridItem(member, handleOnClick)}</>)
            })}
          </Grid>
          <Typography variant='h5' mt={2} mb={0.5} sx={{ fontSize: { xs: 30, sm: 40 } }} fontFamily={fontPrimary} color={fontColorPrimary}>Members</Typography><Divider variant='fullWidth' sx={{ mb: 3 }} />
          <Grid container>
            {data.currentMember.map((member) => {
              return (<>{returnGridItem(member, handleOnClick)}</>)
            })}
          </Grid></>)}
        {year !== (new Date()).getFullYear() + 1 && (<><Typography variant='h5' mt={6} mb={0.5} sx={{ fontSize: { xs: 30, sm: 40 } }} fontFamily={fontPrimary} color={fontColorPrimary}>Cornell Wushu &#183; {year}</Typography><Divider variant='fullWidth' sx={{ mb: 3 }} />
          <Grid container mt={5}>
            {data.alumni[year]?.map(alumni => {
              return (<>{returnGridItem(alumni, handleOnClick)}</>)
            })}
          </Grid></>
        )}
      </Container >
    )
  }
}

export default React.memo(Member);