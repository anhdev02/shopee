import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const CreateCategory = () => {
  var url = "http://localhost:8080/api/v3/listcategory"
  const [category, setCategory] = useState();
  const [catName, setCatName] = useState();
  const [parent, setParent] = useState(0);
  const [status, setStatus] = useState(1);
  useEffect(()=>{
    axios.get(url)
    .then(res=>{
      setCategory(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  
  const handleCreateCat = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      categoryName: catName,
      parent: parent,
      status: status,
      trash: 0,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/v3/category", requestOptions)
      .then((response) => {
        if(response.ok){
          toast.success("Tạo danh mục thành công!", { position: "top-right" });
        }else{
          toast.error("Tạo danh mục không thành công!", { position: "top-right" });
        }
        response.text();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      document.getElementById("create-category-form").reset();
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Thêm danh mục sản phẩm mới</h4>
      <div className="row">
        <div className="col-xl-12">
          <form id="create-category-form" onSubmit={handleCreateCat}>
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
                      id="html5-text-input"
                      onChange={(event) => setCatName(event.target.value)}
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
                      onChange={(event) => setParent(event.target.value)}
                    >
                      <option selected value={0}>
                        Danh mục gốc
                      </option>
                      {category &&
                        category.map((item) => {
                          return (
                            <option value={item.id}>{item.categoryName}</option>
                          );
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
                  <div className="col-md-10">
                    <select
                      className="form-select"
                      id="exampleFormControlSelect1"
                      aria-label="Default select example"
                      onChange={(event) => setStatus(event.target.value)}
                    >
                      <option selected value={1}>
                        Hiện
                      </option>
                      <option value={0}>Ẩn</option>
                    </select>
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

export default CreateCategory;
