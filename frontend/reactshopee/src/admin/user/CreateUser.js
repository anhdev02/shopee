import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";


const CreateUser = () => {
  const [fullName, setFullName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [roleSeller, setRoleSeller] = useState();
  const [roleMode, setRoleMode] = useState();
  const [roleAdmin, setRoleAdmin] = useState();

  var role = ["user"];
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      toast.error("Mật khẩu không khớp!", { position: "top-right" });
    } else {
      if (roleSeller === true) role = [...role, "seller"];
      if (roleAdmin === true) role = [...role, "admin"];
      if (roleMode === true) role = [...role, "mod"];

      console.log(role)
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        username: userName,
        fullname: fullName,
        address: address,
        phone: phone,
        password: password,
        role: role,
        email: email
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:8080/api/auth/user", requestOptions)
        .then((response) => {
          response.text()
          if(response.ok){
            toast.success("Tạo người dùng thành công!", { position: "top-right" });
          }else{
            toast.error("Tạo người dùng không thành công!", { position: "top-right" });
          }
        })
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
      document.getElementById("create-category-form").reset();

    }
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Thêm người dùng mới</h4>
      <div className="row">
        <div className="col-xl-12">
          <form id="create-user-form" onSubmit={handleCreateUser}>
            {/* HTML5 Inputs */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Họ và Tên
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      id="html5-text-input"
                      onChange={(event) => setFullName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Điện thoại
                  </label>
                  <div className="col-md-10">
                    <div className="input-group input-group-merge">
                      <span className="input-group-text">(+84)</span>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        onChange={(event) => setPhone(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-md-10">
                    <div className="input-group input-group-merge">
                      <input
                        type="email"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Địa chỉ
                  </label>
                  <div className="col-md-10">
                    <div className="input-group input-group-merge">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Số nhà, Đường, Phường, Quận, Thành phố"
                        aria-label="Amount (to the nearest dollar)"
                        onChange={(event) => setAddress(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Tài khoản
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      id="html5-text-input"
                      onChange={(event) => setUserName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Mật khẩu
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      id="html5-text-input"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Nhập lại mật khẩu
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      id="html5-text-input"
                      onChange={(event) =>
                        setPasswordConfirm(event.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Vai trò
                  </label>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                    className="col-md-10"
                  >
                    <div className="input-group-text">
                      <input
                        className="form-check-input mt-0"
                        checked
                        value="user"
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                      />
                      <label
                        style={{ marginLeft: "15px" }}
                        className="col-form-label"
                      >
                        Người dùng
                      </label>
                    </div>
                    <div className="input-group-text">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="mod"
                        onChange={(event) => setRoleMode(event.target.checked)}
                        aria-label="Checkbox for following text input"
                      />
                      <label
                        style={{ marginLeft: "15px" }}
                        className="col-form-label"
                      >
                        Điều hành
                      </label>
                    </div>
                    <div className="input-group-text">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="admin"
                        onChange={(event) => setRoleAdmin(event.target.checked)}
                        aria-label="Checkbox for following text input"
                      />
                      <label
                        style={{ marginLeft: "15px" }}
                        className="col-form-label"
                      >
                        Quản trị viên
                      </label>
                    </div>
                    <div className="input-group-text">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="seller"
                        onChange={(event) =>
                          setRoleSeller(event.target.checked)
                        }
                        aria-label="Checkbox for following text input"
                      />
                      <label
                        style={{ marginLeft: "15px" }}
                        className="col-form-label"
                      >
                        Người bán
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-md-2"></div>
                  <div className="col-md-10">
                    <button
                      style={{ marginRight: "20px" }}
                      type="submit"
                      className="btn btn-success"
                    >
                      Lưu
                    </button>
                    <Link to="/dashboard/user/list">
                      <button type="button" class="btn btn-dark">
                        Hủy
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* File input */}
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateUser;
