/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
class HeaderAbout extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__left">
            <Link to='/about'>
                <img style={{display: 'inline'}}
                  src="https://deo.shopeemobile.com/shopee/shopee-careers-live-vn/assets/img/shopee-logo.0ce43657.svg"
                  className="header__left__logo"
                />
                <span className="header__left__title">Careers</span>
            </Link>
          </div>
          <div className="header__right">
            <span className="nav__menu">
              <span className="menu-icon" />
            </span>
            <div className="nav__bg" style={{ display: "none" }} />
            <div className="nav__content">
              <nav className="header__right__nav">
                <Link 
                  to='/about'
                  className="smooth nav-link router-link-exact-active router-link-active"
                >
                    <span>Về</span>
                </Link>
                <Link to='/shopeewhy' className="smooth nav-link">
                    <span>Tại sao bạn chọn Shopee</span>
                </Link>
                <Link to='/job' className="smooth nav-link">
                    <span>Việc làm</span>
                </Link>
                <Link to='/student' className="smooth nav-link">
                    <span>Sinh viên</span>
                </Link>
                <Link to='/tech' className="smooth nav-link">
                    <span>công nghệ</span>
                </Link>
                <Link to='/event' className="smooth nav-link">
                    <span>Sự kiện</span>
                </Link>
                <Link to='/blog' className="smooth nav-link out-link">
                    Life at Shopee Blog
                </Link>
              </nav>
              <div className="select-language">
                <span className="select-value">Tiếng Việt</span>
                <ul className="selection" style={{ left: "-32.5px" }}>
                  <li className="option">English</li>
                  <li className="option">Bahasa Indonesia</li>
                  <li className="option">ภาษาไทย</li>
                  <li className="option active">Tiếng Việt</li>
                  <li className="option">繁中</li>
                  <li className="option">简中</li>
                  <li className="option">Português</li>
                  <li className="option">Español</li>
                  <li className="option">한국어</li>
                  <li className="option">Polski</li>
                </ul>
              </div>
            </div>
          </div>
          {/**/}
        </div>
      </header>
    );
  }
}

export default HeaderAbout;
