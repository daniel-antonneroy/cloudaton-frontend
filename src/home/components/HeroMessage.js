import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { CTAButton } from "../../app/shared/elements/Buttons";
import { SubTitle, Title } from "../../app/shared/elements/Titles";
import UploadIcon from '../../app/shared/assets/icons/upload_icon.png'


const HeroMessage = () => {
    return (

                <Grid container direction='row' spacing={1} alignItems="center">
                    <Grid item xs={12} sm={9}>
                        <Title variant='h2'> 
                            {'Sort, Archive & Organise'}
                        </Title>
                        <SubTitle variant='h2'> 
                            {'Images on the cloud'}
                        </SubTitle>
                    </Grid>
                    <Grid item xs={3}>
                        <img src={UploadIcon} alt="upload" style={{width: '100%'}}/>
                    </Grid>
                    <Grid item xs={12} >
                        <CTAButton
                            component={Link}
                            to='/dashboard'
                            variant="contained"
                            >
                            {'Get Started >>'}
                        </CTAButton>
                    </Grid>
                </Grid> 

    );
};

export default HeroMessage;