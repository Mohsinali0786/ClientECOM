import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home} from '../Container'

import { CartProvider } from 'react-use-cart'


var Allpaths = [

    { path: '/', Component: Home },


]

function AppRouter() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    {
                        Allpaths.map((myroutes, index) => {
                            return (
                                <Route key={index} path={myroutes.path} element={<myroutes.Component />} />
                            )
                        })

                    }

                    {/* <Route path='/Men' element={<Men />} />
                     <Route path='/kids' element={<Kids />} />
                     <Route path='/webbag' element={<WebMybag />} /> */}
                </Routes>
            </CartProvider>

        </BrowserRouter>


    )
}
export default AppRouter