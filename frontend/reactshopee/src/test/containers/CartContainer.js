// import React, {Component} from "react";
// import { connect } from "react-redux";
// import PropTypes from 'prop-types';
// import Cart from '../components/Cart'
// import CartItem from '../components/CartItem'

// class CartContainer extends Component{
//     render(){
//         var {cart} = this.props
//         console.log(this.props)
//         return(
//             <Cart>
//                 {this.showCartItem(cart)}
//             </Cart>
//         );
//     }
//     showCartItem = (cart) =>{
//         var result = null;
//         if(cart.length > 0){
//             result = cart.map((item, index)={
//                 return (
//                     <CartItem />
//                 )
//             })
//         }
//         return result;
//     }

// }

// CartContainer.propsTypes = {
//     cart: PropTypes.arrayOf(
//         PropTypes.shape({
//             product: PropTypes.shape({
//                 id: PropTypes.number.isRequired,
//                 name: PropTypes.string.isRequired,
//                 image: PropTypes.string.isRequired,
//                 details: PropTypes.string.isRequired,
//                 price: PropTypes.number.isRequired
//             }).isRequired,
//             quantity: PropTypes.number.isRequired
//         }).isRequired
//     )
// }

// const mapStateToProps = state =>{
//     return {
//         cart: state.cart
//     }
// }

// export default connect(mapStateToProps, null)(CartContainer)