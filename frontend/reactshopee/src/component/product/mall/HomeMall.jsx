import React, { Component } from "react";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import { Link } from "react-router-dom";
import ProductMall from "./product/ProductMall";

export class HomeMall extends Component {
  constructor() {
    super();
    this.state = {
      MallBannerArray: [],
    };
  }

  getData() {
    axios
      .get(AppUrl.AllBrand)
      .then((response) => {
        var data = response.data;
        this.setState({
          MallBannerArray: data,
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
    var MallBannerArray = this.state.MallBannerArray;
    var myview = MallBannerArray.map((brand, i) => {
      return (
        <>
          <div style={{ display: "flow-root", position: "relative" }}>
            <div className="Q9InHA">
              <div style={{ position: "relative" }}>
                <div className style={{ width: "100%", paddingTop: "23.33%" }}>
                  <div />
                </div>
                <picture className="M+Uc7+">
                  <img
                    data-is-lazy-load-bg-image="false"
                    data-use-image-server="false"
                    className="lazyload oY3YHw"
                    loading="lazy"
                    src={brand.banner}
                    alt=""
                    style={{
                      position: "absolute",
                      top: "0px",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </picture>
              </div>
              <a
                data-internal-hash="false"
                className="uOwQSQ"
                data-tracking='{"page_type":"mall","page_section":"image","target_type":"hotspot","data":{"md_component_id":1664181534826,"component_name":"BOTD1 28.9","section_location":5,"hotspot_id":1664181780298,"hotspot_type":"link","url":"https://shopee.vn/bayer_official"}}'
                href="/bayer_official"
                style={{
                  width: "100%",
                  height: "90.31%",
                  left: "0%",
                  top: "9.69%",
                }}
              />
            </div>
          </div>
          <div style={{ display: "flow-root", position: "relative" }}>
            <hr
              className="_2Xf3Tp"
              style={{
                height: "0.625rem",
                backgroundColor: "rgb(255, 255, 255)",
              }}
            />
          </div>
          <div
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              display: "flow-root",
              position: "relative",
            }}
          >
            <div>
              <div />
              <div />
              <div className="_0jHVZM">
                <div data-is-ssr-product-cards-container="true">
                  <div className="vrYJzf">
                    <div className="tW9S13">
                      <div
                        data-horizontal-scroll-container="true"
                        className="ApgGuy MRN7dX"
                      >
                        <div className="w+5rrL G4-Lxi">



                        <ProductMall BrandId = {brand.id}/>
                        
                        
                        
                        </div>
                      </div>
                    </div>
                    <div
                      data-is-carousel-nav-button="prev"
                      className="L8Cejv _5i8By8 ccUSs5"
                    >
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
                    <div
                      data-is-carousel-nav-button="next"
                      className="L8Cejv _5i8By8 MU-sNr"
                    >
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
                  </div>
                </div>
              </div>
              <div />
            </div>
          </div>
        </>
      );
    });
    return(
        <>  
         { myview }
        </>
    );
  }
}

export default HomeMall;
