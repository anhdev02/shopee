import React, { Component } from "react";
import FooterHelp from "../common/FooterHelp";
import HeaderHelp from "../common/HeaderHelp";
import Help from "../others/Help";
import '../../assets/css/Help.scss'

class HelpPage extends Component {
    render() {
        return(
            <div className="react_help">
                <HeaderHelp/>
                <Help/>
                <FooterHelp/>
            </div>
        )
    }
}

export default HelpPage