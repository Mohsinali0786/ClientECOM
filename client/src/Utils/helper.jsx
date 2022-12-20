import axios from 'axios'
import { POST ,AUTH} from './api'
import { message, notification } from 'antd'

const addProducts = (data) => {

    // console.log('Data in helpers', data)
    axios.post(`http://localhost:4000${POST?.ADDPRODUCTS}`, data).then((res) => {
        const { data } = res
        // console.log('Res', res)
        successMessage(data.message)
        // alert('Success')
    }).catch((err) => {
        errorMessage(data.message)
        console.log('Err', err)
    })
}

const registerUser=(data)=>{
    console.log('Data',AUTH?.REGISTER)
    axios.post(`http://localhost:4000/${AUTH?.REGISTER}`,data).then((res)=>{
        const data={res}
        successMessage(data.message)
    }).catch((err)=>{
        console.log('Error in register user axios',err)
        errorMessage(data.message)
    })
}

const successMessage = (desc = 'Successfully Complete!') => {
    return message.success(desc)
}
const errorMessage = (desc = 'Error found!') => {
    return message.error(desc)
}
export {
    addProducts,
    registerUser,
    successMessage,
    errorMessage,
}