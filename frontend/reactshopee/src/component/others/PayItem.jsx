import React,{ Component }  from "react";
import { Link } from "react-router-dom";
import {store} from '../../store/store';

export class PayItem extends Component {
    constructor(){
        super();
        this.state = {
            itemsNumber: 0,
            items: []
        }
        store.subscribe(()=>{
            this.loadDataItem()
        });
    }
    loadDataItem(){
        var numberItems = store.getState().cart.numberCart;
        var itemss = store.getState().cart.carts
        this.setState({ itemsNumber: numberItems,items:itemss });
        
    }
    componentDidMount(){
        this.loadDataItem();
    }
    render(){
        const myList = this.state.items;
        // console.log(myList)
        let totalPriceSum = 0, totalItem = 0;
        const myView = myList.map((product, i)=>{
        totalItem = totalItem + parseInt(product.quantity)
        totalPriceSum = totalPriceSum + product.unit_price*product.quantity;
        this.props.parentCallback(totalPriceSum)
          return (
            <div key = {i} className="_6kMvNg ka6CzP">
                <div className="_4MGXB1 c7N4lb">
                <img
                    className="GCGEKm"
                    src={product.image}
                    width={40}
                    height={40}
                />
                <span className="F8X-cZ">
                    <span className="tPzkNt">
                    {product.name}
                    </span>
                </span>
                </div>
                <div className="_4MGXB1 wE0Rsh">
                <span className="KYRrlx">Loại: nâu,L</span>
                </div>
                <div className="_4MGXB1">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.unit_price)}</div>
                <div className="_4MGXB1">{product.quantity}</div>
                <div className="_4MGXB1 _8fgmps">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.unit_price*product.quantity)}</div>
            </div>
          )
        })
        return (
            <>
                <div>
                <div className="dwwHJ-">
                <div>
                    <div className="nF6yNn">
                    <div className="yknSi4">
                        <div>
                        <svg
                            width={17}
                            height={16}
                            viewBox="0 0 17 16"
                            className="Vqonym"
                        >
                            <path
                            d="M1.95 6.6c.156.804.7 1.867 1.357 1.867.654 0 1.43 0 1.43-.933h.932s0 .933 1.155.933c1.176 0 1.15-.933 1.15-.933h.984s-.027.933 1.148.933c1.157 0 1.15-.933 1.15-.933h.94s0 .933 1.43.933c1.368 0 1.356-1.867 1.356-1.867H1.95zm11.49-4.666H3.493L2.248 5.667h12.437L13.44 1.934zM2.853 14.066h11.22l-.01-4.782c-.148.02-.295.042-.465.042-.7 0-1.436-.324-1.866-.86-.376.53-.88.86-1.622.86-.667 0-1.255-.417-1.64-.86-.39.443-.976.86-1.643.86-.74 0-1.246-.33-1.623-.86-.43.536-1.195.86-1.895.86-.152 0-.297-.02-.436-.05l-.018 4.79zM14.996 12.2v.933L14.984 15H1.94l-.002-1.867V8.84C1.355 8.306 1.003 7.456 1 6.6L2.87 1h11.193l1.866 5.6c0 .943-.225 1.876-.934 2.39v3.21z"
                            strokeWidth=".3"
                            stroke="#333"
                            fill="#333"
                            fillRule="evenodd"
                            />
                        </svg>
                        </div>
                        <span className="WJIXj0"> Phương Uyên fashion</span>
                        <div className="+-FqSc">
                        <svg
                            viewBox="0 0 16 16"
                            className="shopee-svg-icon +Nu1h5"
                        >
                            <g fillRule="evenodd">
                            <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z" />
                            </g>
                        </svg>
                        Chat ngay
                        </div>
                    </div>
                    <div className="CZ6uu2">


                    {myView}


                    </div>
                    </div>
                </div>
                <div className="kfKL6K">
                    <div className="wWp9Rn _7-SGSz">
                    <div className="-bFs2Q">
                        <span>Lời nhắn:</span>
                        <div className="jSc1M9">
                        <div className="l7vuWW XfjvIa">
                            <div className="bue9pr XtXldU">
                            <input
                                className="_6E2RgG"
                                type="text"
                                placeholder="Lưu ý cho Người bán..."
                                // defaultValue
                            />
                            </div>
                            <div />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="wWp9Rn GoSC7d">
                    <div className="sYTSo9">Đơn vị vận chuyển:</div>
                    <div className="TrbqGd">
                        <div>Nhanh</div>
                    </div>
                    <div className="_2grHQK" />
                    <div className="NWGbOL">Nhận hàng vào 1 Th10 - 3 Th10</div>
                    <div className="pM3XnN" />
                    <div className="_3Gb6E1">
                        (Nhanh tay vào ngay "Shopee Voucher" để săn mã Miễn phí
                        vận chuyển nhé!)
                    </div>
                    <div className="DIvIij">Thay đổi</div>
                    <div className="uneQgd">16.500 ₫</div>
                    </div>
                </div>
                <div className="BbOmi+">
                    <div className="lYtB1r">
                    <div className="_4nelpz">Tổng số tiền ({totalItem} sản phẩm):</div>
                    <div className="_31ayp3">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(totalPriceSum)}</div>
                    </div>
                </div>
                </div>
            </div>
            
            </>
        )
    }
}

export default PayItem