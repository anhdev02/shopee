import React, { Component } from "react";
import FooterRegister from "../common/FooterRegister";
import HeaderLogin from "../common/HeaderLogin";
import Login from "../others/Login";


class LoginPage extends Component {
    render(){
        return(
            <div className="react_main react_register">
                <div class="vtexOX">
                    <HeaderLogin/>
                    <Login/>
                    <FooterRegister/>
                </div>
            </div>
        )
    }
}

export default LoginPage