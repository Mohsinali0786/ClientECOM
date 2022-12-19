import LockOpenIcon from '@mui/icons-material/LockOpen';
import { SigninModal } from '..';
import React, { useState } from 'react';
import { Button, Modal, Checkbox, Form, Input } from 'antd';
const SignUp = ({ issignin, modalState }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
        if (modalState) {
            modalState.modalSigninfunc(false)
        }
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
    console.log('issignin', issignin)
    return (
        <>
            {
                !issignin ?
                    <Button type="primary" onClick={showModal} className='Login-Signup-Btn'>
                        <LockOpenIcon />
                    </Button>
                    :
                    <a onClick={showModal} className='auth-link'>Not having an account Signup</a>

            }
            <Modal title="SignUp Form" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
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
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
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
                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <SigninModal modalState={{ modalSignup: isModalOpen, modalSignupfunc: setIsModalOpen }} />
                    <Form.Item

                    >
                        <Button type="primary" htmlType="submit" className='signup-btn'>
                            Signup
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default SignUp;