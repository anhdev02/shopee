import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import AppUrl from "../api/AppUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserSevice from "../../services/UserSevice";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      password: "",
      passwordConfirm: "",
      loggedIn: false,
    };
  }
  nameOnChange = (e) => {
    this.setState({ name: e.target.value });
  };
  phoneOnChange = (e) => {
    this.setState({ phone: e.target.value });
  };
  passwordOnChange = (e) => {
    this.setState({ password: e.target.value });
  };
  passwordConfirmOnChange = (e) => {
    this.setState({ passwordConfirm: e.target.value });
  };
  componentDidMount() {
    let registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", this.onSubmitRegister);
  }
  onSubmitRegister = (e) => {
    e.preventDefault();
    const data = {
      userName: this.state.name,
      phone: this.state.phone,
      password: this.state.password,
    };
    let passwordConfirm = this.state.passwordConfirm;
    if (data.userName == "") toast.error("Vui lòng nhập tên đăng nhập!");
    else if (data.phone == "") toast.error("Vui lòng nhập số điện thoại!");
    else if (data.password == "") toast.error("Vui lòng nhập mật khẩu!");
    else if (passwordConfirm == "") toast.error("Vui lòng nhập lại mật khẩu!");
    else if (data.password != passwordConfirm)
      toast.error("Mật khẩu không trung khớp");
    else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        username: this.state.name,
        phone: this.state.phone,
        password: this.state.password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:8080/api/auth/signup", requestOptions)
        .then((response) => {
          if(response.ok){
            toast.success("Đăng ký thành công",{position: "top-right"})
            setTimeout(() => this.setState({loggedIn: response.ok}), 2000)
          }else{
            toast.error("Đăng ký tài khoản không thành công!",{position: "top-right"})
          }
        })
        // .then(this.setState({loggedIn: true}))
        .catch();

      let registerBtn = document.getElementById("registerBtn");
      registerBtn.innerHTML = "Registering....";
    }
  };
  render() {
    if (this.state.loggedIn) return <Navigate to="/login" />;
    return (
      <div style={{ backgroundColor: "rgb(238, 77, 45)" }}>
        <div
          className="_3M9lzn PeA8Gc"
          style={{
            backgroundImage:
              'url("https://cf.shopee.vn/file/000d7f7e293e29de23ddefbaa0e80436")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <form id="registerForm">
            <div className="YJ0kaz J1i6cp B-fiUo">
              <div className="gZNAGg">
                <div className="KG+Utm">
                  <div className="K1dDgL">Đăng ký</div>
                </div>
              </div>
              <div className="yXry6s">
                <div />
                <div className="qvdx4B">
                  <div className="yup5K8 ">
                    <input
                      className="pDzPRp EL8Hdg"
                      type="text"
                      placeholder="Tên đăng nhập"
                      id="txtName"
                      onChange={this.nameOnChange}
                      name="name"
                    />
                  </div>
                </div>
                <div className="qvdx4B">
                  <div className="yup5K8 ">
                    <input
                      className="pDzPRp EL8Hdg"
                      type="text"
                      placeholder="Số điện thoại"
                      id="txtPhone"
                      onChange={this.phoneOnChange}
                      name="phone"
                    />
                  </div>
                </div>
                <div className="qvdx4B">
                  <div className="yup5K8 ">
                    <input
                      className="pDzPRp EL8Hdg"
                      type="password"
                      placeholder="Mật khẩu"
                      id="txtPassword"
                      onChange={this.passwordOnChange}
                      name="password"
                    />
                  </div>
                </div>
                <div className="qvdx4B">
                  <div className="yup5K8 ">
                    <input
                      className="pDzPRp EL8Hdg"
                      type="password"
                      placeholder="Nhập lai mật khẩu"
                      onChange={this.passwordConfirmOnChange}
                      name="confirmpassword"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  id="registerBtn"
                  className="wyhvVD _1EApiB hq6WM5 L-VL8Q KgaLSo cepDQ1 _7w24N1"
                >
                  Đăng ký
                </button>
                <div>
                  <div className="lhhucE">
                    <div className="lreZhl" />
                    <span className="PqS8vj">HOẶC</span>
                    <div className="lreZhl" />
                  </div>
                  <div className="_3051nA">
                    <button className="bx8TqH lyJbNT bQ2eCN">
                      <div className="Bq4Bra">
                        <div className="_1a550J social-white-background social-white-fb-blue-png" />
                      </div>
                      <div className>Facebook</div>
                    </button>
                    <button className="bx8TqH lyJbNT bQ2eCN">
                      <div className="Bq4Bra">
                        <div className="_1a550J social-white-background social-white-google-png" />
                      </div>
                      <div className>Google</div>
                    </button>
                  </div>
                </div>
                <div className="btS4Qu">
                  <div className="XZg02F">
                    Bằng việc đăng kí, bạn đã đồng ý với Shopee về
                    <Link to="/rules" className="TVFtd9">
                      Điều khoản dịch vụ
                    </Link>
                    &amp;
                    <Link to="/security" className="TVFtd9">
                      Chính sách bảo mật
                    </Link>
                  </div>
                </div>
              </div>
              <div className="XLzpXt">
                <div className="Oug9xv Z8OMtU">
                  Bạn đã có tài khoản?
                  <Link className="wzgwUg" to="/login">
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Register;
