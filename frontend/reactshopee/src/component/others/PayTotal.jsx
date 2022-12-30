import React,{ Component }  from "react";
import { Link } from "react-router-dom";
import {store} from '../../store/store';

export class PayTotal extends Component {
    constructor(){
        super();
        store.subscribe(()=>{
            this.loadDataItem()
        });
    }
    render(){
        let totalPriceSum = 0, totalItem = 0;
        const myView = store.getState().cart.carts.map((product, i)=>{
            totalItem = totalItem + parseInt(product.quantity)
            totalPriceSum = totalPriceSum + product.unit_price*product.quantity;
                return true;
            })
            return(
                <div className="KqH1Px">
                  <div className="lhwDvd Exv9ow c5Dezq">Tổng tiền hàng</div>
                  <div className="lhwDvd Uu2y3K c5Dezq">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(totalPriceSum)}</div>
                  <div className="lhwDvd Exv9ow B6k-vE">Phí vận chuyển</div>
                  <div className="lhwDvd Uu2y3K B6k-vE">16.500 ₫</div>
                  <div className="lhwDvd Exv9ow A4gPS6">Tổng thanh toán:</div>
                  <div className="lhwDvd +0tdvp Uu2y3K A4gPS6">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(totalPriceSum+16500)}</div>
              </div>
            );
    }
}

export default PayTotal