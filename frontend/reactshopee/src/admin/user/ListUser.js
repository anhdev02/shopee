import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { confirm } from "react-confirm-box";


const ListUser = () => {
  var url = "http://localhost:8080/api/user/listuser";
  const [reducerCategory, forceUpdate] = useReducer(x=>x+1, 0);
  const [user, setUser] = useState();
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
  const addTrash = async (event) => {
    event.preventDefault();
    const result = await confirm("Bạn có chắc muốn xóa người dùng?", event);
    if (result) {
      var id = event.target.id;
      var url = "http://localhost:8080/api/auth/usertrash/"+id;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        trash: true,
      });
  
      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
        toast.success("Đã xóa tạm thời người dùng!", { position: "top-right" });
        forceUpdate()
    }
   
  }

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Người dùng</h4>
      <div className="card">
        <h5 className="card-header">Danh sách</h5>
        <div
          style={{ height: "50vh", overflowY: "scroll" }}
          className="table-responsive text-nowrap"
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Tài khoản</th>
                <th>Họ và Tên</th>
                <th>Điện thoại</th>
                <th>Email</th>
                <th>Vai trò</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {user &&
                user.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <strong>{item.username}</strong>
                      </td>
                      <td>
                        {item.fullName === null
                          ? "Chưa có họ tên"
                          : item.fullName}
                      </td>
                      <td>{item.phone}</td>
                      <td>
                        {item.email === null
                          ? "Chưa có email"
                          : item.email}
                      </td>
                      <td>
                        {item.roles.length <= 1
                          ? item.roles[0].name
                          : item.roles.map((role) => {
                              return (
                                <span>
                                  {role.name}
                                  <br />
                                </span>
                              );
                            })}
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn p-0 dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div className="dropdown-menu">
                            <Link
                              className="dropdown-item"
                              to={"/dashboard/user/edit/" + item.id}
                            >
                              <i className="bx bx-edit-alt me-1" /> Chỉnh sửa
                            </Link>
                            <Link
                              className="dropdown-item"
                              id={item.id}
                              to="#"
                              onClick={addTrash}
                            >
                              <i className="bx bx-trash me-1" /> Xóa
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ListUser;
