import React, { Component } from "react";
import FooterRegister from "../common/FooterRegister";
import HeaderLogin from "../common/HeaderLogin";
import Loginsms from "../others/Loginsms";


class LoginsmsPage extends Component {
    render(){
        return(
            <div className="react_main react_register">
                <div class="vtexOX">
                    <HeaderLogin/>
                    <Loginsms/>
                    <FooterRegister/>
                </div>
            </div>
        )
    }
}

export default LoginsmsPage