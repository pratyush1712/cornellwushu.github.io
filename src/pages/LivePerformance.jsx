import { Avatar, Grid, Typography, Chip, Divider } from '@mui/material'
import React from 'react'
import { rgba } from 'polished';
import about from '../images/about.jpg';
import wushu from '../images/wushu.jpg';
import { bgColorPrimary, bgColorSecondary, fontColorPrimary, fontPrimary } from '../styles/ColorsFonts';
import { Container } from '@mui/system';
import GoogleAd from '../components/GoogleAds';

function LivePerformance() {
    return (
        <Container justifyContent={'center'}>
            <GoogleAd slot="5288633232" classNames="page-top" />
        </Container>
    )

}

export default LivePerformance;