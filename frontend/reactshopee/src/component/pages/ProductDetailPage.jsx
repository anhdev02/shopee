import React, { Component } from "react";
import FooterProduct from "../common/FooterProduct";
import HeaderHome from "../common/HeaderHome";
import ProductDetail from "../product/details/ProductDetail";
import '../../assets/css/Detail.scss'
import { useParams } from "react-router-dom";

function ProductDetailPage() {
    const {id} = useParams();
    return (
        <div className="react_main react_product react_detail">
            <HeaderHome/>
            <ProductDetail id={id}/>
            <FooterProduct/>
        </div>
    )
}

export default ProductDetailPage