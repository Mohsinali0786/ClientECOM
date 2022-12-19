import React from 'react';
import Garment_1 from '../../Assets/Images/garments1.jpg'
import Garment_2 from '../../Assets/Images/mensuit1.jpg'

import { Carousel } from 'antd';
const contentStyle = {
    height: '100vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width:'100%'
};
const MyCarousel = () => (
    <Carousel autoplay>
        <div>
            <img style={contentStyle} src={Garment_1}  className=''/>
            {/* <h3 style={contentStyle}>{Garment_1}</h3> */}
        </div>
        <div>
            <img style={contentStyle} src={Garment_2} className=''/>

            {/* <h3 style={contentStyle}>{Garment_2}</h3> */}
        </div>
    </Carousel>
);
export default MyCarousel;