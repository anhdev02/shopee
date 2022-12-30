import axios from "axios";
import React, { useEffect, useState } from "react";

const ListRole = () => {
  var url = "http://localhost:8080/api/user/listrole";
  const [role, setRole] = useState();
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setRole(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
    <h4 className="fw-bold py-3 mb-4">
       Vai trò
    </h4>
    <div className="card">
    <h5 className="card-header">Danh sách</h5>
      <div style={{height: '50vh', overflowY: 'scroll'}} className="table-responsive text-nowrap">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Tên vai trò</th>
              <th>Các quyền</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            {
              role && 
              role.map((item,index)=>{
                return (
                  <tr>
                  <td>
                    <strong>{item.name}</strong>
                  </td>
                  <td>
                    {item.roles === null ? "Chưa thiết lập" : item.roles}
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
                        <a className="dropdown-item" href="javascript:void(0);">
                          <i className="bx bx-edit-alt me-1" /> Chỉnh sửa
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          <i className="bx bx-trash me-1" /> Xóa
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default ListRole