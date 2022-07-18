import { Container, Typography, Grid, Divider } from '@mui/material';
import { rgba } from 'polished';
import React from 'react'
import { bgColorPrimary, bgColorSecondary, fontColorPrimary, fontPrimary } from '../styles/ColorsFonts';

function FAQ() {
    return (
        <>
            <Grid container bgcolor={bgColorPrimary} sx={{ width: '100%', alignItems: 'center' }}>
                <Container sx={{ paddingTop: 6, margin: 'auto', align: 'center' }}>
                    <Typography variant='h2' color={fontColorPrimary} align={'center'} fontFamily={fontPrimary}>Frequently Asked Questions</Typography><Divider variant='middle' sx={{ m: 2 }} />
                    <Typography variant='h6' color={fontColorPrimary} > What is the first step to joining Cornell Wushu? </Typography>
                    <Typography variant='body1'> We recommend that you come to one of our open practices. Feel free to contact us first, if you prefer. Please also do contact us if you have any questions not answered below!
                    </Typography><br />
                    <Typography variant='h6' color={fontColorPrimary}> Is there a cost to join? </Typography>
                    <Typography variant='body1'> There is no membership fee. Feel free to just show up. <br /> <br />We provide equipment and apparel where necessary, especially if you eventually perform or compete on behalf of the club. However, keep in mind that with time, you may want to consider purchasing your own set of shoes, uniform, or one of our T-shirts!
                    </Typography><br />
                    <Typography variant='h6' color={fontColorPrimary}> Do I need any previous experience? </Typography>
                    <Typography variant='body1'> Nope! Having any martial arts or gymnastics experience will certainly help, but Cornell Wushu is open to people of all levels, even those with no experience at all! As long as you’re willing to work hard both physically and mentally and bring a positive attitude to every event, you will do just fine!
                    </Typography><br />
                    <Typography variant='h6' color={fontColorPrimary}> What should I wear to practice? </Typography>
                    <Typography variant='body1'> Clothes that you are comfortable physically exerting yourself in. A t-shirt, loose sweat pants or gym shorts and flat-bottom sports shoes (indoor soccer shoes, or even tennis shoes) are all you really need. Most of our members invest in a pair of Wushu shoes (Wushoes) and some even purchase practice pants. As long as you’re comfortable doing stretches, kicks and jumps in the clothes you wear, you should be fine.
                    </Typography><br />
                    <Typography variant='h6' color={fontColorPrimary}> Do you have coaches or teachers? </Typography>
                    <Typography variant='body1'> Currently, Cornell Wushu has no coaches. At Cornell Wushu, members are constantly teaching and giving feedback to each other as we all strive to improve. Once a year, we do hold a workshop with Sifu Kevin Law and Melanie Lester from Goh’s Kung Fu.
                    </Typography><br />
                    <Typography variant='h6' color={fontColorPrimary}> What kind of commitment is required? </Typography>
                    <Typography variant='body1'> In order to continue improving and to cultivate a positive club culture, we would like you to attend as many practices, performances, competitions and get-togethers as possible! However, we understand that university is a busy time and missing some events is expected. At a minimum, we encourage everyone to come to at least 1 of the 3 official practices per week. Keep in mind that you get as much out as you put in, and that you will only keep improving by practicing. Also, your dedication to the practices leading up to performances determines whether or not you can perform.
                    </Typography><br />
                </Container>
            </Grid>
        </>
    )
}

export default FAQ;