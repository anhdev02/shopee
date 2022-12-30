import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

var isShoww = false;
export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: "",
      loggedIn: false,
      isShow: false,
      typePassword: "password",
    };
  }
  usernameOnChange = (e) => {
    this.setState({ username: e.target.value });
  };
  passwordOnChange = (e) => {
    this.setState({ password: e.target.value });
  };
  componentDidMount() {
    let loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", this.onSubmitLogin);
  }
  showPassword = () =>{
    const ipnElement = document.querySelectorAll(".pDzPRp")
    if(isShoww===true){
      isShoww = false
      ipnElement.type = "text"
      console.log(1)
      this.setState({ isShow: false });
    }else{
      isShoww = true
      ipnElement.type = "password"
      console.log(2)
      this.setState({ isShow: true });
    }
  }
  onSubmitLogin = (e) => {
    e.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    if (email == "") toast.error("please write email");
    else if (password == "") toast.error("please write password");
    else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:8080/api/auth/signin", requestOptions)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((result) => {
          console.log(result)
          localStorage.setItem("accessToken", result.accessToken);
          localStorage.setItem("username", result.username);
          localStorage.setItem("id", result.id);
          localStorage.setItem("email", result.email);
          localStorage.setItem("phone", result.phone);
          result.roles.forEach(element => {
            if(element==="ROLE_ADMIN")
              localStorage.setItem("role", element)
          });
          toast.success("Đăng nhập thành công!", { position: "top-right" });
          setTimeout(() => this.setState({ loggedIn: true }), 1000);
          // this.setState({loggedIn: true})
        })
        .catch((error) =>
          toast.error("Tên đăng nhập hoặc mật khẩu không chính xác!", {
            position: "top-right",
          })
        );
    }
  };
  render() {
    if(localStorage.getItem("role")){
      return <Navigate to="/dashboard" />
    }
    if (this.state.loggedIn) return <Navigate to="/" />;
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
          <form id="loginForm">
            <div className="Gxi65y J1i6cp B-fiUo">
              <div className="gZNAGg">
                <div className="KG+Utm">
                  <div className="K1dDgL">Đăng nhập</div>
                  <div className="NYkwiO">
                    <div className="_6ELZeI">Đăng nhập với mã QR</div>
                    <a
                      className="_7nvtMo"
                      href="/buyer/login/qr?next=https%3A%2F%2Fshopee.vn%2F"
                    >
                      <svg
                        width={40}
                        height={40}
                        fill="none"
                        className="sYzQJQ"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z"
                            fill="#EE4D2D"
                          />
                          <path
                            d="M37 37H22.5v3H40V22.5h-3V37z"
                            fill="#EE4D2D"
                          />
                          <path
                            d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z"
                            fill="#EE4D2D"
                          />
                          <path
                            fill="#fff"
                            d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <path fill="#fff" d="M0 0h40v40H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="yXry6s">
                <div />
                <div className="D3QIf1">
                  <div className="yup5K8">
                    <input
                      className="pDzPRp"
                      type="text"
                      placeholder="Tên đăng nhập"
                      onChange={this.usernameOnChange}
                      autoComplete="on"
                      name="loginKey"
                      maxLength={128}
                    />
                  </div>
                  <div className="pYVjxt" />
                </div>
                <div className="vkgBkQ">
                  <div className="yup5K8">
                    <input
                      className="pDzPRp"
                      type={isShoww ? "text" : "password"}
                      placeholder="Mật khẩu"
                      onChange={this.passwordOnChange}
                      autoComplete="current-password"
                      name="password"
                      maxLength={16}
                    />
                    <button type="button" onClick={this.showPassword} className="SnLyxu">
                      {this.state.isShow !== true ? (
                        <svg
                          fill="none"
                          viewBox="0 0 20 10"
                          className="_340FWs"
                        >
                          <path
                            stroke="none"
                            fill="#000"
                            fillOpacity=".54"
                            d="M19.834 1.15a.768.768 0 00-.142-1c-.322-.25-.75-.178-1 .143-.035.036-3.997 4.712-8.709 4.712-4.569 0-8.71-4.712-8.745-4.748a.724.724 0 00-1-.071.724.724 0 00-.07 1c.07.106.927 1.07 2.283 2.141L.631 5.219a.69.69 0 00.036 1c.071.142.25.213.428.213a.705.705 0 00.5-.214l1.963-2.034A13.91 13.91 0 006.806 5.86l-.75 2.535a.714.714 0 00.5.892h.214a.688.688 0 00.679-.535l.75-2.535a9.758 9.758 0 001.784.179c.607 0 1.213-.072 1.785-.179l.75 2.499c.07.321.392.535.677.535.072 0 .143 0 .179-.035a.714.714 0 00.5-.893l-.75-2.498a13.914 13.914 0 003.248-1.678L18.3 6.147a.705.705 0 00.5.214.705.705 0 00.499-.214.723.723 0 00.036-1l-1.82-1.891c1.463-1.071 2.32-2.106 2.32-2.106z"
                          />
                        </svg>
                      ):(
                        <svg fill="none" viewBox="0 0 20 12" class="tF-uq+">
                          <path
                            stroke="none"
                            fill="#000"
                            fill-opacity=".54"
                            fill-rule="evenodd"
                            d="M19.975 5.823V5.81 5.8l-.002-.008v-.011a.078.078 0 01-.002-.011v-.002a.791.791 0 00-.208-.43 13.829 13.829 0 00-1.595-1.64c-1.013-.918-2.123-1.736-3.312-2.368-.89-.474-1.832-.867-2.811-1.093l-.057-.014a2.405 2.405 0 01-.086-.02L11.884.2l-.018-.003A9.049 9.049 0 0010.089 0H9.89a9.094 9.094 0 00-1.78.197L8.094.2l-.016.003-.021.005a1.844 1.844 0 01-.075.017l-.054.012c-.976.226-1.92.619-2.806 1.09-1.189.635-2.3 1.45-3.31 2.371a13.828 13.828 0 00-1.595 1.64.792.792 0 00-.208.43v.002c-.002.007-.002.015-.002.022l-.002.01V5.824l-.002.014a.109.109 0 000 .013L0 5.871a.206.206 0 00.001.055c0 .01 0 .018.002.027 0 .005 0 .009.003.013l.001.011v.007l.002.01.001.013v.002a.8.8 0 00.208.429c.054.067.11.132.165.197a13.9 13.9 0 001.31 1.331c1.043.966 2.194 1.822 3.428 2.48.974.52 2.013.942 3.09 1.154a.947.947 0 01.08.016h.003a8.864 8.864 0 001.596.16h.2a8.836 8.836 0 001.585-.158l.006-.001a.015.015 0 01.005-.001h.005l.076-.016c1.079-.212 2.118-.632 3.095-1.153 1.235-.66 2.386-1.515 3.43-2.48a14.133 14.133 0 001.474-1.531.792.792 0 00.208-.43v-.002c.003-.006.003-.015.003-.022v-.01l.002-.008c0-.004 0-.009.002-.013l.001-.012.001-.015.001-.019.002-.019a.07.07 0 01-.01-.036c0-.009 0-.018-.002-.027zm-6.362.888a3.823 3.823 0 01-1.436 2.12l-.01-.006a3.683 3.683 0 01-2.178.721 3.67 3.67 0 01-2.177-.721l-.009.006a3.823 3.823 0 01-1.437-2.12l.014-.01a3.881 3.881 0 01-.127-.974c0-2.105 1.673-3.814 3.738-3.816 2.065.002 3.739 1.711 3.739 3.816 0 .338-.047.662-.128.975l.011.009zM8.145 5.678a1.84 1.84 0 113.679 0 1.84 1.84 0 01-3.679 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      )}
                    </button>
                  </div>
                  <div className="pYVjxt" />
                </div>
                <button
                  type="submit"
                  className="wyhvVD _1EApiB hq6WM5 L-VL8Q cepDQ1 _7w24N1"
                >
                  Đăng nhập
                </button>
                <div className="tRiWov">
                  <Link className="anLGcx" to="/forgotpassword">
                    Quên mật khẩu
                  </Link>
                  <Link className="anLGcx" to="/loginsms">
                    Đăng nhập với SMS
                  </Link>
                </div>
                <div>
                  <div className="lhhucE">
                    <div className="lreZhl" />
                    <span className="PqS8vj">HOẶC</span>
                    <div className="lreZhl" />
                  </div>
                  <div className="_3051nA">
                    <button className="nGTAZw lyJbNT bQ2eCN">
                      <div className="Bq4Bra">
                        <div className="_1a550J social-white-background social-white-fb-blue-png" />
                      </div>
                      <div className>Facebook</div>
                    </button>
                    <button className="nGTAZw lyJbNT bQ2eCN">
                      <div className="Bq4Bra">
                        <div className="_1a550J social-white-background social-white-google-png" />
                      </div>
                      <div className>Google</div>
                    </button>
                    <button className="nGTAZw lyJbNT bQ2eCN">
                      <div className="Bq4Bra">
                        <div className="_1a550J social-white-background social-white-apple-black-png" />
                      </div>
                      <div className>Apple</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="XLzpXt">
                <div className="Oug9xv Z8OMtU">
                  Bạn mới biết đến Shopee?
                  <Link className="wzgwUg" to="/register">
                    Đăng ký
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

export default Login;
