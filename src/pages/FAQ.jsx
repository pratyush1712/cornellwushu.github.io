import { Container, Typography } from '@mui/material';
import { rgba } from 'polished';
import React from 'react'

function FAQ() {
    return (
        <>
            <Container justifyContent={'center'} sx={{ marginTop: 56, width: "fit-content", backgroundColor: rgba(255, 64, 0, 0.2) }}>
                <Container sx={{}}>
                    <Typography variant='h4' align={'center'}>Frequently Asked Questions</Typography><hr style={{ width: 700 }} /><br />
                    <Typography variant='h5'> Question: Bla bla bla bla abla abla tabla </Typography>
                    <Typography variant='body2'> Answer: Kendo is like Japanese fencing. It's a traditional Japanese martial art practiced across the world. It utilizes a bamboo sword (Shinai), a wooden sword (Bokken), and armor (Bogu).
                    </Typography><br />
                    <Typography variant='h5'> Question: Bla bla bla bla abla abla tabla</Typography>
                    <Typography variant='body2'> Answer: Kendo is like Japanese fencing. It's a traditional Japanese martial art practiced across the world. It utilizes a bamboo sword (Shinai), a wooden sword (Bokken), and armor (Bogu).
                    </Typography><br />
                    <Typography variant='h5'> Question: Bla bla bla bla abla abla tabla</Typography>
                    <Typography variant='body2'> Answer: Kendo is like Japanese fencing. It's a traditional Japanese martial art practiced across the world. It utilizes a bamboo sword (Shinai), a wooden sword (Bokken), and armor (Bogu).
                    </Typography><br />
                    <Typography variant='h5'> Question: Bla bla bla bla abla abla tabla</Typography>
                    <Typography variant='body2'> Answer: Kendo is like Japanese fencing. It's a traditional Japanese martial art practiced across the world. It utilizes a bamboo sword (Shinai), a wooden sword (Bokken), and armor (Bogu).
                    </Typography><br />
                    <Typography variant='h5'> Question: Bla bla bla bla abla abla tabla</Typography>
                    <Typography variant='body2'> Answer: Kendo is like Japanese fencing. It's a traditional Japanese martial art practiced across the world. It utilizes a bamboo sword (Shinai), a wooden sword (Bokken), and armor (Bogu).
                    </Typography><br />
                    <Typography variant='h5'> Question: Bla bla bla bla abla abla tabla</Typography>
                    <Typography variant='body2'> Answer: Kendo is like Japanese fencing. It's a traditional Japanese martial art practiced across the world. It utilizes a bamboo sword (Shinai), a wooden sword (Bokken), and armor (Bogu).
                    </Typography><br />
                </Container>
            </Container>
        </>
    )
}

export default FAQ;