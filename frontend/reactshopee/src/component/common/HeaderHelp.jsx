import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderHelp extends Component {
    render() {
        return (
            <div className="header___2FNvW">
              <div className="header_container___2zK7V" id="helpcenter-user-header">
                <div className="header___Bs7as">
                  <div className="nav_container___2mcpz">
                    <div className="brand_container___2nGle">
                      <div className="logo_container___2QjVH">
                        <div className="logo___1N0_a">
                          <Link to='/'>
                          <img src="https://fileproxy.scsusercontent.com/api/v2/files/Y3MtaW5ob3VzZTAx/d17cd77fdef440108589b235c9ecacce.png" alt="logo" />
                          </Link>
                        </div>
                        <div className="line___2E_I_" />
                        <div className="text___1oiI3">Trung tâm Hỗ trợ Shopee VN</div>
                      </div>
                      <div className="shopee_policy___2twlV">
                        <Link style={{color: '#ee4d2d'}} to='/rules'>

                        <span>Chính sách và Quy tắc của Shopee</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}

export default HeaderHelp