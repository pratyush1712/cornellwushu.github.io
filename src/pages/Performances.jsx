import { Card, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import videojs from 'video.js'
import awsvideoconfig from './aws-video-exports'
import 'video.js/dist/video-js.css'

function Performances() {
  const streamURL = 'https://2ec2615c32b8.us-east-1.playback.live-video.net/api/video/v1/us-east-1.951388478060.channel.GyudoC5s8aIt.m3u8'
  return (
    <Card align={'center'} justifyContent={'center'} sx={{ marginTop: 60 }}>
      <video controls muted style={{ borderRadius: 15 }} width={600} height={'fit-content'}>
        {/* <source src="http://localhost:4000/video" type="video/mp4"></source> */}
      </video>
    </Card>
  );
}

export default Performances;