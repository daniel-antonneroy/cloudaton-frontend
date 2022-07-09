import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import DefaultTheme from "../assets/themes/DefaultTheme";

export const Title = styled(Typography, {})({
    ...DefaultTheme.typography.bold.primary,
    [DefaultTheme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },
});

export const SubTitle = styled(Typography, {})({
    ...DefaultTheme.typography.default.primary,
    [DefaultTheme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },
});