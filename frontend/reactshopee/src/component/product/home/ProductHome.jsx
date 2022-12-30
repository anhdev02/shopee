import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppUrl from '../../api/AppUrl'

export class ProductHome extends Component{
    constructor(){
        super()
        this.state = {
            ProductHomeArray:[]
        }
    }
    getData(){
        axios.get(AppUrl.ProductHome)
        .then((response)=>{
            var data = response.data;
            this.setState({
                ProductHomeArray: data
            })
        })
        .catch((error)=>{
            console.log()
        })
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        var ProductHomeArray = this.state.ProductHomeArray;
        var myview = ProductHomeArray.map((product, i)=>{
            return(
                <div className="_4beVMw">
                <Link to={"/productdetail/"+product.id}>
                    <a
                    data-sqe="link"
                    href="#st"
                    >
                    <div className="yZLQT4">
                        <div className="uA1waf _4QQ4Ir">
                        <div style={{ pointerEvents: "none" }}>
                            <div className="n-CE6j iR+sxV">
                            <img
                                width="invalid-value"
                                height="invalid-value"
                                alt="áo khoác dài cổ Vest, form rộng, chất Flannel cao cấp - áo khoác măng tô phong cách Hàn Quốc 2 lớp, Blazer dài"
                                className="Vz6gJ3 edy5hG"
                                style={{ objectFit: "contain" }}
                                src={product.image}
                            />
                            <div className="X5j9y1">
                                <div
                                className="VGupoO _7zJYfY"
                                style={{ color: "rgb(242, 82, 32)" }}
                                >
                                <div className="e8AcC7 t7oRm5" />
                                </div>
                            </div>
                            <div className="vmaKHl">
                                <div className="C2-vN- dCT7bq Od5TJM">
                                <span className="percent">48%</span>
                                <span className="mXP-A3">giảm</span>
                                </div>
                            </div>
                            <div className="+QxcSK">
                                <div className="W9A2ES" data-sqe="ad">
                                Tài trợ
                                </div>
                            </div>
                            <div className="PhrpPs">
                                <div className="customized-overlay-image">
                                <img
                                    src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c"
                                    width
                                    height
                                />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="W3bJfG">
                            <div className="qUEEG4">
                            <div className="hPc1Pf">
                                <div className="vc0PvV AxYdVM">
                                {product.productName}
                                </div>
                            </div>
                            <div className="bVKmWS">
                                <div
                                className="_1PWkR nt-medium nt-foot _3nkRL"
                                style={{ color: "rgb(246, 145, 19)" }}
                                >
                                <svg
                                    className="_2DRZW _2xFcL"
                                    viewBox="-0.5 -0.5 4 16"
                                >
                                    <path
                                    d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                                    strokeWidth={1}
                                    transform
                                    stroke="currentColor"
                                    fill="#f69113"
                                    />
                                </svg>
                                <div
                                    className="_1FKkT _3Ao0A"
                                    style={{
                                    color: "white",
                                    backgroundColor:
                                        "rgb(246, 145, 19)",
                                    }}
                                >
                                    80% Giảm
                                </div>
                                <svg
                                    className="_2DRZW _2xFcL"
                                    viewBox="-0.5 -0.5 4 16"
                                >
                                    <path
                                    d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                                    strokeWidth={1}
                                    transform="rotate(180) translate(-3 -15)"
                                    stroke="currentColor"
                                    fill="#f69113"
                                    />
                                </svg>
                                </div>
                            </div>
                            </div>
                            <div className="imdVqB _2fuFWg">
                            <div className="WSVId4 fepoRf">
                                <span className="j0vBz2">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.price)}</span>
                            </div>
                            <div className="upl8wJ _82UoSS">
                                Đã bán 138
                            </div>
                            </div>
                        </div>
                        <div className="shopee-item-card__hover-footer _1X2yZq">
                            Tìm sản phẩm tương tự
                        </div>
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
            )
        })
        return (
            <div className="_6wTCb6">
                {myview}
                <div className="qqV7Rl">
                <a
                    className="btn btn-light btn--m btn--inline btn-light--link FA8aij"
                    href="/daily_discover?pageNumber=2"
                >
                    Xem thêm
                </a>
                </div>
          </div>
        )
    }
}
export default ProductHome