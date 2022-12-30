import React, { Component } from "react";
import FooterMall from "../common/FooterMall";
import HeaderMall from "../common/HeaderMall";
import '../../assets/css/Mall.scss'
import Mall from "../product/mall/Mall";

class MallPage extends Component {
  render() {
    return (
      <div className="react_mall">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          width="16"
          height="16"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 2.75h3.713l4.065 14.453a.75.75 0 00.722.547H20a.75.75 0 00.721-.544l3-10.5A.75.75 0 0023 5.75H6.115L5.003 1.797 4.85 1.25H0v1.5zm9.068 13.5l-2.531-9h15.469l-2.572 9H9.068zM9.75 22a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm9 0a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
            fill="%23fff"
          />
        </svg>
        <HeaderMall />
        <div class="official-shop-page md-page">
          <Mall/>
          <FooterMall />
        </div>
      </div>
    );
  }
}

export default MallPage;
