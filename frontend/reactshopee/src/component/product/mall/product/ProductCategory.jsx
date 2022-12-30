import React, { Component } from 'react'
import axios from 'axios'
import AppUrl from '../../../api/AppUrl'
import {Link} from 'react-router-dom'

export class ProductCategory extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: props.id,
            ProductCategoryArray: []
        }
    }
    getData(){
        axios.get(AppUrl.ProductByCategory+this.props.id)
        .then((reponse)=>{
            var data = reponse.data;
            this.setState({
                ProductCategoryArray: data,
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    componentDidMount(){
        this.getData();
    }
    shouldComponentUpdate(props){
      if(this.state.id != props.id){
        this.setState({
          id: props.id,
        })
        axios.get(AppUrl.ProductByCategory+this.props.id)
        .then((reponse)=>{
            var data = reponse.data;
            this.setState({
                ProductCategoryArray: data,
            })
        })
        .catch((error)=>{
            console.log(error)
        })
      }
    }
    render(){
      var ProductCategoryArray = this.state.ProductCategoryArray;
      var myview = ProductCategoryArray.map((product, i)=>{
        return (
          <div className="col-xs-2-4 shopee-search-item-result__item" data-sqe="item">
                <Link to="/productdetail"><div className="tWpFe2">
                    <div className="VTjd7p whIxGK">
                      <div style={{pointerEvents: 'none'}}>
                        <div className="yvbeD6 KUUypF">
                          <img width="invalid-value" height="invalid-value" alt="Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton" className="_7DTxhh vc8g9F" style={{objectFit: 'contain'}} src={product.image} />
                          <div className="aLgMTQ">
                            <div className="YeGYFd sKFCYs" style={{color: 'rgb(242, 82, 32)'}}>
                              <span className="ICOSOm">Yêu thích</span>
                            </div>
                          </div>
                          <div className="GOgNtl">
                            <div className="NTmuqd _3NQO+7 WVxeBE">
                              <span className="percent">38%</span><span className="Th6IF+">giảm</span>
                            </div>
                          </div>
                          <div className="F7xq8U">
                            <div className="Sh+UIZ" data-sqe="ad">
                              Tài trợ
                            </div>
                          </div>
                          <div className="IpGwg7">
                            <div className="customized-overlay-image">
                              <img src="https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8" width height />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="KMyn8J">
                        <div className="dpiR4u" data-sqe="name">
                          <div className="FDn--+">
                            <div className="ie3A+n bM+7UW Cve6sh">
                              {product.productName}
                            </div>
                          </div>
                          <div className="FD2XVZ">
                            <div className="INFECd" style={{color: 'rgb(255, 0, 32)'}}>
                              #ShopDacBiet
                            </div>
                          </div>
                        </div>
                        <div className="hpDKMN">
                          <div className="vioxXd ZZuLsr d5DWld">₫200.000</div>
                          <div className="vioxXd rVLWG6">
                            <span className="recFju">₫</span><span className="ZEgDH9">125.000</span>
                          </div>
                        </div>
                        <div className="ZnrnMl">
                          <div className="RS7p+X" data-sqe="rating">
                            <div className="shopee-rating-stars">
                              <div className="shopee-rating-stars__stars">
                                <div className="shopee-rating-stars__star-wrapper">
                                  <div className="shopee-rating-stars__lit" style={{width: '100%'}}>
                                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid">
                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                  </svg>
                                </div>
                                <div className="shopee-rating-stars__star-wrapper">
                                  <div className="shopee-rating-stars__lit" style={{width: '100%'}}>
                                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid">
                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                  </svg>
                                </div>
                                <div className="shopee-rating-stars__star-wrapper">
                                  <div className="shopee-rating-stars__lit" style={{width: '100%'}}>
                                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid">
                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                  </svg>
                                </div>
                                <div className="shopee-rating-stars__star-wrapper">
                                  <div className="shopee-rating-stars__lit" style={{width: '100%'}}>
                                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid">
                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                  </svg>
                                </div>
                                <div className="shopee-rating-stars__star-wrapper">
                                  <div className="shopee-rating-stars__lit" style={{width: '85.9053%'}}>
                                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid">
                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                    </svg>
                                  </div>
                                  <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="r6HknA uEPGHT">Đã bán 7,6k</div>
                        </div>
                        <div className="zGGwiV">TP. Hồ Chí Minh</div>
                      </div>
                      <div className="shopee-item-card__hover-footer _6o9eaa">
                        Tìm sản phẩm tương tự
                      </div>
                    </div>
                  </div></Link>
              </div>
        )
      })
        return(
            <div className="row shopee-search-item-result__items">
              {myview}
          </div>
        )
    }
}