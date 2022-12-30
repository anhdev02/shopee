import React, { Component } from "react";
import axios from "axios";
import AppUrl from "../../../api/AppUrl";
import { Link } from "react-router-dom";

export class ProductMall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MallProductArray: [],
        };
    }

    getData() {
        axios
          .get(AppUrl.ProductByBrand + this.props.BrandId)
          .then((response) => {
            var data = response.data;
            this.setState({
                MallProductArray: data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
      componentDidMount() {
        this.getData();
    }

    render() {
        var MallProductArray = this.state.MallProductArray;
        var myview = MallProductArray.map((product, i)=>{
            return (
                <>
                    <div
                        className="EZnxXG _1AISrj"
                        style={{ width: "16.67%" }}
                        >
                        <Link to={"/productdetail/"+product.id}
                            data-sqe="link"
                            data-tracking='{"page_type":"mall","page_section":"product_collection","target_type":"item","data":{"md_component_id":1664181541618,"component_name":"BOTD1 28.9","section_location":7,"collection_id":526526,"is_horizontal":true,"itemid":5061379155,"shopid":165012996,"likes":409,"rating":4.96078431372549,"discount_percentage":32,"free_shipping":true,"is_preferred":false,"is_mall":true,"is_group_buy":false,"is_wholesale":false,"price":6500000000,"monthly_sales":202,"item_location":0,"has_deep_discount_label":false}}'
                            className="EkDwhR"
                        >
                            <div className="OYfS67 IXR1HN hLg6jZ">
                            <div className="tzUxEG">
                                <div className="al6VpW">
                                <picture className="M+Uc7+">
                                    <img
                                    data-is-lazy-load-bg-image="false"
                                    data-use-image-server="false"
                                    className="lazyload _22g+Bb"
                                    loading="lazy"
                                    src={product.image}
                                    />
                                </picture>
                                </div>
                                <div className="-OADaI">
                                <div
                                    className="YeGYFd LIaN-a"
                                    style={{ color: "rgb(208, 1, 27)" }}
                                >
                                    <div className="_0aihnk" />
                                </div>
                                </div>
                                <div className="GOgNtl">
                                <div className="NTmuqd _3NQO+7 WVxeBE">
                                    <span className="percent">32%</span>
                                    <span className="Th6IF+">giảm</span>
                                </div>
                                </div>
                                <div className="IpGwg7">
                                <div className="customized-overlay-image">
                                    <img
                                    src="https://cf.shopee.vn/file/651abc9a9f61b4c68c2e1c7c49415083"
                                    width
                                    height
                                    />
                                </div>
                                </div>
                            </div>
                            <div className="_2WkFIT">
                                <div className="e2trgC">
                                <div className="eGjAH4 -eG7EW">
                                    {product.productName}
                                </div>
                                <div className="FD2XVZ">
                                    <div className="djt+SZ">
                                    Mua Kèm Deal Sốc
                                    </div>
                                </div>
                                </div>
                                <div className="lrvDhL">
                                <div className="QLs5tq">
                                    <div className="vioxXd ZZuLsr _5pp9T9">
                                    ₫96.000
                                    </div>
                                    <div className="vioxXd L3HGta">
                                    <span className="SioKLr recFju">₫</span>
                                    <span className="UYYBRh ZEgDH9">
                                        {product.price}
                                    </span>
                                    </div>
                                </div>
                                <div className="CbLYKr">
                                    <button
                                    data-addtocart='{"action":1,"itemName":"Viên sủi bổ sung Vitamin Berocca Performance Mango 10 Viên","shopid":165012996,"itemid":5061379155}'
                                    data-addtocarttracking='{"page_type":"mall","page_section":"product_collection","target_type":"add_to_cart_button","data":{"md_component_id":1664181541618,"component_name":"BOTD1 28.9","section_location":7,"collection_id":526526,"is_horizontal":true,"itemid":5061379155,"shopid":165012996,"item_location":0}}'
                                    className="_5oUHk4 kljAJo"
                                    />
                                </div>
                                </div>
                            </div>
                            </div>
                        </Link>
                    </div>
                </>
            );
        });
        return(
            <>
            { myview }
            </>
        )

    }

}

export default ProductMall