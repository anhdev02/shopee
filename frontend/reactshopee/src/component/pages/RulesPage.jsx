import React, { Component } from "react";
import FooterRules from "../common/FooterRules";
import HeaderRules from "../common/HeaderRules";
import Rules from "../others/Rules";
import '../../assets/css/Rules.scss'


class RulesPage extends Component {
    render() {
        return(
            <div className="react_rules">
                <HeaderRules/>
                <Rules/>
                <FooterRules/>
            </div>
        );
    }
}

export default RulesPage