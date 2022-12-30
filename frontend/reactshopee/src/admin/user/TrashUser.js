import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { confirm } from "react-confirm-box";

const TrashUser = () => {
  var url = "http://localhost:8080/api/user/trashuser";
  const [user, setUser] = useState();
  const [reducerCategory, forceUpdate] = useReducer((x) => x + 1, 0);

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
  function addTrash(event) {
    event.preventDefault();
    var id = event.target.id;
    var url = "http://localhost:8080/api/auth/usertrash/"+id;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      trash: false,
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
      toast.success("Người dùng đã được khôi phục!", { position: "top-right" });

      forceUpdate()
  }
  const Delete = async (event) => {
    event.preventDefault();
    const result = await confirm("Người dùng sẽ bị xóa vĩnh viễn?", event);
    if (result) {
      var id = event.target.id;
      var url = "http://localhost:8080/api/auth/user/" + id
      var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
      fetch(url, requestOptions)
        .then(response => {
          response.text()
          if(response.ok){
            toast.success("Đã xóa vĩnh viễn người dùng!", {
              position: "top-right",
            })
          }else{
            toast.error("Xóa vĩnh viễn người dùng không thành công!", {
              position: "top-right",
            })
          }
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        forceUpdate()
    }
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Người dùng</h4>
      <div className="card">
        <h5 className="card-header">Thùng rác</h5>
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
                <th>Địa chỉ</th>
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
                        {item.address === null
                          ? "Chưa có địa chỉ"
                          : item.address}
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
                              id={item.id}
                              className="dropdown-item"
                              to="#"
                              onClick={addTrash}
                            >
                              <i class="bx bx-share"></i> Khôi phục
                            </Link>
                            <Link
                              id={item.id}
                              className="dropdown-item"
                              to="#"
                              onClick={Delete}
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

export default TrashUser;
