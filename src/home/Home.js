import { Grid } from '@mui/material';
import React from 'react';
import { CenteredContainer } from '../app/shared/elements/Containers';
import HeroMessage from './components/HeroMessage';

const Home = () => {
    return (

        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <CenteredContainer>
                <HeroMessage/>
            </CenteredContainer>
        </Grid> 
    );
};

export default Home;