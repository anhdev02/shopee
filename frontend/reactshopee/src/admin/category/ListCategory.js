import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { confirm } from "react-confirm-box";

const ListCategory = () => {

  var url = "http://localhost:8080/api/v3/listcategory";
  const [category, setCategory] = useState();
  const [reducerCategory, forceUpdate] = useReducer(x=>x+1, 0);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reducerCategory]);
  const addTrash = async (event) => {
    event.preventDefault();
    const result = await confirm("Bạn có chắc muốn xóa danh mục?", event);
    if (result) {
      var id = event.target.id;
      var url = "http://localhost:8080/api/v3/categorytrash/" + id
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
        toast.success("Đã xóa tạm thời danh mục!", { position: "top-right" });
        forceUpdate()
    } 
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Danh mục</h4>
      <div className="card">
        <h5 className="card-header">Danh sách</h5>
        <div
          style={{ height: "50vh", overflowY: "scroll" }}
          className="table-responsive text-nowrap"
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Tên danh mục</th>
                <th>Danh mục cha</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {category &&
                category.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <strong>{item.categoryName}</strong>
                      </td>
                      <td>
                        {item.parent === 0
                          ? "Danh mục gốc"
                          : category.map((subcat, index) => {
                              if (item.parent === subcat.id) {
                                return subcat.categoryName;
                              }
                            })}
                      </td>
                      <td>
                        {item.status === false ? (
                          <span className="badge bg-label-primary me-1">
                            Inactive
                          </span>
                        ) : (
                          <span className="badge bg-label-success me-1">
                            Active
                          </span>
                        )}
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
                              to={"/dashboard/category/edit/" + item.id}
                            >
                              <i className="bx bx-edit-alt me-1" /> Chỉnh sửa
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              id={item.id}
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

export default ListCategory;
