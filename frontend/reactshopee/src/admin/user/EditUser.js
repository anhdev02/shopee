import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const EditUser = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEamil] = useState();
  const [address, setAddress] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  var fullNames, phones, addresss, userNames, emails;
  const [user, setUser] = useState();
  const [roleSeller, setRoleSeller] = useState();
  const [roleMode, setRoleMode] = useState();
  const [roleAdmin, setRoleAdmin] = useState();
  var role = ["user"];
  const { id } = useParams();
  const [reducerCategory, forceUpdate] = useReducer(x=>x+1, 0);
  var url = "http://localhost:8080/api/user/" + id;

  useEffect(() => {
    axios
    .get(url)
    .then((res) => {
        setUser(res.data);
        res.data.roles.forEach(element => {
          if(element.name==="ROLE_SELLER"){
            setRoleSeller(true)
          }
          if(element.name==="ROLE_ADMIN"){
            setRoleAdmin(true)
          }
          if(element.name==="ROLE_MODERATOR"){
            setRoleMode(true)
          }
        });
      })
      .catch((err) => {
          console.log(err);
      });
  }, [reducerCategory]);
  const handleCreateUser = (event) => {
    event.preventDefault();
    if(userName===undefined||userName===null){
        userNames = user.username
    }
    if(phone===undefined||phone===null){
        phones = user.phone
    }
    if(email===undefined||email===null){
      emails = user.email
    }
    if(fullName===undefined||fullName===null){
        fullNames = user.fullName
    }
    if(address===undefined||address===null){
        addresss=user.address
    }
    console.log(fullName)
    console.log(phone)
    console.log(address)
    console.log(userName)
    console.log(password)
    console.log(passwordConfirm)
    if (password !== passwordConfirm) {
      toast.error("Mật khẩu không khớp!", { position: "top-right" });
    } else {
      if (roleSeller === true) role = [...role, "seller"];
      if (roleAdmin === true) role = [...role, "admin"];
      if (roleMode === true) role = [...role, "mod"];
      var urlPut = "http://localhost:8080/api/auth/user/" + user.id;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        username: userName ? userName: userNames,
        fullname: fullName ? fullName: fullNames,
        address: address ? address: addresss,
        phone: phone ? phone: phones,
        password: password,
        role: role,
        email: email ? email: emails
      });

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(urlPut, requestOptions)
        .then((response) =>{
          response.text()
          if(response.ok){
            toast.success("Sửa người dùng thành công!", { position: "top-right" });
            setTimeout(() =>navigate("/dashboard/user/list"), 1000);
          }else{
            toast.error("Sửa người dùng không thành công!", { position: "top-right" });
          }
        })
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
        forceUpdate()
    }
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Chỉnh sửa người dùng</h4>
      <div className="row">
        <div className="col-xl-12">
          <form onSubmit={handleCreateUser}>
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
                      defaultValue={user ? user.fullName : ""}
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
                        defaultValue={user ? user.phone : ""}
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
                        type="text"
                        className="form-control"
                        defaultValue={user ? user.email : ""}
                        aria-label="Amount (to the nearest dollar)"
                        onChange={(event) => setEamil(event.target.value)}
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
                        defaultValue={user ? user.address : ""}
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
                      defaultValue={user ? user.username : ""}
                      onChange={(event) => setUserName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Mật khẩu mới
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
                      {
                        roleMode && roleMode === true ?
                          <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          value="mod"
                          checked
                          onChange={(event) => setRoleMode(event.target.checked)}
                          aria-label="Checkbox for following text input"
                        /> :
                        <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="mod"
                        onChange={(event) => setRoleMode(event.target.checked)}
                        aria-label="Checkbox for following text input"
                      />
                      }
                      <label
                        style={{ marginLeft: "15px" }}
                        className="col-form-label"
                      >
                        Điều hành
                      </label>
                    </div>
                    <div className="input-group-text">
                      {
                        roleAdmin && roleAdmin === true ?
                        <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="admin"
                        checked
                        onChange={(event) => setRoleAdmin(event.target.checked)}
                        aria-label="Checkbox for following text input"
                      />:
                        <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="admin"
                        onChange={(event) => setRoleAdmin(event.target.checked)}
                        aria-label="Checkbox for following text input"
                      />
                      }
                      <label
                        style={{ marginLeft: "15px" }}
                        className="col-form-label"
                      >
                        Quản trị viên
                      </label>
                    </div>
                    <div className="input-group-text">
                      {
                        roleSeller && roleSeller ?
                        <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="seller"
                        checked
                        onChange={(event) =>
                          setRoleSeller(event.target.checked)
                        }
                        aria-label="Checkbox for following text input"
                      />:
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="seller"
                        onChange={(event) =>
                          setRoleSeller(event.target.checked)
                        }
                        aria-label="Checkbox for following text input"
                      />
                      }
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

export default EditUser;
