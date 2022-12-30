import React, { Component } from "react";
import FooterRegister from "../common/FooterRegister";
import HeaderRegister from "../common/HeaderRegister";
import Register from "../others/Register";
import '../../assets/css/Register.scss'

class RegisterPage extends Component {
    render(){
        return(
            <div className="react_main react_register">
                <div class="vtexOX">
                    <HeaderRegister/>
                    <Register/>
                    <FooterRegister/>
                </div>
            </div>
        )
    }
}

export default RegisterPage