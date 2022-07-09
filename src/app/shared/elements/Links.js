import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import DefaultTheme from "../assets/themes/DefaultTheme";

export const LinkText = styled(Link, {})({
    ...DefaultTheme.link,
});
  
export const BoldLinkText = styled(Link, {})({
    ...DefaultTheme.typography.bold.primary,
    ...DefaultTheme.link,
});