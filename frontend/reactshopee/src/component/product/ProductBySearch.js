import axios from "axios";
import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { BrandMenu } from "../brand/BrandMenu";
import ProductCategory from "../category/ProductCategory";

const ProductBySearch = () => {
  var url =
    "http://localhost:8080/api/v1/search/" + localStorage.getItem("search");
  const [product, setProduct] = useState();
  const [reducerCategory, forceUpdate] = useReducer(x=>x+1, 0);
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
  return (
    <div className="_9dX3ZL">
      <div className="container +eN62l">
        <div className="shopee-filter-panel">
          <div />
          <div className="shopee-search-filter-status">
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              x={0}
              y={0}
              className="shopee-svg-icon"
            >
              <g>
                <polyline
                  fill="none"
                  points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                />
              </g>
            </svg>
            <div className="shopee-search-filter-status__text">
              Bộ lọc tìm kiếm
            </div>
          </div>
          <ProductCategory />
          <BrandMenu />
          <div className="shopee-filter-group shopee-location-filter">
            <div className="shopee-filter-group__header">Nơi Bán</div>
            <div className="folding-items shopeee-filter-group__body folding-items--folded">
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name defaultValue="Hà Nội" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Hà Nội</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input
                      type="checkbox"
                      name
                      defaultValue="TP. Hồ Chí Minh"
                    />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">
                      TP. Hồ Chí Minh
                    </span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name defaultValue="Thái Nguyên" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Thái Nguyên</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name defaultValue="Vĩnh Phúc" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Vĩnh Phúc</span>
                  </label>
                </div>
              </div>
              <div className="stardust-dropdown folding-items__toggle">
                <div className="stardust-dropdown__item-header">
                  <div className="shopee-filter-group__toggle-btn">
                    Thêm
                    <svg
                      enableBackground="new 0 0 11 11"
                      viewBox="0 0 11 11"
                      x={0}
                      y={0}
                      className="shopee-svg-icon icon-arrow-down"
                    >
                      <g>
                        <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="stardust-dropdown__item-body">
                  <div className="folding-items__folded-items">
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input
                            type="checkbox"
                            name
                            defaultValue="Hải Phòng"
                          />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Hải Phòng
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input type="checkbox" name defaultValue="Đồng Nai" />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Đồng Nai
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input type="checkbox" name defaultValue="Hưng Yên" />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Hưng Yên
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input
                            type="checkbox"
                            name
                            defaultValue="Bình Dương"
                          />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Bình Dương
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input type="checkbox" name defaultValue="Bắc Ninh" />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Bắc Ninh
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input type="checkbox" name defaultValue="Đà Nẵng" />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Đà Nẵng
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input
                            type="checkbox"
                            name
                            defaultValue="Quảng Ninh"
                          />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Quảng Ninh
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input
                            type="checkbox"
                            name
                            defaultValue="Hải Dương"
                          />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Hải Dương
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input type="checkbox" name defaultValue="Nam Định" />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Nam Định
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input type="checkbox" name defaultValue="Cần Thơ" />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Cần Thơ
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input type="checkbox" name defaultValue="Phú Thọ" />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Phú Thọ
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input
                            type="checkbox"
                            name
                            defaultValue="Bà Rịa - Vũng Tàu"
                          />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Bà Rịa - Vũng Tàu
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input type="checkbox" name defaultValue="Đắk Lắk" />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Đắk Lắk
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input
                            type="checkbox"
                            name
                            defaultValue="Thanh Hóa"
                          />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Thanh Hóa
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input
                            type="checkbox"
                            name
                            defaultValue="Thái Bình"
                          />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Thái Bình
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input
                            type="checkbox"
                            name
                            defaultValue="Nước ngoài"
                          />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Nước ngoài
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="tnbb-a">
                      <div
                        className="stardust-popover"
                        id="stardust-popover6"
                        tabIndex={0}
                      >
                        <div role="button" className="stardust-popover__target">
                          <div className="cmvngI">Khác &gt;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shopee-filter-group shopee-logistics-filter">
            <div className="shopee-filter-group__header">Đơn Vị Vận Chuyển</div>
            <div className="folding-items shopeee-filter-group__body folding-items--folded">
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name defaultValue={1} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Hỏa Tốc</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name defaultValue={2} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Nhanh</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name defaultValue={3} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Tiết Kiệm</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="shopee-filter-group shopee-price-range-filter shopee-price-range-filter--vn">
            <div className="shopee-filter-group__header shopee-price-range-filter__header">
              Khoảng Giá
            </div>
            <div className="shopee-filter-group__body shopee-price-range-filter__edit">
              <div className="shopee-price-range-filter__inputs">
                <input
                  type="text"
                  maxLength={13}
                  className="shopee-price-range-filter__input"
                  placeholder="₫ TỪ"
                  defaultValue
                />
                <div className="shopee-price-range-filter__range-line" />
                <input
                  type="text"
                  maxLength={13}
                  className="shopee-price-range-filter__input"
                  placeholder="₫ ĐẾN"
                  defaultValue
                />
              </div>
            </div>
            <button
              className="shopee-button-solid shopee-button-solid--primary kcCIDE"
              style={{ backgroundColor: "rgb(238, 77, 45)" }}
            >
              Áp dụng
            </button>
          </div>
          <div className="shopee-filter-group">
            <div className="shopee-filter-group__header">Loại Shop</div>
            <div className="folding-items shopeee-filter-group__body folding-items--folded">
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name defaultValue={7} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">
                      Shop Yêu thích
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="shopee-filter-group">
            <div className="shopee-filter-group__header">Tình Trạng</div>
            <div className="folding-items shopeee-filter-group__body folding-items--folded">
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name defaultValue={9} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Đã sử dụng</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name defaultValue={8} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Mới</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="shopee-filter-group M4AEyr">
            <div className="shopee-filter-group__header">Đánh Giá</div>
            <div className="folding-items shopeee-filter-group__body folding-items--folded">
              <div className="Qo9BVk">
                <div className="rating-stars__container">
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset={0} stopColor="#ffca11" />
                        <stop offset={1} stopColor="#ffad27" />
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      />
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth={1}
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                <use
                                  stroke="#ffa727"
                                  strokeWidth=".5"
                                  xlinkHref="#ratingStar"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset={0} stopColor="#ffca11" />
                        <stop offset={1} stopColor="#ffad27" />
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      />
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth={1}
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                <use
                                  stroke="#ffa727"
                                  strokeWidth=".5"
                                  xlinkHref="#ratingStar"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset={0} stopColor="#ffca11" />
                        <stop offset={1} stopColor="#ffad27" />
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      />
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth={1}
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                <use
                                  stroke="#ffa727"
                                  strokeWidth=".5"
                                  xlinkHref="#ratingStar"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset={0} stopColor="#ffca11" />
                        <stop offset={1} stopColor="#ffad27" />
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      />
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth={1}
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                <use
                                  stroke="#ffa727"
                                  strokeWidth=".5"
                                  xlinkHref="#ratingStar"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset={0} stopColor="#ffca11" />
                        <stop offset={1} stopColor="#ffad27" />
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      />
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth={1}
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                <use
                                  stroke="#ffa727"
                                  strokeWidth=".5"
                                  xlinkHref="#ratingStar"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="Qo9BVk">
                <div className="rating-stars__container">
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset={0} stopColor="#ffca11" />
                        <stop offset={1} stopColor="#ffad27" />
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      />
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth={1}
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                <use
                                  stroke="#ffa727"
                                  strokeWidth=".5"
                                  xlinkHref="#ratingStar"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset={0} stopColor="#ffca11" />
                        <stop offset={1} stopColor="#ffad27" />
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      />
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth={1}
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                <use
                                  stroke="#ffa727"
                                  strokeWidth=".5"
                                  xlinkHref="#ratingStar"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset={0} stopColor="#ffca11" />
                        <stop offset={1} stopColor="#ffad27" />
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      />
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth={1}
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                <use
                                  stroke="#ffa727"
                                  strokeWidth=".5"
                                  xlinkHref="#ratingStar"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset={0} stopColor="#ffca11" />
                        <stop offset={1} stopColor="#ffad27" />
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      />
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth={1}
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                <use
                                  stroke="#ffa727"
                                  strokeWidth=".5"
                                  xlinkHref="#ratingStar"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div
                    className="rating-stars__star ytO7le"
                    style={{ width: "14px", height: "14px" }}
                  >
                    <svg viewBox="0 0 30 30" className="_9MGQf1">
                      <defs>
                        <linearGradient
                          id="star__hollow"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="99.0177926%"
                        >
                          <stop offset="0%" stopColor="#FFD211" />
                          <stop offset="100%" stopColor="#FFAD27" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="none"
                        fillRule="evenodd"
                        stroke="url(#star__hollow)"
                        strokeWidth={2}
                        d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                      />
                    </svg>
                    <svg
                      viewBox="0 0 30 30"
                      className="_9MGQf1"
                      style={{ width: "0%" }}
                    >
                      <defs>
                        <linearGradient
                          id="star__solid"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#FFCA11" />
                          <stop offset="100%" stopColor="#FFAD27" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#star__solid)"
                        fillRule="evenodd"
                        d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                      />
                    </svg>
                  </div>
                </div>
                trở lên
              </div>
              <div className="Qo9BVk">
                <div className="rating-stars__container">
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset={0} stopColor="#ffca11" />
                        <stop offset={1} stopColor="#ffad27" />
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      />
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth={1}
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                <use
                                  stroke="#ffa727"
                                  strokeWidth=".5"
                                  xlinkHref="#ratingStar"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset={0} stopColor="#ffca11" />
                        <stop offset={1} stopColor="#ffad27" />
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      />
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth={1}
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                <use
                                  stroke="#ffa727"
                                  strokeWidth=".5"
                                  xlinkHref="#ratingStar"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset={0} stopColor="#ffca11" />
                        <stop offset={1} stopColor="#ffad27" />
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      />
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth={1}
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                <use
                                  stroke="#ffa727"
                                  strokeWidth=".5"
                                  xlinkHref="#ratingStar"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div
                    className="rating-stars__star ytO7le"
                    style={{ width: "14px", height: "14px" }}
                  >
                    <svg viewBox="0 0 30 30" className="_9MGQf1">
                      <defs>
                        <linearGradient
                          id="star__hollow"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="99.0177926%"
                        >
                          <stop offset="0%" stopColor="#FFD211" />
                          <stop offset="100%" stopColor="#FFAD27" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="none"
                        fillRule="evenodd"
                        stroke="url(#star__hollow)"
                        strokeWidth={2}
                        d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                      />
                    </svg>
                    <svg
                      viewBox="0 0 30 30"
                      className="_9MGQf1"
                      style={{ width: "0%" }}
                    >
                      <defs>
                        <linearGradient
                          id="star__solid"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#FFCA11" />
                          <stop offset="100%" stopColor="#FFAD27" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#star__solid)"
                        fillRule="evenodd"
                        d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                      />
                    </svg>
                  </div>
                  <div
                    className="rating-stars__star ytO7le"
                    style={{ width: "14px", height: "14px" }}
                  >
                    <svg viewBox="0 0 30 30" className="_9MGQf1">
                      <defs>
                        <linearGradient
                          id="star__hollow"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="99.0177926%"
                        >
                          <stop offset="0%" stopColor="#FFD211" />
                          <stop offset="100%" stopColor="#FFAD27" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="none"
                        fillRule="evenodd"
                        stroke="url(#star__hollow)"
                        strokeWidth={2}
                        d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                      />
                    </svg>
                    <svg
                      viewBox="0 0 30 30"
                      className="_9MGQf1"
                      style={{ width: "0%" }}
                    >
                      <defs>
                        <linearGradient
                          id="star__solid"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#FFCA11" />
                          <stop offset="100%" stopColor="#FFAD27" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#star__solid)"
                        fillRule="evenodd"
                        d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                      />
                    </svg>
                  </div>
                </div>
                trở lên
              </div>
              <div className="Qo9BVk">
                <div className="rating-stars__container">
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset={0} stopColor="#ffca11" />
                        <stop offset={1} stopColor="#ffad27" />
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      />
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth={1}
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                <use
                                  stroke="#ffa727"
                                  strokeWidth=".5"
                                  xlinkHref="#ratingStar"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset={0} stopColor="#ffca11" />
                        <stop offset={1} stopColor="#ffad27" />
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      />
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth={1}
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                <use
                                  stroke="#ffa727"
                                  strokeWidth=".5"
                                  xlinkHref="#ratingStar"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div
                    className="rating-stars__star ytO7le"
                    style={{ width: "14px", height: "14px" }}
                  >
                    <svg viewBox="0 0 30 30" className="_9MGQf1">
                      <defs>
                        <linearGradient
                          id="star__hollow"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="99.0177926%"
                        >
                          <stop offset="0%" stopColor="#FFD211" />
                          <stop offset="100%" stopColor="#FFAD27" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="none"
                        fillRule="evenodd"
                        stroke="url(#star__hollow)"
                        strokeWidth={2}
                        d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                      />
                    </svg>
                    <svg
                      viewBox="0 0 30 30"
                      className="_9MGQf1"
                      style={{ width: "0%" }}
                    >
                      <defs>
                        <linearGradient
                          id="star__solid"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#FFCA11" />
                          <stop offset="100%" stopColor="#FFAD27" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#star__solid)"
                        fillRule="evenodd"
                        d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                      />
                    </svg>
                  </div>
                  <div
                    className="rating-stars__star ytO7le"
                    style={{ width: "14px", height: "14px" }}
                  >
                    <svg viewBox="0 0 30 30" className="_9MGQf1">
                      <defs>
                        <linearGradient
                          id="star__hollow"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="99.0177926%"
                        >
                          <stop offset="0%" stopColor="#FFD211" />
                          <stop offset="100%" stopColor="#FFAD27" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="none"
                        fillRule="evenodd"
                        stroke="url(#star__hollow)"
                        strokeWidth={2}
                        d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                      />
                    </svg>
                    <svg
                      viewBox="0 0 30 30"
                      className="_9MGQf1"
                      style={{ width: "0%" }}
                    >
                      <defs>
                        <linearGradient
                          id="star__solid"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#FFCA11" />
                          <stop offset="100%" stopColor="#FFAD27" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#star__solid)"
                        fillRule="evenodd"
                        d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                      />
                    </svg>
                  </div>
                  <div
                    className="rating-stars__star ytO7le"
                    style={{ width: "14px", height: "14px" }}
                  >
                    <svg viewBox="0 0 30 30" className="_9MGQf1">
                      <defs>
                        <linearGradient
                          id="star__hollow"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="99.0177926%"
                        >
                          <stop offset="0%" stopColor="#FFD211" />
                          <stop offset="100%" stopColor="#FFAD27" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="none"
                        fillRule="evenodd"
                        stroke="url(#star__hollow)"
                        strokeWidth={2}
                        d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                      />
                    </svg>
                    <svg
                      viewBox="0 0 30 30"
                      className="_9MGQf1"
                      style={{ width: "0%" }}
                    >
                      <defs>
                        <linearGradient
                          id="star__solid"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#FFCA11" />
                          <stop offset="100%" stopColor="#FFAD27" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#star__solid)"
                        fillRule="evenodd"
                        d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                      />
                    </svg>
                  </div>
                </div>
                trở lên
              </div>
              <div className="stardust-dropdown folding-items__toggle">
                <div className="stardust-dropdown__item-header">
                  <div className="shopee-filter-group__toggle-btn">
                    Thêm
                    <svg
                      enableBackground="new 0 0 11 11"
                      viewBox="0 0 11 11"
                      x={0}
                      y={0}
                      className="shopee-svg-icon icon-arrow-down"
                    >
                      <g>
                        <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="stardust-dropdown__item-body">
                  <div className="folding-items__folded-items">
                    <div className="Qo9BVk">
                      <div className="rating-stars__container">
                        <svg
                          viewBox="0 0 9.5 8"
                          className="shopee-svg-icon rating-stars__star icon-rating-colored"
                        >
                          <defs>
                            <linearGradient
                              id="ratingStarGradient"
                              x1="50%"
                              x2="50%"
                              y1="0%"
                              y2="100%"
                            >
                              <stop offset={0} stopColor="#ffca11" />
                              <stop offset={1} stopColor="#ffad27" />
                            </linearGradient>
                            <polygon
                              id="ratingStar"
                              points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                            />
                          </defs>
                          <g
                            fill="url(#ratingStarGradient)"
                            fillRule="evenodd"
                            stroke="none"
                            strokeWidth={1}
                          >
                            <g transform="translate(-876 -1270)">
                              <g transform="translate(155 992)">
                                <g transform="translate(600 29)">
                                  <g transform="translate(10 239)">
                                    <g transform="translate(101 10)">
                                      <use
                                        stroke="#ffa727"
                                        strokeWidth=".5"
                                        xlinkHref="#ratingStar"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <div
                          className="rating-stars__star ytO7le"
                          style={{ width: "14px", height: "14px" }}
                        >
                          <svg viewBox="0 0 30 30" className="_9MGQf1">
                            <defs>
                              <linearGradient
                                id="star__hollow"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="99.0177926%"
                              >
                                <stop offset="0%" stopColor="#FFD211" />
                                <stop offset="100%" stopColor="#FFAD27" />
                              </linearGradient>
                            </defs>
                            <path
                              fill="none"
                              fillRule="evenodd"
                              stroke="url(#star__hollow)"
                              strokeWidth={2}
                              d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                            />
                          </svg>
                          <svg
                            viewBox="0 0 30 30"
                            className="_9MGQf1"
                            style={{ width: "0%" }}
                          >
                            <defs>
                              <linearGradient
                                id="star__solid"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="100%"
                              >
                                <stop offset="0%" stopColor="#FFCA11" />
                                <stop offset="100%" stopColor="#FFAD27" />
                              </linearGradient>
                            </defs>
                            <path
                              fill="url(#star__solid)"
                              fillRule="evenodd"
                              d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                            />
                          </svg>
                        </div>
                        <div
                          className="rating-stars__star ytO7le"
                          style={{ width: "14px", height: "14px" }}
                        >
                          <svg viewBox="0 0 30 30" className="_9MGQf1">
                            <defs>
                              <linearGradient
                                id="star__hollow"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="99.0177926%"
                              >
                                <stop offset="0%" stopColor="#FFD211" />
                                <stop offset="100%" stopColor="#FFAD27" />
                              </linearGradient>
                            </defs>
                            <path
                              fill="none"
                              fillRule="evenodd"
                              stroke="url(#star__hollow)"
                              strokeWidth={2}
                              d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                            />
                          </svg>
                          <svg
                            viewBox="0 0 30 30"
                            className="_9MGQf1"
                            style={{ width: "0%" }}
                          >
                            <defs>
                              <linearGradient
                                id="star__solid"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="100%"
                              >
                                <stop offset="0%" stopColor="#FFCA11" />
                                <stop offset="100%" stopColor="#FFAD27" />
                              </linearGradient>
                            </defs>
                            <path
                              fill="url(#star__solid)"
                              fillRule="evenodd"
                              d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                            />
                          </svg>
                        </div>
                        <div
                          className="rating-stars__star ytO7le"
                          style={{ width: "14px", height: "14px" }}
                        >
                          <svg viewBox="0 0 30 30" className="_9MGQf1">
                            <defs>
                              <linearGradient
                                id="star__hollow"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="99.0177926%"
                              >
                                <stop offset="0%" stopColor="#FFD211" />
                                <stop offset="100%" stopColor="#FFAD27" />
                              </linearGradient>
                            </defs>
                            <path
                              fill="none"
                              fillRule="evenodd"
                              stroke="url(#star__hollow)"
                              strokeWidth={2}
                              d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                            />
                          </svg>
                          <svg
                            viewBox="0 0 30 30"
                            className="_9MGQf1"
                            style={{ width: "0%" }}
                          >
                            <defs>
                              <linearGradient
                                id="star__solid"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="100%"
                              >
                                <stop offset="0%" stopColor="#FFCA11" />
                                <stop offset="100%" stopColor="#FFAD27" />
                              </linearGradient>
                            </defs>
                            <path
                              fill="url(#star__solid)"
                              fillRule="evenodd"
                              d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                            />
                          </svg>
                        </div>
                        <div
                          className="rating-stars__star ytO7le"
                          style={{ width: "14px", height: "14px" }}
                        >
                          <svg viewBox="0 0 30 30" className="_9MGQf1">
                            <defs>
                              <linearGradient
                                id="star__hollow"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="99.0177926%"
                              >
                                <stop offset="0%" stopColor="#FFD211" />
                                <stop offset="100%" stopColor="#FFAD27" />
                              </linearGradient>
                            </defs>
                            <path
                              fill="none"
                              fillRule="evenodd"
                              stroke="url(#star__hollow)"
                              strokeWidth={2}
                              d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                            />
                          </svg>
                          <svg
                            viewBox="0 0 30 30"
                            className="_9MGQf1"
                            style={{ width: "0%" }}
                          >
                            <defs>
                              <linearGradient
                                id="star__solid"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="100%"
                              >
                                <stop offset="0%" stopColor="#FFCA11" />
                                <stop offset="100%" stopColor="#FFAD27" />
                              </linearGradient>
                            </defs>
                            <path
                              fill="url(#star__solid)"
                              fillRule="evenodd"
                              d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                            />
                          </svg>
                        </div>
                      </div>
                      trở lên
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shopee-filter-group">
            <div className="shopee-filter-group__header">
              Dịch Vụ &amp; Khuyến Mãi
            </div>
            <div className="folding-items shopeee-filter-group__body folding-items--folded">
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name defaultValue={44} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">
                      Freeship Xtra
                    </span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name defaultValue={1000742} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Hoàn xu Xtra</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name defaultValue={10} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">
                      Đang giảm giá
                    </span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name defaultValue={11} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">
                      Miễn phí vận chuyển
                    </span>
                  </label>
                </div>
              </div>
              <div className="stardust-dropdown folding-items__toggle">
                <div className="stardust-dropdown__item-header">
                  <div className="shopee-filter-group__toggle-btn">
                    Thêm
                    <svg
                      enableBackground="new 0 0 11 11"
                      viewBox="0 0 11 11"
                      x={0}
                      y={0}
                      className="shopee-svg-icon icon-arrow-down"
                    >
                      <g>
                        <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="stardust-dropdown__item-body">
                  <div className="folding-items__folded-items">
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input type="checkbox" name defaultValue={15} />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Gì Cũng Rẻ
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input type="checkbox" name defaultValue={12} />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Hàng có sẵn
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="shopee-filter shopee-checkbox-filter">
                      <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <input type="checkbox" name defaultValue={14} />
                          <div className="shopee-checkbox__box">
                            <i> </i>
                          </div>
                          <span className="shopee-checkbox__label">
                            Mua giá bán buôn/ bán sỉ
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="shopee-button-solid shopee-button-solid--primary MNwyfG"
            style={{ backgroundColor: "rgb(238, 77, 45)" }}
          >
            Xóa tất cả
          </button>
        </div>
        <div role="main" className="ZgwlcK">
          <div className="shopee-search-user-brief">
            <div className="shopee-header-section shopee-header-section--simple">
              <div className="shopee-header-section__content">
                <div className="shopee-search-user-item shopee-search-user-item--short">
                  <Link
                    className="shopee-search-user-item__leading"
                    to="/error"
                  >
                    <div className="shopee-avatar">
                      <div className="shopee-avatar__placeholder">
                        <svg
                          enableBackground="new 0 0 15 15"
                          viewBox="0 0 15 15"
                          x={0}
                          y={0}
                          className="shopee-svg-icon icon-headshot"
                        >
                          <g>
                            <circle
                              cx="7.5"
                              cy="4.5"
                              fill="none"
                              r="3.8"
                              strokeMiterlimit={10}
                            />
                            <path
                              d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                              fill="none"
                              strokeLinecap="round"
                              strokeMiterlimit={10}
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="yvbeD6 shopee-avatar__img-wrapper">
                        <div
                          className="shopee-avatar__img vc8g9F"
                          style={{
                            backgroundImage:
                              'url("https://cf.shopee.vn/file/2177551e470495de1d0bea0accceaada_tn")',
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                          }}
                        />
                      </div>
                    </div>
                    <div className="shopee-search-user-item__leading__prefer-badge-wrapper">
                      <div className="_0OH991 gUO5wt t02+y-">Yêu thích+</div>
                    </div>
                  </Link>
                  <Link
                    className="shopee-search-user-item__shop-info"
                    to="/error"
                  >
                    <div className="shopee-search-user-item__nickname">
                      Áo Khoác Bán Chạy Nhất Shopee
                    </div>
                    <div className="shopee-search-user-item__username">
                      Tài trợ bởi lavado.menswear
                    </div>
                    <div className="shopee-search-user-item__follow-count">
                      <span className="shopee-search-user-item__follow-count-number">
                        87,2k
                      </span>
                      <span> Người theo dõi</span>
                      <span> | </span>
                      <span className="shopee-search-user-item__follow-count-number">
                        13
                      </span>
                      <span> Đang Theo</span>
                    </div>
                  </Link>
                  <div className="shopee-search-user-item__statistics">
                    <div className="shopee-search-user-seller-info-item">
                      <div className="shopee-search-user-seller-info-item__wrapper">
                        <div className="shopee-search-user-seller-info-item__header">
                          <svg
                            enableBackground="new 0 0 15 15"
                            viewBox="0 0 15 15"
                            x={0}
                            y={0}
                            className="shopee-svg-icon icon-products"
                          >
                            <g>
                              <path
                                d="m10 1 4.5 2.5-.5 3h-2v7.5h-9v-7.5h-2l-.5-3 4.6-2.5c.3 1.1 1.3 1.9 2.4 1.9s2.1-.8 2.5-1.9z"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
                              />
                              <line
                                fill="none"
                                strokeLinecap="round"
                                strokeMiterlimit={10}
                                x1={3}
                                x2={12}
                                y1="11.5"
                                y2="11.5"
                              />
                            </g>
                          </svg>
                          <span className="shopee-search-user-seller-info-item__primary-text">
                            466
                          </span>
                        </div>
                        <div className="shopee-search-user-seller-info-item__complement-text">
                          Sản phẩm
                        </div>
                      </div>
                    </div>
                    <div className="shopee-search-user-seller-info-item">
                      <div className="shopee-search-user-seller-info-item__wrapper">
                        <div className="shopee-search-user-seller-info-item__header">
                          <svg
                            enableBackground="new 0 0 15 15"
                            viewBox="0 0 15 15"
                            x={0}
                            y={0}
                            className="shopee-svg-icon icon-rating"
                          >
                            <polygon
                              fill="none"
                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit={10}
                            />
                          </svg>
                          <span className="shopee-search-user-seller-info-item__primary-text">
                            4.9
                          </span>
                        </div>
                        <div className="shopee-search-user-seller-info-item__complement-text">
                          Đánh giá
                        </div>
                      </div>
                    </div>
                    <div className="shopee-search-user-seller-info-item">
                      <div className="shopee-search-user-seller-info-item__wrapper">
                        <div className="shopee-search-user-seller-info-item__header">
                          <svg
                            enableBackground="new 0 0 15 15"
                            viewBox="0 0 15 15"
                            x={0}
                            y={0}
                            className="shopee-svg-icon"
                          >
                            <g>
                              <polygon
                                fill="none"
                                points="14 10.8 7 10.8 3 13.8 3 10.8 1 10.8 1 1.2 14 1.2"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
                              />
                              <circle cx={4} cy="5.8" r={1} stroke="none" />
                              <circle cx="7.5" cy="5.8" r={1} stroke="none" />
                              <circle cx={11} cy="5.8" r={1} stroke="none" />
                            </g>
                          </svg>
                          <span className="shopee-search-user-seller-info-item__primary-text">
                            100%
                          </span>
                        </div>
                        <div className="shopee-search-user-seller-info-item__complement-text">
                          tỉ lệ phản hồi
                        </div>
                      </div>
                    </div>
                    <div className="shopee-search-user-seller-info-item">
                      <div className="shopee-search-user-seller-info-item__wrapper">
                        <div className="shopee-search-user-seller-info-item__header">
                          <svg
                            enableBackground="new 0 0 15 15"
                            viewBox="0 0 15 15"
                            x={0}
                            y={0}
                            className="shopee-svg-icon"
                          >
                            <g>
                              <polyline
                                fill="none"
                                points="7.2 3.5 7.2 7.8 10.5 7.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
                              />
                              <circle
                                cx="7.5"
                                cy="7.5"
                                fill="none"
                                r="6.5"
                                strokeMiterlimit={10}
                              />
                            </g>
                          </svg>
                          <span className="shopee-search-user-seller-info-item__primary-text">
                            trong vài phút
                          </span>
                        </div>
                        <div className="shopee-search-user-seller-info-item__complement-text">
                          thời gian phản hồi
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shopee-search-item-result">
            <div className="shopee-sort-bar">
              <span className="shopee-sort-bar__label">Sắp xếp theo</span>
              <div className="shopee-sort-by-options">
                <div
                  className="shopee-sort-by-options__option shopee-sort-by-options__option--selected"
                  style={{ backgroundColor: "rgb(238, 77, 45)" }}
                >
                  Liên quan
                </div>
                <div className="shopee-sort-by-options__option">Mới nhất</div>
                <div className="shopee-sort-by-options__option">Bán chạy</div>
                <div>
                  <div className="select-with-status">
                    <div className="select-with-status__holder select-with-status__box-shadow">
                      <span className="select-with-status__placeholder">
                        Giá
                      </span>
                      <span>
                        <svg
                          viewBox="0 0 10 6"
                          className="shopee-svg-icon icon-arrow-down-small"
                        >
                          <path
                            d="M9.7503478 1.37413402L5.3649665 5.78112957c-.1947815.19574157-.511363.19651982-.7071046.00173827a.50153763.50153763 0 0 1-.0008702-.00086807L.2050664 1.33007451l.0007126-.00071253C.077901 1.18820749 0 1.0009341 0 .79546595 0 .35614224.3561422 0 .7954659 0c.2054682 0 .3927416.07790103.5338961.20577896l.0006632-.00066318.0226101.02261012a.80128317.80128317 0 0 1 .0105706.0105706l3.3619016 3.36190165c.1562097.15620972.4094757.15620972.5656855 0a.42598723.42598723 0 0 0 .0006944-.00069616L8.6678481.20650022l.0009529.0009482C8.8101657.07857935 8.9981733 0 9.2045341 0 9.6438578 0 10 .35614224 10 .79546595c0 .20495443-.077512.39180497-.2048207.53283641l.0003896.00038772-.0096728.00972053a.80044712.80044712 0 0 1-.0355483.03572341z"
                            fillRule="nonzero"
                          />
                        </svg>
                      </span>
                      <div />
                    </div>
                  </div>
                </div>
              </div>
              <div className="shopee-mini-page-controller">
                <div className="shopee-mini-page-controller__state">
                  <span className="shopee-mini-page-controller__current">
                    1
                  </span>
                  /
                  <span className="shopee-mini-page-controller__total">50</span>
                </div>
                <button
                  className="shopee-button-outline shopee-mini-page-controller__prev-btn shopee-button-outline--disabled"
                  disabled
                >
                  <svg
                    viewBox="0 0 7 11"
                    className="shopee-svg-icon icon-arrow-left-small"
                  >
                    <path
                      d="M4.694078 9.8185598L.2870824 5.4331785c-.1957415-.1947815-.1965198-.511363-.0017382-.7071046a.50867033.50867033 0 0 1 .000868-.0008702L4.7381375.2732784 4.73885.273991c.1411545-.127878.3284279-.205779.5338961-.205779.4393237 0 .7954659.3561422.7954659.7954659 0 .2054682-.077901.3927416-.205779.5338961l.0006632.0006632-.0226101.0226101a.80174653.80174653 0 0 1-.0105706.0105706L2.4680138 4.7933195c-.1562097.1562097-.1562097.4094757 0 .5656855a.45579485.45579485 0 0 0 .0006962.0006944l3.3930018 3.3763607-.0009482.0009529c.128869.1413647.2074484.3293723.2074484.5357331 0 .4393237-.3561422.7954659-.7954659.7954659-.2049545 0-.391805-.077512-.5328365-.2048207l-.0003877.0003896-.0097205-.0096728a.80042023.80042023 0 0 1-.0357234-.0355483z"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
                <button className="shopee-button-outline shopee-mini-page-controller__next-btn">
                  <svg
                    viewBox="0 0 7 11"
                    className="shopee-svg-icon icon-arrow-right-small"
                  >
                    <path
                      d="M2.305922 9.81856l4.4069956-4.385381c.1957415-.194782.1965198-.511364.0017382-.707105a.26384055.26384055 0 0 0-.000868-.00087L2.2618625.273278 2.26115.273991C2.1199955.146113 1.9327221.068212 1.7272539.068212c-.4393237 0-.7954659.356142-.7954659.795466 0 .205468.077901.392741.205779.533896l-.0006632.000663.0226101.02261c.0034906.003557.0070143.00708.0105706.010571L4.5319862 4.79332c.1562097.156209.1562097.409475 0 .565685-.0002318.000232-.0004639.000463-.0006962.000694L1.1382882 8.73606l.0009482.000953c-.128869.141365-.2074484.329372-.2074484.535733 0 .439324.3561422.795466.7954659.795466.2049545 0 .391805-.077512.5328365-.204821l.0003877.00039.0097205-.009673c.012278-.011471.0241922-.023327.0357234-.035548z"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="row shopee-search-item-result__items">
              {product &&
                product.map((item, index) => {
                  return (
                    <div key={index}
                      className="col-xs-2-4 shopee-search-item-result__item"
                      data-sqe="item"
                    >
                      <Link to={"/productdetail/" + item.id}>
                        <div className="tWpFe2">
                          <div className="VTjd7p whIxGK">
                            <div style={{ pointerEvents: "none" }}>
                              <div className="yvbeD6 KUUypF">
                                <img
                                  width="invalid-value"
                                  height="invalid-value"
                                  alt="Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton"
                                  className="_7DTxhh vc8g9F"
                                  style={{ objectFit: "contain" }}
                                  src={item.image}
                                />
                                <div className="aLgMTQ">
                                  <div
                                    className="YeGYFd sKFCYs"
                                    style={{ color: "rgb(242, 82, 32)" }}
                                  >
                                    <span className="ICOSOm">Yêu thích</span>
                                  </div>
                                </div>
                                <div className="GOgNtl">
                                  <div className="NTmuqd _3NQO+7 WVxeBE">
                                    <span className="percent">38%</span>
                                    <span className="Th6IF+">giảm</span>
                                  </div>
                                </div>
                                <div className="F7xq8U">
                                  <div className="Sh+UIZ" data-sqe="ad">
                                    Tài trợ
                                  </div>
                                </div>
                                <div className="IpGwg7">
                                  <div className="customized-overlay-image">
                                    <img
                                      src="https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8"
                                      width
                                      height
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="KMyn8J">
                              <div className="dpiR4u" data-sqe="name">
                                <div className="FDn--+">
                                  <div className="ie3A+n bM+7UW Cve6sh">
                                    {item.productName}
                                  </div>
                                </div>
                                <div className="FD2XVZ">
                                  <div
                                    className="INFECd"
                                    style={{ color: "rgb(255, 0, 32)" }}
                                  >
                                    #ShopDacBiet
                                  </div>
                                </div>
                              </div>
                              <div className="hpDKMN">
                                {/* <div className="vioxXd ZZuLsr d5DWld">₫200.000</div> */}
                                <div className="vioxXd rVLWG6">
                                  <span className="ZEgDH9">
                                    {new Intl.NumberFormat("de-DE", {
                                      style: "currency",
                                      currency: "VND",
                                    }).format(item.price)}
                                  </span>
                                </div>
                              </div>
                              <div className="ZnrnMl">
                                <div className="RS7p+X" data-sqe="rating">
                                  <div className="shopee-rating-stars">
                                    <div className="shopee-rating-stars__stars">
                                      <div className="shopee-rating-stars__star-wrapper">
                                        <div
                                          className="shopee-rating-stars__lit"
                                          style={{ width: "100%" }}
                                        >
                                          <svg
                                            enableBackground="new 0 0 15 15"
                                            viewBox="0 0 15 15"
                                            x={0}
                                            y={0}
                                            className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid"
                                          >
                                            <polygon
                                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeMiterlimit={10}
                                            />
                                          </svg>
                                        </div>
                                        <svg
                                          enableBackground="new 0 0 15 15"
                                          viewBox="0 0 15 15"
                                          x={0}
                                          y={0}
                                          className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid"
                                        >
                                          <polygon
                                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit={10}
                                          />
                                        </svg>
                                      </div>
                                      <div className="shopee-rating-stars__star-wrapper">
                                        <div
                                          className="shopee-rating-stars__lit"
                                          style={{ width: "100%" }}
                                        >
                                          <svg
                                            enableBackground="new 0 0 15 15"
                                            viewBox="0 0 15 15"
                                            x={0}
                                            y={0}
                                            className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid"
                                          >
                                            <polygon
                                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeMiterlimit={10}
                                            />
                                          </svg>
                                        </div>
                                        <svg
                                          enableBackground="new 0 0 15 15"
                                          viewBox="0 0 15 15"
                                          x={0}
                                          y={0}
                                          className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid"
                                        >
                                          <polygon
                                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit={10}
                                          />
                                        </svg>
                                      </div>
                                      <div className="shopee-rating-stars__star-wrapper">
                                        <div
                                          className="shopee-rating-stars__lit"
                                          style={{ width: "100%" }}
                                        >
                                          <svg
                                            enableBackground="new 0 0 15 15"
                                            viewBox="0 0 15 15"
                                            x={0}
                                            y={0}
                                            className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid"
                                          >
                                            <polygon
                                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeMiterlimit={10}
                                            />
                                          </svg>
                                        </div>
                                        <svg
                                          enableBackground="new 0 0 15 15"
                                          viewBox="0 0 15 15"
                                          x={0}
                                          y={0}
                                          className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid"
                                        >
                                          <polygon
                                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit={10}
                                          />
                                        </svg>
                                      </div>
                                      <div className="shopee-rating-stars__star-wrapper">
                                        <div
                                          className="shopee-rating-stars__lit"
                                          style={{ width: "100%" }}
                                        >
                                          <svg
                                            enableBackground="new 0 0 15 15"
                                            viewBox="0 0 15 15"
                                            x={0}
                                            y={0}
                                            className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid"
                                          >
                                            <polygon
                                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeMiterlimit={10}
                                            />
                                          </svg>
                                        </div>
                                        <svg
                                          enableBackground="new 0 0 15 15"
                                          viewBox="0 0 15 15"
                                          x={0}
                                          y={0}
                                          className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid"
                                        >
                                          <polygon
                                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit={10}
                                          />
                                        </svg>
                                      </div>
                                      <div className="shopee-rating-stars__star-wrapper">
                                        <div
                                          className="shopee-rating-stars__lit"
                                          style={{ width: "85.9053%" }}
                                        >
                                          <svg
                                            enableBackground="new 0 0 15 15"
                                            viewBox="0 0 15 15"
                                            x={0}
                                            y={0}
                                            className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid"
                                          >
                                            <polygon
                                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeMiterlimit={10}
                                            />
                                          </svg>
                                        </div>
                                        <svg
                                          enableBackground="new 0 0 15 15"
                                          viewBox="0 0 15 15"
                                          x={0}
                                          y={0}
                                          className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid"
                                        >
                                          <polygon
                                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit={10}
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="r6HknA uEPGHT">Đã bán 7,6k</div>
                              </div>
                              <div className="zGGwiV">TP. Hồ Chí Minh</div>
                            </div>
                            <div className="shopee-item-card__hover-footer _6o9eaa">
                              Tìm sản phẩm tương tự
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>

            <div className="_4jsMAm">
              <div className="shopee-page-controller">
                <button className="shopee-icon-button shopee-icon-button--left">
                  <svg
                    enableBackground="new 0 0 11 11"
                    viewBox="0 0 11 11"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-arrow-left"
                  >
                    <g>
                      <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z" />
                    </g>
                  </svg>
                </button>
                <button
                  className="shopee-button-solid shopee-button-solid--primary"
                  style={{ backgroundColor: "rgb(238, 77, 45)" }}
                >
                  1
                </button>
                <button className="shopee-button-no-outline">2</button>
                <button className="shopee-button-no-outline">3</button>
                <button className="shopee-button-no-outline">4</button>
                <button className="shopee-button-no-outline">5</button>
                <button className="shopee-button-no-outline shopee-button-no-outline--non-click">
                  ...
                </button>
                <button className="shopee-icon-button shopee-icon-button--right">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBySearch;
