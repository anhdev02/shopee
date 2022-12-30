import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate, Link } from "react-router-dom";

const EditCategory = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const [cat, setCat] = useState();
  const [reducerCategory, forceUpdate] = useReducer(x=>x+1, 0);
  var catName, parent, status;
  const { id } = useParams();
  var url = "http://localhost:8080/api/v3/category/" + id;
  var urlcat = "http://localhost:8080/api/v3/listcategory";
  useEffect(() => {
      axios
      .get(url)
      .then((res) => {
          setCat(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [reducerCategory]);
  useEffect(() => {
    axios
      .get(urlcat)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function GetRoot() {
    if (cat !== undefined) {
      if (cat.parent === 0) {
        return (
          <option selected value={0}>
            Danh mục gốc
          </option>
        );
      } else {
        return <option value={0}>Danh mục gốc</option>;
      }
    }
  }
  function GetStatus() {
    if (cat !== undefined) {
      if (cat.status === true) {
        return (
          <select
            className="form-select"
            id="exampleFormControlSelect1"
            aria-label="Default select example"
            onChange={(event) => status = event.target.value}
          >
            <option selected value={true}>
              Hiện
            </option>
            <option value={false}>Ẩn</option>
          </select>
        );
      } else {
        return (
          <select
            className="form-select"
            id="exampleFormControlSelect1"
            aria-label="Default select example"
            onChange={(event) => status  = event.target.value}
          >
            <option value={true}>Hiện</option>
            <option selected value={false}>
              Ẩn
            </option>
          </select>
        );
      }
    }
  }
  const handleCreateCat = (event) => {
    event.preventDefault();
    if(catName===undefined){
        catName = cat.categoryName
    }
    if(parent===undefined){
        parent = cat.parent
    }
    if(status===undefined){
        status = cat.status
    }
    var urlPut = "http://localhost:8080/api/v3/category/" + cat.id;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      categoryName: catName,
      parent: parent,
      status: status,
      trash: false,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(urlPut, requestOptions)
      .then((response) => {
        if(response.ok){
          toast.success("Sửa danh mục thành công!", { position: "top-right" });
          setTimeout(() => navigate("/dashboard/category/list"), 1000);
        }else{
          toast.error("Sửa danh mục không thành công!", { position: "top-right" });
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      forceUpdate();
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Chỉnh sửa danh mục</h4>
      <div className="row">
        <div className="col-xl-12">
          <form onSubmit={handleCreateCat}>
            {/* HTML5 Inputs */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Tên danh mục
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={cat ? cat.categoryName : ""}
                      id="html5-text-input"
                      onChange={(event) => catName = event.target.value}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-md-2 col-form-label"
                  >
                    Danh mục cha
                  </label>
                  <div className="col-md-10">
                    <select
                      className="form-select"
                      id="exampleFormControlSelect1"
                      aria-label="Default select example"
                      onChange={(event) => parent = event.target.value}
                    >
                      {GetRoot()}

                      {category &&
                        category.map((item) => {
                          if (cat !== undefined && cat.parent === item.id) {
                            return (
                              <option selected value={item.id}>
                                {item.categoryName}
                              </option>
                            );
                          } else {
                            return (
                              <option value={item.id}>
                                {item.categoryName}
                              </option>
                            );
                          }
                        })}
                    </select>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-md-2 col-form-label"
                  >
                    Trạng thái
                  </label>
                  <div className="col-md-10">{GetStatus()}</div>
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
                    <Link to="/dashboard/category/list">
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

export default EditCategory;
