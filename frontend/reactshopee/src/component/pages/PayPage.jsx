import React, { Component } from "react";
import FooterProduct from "../common/FooterProduct";
import HeaderCart from "../common/HeaderCart";
import Pay from "../others/Pay";
import '../../assets/css/Pay.scss'

class PayPage extends Component {
    render() {
        return(
            <div className="react_main react_cart react_pay">
                <HeaderCart/>
                <Pay/>
                <FooterProduct/>
            </div>
        )
    }
}

export default PayPage