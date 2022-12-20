import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useCart } from "react-use-cart";
import axios from 'axios'
function MediaCard({ data }) {
    const { addItem } = useCart();
    const addItemfunction=(data)=>{
        addItem(data)
      
    }
    return (
        <Card className='Card-main-cont'>
            <FavoriteIcon />
            <img src={data.img} className='p-img' />
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">

                    <h5><b>Product</b><br /><i>{data.itemName}</i></h5>

                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Price:{data.price}
                </Typography>
                <Rating name="read-only" value={3} readOnly />
            </CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
                <Button variant='contained' className='AddtoCart-Btn' onClick={() => addItemfunction(data)}>Add to Cart</Button>
            </Typography>
            <CardActions>
            </CardActions>
        </Card >
    );
}
export default MediaCard;