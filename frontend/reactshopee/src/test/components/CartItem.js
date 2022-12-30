import React, { Component } from "react";

export class CartItem extends Component{
    render(){
        var {item} = this.props;
        console.log(item);
        return(
            <div className="_2qN5oG">
            <div className="_216OLk">
              <div className="_1GcTXp">
                <div className="uUhc_B">
                  <label className="stardust-checkbox stardust-checkbox--checked"><input className="stardust-checkbox__input" type="checkbox" />
                    <div className="stardust-checkbox__box" /></label>
                </div>
                <div className="_2pPbjQ">
                  <div className="YxpsCR">
                    {/* <a title="Áo Blazer Nam Dài, Áo khoác Blazer Form Rộng phong cách Hàn Quốc UT" href="/Áo-Blazer-Nam-Dài-Áo-khoác-Blazer-Form-Rộng-phong-cách-Hàn-Quốc-UT-i.94523191.20207904414?xptdk=83b1fc75-7d02-4a14-9c87-3f86a21fed18"><div className="_3SWf-5" style={{backgroundImage: 'url('+product.image+')'}} /></a> */}
                    <div className="_3OrWGt">
                      {/* <a className="_2fQT1K">{product.name}</a> */}
                      <div className="_931iK8"><span /></div>
                    </div>
                  </div>
                </div>
                <div className="_30hIFE">
                  <div className="_3b-8ro">
                    <div className="ns42ir" role="button" tabIndex={0}>
                      <div className="aXmvTj">
                        Phân loại hàng:<button className="_2Ipt-j" />
                      </div>
                      <div className="GU_XoN">nâu,L</div>
                    </div>
                    <div />
                  </div>
                </div>
                <div className="Ra8lP2">
                  <div>
                    {/* <span className="_1CXksa">₫{product.unit_price}</span> */}
                  </div>
                </div>
                <div className="_2ZUrV7">
                  <div className="_36kVQQ shopee-input-quantity">
                    {/* <button className="EcPhjV" onClick={() =>store.dispatch(DecreaseQuantity(product.id))}>
                      <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="shopee-svg-icon">
                        <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
                      </svg></button><input className="EcPhjV _3cj9Np" type="text" value={product.quantity} defaultValue={product.quantity} />
                      <button className="EcPhjV" onClick={() =>store.dispatch(IncreaseQuantity(product.id))}>
                      <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="shopee-svg-icon icon-plus-sign">
                        <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
                      </svg>
                    </button> */}
                  </div>
                </div>
                {/* <div className="dn3H7Y"><span>₫{product.unit_price*product.quantity}</span></div>
                <div className="_2y8iJi _2qPRqW">
                  <button className="RCd1Gx" onClick={() => store.dispatch(DeleteCart(i))}>Xóa</button>
                </div> */}
              </div>
            </div>
        </div>
        )
    }
}
export default CartItem