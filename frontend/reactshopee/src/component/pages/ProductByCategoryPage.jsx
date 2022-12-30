import React, { Component } from "react";
import FooterProduct from "../common/FooterProduct";
import HeaderHome from "../common/HeaderHome";
import ProductByCategory from "../product/ProductByCategory";
import '../../assets/css/Product.scss'
import { useParams } from "react-router-dom";

function ProductPage() {
    const {id} = useParams();
    return (
        <div className="react_main react_product">
            <HeaderHome/>
            <div class="dYFPlI">
                <ProductByCategory id ={id}/>
                <FooterProduct/>
            </div>
        </div>
    )
}

export default ProductPage