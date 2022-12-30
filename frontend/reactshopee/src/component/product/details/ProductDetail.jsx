import React, { Component } from 'react'
import axios from "axios";
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify'
import { Link } from "react-router-dom";
import {store} from '../../../store/store'
import ProductAttribute from './ProductAttribute';
import { AddCart } from '../../../store/action/cart';


export class ProductDetail extends Component{
  constructor(props) {
    super(props)
    this.state = {
      messages: 'Đã thêm sản phẩm vào giỏ hàng',
      id: this.props.id,
      name: '',
      image: '',
      price: '',
      details: '',
      quantity: '',
      style: ''
    }
    this.addToCartClickHandle = this.addToCartClickHandle.bind(this)
  }
  addToCartClickHandle() {
    if(this.state.quantity===0){
      toast.error('Đã hết sản phẩm',{position: "bottom-left"});
    }else{
      store.dispatch(AddCart({id:this.state.id, name:this.state.name,
        quantity:1, unit_price: this.state.price, image:this.state.image}));
        
      toast.success(this.state.messages,{position: "bottom-left"});
    }
  }
  componentDidMount(){
    var d = AppUrl.ProductById + this.state.id;
    // console.log(d);
    axios.get(d).then((response)=>{
      var productDetail = response.data
      // console.log(productDetail)
      this.setState({
        name: productDetail.productName,
        image: productDetail.image,
        price: productDetail.price,
        quantity: productDetail.quantity,
        details: productDetail.details
      })
    })
  }
    render(){
        return (
            <div className="page-product">
              <div className="tracking-impression-placeholder" style={{position: 'fixed', zIndex: 99999, bottom: '0px', left: '0px'}} />
              <div role="main" className="container">
                <div className="product-briefing flex card _2qM0Iy">
                  <div />
                  <div className="jexb7x">
                    <div className="flex flex-column">
                      <div className="_18BsVd">
                        <div className="_2fbO7Q">
                          <div className="vpbtQ5" style={{display: 'none'}}>
                            <div className="shopee-image-placeholder _3LM2cY">
                              <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                              </svg>
                            </div>
                            <div className="center _1fKb1T">
                              <video data-dashjs-player="true" className="bS6E6i" autoPlay />
                            </div>
                          </div>
                          <div className="_1OPdfl">
                            <div className="_3uzKon _2PWsS4" style = {{ backgroundImage: "url(" + this.state.image + ")" , backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
                          </div>
                          <div className="_3sHeKp">
                            <img className="Mh39yi" src="https://cf.shopee.vn/file/dadae6af3acd8c8de7828ee37f41cfa2" />
                          </div>
                        </div>
                      </div>
                      <div className="_17WIFx">
                        <div className="DTJTIT">
                          <div className="_3EV5-x">
                            <div className="_1OPdfl">
                              <div className="_1XC0Jt _2PWsS4" style={{backgroundImage: 'url("https://cf.shopee.vn/file/c9789282e3d71bc9e273cef43e171200_tn")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
                            </div>
                            <img className="Mh39yi" src="https://cf.shopee.vn/file/dadae6af3acd8c8de7828ee37f41cfa2" />
                            <div className="_33iMAv" />
                          </div>
                        </div>
                        <div className="DTJTIT">
                          <div className="_3EV5-x">
                            <div className="_1OPdfl">
                              <div className="_1XC0Jt _2PWsS4" style={{backgroundImage: 'url("https://cf.shopee.vn/file/386e93da48f6206a5bf09116e0bc4ccf_tn")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
                            </div>
                            <div className />
                          </div>
                        </div>
                        <div className="DTJTIT">
                          <div className="_3EV5-x">
                            <div className="_1OPdfl">
                              <div className="_1XC0Jt _2PWsS4" style={{backgroundImage: 'url("https://cf.shopee.vn/file/db6a4305b97695df84e945eb88fa3de3_tn")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
                            </div>
                            <div className />
                          </div>
                        </div>
                        <div className="DTJTIT">
                          <div className="_3EV5-x">
                            <div className="_1OPdfl">
                              <div className="_1XC0Jt _2PWsS4" style={{backgroundImage: 'url("https://cf.shopee.vn/file/06d2f186b9434128a42456c5c3d8af3a_tn")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
                            </div>
                            <div className />
                          </div>
                        </div>
                        <div className="DTJTIT">
                          <div className="_3EV5-x">
                            <div className="_1OPdfl">
                              <div className="_1XC0Jt _2PWsS4" style={{backgroundImage: 'url("https://cf.shopee.vn/file/b4f4e656c10e58b3ae4fec5dcaba1c52_tn")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
                            </div>
                            <div className />
                          </div>
                        </div>
                        <button className="shopee-icon-button _9HwEfD ynzeKh" tabIndex={-1}>
                          <svg enableBackground="new 0 0 13 20" viewBox="0 0 13 20" x={0} y={0} className="shopee-svg-icon icon-arrow-left-bold">
                            <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                          </svg></button><button className="shopee-icon-button _9HwEfD _1P-1P1" tabIndex={-1}>
                          <svg enableBackground="new 0 0 13 21" viewBox="0 0 13 21" x={0} y={0} className="shopee-svg-icon icon-arrow-right-bold">
                            <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-center items-center" style={{marginTop: '15px'}}>
                      <div className="flex items-center _32u_66">
                        <div className="_1ipVhx">Chia sẻ:</div>
                        <button className="sprite-product-sharing sprite-product-sharing-fm _39FIbB" aria-label="Share on Messenger" /><button className="sprite-product-sharing sprite-product-sharing-fb _39FIbB" aria-label="Share on Facebook" /><button className="sprite-product-sharing sprite-product-sharing-pinterest _39FIbB" aria-label="Share on Pinterest" /><button className="sprite-product-sharing sprite-product-sharing-twitter _39FIbB" aria-label="Share on Twitter" />
                      </div>
                      <div className="flex items-center _3CF_vE">
                        <button className="_11Toj4" tabIndex={0}>
                          <svg width={24} height={20} className="_2lkS14">
                            <path d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z" stroke="#FF424F" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinejoin="round" />
                          </svg>
                          <div className="_1ipVhx">Đã thích (99)</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-auto eTjGTe">
                    <div className="flex-auto flex-column _1Kkkb-">
                      <div className="_2rQP1z">
                        <div className="_3zG-wJ _3o22jI eBc1PL Ak8jyi _1Yuewi items-center">
                          Yêu thích
                        </div>
                        <span>{this.state.name}</span>
                      </div>
                      <div className="flex _3tkSsu">
                        <div className="flex _3T9OoL">
                          <div className="_3y5XOB _14izon">4.7</div>
                          <div className="_1HyS82">
                            <div className="shopee-rating-stars">
                              <div className="shopee-rating-stars__stars">
                                <div className="shopee-rating-stars__star-wrapper">
                                  <div className="shopee-rating-stars__lit" style={{width: '100%'}}>
                                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid">
                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                                    <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                  </svg>
                                </div>
                                <div className="shopee-rating-stars__star-wrapper">
                                  <div className="shopee-rating-stars__lit" style={{width: '100%'}}>
                                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid">
                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                                    <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                  </svg>
                                </div>
                                <div className="shopee-rating-stars__star-wrapper">
                                  <div className="shopee-rating-stars__lit" style={{width: '100%'}}>
                                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid">
                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                                    <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                  </svg>
                                </div>
                                <div className="shopee-rating-stars__star-wrapper">
                                  <div className="shopee-rating-stars__lit" style={{width: '100%'}}>
                                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid">
                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                                    <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                  </svg>
                                </div>
                                <div className="shopee-rating-stars__star-wrapper">
                                  <div className="shopee-rating-stars__lit" style={{width: '66.6667%'}}>
                                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid">
                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                                    <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex _3T9OoL">
                          <div className="_3y5XOB">12</div>
                          <div className="_1HyS82">đánh giá</div>
                        </div>
                        <div className="flex _3EOMd6">
                          <div className="HmRxgn">232</div>
                          <div className="qBnNRR">đã bán</div>
                        </div>
                      </div>
                      <div style={{marginTop: '10px'}}>
                        <div className="flex flex-column">
                          <div className="flex flex-column _38g6so">
                            <div className="flex items-center">
                              <div className="flex items-center _34BHKe">
                                {/* <div className="_2yjfFH">₫220.000</div> */}
                                <div className="flex items-center">
                                  <div className="_2Shl1j">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(this.state.price)}</div>
                                  <div className="_3PlIlX">16% giảm</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="_3rFQYx">
                        <div className="flex flex-column">
                          <div className="flex VrhRS0 uBD5Gu">
                            <label className="_34CHXV">Vận chuyển</label>
                            <div className="FmL3rv _3ihqr8">
                              <div className="zikqoN">
                                <div className="pJhgZK">
                                  <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/1cdd37339544d858f4d0ade5723cd477.png" width={25} height={15} className="_3VqYMj" />Miễn phí vận chuyển
                                </div>
                              </div>
                              <div className="flex flex-row">
                                <div className="_1ZXlWM">
                                  <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-free-shipping-line">
                                    <g>
                                      <line fill="none" strokeLinejoin="round" strokeMiterlimit={10} x1="8.6" x2="4.2" y1="9.8" y2="9.8" />
                                      <circle cx={3} cy="11.2" fill="none" r={2} strokeMiterlimit={10} />
                                      <circle cx={10} cy="11.2" fill="none" r={2} strokeMiterlimit={10} />
                                      <line fill="none" strokeMiterlimit={10} x1="10.5" x2="14.4" y1="7.3" y2="7.3" />
                                      <polyline fill="none" points="1.5 9.8 .5 9.8 .5 1.8 10 1.8 10 9.1" strokeLinejoin="round" strokeMiterlimit={10} />
                                      <polyline fill="none" points="9.9 3.8 14 3.8 14.5 10.2 11.9 10.2" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </g>
                                  </svg>
                                </div>
                                <div className="flex flex-column">
                                  <div className="flex items-center _1h-764">
                                    <div className="wRS_Ej">Vận chuyển tới</div>
                                    <div className="flex items-center _27tnF4">
                                      <div className="flex items-center">
                                        <div className="DrJqe7">
                                          <div className="flex items-center">
                                            <span className="_2fJrvA">Phường Tràng Tiền, Quận Hoàn
                                              Kiếm</span><svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="shopee-svg-icon icon-arrow-down">
                                              <g>
                                                <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                                              </g>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_1h-764">
                                    <div className="wRS_Ej">phí vận chuyển</div>
                                    <div>
                                      <div className="shopee-drawer" id="pc-drawer-id-0" tabIndex={0}>
                                        <div className="flex items-center _2j4htc">
                                          ₫0<svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="shopee-svg-icon icon-arrow-down">
                                            <g>
                                              <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex VrhRS0 _1RCFQu">
                            <div className="flex flex-column">
                              <div className="flex items-center" style={{marginBottom: '8px', alignItems: 'baseline'}}>
                                <label className="_34CHXV">màu</label>
                                <div className="flex items-center _3Bh7nx">
                                  <button className="product-variation" aria-label="A60-trắng" aria-disabled="false">
                                    A60-trắng</button><button className="product-variation" aria-label="A60-đen" aria-disabled="false">
                                    A60-đen
                                  </button>
                                </div>
                              </div>
                              <div className="flex items-center _283ldj">
                                <div className="_34CHXV">Số lượng</div>
                                <div className="flex items-center">
                                  <div style={{marginRight: '15px'}}>
                                    <div className="_1RTqoK shopee-input-quantity">
                                      <button className="_1MGNbJ">
                                        <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="shopee-svg-icon">
                                          <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
                                        </svg></button><input className="_1MGNbJ _1eS5m1" type="text" role="spinbutton" aria-valuenow={1} defaultValue={1} /><button className="_1MGNbJ">
                                        <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="shopee-svg-icon icon-plus-sign">
                                          <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <div>{this.state.quantity} sản phẩm có sẵn</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{marginTop: '15px'}}>
                        <div className="_3pcTIL">
                          <div className="_37uIr4">
                            <button type="button" onClick={this.addToCartClickHandle} className="btn btn-tinted btn--l _3f7_YI _1TpzVc" aria-disabled="false">
                              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon _1FtIAE icon-add-to-cart">
                                <g>
                                  <g>
                                    <polyline fill="none" points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    <circle cx={6} cy="13.5" r={1} stroke="none" />
                                    <circle cx="11.5" cy="13.5" r={1} stroke="none" />
                                  </g>
                                  <line fill="none" strokeLinecap="round" strokeMiterlimit={10} x1="7.5" x2="10.5" y1={7} y2={7} />
                                  <line fill="none" strokeLinecap="round" strokeMiterlimit={10} x1={9} x2={9} y1="8.5" y2="5.5" />
                                </g></svg><span>thêm vào giỏ hàng</span></button>
                                <button type="button" className="btn btn-solid-primary btn--l _3f7_YI" aria-disabled="false">
                              Mua ngay
                            </button>
                          </div>
                        </div>
                      </div>
                      <div style={{marginTop: '30px', borderTop: '1px solid rgba(0, 0, 0, 0.05)'}}>
                        <Link  rel="noopener noreferrer" className="_2GLbiR flex items-center" to="/error"><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/83e10a1f95cb083579c089448ef8dd3b.png" className="_16t1rh" /><span className="_1N5h1A">Shopee Đảm Bảo</span><span>3 Ngày Trả Hàng / Hoàn Tiền</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="CKGyuW">
                  <div className="_1Yaflp page-product__shop">
                    <div className="_1YY3XU">
                      <Link className="_2O_CHG" to="/error"><div className="shopee-avatar _3q1-OA">
                          <div className="shopee-avatar__placeholder">
                            <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-headshot">
                              <g>
                                <circle cx="7.5" cy="4.5" fill="none" r="3.8" strokeMiterlimit={10} />
                                <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
                              </g>
                            </svg>
                          </div>
                          <img className="shopee-avatar__img" src="https://cf.shopee.vn/file/5b82bd474c7209345b51c4379b7bb1fb_tn" />
                        </div>
                        <div className="sUmB8_">
                          <div className="_3zG-wJ _3o22jI eBc1PL">Yêu thích</div>
                        </div></Link>
                      <div className="zYQ1eS">
                        <div className="_3LoNDM">lozado</div>
                        <div className="_1VQF5I">Online 2 giờ trước</div>
                        <div className="_2xDNx7">
                          <button type="button" className="btn btn-tinted btn--s btn--inline qBhKJX">
                            <svg viewBox="0 0 16 16" className="shopee-svg-icon pa-h8D">
                              <g fillRule="evenodd">
                                <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z" />
                              </g></svg>Chat ngay</button><Link className="btn btn-light btn--s btn--inline btn-light--link _1CglVM" to="/error"><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} strokeWidth={0} className="shopee-svg-icon _1rcInn">
                              <path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z" /></svg>xem shop</Link>
                        </div>
                      </div>
                    </div>
                    <div className="_3_TQHS">
                      <div className="y0THZ0">
                        <div className="_2vnl9a _3-NFbD">
                          <label className="_29u_kX">Đánh giá</label><span className="_1i6OkT">9,9k</span>
                        </div>
                        <Link className="_18deDz _3-NFbD" to="/error"><label className="_29u_kX">Sản phẩm</label><span className="_1i6OkT _1j0YH3">339</span></Link>
                      </div>
                      <div className="y0THZ0">
                        <div className="_2vnl9a _3-NFbD">
                          <label className="_29u_kX">tỉ lệ phản hồi</label><span className="_1i6OkT">92%</span>
                        </div>
                        <div className="_2vnl9a _3-NFbD">
                          <label className="_29u_kX">thời gian phản hồi</label><span className="_1i6OkT">trong vài giờ</span>
                        </div>
                      </div>
                      <div className="y0THZ0">
                        <div className="_2vnl9a _3-NFbD">
                          <label className="_29u_kX">tham gia</label><span className="_1i6OkT">6 tháng trước</span>
                        </div>
                        <div className="_2vnl9a _3-NFbD">
                          <label className="_29u_kX">Người theo dõi</label><span className="_1i6OkT">24,1k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="page-product__content">
                    <div className="page-product__content--left">
                      <div className="product-detail page-product__detail">
                        <div className="_3ICPhk">
                          <div className="_2N2_VN">CHI TIẾT SẢN PHẨM</div>
                          
                          <ProductAttribute id = {this.state.id}  />


                        </div>
                        <div className="_3ICPhk">
                          <div className="_2N2_VN">MÔ TẢ SẢN PHẨM</div>
                          <div className="_2jz573">
                            <div dangerouslySetInnerHTML={{__html: this.state.details}} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="product-ratings" data-nosnippet="true">
                          <div className="product-ratings__header">
                            ĐÁNH GIÁ SẢN PHẨM
                          </div>
                          <div className="product-rating-overview">
                            <div className="product-rating-overview__briefing">
                              <div className="product-rating-overview__score-wrapper">
                                <span className="product-rating-overview__rating-score">4.7</span><span className="product-rating-overview__rating-score-out-of">
                                  trên 5
                                </span>
                              </div>
                              <div className="shopee-rating-stars product-rating-overview__stars">
                                <div className="shopee-rating-stars__stars">
                                  <div className="shopee-rating-stars__star-wrapper">
                                    <div className="shopee-rating-stars__lit" style={{width: '100%'}}>
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                                      <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <div className="shopee-rating-stars__star-wrapper">
                                    <div className="shopee-rating-stars__lit" style={{width: '100%'}}>
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                                      <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <div className="shopee-rating-stars__star-wrapper">
                                    <div className="shopee-rating-stars__lit" style={{width: '100%'}}>
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                                      <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <div className="shopee-rating-stars__star-wrapper">
                                    <div className="shopee-rating-stars__lit" style={{width: '100%'}}>
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                                      <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <div className="shopee-rating-stars__star-wrapper">
                                    <div className="shopee-rating-stars__lit" style={{width: '66.6667%'}}>
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                                      <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-rating-overview__filters">
                              <div className="product-rating-overview__filter product-rating-overview__filter--active product-rating-overview__filter--all">
                                tất cả
                              </div>
                              <div className="product-rating-overview__filter">
                                5 Sao (10)
                              </div>
                              <div className="product-rating-overview__filter">
                                4 Sao (1)
                              </div>
                              <div className="product-rating-overview__filter">
                                3 Sao (0)
                              </div>
                              <div className="product-rating-overview__filter">
                                2 Sao (1)
                              </div>
                              <div className="product-rating-overview__filter">
                                1 Sao (0)
                              </div>
                              <div className="product-rating-overview__filter product-rating-overview__filter--with-comment">
                                Có Bình luận (11)
                              </div>
                              <div className="product-rating-overview__filter product-rating-overview__filter--with-photo">
                                Có hình ảnh / video (10)
                              </div>
                            </div>
                          </div>
                          <div className="product-ratings__list">
                            <div className="shopee-product-comment-list">
                              <div className="shopee-product-rating">
                                <Link className="shopee-product-rating__avatar" to="/error"><div className="shopee-avatar">
                                    <div className="shopee-avatar__placeholder">
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-headshot">
                                        <g>
                                          <circle cx="7.5" cy="4.5" fill="none" r="3.8" strokeMiterlimit={10} />
                                          <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
                                        </g>
                                      </svg>
                                    </div></div></Link>
                                <div className="shopee-product-rating__main">
                                  <Link className="shopee-product-rating__author-name" to="/error">lehoangkien89216</Link>
                                  <div className="repeat-purchase-con">
                                    <div className="shopee-product-rating__rating">
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="shopee-product-rating__time">
                                    2022-09-17 15:46 | Phân loại hàng:
                                    A60-trắng
                                  </div>
                                  <div className="_280jKz"> không còn từ gì để diễn tả độ xinh xẻo này . Áo rất dày dặn và cầm siuu nặng luonnn . Mình m63 43kg mặc ngang mông . lần đầu mua được chiếc len siuuu iuuu như này . mọi người nên muaaa nha sẽ ủng hộ shop dài dài 😘😘
                                  </div>
                                  <div className="shopee-product-rating__image-list-wrapper">
                                    <div className="rating-media-list">
                                      <div className="rating-media-list__container">
                                        <div className="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive">
                                          <div className="shopee-rating-media-list-image__wrapper">
                                            <div className="shopee-rating-media-list-image__place-holder">
                                              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-loading-image">
                                                <g>
                                                  <rect fill="none" height={8} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={10} x={1} y="4.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="6.5" y2="6.5" />
                                                  <rect fill="none" height={3} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={3} x={11} y="6.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="14.5" y2="14.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={6} x2={6} y1=".5" y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="3.5" x2="3.5" y1={1} y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="8.5" x2="8.5" y1={1} y2={3} />
                                                </g>
                                              </svg>
                                            </div>
                                            <div className="shopee-rating-media-list-image__content" style={{backgroundImage: 'url("http://img.ws.mms.shopee.sg/vn-11134103-22090-bycs5orbxkhvaf_tn")'}}>
                                              <div className="shopee-rating-media-list-image__content--blur" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive">
                                          <div className="shopee-rating-media-list-image__wrapper">
                                            <div className="shopee-rating-media-list-image__place-holder">
                                              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-loading-image">
                                                <g>
                                                  <rect fill="none" height={8} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={10} x={1} y="4.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="6.5" y2="6.5" />
                                                  <rect fill="none" height={3} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={3} x={11} y="6.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="14.5" y2="14.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={6} x2={6} y1=".5" y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="3.5" x2="3.5" y1={1} y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="8.5" x2="8.5" y1={1} y2={3} />
                                                </g>
                                              </svg>
                                            </div>
                                            <div className="shopee-rating-media-list-image__content" style={{backgroundImage: 'url("http://img.ws.mms.shopee.sg/vn-11134103-22090-q7tbffvbxkhv41_tn")'}}>
                                              <div className="shopee-rating-media-list-image__content--blur" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive">
                                          <div className="shopee-rating-media-list-image__wrapper">
                                            <div className="shopee-rating-media-list-image__place-holder">
                                              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-loading-image">
                                                <g>
                                                  <rect fill="none" height={8} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={10} x={1} y="4.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="6.5" y2="6.5" />
                                                  <rect fill="none" height={3} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={3} x={11} y="6.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="14.5" y2="14.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={6} x2={6} y1=".5" y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="3.5" x2="3.5" y1={1} y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="8.5" x2="8.5" y1={1} y2={3} />
                                                </g>
                                              </svg>
                                            </div>
                                            <div className="shopee-rating-media-list-image__content" style={{backgroundImage: 'url("http://img.ws.mms.shopee.sg/vn-11134103-22090-8363qbybxkhve2_tn")'}}>
                                              <div className="shopee-rating-media-list-image__content--blur" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="rating-media-list__zoomed-image">
                                        <div className="rating-media-list-image-carousel" style={{transition: 'all 0ms ease 0s', width: '0px'}}>
                                          <div className="rating-media-list-image-carousel__item-list-wrapper">
                                            <ul className="rating-media-list-image-carousel__item-list" style={{marginLeft: '0px', marginTop: '0px'}}>
                                              <li className="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style={{padding: '0px 0.625rem'}}>
                                                <img className="rating-media-list__zoomed-image-item" src="http://img.ws.mms.shopee.sg/vn-11134103-22090-bycs5orbxkhvaf" />
                                              </li>
                                              <li className="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style={{padding: '0px 0.625rem'}}>
                                                <img className="rating-media-list__zoomed-image-item" src="http://img.ws.mms.shopee.sg/vn-11134103-22090-q7tbffvbxkhv41" />
                                              </li>
                                              <li className="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style={{padding: '0px 0.625rem'}}>
                                                <img className="rating-media-list__zoomed-image-item" src="http://img.ws.mms.shopee.sg/vn-11134103-22090-8363qbybxkhve2" />
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--prev rating-media-list-carousel-arrow--hint rating-media-list-carousel-arrow--hidden" role="button" tabIndex={0} style={{opacity: 1, visibility: 'hidden', transform: 'translateX(calc(-50% + 0px))'}}>
                                            <svg enableBackground="new 0 0 13 20" viewBox="0 0 13 20" x={0} y={0} className="shopee-svg-icon icon-arrow-left-bold">
                                              <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                                            </svg>
                                          </div>
                                          <div className="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--next rating-media-list-carousel-arrow--hint" role="button" tabIndex={0} style={{opacity: 1, visibility: 'visible', transform: 'translateX( calc(50% - 0px))'}}>
                                            <svg enableBackground="new 0 0 13 21" viewBox="0 0 13 21" x={0} y={0} className="shopee-svg-icon icon-arrow-right-bold">
                                              <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_3lF5CE">
                                    <div className="_1rc11Y">
                                      phản hồi của Người Bán
                                    </div>
                                    <div className="_2w33Zs"> Gozado xin cám ơn đánh giá của bạn. Chúng tôi rất vui vì bạn đã tin tưởng sử dụng sản phẩm của shop. Chúng tôi luôn hy vọng mang lại sự hài lòng cho Quý khách hàng, chúc bạn luôn vui vẻ và mong bạn tiếp tục ủng hộ Shop trong lần trải nghiệm mua hàng tiếp theo nhé!
                                    </div>
                                  </div>
                                  <div className="shopee-product-rating__actions" style={{justifyContent: 'space-between'}}>
                                    <div style={{display: 'flex'}}>
                                      <div className="shopee-product-rating__like-button">
                                        <svg width="14px" height="13px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                          <defs />
                                          <g stroke="none" strokeWidth={1} fillRule="evenodd">
                                            <g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fillRule="nonzero">
                                              <g transform="translate(155.000000, 92.000000)">
                                                <g transform="translate(40.000000, 184.000000)">
                                                  <g transform="translate(0.000000, 326.000000)">
                                                    <g transform="translate(50.000000, 253.000000)">
                                                      <g>
                                                        <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z" />
                                                      </g>
                                                    </g>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </svg>
                                      </div>
                                      <div className="shopee-product-rating__like-count">
                                        3
                                      </div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                      <div className="shopee-product-rating__report-menu-button">
                                        <div className="stardust-dropdown">
                                          <div className="stardust-dropdown__item-header">
                                            <div>
                                              <svg width="4px" height="16px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <defs />
                                                <g stroke="none" strokeWidth={1} fillRule="evenodd">
                                                  <g transform="translate(-1301.000000, -550.000000)" fill="#CCCCCC">
                                                    <g transform="translate(155.000000, 92.000000)">
                                                      <g transform="translate(40.000000, 184.000000)">
                                                        <g transform="translate(0.000000, 161.000000)">
                                                          <g>
                                                            <g transform="translate(50.000000, 2.000000)">
                                                              <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111" />
                                                            </g>
                                                          </g>
                                                        </g>
                                                      </g>
                                                    </g>
                                                  </g>
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="stardust-dropdown__item-body">
                                            <div className="shopee-product-rating__report-menu-dropdown">
                                              báo cáo
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="shopee-product-rating">
                                <Link className="shopee-product-rating__avatar" to="/error"><div className="shopee-avatar">
                                    <div className="shopee-avatar__placeholder">
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-headshot">
                                        <g>
                                          <circle cx="7.5" cy="4.5" fill="none" r="3.8" strokeMiterlimit={10} />
                                          <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
                                        </g>
                                      </svg>
                                    </div></div></Link>
                                <div className="shopee-product-rating__main">
                                  <Link className="shopee-product-rating__author-name" to="/error">phanlochang23706</Link>
                                  <div className="repeat-purchase-con">
                                    <div className="shopee-product-rating__rating">
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="shopee-product-rating__time">
                                    2022-09-17 15:52 | Phân loại hàng:
                                    A60-trắng
                                  </div>
                                  <div className="_280jKz"> Áo đẹp mê luôn mn ơi, dày dặn, cầm nặng tay, mặc lên ấm lắm luôn ý, đáng đồng tiền bát gạo ❤️ nhưng ship hàng hơi lâu, vẫn cho 5 sao nha
                                  </div>
                                  <div className="shopee-product-rating__image-list-wrapper">
                                    <div className="rating-media-list">
                                      <div className="rating-media-list__container">
                                        <div className="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive">
                                          <div className="shopee-rating-media-list-image__wrapper">
                                            <div className="shopee-rating-media-list-image__place-holder">
                                              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-loading-image">
                                                <g>
                                                  <rect fill="none" height={8} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={10} x={1} y="4.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="6.5" y2="6.5" />
                                                  <rect fill="none" height={3} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={3} x={11} y="6.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="14.5" y2="14.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={6} x2={6} y1=".5" y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="3.5" x2="3.5" y1={1} y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="8.5" x2="8.5" y1={1} y2={3} />
                                                </g>
                                              </svg>
                                            </div>
                                            <div className="shopee-rating-media-list-image__content" style={{backgroundImage: 'url("http://img.ws.mms.shopee.sg/vn-11134103-22090-flxympzhxkhv40_tn")'}}>
                                              <div className="shopee-rating-media-list-image__content--blur" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive">
                                          <div className="shopee-rating-media-list-image__wrapper">
                                            <div className="shopee-rating-media-list-image__place-holder">
                                              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-loading-image">
                                                <g>
                                                  <rect fill="none" height={8} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={10} x={1} y="4.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="6.5" y2="6.5" />
                                                  <rect fill="none" height={3} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={3} x={11} y="6.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="14.5" y2="14.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={6} x2={6} y1=".5" y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="3.5" x2="3.5" y1={1} y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="8.5" x2="8.5" y1={1} y2={3} />
                                                </g>
                                              </svg>
                                            </div>
                                            <div className="shopee-rating-media-list-image__content" style={{backgroundImage: 'url("http://img.ws.mms.shopee.sg/vn-11134103-22090-ud3lfd4hxkhv7b_tn")'}}>
                                              <div className="shopee-rating-media-list-image__content--blur" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="rating-media-list__zoomed-image">
                                        <div className="rating-media-list-image-carousel" style={{transition: 'all 0ms ease 0s', width: '0px'}}>
                                          <div className="rating-media-list-image-carousel__item-list-wrapper">
                                            <ul className="rating-media-list-image-carousel__item-list" style={{marginLeft: '0px', marginTop: '0px'}}>
                                              <li className="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style={{padding: '0px 0.625rem'}}>
                                                <img className="rating-media-list__zoomed-image-item" src="http://img.ws.mms.shopee.sg/vn-11134103-22090-flxympzhxkhv40" />
                                              </li>
                                              <li className="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style={{padding: '0px 0.625rem'}}>
                                                <img className="rating-media-list__zoomed-image-item" src="http://img.ws.mms.shopee.sg/vn-11134103-22090-ud3lfd4hxkhv7b" />
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--prev rating-media-list-carousel-arrow--hint rating-media-list-carousel-arrow--hidden" role="button" tabIndex={0} style={{opacity: 1, visibility: 'hidden', transform: 'translateX( calc(-50% + 0px))'}}>
                                            <svg enableBackground="new 0 0 13 20" viewBox="0 0 13 20" x={0} y={0} className="shopee-svg-icon icon-arrow-left-bold">
                                              <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                                            </svg>
                                          </div>
                                          <div className="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--next rating-media-list-carousel-arrow--hint" role="button" tabIndex={0} style={{opacity: 1, visibility: 'visible', transform: 'translateX(calc(50% - 0px))'}}>
                                            <svg enableBackground="new 0 0 13 21" viewBox="0 0 13 21" x={0} y={0} className="shopee-svg-icon icon-arrow-right-bold">
                                              <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_3lF5CE">
                                    <div className="_1rc11Y">
                                      phản hồi của Người Bán
                                    </div>
                                    <div className="_2w33Zs"> Gozado xin cám ơn đánh giá của bạn. Chúng tôi rất vui vì bạn đã tin tưởng sử dụng sản phẩm của shop. Chúng tôi luôn hy vọng mang lại sự hài lòng cho Quý khách hàng, chúc bạn luôn vui vẻ và mong bạn tiếp tục ủng hộ Shop trong lần trải nghiệm mua hàng tiếp theo nhé!
                                    </div>
                                  </div>
                                  <div className="shopee-product-rating__actions" style={{justifyContent: 'space-between'}}>
                                    <div style={{display: 'flex'}}>
                                      <div className="shopee-product-rating__like-button">
                                        <svg width="14px" height="13px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                          <defs />
                                          <g stroke="none" strokeWidth={1} fillRule="evenodd">
                                            <g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fillRule="nonzero">
                                              <g transform="translate(155.000000, 92.000000)">
                                                <g transform="translate(40.000000, 184.000000)">
                                                  <g transform="translate(0.000000, 326.000000)">
                                                    <g transform="translate(50.000000, 253.000000)">
                                                      <g>
                                                        <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z" />
                                                      </g>
                                                    </g>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </svg>
                                      </div>
                                      <div className="shopee-product-rating__like-count">
                                        hữu ích?
                                      </div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                      <div className="shopee-product-rating__report-menu-button">
                                        <div className="stardust-dropdown">
                                          <div className="stardust-dropdown__item-header">
                                            <div>
                                              <svg width="4px" height="16px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <defs />
                                                <g stroke="none" strokeWidth={1} fillRule="evenodd">
                                                  <g transform="translate(-1301.000000, -550.000000)" fill="#CCCCCC">
                                                    <g transform="translate(155.000000, 92.000000)">
                                                      <g transform="translate(40.000000, 184.000000)">
                                                        <g transform="translate(0.000000, 161.000000)">
                                                          <g>
                                                            <g transform="translate(50.000000, 2.000000)">
                                                              <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111" />
                                                            </g>
                                                          </g>
                                                        </g>
                                                      </g>
                                                    </g>
                                                  </g>
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="stardust-dropdown__item-body">
                                            <div className="shopee-product-rating__report-menu-dropdown">
                                              báo cáo
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="shopee-product-rating">
                                <Link className="shopee-product-rating__avatar" to="/error"><div className="shopee-avatar">
                                    <div className="shopee-avatar__placeholder">
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-headshot">
                                        <g>
                                          <circle cx="7.5" cy="4.5" fill="none" r="3.8" strokeMiterlimit={10} />
                                          <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
                                        </g>
                                      </svg>
                                    </div></div></Link>
                                <div className="shopee-product-rating__main">
                                  <Link className="shopee-product-rating__author-name" to="/error">buidinhhieu65791</Link>
                                  <div className="repeat-purchase-con">
                                    <div className="shopee-product-rating__rating">
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="shopee-product-rating__time">
                                    2022-09-19 16:03 | Phân loại hàng:
                                    A60-trắng
                                  </div>
                                  <div className="_280jKz"> Chất xinh lắm á huhu, vải mềm mịn, co giãn tốt. Chất lượng quá ưng so với giá ạ. Shop giao hàng đủ và còn có chun làm quà tặng nữa
                                  </div>
                                  <div className="shopee-product-rating__image-list-wrapper">
                                    <div className="rating-media-list">
                                      <div className="rating-media-list__container">
                                        <div className="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive">
                                          <div className="shopee-rating-media-list-image__wrapper">
                                            <div className="shopee-rating-media-list-image__place-holder">
                                              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-loading-image">
                                                <g>
                                                  <rect fill="none" height={8} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={10} x={1} y="4.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="6.5" y2="6.5" />
                                                  <rect fill="none" height={3} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={3} x={11} y="6.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="14.5" y2="14.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={6} x2={6} y1=".5" y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="3.5" x2="3.5" y1={1} y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="8.5" x2="8.5" y1={1} y2={3} />
                                                </g>
                                              </svg>
                                            </div>
                                            <div className="shopee-rating-media-list-image__content" style={{backgroundImage: 'url("http://img.sp.mms.shopee.sg/vn-11134103-22090-jwgcwawnsnhvd6_tn")'}}>
                                              <div className="shopee-rating-media-list-image__content--blur" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive">
                                          <div className="shopee-rating-media-list-image__wrapper">
                                            <div className="shopee-rating-media-list-image__place-holder">
                                              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-loading-image">
                                                <g>
                                                  <rect fill="none" height={8} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={10} x={1} y="4.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="6.5" y2="6.5" />
                                                  <rect fill="none" height={3} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={3} x={11} y="6.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="14.5" y2="14.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={6} x2={6} y1=".5" y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="3.5" x2="3.5" y1={1} y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="8.5" x2="8.5" y1={1} y2={3} />
                                                </g>
                                              </svg>
                                            </div>
                                            <div className="shopee-rating-media-list-image__content" style={{backgroundImage: 'url("http://img.sp.mms.shopee.sg/vn-11134103-22090-ehaal51nsnhvc2_tn")'}}>
                                              <div className="shopee-rating-media-list-image__content--blur" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="rating-media-list__zoomed-image">
                                        <div className="rating-media-list-image-carousel" style={{transition: 'all 0ms ease 0s', width: '0px'}}>
                                          <div className="rating-media-list-image-carousel__item-list-wrapper">
                                            <ul className="rating-media-list-image-carousel__item-list" style={{marginLeft: '0px', marginTop: '0px'}}>
                                              <li className="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style={{padding: '0px 0.625rem'}}>
                                                <img className="rating-media-list__zoomed-image-item" src="http://img.sp.mms.shopee.sg/vn-11134103-22090-jwgcwawnsnhvd6" />
                                              </li>
                                              <li className="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style={{padding: '0px 0.625rem'}}>
                                                <img className="rating-media-list__zoomed-image-item" src="http://img.sp.mms.shopee.sg/vn-11134103-22090-ehaal51nsnhvc2" />
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--prev rating-media-list-carousel-arrow--hint rating-media-list-carousel-arrow--hidden" role="button" tabIndex={0} style={{opacity: 1, visibility: 'hidden', transform: 'translateX(calc(-50% + 0px))'}}>
                                            <svg enableBackground="new 0 0 13 20" viewBox="0 0 13 20" x={0} y={0} className="shopee-svg-icon icon-arrow-left-bold">
                                              <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                                            </svg>
                                          </div>
                                          <div className="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--next rating-media-list-carousel-arrow--hint" role="button" tabIndex={0} style={{opacity: 1, visibility: 'visible', transform: 'translateX(calc(50% - 0px))'}}>
                                            <svg enableBackground="new 0 0 13 21" viewBox="0 0 13 21" x={0} y={0} className="shopee-svg-icon icon-arrow-right-bold">
                                              <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_3lF5CE">
                                    <div className="_1rc11Y">
                                      phản hồi của Người Bán
                                    </div>
                                    <div className="_2w33Zs"> Gozado xin cám ơn đánh giá của bạn. Chúng tôi rất vui vì bạn đã tin tưởng sử dụng sản phẩm của shop. Chúng tôi luôn hy vọng mang lại sự hài lòng cho Quý khách hàng, chúc bạn luôn vui vẻ và mong bạn tiếp tục ủng hộ Shop trong lần trải nghiệm mua hàng tiếp theo nhé!
                                    </div>
                                  </div>
                                  <div className="shopee-product-rating__actions" style={{justifyContent: 'space-between'}}>
                                    <div style={{display: 'flex'}}>
                                      <div className="shopee-product-rating__like-button">
                                        <svg width="14px" height="13px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                          <defs />
                                          <g stroke="none" strokeWidth={1} fillRule="evenodd">
                                            <g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fillRule="nonzero">
                                              <g transform="translate(155.000000, 92.000000)">
                                                <g transform="translate(40.000000, 184.000000)">
                                                  <g transform="translate(0.000000, 326.000000)">
                                                    <g transform="translate(50.000000, 253.000000)">
                                                      <g>
                                                        <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z" />
                                                      </g>
                                                    </g>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </svg>
                                      </div>
                                      <div className="shopee-product-rating__like-count">
                                        hữu ích?
                                      </div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                      <div className="shopee-product-rating__report-menu-button">
                                        <div className="stardust-dropdown">
                                          <div className="stardust-dropdown__item-header">
                                            <div>
                                              <svg width="4px" height="16px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <defs />
                                                <g stroke="none" strokeWidth={1} fillRule="evenodd">
                                                  <g transform="translate(-1301.000000, -550.000000)" fill="#CCCCCC">
                                                    <g transform="translate(155.000000, 92.000000)">
                                                      <g transform="translate(40.000000, 184.000000)">
                                                        <g transform="translate(0.000000, 161.000000)">
                                                          <g>
                                                            <g transform="translate(50.000000, 2.000000)">
                                                              <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111" />
                                                            </g>
                                                          </g>
                                                        </g>
                                                      </g>
                                                    </g>
                                                  </g>
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="stardust-dropdown__item-body">
                                            <div className="shopee-product-rating__report-menu-dropdown">
                                              báo cáo
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="shopee-product-rating">
                                <Link className="shopee-product-rating__avatar" to="/error"><div className="shopee-avatar">
                                    <div className="shopee-avatar__placeholder">
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-headshot">
                                        <g>
                                          <circle cx="7.5" cy="4.5" fill="none" r="3.8" strokeMiterlimit={10} />
                                          <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
                                        </g>
                                      </svg>
                                    </div></div></Link>
                                <div className="shopee-product-rating__main">
                                  <Link className="shopee-product-rating__author-name" to="/error">phamdinhgiang84436</Link>
                                  <div className="repeat-purchase-con">
                                    <div className="shopee-product-rating__rating">
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="shopee-product-rating__time">
                                    2022-09-17 16:07 | Phân loại hàng:
                                    A60-trắng
                                  </div>
                                  <div className="_280jKz"> Áo đẹp và dày dặn lắm ah Giao hàng thì nhanh ạ Đóng gói chắc chắn lắm ạ Mặc lên nhìn đẹp lắm ak
                                  </div>
                                  <div className="shopee-product-rating__image-list-wrapper">
                                    <div className="rating-media-list">
                                      <div className="rating-media-list__container">
                                        <div className="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive">
                                          <div className="shopee-rating-media-list-image__wrapper">
                                            <div className="shopee-rating-media-list-image__place-holder">
                                              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-loading-image">
                                                <g>
                                                  <rect fill="none" height={8} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={10} x={1} y="4.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="6.5" y2="6.5" />
                                                  <rect fill="none" height={3} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={3} x={11} y="6.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="14.5" y2="14.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={6} x2={6} y1=".5" y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="3.5" x2="3.5" y1={1} y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="8.5" x2="8.5" y1={1} y2={3} />
                                                </g>
                                              </svg>
                                            </div>
                                            <div className="shopee-rating-media-list-image__content" style={{backgroundImage: 'url("http://img.ws.mms.shopee.sg/vn-11134103-22090-mfuiapv3xkhv8e_tn")'}}>
                                              <div className="shopee-rating-media-list-image__content--blur" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive">
                                          <div className="shopee-rating-media-list-image__wrapper">
                                            <div className="shopee-rating-media-list-image__place-holder">
                                              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-loading-image">
                                                <g>
                                                  <rect fill="none" height={8} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={10} x={1} y="4.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="6.5" y2="6.5" />
                                                  <rect fill="none" height={3} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={3} x={11} y="6.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="14.5" y2="14.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={6} x2={6} y1=".5" y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="3.5" x2="3.5" y1={1} y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="8.5" x2="8.5" y1={1} y2={3} />
                                                </g>
                                              </svg>
                                            </div>
                                            <div className="shopee-rating-media-list-image__content" style={{backgroundImage: 'url("http://img.ws.mms.shopee.sg/vn-11134103-22090-4ri74ny3xkhveb_tn")'}}>
                                              <div className="shopee-rating-media-list-image__content--blur" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="rating-media-list__zoomed-image">
                                        <div className="rating-media-list-image-carousel" style={{transition: 'all 0ms ease 0s', width: '0px'}}>
                                          <div className="rating-media-list-image-carousel__item-list-wrapper">
                                            <ul className="rating-media-list-image-carousel__item-list" style={{marginLeft: '0px', marginTop: '0px'}}>
                                              <li className="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style={{padding: '0px 0.625rem'}}>
                                                <img className="rating-media-list__zoomed-image-item" src="http://img.ws.mms.shopee.sg/vn-11134103-22090-mfuiapv3xkhv8e" />
                                              </li>
                                              <li className="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style={{padding: '0px 0.625rem'}}>
                                                <img className="rating-media-list__zoomed-image-item" src="http://img.ws.mms.shopee.sg/vn-11134103-22090-4ri74ny3xkhveb" />
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--prev rating-media-list-carousel-arrow--hint rating-media-list-carousel-arrow--hidden" role="button" tabIndex={0} style={{opacity: 1, visibility: 'hidden', transform: 'translateX(calc(-50% + 0px))'}}>
                                            <svg enableBackground="new 0 0 13 20" viewBox="0 0 13 20" x={0} y={0} className="shopee-svg-icon icon-arrow-left-bold">
                                              <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                                            </svg>
                                          </div>
                                          <div className="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--next rating-media-list-carousel-arrow--hint" role="button" tabIndex={0} style={{opacity: 1, visibility: 'visible', transform: 'translateX(calc(50% - 0px))'}}>
                                            <svg enableBackground="new 0 0 13 21" viewBox="0 0 13 21" x={0} y={0} className="shopee-svg-icon icon-arrow-right-bold">
                                              <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_3lF5CE">
                                    <div className="_1rc11Y">
                                      phản hồi của Người Bán
                                    </div>
                                    <div className="_2w33Zs"> Gozado xin cám ơn đánh giá của bạn. Chúng tôi rất vui vì bạn đã tin tưởng sử dụng sản phẩm của shop. Chúng tôi luôn hy vọng mang lại sự hài lòng cho Quý khách hàng, chúc bạn luôn vui vẻ và mong bạn tiếp tục ủng hộ Shop trong lần trải nghiệm mua hàng tiếp theo nhé!
                                    </div>
                                  </div>
                                  <div className="shopee-product-rating__actions" style={{justifyContent: 'space-between'}}>
                                    <div style={{display: 'flex'}}>
                                      <div className="shopee-product-rating__like-button">
                                        <svg width="14px" height="13px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                          <defs />
                                          <g stroke="none" strokeWidth={1} fillRule="evenodd">
                                            <g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fillRule="nonzero">
                                              <g transform="translate(155.000000, 92.000000)">
                                                <g transform="translate(40.000000, 184.000000)">
                                                  <g transform="translate(0.000000, 326.000000)">
                                                    <g transform="translate(50.000000, 253.000000)">
                                                      <g>
                                                        <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z" />
                                                      </g>
                                                    </g>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </svg>
                                      </div>
                                      <div className="shopee-product-rating__like-count">
                                        hữu ích?
                                      </div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                      <div className="shopee-product-rating__report-menu-button">
                                        <div className="stardust-dropdown">
                                          <div className="stardust-dropdown__item-header">
                                            <div>
                                              <svg width="4px" height="16px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <defs />
                                                <g stroke="none" strokeWidth={1} fillRule="evenodd">
                                                  <g transform="translate(-1301.000000, -550.000000)" fill="#CCCCCC">
                                                    <g transform="translate(155.000000, 92.000000)">
                                                      <g transform="translate(40.000000, 184.000000)">
                                                        <g transform="translate(0.000000, 161.000000)">
                                                          <g>
                                                            <g transform="translate(50.000000, 2.000000)">
                                                              <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111" />
                                                            </g>
                                                          </g>
                                                        </g>
                                                      </g>
                                                    </g>
                                                  </g>
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="stardust-dropdown__item-body">
                                            <div className="shopee-product-rating__report-menu-dropdown">
                                              báo cáo
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="shopee-product-rating">
                                <Link className="shopee-product-rating__avatar" to="/error"><div className="shopee-avatar">
                                    <div className="shopee-avatar__placeholder">
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-headshot">
                                        <g>
                                          <circle cx="7.5" cy="4.5" fill="none" r="3.8" strokeMiterlimit={10} />
                                          <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
                                        </g>
                                      </svg>
                                    </div></div></Link>
                                <div className="shopee-product-rating__main">
                                  <Link className="shopee-product-rating__author-name" to="/error">trankiennhanh36068</Link>
                                  <div className="repeat-purchase-con">
                                    <div className="shopee-product-rating__rating">
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="shopee-product-rating__time">
                                    2022-09-17 15:56 | Phân loại hàng:
                                    A60-trắng
                                  </div>
                                  <div className="_280jKz"> hàng okie lắm nhá mng, đóng gói kĩ lăm đó . 10d nhaaaaaaa shop iuu
                                  </div>
                                  <div className="shopee-product-rating__image-list-wrapper">
                                    <div className="rating-media-list">
                                      <div className="rating-media-list__container">
                                        <div className="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive">
                                          <div className="shopee-rating-media-list-image__wrapper">
                                            <div className="shopee-rating-media-list-image__place-holder">
                                              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-loading-image">
                                                <g>
                                                  <rect fill="none" height={8} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={10} x={1} y="4.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="6.5" y2="6.5" />
                                                  <rect fill="none" height={3} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={3} x={11} y="6.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="14.5" y2="14.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={6} x2={6} y1=".5" y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="3.5" x2="3.5" y1={1} y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="8.5" x2="8.5" y1={1} y2={3} />
                                                </g>
                                              </svg>
                                            </div>
                                            <div className="shopee-rating-media-list-image__content" style={{backgroundImage: 'url("http://img.ws.mms.shopee.sg/vn-11134103-22090-8en9r2vnxkhvaf_tn")'}}>
                                              <div className="shopee-rating-media-list-image__content--blur" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive">
                                          <div className="shopee-rating-media-list-image__wrapper">
                                            <div className="shopee-rating-media-list-image__place-holder">
                                              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-loading-image">
                                                <g>
                                                  <rect fill="none" height={8} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={10} x={1} y="4.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="6.5" y2="6.5" />
                                                  <rect fill="none" height={3} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={3} x={11} y="6.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="14.5" y2="14.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={6} x2={6} y1=".5" y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="3.5" x2="3.5" y1={1} y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="8.5" x2="8.5" y1={1} y2={3} />
                                                </g>
                                              </svg>
                                            </div>
                                            <div className="shopee-rating-media-list-image__content" style={{backgroundImage: 'url("http://img.ws.mms.shopee.sg/vn-11134103-22090-7ags84ynxkhvf3_tn")'}}>
                                              <div className="shopee-rating-media-list-image__content--blur" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="rating-media-list__zoomed-image">
                                        <div className="rating-media-list-image-carousel" style={{transition: 'all 0ms ease 0s', width: '0px'}}>
                                          <div className="rating-media-list-image-carousel__item-list-wrapper">
                                            <ul className="rating-media-list-image-carousel__item-list" style={{marginLeft: '0px', marginTop: '0px'}}>
                                              <li className="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style={{padding: '0px 0.625rem'}}>
                                                <img className="rating-media-list__zoomed-image-item" src="http://img.ws.mms.shopee.sg/vn-11134103-22090-8en9r2vnxkhvaf" />
                                              </li>
                                              <li className="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style={{padding: '0px 0.625rem'}}>
                                                <img className="rating-media-list__zoomed-image-item" src="http://img.ws.mms.shopee.sg/vn-11134103-22090-7ags84ynxkhvf3" />
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--prev rating-media-list-carousel-arrow--hint rating-media-list-carousel-arrow--hidden" role="button" tabIndex={0} style={{opacity: 1, visibility: 'hidden', transform: 'translateX(calc(-50% + 0px))'}}>
                                            <svg enableBackground="new 0 0 13 20" viewBox="0 0 13 20" x={0} y={0} className="shopee-svg-icon icon-arrow-left-bold">
                                              <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                                            </svg>
                                          </div>
                                          <div className="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--next rating-media-list-carousel-arrow--hint" role="button" tabIndex={0} style={{opacity: 1, visibility: 'visible', transform: 'translateX(calc(50% - 0px))'}}>
                                            <svg enableBackground="new 0 0 13 21" viewBox="0 0 13 21" x={0} y={0} className="shopee-svg-icon icon-arrow-right-bold">
                                              <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_3lF5CE">
                                    <div className="_1rc11Y">
                                      phản hồi của Người Bán
                                    </div>
                                    <div className="_2w33Zs"> Gozado xin cám ơn đánh giá của bạn. Chúng tôi rất vui vì bạn đã tin tưởng sử dụng sản phẩm của shop. Chúng tôi luôn hy vọng mang lại sự hài lòng cho Quý khách hàng, chúc bạn luôn vui vẻ và mong bạn tiếp tục ủng hộ Shop trong lần trải nghiệm mua hàng tiếp theo nhé!
                                    </div>
                                  </div>
                                  <div className="shopee-product-rating__actions" style={{justifyContent: 'space-between'}}>
                                    <div style={{display: 'flex'}}>
                                      <div className="shopee-product-rating__like-button">
                                        <svg width="14px" height="13px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                          <defs />
                                          <g stroke="none" strokeWidth={1} fillRule="evenodd">
                                            <g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fillRule="nonzero">
                                              <g transform="translate(155.000000, 92.000000)">
                                                <g transform="translate(40.000000, 184.000000)">
                                                  <g transform="translate(0.000000, 326.000000)">
                                                    <g transform="translate(50.000000, 253.000000)">
                                                      <g>
                                                        <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z" />
                                                      </g>
                                                    </g>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </svg>
                                      </div>
                                      <div className="shopee-product-rating__like-count">
                                        hữu ích?
                                      </div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                      <div className="shopee-product-rating__report-menu-button">
                                        <div className="stardust-dropdown">
                                          <div className="stardust-dropdown__item-header">
                                            <div>
                                              <svg width="4px" height="16px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <defs />
                                                <g stroke="none" strokeWidth={1} fillRule="evenodd">
                                                  <g transform="translate(-1301.000000, -550.000000)" fill="#CCCCCC">
                                                    <g transform="translate(155.000000, 92.000000)">
                                                      <g transform="translate(40.000000, 184.000000)">
                                                        <g transform="translate(0.000000, 161.000000)">
                                                          <g>
                                                            <g transform="translate(50.000000, 2.000000)">
                                                              <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111" />
                                                            </g>
                                                          </g>
                                                        </g>
                                                      </g>
                                                    </g>
                                                  </g>
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="stardust-dropdown__item-body">
                                            <div className="shopee-product-rating__report-menu-dropdown">
                                              báo cáo
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="shopee-product-rating">
                                <Link className="shopee-product-rating__avatar" to="/error"><div className="shopee-avatar">
                                    <div className="shopee-avatar__placeholder">
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-headshot">
                                        <g>
                                          <circle cx="7.5" cy="4.5" fill="none" r="3.8" strokeMiterlimit={10} />
                                          <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
                                        </g>
                                      </svg>
                                    </div></div></Link>
                                <div className="shopee-product-rating__main">
                                  <Link className="shopee-product-rating__author-name" to="/error">duongthanhhoang44674</Link>
                                  <div className="repeat-purchase-con">
                                    <div className="shopee-product-rating__rating">
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="shopee-product-rating__time">
                                    2022-09-17 17:00 | Phân loại hàng:
                                    A60-trắng
                                  </div>
                                  <div className="_280jKz"> Đã nhận được hàng, chất lượng ổn lắm nha, vải ok lắm, mặc lên mát . Đồ rộng mặc thoải mái lắm nhe, mình 58kg mặc rất thoải mái với rộng lắm nha
                                  </div>
                                  <div className="shopee-product-rating__image-list-wrapper">
                                    <div className="rating-media-list">
                                      <div className="rating-media-list__container">
                                        <div className="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive">
                                          <div className="shopee-rating-media-list-image__wrapper">
                                            <div className="shopee-rating-media-list-image__place-holder">
                                              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-loading-image">
                                                <g>
                                                  <rect fill="none" height={8} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={10} x={1} y="4.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="6.5" y2="6.5" />
                                                  <rect fill="none" height={3} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={3} x={11} y="6.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="14.5" y2="14.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={6} x2={6} y1=".5" y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="3.5" x2="3.5" y1={1} y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="8.5" x2="8.5" y1={1} y2={3} />
                                                </g>
                                              </svg>
                                            </div>
                                            <div className="shopee-rating-media-list-image__content" style={{backgroundImage: 'url("http://img.ws.mms.shopee.sg/vn-11134103-22090-aaikvkwxzkhv22_tn")'}}>
                                              <div className="shopee-rating-media-list-image__content--blur" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive">
                                          <div className="shopee-rating-media-list-image__wrapper">
                                            <div className="shopee-rating-media-list-image__place-holder">
                                              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-loading-image">
                                                <g>
                                                  <rect fill="none" height={8} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={10} x={1} y="4.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="6.5" y2="6.5" />
                                                  <rect fill="none" height={3} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} width={3} x={11} y="6.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={1} x2={11} y1="14.5" y2="14.5" />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={6} x2={6} y1=".5" y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="3.5" x2="3.5" y1={1} y2={3} />
                                                  <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="8.5" x2="8.5" y1={1} y2={3} />
                                                </g>
                                              </svg>
                                            </div>
                                            <div className="shopee-rating-media-list-image__content" style={{backgroundImage: 'url("http://img.ws.mms.shopee.sg/vn-11134103-22090-exy4kg7xzkhv2d_tn")'}}>
                                              <div className="shopee-rating-media-list-image__content--blur" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="rating-media-list__zoomed-image">
                                        <div className="rating-media-list-image-carousel" style={{transition: 'all 0ms ease 0s', width: '0px'}}>
                                          <div className="rating-media-list-image-carousel__item-list-wrapper">
                                            <ul className="rating-media-list-image-carousel__item-list" style={{marginLeft: '0px', marginTop: '0px'}}>
                                              <li className="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style={{padding: '0px 0.625rem'}}>
                                                <img className="rating-media-list__zoomed-image-item" src="http://img.ws.mms.shopee.sg/vn-11134103-22090-aaikvkwxzkhv22" />
                                              </li>
                                              <li className="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style={{padding: '0px 0.625rem'}}>
                                                <img className="rating-media-list__zoomed-image-item" src="http://img.ws.mms.shopee.sg/vn-11134103-22090-exy4kg7xzkhv2d" />
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--prev rating-media-list-carousel-arrow--hint rating-media-list-carousel-arrow--hidden" role="button" tabIndex={0} style={{opacity: 1, visibility: 'hidden', transform: 'translateX(calc(-50% + 0px))'}}>
                                            <svg enableBackground="new 0 0 13 20" viewBox="0 0 13 20" x={0} y={0} className="shopee-svg-icon icon-arrow-left-bold">
                                              <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                                            </svg>
                                          </div>
                                          <div className="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--next rating-media-list-carousel-arrow--hint" role="button" tabIndex={0} style={{opacity: 1, visibility: 'visible', transform: 'translateX( calc(50% - 0px))'}}>
                                            <svg enableBackground="new 0 0 13 21" viewBox="0 0 13 21" x={0} y={0} className="shopee-svg-icon icon-arrow-right-bold">
                                              <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_3lF5CE">
                                    <div className="_1rc11Y">
                                      phản hồi của Người Bán
                                    </div>
                                    <div className="_2w33Zs"> Gozado xin cám ơn đánh giá của bạn. Chúng tôi rất vui vì bạn đã tin tưởng sử dụng sản phẩm của shop. Chúng tôi luôn hy vọng mang lại sự hài lòng cho Quý khách hàng, chúc bạn luôn vui vẻ và mong bạn tiếp tục ủng hộ Shop trong lần trải nghiệm mua hàng tiếp theo nhé!
                                    </div>
                                  </div>
                                  <div className="shopee-product-rating__actions" style={{justifyContent: 'space-between'}}>
                                    <div style={{display: 'flex'}}>
                                      <div className="shopee-product-rating__like-button">
                                        <svg width="14px" height="13px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                          <defs />
                                          <g stroke="none" strokeWidth={1} fillRule="evenodd">
                                            <g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fillRule="nonzero">
                                              <g transform="translate(155.000000, 92.000000)">
                                                <g transform="translate(40.000000, 184.000000)">
                                                  <g transform="translate(0.000000, 326.000000)">
                                                    <g transform="translate(50.000000, 253.000000)">
                                                      <g>
                                                        <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z" />
                                                      </g>
                                                    </g>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </svg>
                                      </div>
                                      <div className="shopee-product-rating__like-count">
                                        hữu ích?
                                      </div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                      <div className="shopee-product-rating__report-menu-button">
                                        <div className="stardust-dropdown">
                                          <div className="stardust-dropdown__item-header">
                                            <div>
                                              <svg width="4px" height="16px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <defs />
                                                <g stroke="none" strokeWidth={1} fillRule="evenodd">
                                                  <g transform="translate(-1301.000000, -550.000000)" fill="#CCCCCC">
                                                    <g transform="translate(155.000000, 92.000000)">
                                                      <g transform="translate(40.000000, 184.000000)">
                                                        <g transform="translate(0.000000, 161.000000)">
                                                          <g>
                                                            <g transform="translate(50.000000, 2.000000)">
                                                              <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111" />
                                                            </g>
                                                          </g>
                                                        </g>
                                                      </g>
                                                    </g>
                                                  </g>
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="stardust-dropdown__item-body">
                                            <div className="shopee-product-rating__report-menu-dropdown">
                                              báo cáo
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="shopee-page-controller product-ratings__page-controller">
                              <button className="shopee-icon-button shopee-icon-button--left">
                                <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="shopee-svg-icon icon-arrow-left">
                                  <g>
                                    <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z" />
                                  </g>
                                </svg></button><button className="shopee-button-solid shopee-button-solid--primary">
                                1</button><button className="shopee-button-no-outline">
                                2</button><button className="shopee-icon-button shopee-icon-button--right">
                                <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="shopee-svg-icon icon-arrow-right">
                                  <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="recommendation-by-carousel">
                        <div>
                          <div className="shopee-header-section _3ulhZf shopee-header-section--simple">
                            <div className="shopee-header-section__header">
                              <div className="shopee-header-section__header__title">
                                <div>Các sản phẩm khác của Shop</div>
                              </div>
                              <Link className="shopee-header-section__header-link" tabIndex={-1} to="/error"><button className="shopee-button-no-outline">
                                  Xem tất cả&nbsp;<svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="shopee-svg-icon icon-arrow-right">
                                    <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                                  </svg></button></Link>
                            </div>
                            <div className="shopee-header-section__content" />
                          </div>
                          <div className="image-carousel _3Q6X5P">
                            <div className="image-carousel__item-list-wrapper">
                              <ul className="image-carousel__item-list" style={{width: '400%', transform: 'translate(0px, 0px)'}}>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img width="invalid-value" height="invalid-value" alt="Áo len nữ dài tay LOZADO áo len nữ cổ vuông dáng bo hàng quảng châu cao cấp - A28" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/62baa96c58f4add1a97fec42e3a1b01a_tn" />
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="XLp7cA">
                                                <div className="_3ymATw _1YhAOv _3plgYm">
                                                  <span className="percent">29%</span><span className="_3BdfRf">giảm</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo len nữ dài tay LOZADO áo
                                                  len nữ cổ vuông dáng bo hàng
                                                  quảng châu cao cấp - A28
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">89.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 240
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img width="invalid-value" height="invalid-value" alt="Áo khoác cardigan nữ LOZADO áo khoác nữ kẻ caro dáng croptop trẻ trung năng động - A665" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/4daf00f76118091e2c9624e75251270a_tn" />
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo khoác cardigan nữ LOZADO
                                                  áo khoác nữ kẻ caro dáng
                                                  croptop trẻ trung năng động
                                                  - A665
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">210.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 242
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img width="invalid-value" height="invalid-value" alt="Áo len nữ dài tay LOZADO áo kiểu nữ tay dài cổ tim chất len gân tăm dày dặn hàng đẹp - A690" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/58f7adb9fb31ed7f1ccfb8a59c145035_tn" />
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="XLp7cA">
                                                <div className="_3ymATw _1YhAOv _3plgYm">
                                                  <span className="percent">41%</span><span className="_3BdfRf">giảm</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo len nữ dài tay LOZADO áo
                                                  kiểu nữ tay dài cổ tim chất
                                                  len gân tăm dày dặn hàng đẹp
                                                  - A690
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">59.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 243
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img width="invalid-value" height="invalid-value" alt="Áo len nữ dài tay áo len nữ croptop siêu mềm mịn sang chảnh Lozado - Mã A77" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/44e80ec1cb5dace0004ba325eff90026_tn" />
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="XLp7cA">
                                                <div className="_3ymATw _1YhAOv _3plgYm">
                                                  <span className="percent">29%</span><span className="_3BdfRf">giảm</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo len nữ dài tay áo len nữ
                                                  croptop siêu mềm mịn sang
                                                  chảnh Lozado - Mã A77
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">89.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 239
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img width="invalid-value" height="invalid-value" alt="Áo khoác cardigan nữ LOZADO áo khoác len thừng kiểu dáng học sinh trẻ trung hàng đẹp cao cấp - A228" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/1c2f4b683830745c9b0fb8e3160474aa_tn" />
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="XLp7cA">
                                                <div className="_3ymATw _1YhAOv _3plgYm">
                                                  <span className="percent">34%</span><span className="_3BdfRf">giảm</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo khoác cardigan nữ LOZADO
                                                  áo khoác len thừng kiểu dáng
                                                  học sinh trẻ trung hàng đẹp
                                                  cao cấp - A228
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">199.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 236
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img width="invalid-value" height="invalid-value" alt="Áo khoác cardigan nữ LOZADO áo khoác nữ kẻ caro dáng croptop trẻ trung năng động - A665" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/4daf00f76118091e2c9624e75251270a_tn" />
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo khoác cardigan nữ LOZADO
                                                  áo khoác nữ kẻ caro dáng
                                                  croptop trẻ trung năng động
                                                  - A665
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">210.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 242
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="XLp7cA">
                                                <div className="_3ymATw _1YhAOv _3plgYm">
                                                  <span className="percent">35%</span><span className="_3BdfRf">giảm</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo khoác cardigan nữ LOZADO
                                                  áo khoác len nữ hạo tiết kẻ
                                                  sọc xương cá hàng dày đặn
                                                  cao cấp - A672
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">179.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 216
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="XLp7cA">
                                                <div className="_3ymATw _1YhAOv _3plgYm">
                                                  <span className="percent">32%</span><span className="_3BdfRf">giảm</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo khoác cardigan nữ LOZADO
                                                  áo khoác len họa tiết kẻ sọc
                                                  chéo trẻ trung hàng cao cấp
                                                  Quảng Châu - A285
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">169.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 231
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Quần bom nữ LOZADO quần
                                                  jogger thêu chữ SPUN dáng
                                                  unisex trẻ trung nắng động -
                                                  Q662
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">50.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 238
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="XLp7cA">
                                                <div className="_3ymATw _1YhAOv _3plgYm">
                                                  <span className="percent">42%</span><span className="_3BdfRf">giảm</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo gile len nữ áo len nữ
                                                  quảng châu kẻ Caro cá tính
                                                  trẻ trung LOZADO - MÃ A26
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">105.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 233
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="XLp7cA">
                                                <div className="_3ymATw _1YhAOv _3plgYm">
                                                  <span className="percent">43%</span><span className="_3BdfRf">giảm</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo gile nữ LOZADO áo gile
                                                  len học sinh kiểu dáng Hàn
                                                  Quốc chất len dày dặn hàng
                                                  đẹp - A68
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">99.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 326
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo khoác len cardigan LOZADO
                                                  dáng croptop họa tiết caro
                                                  phong cách trẻ trung Hàn
                                                  Quốc - A144
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">50.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 213
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="XLp7cA">
                                                <div className="_3ymATw _1YhAOv _3plgYm">
                                                  <span className="percent">44%</span><span className="_3BdfRf">giảm</span>
                                                </div>
                                              </div>
                                              <div className="_1Ao_PS">
                                                <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon _1wZ-SW icon-video-play2">
                                                  <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                                  <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                                </svg>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo sơ mi nữ LOZADO áo sơ mi
                                                  tay dài phối cúc đen thiết
                                                  kế dáng học sinh công sở
                                                  lịch sự A563
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">89.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 4
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo len nữ LOZADO tay dài
                                                  dáng cardigan dáng ngắn chất
                                                  len mongtoghi cổ V phối cúc
                                                  sang chảnh - A313
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">50.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 236
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="XLp7cA">
                                                <div className="_3ymATw _1YhAOv _3plgYm">
                                                  <span className="percent">27%</span><span className="_3BdfRf">giảm</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo khoác cardigan nữ LOZADO
                                                  áo khoác ngoài form rộng họa
                                                  tiết da báo hồng xinh xắn
                                                  nhẹ nhàng - A120
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">169.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 229
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo gile len nữ LOZADO áo
                                                  gile họa tiết thổ cẩm quả
                                                  trám chất dày dặn hàng đẹp -
                                                  A129
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">50.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 217
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo len nữ tay dài LOZADO áo
                                                  len đũa cài cúc form ôm body
                                                  chất len QC hàng đẹp - A685
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">50.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 213
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Quần dài nữ ống xuông LOZADO
                                                  quần thể thao kẻ sọc viền
                                                  dáng unisex ống rộng cạp
                                                  chun chất dày dặn - Q452
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">50.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 238
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="XLp7cA">
                                                <div className="_3ymATw _1YhAOv _3plgYm">
                                                  <span className="percent">20%</span><span className="_3BdfRf">giảm</span>
                                                </div>
                                              </div>
                                              <div className="_1Ao_PS">
                                                <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon _1wZ-SW icon-video-play2">
                                                  <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                                  <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                                </svg>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo sơ mi nữ LOZADO áo sơ mi
                                                  tay lỡ form rộng thiết kế
                                                  rút dây 2 bên hông vạt bầu
                                                  nữ tính trẻ trung A18
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">68.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 414
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="XLp7cA">
                                                <div className="_3ymATw _1YhAOv _3plgYm">
                                                  <span className="percent">24%</span><span className="_3BdfRf">giảm</span>
                                                </div>
                                              </div>
                                              <div className="_1Ao_PS">
                                                <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon _1wZ-SW icon-video-play2">
                                                  <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                                  <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                                </svg>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo khoác cardigan LOZADO áo
                                                  khoác ngoài họa tiết kẻ caro
                                                  Hàn Quốc dáng dài form rộng
                                                  trẻ trung A519
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">185.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 225
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="XLp7cA">
                                                <div className="_3ymATw _1YhAOv _3plgYm">
                                                  <span className="percent">26%</span><span className="_3BdfRf">giảm</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo gile nữ LOZADO áo gile
                                                  len kẻ caro sọc xiên
                                                  hottrend kiểu dáng Hàn Quốc
                                                  A521
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">129.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 236
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Quần bom nữ LOZADO quần
                                                  jogger nữ chất tổ ong dày
                                                  dặn kẻ sọc viền trẻ trung -
                                                  Q99
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">50.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 229
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                                <li className="image-carousel__item" style={{padding: '0px', width: '16.6667%'}}>
                                  <div className="product-recommend-items__item-wrapper">
                                    <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                        <div className="coBmRL">
                                          <div style={{pointerEvents: 'none'}}>
                                            <div className="_1OPdfl _1rxM_s">
                                              <img className="jurjR2 _1dm3pu" />
                                              <div className="_3tsgCj">
                                                <div className="shopee-image-placeholder">
                                                  <svg enableBackground="new 0 0 54 61" viewBox="0 0 54 61" role="img" className="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                                    <path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="_1k26So">
                                                <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                                  <span className="_3vR9Hw">Yêu thích</span>
                                                </div>
                                              </div>
                                              <div className="_3NWV2h">
                                                <div className="customized-overlay-image">
                                                  <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_17jkOb">
                                            <div className="_23nxVH">
                                              <div className="ECt7xl">
                                                <div className="_3QnFZz GqFUA_">
                                                  Áo gile len nữ LOZADO áo
                                                  gile thổ cẩm dáng rộng màu
                                                  xinh nhẹ nhàng - A453
                                                </div>
                                              </div>
                                            </div>
                                            <div className="_1pkNgj Ta45uF">
                                              <div className="HlRyAu _10ZNUE">
                                                <span className="_34hjO9">₫</span><span className="T871Oz">50.000</span>
                                              </div>
                                              <div className="_2FavkD _2xMxYv">
                                                Đã bán 55
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div></Link>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="carousel-arrow carousel-arrow--prev carousel-arrow--hint carousel-arrow--hidden" role="button" tabIndex={0} style={{opacity: 1, visibility: 'hidden', transform: 'translateX(calc(-50% + 5px))'}}>
                              <svg enableBackground="new 0 0 13 20" viewBox="0 0 13 20" x={0} y={0} className="shopee-svg-icon icon-arrow-left-bold">
                                <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                              </svg>
                            </div>
                            <div className="carousel-arrow carousel-arrow--next carousel-arrow--hint" role="button" tabIndex={0} style={{opacity: 1, visibility: 'visible', transform: 'translateX(calc(50% - 5px))'}}>
                              <svg enableBackground="new 0 0 13 21" viewBox="0 0 13 21" x={0} y={0} className="shopee-svg-icon icon-arrow-right-bold">
                                <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shopee-header-section shopee-header-section--simple">
                        <div className="shopee-header-section__header">
                          <div className="shopee-header-section__header__title">
                            <div>Có thể bạn cũng thích</div>
                          </div>
                        </div>
                        <div className="shopee-header-section__content" />
                      </div>
                      <div className="_2qsKok row">
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/c9789282e3d71bc9e273cef43e171200_tn" alt="áo khoác len cardigan trắng phối viền sọc đen chất len đẹp QCCC dáng rộng phong cách Hàn Quốc A60 SUTANO" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _3OQcdp" style={{color: 'rgb(242, 82, 32)'}}>
                                          <div className="_3Wntrk xfarqW" />
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">28%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/45e81cbd1bcfd8f0a2744b57fa61a67c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          áo khoác len cardigan trắng phối
                                          viền sọc đen chất len đẹp QCCC dáng
                                          rộng phong cách Hàn Quốc A60 SUTANO
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">179.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 1,4k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="ÁO CHOÀNG CADIGAN TÚI GẤU" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/b8e50e13a1c0dc2dff5520e3c72ae0ef_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">27%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          ÁO CHOÀNG CADIGAN TÚI GẤU
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246, 145, 19)'}}>
                                            Giảm ₫5k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">139.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 19
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="[VIDEO THẬT]  Áo khoác len cardigan đen viền sọc trắng có túi cổ V phong cách hàn quốc basic nhẹ nhàng" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/86780cf0ae5544b01c7f9f10a39e5511_tn" />
                                      <div className="_1Ao_PS">
                                        <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon _1wZ-SW icon-video-play2">
                                          <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                          <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          [VIDEO THẬT] Áo khoác len cardigan
                                          đen viền sọc trắng có túi cổ V phong
                                          cách hàn quốc basic nhẹ nhàng
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">175.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 6
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo Khoác Cadigan Thêu Chữ Phối 2 Màu Áo Khoác Cadigan viền khuy ulzzang Len Dệt Mềm Mại Phù Hợp Cho Mùa Thu Đông Ak1281" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/571d9738cf8fe7ec934b58a923d3c9f1_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _3OQcdp" style={{color: 'rgb(242, 82, 32)'}}>
                                          <div className="_3Wntrk xfarqW" />
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">40%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo Khoác Cadigan Thêu Chữ Phối 2 Màu
                                          Áo Khoác Cadigan viền khuy ulzzang
                                          Len Dệt Mềm Mại Phù Hợp Cho Mùa Thu
                                          Đông Ak1281
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246, 145,19)'}}>
                                            Giảm ₫5k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">178.800</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 867
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo Khoác Cardigan M Tay Hoa Màu Be Ulzzang Hàn Quốc" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/da803c0ced7b2153e32d4b77e4ea51b7_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">42%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon _1wZ-SW icon-video-play2">
                                          <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                          <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                        </svg>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/f2cb1f82803139f5ef324d71f4838f0c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo Khoác Cardigan M Tay Hoa Màu Be
                                          Ulzzang Hàn Quốc
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopXuHuong
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">74.900</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 3,1k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo len Cardigan phối viền nữ , áo thu đông form rộng cho nữ dưới 65kg" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/2702d5a321a89fdd964d6f805698e943_tn" />
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">50%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo len Cardigan phối viền nữ , áo
                                          thu đông form rộng cho nữ dưới 65kg
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246,145,19)'}}>
                                            Giảm ₫5k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">189.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 3,3k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo Khoác Cadigan Len 2 Màu Phối Thêu Chữ Dáng Rộng Áo Khoác Thu Đông Mềm Mịn Phong Cách Hàn Quốc Ak1281" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/3bc909add77332a95b6124be90b8a8ca_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _3OQcdp" style={{color: 'rgb(242, 82, 32)'}}>
                                          <div className="_3Wntrk xfarqW" />
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">40%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/45e81cbd1bcfd8f0a2744b57fa61a67c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo Khoác Cadigan Len 2 Màu Phối Thêu
                                          Chữ Dáng Rộng Áo Khoác Thu Đông Mềm
                                          Mịn Phong Cách Hàn Quốc Ak1281
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">179.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 291
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo Khoác Len Cadigan Tay Dài From Rộng Họa Tiết Dệt Gấu 2 Túi Phong Cách Hàn Quốc Đáng yêu Ak794" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/1df7fbe1f82f98f3b0579ba258c9dc0b_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">42%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/cdeb7ed58aa5f3e2f6aa1a95c189bc55" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo Khoác Len Cadigan Tay Dài From
                                          Rộng Họa Tiết Dệt Gấu 2 Túi Phong
                                          Cách Hàn Quốc Đáng yêu Ak794
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb( 246,145, 19)'}}>
                                            Giảm ₫5k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopXuHuong
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">169.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 45
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="[VIDEO THẬT]  Áo khoác len cardigan trơn tay sọc ngang nổi bật cổ tim V khuy áo đen ulzzang" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/f11866ca5a898b0d0372ffbd68c68971_tn" />
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          [VIDEO THẬT] Áo khoác len cardigan
                                          trơn tay sọc ngang nổi bật cổ tim V
                                          khuy áo đen ulzzang
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">170.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 15
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo khoác cardigan lông thỏ dáng rộng hoạ tiết kim cương áo khoác len phong cách Hàn Quốc" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/8873b313a55338a42908d0cc3d3c88a4_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _3OQcdp" style={{color: 'rgb(242, 82, 32)'}}>
                                          <div className="_3Wntrk xfarqW" />
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">47%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo khoác cardigan lông thỏ dáng rộng
                                          hoạ tiết kim cương áo khoác len
                                          phong cách Hàn Quốc
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb( 246,145,19)'}}>
                                            Giảm ₫20k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">185.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 21,2k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo Cardigan Len Nữ CIMOTY áo khoác cardigan 3 màu XÁM, ĐEN,TRẮNG Ulzzang Hàn Quốc" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/4525ac2b5b04ebbe187eb76879fd31ef_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo Cardigan Len Nữ CIMOTY áo khoác
                                          cardigan 3 màu XÁM, ĐEN,TRẮNG
                                          Ulzzang Hàn Quốc
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246,145, 19)'}}>
                                            Giảm ₫10k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">298.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 225
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo khoác cadigan huy hiệu NHIỀU MẪU" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/a5c54e09c687e1d1e8300efd06b76dbf_tn" />
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">47%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon _1wZ-SW icon-video-play2">
                                          <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                          <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                        </svg>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo khoác cadigan huy hiệu NHIỀU MẪU
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246,145,19)'}}>
                                            Giảm ₫3k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_2s03Go">Flash Sale</div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">149.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 5,5k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo khoác len cardigan dáng dài thiết kế kẻ sọc viền phối túi gấu xinh xắn trẻ trung NHẬT LINH - A52" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/99bb496a37275fa5523768a6d6fb6688_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo khoác len cardigan dáng dài thiết
                                          kế kẻ sọc viền phối túi gấu xinh xắn
                                          trẻ trung NHẬT LINH - A52
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">50.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 231
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo cardigan len thừng dáng dài form rộng dày dặn hàng quảng châu loại 1" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/aa6ec2f42a08fc109486d5310c0e1140_tn" />
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">48%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/cdeb7ed58aa5f3e2f6aa1a95c189bc55" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo cardigan len thừng dáng dài form
                                          rộng dày dặn hàng quảng châu loại 1
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246,145,19)'}}>
                                            Giảm ₫5k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">209.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 176
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="[VIDEO THẬT] Áo khoác len cardigan chữ F màu xanh dương hothit cổ V oversize trùm mông ulzzang dáng xinh" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/958c0d6956a092a27c3e3da993e314b0_tn" />
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          [VIDEO THẬT] Áo khoác len cardigan
                                          chữ F màu xanh dương hothit cổ V
                                          oversize trùm mông ulzzang dáng xinh
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">169.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 12
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Cardigan len nữ dài tay dễ thương, áo len hàn quốc kiểu phối màu đen trắng LADY" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/a1a3cb1d81229ad2b8cebec1a62af506_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">37%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Cardigan len nữ dài tay dễ thương,
                                          áo len hàn quốc kiểu phối màu đen
                                          trắng LADY
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246, 145,19)'}}>
                                            Giảm ₫199k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">179.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 4,9k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo cadigan học sinh trắng viền đen hàng Quảng Châu loại 1" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/83730c04b1ffca3892ba0213714fb654_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">33%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo cadigan học sinh trắng viền đen
                                          hàng Quảng Châu loại 1
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246,145,19)'}}>
                                            Giảm ₫9k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">185.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 360
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/c9789282e3d71bc9e273cef43e171200_tn" alt="Áo khoác len cardigan NHẬT LINH áo len nữ trắng phối viền sọc đe phong cách Hàn Quốc - A60" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">28%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo khoác len cardigan NHẬT LINH áo
                                          len nữ trắng phối viền sọc đe phong
                                          cách Hàn Quốc - A60
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">179.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 234
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="[HÀNG LOẠI 1] ÁO LEN CADIGAN THỪNG XÁM HUY HIỆU SIÊU XINH - HÀNG QUẢNG CHÂU CAO CẤP" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/b38606c5780bacb3f675c261937288c3_tn" />
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">40%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          [HÀNG LOẠI 1] ÁO LEN CADIGAN THỪNG
                                          XÁM HUY HIỆU SIÊU XINH - HÀNG QUẢNG
                                          CHÂU CAO CẤP
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopXuHuong
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">175.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 108
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Cardigan Nữ Họa Tiết Chất Len Dày Dặn, Áo Choàng Hàng Quảng Châu Cao Cấp" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/a22e279ecc1c64b2a5c7a5ff064ff238_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">49%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/f2cb1f82803139f5ef324d71f4838f0c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Cardigan Nữ Họa Tiết Chất Len Dày
                                          Dặn, Áo Choàng Hàng Quảng Châu Cao
                                          Cấp
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246,145,19)'}}>
                                            Giảm ₫3k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">169.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 12,2k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo khoác len cardigan màu nâu và đen quả trám kim cương thích hợp trời đà lạt mùa thu đông ullzang" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/527c06571400a022d9ad513945cb30cc_tn" />
                                      <div className="_1Ao_PS">
                                        <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon _1wZ-SW icon-video-play2">
                                          <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                          <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo khoác len cardigan màu nâu và đen
                                          quả trám kim cương thích hợp trời đà
                                          lạt mùa thu đông ullzang
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">165.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 8
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="[Mã SKAMLTS279 giảm 15K đơn 0Đ] (CÓ SẴN) Cardigan áo len phù hợp mùa xuân và mùa thu phong cách Hàn Quốc" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/d025a97e15fa7a6d8d4a5df55cbf642e_tn" />
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          [Mã SKAMLTS279 giảm 15K đơn 0Đ] (CÓ
                                          SẴN) Cardigan áo len phù hợp mùa
                                          xuân và mùa thu phong cách Hàn Quốc
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246, 145,19)'}}>
                                            Giảm ₫10k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopXuHuong
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">295.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 10
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo khoác len cadigan màu đen trắng thu đông dày dặn VAVASA CD16" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/5fea3a4896698c11625c2ae119405aa1_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">4%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/45e81cbd1bcfd8f0a2744b57fa61a67c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo khoác len cadigan màu đen trắng
                                          thu đông dày dặn VAVASA CD16
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">230.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 692
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo cadigan len viền Quảng Châu ❤️Khoác len dài 🔸cadigan pha màu trẻ trung" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/dbbfbd682c1c1a54d0eff715f8b3ab48_tn" />
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">37%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon _1wZ-SW icon-video-play2">
                                          <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                          <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                        </svg>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo cadigan len viền Quảng Châu
                                          ❤️Khoác len dài 🔸cadigan pha màu
                                          trẻ trung
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopXuHuong
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">130.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 2,9k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo khoác len cardigan 2022, áo cardigan len nữ màu trắng đen thời trang thu đông hàn quốc" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/7fe397c0ff082f105857e2956c2e7a09_tn" />
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">24%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon _1wZ-SW icon-video-play2">
                                          <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                          <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo khoác len cardigan 2022, áo
                                          cardigan len nữ màu trắng đen thời
                                          trang thu đông hàn quốc
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb( 246, 145, 19)'}}>
                                            Hoàn 99% xu
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">230.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 2k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo khoác Cadigan len họa tiết các màu, áo đôi chất len mịn form rộng, hàng Quảng Châu lên dáng cực xinh" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/1709e689819524b60c86bf4bef8c3559_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">28%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo khoác Cadigan len họa tiết các
                                          màu, áo đôi chất len mịn form rộng,
                                          hàng Quảng Châu lên dáng cực xinh
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">179.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 698
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo Sweater CUNA Áo Sweater Nam Nữ Form Rộng Chất Cotton Nỉ Ngoại Hàng Xuất Cao Cấp Trơn Cổ Tròn Dài Tay Local Brand" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/ba4e259e70b51b01d3c7c43983c6c27c_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _3OQcdp" style={{color: 'rgb(242, 82, 32)'}}>
                                          <div className="_3Wntrk xfarqW" />
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">45%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/45e81cbd1bcfd8f0a2744b57fa61a67c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo Sweater CUNA Áo Sweater Nam Nữ
                                          Form Rộng Chất Cotton Nỉ Ngoại Hàng
                                          Xuất Cao Cấp Trơn Cổ Tròn Dài Tay
                                          Local Brand
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246, 145,19)'}}>
                                            10% Giảm
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">169.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 1,2k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo len nữ cadigan dày phối viền sang chảnh hàng quảng châu cao cấp A525 SUTANO" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/c6a8c4b6f7a1a847db644661c1429a0e_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _3OQcdp" style={{color: 'rgb(242, 82, 32)'}}>
                                          <div className="_3Wntrk xfarqW" />
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">32%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/45e81cbd1bcfd8f0a2744b57fa61a67c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo len nữ cadigan dày phối viền sang
                                          chảnh hàng quảng châu cao cấp A525
                                          SUTANO
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">169.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 4,8k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Cardigan đen nữ kẻ sọc trắng khuy cài form rộng phong cách nhật bản retro" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/6b118964ef1db4e486ebeedc38b9112c_tn" />
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">30%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Cardigan đen nữ kẻ sọc trắng khuy
                                          cài form rộng phong cách nhật bản
                                          retro
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">179.200</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 38
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo cardigan len thừng A22 dáng dài form rộng, cadigan phong cách hàn quốc , len dày dặn, hàng chất lượng cao." className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/3f66c10a4898df5f6afccc13593eac3f_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">29%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo cardigan len thừng A22 dáng dài
                                          form rộng, cadigan phong cách hàn
                                          quốc , len dày dặn, hàng chất lượng
                                          cao.
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">88.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 3,8k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="ÁO LEN CARDIGAN ULZZANG NHIỀU MẪU (ảnh thật)" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/267c8ad14187721ab739b9d674b10a03_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          ÁO LEN CARDIGAN ULZZANG NHIỀU MẪU
                                          (ảnh thật)
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopXuHuong
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">190.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 186
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Set áo lưới cổ V trễ + áo yếm croptop" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/d84af0e068a60a3b6e910d623ab3212b_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">12%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/f2cb1f82803139f5ef324d71f4838f0c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Set áo lưới cổ V trễ + áo yếm
                                          croptop
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopXuHuong
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">158.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 1,6k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo Khoác Cadigan Gấu 2 Túi Siêu Cute Áo Len From Rộng Dáng Dài Phù Hợp Đi Chơi Đi Dạo Phố Ak794" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/594f82512395df76a2e03692909a73c2_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _3OQcdp" style={{color: 'rgb(242, 82, 32)'}}>
                                          <div className="_3Wntrk xfarqW" />
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">41%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/45e81cbd1bcfd8f0a2744b57fa61a67c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo Khoác Cadigan Gấu 2 Túi Siêu Cute
                                          Áo Len From Rộng Dáng Dài Phù Hợp Đi
                                          Chơi Đi Dạo Phố Ak794
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246,145,19)'}}>
                                            Giảm ₫5k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">175.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 21
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="ÁO KHOÁC CADIGAN LEN TRÁM LÔNG NỔI" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/3db00bac129b2e297d068c777b2929ed_tn" />
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">26%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon _1wZ-SW icon-video-play2">
                                          <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                          <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                        </svg>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          ÁO KHOÁC CADIGAN LEN TRÁM LÔNG NỔI
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb( 246, 145,19)'}}>
                                            Giảm ₫3k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">185.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 2,5k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo cardigan chùm mông kẻ ô dệt kim dày dặn" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/8c18e79c5938486f92f70d39c7b9d107_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">47%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo cardigan chùm mông kẻ ô dệt kim
                                          dày dặn
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">169.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 162
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo Khoác Nỉ Hoodie Zip NECO Form Rộng Nam Nữ Unisex" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/1a3515f8fac7777a863bf86191986474_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">46%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo Khoác Nỉ Hoodie Zip NECO Form
                                          Rộng Nam Nữ Unisex
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246,145,19)'}}>
                                            Giảm ₫7k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopXuHuong
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">189.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 4,1k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="áo len cardigan ,áo khoác ngoài ,áo len nữ" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/06849422ccbcd3c3308da96950b7571b_tn" />
                                      <div className="_1Ao_PS">
                                        <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon _1wZ-SW icon-video-play2">
                                          <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                          <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                        </svg>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          áo len cardigan ,áo khoác ngoài ,áo
                                          len nữ
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">179.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 110
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo Khoác Cardigan Logo In Chú Gấu Kèm Túi Hộp Phối Nút Cài Phong Cách Dê Thương Siêu Cá Tính" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/f9f5115869a5ba9186523b8d64096c4c_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">54%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo Khoác Cardigan Logo In Chú Gấu
                                          Kèm Túi Hộp Phối Nút Cài Phong Cách
                                          Dê Thương Siêu Cá Tính
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">81.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 1,2k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo khoác Cardigan nữ Chelgy len màu Đen Trắng hoạ tiết Đường Chỉ Xoắn tay áo và ngực form rộng CG-CDG101" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/sg-11134201-22090-q3yofl5kkzhv5e_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _3OQcdp" style={{color: 'rgb(242, 82, 32)'}}>
                                          <div className="_3Wntrk xfarqW" />
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">44%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo khoác Cardigan nữ Chelgy len màu
                                          Đen Trắng hoạ tiết Đường Chỉ Xoắn
                                          tay áo và ngực form rộng CG-CDG101
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246,145,19)'}}>
                                            Giảm ₫80k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">185.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv" />
                                    </div>
                                  </div>
                                </div></div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo Khoác Cardigan NỈ Nữ Form Rộng Kẻ Caro Kim Cương Hàn Quốc Đen Hồng New" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/a3e066d74125eefe58750bcb8427b4cb_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">49%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon _1wZ-SW icon-video-play2">
                                          <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                          <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                        </svg>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/45e81cbd1bcfd8f0a2744b57fa61a67c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo Khoác Cardigan NỈ Nữ Form Rộng Kẻ
                                          Caro Kim Cương Hàn Quốc Đen Hồng New
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246,145, 19 )'}}>
                                            10% Giảm
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">59.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 102
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo len trắng nữ form rộng dài tay kiểu họa tiết vặn thừng chất dày dặn, cực ấm ladyquangchau M105" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/a9b30751263611222f1330f432551d19_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">34%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/45e81cbd1bcfd8f0a2744b57fa61a67c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo len trắng nữ form rộng dài tay
                                          kiểu họa tiết vặn thừng chất dày
                                          dặn, cực ấm ladyquangchau M105
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb( 246, 145, 19)'}}>
                                            Giảm ₫199k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">195.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 5,3k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo Khoác Cardigan Thêu Simpis Nữ - Khoát kiểu form rộng tay bồng style học sinh đơn giản hàn quốc" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/4786a25df1f4618c6349ab9e45d5315d_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">43%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo Khoác Cardigan Thêu Simpis Nữ -
                                          Khoát kiểu form rộng tay bồng style
                                          học sinh đơn giản hàn quốc
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246,145, 19)'}}>
                                            Giảm ₫10k
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">59.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 45
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo cardigan len nữ khoác ngoài màu đen trắng họa tiết basic phong cách Hàn Quốc mới nhất thu đông 2022 kozoda AC50" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/e05322775bdf6793eaee21d0d5246a2a_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _3OQcdp" style={{color: 'rgb(242, 82, 32)'}}>
                                          <div className="_3Wntrk xfarqW" />
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">44%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/45e81cbd1bcfd8f0a2744b57fa61a67c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo cardigan len nữ khoác ngoài màu
                                          đen trắng họa tiết basic phong cách
                                          Hàn Quốc mới nhất thu đông 2022
                                          kozoda AC50
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">175.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 34
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="ÁO CARDIGAN, ÁO KHOÁC Nữ Form Rộng  Viền Túi Đen Trắng" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/628cbe89a7290a4c4b6a6752319346c1_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">46%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/45e81cbd1bcfd8f0a2744b57fa61a67c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          ÁO CARDIGAN, ÁO KHOÁC Nữ Form Rộng
                                          Viền Túi Đen Trắng
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">59.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 658
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="[ VIDEO THẬT ] ÁO CARDIGAN XÁM FORM RỘNG (CÚC ÁO MÀU ĐEN NHA)" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/3dbe1a0defc82eab1f2bd90815c27089_tn" />
                                      <div className="_1Ao_PS">
                                        <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon _1wZ-SW icon-video-play2">
                                          <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                          <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                        </svg>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          [ VIDEO THẬT ] ÁO CARDIGAN XÁM FORM
                                          RỘNG (CÚC ÁO MÀU ĐEN NHA)
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246, 145, 19 )'}}>
                                            50% Giảm
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">130.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 15
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo khoác len cardigan phối viền sọc đen chất len đẹp QCCC dáng rộng phong cách Hàn Quốc H-7" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/8e16315bec17206ce242985c023c93bb_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _3OQcdp" style={{color: 'rgb(242, 82, 32)'}}>
                                          <div className="_3Wntrk xfarqW" />
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">32%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon _1wZ-SW icon-video-play2">
                                          <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                          <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                        </svg>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo khoác len cardigan phối viền sọc
                                          đen chất len đẹp QCCC dáng rộng
                                          phong cách Hàn Quốc H-7
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopDacBiet
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">169.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 265
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="ÁO KHOÁC CADIGAN MLB THÊU NỔI" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/a97a8d6f1df520b49c7be8d434389c0d_tn" />
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">47%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          ÁO KHOÁC CADIGAN MLB THÊU NỔI
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopXuHuong
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">160.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 38
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                        <div className="col-xs-2">
                          <div className="_2TTYjw">
                            <Link data-sqe="link" to="/error"><div className="_2jdlVA">
                                <div className="coBmRL">
                                  <div style={{pointerEvents: 'none'}}>
                                    <div className="_1OPdfl _1rxM_s">
                                      <img width="invalid-value" height="invalid-value" alt="Áo khoác cardigan oversize thêu chữ P, mặc đôi nam nữ chất dày dặn - 29feb.closet - A118" className="jurjR2 _2PWsS4" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/ccd1fcb9463396171bef3bfed1489a04_tn" />
                                      <div className="_1k26So">
                                        <div className="_1bBv-B _1g3c7t" style={{color: 'rgb(242, 82, 32)'}}>
                                          <span className="_3vR9Hw">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div className="XLp7cA">
                                        <div className="_3ymATw _1YhAOv _3plgYm">
                                          <span className="percent">3%</span><span className="_3BdfRf">giảm</span>
                                        </div>
                                      </div>
                                      <div className="_1Ao_PS">
                                        <div className="_2FPM2z" data-sqe="ad">
                                          Tài trợ
                                        </div>
                                      </div>
                                      <div className="_3NWV2h">
                                        <div className="customized-overlay-image">
                                          <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="_17jkOb">
                                    <div className="_23nxVH">
                                      <div className="ECt7xl">
                                        <div className="_3QnFZz GqFUA_">
                                          Áo khoác cardigan oversize thêu chữ
                                          P, mặc đôi nam nữ chất dày dặn -
                                          29feb.closet - A118
                                        </div>
                                      </div>
                                      <div className="_1dXjyL">
                                        <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                          </svg>
                                          <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb( 246, 145, 19 )'}}>
                                            11% Giảm
                                          </div>
                                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                          </svg>
                                        </div>
                                        <div className="_3le6hk" style={{color: 'rgb(255, 0, 32)'}}>
                                          #ShopXuHuong
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_1pkNgj Ta45uF">
                                      <div className="HlRyAu _10ZNUE">
                                        <span className="_34hjO9">₫</span><span className="T871Oz">349.000</span>
                                      </div>
                                      <div className="_2FavkD _2xMxYv">
                                        Đã bán 1,7k
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                        </div>
                      </div>
                      <div className="v-center">
                        <Link className="btn btn-light btn--m btn--inline btn-light--link _22Pz0e" to="/error">Xem thêm</Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <ToastContainer/>
            </div>
          );

    }
}

export default ProductDetail