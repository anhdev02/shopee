import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const CreateProduct = () => {
  var url = "http://localhost:8080/api/v3/listcategory";
  const [category, setCategory] = useState();
  const [prdName, setPrdName] = useState();
  const [price, setPrice] = useState();
  const [sales, setSales] = useState();
  const [cat, setCat] = useState(5);
  const [status, setStatus] = useState(true);
  const [image, setImage] = useState();
  const [details, setDetails] = useState();
  const [quantity, setQuantity] = useState();


  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setDetails(data);
  };
  const handleUploadfile = (e) => {
    const file = e.target.files[0];
    // file.name = new TimeRanges() + file.name;
    console.log(file.name)
    setImage("../.././assets/imgs/" + file.name);
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    )
      setImgSrc(URL.createObjectURL(file));

      var formdata = new FormData();
      formdata.append("file", file);
      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
  
      fetch("http://localhost:8080/api/v1/upload-file", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
  };

  const handleCreateCat = (event) => {
    event.preventDefault();


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      productName: prdName,
      categoryId: cat,
      brandId: 0,
      image: image,
      price: price*1000,
      sales: sales,
      status: status,
      trash: 0,
      details: details,
      quantity: quantity
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/v1/product", requestOptions)
      .then((response) => {
        console.log(response.text())
        if(response.ok)
          toast.success("Tạo sản phẩm thành công!", { position: "top-right" });
        else
         toast.error("Tạo sản phẩm không thành công!", { position: "top-right" });
      })
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log("error", error)
      });
      document.getElementById("create-product-form").reset();


  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Thêm sản phẩm mới</h4>
      <div className="row">
        <div className="col-xl-12">
          <form id="create-product-form" onSubmit={handleCreateCat} encType="multipart/form-data">
            {/* HTML5 Inputs */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Tên sản phẩm
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      id="html5-text-input"
                      onChange={(event) => setPrdName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Giá
                  </label>
                  <div className="col-md-10">
                    <div className="input-group input-group-merge">
                      <span className="input-group-text">VNĐ</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={100}
                        onChange={(event) => setPrice(event.target.value)}
                      />
                      <span className="input-group-text">.000</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Sales
                  </label>
                  <div className="col-md-10">
                    <div className="input-group input-group-merge">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={25}
                        onChange={(event) => setSales(event.target.value)}
                      />
                      <span className="input-group-text">%</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Số lượng
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      id="html5-text-input"
                      onChange={(event) => setQuantity(event.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-md-2 col-form-label"
                  >
                    Loại danh mục
                  </label>
                  <div className="col-md-10">
                    <select
                      className="form-select"
                      id="exampleFormControlSelect1"
                      onChange={(event) => setCat(event.target.value)}
                    >
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
                      onChange={(event) => setStatus(event.target.value)}
                    >
                      <option selected value={true}>
                        Hiện
                      </option>
                      <option value={false}>Ẩn</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-md-2 col-form-label"
                  >
                    Hình ảnh
                  </label>
                  <div className="col-md-10">
                    <img
                      className="mb-1 img-thumbnail"
                      hidden={imgSrc.length > 0 ? false : true}
                      src={imgSrc}
                      style={{ height: 100, width: 100 }}
                      alt="upload file"
                    ></img>
                    <input
                      className="form-control"
                      type="file"
                      onChange={handleUploadfile}
                      id="formFile"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-md-2 col-form-label"
                  >
                    Mô tả
                  </label>
                  <div className="col-md-10">
                    {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} /> */}
                    <CKEditor
                      editor={ClassicEditor}
                      data={details}
                      onChange={handleChange}
                    />
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
                    <Link to="/dashboard/product/list">
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

export default CreateProduct;
