import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useCart } from 'react-use-cart';
import { Divider } from '@mui/material';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { addProducts } from '../../Utils/helper';
import {Products} from '../index'
const MyDrawer = () => {
    const [open, setOpen] = useState(false);
    const { items, updateItemQuantity, removeItem, isEmpty } = useCart()

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    let total = 0



    return (
        <>
            {/* <Space> */}

            <ShoppingBagIcon onClick={showDrawer} />

            {/* </Space> */}
            <Drawer
                placement='right'
                onClose={onClose}
                open={open}
                // style={{height:'500px'}}
                closable={true}
                destroyOnClose
               
            >
                <Products/>
                {
                    isEmpty ?
                        <h3>Your Cart is Empty</h3>
                        :
                        items.map((v) => {
                            total = total + v.itemTotal
                            return (
                                <div className='Cart-Items'>
                                    <div>
                                        <h3>{v.Name}</h3>
                                        <button onClick={() => removeItem(v.id)}><DeleteIcon /></button>
                                    </div>
                                    <div>
                                        <div>
                                            <img src={v.img} style={{ width: '100px', height: '100px' }} />
                                        </div>
                                        <div>
                                            <p>Price:<b>{v.price}</b></p>
                                            <div>
                                                <Button
                                                    onClick={() => updateItemQuantity(v.id, v.quantity - 1)}
                                                >
                                                    -
                                                </Button>
                                                <p>{v.quantity}</p>
                                                <Button
                                                    onClick={() => updateItemQuantity(v.id, v.quantity + 1)}
                                                >
                                                    +
                                                </Button>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <p>Sub-Total:<b>{v.itemTotal}</b></p>
                                    </div>
                                    <Divider />
                                </div>
                            )
                        })
                }
                <h3 style={{ textAlign: 'right' }}>Grand-Total:{total}</h3> 

            </Drawer>
        </>
    );
};
export default MyDrawer;