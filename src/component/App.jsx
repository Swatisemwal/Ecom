import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminHome from './Admin/AdminHome'
import AdminAddMaincategory from './Admin/AdminAddMainCategory'
import AdminMainCategory from './Admin/AdminMainCategory'
import AdminUpdateMainCategory from './Admin/AdminUpdateMainCategory'

import Footer from './Footer'

import Home from './Home'
import Navbar from './Navbar'
import AdminSubCategory from './Admin/AdminSubCategory '
import AdminAddSubCategory from './Admin/AdminAddSubCategory '
import AdminUpdateSubCategory from './Admin/AdminUpdateSubCategory '
import AdminBrand from './Admin/AdminBrand'
import AdminAddBrand from './Admin/AdminAddBrand '
import AdminUpdateBrand from './Admin/AdminUpdateBrand'
import AdminProduct from './Admin/AdminProduct'
import AdminAddProduct from './Admin/AdminAddProduct'
import AdminUpdateProduct from './Admin/AdminUpdateProduct'
import Shop from '../component/Shop'
import SingleProductPage from './SingleProductPage'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import UpdateProfile from './UpdateProfile'
import ContactUS from './Contact'
import AdminNewslatter from './Admin/AdminNewslatter'
import AdminContact from './Admin/AdminContact'
import AdminSingleContact from './Admin/AdminSingleContact'
import AdminUserList from './Admin/AdminUserList'
import Cart from './Cart'
import Checkout from './Checkout'
import Confirmation from './Confirmation'
import AdminCheckout from './Admin/AdminCheckout'
import AdminSingleCheckout from './Admin/AdminSingleCheckout'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop/:mc/:sc/:br' element={<Shop />} />
                    <Route path='/single-product/:_id' element={<SingleProductPage/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/signup' element={<Signup/>} />
                    <Route path='/contact' element={<ContactUS/>} />
                    <Route path='/update-profile' element={<UpdateProfile/>} />

                    <Route path='/profile' element={!(localStorage.getItem("login"))?<Login/>:<Profile/>} />
                    <Route path='/cart' element={!(localStorage.getItem("login"))?<Login/>:<Cart/>} />
                    <Route path='/checkout' element={!(localStorage.getItem("login"))?<Login/>:<Checkout/>} />
                    <Route path='/confirmation' element={!(localStorage.getItem("login"))?<Login/>:<Confirmation/>} />

                    <Route path='/admin-home' element={!(localStorage.getItem("login"))?<Login/>:<AdminHome />} />
                    <Route path='/admin-maincategory' element={!(localStorage.getItem("login"))?<Login/>:<AdminMainCategory />} />
                    <Route path='/admin-add-maincategory' element={!(localStorage.getItem("login"))?<Login/>:<AdminAddMaincategory />} />
                    <Route path='/admin-update-maincategory/:_id' element={!(localStorage.getItem("login"))?<Login/>:<AdminUpdateMainCategory />} />
                    <Route path='/admin-subcategory' element={!(localStorage.getItem("login"))?<Login/>:<AdminSubCategory />} />
                    <Route path='/admin-add-subcategory' element={!(localStorage.getItem("login"))?<Login/>:<AdminAddSubCategory />} />
                    <Route path='/admin-update-subcategory/:_id' element={<AdminUpdateSubCategory />} />
                    <Route path='/admin-brand' element={!(localStorage.getItem("login"))?<Login/>:<AdminBrand />} />
                    <Route path='/admin-add-brand' element={!(localStorage.getItem("login"))?<Login/>:<AdminAddBrand />} />
                    <Route path='/admin-update-brand/:_id' element={!(localStorage.getItem("login"))?<Login/>:<AdminUpdateBrand />} />
                    <Route path='/admin-product' element={!(localStorage.getItem("login"))?<Login/>:<AdminProduct />} />
                    <Route path='/admin-add-product' element={!(localStorage.getItem("login"))?<Login/>:<AdminAddProduct />} />
                    <Route path='/admin-update-product/:_id' element={!(localStorage.getItem("login"))?<Login/>:<AdminUpdateProduct />} />
                    <Route path='/admin-contact' element={!(localStorage.getItem("login"))?<Login/>:<AdminContact/>} />
                    <Route path='/admin-single-contact/:_id' element={!(localStorage.getItem("login"))?<Login/>:<AdminSingleContact/>} />
                    <Route path='/admin-newslatter' element={!(localStorage.getItem("login"))?<Login/>:<AdminNewslatter/>} />
                    <Route path='/admin-userlist' element={!(localStorage.getItem("login"))?<Login/>:<AdminUserList/>} /> 
                    <Route path='/admin-checkout' element={!(localStorage.getItem("login"))?<Login/>:<AdminCheckout/>} /> 
                    <Route path='/admin-single-checkout/:_id' element={!(localStorage.getItem("login"))?<Login/>:<AdminSingleCheckout/>} /> 
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}


