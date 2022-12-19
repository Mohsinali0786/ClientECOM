import { Navigation, MyCarousel, Card } from '../../Components'
import { CardSection } from '../index'
import { Grid, Container } from '@mui/material'
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import BookOnlineTwoToneIcon from '@mui/icons-material/BookOnlineTwoTone';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';

function Home() {
    return (
        <>
            <Navigation />
            <MyCarousel />
            <Container className="Home-Section2">
                <h1 style={{ textAlign: 'center' }}>Million of People Use</h1>
                <Grid container spacing={1} className="Home-Section2a">
                    <Grid item md={4} className='services'>
                        <LocalShippingTwoToneIcon className="home-logoimg" />
                        <h4>Free Shipping</h4>
                    </Grid>
                    <Grid item md={4} className='services'>
                        <BookOnlineTwoToneIcon className="home-logoimg" />
                        <h4>24/7 Hours Support</h4>
                    </Grid>
                    <Grid item md={4} className='services'>
                        <GridViewTwoToneIcon className="home-logoimg" />
                        <h4>100% Money Back</h4>
                    </Grid>
                </Grid>
                <CardSection />
            </Container>
        </>

    )


}


export default Home;