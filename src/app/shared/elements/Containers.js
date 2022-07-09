import { Box } from "@mui/material";
import { styled } from "@mui/system";
import DefaultTheme from "../assets/themes/DefaultTheme";

export const CenteredContainer = styled(Box, {})({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [DefaultTheme.breakpoints.down('md')]: {
        padding: '0 15px'
    },
});