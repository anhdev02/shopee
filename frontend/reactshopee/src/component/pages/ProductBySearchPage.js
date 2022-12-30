import React from 'react'
import FooterProduct from "../common/FooterProduct";
import HeaderHome from "../common/HeaderHome";
import ProductBySearch from '../product/ProductBySearch';

const ProductBySearchPage = () => {
  return (
        <div className="react_main react_product">
            <HeaderHome/>
            <div class="dYFPlI">
                <ProductBySearch/>
                <FooterProduct/>
            </div>
        </div>
  )
}

export default ProductBySearchPage