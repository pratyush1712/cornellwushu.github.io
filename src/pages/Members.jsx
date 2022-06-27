import React, { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Card, CardContent, Grid, Typography, CardMedia, CardHeader, Link } from '@mui/material';
import DetailView from '../components/DetailView';
import zIndex from '@mui/material/styles/zIndex';
import CloseIcon from '@mui/icons-material/Close';
import { rgba } from 'polished';

function Member() {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(null);
  const [style, setStyle] = useState(null);

  const handleOnClick = (mem) => {
    console.log('click', mem.image[0]);
    setDisplay(mem)
  }
  return (
    <>
      <Typography variant='h1' mt={57} mb={2} sx={{ fontSize: { xs: 50, md: 80 } }} fontFamily={'Fira Sans'} align={"center"} color="#201E1F">Members</Typography>
      <DetailView member={display} setDisplay={setDisplay} sx={{ display: 'none' }}></DetailView>
      <Grid container xs={12} justifyContent={"center"} sx={style}>
        {data.map((member) => (
          <Grid element>
            <Card style={{ cursor: "pointer" }} onClick={() => handleOnClick(member)} sx={{ marginRight: { sm: 3, md: 3 }, marginBottom: { xs: 4, sm: 4, md: 8 }, width: 'fit-content', height: 'fit-content', ":hover": { boxShadow: 5 } }}>
              <CardMedia
                sx={{ objectFit: 'cover', objectPosition: 'center -50px' }}
                component="img"
                height={180}
                width={120}
                src={member.image[0]}
                alt={member.FullName}>
              </CardMedia>
              <CardContent style={{ width: 220, height: { md: 30, xs: 'fit-content' } }}>
                <Typography>
                  {member.name}<br></br>
                  <Link color='inherit'><b>Role</b></Link>
                </Typography>
                <Typography sx={{ display: { md: 'none' } }}>
                  {member.GraduationYear}<br></br>
                  {member.Description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Member;