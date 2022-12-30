import React, { Component } from "react";
import FooterProduct from "../common/FooterProduct";
import HeaderCart from "../common/HeaderCart";
import Cart from "../others/Cart";
import '../../assets/css/Cart.scss'
// import CartContainer from "../../test/containers/CartContainer";

class CartPage extends Component {
    render() {
        return (
            <div className="react_main react_cart">
                <HeaderCart/>
                <Cart/>
                {/* <CartContainer/> */}
                <FooterProduct/>
            </div>
        )
    }
}

export default CartPage