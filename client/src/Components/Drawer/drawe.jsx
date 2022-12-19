import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const MyDrawer = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            {/* <Space> */}

            <ShoppingBagIcon onClick={showDrawer} />

            {/* </Space> */}
            <Drawer
                placement='right'
                // width={50}
                // style={{width:'200px'}}
                onClose={onClose}
                open={open}
                sx={{ height: '50px' }}

            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};
export default MyDrawer;