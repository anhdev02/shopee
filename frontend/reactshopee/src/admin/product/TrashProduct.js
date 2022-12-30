import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { confirm } from "react-confirm-box";

const TrashProduct = () => {
  var url = "http://localhost:8080/api/v1/trashproduct"
  const [product, setProduct] = useState();
  const [reducerCategory, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(()=>{
    axios.get(url)
    .then(res=>{
      setProduct(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }, [reducerCategory])
  function addTrash(event) {
    event.preventDefault();
    var id = event.target.id;
    var url = "http://localhost:8080/api/v1/producttrash/" + id
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
      toast.success("Sản phẩm đã được khôi phục!", { position: "top-right" });
      forceUpdate()
  }
  const Delete = async (event) => {
    event.preventDefault();
    const result = await confirm("Sản phẩm sẽ bị xóa vĩnh viễn?", event);
    if (result) {
      var id = event.target.id;
      var url = "http://localhost:8080/api/v1/product/" + id
      var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
      fetch(url, requestOptions)
        .then(response => {
          response.text()
          if(response.ok){
            toast.success("Đã xóa vĩnh viễn sản phẩm!", {
              position: "top-right",
            })
          }else{
            toast.error("Xóa vĩnh viễn sản phẩm không thành công!", {
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
      <h4 className="fw-bold py-3 mb-4">Sản phẩm</h4>
      <div className="card">
        <h5 className="card-header">Thùng rác</h5>
        <div
          style={{ height: "50vh", overflowY: "scroll" }}
          className="table-responsive text-nowrap"
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Sales</th>
                <th>Mô tả</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {product &&
                product.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img width={60} src={item.image} />
                      </td>
                      <td>
                        <div style={{ width: "200px", marginTop: "2vh" }}>
                          <p
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            <strong>{item.productName}</strong>
                          </p>
                        </div>
                      </td>
                      <td>{item.price}</td>
                      <td>{item.sales}</td>
                      <td>
                        <div style={{ width: "200px", marginTop: "2vh" }}>
                          <p
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {item.details}
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
                              to="#"
                              id={item.id}
                              onClick={addTrash}
                            >
                              <i class="bx bx-share"></i> Khôi phục
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              id={item.id}
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

export default TrashProduct;
