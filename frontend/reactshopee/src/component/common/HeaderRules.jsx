import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderRules extends Component {
    render(){
        return (
            <nav id="nav" style={{overflow: 'hidden'}}>
              <div className="container">
                <Link className="topMenu home" to="/" style={{float: 'left'}} />
                <div id="shopee-navigator" lang="vi">
                  <div className="nav-module nav-mall">
                    <Link to="/mall">Shopee Mall</Link>
                  </div>
                  <div className="nav-module nav-seller-center">
                    <Link to="/loginsell">Kênh Người Bán</Link>
                  </div>
                </div>
                <a className="topMenu icon icon_facebook" href="https://www.facebook.com/ShopeeVN" ><span></span></a>
                <a className="topMenu icon icon_inst" href="http://instagram.com/Shopee_VN" ><span></span></a>
                <a className="topMenu icon icon_twitter" href="https://twitter.com/ShopeeVN" ><span></span></a>
                <a className="topMenu icon icon_pinst" href="http://www.pinterest.com/ShopeeVN/" ><span></span></a>
                <a className="topMenu icon icon_tele" href="http://www.pinterest.com/ShopeeVN/" ><span></span></a>
              </div>
            </nav>
          );
    }
}

export default HeaderRules