import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductHome from "../product/home/ProductHome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

class Home extends Component {
  render() {
    return (
      <div className="xCao3k N2AB73">
        <div className="home-page">
          <div
            className="shopee-floating-icons__wrapper"
            style={{ float: "right", right: "30px" }}
          >
            <div className="shopee-skinny-banner__container">
              <a
                className="shopee-skinny-banner"
                href="/ShopeeLive-CuocDuaCucPham-1010"
                style={{ width: "82px", height: "82px" }}
              >
                <div className="n-CE6j shopee-skinny-banner__full-height">
                  <div
                    className="shopee-skinny-banner__full-height edy5hG"
                    style={{
                      backgroundImage:
                        'url("https://cf.shopee.vn/file/9739fbf9ed53aa9f6017733fb9e03a10")',
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="section-banner-hotword--no-skin">
            <div className="full-home-banners-wrapper">
              <div className="container">
                <div className="full-home-banners">
                  <div className="full-home-banners__main-banner">
                    <div className="stardust-carousel">
                      <div className="stardust-carousel__item-list-wrapper">
                        <Swiper
                          slidesPerView={1}
                          spaceBetween={30}
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          loop={true}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                          modules={[Autoplay, Pagination, Navigation]}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <div className="stardust-carousel__item-inner-wrapper">
                              <Link
                                className="full-home-banners__banner-image"
                                to="/error"
                              >
                                <div className="n-CE6j full-home-banners__light-background">
                                  <div
                                    className="full-home-banners__main-banner-image edy5hG"
                                    style={{
                                      backgroundImage:
                                        'url("https://cf.shopee.vn/file/1243391617aadb64a3c42882cb0a98c5_xxhdpi")',
                                      backgroundSize: "cover",
                                      backgroundRepeat: "no-repeat",
                                    }}
                                  />
                                </div>
                              </Link>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="stardust-carousel__item-inner-wrapper">
                              <a
                                className="full-home-banners__banner-image"
                                href="/3ce.official.vn"
                              >
                                <div className="n-CE6j full-home-banners__light-background">
                                  <div
                                    className="full-home-banners__main-banner-image edy5hG"
                                    style={{
                                      backgroundImage:
                                        'url("https://cf.shopee.vn/file/4c47a1b31d052fee76f71f064d8dcb81_xxhdpi")',
                                      backgroundSize: "cover",
                                      backgroundRepeat: "no-repeat",
                                    }}
                                  />
                                </div>
                              </a>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="stardust-carousel__item-inner-wrapper">
                              <a
                                className="full-home-banners__banner-image"
                                href="/m/don-dau-tien-mien-phi"
                              >
                                <div className="n-CE6j full-home-banners__light-background">
                                  <div
                                    className="full-home-banners__main-banner-image edy5hG"
                                    style={{
                                      backgroundImage:
                                        'url("https://cf.shopee.vn/file/5b5de1582d99cbbe75a8f9a5c4dae1c2_xxhdpi")',
                                      backgroundSize: "cover",
                                      backgroundRepeat: "no-repeat",
                                    }}
                                  />
                                </div>
                              </a>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="stardust-carousel__item-inner-wrapper">
                              <a
                                className="full-home-banners__banner-image"
                                href="/m/mien-phi-van-chuyen"
                              >
                                <div className="n-CE6j full-home-banners__light-background">
                                  <div
                                    className="full-home-banners__main-banner-image edy5hG"
                                    style={{
                                      backgroundImage:
                                        'url("https://cf.shopee.vn/file/bb2d2e56bc5b8ea05b870cb91f807201_xxhdpi")',
                                      backgroundSize: "cover",
                                      backgroundRepeat: "no-repeat",
                                    }}
                                  />
                                </div>
                              </a>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="stardust-carousel__item-inner-wrapper">
                              <a
                                className="full-home-banners__banner-image"
                                href="/m/top-deal-hot-trend"
                              >
                                <div className="n-CE6j full-home-banners__light-background">
                                  <div
                                    className="full-home-banners__main-banner-image edy5hG"
                                    style={{
                                      backgroundImage:
                                        'url("https://cf.shopee.vn/file/099d93a929f53b4adc799aaac6202ed5_xxhdpi")',
                                      backgroundSize: "cover",
                                      backgroundRepeat: "no-repeat",
                                    }}
                                  />
                                </div>
                              </a>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="stardust-carousel__item-inner-wrapper">
                              <a
                                className="full-home-banners__banner-image"
                                href="/unicharm-hb"
                              >
                                <div className="n-CE6j full-home-banners__light-background">
                                  <div
                                    className="full-home-banners__main-banner-image edy5hG"
                                    style={{
                                      backgroundImage:
                                        'url("https://cf.shopee.vn/file/3a31720fffbd9314f39150e39c8b3645_xxhdpi")',
                                      backgroundSize: "cover",
                                      backgroundRepeat: "no-repeat",
                                    }}
                                  />
                                </div>
                              </a>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="stardust-carousel__item-inner-wrapper">
                              <a
                                className="full-home-banners__banner-image"
                                href="/sony_official_store"
                              >
                                <div className="n-CE6j full-home-banners__light-background">
                                  <div
                                    className="full-home-banners__main-banner-image edy5hG"
                                    style={{
                                      backgroundImage:
                                        'url("https://cf.shopee.vn/file/9a2082dbf74f74c82f4e81a04d54e8ba_xxhdpi")',
                                      backgroundSize: "cover",
                                      backgroundRepeat: "no-repeat",
                                    }}
                                  />
                                </div>
                              </a>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="stardust-carousel__item-inner-wrapper">
                              <a
                                className="full-home-banners__banner-image"
                                href="/yody-official-store-2022"
                              >
                                <div className="n-CE6j full-home-banners__light-background">
                                  <div
                                    className="full-home-banners__main-banner-image edy5hG"
                                    style={{
                                      backgroundImage:
                                        'url("https://cf.shopee.vn/file/7111deac29c6973540347611195da6ac_xxhdpi")',
                                      backgroundSize: "cover",
                                      backgroundRepeat: "no-repeat",
                                    }}
                                  />
                                </div>
                              </a>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="stardust-carousel__item-inner-wrapper">
                              <a
                                className="full-home-banners__banner-image"
                                href="/3ce.official.vn"
                              >
                                <div className="n-CE6j full-home-banners__light-background">
                                  <div
                                    className="full-home-banners__main-banner-image edy5hG"
                                    style={{
                                      backgroundImage:
                                        'url("https://cf.shopee.vn/file/4c47a1b31d052fee76f71f064d8dcb81_xxhdpi")',
                                      backgroundSize: "cover",
                                      backgroundRepeat: "no-repeat",
                                    }}
                                  />
                                </div>
                              </a>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      {/* <div className="stardust-carousel__arrow stardust-carousel__arrow--type-1 stardust-carousel__arrow--prev">
                        <svg
                          enableBackground="new 0 0 13 20"
                          viewBox="0 0 13 20"
                          role="img"
                          className="stardust-icon stardust-icon-arrow-left-bold"
                        >
                          <path
                            stroke="none"
                            d="m4.2 10l7.9-7.9-2.1-2.2-9 9-1.1 1.1 1.1 1 9 9 2.1-2.1z"
                          />
                        </svg>
                      </div>
                      <div className="stardust-carousel__arrow stardust-carousel__arrow--type-1 stardust-carousel__arrow--next">
                        <svg
                          enableBackground="new 0 0 13 21"
                          viewBox="0 0 13 21"
                          role="img"
                          className="stardust-icon stardust-icon-arrow-right-bold"
                        >
                          <path
                            stroke="none"
                            d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"
                          />
                        </svg>
                      </div>
                      <div className="stardust-carousel__dots">
                        <div className="stardust-carousel__dot" />
                        <div className="stardust-carousel__dot" />
                        <div className="stardust-carousel__dot" />
                        <div className="stardust-carousel__dot" />
                        <div className="stardust-carousel__dot" />
                        <div className="stardust-carousel__dot" />
                        <div className="stardust-carousel__dot" />
                        <div className="stardust-carousel__dot" />
                        <div className="stardust-carousel__dot stardust-carousel__dot--active" />
                        <div className="stardust-carousel__dot" />
                        <div className="stardust-carousel__dot" />
                        <div className="stardust-carousel__dot" />
                        <div className="stardust-carousel__dot" />
                        <div className="stardust-carousel__dot" />
                      </div> */}
                    </div>
                  </div>
                  <div className="full-home-banners__right-wrapper">
                    <Link
                      className="full-home-banners__right-banner"
                      to="/error"
                    >
                      <div className="n-CE6j full-home-banners__full-height full-home-banners__light-background">
                        <div
                          className="full-home-banners__right-banner-image edy5hG"
                          style={{
                            backgroundImage:
                              'url("https://cf.shopee.vn/file/b171dc51b0be548b5182a45f2b72d4dc_xhdpi")',
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                        />
                      </div>
                    </Link>
                    <Link
                      to="/error"
                      className="full-home-banners__right-banner"
                      rel="noopener noreferrer"
                    >
                      <div className="n-CE6j full-home-banners__full-height full-home-banners__light-background">
                        <div
                          className="full-home-banners__right-banner-image edy5hG"
                          style={{
                            backgroundImage:
                              'url("https://cf.shopee.vn/file/6232e495286d74f6a3e9c492e577fbcc_xhdpi")',
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="main" className="container">
            <div />
            <div className="section-below-the-fold">
              {/* <div className="section-category-list">
                <div className="home-category-list">
                  <div className="shopee-header-section shopee-header-section--simple">
                    <div className="shopee-header-section__header">
                      <div className="shopee-header-section__header__title">
                        Danh Mục
                      </div>
                    </div>
                    <div className="shopee-header-section__content">
                      <div className="image-carousel">
                        <div className="image-carousel__item-list-wrapper">
                          <ul
                            className="image-carousel__item-list"
                            style={{
                              width: "130%",
                              transform: "translate(0px, 0px)",
                            }}
                          >
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "10%" }}
                            >
                              <div className="home-category-list__group">
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">
                                        Thời Trang Nam
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">
                                        Thời Trang Nữ
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "10%" }}
                            >
                              <div className="home-category-list__group">
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">
                                        Điện Thoại &amp; Phụ Kiện
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">Mẹ &amp; Bé</div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "10%" }}
                            >
                              <div className="home-category-list__group">
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">
                                        Thiết Bị Điện Tử
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">
                                        Nhà Cửa &amp; Đời Sống
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "10%" }}
                            >
                              <div className="home-category-list__group">
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">
                                        Máy Tính &amp; Laptop
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/ef1f336ecc6f97b790d5aae9916dcb72_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">Sắc Đẹp</div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "10%" }}
                            >
                              <div className="home-category-list__group">
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">
                                        Máy Ảnh &amp; Máy Quay Phim
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/49119e891a44fa135f5f6f5fd4cfc747_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">Sức Khỏe</div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "10%" }}
                            >
                              <div className="home-category-list__group">
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">Đồng Hồ</div>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">Giày Dép Nữ</div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "10%" }}
                            >
                              <div className="home-category-list__group">
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">Giày Dép Nam</div>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">Túi Ví Nữ</div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "10%" }}
                            >
                              <div className="home-category-list__group">
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">
                                        Thiết Bị Điện Gia Dụng
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">
                                        Phụ Kiện &amp; Trang Sức Nữ
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "10%" }}
                            >
                              <div className="home-category-list__group">
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">
                                        Thể Thao &amp; Du Lịch
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">
                                        Bách Hóa Online
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "10%" }}
                            >
                              <div className="home-category-list__group">
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">
                                        Ô Tô &amp; Xe Máy &amp; Xe Đạp
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div
                                          className="-rN11Y edy5hG"
                                          style={{
                                            backgroundImage:
                                              'url("https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn")',
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="C9kwfl">
                                        Nhà Sách Online
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "10%" }}
                            >
                              <div className="home-category-list__group">
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div className="-rN11Y +HNXw-" />
                                        <div className="lJRMbr">
                                          <div className="skeleton-base__container-fallback">
                                            <div className="skeleton-base__shape skeleton-base__shape-static" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="fldlfB">
                                        <div className="skeleton-base__shape skeleton-base__shape-rounded skeleton-base__shape-static" />
                                      </div>
                                      <div className="fldlfB">
                                        <div className="skeleton-base__shape skeleton-base__shape-rounded skeleton-base__shape-static" />
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div className="-rN11Y +HNXw-" />
                                        <div className="lJRMbr">
                                          <div className="skeleton-base__container-fallback">
                                            <div className="skeleton-base__shape skeleton-base__shape-static" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="fldlfB">
                                        <div className="skeleton-base__shape skeleton-base__shape-rounded skeleton-base__shape-static" />
                                      </div>
                                      <div className="fldlfB">
                                        <div className="skeleton-base__shape skeleton-base__shape-rounded skeleton-base__shape-static" />
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "10%" }}
                            >
                              <div className="home-category-list__group">
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div className="-rN11Y +HNXw-" />
                                        <div className="lJRMbr">
                                          <div className="skeleton-base__container-fallback">
                                            <div className="skeleton-base__shape skeleton-base__shape-static" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="fldlfB">
                                        <div className="skeleton-base__shape skeleton-base__shape-rounded skeleton-base__shape-static" />
                                      </div>
                                      <div className="fldlfB">
                                        <div className="skeleton-base__shape skeleton-base__shape-rounded skeleton-base__shape-static" />
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div className="-rN11Y +HNXw-" />
                                        <div className="lJRMbr">
                                          <div className="skeleton-base__container-fallback">
                                            <div className="skeleton-base__shape skeleton-base__shape-static" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="fldlfB">
                                        <div className="skeleton-base__shape skeleton-base__shape-rounded skeleton-base__shape-static" />
                                      </div>
                                      <div className="fldlfB">
                                        <div className="skeleton-base__shape skeleton-base__shape-rounded skeleton-base__shape-static" />
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "10%" }}
                            >
                              <div className="home-category-list__group">
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div className="-rN11Y +HNXw-" />
                                        <div className="lJRMbr">
                                          <div className="skeleton-base__container-fallback">
                                            <div className="skeleton-base__shape skeleton-base__shape-static" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="fldlfB">
                                        <div className="skeleton-base__shape skeleton-base__shape-rounded skeleton-base__shape-static" />
                                      </div>
                                      <div className="fldlfB">
                                        <div className="skeleton-base__shape skeleton-base__shape-rounded skeleton-base__shape-static" />
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  className="home-category-list__category-grid"
                                  to="/error"
                                >
                                  <div className="_1l+Pw-">
                                    <div className="H8mXLe">
                                      <div className="n-CE6j -rN11Y">
                                        <div className="-rN11Y +HNXw-" />
                                        <div className="lJRMbr">
                                          <div className="skeleton-base__container-fallback">
                                            <div className="skeleton-base__shape skeleton-base__shape-static" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cZdsLQ">
                                      <div className="fldlfB">
                                        <div className="skeleton-base__shape skeleton-base__shape-rounded skeleton-base__shape-static" />
                                      </div>
                                      <div className="fldlfB">
                                        <div className="skeleton-base__shape skeleton-base__shape-rounded skeleton-base__shape-static" />
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="carousel-arrow carousel-arrow--prev carousel-arrow--hint carousel-arrow--hidden"
                          role="button"
                          tabIndex={0}
                          style={{
                            opacity: 1,
                            visibility: "hidden",
                            transform: "translateX(calc(-50% + 0px))",
                          }}
                        >
                          <svg
                            enableBackground="new 0 0 13 20"
                            viewBox="0 0 13 20"
                            x={0}
                            y={0}
                            className="shopee-svg-icon icon-arrow-left-bold"
                          >
                            <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                          </svg>
                        </div>
                        <div
                          className="carousel-arrow carousel-arrow--next carousel-arrow--hint"
                          role="button"
                          tabIndex={0}
                          style={{
                            opacity: 1,
                            visibility: "visible",
                            transform: "translateX(calc(50% - 0px))",
                          }}
                        >
                          <svg
                            enableBackground="new 0 0 13 21"
                            viewBox="0 0 13 21"
                            x={0}
                            y={0}
                            className="shopee-svg-icon icon-arrow-right-bold"
                          >
                            <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="xoClEI" />
              <div className="homepage-mall-section">
                <div className="shopee-header-section shopee-header-section--simple">
                  <div className="shopee-header-section__header">
                    <div className="shopee-header-section__header__title">
                      <div className="_9FdTU0">
                        <Link className="ecCXWo usxt6W" to="/mall">
                          Shopee Mall
                        </Link>
                        <div className="_5Ru4Na">
                          <div className="LetK2C">
                            <img
                              alt=""
                              className="a8XyX2"
                              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/6c502a2641457578b0d5f5153b53dd5d.png"
                            />
                            7 ngày miễn phí trả hàng
                          </div>
                          <div className="LetK2C">
                            <img
                              alt=""
                              className="a8XyX2"
                              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/511aca04cc3ba9234ab0e4fcf20768a2.png"
                            />
                            Hàng chính hãng 100%
                          </div>
                          <div className="LetK2C">
                            <img
                              alt=""
                              className="a8XyX2"
                              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/16ead7e0a68c3cff9f32910e4be08122.png"
                            />
                            Miễn phí vận chuyển
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="shopee-header-section__header-link">
                      <button className="shopee-button-no-outline">
                        <Link className="QRUn3m" to="/mall">
                          <div className="_3cpToV">
                            Xem tất cả
                            <div className="_0P+BHf">
                              <svg
                                enableBackground="new 0 0 11 11"
                                viewBox="0 0 11 11"
                                x={0}
                                y={0}
                                className="shopee-svg-icon icon-arrow-right"
                              >
                                <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="shopee-header-section__content">
                    <div className="wdSKrN">
                      <div style={{ width: "100%" }}>
                        <div className="simple-banner with-placeholder">
                          <Link to="/error">
                            <img
                              src="https://cf.shopee.vn/file/205283cf84665172253cd38b1df0383b"
                              alt=""
                              className="banner-image"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="NTixlF">
                      <div className="image-carousel">
                        <div className="image-carousel__item-list-wrapper">
                          <ul
                            className="image-carousel__item-list"
                            style={{
                              width: "200%",
                              transform: "translate(0px, 0px)",
                              transition: "all 0ms ease 0s",
                            }}
                          >
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "25%" }}
                            >
                              <div>
                                <div
                                  className="ofs-carousel__item"
                                  location={0}
                                  shopid={89960894}
                                >
                                  <Link
                                    className="ofs-carousel__shop-cover-image"
                                    to="/error"
                                  >
                                    <div className="n-CE6j">
                                      <div
                                        className="ofs-carousel__cover-image edy5hG"
                                        style={{
                                          backgroundImage:
                                            'url("https://cf.shopee.vn/file/943bc181928e41228323cb86c465b778_xhdpi")',
                                          backgroundSize: "contain",
                                          backgroundRepeat: "no-repeat",
                                        }}
                                      />
                                    </div>
                                  </Link>
                                  <div className="ofs-carousel__item__text">
                                    Mua là có quà
                                  </div>
                                </div>
                                <div
                                  className="ofs-carousel__item"
                                  location={1}
                                  shopid={269296276}
                                >
                                  <Link
                                    className="ofs-carousel__shop-cover-image"
                                    to="/error"
                                  >
                                    <div className="n-CE6j">
                                      <div
                                        className="ofs-carousel__cover-image edy5hG"
                                        style={{
                                          backgroundImage:
                                            'url("https://cf.shopee.vn/file/638ef6d0357d5c29d8eba592dbe453ea_xhdpi")',
                                          backgroundSize: "contain",
                                          backgroundRepeat: "no-repeat",
                                        }}
                                      />
                                    </div>
                                  </Link>
                                  <div className="ofs-carousel__item__text">
                                    Săn quà hot Nestlé
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "25%" }}
                            >
                              <div>
                                <div
                                  className="ofs-carousel__item"
                                  location={2}
                                  shopid={61922582}
                                >
                                  <Link
                                    className="ofs-carousel__shop-cover-image"
                                    to="/error"
                                  >
                                    <div className="n-CE6j">
                                      <div
                                        className="ofs-carousel__cover-image edy5hG"
                                        style={{
                                          backgroundImage:
                                            'url("https://cf.shopee.vn/file/440cd2373cbef1f263421cf10bab0984_xhdpi")',
                                          backgroundSize: "contain",
                                          backgroundRepeat: "no-repeat",
                                        }}
                                      />
                                    </div>
                                  </Link>
                                  <div className="ofs-carousel__item__text">
                                    Mua là có quà
                                  </div>
                                </div>
                                <div
                                  className="ofs-carousel__item"
                                  location={3}
                                  shopid={155343961}
                                >
                                  <Link
                                    className="ofs-carousel__shop-cover-image"
                                    to="/error"
                                  >
                                    <div className="n-CE6j">
                                      <div
                                        className="ofs-carousel__cover-image edy5hG"
                                        style={{
                                          backgroundImage:
                                            'url("https://cf.shopee.vn/file/1a714a4a23c78477a35cf6f3370fdeae_xhdpi")',
                                          backgroundSize: "contain",
                                          backgroundRepeat: "no-repeat",
                                        }}
                                      />
                                    </div>
                                  </Link>
                                  <div className="ofs-carousel__item__text">
                                    Mua 1 được 7
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "25%" }}
                            >
                              <div>
                                <div
                                  className="ofs-carousel__item"
                                  location={4}
                                  recommendation_info="QUE:new_ab_traffic_misc_SHOPPOP,QUES:new_ab_traffic_misc_SHOPPOP,REQID:1f8a1b84e98f60e1c22b812ef803f700%3A040000d645d9edc5%3A0300018397ab75cd,PID:11,SLTKEY:officialshop_slot,SEC:officialshop_sec_00,SECKEY:officialshop_sec,BNDOPT:officialshop,BND:officialshop,USR:default"
                                  shopid={163816784}
                                >
                                  <Link
                                    className="ofs-carousel__shop-cover-image"
                                    to="/error"
                                  >
                                    <div className="n-CE6j">
                                      <div
                                        className="ofs-carousel__cover-image edy5hG"
                                        style={{
                                          backgroundImage:
                                            'url("https://cf.shopee.vn/file/459eece31c336a92ebcde98565aa6ee6_xhdpi")',
                                          backgroundSize: "contain",
                                          backgroundRepeat: "no-repeat",
                                        }}
                                      />
                                    </div>
                                  </Link>
                                  <div className="ofs-carousel__item__text">
                                    Thanh lịch quyến rũ
                                  </div>
                                </div>
                                <div
                                  className="ofs-carousel__item"
                                  location={5}
                                  recommendation_info="QUE:new_ab_traffic_misc_SHOPPOP,QUES:new_ab_traffic_misc_SHOPPOP,REQID:1f8a1b84e98f60e1c22b812ef803f700%3A040000d645d9edc5%3A0300018397ab75cd,PID:11,SLTKEY:officialshop_slot,SEC:officialshop_sec_00,SECKEY:officialshop_sec,BNDOPT:officialshop,BND:officialshop,USR:default"
                                  shopid={156716198}
                                >
                                  <Link
                                    className="ofs-carousel__shop-cover-image"
                                    to="/error"
                                  >
                                    <div className="n-CE6j">
                                      <div
                                        className="ofs-carousel__cover-image edy5hG"
                                        style={{
                                          backgroundImage:
                                            'url("https://cf.shopee.vn/file/c7b843e477e90f2a0ead5675b457f71a_xhdpi")',
                                          backgroundSize: "contain",
                                          backgroundRepeat: "no-repeat",
                                        }}
                                      />
                                    </div>
                                  </Link>
                                  <div className="ofs-carousel__item__text">
                                    Mua là có quà
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "25%" }}
                            >
                              <div>
                                <div
                                  className="ofs-carousel__item"
                                  location={6}
                                  recommendation_info="QUE:new_ab_traffic_misc_SHOPPOP,QUES:new_ab_traffic_misc_SHOPPOP,REQID:1f8a1b84e98f60e1c22b812ef803f700%3A040000d645d9edc5%3A0300018397ab75cd,PID:11,SLTKEY:officialshop_slot,SEC:officialshop_sec_00,SECKEY:officialshop_sec,BNDOPT:officialshop,BND:officialshop,USR:default"
                                  shopid={173392916}
                                >
                                  <Link
                                    className="ofs-carousel__shop-cover-image"
                                    to="/error"
                                  >
                                    <div className="n-CE6j">
                                      <div
                                        className="ofs-carousel__cover-image edy5hG"
                                        style={{
                                          backgroundImage:
                                            'url("https://cf.shopee.vn/file/b34660895a8f99db9e56336ab5cb944b_xhdpi")',
                                          backgroundSize: "contain",
                                          backgroundRepeat: "no-repeat",
                                        }}
                                      />
                                    </div>
                                  </Link>
                                  <div className="ofs-carousel__item__text">
                                    Deal sốc 6k
                                  </div>
                                </div>
                                <div
                                  className="ofs-carousel__item"
                                  location={7}
                                  shopid={135890280}
                                >
                                  <Link
                                    className="ofs-carousel__shop-cover-image"
                                    to="/error"
                                  >
                                    <div className="n-CE6j">
                                      <div
                                        className="ofs-carousel__cover-image edy5hG"
                                        style={{
                                          backgroundImage:
                                            'url("https://cf.shopee.vn/file/623a1627b46b5a7f2b37ed9c64a99949_xhdpi")',
                                          backgroundSize: "contain",
                                          backgroundRepeat: "no-repeat",
                                        }}
                                      />
                                    </div>
                                  </Link>
                                  <div className="ofs-carousel__item__text">
                                    Sữa khỏe quà xịn
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "25%" }}
                            >
                              <div>
                                <div
                                  className="ofs-carousel__item"
                                  location={8}
                                  shopid={127691603}
                                >
                                  <Link
                                    className="ofs-carousel__shop-cover-image"
                                    to="/error"
                                  >
                                    <div className="n-CE6j">
                                      <div className="ofs-carousel__cover-image +HNXw-" />
                                      <div className="lJRMbr">
                                        <div className="_195RIB" />
                                      </div>
                                    </div>
                                  </Link>
                                  <div className="ofs-carousel__item__text">
                                    Mua là có quà
                                  </div>
                                </div>
                                <div
                                  className="ofs-carousel__item"
                                  location={9}
                                  shopid={108166524}
                                >
                                  <Link
                                    className="ofs-carousel__shop-cover-image"
                                    to="/error"
                                  >
                                    <div className="n-CE6j">
                                      <div className="ofs-carousel__cover-image +HNXw-" />
                                      <div className="lJRMbr">
                                        <div className="_195RIB" />
                                      </div>
                                    </div>
                                  </Link>
                                  <div className="ofs-carousel__item__text">
                                    Mua là có quà
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "25%" }}
                            >
                              <div>
                                <div
                                  className="ofs-carousel__item"
                                  location={10}
                                  shopid={58411241}
                                >
                                  <Link
                                    className="ofs-carousel__shop-cover-image"
                                    to="/error"
                                  >
                                    <div className="n-CE6j">
                                      <div className="ofs-carousel__cover-image +HNXw-" />
                                      <div className="lJRMbr">
                                        <div className="_195RIB" />
                                      </div>
                                    </div>
                                  </Link>
                                  <div className="ofs-carousel__item__text">
                                    Mua là có quà
                                  </div>
                                </div>
                                <div
                                  className="ofs-carousel__item"
                                  location={11}
                                  shopid={254657873}
                                >
                                  <Link
                                    className="ofs-carousel__shop-cover-image"
                                    to="/error"
                                  >
                                    <div className="n-CE6j">
                                      <div className="ofs-carousel__cover-image +HNXw-" />
                                      <div className="lJRMbr">
                                        <div className="_195RIB" />
                                      </div>
                                    </div>
                                  </Link>
                                  <div className="ofs-carousel__item__text">
                                    Vua bếp Tefal
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "25%" }}
                            >
                              <div>
                                <div
                                  className="ofs-carousel__item"
                                  location={12}
                                  shopid={639673459}
                                >
                                  <Link
                                    className="ofs-carousel__shop-cover-image"
                                    to="/error"
                                  >
                                    <div className="n-CE6j">
                                      <div className="ofs-carousel__cover-image +HNXw-" />
                                      <div className="lJRMbr">
                                        <div className="_195RIB" />
                                      </div>
                                    </div>
                                  </Link>
                                  <div className="ofs-carousel__item__text">
                                    Mua là có quà
                                  </div>
                                </div>
                                <div
                                  className="ofs-carousel__item"
                                  location={13}
                                  shopid={27495213}
                                >
                                  <Link
                                    className="ofs-carousel__shop-cover-image"
                                    to="/error"
                                  >
                                    <div className="n-CE6j">
                                      <div className="ofs-carousel__cover-image +HNXw-" />
                                      <div className="lJRMbr">
                                        <div className="_195RIB" />
                                      </div>
                                    </div>
                                  </Link>
                                  <div className="ofs-carousel__item__text">
                                    Mua 1 tặng 1
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="image-carousel__item"
                              style={{ padding: "0px", width: "25%" }}
                            >
                              <div>
                                <div
                                  className="ofs-carousel__item"
                                  location={14}
                                  shopid={328910017}
                                >
                                  <Link
                                    className="ofs-carousel__shop-cover-image"
                                    to="/error"
                                  >
                                    <div className="n-CE6j">
                                      <div className="ofs-carousel__cover-image +HNXw-" />
                                      <div className="lJRMbr">
                                        <div className="_195RIB" />
                                      </div>
                                    </div>
                                  </Link>
                                  <div className="ofs-carousel__item__text">
                                    Bảo vệ toàn diện
                                  </div>
                                </div>
                                <a
                                  className="ofs-carousel__item ofs-seemore"
                                  href="/mall"
                                >
                                  <div className="ofs-carousel__cover-image" />
                                  <div className="ofs-seemore__content">
                                    Xem tất cả
                                    <div className="ofs-seemore__arrow">
                                      <svg
                                        enableBackground="new 0 0 11 11"
                                        viewBox="0 0 11 11"
                                        x={0}
                                        y={0}
                                        className="shopee-svg-icon icon-arrow-right"
                                      >
                                        <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                                      </svg>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="carousel-arrow carousel-arrow--prev carousel-arrow--hint carousel-arrow--hidden"
                          role="button"
                          tabIndex={0}
                          style={{
                            opacity: 1,
                            visibility: "hidden",
                            transform: "translateX(calc(-50% + 0px))",
                          }}
                        >
                          <svg
                            enableBackground="new 0 0 13 20"
                            viewBox="0 0 13 20"
                            x={0}
                            y={0}
                            className="shopee-svg-icon icon-arrow-left-bold"
                          >
                            <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                          </svg>
                        </div>
                        <div
                          className="carousel-arrow carousel-arrow--next carousel-arrow--hint"
                          role="button"
                          tabIndex={0}
                          style={{
                            opacity: 1,
                            visibility: "visible",
                            transform: "translateX(calc(50% - 0px))",
                          }}
                        >
                          <svg
                            enableBackground="new 0 0 13 21"
                            viewBox="0 0 13 21"
                            x={0}
                            y={0}
                            className="shopee-svg-icon icon-arrow-right-bold"
                          >
                            <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="shopee-header-section zRDhJC shopee-header-section--simple">
                <div className="shopee-header-section__header">
                  <div className="shopee-header-section__header__title">
                    <span className="OJR0Qm">Tìm kiếm hàng đầu</span>
                  </div>
                  <Link
                    className="shopee-header-section__header-link"
                    tabIndex={-1}
                    to="/error"
                  >
                    <button className="shopee-button-no-outline">
                      Xem tất cả&nbsp;
                      <svg
                        enableBackground="new 0 0 11 11"
                        viewBox="0 0 11 11"
                        x={0}
                        y={0}
                        className="shopee-svg-icon icon-arrow-right"
                      >
                        <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                      </svg>
                    </button>
                  </Link>
                </div>
                <div className="shopee-header-section__content">
                  <div className="image-carousel">
                    <div className="image-carousel__item-list-wrapper">
                      <ul
                        className="image-carousel__item-list"
                        style={{
                          width: "333.333%",
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt=""
                                  width="invalid-value"
                                  height="invalid-value"
                                  className="QQTrlS edy5hG"
                                  style={{ objectFit: "contain" }}
                                  src="https://cf.shopee.vn/file/2ab542957b948aeba55305a3969bf77e"
                                />
                              </div>
                            </div>
                            <div className="cXODCZ">Áo Khoác Blazer Nam</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt=""
                                  width="invalid-value"
                                  height="invalid-value"
                                  className="QQTrlS edy5hG"
                                  style={{ objectFit: "contain" }}
                                  src="https://cf.shopee.vn/file/07ac83c0813930f82f8b1026b84869fb"
                                />
                              </div>
                            </div>
                            <div className="cXODCZ">Áo Khoác Dạ Nam</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt=""
                                  width="invalid-value"
                                  height="invalid-value"
                                  className="QQTrlS edy5hG"
                                  style={{ objectFit: "contain" }}
                                  src="https://cf.shopee.vn/file/74b29cd353add537fe09fffbf29de31d"
                                />
                              </div>
                            </div>
                            <div className="cXODCZ">Áo Gile Nam</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt=""
                                  width="invalid-value"
                                  height="invalid-value"
                                  className="QQTrlS edy5hG"
                                  style={{ objectFit: "contain" }}
                                  src="https://cf.shopee.vn/file/62357a5ef3bbf17b2457e500eea4588e"
                                />
                              </div>
                            </div>
                            <div className="cXODCZ">Áo Khoác Nam</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt=""
                                  width="invalid-value"
                                  height="invalid-value"
                                  className="QQTrlS edy5hG"
                                  style={{ objectFit: "contain" }}
                                  src="https://cf.shopee.vn/file/0561fdd43f562c3f48fd2532aa9852af"
                                />
                              </div>
                            </div>
                            <div className="cXODCZ">Áo Khoác Dáng Dài</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt=""
                                  width="invalid-value"
                                  height="invalid-value"
                                  className="QQTrlS edy5hG"
                                  style={{ objectFit: "contain" }}
                                  src="https://cf.shopee.vn/file/8e66a2e16db506e6eebd4f8d1f0e3b93"
                                />
                              </div>
                            </div>
                            <div className="cXODCZ">Áo Khoác Cardigan</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt="" className="QQTrlS +HNXw-" />
                                <div className="lJRMbr">
                                  <div className="_195RIB" />
                                </div>
                              </div>
                            </div>
                            <div className="cXODCZ">Áo Blazer Nữ Dài Tay</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt="" className="QQTrlS +HNXw-" />
                                <div className="lJRMbr">
                                  <div className="_195RIB" />
                                </div>
                              </div>
                              <div className="pDTGqb">Bán 86k+ / tháng</div>
                            </div>
                            <div className="cXODCZ">Bút Mực Gel</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt="" className="QQTrlS +HNXw-" />
                                <div className="lJRMbr">
                                  <div className="_195RIB" />
                                </div>
                              </div>
                              <div className="pDTGqb">Bán 57k+ / tháng</div>
                            </div>
                            <div className="cXODCZ">Áo Sơmi Nam Ngắn Tay</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt="" className="QQTrlS +HNXw-" />
                                <div className="lJRMbr">
                                  <div className="_195RIB" />
                                </div>
                              </div>
                              <div className="pDTGqb">Bán 91k+ / tháng</div>
                            </div>
                            <div className="cXODCZ">
                              Áo Thun Polo Nam Ngắn Tay
                            </div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt="" className="QQTrlS +HNXw-" />
                                <div className="lJRMbr">
                                  <div className="_195RIB" />
                                </div>
                              </div>
                              <div className="pDTGqb">Bán 79k+ / tháng</div>
                            </div>
                            <div className="cXODCZ">Quần Âu Nam</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt="" className="QQTrlS +HNXw-" />
                                <div className="lJRMbr">
                                  <div className="_195RIB" />
                                </div>
                              </div>
                              <div className="pDTGqb">Bán 65k+ / tháng</div>
                            </div>
                            <div className="cXODCZ">Mũ Bảo Hiểm Nửa Đầu</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt="" className="QQTrlS +HNXw-" />
                                <div className="lJRMbr">
                                  <div className="_195RIB" />
                                </div>
                              </div>
                              <div className="pDTGqb">Bán 116k+ / tháng</div>
                            </div>
                            <div className="cXODCZ">Quần Lót Nữ Cotton</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt="" className="QQTrlS +HNXw-" />
                                <div className="lJRMbr">
                                  <div className="_195RIB" />
                                </div>
                              </div>
                              <div className="pDTGqb">Bán 89k+ / tháng</div>
                            </div>
                            <div className="cXODCZ">Khẩu Trang Unicharm</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt="" className="QQTrlS +HNXw-" />
                                <div className="lJRMbr">
                                  <div className="_195RIB" />
                                </div>
                              </div>
                              <div className="pDTGqb">Bán 135k+ / tháng</div>
                            </div>
                            <div className="cXODCZ">
                              Bông Tẩy Trang 3 Lớp Cotton Pads
                            </div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt="" className="QQTrlS +HNXw-" />
                                <div className="lJRMbr">
                                  <div className="_195RIB" />
                                </div>
                              </div>
                              <div className="pDTGqb">Bán 64k+ / tháng</div>
                            </div>
                            <div className="cXODCZ">Kính Cường Lực Iphone</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt="" className="QQTrlS +HNXw-" />
                                <div className="lJRMbr">
                                  <div className="_195RIB" />
                                </div>
                              </div>
                              <div className="pDTGqb">Bán 189k+ / tháng</div>
                            </div>
                            <div className="cXODCZ">Ốp Iphone 5</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt="" className="QQTrlS +HNXw-" />
                                <div className="lJRMbr">
                                  <div className="_195RIB" />
                                </div>
                              </div>
                              <div className="pDTGqb">Bán 76k+ / tháng</div>
                            </div>
                            <div className="cXODCZ">
                              Hình Xăm Dán Chống Nước
                            </div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt="" className="QQTrlS +HNXw-" />
                                <div className="lJRMbr">
                                  <div className="_195RIB" />
                                </div>
                              </div>
                              <div className="pDTGqb">Bán 85k+ / tháng</div>
                            </div>
                            <div className="cXODCZ">Son Kem Lì</div>
                          </Link>
                        </li>
                        <li
                          className="image-carousel__item"
                          style={{ padding: "0px", width: "16.6667%" }}
                        >
                          <Link className="K5psIF Wh3W7J" to="/error">
                            <div className="xpdSwI">
                              <div className="uVbGLf od+H03 li78LN" />
                              <div className="n-CE6j _06bq+d">
                                <img alt="" className="QQTrlS +HNXw-" />
                                <div className="lJRMbr">
                                  <div className="_195RIB" />
                                </div>
                              </div>
                              <div className="pDTGqb">Bán 156k+ / tháng</div>
                            </div>
                            <div className="cXODCZ">Ốp Lưng Iphone</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="carousel-arrow carousel-arrow--prev carousel-arrow--hint carousel-arrow--hidden"
                      role="button"
                      tabIndex={0}
                      style={{
                        opacity: 1,
                        visibility: "hidden",
                        transform: "translateX(calc(-50% + 0px))",
                      }}
                    >
                      <svg
                        enableBackground="new 0 0 13 20"
                        viewBox="0 0 13 20"
                        x={0}
                        y={0}
                        className="shopee-svg-icon icon-arrow-left-bold"
                      >
                        <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                      </svg>
                    </div>
                    <div
                      className="carousel-arrow carousel-arrow--next carousel-arrow--hint"
                      role="button"
                      tabIndex={0}
                      style={{
                        opacity: 1,
                        visibility: "visible",
                        transform: "translateX(calc(50% - 0px))",
                      }}
                    >
                      <svg
                        enableBackground="new 0 0 13 21"
                        viewBox="0 0 13 21"
                        x={0}
                        y={0}
                        className="shopee-svg-icon icon-arrow-right-bold"
                      >
                        <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="section-recommend-products-wrapper">
                <div>
                  <div className="ARwPBS">
                    <div className="stardust-tabs-header-anchor" />
                    <nav
                      className="stardust-tabs-header-wrapper"
                      style={{ top: "7.375rem" }}
                    >
                      <ul className="stardust-tabs-header">
                        <li className="stardust-tabs-header__tab stardust-tabs-header__tab--active">
                          <div
                            className="FA284N N-5qHu"
                            style={{ background: "rgb(238, 77, 45)" }}
                          />
                          <div className="FJibgJ">
                            <span style={{ color: "rgb(238, 77, 45)" }}>
                              GỢI Ý HÔM NAY
                            </span>
                          </div>
                        </li>
                        <li className="stardust-tabs-header__tab">
                          <div
                            className="FA284N N-5qHu"
                            style={{ background: "rgb(238, 77, 45)" }}
                          />
                          <div className="FJibgJ">
                            <img
                              alt=""
                              src="https://cf.shopee.vn/file/c70c8cd512a9bbfb9c061d0746e3c202"
                              style={{ width: "auto", height: "1.25rem" }}
                            />
                          </div>
                        </li>
                      </ul>
                      <i
                        className="stardust-tabs-header__tab-indicator"
                        style={{
                          display: "none",
                          width: "50%",
                          transform: "translateX(0%)",
                        }}
                      />
                    </nav>
                    <div className="stardust-tabs-panels">
                      <section
                        className="stardust-tabs-panels__panel"
                        style={{ display: "block" }}
                      >
                        <ProductHome />
                      </section>
                      <section
                        className="stardust-tabs-panels__panel"
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <shopee-banner-popup-stateful spacekey="PC-VN-HOME_POPUP_01" />
        </div>
      </div>
    );
  }
}

export default Home;
