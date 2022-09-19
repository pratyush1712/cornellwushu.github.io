import React from 'react'
import { Container } from '@mui/material';
import GoogleAd from '../components/GoogleAds';

function LivePerformance() {
    return (
        <Container justifyContent={'center'} align={'center'}>
            <iframe src="https://cornellwushu.github.io/#/wushulive" style={{ width: '80vw', height: '60vw' }} />
            <GoogleAd slot="5288633232" classNames="page-top" />
        </Container>
    )

}

export default LivePerformance;