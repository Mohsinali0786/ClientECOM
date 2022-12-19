import LockOpenIcon from '@mui/icons-material/LockOpen';
import { SignUpModal } from '..';
import React, { useState } from 'react';
import { Button, Modal, Checkbox, Form, Input } from 'antd';
const Siginp = ({modalState}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {modalSignup,modalSignupfunc}=modalState
    const showModal = () => {
        setIsModalOpen(true);
        modalSignupfunc(false)
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            {/* <Button type="primary" onClick={showModal} className='Login-Signup-Btn'> */}
                <a onClick={showModal} className='auth-link'>Already having an account</a>
            {/* </Button> */}
            <Modal title="Signin Form" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <Form
                    name="basic"
                    labelCol={{
                        // span: 8,
                    }}
                    wrapperCol={{
                        // span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"

                >

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <SignUpModal issignin={true} modalState={{ modalSignin: isModalOpen, modalSigninfunc: setIsModalOpen }}/>
                    <Form.Item
                    >
                        <Button type="primary" htmlType="submit" className='signup-btn'>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default Siginp;