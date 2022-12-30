import React, { useReducer } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  var url = "http://localhost:8080/api/v1/product/" + id;
  var urlcat = "http://localhost:8080/api/v3/listcategory";
  const [product, setProduct] = useState();
  const [category, setCategory] = useState();

  var prdName1, price1, sales1, cat1, status1, img1, quantity1;
  const [prdName, setPrdName] = useState();
  const [price, setPrice] = useState();
  const [sales, setSales] = useState();
  const [cat, setCat] = useState();
  const [status, setStatus] = useState();
  const [img, setImg] = useState();
  const [quantity, setQuantity] = useState();

  const [image, setImage] = useState();
  const [details, setDetails] = useState();

  const [reducerCategory, forceUpdate] = useReducer(x=>x+1, 0);


  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProduct(res.data);
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
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setDetails(data);
  };

  function GetStatus() {

    if (product !== undefined) {
      if (product.status === true) {
        return (
          <select
            className="form-select"
            id="exampleFormControlSelect1"
            aria-label="Default select example"
            onChange={(event) => setStatus(event.target.value) }
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
            onChange={(event) => setStatus(event.target.value)}
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
  const handleUploadfile = (e) => {
    const file = e.target.files[0];
    setImage("../.././assets/imgs/" + file.name);
    console.log(image)
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
    console.log(prdName, price, sales, cat, status, details, image)
    var urlPut = "http://localhost:8080/api/v1/product/" + product.id
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      productName: prdName!==undefined ? prdName: product.productName,
      categoryId: cat!==undefined ? cat: product.categoryId,
      brandId: 0,
      image: image!==undefined ? image: product.image,
      price: price!==undefined ? price*1000: product.price,
      sales: sales!==undefined ? sales: product.sales,
      status: status!==undefined ? status: product.status,
      trash: 0,
      details: details,
      quantity: quantity!==undefined ? quantity: product.quantity
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(urlPut, requestOptions)
      .then((response) => {
        response.text()
        if(response.ok){
          toast.success("Sửa sản phẩm thành công!", { position: "top-right" });
          setTimeout(() =>navigate("/dashboard/product/list"),1000);
        }else{
          toast.error("Sửa sản phẩm không thành công!", { position: "top-right" });
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      forceUpdate();
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Thêm sản phẩm mới</h4>
      <div className="row">
        <div className="col-xl-12">
          <form onSubmit={handleCreateCat} encType="multipart/form-data">
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
                      defaultValue={product ? product.productName : ""}
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
                        defaultValue={product ? product.price : ""}
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
                    Số lượng sản phẩm
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={product ? product.quantity : ""}
                      id="html5-text-input"
                      onChange={(event) => setQuantity(event.target.value)}
                    />
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
                        defaultValue={product ? product.sales : ""}
                        onChange={(event) => setSales(event.target.value)}
                      />
                      <span className="input-group-text">%</span>
                    </div>
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
                          if(product !== undefined &&product.categoryId===item.id){
                            return (
                              <option selected value={item.id}>{item.categoryName}</option>
                            );
                          }else{
                            return (
                              <option value={item.id}>{item.categoryName}</option>
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
                  <div className="col-md-10">
                   {GetStatus()}
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
                    {
                      product !== undefined ? 
                        <img 
                      className="mb-1 img-thumbnail"
                      hidden={imgSrc.length > 0 ? true : false}
                      src={"../"+product.image}
                      style={{height:100, width: 100}}
                      alt="upload file"></img>: ""
                    }
                    
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
                      data={product ? product.details: details}
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

export default EditProduct;
