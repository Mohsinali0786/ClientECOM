import { Navigation, MyCarousel, Card } from '../../Components'
import { CardSection } from '../index'
import { Grid, Container } from '@mui/material'
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import BookOnlineTwoToneIcon from '@mui/icons-material/BookOnlineTwoTone';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import MyProducts from '../../Products/products';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';
import { useEffect, useState, createContext } from 'react';
export const myContext = createContext()
function Home() {
    // const data = useContext(myContext)
    const [filterType, setFilterType] = useState()
    const [Products, setProducts] = useState()

    useEffect(() => {
        if (!filterType) {
            setProducts(MyProducts)
        }
        else {
            const data = MyProducts.filter((v) => v.catageory === filterType)
            setProducts(data)
        }
    }, [filterType])
    console.log('Home COmp', filterType)
    return (
        <>
            <myContext.Provider value={{ filterType, setFilterType }}>
                <Navigation />
            </myContext.Provider>
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
                <CardSection Products={Products} />
            </Container>
        </>


    )


}


export default Home;