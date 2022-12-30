import React, { Component } from "react";
import { Link } from "react-router-dom";

class FooterRules extends Component {
    render() {
        return (
            <>
            <div className="module active" id="module_download">
                <div className="container">
                <div className="appLogoContainer">
                    <img src="/web_static/categorized/shared/images/blank.png" alt="" className="bgimg_contain appLogo" />
                    <div className="moduleSubTitle">Tải ứng dụng ngay và bắt đầu tận hưởng niềm vui mua sắm! </div>
                </div>
                <div>
                    <span className="qrCode" />
                    <span className="downloadLinks">
                    <a className="download appleStore bgImg_contain" href="#st" />
                    <a className="download googlePlay bgImg_contain" href="#st" />
                    </span>
                </div>
                </div>
            </div>
            <footer id="footer" style={{position: 'relative'}}>
                <div id="footerLinks">
                <Link to="/help">Trợ giúp</Link>
                <a href="#st">Tiêu chuẩn Cộng Đồng</a>
                <Link to="/rules">Điều khoản Shopee</Link>
                </div>
                <div id="addressAtFooter">
                Công ty TNHH Shopee <br />Địa chỉ: Tầng 28, Tòa nhà trung tâm Lotte Hà
                Nội, số 54 đường Liễu Giai, phường Cống Vị, Quận Ba Đình, Thành phố Hà
                Nội.<br />© 2019 - Bản quyền thuộc về Công ty TNHH Shopee
                </div>
            </footer>
            </>
        );
    }
}

export default FooterRules