import React, { Component } from "react";
import FooterProduct from "../common/FooterProduct";
import HeaderHome from "../common/HeaderHome";
import { useParams } from "react-router-dom";
import { ProductByBrand } from "../product/ProductByBrand";
function ProductByCategoryPage() {
    const {id} = useParams();
    return (
        <div className="react_main react_product">
            <HeaderHome/>
            <div class="dYFPlI">
                <ProductByBrand id ={id}/>
                <FooterProduct/>
            </div>
        </div>
    )
}

export default ProductByCategoryPage