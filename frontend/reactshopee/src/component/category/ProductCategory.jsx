import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppUrl from "../api/AppUrl";

export class ProductCategory extends Component {
  constructor() {
    super();
    this.state = {
      CategoryArray: [],
    };
  }

  getData() {
    axios
      .get(AppUrl.CategoryHeader)
      .then((reponse) => {
        var data = reponse.data;
        this.setState({
          CategoryArray: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    var CategoryArray = this.state.CategoryArray;
    var myview = CategoryArray.map((category, i) => {
      return (
        <Link to={'/productbycategory/'+category.id}>
            <div className="shopee-filter shopee-checkbox-filter">
            <div className="shopee-checkbox">
                <label className="shopee-checkbox__control">
                <input type="checkbox" name defaultValue={1} />
                <div className="shopee-checkbox__box">
                    <i> </i>
                </div>
                <span className="shopee-checkbox__label">
                    {category.categoryName}
                </span>
                </label>
            </div>
            </div>
        </Link>

      )
    })
    // console.log({myview})
    return (
      <>
        <div className="shopee-filter-group shopee-facet-filter">
          <div className="shopee-filter-group__header">Theo Danh Mục</div>
          <div className="folding-items shopeee-filter-group__body folding-items--folded">
            <div className="stardust-dropdown folding-items__toggle">
                {myview}
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
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductCategory
