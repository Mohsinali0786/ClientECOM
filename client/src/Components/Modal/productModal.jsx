import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Modal,Upload} from 'antd';
import { errorMessage } from '../../Utils/helper';
import { UploadOutlined } from '@ant-design/icons';
import { addProducts } from '../../Utils/helper';
const Products = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // For ImageUploader----->Start
    const [fileList, setFileList] = useState([])
    const [loading, setLoading] = useState()
    // For ImageUploader----->End

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    //   For Modal----->start
    const onFinish = (values) => {
        console.log('Success:', values?.image?.file)
        setLoading(true)
        const formValues = new FormData()
        if (values?.image?.file) {
            formValues.append('image', values?.image?.file)
        }
        // formValues.append('userid', userid)
        formValues.append('item_name', values?.item_name)
        formValues.append('price', values?.price)
        formValues.append('stock', values.stock)
        addProducts(formValues)
        // axios.post(POST?.ADDITEMS, formValues)
        //     .then((res) => {
        //         const { data } = res
        //         if (data.success) {
        //             successMessage(data.message)
        //             setLoading(false)
        //             setIsModalOpen(false)
        //             getallData(dispatch, userid)
        //         } else {
        //             setLoading(false)
        //             errorMessage(data.message)
        //         }
        //     })
        //     .catch((err) => {
        //         setLoading(false)
        //         console.log('err===>', err)
        //     })
        handleCancel()
    }
    const onFinishFailed = (errorInfo) => {
        setLoading(false)
        // errorMessage(errorInfo)
        console.log(errorInfo, 'errorInfo')
    }
    //   For Modal------>end

    // For ImageUpload ----->start

    const normFile = (e) => {
        setFileList([])

        if (e?.fileList?.length && e?.file?.type !== 'image/png' && e?.file?.type !== 'image/jpeg') {
            errorMessage('You can only upload Images!')
            return []
        }

        if (Array.isArray(e)) {
            return e
        }

        e?.fileList?.length ? setFileList([...[e?.file]]) : setFileList([])
        return e && [e.file]
    }

    // For ImageUpload ----->end

    const AddProducts = () => {

        showModal()

    }
    return (
        <>
            <Button type="primary" onClick={() => { AddProducts() }}>
                Add Products
            </Button>
            <Modal title="Add you Products" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Form
                    name="basic"

                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='vertical'
                >
                    <Form.Item
                        label="Item-Name"
                        name="item_name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Product Name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Price!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Stock (Quantity)"
                        name="stock"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your stock!',
                            },
                        ]}
                    >
                        <Input />

                    </Form.Item>
                    <Form.Item
                        label="Image"
                        name="image"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your image!',
                            },
                        ]}
                    >
                        <Upload
                            name='file'
                            multiple={false}
                            beforeUpload={() => false}
                            accept='image/png, image/jpeg'
                            onChange={normFile}
                            fileList={fileList}
                        >
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>

                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default Products;


