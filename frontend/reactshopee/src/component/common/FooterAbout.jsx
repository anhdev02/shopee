import React,{ Component } from "react";
import { Link } from "react-router-dom";
class FooterAbout extends Component {
    render() {
        return (

            <footer data-v-0194af21 className="footer">
              <div data-v-0194af21 className="body container">
                <section data-v-0194af21 className="content">
                  <div data-v-0194af21 className="link">
                    <img alt="" src="https://deo.shopeemobile.com/shopee/shopee-careers-live-vn/assets/img/shopee-logo.0ce43657.svg" className="logo" />
                    <div data-v-0194af21 className="link-group">
                      <div data-v-0194af21 className="group">
                        <div data-v-0194af21 className="label">Shopee Careers</div>
                        <div data-v-0194af21 className="item">
                          <Link style={{color: 'black'}} to='/'>
                            Trang chủ
                          </Link>
                        </div>
                        <div data-v-0194af21 className="item">
                          <Link style={{color: 'black'}} to='/about'>Về</Link>
                          </div>
                        <div data-v-0194af21 className="item">
                        <Link style={{color: 'black'}} to='/shopeewhy'>Tại sao bạn chọn Shopee</Link>
                        </div>
                        <div data-v-0194af21 className="item"><Link style={{color: 'black'}} to='/event'>Sự kiện</Link></div>
                        <div data-v-0194af21 className="item"><Link style={{color: 'black'}} to='/job'>Việc làm</Link></div>
                        <div data-v-0194af21 className="item"><Link style={{color: 'black'}} to='/student'>Sinh viên</Link></div>
                        <div data-v-0194af21 className="item"><Link style={{color: 'black'}} to='/tech'>công nghệ</Link></div>
                      </div>
                      <div data-v-0194af21 className="group">
                        <div data-v-0194af21 className="label">Xem thêm</div>
                        <a data-v-0194af21 href="https://www.seagroup.com/home" target="__blank" className="item">Sea</a><a data-v-0194af21 href="https://www.garena.sg/" target="__blank" className="item">Garena</a><a data-v-0194af21 href="https://www.seamoney.com/" target="__blank" className="item">SeaMoney</a>
                      </div>
                    </div>
                    <div data-v-0194af21 className="follow-wrapper">
                      <div data-v-0194af21 className="title">Theo dõi chúng tôi</div>
                      <span data-v-0194af21 className="link__social"><a href="https://www.linkedin.com/company/shopee/"><svg data-v-0194af21 className="svg-icon">
                            <use xlinkHref="#icon-linkedin-new" /></svg></a><a href="https://www.facebook.com/shopeecareers"><svg data-v-0194af21 className="svg-icon">
                            <use xlinkHref="#icon-facebook-new" /></svg></a><a href="https://www.instagram.com/lifeatshopee/"><svg data-v-0194af21 className="svg-icon">
                            <use xlinkHref="#icon-instagram-new" /></svg></a><a href="/blog"><svg data-v-0194af21 className="svg-icon">
                            <use xlinkHref="#icon-shopee-blog-new" /></svg></a><a  href="https://youtube.com/playlist?list=PLw-SfklDWGE0ca8OWL4eP-asvDaUEiDlB"><svg data-v-0194af21 className="svg-icon">
                            <use xlinkHref="#icon-youtube-new" /></svg></a></span>
                      <div data-v-0194af21 className="title" style={{margin: '24px 0px 16px'}}>
                        Theo dõi Newsletter của chúng tôi để luôn được cập nhật về
                        Shopee
                      </div>
                      <div data-v-0194af21>
                        <button data-v-0194af21 className="subscribe">Đăng ký</button>
                      </div>
                    </div>
                  </div>
                </section>
                <p data-v-0194af21 className="copyright">
                  <span data-v-0194af21>Copyright © 2022 Shopee. Trademarks belong to their respective
                    owners. All rights reserved.</span><a data-v-0194af21 href="/terms-of-service" className="text-link" target="_blank">Điều khoản sử dụng</a><a data-v-0194af21 href="/privacy-policy" className="text-link" target="_blank">
                    Chính sách bảo mật</a>
                </p>
              </div>
            </footer>
          );
    }
}

export default FooterAbout