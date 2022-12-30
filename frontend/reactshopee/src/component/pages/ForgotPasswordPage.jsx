import React, { Component } from "react";
import FooterRegister from "../common/FooterRegister";
import HeaderForgotP from "../common/HeaderForgotP";
import ForgotPassword from "../others/ForgotPassword";
import '../../assets/css/Forgot.scss'

class ForgotPasswordPage extends Component {
    render(){
        return(
            <div className="react_register react_forgot">
                <div class="vtexOX">
                    <HeaderForgotP/>
                    <ForgotPassword/>
                    <FooterRegister/>
                </div>
            </div>
        )
    }
}

export default ForgotPasswordPage