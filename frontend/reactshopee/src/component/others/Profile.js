import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";

const Profile = () => {
  var url = "http://localhost:8080/api/user/"+ localStorage.getItem("id");
  const [user, setUser] = useState();
  const [reducerCategory, forceUpdate] = useReducer(x=>x+1, 0);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reducerCategory]);
  return (
    <div style={{marginTop: '18vh'}} className="container pIHdXn">
      <div className="kul4+s">
        <div className="AmWkJQ">
          <a className="_1O4r+C" href="https://shopee.vn/user/account/profile">
            <div style={{width: 50, height: 50}} className="shopee-avatar">
              <div className="shopee-avatar__placeholder">
                <svg
                  enableBackground="new 0 0 15 15"
                  viewBox="0 0 15 15"
                  x={0}
                  y={0}
                  className="shopee-svg-icon icon-headshot"
                >
                  <g>
                    <circle
                      cx="7.5"
                      cy="4.5"
                      fill="none"
                      r="3.8"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                      fill="none"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                    />
                  </g>
                </svg>
              </div>
              <img
                className="shopee-avatar__img"
                src="https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg"
              />
            </div>
          </a>
          <div className="miwGmI">
            <div className="mC1Llc">{user && user.username}</div>
            <div>
              <a
                className="_78QHr1"
                href="https://shopee.vn/user/account/profile"
              >
                <svg
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "4px" }}
                >
                  <path
                    d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                    fill="#9B9B9B"
                    fillRule="evenodd"
                  />
                </svg>
                Sửa hồ sơ
              </a>
            </div>
          </div>
        </div>
        <div className="rhmIbk">
          <div className="stardust-dropdown stardust-dropdown--open">
            <div className="stardust-dropdown__item-header">
              <a
                className="+1U02e"
                href="https://shopee.vn/user/account/profile"
              >
                <div className="bfikuD">
                  <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" />
                </div>
                <div className="DlL0zX">
                  <span className="adF7Xs">Tài khoản của tôi</span>
                </div>
              </a>
            </div>
            <div
              className="stardust-dropdown__item-body stardust-dropdown__item-body--open"
              style={{ opacity: 1 }}
            >
              <div className="Yu7gVR">
                <a
                  className="FEE-3D tH0d6d"
                  href="https://shopee.vn/user/account/profile"
                >
                  <span className="qyt-aY">Hồ sơ</span>
                </a>
                <a
                  className="FEE-3D"
                  href="https://shopee.vn/user/account/payment"
                >
                  <span className="qyt-aY">Ngân hàng</span>
                </a>
                <a
                  className="FEE-3D"
                  href="https://shopee.vn/user/account/address"
                >
                  <span className="qyt-aY">Địa chỉ</span>
                </a>
                <a
                  className="FEE-3D"
                  href="https://shopee.vn/user/account/password"
                >
                  <span className="qyt-aY">Đổi mật khẩu</span>
                </a>
              </div>
            </div>
          </div>
          <div className="stardust-dropdown">
            <div className="stardust-dropdown__item-header">
              <a className="+1U02e" href="https://shopee.vn/user/purchase">
                <div className="bfikuD">
                  <img src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078" />
                </div>
                <div className="DlL0zX">
                  <span className="adF7Xs">Đơn Mua</span>
                </div>
              </a>
            </div>
            <div
              className="stardust-dropdown__item-body"
              style={{ opacity: 0 }}
            >
              <div className="Yu7gVR" />
            </div>
          </div>
          <div className="stardust-dropdown">
            <div className="stardust-dropdown__item-header">
              <a
                className="+1U02e"
                href="https://shopee.vn/user/notifications/order"
              >
                <div className="bfikuD">
                  <img src="https://cf.shopee.vn/file/e10a43b53ec8605f4829da5618e0717c" />
                </div>
                <div className="DlL0zX">
                  <span className="adF7Xs">Thông báo</span>
                </div>
              </a>
            </div>
            <div className="stardust-dropdown__item-body">
              <div className="Yu7gVR">
                <a
                  className="FEE-3D"
                  href="https://shopee.vn/user/notifications/order"
                >
                  <span className="qyt-aY">Cập nhật đơn hàng</span>
                </a>
                <a
                  className="FEE-3D"
                  href="https://shopee.vn/user/notifications/promotion"
                >
                  <span className="qyt-aY">Khuyến mãi</span>
                </a>
                <a
                  className="FEE-3D"
                  href="https://shopee.vn/user/notifications/wallet"
                >
                  <span className="qyt-aY">Cập nhật Ví</span>
                </a>
                <a
                  className="FEE-3D"
                  href="https://shopee.vn/user/notifications/activity"
                >
                  <span className="qyt-aY">Hoạt động</span>
                </a>
                <a
                  className="FEE-3D"
                  href="https://shopee.vn/user/notifications/rating"
                >
                  <span className="qyt-aY">Cập nhật đánh giá</span>
                </a>
                <a
                  className="FEE-3D"
                  href="https://shopee.vn/user/notifications/shopee"
                >
                  <span className="qyt-aY">Cập nhật Shopee</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xMDeox">
        <div className="Hvae38" role="main">
          <div style={{ display: "contents" }}>
            <div className="TApBFI">
              <div className="Q5feZb">
                <h1 className="OomjNA">Hồ sơ của tôi</h1>
                <div className="HJ5nmd">
                  Quản lý thông tin hồ sơ để bảo mật tài khoản
                </div>
              </div>
              <div className="+eqaLN">
                <div className="InGfFt">
                  <form>
                    <div className="dghdd9">
                      <div className="h4eiAQ">
                        <div className="tBgRZR">
                          <label>Tên đăng nhập</label>
                        </div>
                        <div className="gV+dPk">
                          <div>
                            <div className="ovqcxY">
                              <input
                                type="text"
                                placeholder
                                className="y-NK4C"
                                defaultValue={user && user.username}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dghdd9">
                      <div className="h4eiAQ">
                        <div className="tBgRZR">
                          <label>Tên</label>
                        </div>
                        <div className="gV+dPk">
                          <div>
                            <div className="ovqcxY">
                              <input
                                type="text"
                                placeholder
                                className="y-NK4C"
                                defaultValue={user && user.fullName}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dghdd9">
                      <div className="h4eiAQ">
                        <div className="tBgRZR">
                          <label>Email</label>
                        </div>
                        <div className="gV+dPk">
                          <div>
                            <div className="ovqcxY">
                              <input
                                type="text"
                                placeholder
                                className="y-NK4C"
                                defaultValue={user && user.email}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dghdd9">
                      <div className="h4eiAQ">
                        <div className="tBgRZR">
                          <label>Số điện thoại</label>
                        </div>
                        <div className="gV+dPk">
                          <div>
                            <div className="ovqcxY">
                              <input
                                type="text"
                                placeholder
                                className="y-NK4C"
                                defaultValue={user && user.phone}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="X9w211">
                      <button
                        type="button"
                        className="btn btn-solid-primary btn--m btn--inline"
                        aria-disabled="false"
                      >
                        Lưu
                      </button>
                    </div>
                  </form>
                </div>
                <div className="_6-dPdd">
                  <div className="DyzGC5">
                    <div className="miizbf">
                      <div
                        className="qpNcUn"
                        style={{
                          backgroundImage:
                            'url("https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg")',
                        }}
                      />
                    </div>
                    <input
                      className="_8LDVUy"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                    />
                    <button
                      type="button"
                      className="btn btn-light btn--m btn--inline"
                    >
                      Chọn ảnh
                    </button>
                    <div className="dWItVn">
                      <div className="ayiXAf">Dụng lượng file tối đa 1 MB</div>
                      <div className="ayiXAf">Định dạng:.JPEG, .PNG</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
