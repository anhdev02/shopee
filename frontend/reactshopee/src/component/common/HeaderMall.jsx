import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderMall extends Component {
  render() {
    return (
      <header className="shopee-top shopee-top--sticky">
        <div className="navbar-wrapper container-wrapper navbar-wrapper--official-shop">
          <nav className="container navbar">
            <div className="flex v-center FAQGyh">
              <Link to="/" className="_2TLLZP ZUq1cc">
                Trang chủ Shopee
              </Link>
              <Link
                to="/loginsell"
                className="flex _2TLLZP ZUq1cc"
              >
                Trở thành Người bán Shopee
              </Link>
              <div className="shopee-drawer ZUq1cc" id="pc-drawer-id-1">
                <Link
                  className="_2TLLZP"
                  to="/app"
                >
                  Tải ứng dụng
                </Link>
              </div>
              <div className="flex _2TLLZP ZUq1cc HniJJe">Kết nối</div>
              <div className="flex _2TLLZP FK3705">
                <a
                  className="D7dyDc header-navbar-background header-navbar-facebook-png"
                  href="#st"
                  rel="noopener noreferrer"
                  title="Kết nối Facebook"
                ><span></span></a>
                <a
                  href="#st"
                  rel="noopener noreferrer"
                  className="VR+xYc header-navbar-background header-navbar-instagram-png"
                  title="Kết nối Instagram!"
                ><span></span></a>
              </div>
            </div>
            <div className="navbar__spacer" />
            <ul className="navbar__links">
              <li className="navbar__link--notification navbar__link navbar__link--hoverable navbar__link--tappable">
                <div
                  className="stardust-popover"
                  id="stardust-popover3"
                  tabIndex={0}
                >
                  <div role="button" className="stardust-popover__target">
                    <a
                      className="W-2aSq _6qcVOX"
                      tabIndex={-1}
                      href="/user/notifications/order"
                    >
                      <svg
                        viewBox="3 2.5 14 14"
                        x={0}
                        y={0}
                        className="shopee-svg-icon icon-notification-2"
                      >
                        <path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z" />
                        <path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z" />
                      </svg>
                      <span className="i4da+9">Thông báo</span>
                    </a>
                  </div>
                </div>
              </li>
              <Link
                className="navbar__link navbar__link--tappable navbar__link--hoverable navbar__link--help"
                to="/help"
              >
                <div className="navbar__help-center-icon">
                  <svg
                    height={16}
                    viewBox="0 0 16 16"
                    width={16}
                    className="shopee-svg-icon icon-help-center"
                  >
                    <g fill="none" fillRule="evenodd" transform="translate(1)">
                      <circle cx={7} cy={8} r={7} stroke="currentColor" />
                      <path
                        fill="currentColor"
                        d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"
                      />
                    </g>
                  </svg>
                </div>
                <span className="navbar__link-text navbar__link--tappable navbar__link--hoverable">
                  Hỗ Trợ
                </span>
              </Link>
              <li className="navbar__link--notification navbar__link navbar__link--hoverable navbar__link--tappable">
                <div
                  className="stardust-popover"
                  id="stardust-popover4"
                  tabIndex={0}
                >
                  <div role="button" className="stardust-popover__target">
                    <div className="n1sJN5">
                      <div className="UkG+ar">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.00065 14.6667C11.6825 14.6667 14.6673 11.6819 14.6673 8.00004C14.6673 4.31814 11.6825 1.33337 8.00065 1.33337C4.31875 1.33337 1.33398 4.31814 1.33398 8.00004C1.33398 11.6819 4.31875 14.6667 8.00065 14.6667Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.33464 8.00004C5.33464 11.6819 6.52854 14.6667 8.0013 14.6667C9.47406 14.6667 10.668 11.6819 10.668 8.00004C10.668 4.31814 9.47406 1.33337 8.0013 1.33337C6.52854 1.33337 5.33464 4.31814 5.33464 8.00004Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.33398 8H14.6673"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="UfAWnk">Tiếng Việt</span>
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        width={12}
                        height={12}
                        color="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 8.146L11.146 3l.707.707-5.146 5.147a1 1 0 01-1.414 0L.146 3.707.854 3 6 8.146z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
                <Link style={{color:'white'}}
                    className="navbar__link navbar__link--account navbar__link--signup navbar__link--tappable navbar__link--hoverable navbar__link-text navbar__link-text--medium navbar__link-text--normal-case"
                    to="/register"
                >
                    Đăng Ký
                </Link>
              <div className="navbar__link-separator" />
              <Link to='/login'>
                <a style={{color:'white'}}
                    className="navbar__link navbar__link--account navbar__link--login navbar__link--tappable navbar__link--hoverable navbar__link-text navbar__link-text--medium navbar__link-text--normal-case"
                    href="/buyer/login?is_from_login=true&next=https%3A%2F%2Fshopee.vn%2Fmall%2F%3Fis_from_login%3Dtrue"
                >
                    Đăng Nhập
                </a>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="ofs-header container-wrapper ofs-header--docked">
          <div className="ofs-header__top">
            <div className="container ofs-header__top-wrapper">
              <div className="ofs-header__left">
                <Link
                  className="ofs-header__logo-focus-style-wrapper"
                  tabIndex={-1}
                  to="/"
                >
                  <svg
                    enableBackground="new 0 0 48 48"
                    viewBox="0 0 48 48"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-shopee-logo--official-shop"
                  >
                    <path d="M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z" />
                  </svg>
                </Link>
                <a
                  tabIndex={-1}
                  className="ofs-header__logo-separator"
                  href="/mall"
                ><span></span></a>
              </div>
              <div className="ofs-header__mid">
                <a className="ofs-header__page-name" href="/mall">
                  <svg
                    viewBox="0 0 220 44"
                    className="shopee-svg-icon ofs-all-logo"
                  >
                    <g
                      fill="#fff"
                      fillRule="evenodd"
                      transform="translate(0 -.098)"
                    >
                      <path d="M195.78 30.899a10.49 10.49 0 0 1-6.81 2.484c-5.732 0-10.378-4.53-10.378-10.12 0-5.59 4.646-10.12 10.378-10.12 2.606 0 4.988.937 6.81 2.484.023-1.13.882-1.942 1.938-1.942 1.07 0 1.937.834 1.937 1.989v15.73c0 1.154-.868 1.98-1.937 1.98-1.07 0-1.938-.826-1.938-1.98zm-.062-7.643c0-3.588-3.024-6.497-6.755-6.497-3.73 0-6.754 2.91-6.754 6.497 0 3.588 3.024 6.498 6.754 6.498 3.73 0 6.755-2.91 6.755-6.498zM202.9 25.388V3.558c0-1.07.855-1.938 1.911-1.938s1.912.867 1.912 1.938v22.069c0 .043-.002.087-.004.13-.018 2.461.369 3.293 2.029 3.768 1.016.291 1.553 1.396 1.266 2.426-.237.854-.77 1.377-1.605 1.377h-.18c-.171 0-.347-.024-.52-.073-2.735-.783-4.904-2.78-4.81-7.867zM212.266 25.535V3.558c0-1.07.856-1.938 1.912-1.938s1.912.867 1.912 1.938V25.825c0 .082-.005.163-.015.242-.06 2.212.146 2.858 2.325 3.31 1.034.215 1.632 1.26 1.42 2.309-.186.916-.914 1.527-1.803 1.527-.127 0-.256-.013-.386-.04-2.882-.599-5.553-2.131-5.365-7.638zM97.886 24.307c.095.561.266 1.256.563 2.09 1.317 3.309 5.375 3.3 5.986 3.309 1.753.025 3.396-.331 5.011-1.223.906-.5 1.985-.412 2.556.405.572.818.395 2.028-.723 2.71-2.208 1.348-4.574 1.758-7.01 1.708-3.798-.078-7.4-1.591-9.01-5.204-.733-1.644-1.158-3.561-1.027-5.376.058-2.086.844-3.867 1.047-4.334.928-2.127 2.557-3.814 4.725-4.702 2.646-1.082 6.008-.916 8.53.43 2.936 1.566 4.571 5.136 4.41 8.384-.049.975-.799 1.803-1.817 1.803zm.412-3.333h10.906c-.86-4.592-5.845-4.37-5.845-4.37-2.52.098-4.207 1.555-5.061 4.37zM119.618 24.354c.095.561.266 1.257.563 2.09 1.318 3.31 5.376 3.3 5.986 3.31 1.753.024 3.396-.332 5.012-1.223.905-.5 1.984-.413 2.556.405.571.817.394 2.027-.723 2.71-2.209 1.347-4.574 1.758-7.011 1.707-3.797-.077-7.4-1.591-9.01-5.204-.732-1.644-1.158-3.56-1.026-5.376.058-2.085.843-3.867 1.047-4.333.928-2.127 2.557-3.815 4.725-4.702 2.645-1.083 6.007-.916 8.53.43 2.936 1.565 4.57 5.136 4.409 8.383-.049.976-.798 1.803-1.816 1.803zm.412-3.333h10.907c-.86-4.592-5.846-4.37-5.846-4.37-2.52.099-4.206 1.555-5.06 4.37zM74.109 30.871v11.367c0 2.34-3.632 2.337-3.632 0V23.806a10.064 10.064 0 0 1 0-1.329v-7.575c0-2.34 3.632-2.337 3.632 0v.51a10.537 10.537 0 0 1 6.768-2.434c5.756 0 10.422 4.55 10.422 10.164 0 5.613-4.666 10.164-10.422 10.164-2.584 0-4.947-.917-6.768-2.435zm0-7.207c.28 3.356 3.2 5.997 6.762 5.997 3.746 0 6.784-2.922 6.784-6.526 0-3.604-3.038-6.526-6.784-6.526-3.562 0-6.483 2.64-6.762 5.997zM57.09 33.306c-5.757 0-10.423-4.55-10.423-10.164s4.666-10.164 10.422-10.164 10.422 4.55 10.422 10.164c0 5.613-4.666 10.164-10.422 10.164zm-.007-3.645c3.747 0 6.784-2.922 6.784-6.526 0-3.604-3.037-6.526-6.784-6.526s-6.784 2.922-6.784 6.526c0 3.604 3.037 6.526 6.784 6.526zM28.69 15.026V2.111c0-2.337-3.631-2.34-3.631 0v29.471c0 2.337 3.631 2.341 3.631 0v-9.695c.015.364.018-.522.273-1.22.953-3.151 3.823-3.751 5.115-3.77 3.696 0 5.652 1.803 5.868 5.408V31.582c0 2.337 3.627 2.341 3.627 0v-6.126c0-1.753.106-3.676 0-4.789-.584-6.843-9.5-9.68-14.455-5.979a9.572 9.572 0 0 0-.428.338zM4.294 2.62c-2.156 1.909-3.15 5.385-2.369 8.155.678 2.4 2.66 4.27 4.803 5.323 2.222 1.09 4.676 1.673 6.564 2.505 1.32.59 2.456 1.153 3.595 2.305 1.138 1.152 1.62 2.586 1.587 3.65-.033 1.085-.441 2.182-1.023 2.869-1.487 1.755-3.889 2.414-6.106 2.303-1.572-.078-3.29-.422-4.692-1.016-1.42-.601-2.671-1.582-3.921-2.438-.807-.553-1.99-.282-2.526.631-.468.811-.098 1.92.693 2.505 2.376 1.757 4.89 3.1 7.808 3.631 2.918.532 5.463.41 8.09-.741 2.462-1.08 4.468-3.198 5.07-5.862.627-2.775-.09-5.41-1.923-7.58-2.21-2.618-5.47-3.626-8.54-4.733a24.208 24.208 0 0 1-3.295-1.423c-1.908-.973-2.883-2.363-2.75-4.528.158-2.578 2.278-3.913 4.906-4.266 2.628-.353 5.337.53 7.25 1.864 1.833 1.194 3.93-1.64 1.833-3.136C15.15-.207 8.288-.914 4.294 2.621z" />
                      <path
                        d="M171.002 3.338c-1.545 4.329-5.841 7.27-10.7 7.186-4.8-.084-8.954-3.103-10.394-7.412-.33-.983-1.407-1.519-2.408-1.197a1.865 1.865 0 0 0-1.217 2.364c1.946 5.823 7.526 9.879 13.954 9.991 6.505.114 12.277-3.84 14.365-9.69a1.866 1.866 0 0 0-1.17-2.39c-.993-.342-2.082.171-2.43 1.148z"
                        fillRule="nonzero"
                      />
                      <path d="M173.191 1.8a1.98 1.98 0 0 1 1.98 1.98v27.546a1.98 1.98 0 1 1-3.96 0V3.78a1.98 1.98 0 0 1 1.98-1.98zM147.807 1.8a1.98 1.98 0 0 1 1.98 1.98v27.546a1.98 1.98 0 1 1-3.96 0V3.78a1.98 1.98 0 0 1 1.98-1.98z" />
                      <circle cx="173.101" cy="3.691" r="2.07" />
                      <circle cx="147.897" cy="3.691" r="2.07" />
                    </g>
                  </svg>
                </a>
                <div className="ofs-header__toggle">
                  <svg
                    viewBox="0 0 12 10"
                    className="shopee-svg-icon ofs-header__toggle-icon icon-all-cate"
                  >
                    <g fillRule="evenodd" stroke="none" strokeWidth={1}>
                      <g transform="translate(-373 -208)">
                        <g transform="translate(155 191)">
                          <g transform="translate(218 17)">
                            <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                            <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                            <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  Tất cả Danh mục
                </div>
              </div>
              <div className="spacer" />
              <div className="ofs-header__right">
                <div className="shopee-searchbar">
                  <div className="shopee-searchbar__main">
                    <form
                      role="search"
                      className="shopee-searchbar-input"
                      autoComplete="off"
                    >
                      <input
                        aria-label="Tìm trong Shopee Mall"
                        className="shopee-searchbar-input__input"
                        maxLength={128}
                        placeholder="Tìm trong Shopee Mall"
                        autoComplete="off"
                        aria-autocomplete="list"
                        aria-controls="shopee-searchbar-listbox"
                        aria-expanded="false"
                        role="combobox"
                        defaultValue
                      />
                    </form>
                  </div>
                  <button
                    type="button"
                    className="btn btn-solid-primary btn--s btn--inline shopee-searchbar__search-button"
                  >
                    <svg
                      height={19}
                      viewBox="0 0 19 19"
                      width={19}
                      className="shopee-svg-icon"
                    >
                      <g fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-1016 -32)">
                          <g>
                            <g transform="translate(405 21)">
                              <g transform="translate(611 11)">
                                <path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z" />
                                <path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z" />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="ofs-header__cart-wrapper">
                  <div className="stardust-popover" id="cart_drawer_target_id">
                    <div role="button" className="stardust-popover__target">
                      <div className="cart-drawer-container">
                        <a
                          className="cart-drawer flex v-center"
                          id="cart_drawer_target_id"
                          href="/buyer/login?is_from_login=true&next=https%3A%2F%2Fshopee.vn%2Fmall%2F%3Fis_from_login%3Dtrue"
                        >
                          <svg
                            viewBox="0 0 26.6 25.6"
                            className="shopee-svg-icon navbar__link-icon icon-shopping-cart-2"
                          >
                            <polyline
                              fill="none"
                              points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit={10}
                              strokeWidth="2.5"
                            />
                            <circle cx="10.7" cy={23} r="2.2" stroke="none" />
                            <circle cx="19.7" cy={23} r="2.2" stroke="none" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="ofs-navbar ofs-navbar--docked ofs-navbar--hidden ofs-navbar--theme-official">
            <div className="ofs-navbar__background">
              <div className="container ofs-navbar__wrapper">
                <div className="ofs-navbar__items">
                <Link to='/mall'>
                    <a
                        className="ofs-navbar__item ofs-navbar__item--active"
                        href="#st"
                        style={{ maxWidth: "171.429px" }}
                    >
                        <div className="ofs-navbar__item-name">Phổ biến</div>
                    </a>
                </Link>
                  <Link to='/mallsport'>
                    <a
                        className="ofs-navbar__item"
                        href="#st"
                        style={{ maxWidth: "171.429px" }}
                    >
                        <div className="ofs-navbar__item-name">
                        Thể Thao &amp; Du Lịch
                        </div>
                    </a>
                  </Link>
                  <Link to='/mallcar'>
                    <a
                        className="ofs-navbar__item"
                        href="#st"
                        style={{ maxWidth: "171.429px" }}
                    >
                        <div className="ofs-navbar__item-name">
                        Ô tô - xe máy - xe đạp
                        </div>
                    </a>
                  </Link>
                  <Link to='/malldepartment'>
                    <a
                        className="ofs-navbar__item"
                        href="#st"
                        style={{ maxWidth: "171.429px" }}
                    >
                        <div className="ofs-navbar__item-name">Bách hóa Online</div>
                    </a>
                  </Link>
                  <Link to='/malllife'>
                    <a
                        className="ofs-navbar__item"
                        href="#st"
                        style={{ maxWidth: "171.429px" }}
                    >
                        <div className="ofs-navbar__item-name">
                        Nhà Cửa &amp; Đời Sống
                        </div>
                    </a>
                  </Link>
                  <Link to='/mallbeauty'>
                    <a
                        className="ofs-navbar__item"
                        href="#st"
                        style={{ maxWidth: "171.429px" }}
                    >
                        <div className="ofs-navbar__item-name">Sắc Đẹp</div>
                    </a>
                  </Link>
                </div>
                <div className="ofs-navbar__item ofs-navbar__more">
                  <div className="ofs-navbar__more-label">Thêm</div>
                  <svg
                    enableBackground="new 0 0 15 15"
                    viewBox="0 0 15 15"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-down-arrow-filled"
                  >
                    <path d="m6.5 12.9-6-7.9s-1.4-1.5.5-1.5h13s1.8 0 .6 1.5l-6 7.9c-.1 0-.9 1.3-2.1 0z" />
                  </svg>
                  <div>
                    <div />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </header>
    );
  }
}

export default HeaderMall;
