import React, { Component } from "react";
import FooterRules from "../common/FooterRules";
import HeaderRules from "../common/HeaderRules";
import Security from "../others/Security";


class SecurityPage extends Component {
    render() {
        return(
            <div className="react_rules">
                <HeaderRules/>
                <Security/>
                <FooterRules/>
            </div>
        );
    }
}

export default SecurityPage