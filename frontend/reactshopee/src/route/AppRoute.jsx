import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../component/pages/AboutPage';
import HomePage from '../component/pages/HomePage'
import ShopeeWhyPage from '../component/pages/ShopeeWhyPage';
import JobPage from '../component/pages/JobPage';
import StudentPage from '../component/pages/StudentPage';
import TechPage from '../component/pages/TechPage';
import EventPage from '../component/pages/EventPage';
import BlogPage from '../component/pages/BlogPage';
import LoginSellPage from '../component/pages/LoginSellPage';
import AppPage from '../component/pages/AppPage';
import MallPage from '../component/pages/MallPage';
import MallSportPage from '../component/pages/MallSportPage';
import MallCarPage from '../component/pages/MallCarPage';
import MallDepartmentPage from '../component/pages/MallDepartmentPage';
import MallLifePage from '../component/pages/MallLifePage';
import MallBeautyPage from '../component/pages/MallBeautyPage';
import RegisterPage from '../component/pages/RegisterPage';
import LoginPage from '../component/pages/LoginPage';
import ForgotPasswordPage from '../component/pages/ForgotPasswordPage';
import LoginsmsPage from '../component/pages/LoginsmsPage';
import HelpPage from '../component/pages/HelpPage';
import RulesPage from '../component/pages/RulesPage';
import SecurityPage from '../component/pages/SecurityPage';
import ProductByCategoryPage from '../component/pages/ProductByCategoryPage';
import ProductByBrandPage from '../component/pages/ProductByBrandPage';
import ProductDetailPage from '../component/pages/ProductDetailPage';
import CartPage from '../component/pages/CartPage';
import PayPage from '../component/pages/PayPage';
import AdminTemplate from '../admin/home/AdminTemplate';
import ErrorPage from '../component/pages/ErrorPage';
import ProfilePage from '../component/pages/ProfilePage';
import PrintOrder from "../admin/order/PrintOrder";
import ProductBySearchPage from '../component/pages/ProductBySearchPage';
export class AppRoute extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/dashboard/*' element={<AdminTemplate/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/error' element={<ErrorPage/>}></Route>
        <Route path='/shopeewhy' element={<ShopeeWhyPage/>}></Route>
        <Route path='/job' element={<JobPage/>}></Route>
        <Route path='/student' element={<StudentPage/>}></Route>
        <Route path='/tech' element={<TechPage/>}></Route>
        <Route path='/event' element={<EventPage/>}></Route>
        <Route path='/blog' element={<BlogPage/>}></Route>
        <Route path='/loginsell' element={<LoginSellPage/>}></Route>
        <Route path='/app' element={<AppPage/>}></Route>
        <Route path='/mall' element={<MallPage/>}></Route>
        <Route path='/mallsport' element={<MallSportPage/>}></Route>
        <Route path='/mallcar' element={<MallCarPage/>}></Route>
        <Route path='/malldepartment' element={<MallDepartmentPage/>}></Route>
        <Route path='/malllife' element={<MallLifePage/>}></Route>
        <Route path='/mallbeauty' element={<MallBeautyPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/forgotpassword' element={<ForgotPasswordPage/>}></Route>
        <Route path='/loginsms' element={<LoginsmsPage/>}></Route>
        <Route path='/help' element={<HelpPage/>}></Route>
        <Route path='/rules' element={<RulesPage/>}></Route>
        <Route path='/security' element={<SecurityPage/>}></Route>
        <Route path='/productbycategory/:id' element={<ProductByCategoryPage/>}></Route>
        <Route path='/productbysearch/' element={<ProductBySearchPage/>}></Route>
        <Route path='/productbybrand/:id' element={<ProductByBrandPage/>}></Route>
        <Route path='/productdetail/:id' element={<ProductDetailPage/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/pay' element={<PayPage/>}></Route>
        <Route path="/dashboard/printorder/:id" element={<PrintOrder/>}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    )
  }
}

export default AppRoute