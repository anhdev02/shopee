import axios from "axios";
import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PrintOrderHelmet from "../home/PrintOrderHelmet";
import { ToastContainer, toast } from "react-toastify";
const PrintOrder = () => {
  const { id } = useParams();
  const orderId = id;
  var url = "http://localhost:8080/api/cart/order/" + orderId;
  let totalPriceSum = 0;
  const [show, setShow] = useState(true);
  const [order, setOrder] = useState();
  const [orderdetails, setOrderDetails] = useState();
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
  var urldetails = "http://localhost:8080/api/cart/orderdetail/" + orderId;
  useEffect(() => {
    axios
      .get(urldetails)
      .then((res) => {
        setOrderDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reducerCategory]);


  function Confirm(){
    var urlconfirm = "http://localhost:8080/api/cart/ordertrash/" + id
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      confirm: true,
      trash: false,
    });
  
    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch(urlconfirm, requestOptions)
      .then((response) => {
        if(response.ok&&show===true)
          // toast.success("Đơn hàng đã được xác nhận!", { position: "top-right" });
          setShow(false)
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  Confirm();

  
  return (
    <>
      <PrintOrderHelmet />
      <div style={{ width: "570px" }} className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="invoice-title">
              <h2>Hóa đơn</h2>
              <h3 className="pull-right">Mã code: #{id}</h3>
            </div>
            <hr />
            <div className="row">
              <div className="col-xs-6">
                <address>
                  <strong>Người nhận: </strong>
                  {order && order.username}
                  <br />
                  <strong>Số điện thoại: </strong>
                  {order && order.phone}
                  <br />
                  <strong>Địa chỉ: </strong>
                  {order && order.address}
                </address>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <address>
                  <strong>Phương thức thanh toán:</strong>
                  <br />
                  Thanh toán khi nhận hàng
                </address>
              </div>
              <div className="col-xs-6 text-right">
                <address>
                  <strong>Ngày đặt:</strong>
                  <br />
                  {order && order.date}
                  <br />
                  <br />
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>Đơn hàng</strong>
                </h3>
              </div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table table-condensed">
                    <thead>
                      <tr>
                        <td>
                          <strong>Tên sản phẩm</strong>
                        </td>
                        <td className="text-center">
                          <strong>Giá</strong>
                        </td>
                        <td className="text-center">
                          <strong>Số lượng</strong>
                        </td>
                        <td className="text-right">
                          <strong>Tổng tiền</strong>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {orderdetails &&
                        orderdetails.map((item, index) => {
                          totalPriceSum =
                            totalPriceSum + item.price * item.quantity;
                          return (
                            <tr key={index}>
                              <td>{item.productName}</td>
                              <td className="text-center">
                                {new Intl.NumberFormat("de-DE", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(item.price)}
                              </td>
                              <td className="text-center">{item.quantity}</td>
                              <td className="text-right">
                                {new Intl.NumberFormat("de-DE", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(item.price * item.quantity)}
                              </td>
                            </tr>
                          );
                        })}
                      <tr>
                        <td className="thick-line" />
                        <td colSpan={2} className="thick-line text-center">
                          <strong>Tổng tiền sản phẩm</strong>
                        </td>
                        <td className="thick-line text-right">
                          {new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "VND",
                          }).format(totalPriceSum)}
                        </td>
                      </tr>
                      <tr>
                        <td className="no-line" />
                        <td colSpan={2} className="no-line text-center">
                          <strong>Phí giao hàng</strong>
                        </td>
                        <td className="no-line text-right">
                          {new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "VND",
                          }).format(16000)}
                        </td>
                      </tr>
                      <tr>
                        <td className="no-line" />
                        <td colSpan={2} className="no-line text-center">
                          <strong>Tổng hóa đơn</strong>
                        </td>
                        <td className="no-line text-right">
                          {new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "VND",
                          }).format(totalPriceSum + 16000)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      <Link id="quaylai" to="/dashboard/order/list"><button type="button" className="btn btn-primary">Quay lai</button></Link>
      </div>
    </>
  );
};

export default PrintOrder;
