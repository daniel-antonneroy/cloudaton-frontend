import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { Fragment, useState } from 'react';
import { CTAButton } from '../elements/Buttons'
import { CTAButton2 } from '../elements/Buttons';
import { LinkText } from '../elements/Links' ;
import logo from '../assets/logo/cloudaton.png' 
import { connect } from 'react-redux';
import DefaultTheme from '../assets/themes/DefaultTheme';

const Header = styled(AppBar, {})({
    ...DefaultTheme.palette.secondary,
    background: '#ffff',
});

const BarContent = styled(Toolbar, {})({
    display: 'flex',
    justifyContent: 'space-between',

});

const HideableBox = styled(Toolbar, {})({
    display: 'flex',
    [DefaultTheme.breakpoints.down('sm')]: {
        display: 'none',
    },
});

export const LogoText = styled(Typography, {})({
    ...DefaultTheme.typography.bold.primary,
    marginTop: '0.5rem',
    [DefaultTheme.breakpoints.down('sm')]: {
        display: 'none',
    },
});

export const LogoIcon = styled(Avatar, {})({
    width: 56, 
    height: 56, 
    margin: 1,
});


const Navbar = () => {

    const authLinks = () => (
        
        <CTAButton
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
            
        </CTAButton>                
    );

    return (
        <Header elevation={0}>
            <BarContent>
                <Box style={{ display: 'flex', marginTop: '1rem' }}> 
                    <LinkText to='/'>
                        <LogoIcon 
                            alt="Cloudaton" 
                            src={logo}
                        />
                    </LinkText>
                    <LinkText to='/' style={{border: 0}}>
                        <LogoText variant="h4">
                            Cloudaton
                        </LogoText>
                    </LinkText>
                </Box>
                <HideableBox> 
                    <Fragment>
                        <LinkText to='/login'>
                            <CTAButton
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                Login
                            </CTAButton>
                        </LinkText>
                        <LinkText to='/signup'>
                            <CTAButton2
                                type="submit"
                                fullWidth
                                variant="outlined"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                Sign Up
                            </CTAButton2>
                        </LinkText>
                    </Fragment>                    
                </HideableBox>
            </BarContent> 
        </Header>
    );
};


export default Navbar;