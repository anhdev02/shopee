import React, { Component } from "react";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div data-vmid="root_1178985723">
        <header className="header" data-vmid="header_0131016683">
          <nav>
            <Link to="/">
              <img
                className="header__logo"
                src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/shopee_logo2.c6c25fa3.png"
                alt="shopee_logo"
                title="go to shopee"
              />
            </Link>
            <Link to='/mall'>
              <a
                className="header__link"
                href="#st"
              >
                <span>Shopee Mall</span>{" "}
              </a>
            </Link>
            <Link
              className="header__link"
              to="/loginsell"
            >
              <span>Kênh Người Bán</span>
            </Link>
          </nav>
          <span className="header__media">
            <a
              className="header__media__icon header__media__icon--fb"
              href="#st"
              target="_blank"
            ><span></span></a>
            <a
              className="header__media__icon header__media__icon--inst"
              href="#st"
              target="_blank"
            ><span></span></a>
          </span>
        </header>
        <section
          className="banner"
          style={{
            backgroundImage:
              "url(https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/banner_bg_pc.8bb0ab2f.png)",
          }}
          data-vmid="banner_6063683494"
        >
          <div className="banner__content">
            <div className="banner__text">
              <p>Khám phá Shopee!</p>
              <p>Ứng dụng mua sắm trực tuyến hàng đầu Việt Nam.</p>
            </div>
            <nav>
              <ul className="banner__download">
                <li className>Tải ứng dụng ngay!</li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://itunes.apple.com/VN/app/id959841449?mt=8"
                  >
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/appleStore.0ca159be.png"
                      alt="Apple Store"
                    />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.shopee.vn&referrer=af_tranid%3Drsx9V4J79OX3NH5LwyqLcw%26pid%3DOrganicA%26c%3Dlp_home_and1"
                  >
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/googlePlay.df026781.png"
                      alt="Google Play"
                    />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://appgallery.cloud.huawei.com/ag/n/app/C101433653?channelId=web&detailType=0"
                  >
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/huaweiPlay.e08496e9.png"
                      alt="Huawei APP Gallery"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="banner__image">
            <img
              className
              src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/banner_handx.7eb77eba.png"
              alt="banner logo"
            />
          </div>
        </section>
        <section className="slogan" data-vmid="slogan_7534020237">
          <h2 className="slogan__main">Mua sắm mọi lúc, mọi nơi!</h2>
          <h3 className="slogan__sub">
            Tận hưởng các chương trình khuyến mãi hấp dẫn, siêu tiết kiệm đến từ
            các Shop bán hàng uy tín nhất.
          </h3>
        </section>
        <section className="features" data-vmid="features_4709612304">
          <ul className="clear features__list">
            <li>
              <div className="feature-item" data-vmid="feature-item_5872655599">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMzNkI5MkU0RDZDQjExRTc5OENCODVDNUI5RjBCOEY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMzNkI5MkU1RDZDQjExRTc5OENCODVDNUI5RjBCOEY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzM2QjkyRTJENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzM2QjkyRTNENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6qYzHIAAAOKUlEQVR42uxdC1RU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"
                  alt=""
                  className="feature-item__icon"
                />
                <br />
                <span className="feature-item__main-title">
                  Hỗ trợ vận chuyển
                </span>
                <br />
                <span className="feature-item__sub-title">
                  Trạng thái đơn hàng của bạn luôn được cập nhật chi tiết kể từ
                  khi bạn đặt hàng
                </span>
              </div>
            </li>
            <li>
              <div className="feature-item" data-vmid="feature-item_4056337774">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/customer_support.cd0f596c.png"
                  alt=""
                  className="feature-item__icon"
                />
                <br />
                <span className="feature-item__main-title">
                  Hỗ trợ khách hàng
                </span>
                <br />
                <span className="feature-item__sub-title">
                  Bộ phận Chăm Sóc Khách Hàng luôn sẵn sàng hỗ trợ bạn 24/7
                </span>
              </div>
            </li>
            <li>
              <div className="feature-item" data-vmid="feature-item_2259357632">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="feature-item__icon"
                />
                <br />
                <span className="feature-item__main-title">Gợi Ý Hôm Nay</span>
                <br />
                <span className="feature-item__sub-title">
                  Lựa chọn những sản phẩm phù hợp với bạn trong mục Gợi Ý Hôm
                  Nay
                </span>
              </div>
            </li>
            <li>
              <div className="feature-item" data-vmid="feature-item_5441028306">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="feature-item__icon"
                />
                <br />
                <span className="feature-item__main-title">
                  Phương thức thanh toán an toàn
                </span>
                <br />
                <span className="feature-item__sub-title">
                  Thanh toán dễ dàng và thuận tiện: Thanh toán khi nhận hàng
                  hoặc Thanh toán trước bằng Thẻ Tín dụng/Ghi nợ.
                </span>
              </div>
            </li>
            <li>
              <div className="feature-item" data-vmid="feature-item_8688436057">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/chat.0f0e4025.png"
                  alt=""
                  className="feature-item__icon"
                />
                <br />
                <span className="feature-item__main-title">
                  Tính năng "Chat"
                </span>
                <br />
                <span className="feature-item__sub-title">
                  Trò chuyện trực tiếp với người bán để được tư vấn thêm về sản
                  phẩm. Bạn cũng có thể thương lượng về mức giá mong muốn với
                  Người bán thông qua mục "Chat"
                </span>
              </div>
            </li>
            <li>
              <div className="feature-item" data-vmid="feature-item_5106397925">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/guarantee.af32c77f.png"
                  alt=""
                  className="feature-item__icon"
                />
                <br />
                <span className="feature-item__main-title">Shopee đảm bảo</span>
                <br />
                <span className="feature-item__sub-title">
                  Shopee cam kết rằng số tiền bạn thanh toán sẽ được chuyển đến
                  người bán sau khi bạn nhận được hàng. Chúng tôi luôn bảo vệ
                  bạn!
                </span>
              </div>
            </li>
          </ul>
        </section>
        <section
          className="main-feature clear"
          data-vmid="main-feature_0951989939"
        >
          <div className="main-feature__first">
            <div style={{ padding: "0 6%", paddingTop: "100px" }}>
              <div className="main-feature__first-image">
                <img
                  className="main-feature__first-popimg pop"
                  src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/feature_top_bubble.715147c5.png"
                  alt="pop img"
                  style={{ top: "100px", transform: "scale(0, 0)" }}
                />
                <img
                  className="main-feature__first-img"
                  src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/feature_top_phone.532509ce.png"
                  alt="Official Shops"
                />
              </div>
              <div className="main-feature__first-text">
                <img
                  src="data:image/png;base64,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"
                  alt="shopee mall"
                  style={{ marginBottom: "16px" }}
                  className="main-feature__first-main-logo"
                />
                <p className="main-feature__first-sub-title">
                  Shopee - Nơi sở hữu tất cả những sản phẩm bạn yêu thích.
                </p>
              </div>
            </div>
          </div>
          <div className="main-feature__second">
            <div className="main-feature__second-bg" />
            <div style={{ padding: "0 6%" }}>
              <div className="main-feature__second-text">
                <p className="main-feature__second-main-title">
                  Shopee - Mua và bán hàng trực tuyến
                </p>
                <p className="main-feature__second-sub-title">
                  Thỏa thích mua sắm và kinh doanh trên sàn giao dịch thương mại
                  điện tử uy tín.
                </p>
              </div>
              <div className="main-feature__second-image">
                <img
                  className="main-feature__second-popimg pop"
                  src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/feature_bottom_bubble.da5f325e.png"
                  alt="pop img"
                  style={{ top: "80px", transform: "scale(0, 0)" }}
                />
                <img
                  className="main-feature__second-img"
                  src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/feature_bottom_phone.cf34d9d0.png"
                  alt="Shopee - Mua và bán hàng trực tuyến"
                />
              </div>
            </div>
          </div>
          <div className="main-feature__third">
            <div className="main-feature__third-bg" />
            <div
              style={{ padding: "0 6%" }}
              className="main-feature__third-wrapper"
            >
              <div className="main-feature__third-image">
                <img
                  className="main-feature__third-popimg pop"
                  src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/feature_welcome_bubble.83a42989.png"
                  alt="pop img"
                  style={{ top: "50px", transform: "scale(0, 0)" }}
                />
                <img
                  className="main-feature__third-img"
                  src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/feature_welcome.760c7617.png"
                  alt="Qùa tặng khách hàng mới"
                />
              </div>
              <div className="main-feature__third-text">
                <p className="main-feature__third-main-title">
                  Qùa tặng khách hàng mới
                </p>
                <p className="main-feature__third-sub-title">
                  Qùa tặng độc quyền dành cho khách hàng mới tại Shopee
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="carousel" data-vmid="carousel_2061326797">
          <p className="carousel__title">Người dùng nói gì về Shopee?</p>
          <div className="unslider">
            <div
              id="carousel__body"
              className="unslider-horizontal"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <ul
                className="clear unslider-wrap unslider-carousel"
                style={{ width: "400%", marginLeft: "-100%", left: "0%" }}
              >
                <li className="unslider-clone" style={{ width: "25%" }}>
                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      height: "247.6px",
                    }}
                    data-vmid="carousel-item_4282463476"
                  >
                    <img
                      className="carousel-item__cite-icon"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA2CAYAAACWeYpTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE3MUVFNDg1RDZDQjExRTc5OENCODVDNUI5RjBCOEY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE3MUVFNDg2RDZDQjExRTc5OENCODVDNUI5RjBCOEY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTcxRUU0ODNENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTcxRUU0ODRENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43hmo+AAADGElEQVR42uxYTY8SQRCleoYNIOACIhsTxQSjZk0E8aDhYEyMie5h44mb/4VfxMGjHtXsAf4BMVFOCAKGhSzfbWHYzSxhZnr6Y5lhqWQODJ3qevWqXlcP+OQY+DZrVFWAmwbmGDRsEUBLwMQBQEcgm83mjfF4/HQ6nR7hcywSca1W2xuNRo8mk8kb9PWRhxRdNov9fv92IBB4DgB3L1JLaZsHYKfTiUYikTz6yuCjcbYYZWEUnGQdM/46GAx+MILksVKpBFgNz6LRaJEQ8pATpI+VUWaQrVYrHIvFjjCgfdGAqtWqnsvl3oomixUoOOlFBHmMgYUlgXyHvu7IViYiGlg8Hn8vA+TCstnsKwUgwQwoOAjsJQYWlxHNQlWxHx+oOmu4Ge31egkM7JDpQKP0j52QaZr2QoYv1h5lZhPVNW+3Zj6f/6rX6yeZTObUKPWrlk6nn2BlBGwAttG+plKp5pUx2mg0QsjmfRuQP/x+/+clyNXB49KDvh7bgOyUy+VPCLLFO50RHjZRZe9ZrcfAppVK5Ttj0m4hmxGrNd1u91uxWJyKjKJcjCIDBzYM/CwUCiMWX+Fw2M7X32Qy+Vt0YuMBCnaDASoocx+hCN20+h+nLa6eXI2ZOMzO+TpL4ZjNZmfMaqjrdiJ0JmN60zkzFFoBdmnDwWAwNgRBbcojYOZnCXRmpdgqgIIhON0quEQikR8Oh4cGBT4NhUInJn731vkwMJ5BX4llmf8Hi2r+RSXQdSUKJiwd4GP83V7DMCx9EOPaNb72zzUBRZCbVeKUTTuQKi7xEvYUG+pdYqAMqEhmN2XEYx+8lN5eXJUI3moiqnrCi4xem9LdAXX7kbJjdAd0C0r52jDKMmADQ/asfFBBVijDe3pVjFKTd1SCD5HkXZjGKNXgtCd2YqSmepQBpdvKKHUJWO44dAkbg4QKANVV5PT7DXi1X4EDAHgN5GItUbyBa5TXi6rLtbcmqRxVjoBSEgtennacVMDuPrqN1zTfFpcv5b1benb4B49MQMJHEHho3BM6Z4Gzlz13R1U5KLhmKlrYPwEGAEzEAIH6CM7dAAAAAElFTkSuQmCC"
                      alt="user words"
                    />
                    <blockquote className="carousel-item__desc">
                      Mình mua hàng từ nhiều sàn TMĐT nhưng thích nhất chỗ này.
                      Giao diện thân thiện, hỗ trợ nhiều kênh vận chuyển. Bên hỗ
                      trợ từ Shopee trả lời chat nhanh, thân thiện. Hệ thống của
                      Shopee giúp hạn chế shop "rởm" mình cũng yên tâm hơn, sẽ
                      tiếp tục sử dụng trong thời gian tới
                    </blockquote>
                    <p className="carousel-item__name">
                      <span className="carousel-item__name-user">
                        Anh Nguyễn
                      </span>
                      <br />
                      <span className="carousel-item__name-date">
                        <span style={{ display: "block" }}>
                          Người dùng Shopee
                        </span>
                        <span>Tham gia vào tháng 3/2019</span>
                      </span>
                    </p>
                  </div>
                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      height: "247.6px",
                    }}
                    data-vmid="carousel-item_4000639422"
                  >
                    <img
                      className="carousel-item__cite-icon"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA2CAYAAACWeYpTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE3MUVFNDg1RDZDQjExRTc5OENCODVDNUI5RjBCOEY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE3MUVFNDg2RDZDQjExRTc5OENCODVDNUI5RjBCOEY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTcxRUU0ODNENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTcxRUU0ODRENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43hmo+AAADGElEQVR42uxYTY8SQRCleoYNIOACIhsTxQSjZk0E8aDhYEyMie5h44mb/4VfxMGjHtXsAf4BMVFOCAKGhSzfbWHYzSxhZnr6Y5lhqWQODJ3qevWqXlcP+OQY+DZrVFWAmwbmGDRsEUBLwMQBQEcgm83mjfF4/HQ6nR7hcywSca1W2xuNRo8mk8kb9PWRhxRdNov9fv92IBB4DgB3L1JLaZsHYKfTiUYikTz6yuCjcbYYZWEUnGQdM/46GAx+MILksVKpBFgNz6LRaJEQ8pATpI+VUWaQrVYrHIvFjjCgfdGAqtWqnsvl3oomixUoOOlFBHmMgYUlgXyHvu7IViYiGlg8Hn8vA+TCstnsKwUgwQwoOAjsJQYWlxHNQlWxHx+oOmu4Ge31egkM7JDpQKP0j52QaZr2QoYv1h5lZhPVNW+3Zj6f/6rX6yeZTObUKPWrlk6nn2BlBGwAttG+plKp5pUx2mg0QsjmfRuQP/x+/+clyNXB49KDvh7bgOyUy+VPCLLFO50RHjZRZe9ZrcfAppVK5Ttj0m4hmxGrNd1u91uxWJyKjKJcjCIDBzYM/CwUCiMWX+Fw2M7X32Qy+Vt0YuMBCnaDASoocx+hCN20+h+nLa6eXI2ZOMzO+TpL4ZjNZmfMaqjrdiJ0JmN60zkzFFoBdmnDwWAwNgRBbcojYOZnCXRmpdgqgIIhON0quEQikR8Oh4cGBT4NhUInJn731vkwMJ5BX4llmf8Hi2r+RSXQdSUKJiwd4GP83V7DMCx9EOPaNb72zzUBRZCbVeKUTTuQKi7xEvYUG+pdYqAMqEhmN2XEYx+8lN5eXJUI3moiqnrCi4xem9LdAXX7kbJjdAd0C0r52jDKMmADQ/asfFBBVijDe3pVjFKTd1SCD5HkXZjGKNXgtCd2YqSmepQBpdvKKHUJWO44dAkbg4QKANVV5PT7DXi1X4EDAHgN5GItUbyBa5TXi6rLtbcmqRxVjoBSEgtennacVMDuPrqN1zTfFpcv5b1benb4B49MQMJHEHho3BM6Z4Gzlz13R1U5KLhmKlrYPwEGAEzEAIH6CM7dAAAAAElFTkSuQmCC"
                      alt="user words"
                    />
                    <blockquote className="carousel-item__desc">
                      Giao hàng rất nhanh, mua hàng rất tiện lợi. Giá cả các sản
                      phẩm rẻ hơn so với bên ngoài.Tốt nhất mọi người nên mua ở
                      Shopee Mall để đảm bảo chất lượng
                    </blockquote>
                    <p className="carousel-item__name">
                      <span className="carousel-item__name-user">
                        Binnie San
                      </span>
                      <br />
                      <span className="carousel-item__name-date">
                        <span style={{ display: "block" }}>
                          Người dùng Shopee
                        </span>
                        <span>Tham gia vào tháng 12/2019</span>
                      </span>
                    </p>
                  </div>
                </li>
                <li className="unslider-active" style={{ width: "25%" }}>
                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      height: "247.6px",
                    }}
                    data-vmid="carousel-item_0806272692"
                  >
                    <img
                      className="carousel-item__cite-icon"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA2CAYAAACWeYpTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE3MUVFNDg1RDZDQjExRTc5OENCODVDNUI5RjBCOEY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE3MUVFNDg2RDZDQjExRTc5OENCODVDNUI5RjBCOEY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTcxRUU0ODNENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTcxRUU0ODRENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43hmo+AAADGElEQVR42uxYTY8SQRCleoYNIOACIhsTxQSjZk0E8aDhYEyMie5h44mb/4VfxMGjHtXsAf4BMVFOCAKGhSzfbWHYzSxhZnr6Y5lhqWQODJ3qevWqXlcP+OQY+DZrVFWAmwbmGDRsEUBLwMQBQEcgm83mjfF4/HQ6nR7hcywSca1W2xuNRo8mk8kb9PWRhxRdNov9fv92IBB4DgB3L1JLaZsHYKfTiUYikTz6yuCjcbYYZWEUnGQdM/46GAx+MILksVKpBFgNz6LRaJEQ8pATpI+VUWaQrVYrHIvFjjCgfdGAqtWqnsvl3oomixUoOOlFBHmMgYUlgXyHvu7IViYiGlg8Hn8vA+TCstnsKwUgwQwoOAjsJQYWlxHNQlWxHx+oOmu4Ge31egkM7JDpQKP0j52QaZr2QoYv1h5lZhPVNW+3Zj6f/6rX6yeZTObUKPWrlk6nn2BlBGwAttG+plKp5pUx2mg0QsjmfRuQP/x+/+clyNXB49KDvh7bgOyUy+VPCLLFO50RHjZRZe9ZrcfAppVK5Ttj0m4hmxGrNd1u91uxWJyKjKJcjCIDBzYM/CwUCiMWX+Fw2M7X32Qy+Vt0YuMBCnaDASoocx+hCN20+h+nLa6eXI2ZOMzO+TpL4ZjNZmfMaqjrdiJ0JmN60zkzFFoBdmnDwWAwNgRBbcojYOZnCXRmpdgqgIIhON0quEQikR8Oh4cGBT4NhUInJn731vkwMJ5BX4llmf8Hi2r+RSXQdSUKJiwd4GP83V7DMCx9EOPaNb72zzUBRZCbVeKUTTuQKi7xEvYUG+pdYqAMqEhmN2XEYx+8lN5eXJUI3moiqnrCi4xem9LdAXX7kbJjdAd0C0r52jDKMmADQ/asfFBBVijDe3pVjFKTd1SCD5HkXZjGKNXgtCd2YqSmepQBpdvKKHUJWO44dAkbg4QKANVV5PT7DXi1X4EDAHgN5GItUbyBa5TXi6rLtbcmqRxVjoBSEgtennacVMDuPrqN1zTfFpcv5b1benb4B49MQMJHEHho3BM6Z4Gzlz13R1U5KLhmKlrYPwEGAEzEAIH6CM7dAAAAAElFTkSuQmCC"
                      alt="user words"
                    />
                    <blockquote className="carousel-item__desc">
                      Mình luôn hóng lên Shopee để săn deal và toàn là săn được
                      deal tốt đến không ngờ luôn. Chưa kể mỗi lần săn deal đều
                      rất vui, đợt săn deal vừa rồi là vui nhất trong 2 năm
                      nghiện Shopee của mình.
                    </blockquote>
                    <p className="carousel-item__name">
                      <span className="carousel-item__name-user">
                        Diễm Trương
                      </span>
                      <br />
                      <span className="carousel-item__name-date">
                        <span style={{ display: "block" }}>
                          Người dùng Shopee
                        </span>
                        <span>Tham gia vào tháng 12/2018</span>
                      </span>
                    </p>
                  </div>
                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      height: "247.6px",
                    }}
                    data-vmid="carousel-item_7117840375"
                  >
                    <img
                      className="carousel-item__cite-icon"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA2CAYAAACWeYpTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE3MUVFNDg1RDZDQjExRTc5OENCODVDNUI5RjBCOEY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE3MUVFNDg2RDZDQjExRTc5OENCODVDNUI5RjBCOEY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTcxRUU0ODNENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTcxRUU0ODRENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43hmo+AAADGElEQVR42uxYTY8SQRCleoYNIOACIhsTxQSjZk0E8aDhYEyMie5h44mb/4VfxMGjHtXsAf4BMVFOCAKGhSzfbWHYzSxhZnr6Y5lhqWQODJ3qevWqXlcP+OQY+DZrVFWAmwbmGDRsEUBLwMQBQEcgm83mjfF4/HQ6nR7hcywSca1W2xuNRo8mk8kb9PWRhxRdNov9fv92IBB4DgB3L1JLaZsHYKfTiUYikTz6yuCjcbYYZWEUnGQdM/46GAx+MILksVKpBFgNz6LRaJEQ8pATpI+VUWaQrVYrHIvFjjCgfdGAqtWqnsvl3oomixUoOOlFBHmMgYUlgXyHvu7IViYiGlg8Hn8vA+TCstnsKwUgwQwoOAjsJQYWlxHNQlWxHx+oOmu4Ge31egkM7JDpQKP0j52QaZr2QoYv1h5lZhPVNW+3Zj6f/6rX6yeZTObUKPWrlk6nn2BlBGwAttG+plKp5pUx2mg0QsjmfRuQP/x+/+clyNXB49KDvh7bgOyUy+VPCLLFO50RHjZRZe9ZrcfAppVK5Ttj0m4hmxGrNd1u91uxWJyKjKJcjCIDBzYM/CwUCiMWX+Fw2M7X32Qy+Vt0YuMBCnaDASoocx+hCN20+h+nLa6eXI2ZOMzO+TpL4ZjNZmfMaqjrdiJ0JmN60zkzFFoBdmnDwWAwNgRBbcojYOZnCXRmpdgqgIIhON0quEQikR8Oh4cGBT4NhUInJn731vkwMJ5BX4llmf8Hi2r+RSXQdSUKJiwd4GP83V7DMCx9EOPaNb72zzUBRZCbVeKUTTuQKi7xEvYUG+pdYqAMqEhmN2XEYx+8lN5eXJUI3moiqnrCi4xem9LdAXX7kbJjdAd0C0r52jDKMmADQ/asfFBBVijDe3pVjFKTd1SCD5HkXZjGKNXgtCd2YqSmepQBpdvKKHUJWO44dAkbg4QKANVV5PT7DXi1X4EDAHgN5GItUbyBa5TXi6rLtbcmqRxVjoBSEgtennacVMDuPrqN1zTfFpcv5b1benb4B49MQMJHEHho3BM6Z4Gzlz13R1U5KLhmKlrYPwEGAEzEAIH6CM7dAAAAAElFTkSuQmCC"
                      alt="user words"
                    />
                    <blockquote className="carousel-item__desc">
                      Lên Shopee là lần nào cũng có thành quả hoành tráng, hàng
                      chục món cứ hốt hết đến lúc nhận hàng còn không biết mình
                      đặt cái này , cái kia từ bao giờ luôn. Nghiện Shopee quá
                      mà
                    </blockquote>
                    <p className="carousel-item__name">
                      <span className="carousel-item__name-user">Nhung Wo</span>
                      <br />
                      <span className="carousel-item__name-date">
                        <span style={{ display: "block" }}>
                          Người dùng Shopee
                        </span>
                        <span>Tham gia vào tháng 5/2018</span>
                      </span>
                    </p>
                  </div>
                </li>
                <li style={{ width: "25%" }}>
                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      height: "247.6px",
                    }}
                    data-vmid="carousel-item_4282463476"
                  >
                    <img
                      className="carousel-item__cite-icon"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA2CAYAAACWeYpTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE3MUVFNDg1RDZDQjExRTc5OENCODVDNUI5RjBCOEY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE3MUVFNDg2RDZDQjExRTc5OENCODVDNUI5RjBCOEY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTcxRUU0ODNENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTcxRUU0ODRENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43hmo+AAADGElEQVR42uxYTY8SQRCleoYNIOACIhsTxQSjZk0E8aDhYEyMie5h44mb/4VfxMGjHtXsAf4BMVFOCAKGhSzfbWHYzSxhZnr6Y5lhqWQODJ3qevWqXlcP+OQY+DZrVFWAmwbmGDRsEUBLwMQBQEcgm83mjfF4/HQ6nR7hcywSca1W2xuNRo8mk8kb9PWRhxRdNov9fv92IBB4DgB3L1JLaZsHYKfTiUYikTz6yuCjcbYYZWEUnGQdM/46GAx+MILksVKpBFgNz6LRaJEQ8pATpI+VUWaQrVYrHIvFjjCgfdGAqtWqnsvl3oomixUoOOlFBHmMgYUlgXyHvu7IViYiGlg8Hn8vA+TCstnsKwUgwQwoOAjsJQYWlxHNQlWxHx+oOmu4Ge31egkM7JDpQKP0j52QaZr2QoYv1h5lZhPVNW+3Zj6f/6rX6yeZTObUKPWrlk6nn2BlBGwAttG+plKp5pUx2mg0QsjmfRuQP/x+/+clyNXB49KDvh7bgOyUy+VPCLLFO50RHjZRZe9ZrcfAppVK5Ttj0m4hmxGrNd1u91uxWJyKjKJcjCIDBzYM/CwUCiMWX+Fw2M7X32Qy+Vt0YuMBCnaDASoocx+hCN20+h+nLa6eXI2ZOMzO+TpL4ZjNZmfMaqjrdiJ0JmN60zkzFFoBdmnDwWAwNgRBbcojYOZnCXRmpdgqgIIhON0quEQikR8Oh4cGBT4NhUInJn731vkwMJ5BX4llmf8Hi2r+RSXQdSUKJiwd4GP83V7DMCx9EOPaNb72zzUBRZCbVeKUTTuQKi7xEvYUG+pdYqAMqEhmN2XEYx+8lN5eXJUI3moiqnrCi4xem9LdAXX7kbJjdAd0C0r52jDKMmADQ/asfFBBVijDe3pVjFKTd1SCD5HkXZjGKNXgtCd2YqSmepQBpdvKKHUJWO44dAkbg4QKANVV5PT7DXi1X4EDAHgN5GItUbyBa5TXi6rLtbcmqRxVjoBSEgtennacVMDuPrqN1zTfFpcv5b1benb4B49MQMJHEHho3BM6Z4Gzlz13R1U5KLhmKlrYPwEGAEzEAIH6CM7dAAAAAElFTkSuQmCC"
                      alt="user words"
                    />
                    <blockquote className="carousel-item__desc">
                      Mình mua hàng từ nhiều sàn TMĐT nhưng thích nhất chỗ này.
                      Giao diện thân thiện, hỗ trợ nhiều kênh vận chuyển. Bên hỗ
                      trợ từ Shopee trả lời chat nhanh, thân thiện. Hệ thống của
                      Shopee giúp hạn chế shop "rởm" mình cũng yên tâm hơn, sẽ
                      tiếp tục sử dụng trong thời gian tới
                    </blockquote>
                    <p className="carousel-item__name">
                      <span className="carousel-item__name-user">
                        Anh Nguyễn
                      </span>
                      <br />
                      <span className="carousel-item__name-date">
                        <span style={{ display: "block" }}>
                          Người dùng Shopee
                        </span>
                        <span>Tham gia vào tháng 3/2019</span>
                      </span>
                    </p>
                  </div>
                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      height: "247.6px",
                    }}
                    data-vmid="carousel-item_4000639422"
                  >
                    <img
                      className="carousel-item__cite-icon"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA2CAYAAACWeYpTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE3MUVFNDg1RDZDQjExRTc5OENCODVDNUI5RjBCOEY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE3MUVFNDg2RDZDQjExRTc5OENCODVDNUI5RjBCOEY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTcxRUU0ODNENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTcxRUU0ODRENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43hmo+AAADGElEQVR42uxYTY8SQRCleoYNIOACIhsTxQSjZk0E8aDhYEyMie5h44mb/4VfxMGjHtXsAf4BMVFOCAKGhSzfbWHYzSxhZnr6Y5lhqWQODJ3qevWqXlcP+OQY+DZrVFWAmwbmGDRsEUBLwMQBQEcgm83mjfF4/HQ6nR7hcywSca1W2xuNRo8mk8kb9PWRhxRdNov9fv92IBB4DgB3L1JLaZsHYKfTiUYikTz6yuCjcbYYZWEUnGQdM/46GAx+MILksVKpBFgNz6LRaJEQ8pATpI+VUWaQrVYrHIvFjjCgfdGAqtWqnsvl3oomixUoOOlFBHmMgYUlgXyHvu7IViYiGlg8Hn8vA+TCstnsKwUgwQwoOAjsJQYWlxHNQlWxHx+oOmu4Ge31egkM7JDpQKP0j52QaZr2QoYv1h5lZhPVNW+3Zj6f/6rX6yeZTObUKPWrlk6nn2BlBGwAttG+plKp5pUx2mg0QsjmfRuQP/x+/+clyNXB49KDvh7bgOyUy+VPCLLFO50RHjZRZe9ZrcfAppVK5Ttj0m4hmxGrNd1u91uxWJyKjKJcjCIDBzYM/CwUCiMWX+Fw2M7X32Qy+Vt0YuMBCnaDASoocx+hCN20+h+nLa6eXI2ZOMzO+TpL4ZjNZmfMaqjrdiJ0JmN60zkzFFoBdmnDwWAwNgRBbcojYOZnCXRmpdgqgIIhON0quEQikR8Oh4cGBT4NhUInJn731vkwMJ5BX4llmf8Hi2r+RSXQdSUKJiwd4GP83V7DMCx9EOPaNb72zzUBRZCbVeKUTTuQKi7xEvYUG+pdYqAMqEhmN2XEYx+8lN5eXJUI3moiqnrCi4xem9LdAXX7kbJjdAd0C0r52jDKMmADQ/asfFBBVijDe3pVjFKTd1SCD5HkXZjGKNXgtCd2YqSmepQBpdvKKHUJWO44dAkbg4QKANVV5PT7DXi1X4EDAHgN5GItUbyBa5TXi6rLtbcmqRxVjoBSEgtennacVMDuPrqN1zTfFpcv5b1benb4B49MQMJHEHho3BM6Z4Gzlz13R1U5KLhmKlrYPwEGAEzEAIH6CM7dAAAAAElFTkSuQmCC"
                      alt="user words"
                    />
                    <blockquote className="carousel-item__desc">
                      Giao hàng rất nhanh, mua hàng rất tiện lợi. Giá cả các sản
                      phẩm rẻ hơn so với bên ngoài.Tốt nhất mọi người nên mua ở
                      Shopee Mall để đảm bảo chất lượng
                    </blockquote>
                    <p className="carousel-item__name">
                      <span className="carousel-item__name-user">
                        Binnie San
                      </span>
                      <br />
                      <span className="carousel-item__name-date">
                        <span style={{ display: "block" }}>
                          Người dùng Shopee
                        </span>
                        <span>Tham gia vào tháng 12/2019</span>
                      </span>
                    </p>
                  </div>
                </li>
                <li className="unslider-clone" style={{ width: "25%" }}>
                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      height: "247.6px",
                    }}
                    data-vmid="carousel-item_0806272692"
                  >
                    <img
                      className="carousel-item__cite-icon"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA2CAYAAACWeYpTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE3MUVFNDg1RDZDQjExRTc5OENCODVDNUI5RjBCOEY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE3MUVFNDg2RDZDQjExRTc5OENCODVDNUI5RjBCOEY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTcxRUU0ODNENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTcxRUU0ODRENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43hmo+AAADGElEQVR42uxYTY8SQRCleoYNIOACIhsTxQSjZk0E8aDhYEyMie5h44mb/4VfxMGjHtXsAf4BMVFOCAKGhSzfbWHYzSxhZnr6Y5lhqWQODJ3qevWqXlcP+OQY+DZrVFWAmwbmGDRsEUBLwMQBQEcgm83mjfF4/HQ6nR7hcywSca1W2xuNRo8mk8kb9PWRhxRdNov9fv92IBB4DgB3L1JLaZsHYKfTiUYikTz6yuCjcbYYZWEUnGQdM/46GAx+MILksVKpBFgNz6LRaJEQ8pATpI+VUWaQrVYrHIvFjjCgfdGAqtWqnsvl3oomixUoOOlFBHmMgYUlgXyHvu7IViYiGlg8Hn8vA+TCstnsKwUgwQwoOAjsJQYWlxHNQlWxHx+oOmu4Ge31egkM7JDpQKP0j52QaZr2QoYv1h5lZhPVNW+3Zj6f/6rX6yeZTObUKPWrlk6nn2BlBGwAttG+plKp5pUx2mg0QsjmfRuQP/x+/+clyNXB49KDvh7bgOyUy+VPCLLFO50RHjZRZe9ZrcfAppVK5Ttj0m4hmxGrNd1u91uxWJyKjKJcjCIDBzYM/CwUCiMWX+Fw2M7X32Qy+Vt0YuMBCnaDASoocx+hCN20+h+nLa6eXI2ZOMzO+TpL4ZjNZmfMaqjrdiJ0JmN60zkzFFoBdmnDwWAwNgRBbcojYOZnCXRmpdgqgIIhON0quEQikR8Oh4cGBT4NhUInJn731vkwMJ5BX4llmf8Hi2r+RSXQdSUKJiwd4GP83V7DMCx9EOPaNb72zzUBRZCbVeKUTTuQKi7xEvYUG+pdYqAMqEhmN2XEYx+8lN5eXJUI3moiqnrCi4xem9LdAXX7kbJjdAd0C0r52jDKMmADQ/asfFBBVijDe3pVjFKTd1SCD5HkXZjGKNXgtCd2YqSmepQBpdvKKHUJWO44dAkbg4QKANVV5PT7DXi1X4EDAHgN5GItUbyBa5TXi6rLtbcmqRxVjoBSEgtennacVMDuPrqN1zTfFpcv5b1benb4B49MQMJHEHho3BM6Z4Gzlz13R1U5KLhmKlrYPwEGAEzEAIH6CM7dAAAAAElFTkSuQmCC"
                      alt="user words"
                    />
                    <blockquote className="carousel-item__desc">
                      Mình luôn hóng lên Shopee để săn deal và toàn là săn được
                      deal tốt đến không ngờ luôn. Chưa kể mỗi lần săn deal đều
                      rất vui, đợt săn deal vừa rồi là vui nhất trong 2 năm
                      nghiện Shopee của mình.
                    </blockquote>
                    <p className="carousel-item__name">
                      <span className="carousel-item__name-user">
                        Diễm Trương
                      </span>
                      <br />
                      <span className="carousel-item__name-date">
                        <span style={{ display: "block" }}>
                          Người dùng Shopee
                        </span>
                        <span>Tham gia vào tháng 12/2018</span>
                      </span>
                    </p>
                  </div>
                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      height: "247.6px",
                    }}
                    data-vmid="carousel-item_7117840375"
                  >
                    <img
                      className="carousel-item__cite-icon"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA2CAYAAACWeYpTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE3MUVFNDg1RDZDQjExRTc5OENCODVDNUI5RjBCOEY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE3MUVFNDg2RDZDQjExRTc5OENCODVDNUI5RjBCOEY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTcxRUU0ODNENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTcxRUU0ODRENkNCMTFFNzk4Q0I4NUM1QjlGMEI4RjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43hmo+AAADGElEQVR42uxYTY8SQRCleoYNIOACIhsTxQSjZk0E8aDhYEyMie5h44mb/4VfxMGjHtXsAf4BMVFOCAKGhSzfbWHYzSxhZnr6Y5lhqWQODJ3qevWqXlcP+OQY+DZrVFWAmwbmGDRsEUBLwMQBQEcgm83mjfF4/HQ6nR7hcywSca1W2xuNRo8mk8kb9PWRhxRdNov9fv92IBB4DgB3L1JLaZsHYKfTiUYikTz6yuCjcbYYZWEUnGQdM/46GAx+MILksVKpBFgNz6LRaJEQ8pATpI+VUWaQrVYrHIvFjjCgfdGAqtWqnsvl3oomixUoOOlFBHmMgYUlgXyHvu7IViYiGlg8Hn8vA+TCstnsKwUgwQwoOAjsJQYWlxHNQlWxHx+oOmu4Ge31egkM7JDpQKP0j52QaZr2QoYv1h5lZhPVNW+3Zj6f/6rX6yeZTObUKPWrlk6nn2BlBGwAttG+plKp5pUx2mg0QsjmfRuQP/x+/+clyNXB49KDvh7bgOyUy+VPCLLFO50RHjZRZe9ZrcfAppVK5Ttj0m4hmxGrNd1u91uxWJyKjKJcjCIDBzYM/CwUCiMWX+Fw2M7X32Qy+Vt0YuMBCnaDASoocx+hCN20+h+nLa6eXI2ZOMzO+TpL4ZjNZmfMaqjrdiJ0JmN60zkzFFoBdmnDwWAwNgRBbcojYOZnCXRmpdgqgIIhON0quEQikR8Oh4cGBT4NhUInJn731vkwMJ5BX4llmf8Hi2r+RSXQdSUKJiwd4GP83V7DMCx9EOPaNb72zzUBRZCbVeKUTTuQKi7xEvYUG+pdYqAMqEhmN2XEYx+8lN5eXJUI3moiqnrCi4xem9LdAXX7kbJjdAd0C0r52jDKMmADQ/asfFBBVijDe3pVjFKTd1SCD5HkXZjGKNXgtCd2YqSmepQBpdvKKHUJWO44dAkbg4QKANVV5PT7DXi1X4EDAHgN5GItUbyBa5TXi6rLtbcmqRxVjoBSEgtennacVMDuPrqN1zTfFpcv5b1benb4B49MQMJHEHho3BM6Z4Gzlz13R1U5KLhmKlrYPwEGAEzEAIH6CM7dAAAAAElFTkSuQmCC"
                      alt="user words"
                    />
                    <blockquote className="carousel-item__desc">
                      Lên Shopee là lần nào cũng có thành quả hoành tráng, hàng
                      chục món cứ hốt hết đến lúc nhận hàng còn không biết mình
                      đặt cái này , cái kia từ bao giờ luôn. Nghiện Shopee quá
                      mà
                    </blockquote>
                    <p className="carousel-item__name">
                      <span className="carousel-item__name-user">Nhung Wo</span>
                      <br />
                      <span className="carousel-item__name-date">
                        <span style={{ display: "block" }}>
                          Người dùng Shopee
                        </span>
                        <span>Tham gia vào tháng 5/2018</span>
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
              <nav className="unslider-nav">
                <ol>
                  <li data-slide={1} className="unslider-active" />
                  <li data-slide={2} className />
                </ol>
              </nav>
            </div>
            <a
              href="#st"
              className="unslider-arrow next"
              style={{ backgroundImage: 'url("data:image/png' }}
            >
              Next
            </a>
            <a href="#st" className="unslider-arrow prev">Prev</a>
          </div>
        </section>
        <footer className="footer" data-vmid="footer_4346832749">
          <a href="/" target="_blank">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/PC_bottomLogo.ada0b715.png"
              alt="shopee logo"
            />
          </a>
          <p className="footer__slogan">
            Mua sắm trực tuyến, mọi lúc, mọi nơi.
            <br />
            Tải ứng dụng ngay
          </p>
          <a
            rel="noreferrer"
            href="https://itunes.apple.com/VN/app/id959841449?mt=8"
            target="_blank"
          >
            <img
              style={{ width: "180px", marginBottom: "14px" }}
              src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/appleStore.0ca159be.png"
              alt="apple store"
            />{" "}
          </a>
          <br />
          <a
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.shopee.vn&referrer=af_tranid%3Drsx9V4J79OX3NH5LwyqLcw%26pid%3DOrganicA%26c%3Dlp_home_and1"
            target="_blank"
          >
            <img
              style={{ width: "180px", marginBottom: "14px" }}
              src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/googlePlay.df026781.png"
              alt="google play"
            />
          </a>
          <br />
          <a
            rel="noreferrer"
            href="https://appgallery.cloud.huawei.com/ag/n/app/C101433653?channelId=web&detailType=0"
            target="_blank"
          >
            <img
              style={{ width: "180px" }}
              src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/huaweiPlay.e08496e9.png"
              alt="huawei app gallery"
            />
          </a>
          <p className="footer__copyright">
            Copyright @2022 Shopee. All rights reserved.
          </p>
          <br />
        </footer>
      </div>
    );
  }
}

export default App