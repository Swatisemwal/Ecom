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
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/update-profile' element={<UpdateProfile/>} />
                    <Route path='/contact' element={<ContactUS/>} />
                    <Route path='/admin-home' element={<AdminHome />} />
                    <Route path='/admin-maincategory' element={<AdminMainCategory />} />
                    <Route path='/admin-add-maincategory' element={<AdminAddMaincategory />} />
                    <Route path='/admin-update-maincategory/:_id' element={<AdminUpdateMainCategory />} />
                    <Route path='/admin-subcategory' element={<AdminSubCategory />} />
                    <Route path='/admin-add-subcategory' element={<AdminAddSubCategory />} />
                    <Route path='/admin-update-subcategory/:_id' element={<AdminUpdateSubCategory />} />
                    <Route path='/admin-brand' element={<AdminBrand />} />
                    <Route path='/admin-add-brand' element={<AdminAddBrand />} />
                    <Route path='/admin-update-brand/:_id' element={<AdminUpdateBrand />} />
                    <Route path='/admin-product' element={<AdminProduct />} />
                    <Route path='/admin-add-product' element={<AdminAddProduct />} />
                    <Route path='/admin-update-product/:_id' element={<AdminUpdateProduct />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}


