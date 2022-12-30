import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { confirm } from "react-confirm-box";
import { ToastContainer, toast } from "react-toastify";

const ListOrder = () => {
  var url = "http://localhost:8080/api/cart/listorder";
  const [order, setOrder] = useState();
  const [reducerCategory, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reducerCategory]);
  const addTrash = async (event) => {
    event.preventDefault();
    const result = await confirm("Bạn có chắc muốn hủy đơn hàng?", event);
    if (result) {
      var id = event.target.id;
      var url = "http://localhost:8080/api/cart/ordertrash/" + id;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        confirm: false,
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
        toast.success("Đã xóa tạm thời đơn hàng!", { position: "top-right" });
        forceUpdate()
    }

  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Đơn hàng</h4>
      <div className="card">
        <h5 className="card-header">Danh sách chưa xác nhận</h5>
        <div
          style={{ height: "50vh", overflowY: "scroll" }}
          className="table-responsive text-nowrap"
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên người nhận</th>
                <th>Địa chỉ</th>
                <th>Điện thoại</th>
                <th>Tổng tiền</th>
                <th>Ngày tạo</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {order &&
                order.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>
                        <strong>{item.username}</strong>
                      </td>
                      <td>
                      <div style={{width: '200px', marginTop: '2vh'}}>
                        <p style={{overflow:'hidden', textOverflow: 'ellipsis'}}>{item.address}</p>
                      </div>
                      </td>
                      <td>{item.phone}</td>
                      <td>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(item.total)}</td>
                      <td>
                        <div style={{ width: "200px", marginTop: "2vh" }}>
                          <p
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {item.date}
                          </p>
                        </div>
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
                              to={"/dashboard/printorder/"+item.id}
                            >
                              <i class="bx bxs-printer"></i> In đơn
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              id={item.id}
                              onClick={addTrash}
                            >
                              <i className="bx bx-trash me-1" /> Hủy đơn
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

export default ListOrder;
