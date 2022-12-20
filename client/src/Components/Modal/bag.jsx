import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const Bag = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    if(!isModalOpen){
        setIsModalOpen(true);
    }
    else{
        setIsModalOpen(false)
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <ShoppingBagIcon type="primary" onClick={showModal}/>
      
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default Bag;