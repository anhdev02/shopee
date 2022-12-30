import React, { Component } from "react";
import { Link } from "react-router-dom";

class Loginsms extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'rgb(238, 77, 45)'}}>
              <div className="_3M9lzn PeA8Gc" style={{backgroundImage: 'url("https://cf.shopee.vn/file/000d7f7e293e29de23ddefbaa0e80436")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
                <form>
                  <div className="_75+JsD J1i6cp B-fiUo">
                    <div className="gZNAGg">
                      <div className="KG+Utm">
                        <div className="K1dDgL">Đăng nhập</div>
                        <div className="NYkwiO">
                          <div className="_6ELZeI">Đăng nhập với mã QR</div>
                          <a className="_7nvtMo" href="/buyer/login/qr?next=https%3A%2F%2Fshopee.vn%2F"><svg width={40} height={40} fill="none" className="sYzQJQ">
                              <g clipPath="url(#clip0)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z" fill="#EE4D2D" />
                                <path d="M37 37H22.5v3H40V22.5h-3V37z" fill="#EE4D2D" />
                                <path d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z" fill="#EE4D2D" />
                                <path fill="#fff" d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z" />
                              </g>
                              <defs>
                                <clipPath id="clip0">
                                  <path fill="#fff" d="M0 0h40v40H0z" />
                                </clipPath>
                              </defs></svg></a>
                        </div>
                      </div>
                    </div>
                    <div className="yXry6s">
                      <div />
                      <div className="y95Jz9">
                        <div className="yup5K8">
                          <input className="pDzPRp" type="text" placeholder="Số điện thoại" autoComplete="tel" name="phone" defaultValue />
                        </div>
                        <div className="pYVjxt" />
                      </div>
                      <button className="wyhvVD _1EApiB hq6WM5 L-VL8Q cepDQ1 _7w24N1" disabled>
                        Tiếp theo
                      </button>
                      <div className="B2fcxX">
                        <Link className="_9Vd0ly" to="/login">Đăng nhập với mật khẩu</Link>
                      </div>
                      <div>
                        <div className="lhhucE">
                          <div className="lreZhl" />
                          <span className="PqS8vj">hoặc</span>
                          <div className="lreZhl" />
                        </div>
                        <div className="_3051nA">
                          <button className="Kwz2lj lyJbNT bQ2eCN">
                            <div className="Bq4Bra">
                              <div className="_1a550J social-white-background social-white-fb-blue-png" />
                            </div>
                            <div className>Facebook</div></button><button className="Kwz2lj lyJbNT bQ2eCN">
                            <div className="Bq4Bra">
                              <div className="_1a550J social-white-background social-white-google-png" />
                            </div>
                            <div className>Google</div></button><button className="Kwz2lj lyJbNT bQ2eCN">
                            <div className="Bq4Bra">
                              <div className="_1a550J social-white-background social-white-apple-black-png" />
                            </div>
                            <div className>Apple</div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="XLzpXt">
                      <div className="Oug9xv Z8OMtU">Bạn mới biết đến Shopee?<Link className="wzgwUg" to="/register">Đăng ký</Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          );
    }
}

export default Loginsms