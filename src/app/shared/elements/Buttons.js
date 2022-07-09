import { Button } from "@mui/material";
import { styled } from "@mui/system";
import DefaultTheme from "../assets/themes/DefaultTheme";

export const CTAButton = styled(Button, {})({
    ...DefaultTheme.button,
    ...DefaultTheme.button.gradient,
    ...DefaultTheme.typography.bold.secondary,
    [DefaultTheme.breakpoints.down('sm')]: {
        padding: '5px 10px',
        marginTop: '5px', 
        marginbottom: '5px',
    },

});

export const CTAButton2 = styled(Button, {})({
    ...DefaultTheme.button,
    ...DefaultTheme.button.default,
    ...DefaultTheme.typography.bold.primary,
    [DefaultTheme.breakpoints.down('sm')]: {
        padding: '5px 10px',
    },

});
