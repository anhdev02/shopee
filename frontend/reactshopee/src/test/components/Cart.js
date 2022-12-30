import React, { Component } from "react";
import { Link } from "react-router-dom";
import {store} from '../../store/store';
import { UpdateCart, DeleteCart, IncreaseQuantity, DecreaseQuantity } from '../../store/action/cart'

export class Cart extends Component {
    render() {
      var {childrent} = this.props
      let totalPriceSum = 0, totalItem = 0;
          // totalItem = totalItem + parseInt(product.quantity)
          // totalPriceSum = totalPriceSum + product.unit_price*product.quantity;
        return (
            <div className="_2cw-HH">
              <div>
                <div className="cart-page-header-wrapper container-wrapper">
                  <div className="container">
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <div className="cart-page-header">
                        <a className="cart-page-logo" href="/"><div />
                          <svg viewBox="0 0 192 65" className="shopee-svg-icon icon-shopee-logo">
                            <g fillRule="evenodd">
                              <path d="M35.6717403 44.953764c-.3333497 2.7510509-2.0003116 4.9543414-4.5823845 6.0575984-1.4379707.6145919-3.36871.9463856-4.896954.8421628-2.3840266-.0911143-4.6237865-.6708937-6.6883352-1.7307424-.7375522-.3788551-1.8370513-1.1352759-2.6813095-1.8437757-.213839-.1790053-.239235-.2937577-.0977428-.4944671.0764015-.1151823.2172535-.3229831.5286218-.7791994.45158-.6616533.5079208-.7446018.5587128-.8221779.14448-.2217688.3792333-.2411091.6107855-.0588804.0243289.0189105.0243289.0189105.0426824.0333083.0379873.0294402.0379873.0294402.1276204.0990653.0907002.0706996.14448.1123887.166248.1287205 2.2265285 1.7438508 4.8196989 2.7495466 7.4376251 2.8501162 3.6423042-.0496401 6.2615109-1.6873341 6.7308041-4.2020035.5160305-2.7675977-1.6565047-5.1582742-5.9070334-6.4908212-1.329344-.4166762-4.6895175-1.7616869-5.3090528-2.1250697-2.9094471-1.7071043-4.2697358-3.9430584-4.0763845-6.7048539.296216-3.8283059 3.8501677-6.6835796 8.340785-6.702705 2.0082079-.004083 4.0121475.4132378 5.937338 1.2244562.6816382.2873109 1.8987274.9496089 2.3189359 1.2633517.2420093.1777159.2898136.384872.1510957.60836-.0774686.12958-.2055158.3350171-.4754821.7632974l-.0029878.0047276c-.3553311.5640922-.3664286.5817134-.447952.7136572-.140852.2144625-.3064598.2344475-.5604202.0732783-2.0600669-1.3839063-4.3437898-2.0801572-6.8554368-2.130442-3.126914.061889-5.4706057 1.9228561-5.6246892 4.4579402-.0409751 2.2896772 1.676352 3.9613243 5.3858811 5.2358503 7.529819 2.4196871 10.4113092 5.25648 9.869029 9.7292478M26.3725216 5.42669372c4.9022893 0 8.8982174 4.65220288 9.0851664 10.47578358H17.2875686c.186949-5.8235807 4.1828771-10.47578358 9.084953-10.47578358m25.370857 11.57065968c0-.6047069-.4870064-1.0948761-1.0875481-1.0948761h-11.77736c-.28896-7.68927544-5.7774923-13.82058185-12.5059489-13.82058185-6.7282432 0-12.2167755 6.13130641-12.5057355 13.82058185l-11.79421958.0002149c-.59136492.0107446-1.06748731.4968309-1.06748731 1.0946612 0 .0285807.00106706.0569465.00320118.0848825H.99995732l1.6812605 37.0613963c.00021341.1031483.00405483.2071562.01173767.3118087.00170729.0236381.003628.0470614.00554871.0704847l.00362801.0782207.00405483.004083c.25545428 2.5789222 2.12707837 4.6560709 4.67201764 4.7519129l.00576212.0055872h37.4122078c.0177132.0002149.0354264.0004298.0531396.0004298.0177132 0 .0354264-.0002149.0531396-.0004298h.0796027l.0017073-.0015043c2.589329-.0706995 4.6867431-2.1768587 4.9082648-4.787585l.0012805-.0012893.0017073-.0350275c.0021341-.0275062.0040548-.0547975.0057621-.0823037.0040548-.065757.0068292-.1312992.0078963-.1964115l1.8344904-37.207738h-.0012805c.001067-.0186956.0014939-.0376062.0014939-.0565167M176.465457 41.1518926c.720839-2.3512494 2.900423-3.9186779 5.443734-3.9186779 2.427686 0 4.739107 1.6486899 5.537598 3.9141989l.054826.1556978h-11.082664l.046506-.1512188zm13.50267 3.4063683c.014933.0006399.014933.0006399.036906.0008531.021973-.0002132.021973-.0002132.044372-.0008531.53055-.0243144.950595-.4766911.950595-1.0271786 0-.0266606-.000853-.0496953-.00256-.0865936.000427-.0068251.000427-.020262.000427-.0635588 0-5.1926268-4.070748-9.4007319-9.09145-9.4007319-5.020488 0-9.091235 4.2081051-9.091235 9.4007319 0 .3871116.022399.7731567.067838 1.1568557l.00256.0204753.01408.1013102c.250022 1.8683731 1.047233 3.5831812 2.306302 4.9708108-.00064-.0006399.00064.0006399.007253.0078915 1.396026 1.536289 3.291455 2.5833031 5.393601 2.9748936l.02752.0053321v-.0027727l.13653.0228215c.070186.0119439.144211.0236746.243409.039031 2.766879.332724 5.221231-.0661182 7.299484-1.1127057.511777-.2578611.971928-.5423827 1.37064-.8429007.128211-.0968312.243622-.1904632.34346-.2781231.051412-.0452164.092372-.083181.114131-.1051493.468898-.4830897.498124-.6543572.215249-1.0954297-.31146-.4956734-.586228-.9179769-.821744-1.2675504-.082345-.1224254-.154023-.2267215-.214396-.3133151-.033279-.0475624-.033279-.0475624-.054399-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.00256-.0038391c-.256208-.3188605-.431565-.3480805-.715933-.0970445-.030292.0268739-.131624.1051493-.14997.1245582-1.999321 1.775381-4.729508 2.3465571-7.455854 1.7760208-.507724-.1362888-.982595-.3094759-1.419919-.5184948-1.708127-.8565509-2.918343-2.3826022-3.267563-4.1490253l-.02752-.1394881h13.754612zM154.831964 41.1518926c.720831-2.3512494 2.900389-3.9186779 5.44367-3.9186779 2.427657 0 4.739052 1.6486899 5.537747 3.9141989l.054612.1556978h-11.082534l.046505-.1512188zm13.502512 3.4063683c.015146.0006399.015146.0006399.037118.0008531.02176-.0002132.02176-.0002132.044159-.0008531.530543-.0243144.950584-.4766911.950584-1.0271786 0-.0266606-.000854-.0496953-.00256-.0865936.000426-.0068251.000426-.020262.000426-.0635588 0-5.1926268-4.070699-9.4007319-9.091342-9.4007319-5.020217 0-9.091343 4.2081051-9.091343 9.4007319 0 .3871116.022826.7731567.068051 1.1568557l.00256.0204753.01408.1013102c.250019 1.8683731 1.04722 3.5831812 2.306274 4.9708108-.00064-.0006399.00064.0006399.007254.0078915 1.396009 1.536289 3.291417 2.5833031 5.393538 2.9748936l.027519.0053321v-.0027727l.136529.0228215c.070184.0119439.144209.0236746.243619.039031 2.766847.332724 5.22117-.0661182 7.299185-1.1127057.511771-.2578611.971917-.5423827 1.370624-.8429007.128209-.0968312.243619-.1904632.343456-.2781231.051412-.0452164.09237-.083181.11413-.1051493.468892-.4830897.498118-.6543572.215246-1.0954297-.311457-.4956734-.586221-.9179769-.821734-1.2675504-.082344-.1224254-.154022-.2267215-.21418-.3133151-.033492-.0475624-.033492-.0475624-.054612-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.002346-.0038391c-.256419-.3188605-.431774-.3480805-.716138-.0970445-.030292.0268739-.131623.1051493-.149969.1245582-1.999084 1.775381-4.729452 2.3465571-7.455767 1.7760208-.507717-.1362888-.982582-.3094759-1.419902-.5184948-1.708107-.8565509-2.918095-2.3826022-3.267311-4.1490253l-.027733-.1394881h13.754451zM138.32144123 49.7357905c-3.38129629 0-6.14681004-2.6808521-6.23169343-6.04042014v-.31621743c.08401943-3.35418649 2.85039714-6.03546919 6.23169343-6.03546919 3.44242097 0 6.23320537 2.7740599 6.23320537 6.1960534 0 3.42199346-2.7907844 6.19605336-6.23320537 6.19605336m.00172791-15.67913203c-2.21776751 0-4.33682838.7553485-6.03989586 2.140764l-.19352548.1573553V34.6208558c0-.4623792-.0993546-.56419733-.56740117-.56419733h-2.17651376c-.47409424 0-.56761716.09428403-.56761716.56419733v27.6400724c0 .4539841.10583425.5641973.56761716.5641973h2.17651376c.46351081 0 .56740117-.1078454.56740117-.5641973V50.734168l.19352548.1573553c1.70328347 1.3856307 3.82234434 2.1409792 6.03989586 2.1409792 5.27140956 0 9.54473746-4.2479474 9.54473746-9.48802964 0-5.239867-4.2733279-9.48781439-9.54473746-9.48781439M115.907646 49.5240292c-3.449458 0-6.245805-2.7496948-6.245805-6.1425854 0-3.3928907 2.79656-6.1427988 6.245805-6.1427988 3.448821 0 6.24538 2.7499081 6.24538 6.1427988 0 3.3926772-2.796346 6.1425854-6.24538 6.1425854m.001914-15.5438312c-5.28187 0-9.563025 4.2112903-9.563025 9.4059406 0 5.1944369 4.281155 9.4059406 9.563025 9.4059406 5.281657 0 9.562387-4.2115037 9.562387-9.4059406 0-5.1946503-4.280517-9.4059406-9.562387-9.4059406M94.5919049 34.1890939c-1.9281307 0-3.7938902.6198995-5.3417715 1.7656047l-.188189.1393105V23.2574169c0-.4254677-.1395825-.5643476-.5649971-.5643476h-2.2782698c-.4600414 0-.5652122.1100273-.5652122.5643476v29.2834155c0 .443339.1135587.5647782.5652122.5647782h2.2782698c.4226187 0 .5649971-.1457701.5649971-.5647782v-9.5648406c.023658-3.011002 2.4931278-5.4412923 5.5299605-5.4412923 3.0445753 0 5.516841 2.4421328 5.5297454 5.4630394v9.5430935c0 .4844647.0806524.5645628.5652122.5645628h2.2726775c.481764 0 .565212-.0824666.565212-.5645628v-9.5710848c-.018066-4.8280677-4.0440197-8.7806537-8.9328471-8.7806537M62.8459442 47.7938061l-.0053397.0081519c-.3248668.4921188-.4609221.6991347-.5369593.8179812-.2560916.3812097-.224267.551113.1668119.8816949.91266.7358184 2.0858968 1.508535 2.8774525 1.8955369 2.2023021 1.076912 4.5810275 1.646045 7.1017886 1.6975309 1.6283921.0821628 3.6734936-.3050536 5.1963734-.9842376 2.7569891-1.2298679 4.5131066-3.6269626 4.8208863-6.5794607.4985136-4.7841067-2.6143125-7.7747902-10.6321784-10.1849709l-.0021359-.0006435c-3.7356476-1.2047686-5.4904836-2.8064071-5.4911243-5.0426086.1099976-2.4715346 2.4015793-4.3179454 5.4932602-4.4331449 2.4904317.0062212 4.6923065.6675996 6.8557356 2.0598624.4562232.2767364.666607.2256796.9733188-.172263.035242-.0587797.1332787-.2012238.543367-.790093l.0012815-.0019308c.3829626-.5500403.5089793-.7336731.5403767-.7879478.258441-.4863266.2214903-.6738208-.244985-1.0046173-.459427-.3290803-1.7535544-1.0024722-2.4936356-1.2978721-2.0583439-.8211991-4.1863175-1.2199998-6.3042524-1.1788111-4.8198184.1046878-8.578747 3.2393171-8.8265087 7.3515337-.1572005 2.9703036 1.350301 5.3588174 4.5000778 7.124567.8829712.4661613 4.1115618 1.6865902 5.6184225 2.1278667 4.2847814 1.2547527 6.5186944 3.5630343 6.0571315 6.2864205-.4192725 2.4743234-3.0117991 4.1199394-6.6498372 4.2325647-2.6382344-.0549182-5.2963324-1.0217793-7.6043603-2.7562084-.0115337-.0083664-.0700567-.0519149-.1779185-.1323615-.1516472-.1130543-.1516472-.1130543-.1742875-.1300017-.4705335-.3247898-.7473431-.2977598-1.0346184.1302162-.0346012.0529875-.3919333.5963776-.5681431.8632459" />
                            </g>
                          </svg>
                          <div className="cart-page-logo__page-name">Giỏ hàng</div></a>
                      </div>
                      <div className="cart-page-searchbar">
                        <div className="shopee-searchbar" role="combobox" aria-expanded="false" aria-owns="shopee-searchbar-listbox">
                          <div className="shopee-searchbar__main">
                            <form role="search" className="shopee-searchbar-input" autoComplete="off">
                              <input aria-label="10.10 SĂN MÃ FREESHIP 0Đ" className="shopee-searchbar-input__input" maxLength={128} placeholder="10.10 SĂN MÃ FREESHIP 0Đ" autoComplete="off" aria-autocomplete="list" aria-controls="shopee-searchbar-listbox" defaultValue />
                            </form>
                          </div>
                          <button type="button" className="btn btn-solid-primary btn--s btn--inline shopee-searchbar__search-button">
                            <svg height={19} viewBox="0 0 19 19" width={19} className="shopee-svg-icon">
                              <g fillRule="evenodd" stroke="none" strokeWidth={1}>
                                <g transform="translate(-1016 -32)">
                                  <g>
                                    <g transform="translate(405 21)">
                                      <g transform="translate(611 11)">
                                        <path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z" />
                                        <path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z" />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tracking-impression-placeholder" style={{position: 'fixed', zIndex: 99999, bottom: '0px', left: '0px'}} />
                <div className="container">
                  <div role="main" className="_1nft6V" style={{marginBottom: '0px'}}>
                    <div className="_2cf99j">
                      <svg height={12} viewBox="0 0 20 12" width={20} className="shopee-svg-icon _1NxVa_ icon-free-shipping">
                        <g fill="none" fillRule="evenodd" transform>
                          <rect fill="#00bfa5" fillRule="evenodd" height={9} rx={1} width={12} x={4} />
                          <rect height={8} rx={1} stroke="#00bfa5" width={11} x="4.5" y=".5" />
                          <rect fill="#00bfa5" fillRule="evenodd" height={7} rx={1} width={7} x={13} y={2} />
                          <rect height={6} rx={1} stroke="#00bfa5" width={6} x="13.5" y="2.5" />
                          <circle cx={8} cy={10} fill="#00bfa5" r={2} />
                          <circle cx={15} cy={10} fill="#00bfa5" r={2} />
                          <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff" />
                          <path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5" />
                          <path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5" />
                          <circle cx={8} cy={10} fill="#047565" r={1} />
                          <circle cx={15} cy={10} fill="#047565" r={1} />
                        </g></svg><span className="_1Xcrmf">Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí
                        vận chuyển bạn nhé!</span>
                    </div>
                    <div className="_1nrPtQ">
                      <div className="_1zPSKE">
                        <label className="stardust-checkbox"><input className="stardust-checkbox__input" type="checkbox" />
                          <div className="stardust-checkbox__box" /></label>
                      </div>
                      <div className="_27GGo9">Sản Phẩm</div>
                      <div className="_3hJbyz">Đơn Giá</div>
                      <div className="_155Uu2">Số Lượng</div>
                      <div className="_10ZkNr">Số Tiền</div>
                      <div className="_1coJFb">Thao Tác</div>
                    </div>
                    <div className="aCSbhb">



                     {childrent}



                    </div>
                  </div>
                  <div className="_2jol0L _3GVi82">
                    <div className="_2gJN5P _1vM5hW">
                      <svg fill="none" viewBox="0 -2 23 22" className="shopee-svg-icon icon-voucher-line">
                        <g filter="url(#voucher-filter0_d)">
                          <mask id="a" fill="#fff">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z" />
                          </mask>
                          <path d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z" mask="url(#a)" />
                        </g>
                        <path clipRule="evenodd" d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z" />
                        <defs>
                          <filter id="voucher-filter0_d" x={0} y={1} width={20} height={16} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset />
                            <feGaussianBlur stdDeviation=".5" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                          </filter>
                        </defs>
                      </svg>
                      <div className="_2YRnUZ">Shopee Voucher</div>
                      <div className="_4WXRJn" />
                      <span className="_3fKJp8">Chọn hoặc nhập mã</span>
                    </div>
                    <div className="_1ri0rT _3c0xgj" />
                    <div className="_1ri0rT _2amAdj" />
                    <div className="W2HjBQ zzOmij">
                      <div className="_1E2dyV">
                        <label className="stardust-checkbox"><input className="stardust-checkbox__input" type="checkbox" />
                          <div className="stardust-checkbox__box" /></label>
                      </div>
                      <button className="_28e55C clear-btn-style">
                        Chọn Tất Cả (3)</button><button className="clear-btn-style j9RJQY">Xóa</button>
                      <div className />
                      <button className="clear-btn-style _2mPWt7">
                        Lưu vào mục Đã thích
                      </button>
                      <div className="_2ntEgZ" />
                      <div className="stardust-popover" id="stardust-popover1" tabIndex={0}>
                        <div role="button" className="stardust-popover__target">
                          <div className="_2BT_es">
                            <div className="_3BPMNN">
                              <div className="_2LMWss">
                                <div className="_10A7e2">
                                  Tổng thanh toán ({totalItem} Sản phẩm):
                                </div>
                                <div className="nBHs8H">₫{totalPriceSum}</div>
                              </div>
                              <div className="qsL6JH">
                                <svg viewBox="0 0 12 12" fill="none" width={12} height={12} color="rgba(0, 0, 0, 0.54)">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M6 4L.854 9.146.146 8.44l5.147-5.146a1 1 0 011.414 0l5.147 5.146-.707.707L6 4z" fill="currentColor" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link to='/pay'>
                        <button className="shopee-button-solid shopee-button-solid--primary">
                          <span className="kcsswk">Mua hàng</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="_14jjyT">
                    <div style={{display: 'contents'}}>
                      <div className="shopee-header-section shopee-header-section--simple">
                        <div className="shopee-header-section__header">
                          <div className="shopee-header-section__header__title">
                            <div>Có thể bạn cũng thích</div>
                          </div>
                          <a className="shopee-header-section__header-link" tabIndex={-1} href="/cart/recommend?timestamp=1664414629099"><button className="shopee-button-no-outline">
                              Xem tất cả&nbsp;<svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="shopee-svg-icon icon-arrow-right">
                                <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                              </svg></button></a>
                        </div>
                        <div className="shopee-header-section__content" />
                      </div>
                      <div className="ED6Nfy row">
                        <div className="F5GEoY col-xs-2">
                          <a data-sqe="link" href="/áo-khoác-dài-cổ-Vest-form-rộng-chất-Flannel-cao-cấp-áo-khoác-măng-tô-phong-cách-Hàn-Quốc-2-lớp-Blazer-dài-i.187103490.18141125374?sp_atk=58ec3947-93be-4d4d-853b-ef88c0305ab3&xptdk=58ec3947-93be-4d4d-853b-ef88c0305ab3"><div className="MHQUWx">
                              <div className="e+W1+o">
                                <div style={{pointerEvents: 'none'}}>
                                  <div className="_6WqAAN kSGaAZ">
                                    <img width="invalid-value" height="invalid-value" alt="áo khoác dài cổ Vest, form rộng, chất Flannel cao cấp - áo khoác măng tô phong cách Hàn Quốc 2 lớp, Blazer dài" className="A2biD6 pH6OHR" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/3b88d6c8e65079c9a438386abafe5941_tn" />
                                    <div className="-mCRW0">
                                      <div className="CGWoC0 _7JfmM3" style={{color: 'rgb(242, 82, 32)'}}>
                                        <span className="jKw-Wu">Yêu thích</span>
                                      </div>
                                    </div>
                                    <div className="_20CHwO">
                                      <div className="_5KXYyu r5IeUK DGPJIB">
                                        <span className="percent">48%</span><span className="bzhmIc">giảm</span>
                                      </div>
                                    </div>
                                    <div className="_1q4RI2">
                                      <div className="customized-overlay-image">
                                        <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="phaD5a">
                                  <div className="C2cLca">
                                    <div className="_7qeYIT">
                                      <div className="xu+II7 xIpsKK">
                                        áo khoác dài cổ Vest, form rộng, chất
                                        Flannel cao cấp - áo khoác măng tô phong
                                        cách Hàn Quốc 2 lớp, Blazer dài
                                      </div>
                                    </div>
                                    <div className="YWPF+E">
                                      <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                        <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                        </svg>
                                        <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246, 145, 19)'}}>
                                          80% Giảm
                                        </div>
                                        <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                        </svg>
                                      </div>
                                      <div className="_5-fR0D" style={{color: 'rgb(255, 0, 32)'}}>
                                        #ShopDacBiet
                                      </div>
                                    </div>
                                  </div>
                                  <div className="JLn02i +5sWQF">
                                    <div className="_8pWXgw QH4xqG">
                                      <span className="PBXD50">₫</span><span className="_0pAnxm">279.000</span>
                                    </div>
                                    <div className="Xpegl0 EPTziP">Đã bán 116</div>
                                  </div>
                                </div>
                              </div>
                            </div></a>
                        </div>
                        <div className="F5GEoY col-xs-2">
                          <a data-sqe="link" href="/Giày-da-mũi-tròn-phong-cách-Nhật-Bản-thời-trang-cho-nam-giày-nâng-chiều-cao-nam-2022-hot-trend-i.492870257.21312541858?sp_atk=5a08d4be-3a58-47fa-bb02-f1dbe7de2f7c&xptdk=5a08d4be-3a58-47fa-bb02-f1dbe7de2f7c"><div className="MHQUWx">
                              <div className="e+W1+o">
                                <div style={{pointerEvents: 'none'}}>
                                  <div className="_6WqAAN kSGaAZ">
                                    <img width="invalid-value" height="invalid-value" alt="Giày da mũi tròn phong cách Nhật Bản thời trang cho nam giày nâng chiều cao nam 2022 hot trend" className="A2biD6 pH6OHR" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/f1d1a615ee660083a64a03a4c48af507_tn" />
                                  </div>
                                </div>
                                <div className="phaD5a">
                                  <div className="C2cLca">
                                    <div className="_7qeYIT">
                                      <div className="xu+II7 xIpsKK">
                                        Giày da mũi tròn phong cách Nhật Bản thời
                                        trang cho nam giày nâng chiều cao nam 2022
                                        hot trend
                                      </div>
                                    </div>
                                  </div>
                                  <div className="JLn02i +5sWQF">
                                    <div className="_8pWXgw QH4xqG">
                                      <span className="PBXD50">₫</span><span className="_0pAnxm">4.000</span>
                                    </div>
                                    <div className="Xpegl0 EPTziP">Đã bán 2,2k</div>
                                  </div>
                                </div>
                              </div>
                            </div></a>
                        </div>
                        <div className="F5GEoY col-xs-2">
                          <a data-sqe="link" href="/Áo-khoác-dạ-dáng-dài-măng-tô-nam-form-rộng-AKD15-M.RO-phong-cách-Hàn-Quốc-BST-thu-đông-2022-Mrhero-i.115901754.19643153162?sp_atk=0a46e4b7-d22f-4887-945d-cfda6edae60b&xptdk=0a46e4b7-d22f-4887-945d-cfda6edae60b"><div className="MHQUWx">
                              <div className="e+W1+o">
                                <div style={{pointerEvents: 'none'}}>
                                  <div className="_6WqAAN kSGaAZ">
                                    <img width="invalid-value" height="invalid-value" alt="Áo khoác dạ  dáng dài măng tô nam form rộng AKD15 M.RO phong cách Hàn Quốc BST thu đông 2022 Mrhero" className="A2biD6 pH6OHR" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/6ee4aa96e06eb95c7d785f2d5afaba2d_tn" />
                                    <div className="-mCRW0">
                                      <div className="CGWoC0 _4mVCV1" style={{color: 'rgb(208, 1, 27)'}}>
                                        <div className="NaRCBr" />
                                      </div>
                                    </div>
                                    <div className="_20CHwO">
                                      <div className="_5KXYyu r5IeUK DGPJIB">
                                        <span className="percent">17%</span><span className="bzhmIc">giảm</span>
                                      </div>
                                    </div>
                                    <div className="_1q4RI2">
                                      <div className="customized-overlay-image">
                                        <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="phaD5a">
                                  <div className="C2cLca">
                                    <div className="_7qeYIT">
                                      <div className="xu+II7 xIpsKK">
                                        Áo khoác dạ dáng dài măng tô nam form rộng
                                        AKD15 M.RO phong cách Hàn Quốc BST thu
                                        đông 2022 Mrhero
                                      </div>
                                    </div>
                                    <div className="YWPF+E">
                                      <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                        <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                        </svg>
                                        <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246, 145, 19)'}}>
                                          10% Giảm
                                        </div>
                                        <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                        </svg>
                                      </div>
                                      <div className="_5-fR0D" style={{color: 'rgb(255, 0, 32)'}}>
                                        #ShopDacBiet
                                      </div>
                                    </div>
                                  </div>
                                  <div className="JLn02i +5sWQF">
                                    <div className="_8pWXgw QH4xqG">
                                      <span className="PBXD50">₫</span><span className="_0pAnxm">109.000</span>
                                    </div>
                                    <div className="Xpegl0 EPTziP">Đã bán 111</div>
                                  </div>
                                </div>
                              </div>
                            </div></a>
                        </div>
                        <div className="F5GEoY col-xs-2">
                          <a data-sqe="link" href="/áo-khoác-dài-cổ-Vest-form-rộng-chất-Flannel-cao-cấp-áo-khoác-măng-tô-phong-cách-Hàn-Quốc-2-lớp-Blazer-dài-i.52682650.12996239405?sp_atk=59a374a4-8702-41d4-a6b2-ae64c70f8398&xptdk=59a374a4-8702-41d4-a6b2-ae64c70f8398"><div className="MHQUWx">
                              <div className="e+W1+o">
                                <div style={{pointerEvents: 'none'}}>
                                  <div className="_6WqAAN kSGaAZ">
                                    <img width="invalid-value" height="invalid-value" alt="áo khoác dài cổ Vest, form rộng, chất Flannel cao cấp - áo khoác măng tô phong cách Hàn Quốc 2 lớp, Blazer dài" className="A2biD6 pH6OHR" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/3b88d6c8e65079c9a438386abafe5941_tn" />
                                    <div className="-mCRW0">
                                      <div className="CGWoC0 LUMhyI" style={{color: 'rgb(242, 82, 32)'}}>
                                        <div className="q8e9m0 QggwUo" />
                                      </div>
                                    </div>
                                    <div className="_20CHwO">
                                      <div className="_5KXYyu r5IeUK DGPJIB">
                                        <span className="percent">48%</span><span className="bzhmIc">giảm</span>
                                      </div>
                                    </div>
                                    <div className="HNz4RL">
                                      <div className="Qr-Y+A" data-sqe="ad">
                                        Tài trợ
                                      </div>
                                    </div>
                                    <div className="_1q4RI2">
                                      <div className="customized-overlay-image">
                                        <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="phaD5a">
                                  <div className="C2cLca">
                                    <div className="_7qeYIT">
                                      <div className="xu+II7 xIpsKK">
                                        áo khoác dài cổ Vest, form rộng, chất
                                        Flannel cao cấp - áo khoác măng tô phong
                                        cách Hàn Quốc 2 lớp, Blazer dài
                                      </div>
                                    </div>
                                    <div className="YWPF+E">
                                      <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                        <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                        </svg>
                                        <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246, 145, 19)'}}>
                                          80% Giảm
                                        </div>
                                        <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                        </svg>
                                      </div>
                                      <div className="_5-fR0D" style={{color: 'rgb(255, 0, 32)'}}>
                                        #ShopDacBiet
                                      </div>
                                    </div>
                                  </div>
                                  <div className="JLn02i +5sWQF">
                                    <div className="_8pWXgw QH4xqG">
                                      <span className="PBXD50">₫</span><span className="_0pAnxm">279.000</span>
                                    </div>
                                    <div className="Xpegl0 EPTziP">Đã bán 152</div>
                                  </div>
                                </div>
                              </div>
                            </div></a>
                        </div>
                        <div className="F5GEoY col-xs-2">
                          <a data-sqe="link" href="/Áo-sơ-mi-nam-chất-lIệu-vải-nhung-tăm-mềm-mịn-dày-dặn-không-bai-xù-phong-cách-trẻ-trung-năng-động-A09-i.640741320.10486675366?sp_atk=b63d0896-f935-4495-b2b1-fee4cd5ead81&xptdk=b63d0896-f935-4495-b2b1-fee4cd5ead81"><div className="MHQUWx">
                              <div className="e+W1+o">
                                <div style={{pointerEvents: 'none'}}>
                                  <div className="_6WqAAN kSGaAZ">
                                    <img width="invalid-value" height="invalid-value" alt="Áo sơ mi nam chất lIệu vải nhung tăm mềm mịn dày dặn không bai xù, phong cách trẻ trung năng động A09" className="A2biD6 pH6OHR" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/123450f21815488a2f780db9ff37079d_tn" />
                                    <div className="_20CHwO">
                                      <div className="_5KXYyu r5IeUK DGPJIB">
                                        <span className="percent">27%</span><span className="bzhmIc">giảm</span>
                                      </div>
                                    </div>
                                    <div className="_1q4RI2">
                                      <div className="customized-overlay-image">
                                        <img src="https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f" width height />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="phaD5a">
                                  <div className="C2cLca">
                                    <div className="_7qeYIT">
                                      <div className="xu+II7 xIpsKK">
                                        Áo sơ mi nam chất lIệu vải nhung tăm mềm
                                        mịn dày dặn không bai xù, phong cách trẻ
                                        trung năng động A09
                                      </div>
                                    </div>
                                  </div>
                                  <div className="JLn02i +5sWQF">
                                    <div className="_8pWXgw QH4xqG">
                                      <span className="PBXD50">₫</span><span className="_0pAnxm">115.000</span>
                                    </div>
                                    <div className="Xpegl0 EPTziP">Đã bán 5,6k</div>
                                  </div>
                                </div>
                              </div>
                            </div></a>
                        </div>
                        <div className="F5GEoY col-xs-2">
                          <a data-sqe="link" href="/Giày-da-mũi-tròn-phong-cách-Nhật-Bản-thời-trang-cho-nam-giày-nâng-chiều-cao-nam-2022-i.498264212.17976866656?sp_atk=dbe02f80-8d48-412a-b4ff-686b16c101a7&xptdk=dbe02f80-8d48-412a-b4ff-686b16c101a7"><div className="MHQUWx">
                              <div className="e+W1+o">
                                <div style={{pointerEvents: 'none'}}>
                                  <div className="_6WqAAN kSGaAZ">
                                    <img width="invalid-value" height="invalid-value" alt="Giày da mũi tròn phong cách Nhật Bản thời trang cho nam giày nâng chiều cao nam 2022" className="A2biD6 pH6OHR" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/84cfa435eab45697faf8a25de3846b3d_tn" />
                                  </div>
                                </div>
                                <div className="phaD5a">
                                  <div className="C2cLca">
                                    <div className="_7qeYIT">
                                      <div className="xu+II7 xIpsKK">
                                        Giày da mũi tròn phong cách Nhật Bản thời
                                        trang cho nam giày nâng chiều cao nam 2022
                                      </div>
                                    </div>
                                    <div className="YWPF+E">
                                      <div className="_5-fR0D" style={{color: 'rgb(255, 0, 32)'}}>
                                        #ShopDacBiet
                                      </div>
                                    </div>
                                  </div>
                                  <div className="JLn02i +5sWQF">
                                    <div className="_8pWXgw QH4xqG">
                                      <span className="PBXD50">₫</span><span className="_0pAnxm">7.777</span>
                                    </div>
                                    <div className="Xpegl0 EPTziP">Đã bán 5,2k</div>
                                  </div>
                                </div>
                              </div>
                            </div></a>
                        </div>
                        <div className="F5GEoY col-xs-2">
                          <a data-sqe="link" href="/Áo-khoác-Blazer-Nam-Form-rộng-dài-tay-unisex-basic-chất-Flannel-Hàn-cao-cấp-hợp-mọi-thời-đại-phong-cách-Hàn-Quốc-Vest-i.777607262.20435721399?sp_atk=173a955c-1e79-4788-91b3-ac04a767e94f&xptdk=173a955c-1e79-4788-91b3-ac04a767e94f"><div className="MHQUWx">
                              <div className="e+W1+o">
                                <div style={{pointerEvents: 'none'}}>
                                  <div className="_6WqAAN kSGaAZ">
                                    <img width="invalid-value" height="invalid-value" alt="Áo khoác Blazer Nam Form rộng dài tay unisex basic chất Flannel Hàn cao cấp ,hợp mọi thời đại, phong cách Hàn Quốc, Vest" className="A2biD6 pH6OHR" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/39ba55af4ef2c88080163ecb7a478a13_tn" />
                                    <div className="-mCRW0">
                                      <div className="CGWoC0 _7JfmM3" style={{color: 'rgb(242, 82, 32)'}}>
                                        <span className="jKw-Wu">Yêu thích</span>
                                      </div>
                                    </div>
                                    <div className="_20CHwO">
                                      <div className="_5KXYyu r5IeUK DGPJIB">
                                        <span className="percent">46%</span><span className="bzhmIc">giảm</span>
                                      </div>
                                    </div>
                                    <div className="HNz4RL">
                                      <div className="Qr-Y+A" data-sqe="ad">
                                        Tài trợ
                                      </div>
                                    </div>
                                    <div className="_1q4RI2">
                                      <div className="customized-overlay-image">
                                        <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="phaD5a">
                                  <div className="C2cLca">
                                    <div className="_7qeYIT">
                                      <div className="xu+II7 xIpsKK">
                                        Áo khoác Blazer Nam Form rộng dài tay
                                        unisex basic chất Flannel Hàn cao cấp ,hợp
                                        mọi thời đại, phong cách Hàn Quốc, Vest
                                      </div>
                                    </div>
                                    <div className="YWPF+E">
                                      <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                        <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                        </svg>
                                        <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246, 145, 19)'}}>
                                          80% Giảm
                                        </div>
                                        <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="JLn02i +5sWQF">
                                    <div className="_8pWXgw QH4xqG">
                                      <span className="PBXD50">₫</span><span className="_0pAnxm">239.000</span>
                                    </div>
                                    <div className="Xpegl0 EPTziP">Đã bán 63</div>
                                  </div>
                                </div>
                              </div>
                            </div></a>
                        </div>
                        <div className="F5GEoY col-xs-2">
                          <a data-sqe="link" href="/ÁO-KHOÁC-BLAZER-VETS-HÀN-QUỐC-T-A-N-AV020-KÈM-(-phụ-kiện-).-MÀU-ĐEN-Và-TRẮNG-KEM-i.52158625.21721190766?sp_atk=1d5d927b-6a6f-48f7-9af5-b580ac7ecbbb&xptdk=1d5d927b-6a6f-48f7-9af5-b580ac7ecbbb"><div className="MHQUWx">
                              <div className="e+W1+o">
                                <div style={{pointerEvents: 'none'}}>
                                  <div className="_6WqAAN kSGaAZ">
                                    <img width="invalid-value" height="invalid-value" alt="ÁO KHOÁC BLAZER VETS HÀN QUỐC T-A-N AV020 KÈM ( phụ kiện ). MÀU ĐEN Và TRẮNG KEM" className="A2biD6 pH6OHR" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/ab2298767a8760239776cb476111023e_tn" />
                                    <div className="-mCRW0">
                                      <div className="CGWoC0 LUMhyI" style={{color: 'rgb(242, 82, 32)'}}>
                                        <div className="q8e9m0 QggwUo" />
                                      </div>
                                    </div>
                                    <div className="_20CHwO">
                                      <div className="_5KXYyu r5IeUK DGPJIB">
                                        <span className="percent">30%</span><span className="bzhmIc">giảm</span>
                                      </div>
                                    </div>
                                    <div className="HNz4RL">
                                      <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon WDRB3i icon-video-play2">
                                        <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                        <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                      </svg>
                                    </div>
                                    <div className="_1q4RI2">
                                      <div className="customized-overlay-image">
                                        <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="phaD5a">
                                  <div className="C2cLca">
                                    <div className="_7qeYIT">
                                      <div className="xu+II7 xIpsKK">
                                        ÁO KHOÁC BLAZER VETS HÀN QUỐC T-A-N AV020
                                        KÈM ( phụ kiện ). MÀU ĐEN Và TRẮNG KEM
                                      </div>
                                    </div>
                                    <div className="YWPF+E">
                                      <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                        <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                        </svg>
                                        <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246, 145, 19)'}}>
                                          Giảm ₫5k
                                        </div>
                                        <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                        </svg>
                                      </div>
                                      <div className="_5-fR0D" style={{color: 'rgb(255, 0, 32)'}}>
                                        #ShopDacBiet
                                      </div>
                                    </div>
                                  </div>
                                  <div className="JLn02i +5sWQF">
                                    <div className="_8pWXgw QH4xqG">
                                      <span className="PBXD50">₫</span><span className="_0pAnxm">196.000</span>
                                    </div>
                                    <div className="Xpegl0 EPTziP">Đã bán 24</div>
                                  </div>
                                </div>
                              </div>
                            </div></a>
                        </div>
                        <div className="F5GEoY col-xs-2">
                          <a data-sqe="link" href="/Áo-khoác-blazer-dài-tay-vest-nam-BZ22-M.RO-thời-trang-phong-cách-Hàn-Quốc-Mrhero-5-màu-i.115901754.20724208136?sp_atk=a68ebc71-9389-44cd-8aca-789a6182715a&xptdk=a68ebc71-9389-44cd-8aca-789a6182715a"><div className="MHQUWx">
                              <div className="e+W1+o">
                                <div style={{pointerEvents: 'none'}}>
                                  <div className="_6WqAAN kSGaAZ">
                                    <img width="invalid-value" height="invalid-value" alt="Áo khoác blazer dài tay vest nam BZ22 M.RO thời trang phong cách Hàn Quốc Mrhero 5 màu" className="A2biD6 pH6OHR" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/a367b6087d793f30f4552c52b851200e_tn" />
                                    <div className="-mCRW0">
                                      <div className="CGWoC0 _4mVCV1" style={{color: 'rgb(208, 1, 27)'}}>
                                        <div className="NaRCBr" />
                                      </div>
                                    </div>
                                    <div className="_20CHwO">
                                      <div className="_5KXYyu r5IeUK DGPJIB">
                                        <span className="percent">27%</span><span className="bzhmIc">giảm</span>
                                      </div>
                                    </div>
                                    <div className="HNz4RL">
                                      <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon WDRB3i icon-video-play2">
                                        <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                        <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                      </svg>
                                    </div>
                                    <div className="_1q4RI2">
                                      <div className="customized-overlay-image">
                                        <img src="https://cf.shopee.vn/file/651abc9a9f61b4c68c2e1c7c49415083" width height />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="phaD5a">
                                  <div className="C2cLca">
                                    <div className="_7qeYIT">
                                      <div className="xu+II7 xIpsKK">
                                        Áo khoác blazer dài tay vest nam BZ22 M.RO
                                        thời trang phong cách Hàn Quốc Mrhero 5
                                        màu
                                      </div>
                                    </div>
                                    <div className="YWPF+E">
                                      <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                        <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                        </svg>
                                        <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246, 145, 19)'}}>
                                          10% Giảm
                                        </div>
                                        <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                        </svg>
                                      </div>
                                      <div className="_5-fR0D" style={{color: 'rgb(255, 0, 32)'}}>
                                        #ShopDacBiet
                                      </div>
                                    </div>
                                  </div>
                                  <div className="JLn02i +5sWQF">
                                    <div className="_8pWXgw QH4xqG">
                                      <span className="PBXD50">₫</span><span className="_0pAnxm">145.000</span>
                                    </div>
                                    <div className="Xpegl0 EPTziP">Đã bán 237</div>
                                  </div>
                                </div>
                              </div>
                            </div></a>
                        </div>
                        <div className="F5GEoY col-xs-2">
                          <a data-sqe="link" href="/Áo-khoác-áo-blazer-áo-vest-form-rộng-dài-tay-Unisex-basic-kiểu-dáng-Hàn-Quốc-set-quần-tây-blazer-i.71440668.18634890365?sp_atk=c11f428d-b68c-4526-b0f7-2c409782f8a6&xptdk=c11f428d-b68c-4526-b0f7-2c409782f8a6"><div className="MHQUWx">
                              <div className="e+W1+o">
                                <div style={{pointerEvents: 'none'}}>
                                  <div className="_6WqAAN kSGaAZ">
                                    <img width="invalid-value" height="invalid-value" alt="Áo khoác áo blazer áo vest form rộng dài tay Unisex basic kiểu dáng Hàn Quốc, set quần tây blazer" className="A2biD6 pH6OHR" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/e7306addde1c0a8371a3b0537cfd6463_tn" />
                                    <div className="_20CHwO">
                                      <div className="_5KXYyu r5IeUK DGPJIB">
                                        <span className="percent">41%</span><span className="bzhmIc">giảm</span>
                                      </div>
                                    </div>
                                    <div className="HNz4RL">
                                      <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="shopee-svg-icon WDRB3i icon-video-play2">
                                        <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z" clipRule="evenodd" fillOpacity=".5" fillRule="evenodd" />
                                        <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z" fill="#fff" />
                                      </svg>
                                    </div>
                                    <div className="_1q4RI2">
                                      <div className="customized-overlay-image">
                                        <img src="https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8" width height />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="phaD5a">
                                  <div className="C2cLca">
                                    <div className="_7qeYIT">
                                      <div className="xu+II7 xIpsKK">
                                        Áo khoác áo blazer áo vest form rộng dài
                                        tay Unisex basic kiểu dáng Hàn Quốc, set
                                        quần tây blazer
                                      </div>
                                    </div>
                                  </div>
                                  <div className="JLn02i +5sWQF">
                                    <div className="_8pWXgw QH4xqG">
                                      <span className="PBXD50">₫</span><span className="_0pAnxm">149.000</span>
                                    </div>
                                    <div className="Xpegl0 EPTziP">Đã bán 34</div>
                                  </div>
                                </div>
                              </div>
                            </div></a>
                        </div>
                        <div className="F5GEoY col-xs-2">
                          <a data-sqe="link" href="/Nón-Len-Beanie-Đen-Rách-Phối-Khuyên-Basic-Dệt-Kim-Co-Giãn-Tốt-Unisex-Phong-Cách-Hàn-Quốc-i.24676562.14189956088?sp_atk=98ded47c-1926-4da1-bfab-241ec05e5571&xptdk=98ded47c-1926-4da1-bfab-241ec05e5571"><div className="MHQUWx">
                              <div className="e+W1+o">
                                <div style={{pointerEvents: 'none'}}>
                                  <div className="_6WqAAN kSGaAZ">
                                    <img width="invalid-value" height="invalid-value" alt="Nón Len Beanie Đen Rách Phối Khuyên Basic Dệt Kim Co Giãn Tốt Unisex Phong Cách Hàn Quốc" className="A2biD6 pH6OHR" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/4e35b92cb00bfd4d415f027251497dea_tn" />
                                    <div className="-mCRW0">
                                      <div className="CGWoC0 LUMhyI" style={{color: 'rgb(242, 82, 32)'}}>
                                        <div className="q8e9m0 QggwUo" />
                                      </div>
                                    </div>
                                    <div className="_20CHwO">
                                      <div className="_5KXYyu r5IeUK DGPJIB">
                                        <span className="percent">50%</span><span className="bzhmIc">giảm</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="phaD5a">
                                  <div className="C2cLca">
                                    <div className="_7qeYIT">
                                      <div className="xu+II7 xIpsKK">
                                        Nón Len Beanie Đen Rách Phối Khuyên Basic
                                        Dệt Kim Co Giãn Tốt Unisex Phong Cách Hàn
                                        Quốc
                                      </div>
                                    </div>
                                    <div className="YWPF+E">
                                      <div className="_5-fR0D" style={{color: 'rgb(255, 0, 32)'}}>
                                        #ShopXuHuong
                                      </div>
                                    </div>
                                  </div>
                                  <div className="JLn02i +5sWQF">
                                    <div className="_8pWXgw QH4xqG">
                                      <span className="PBXD50">₫</span><span className="_0pAnxm">19.000</span>
                                    </div>
                                    <div className="Xpegl0 EPTziP">Đã bán 653</div>
                                  </div>
                                </div>
                              </div>
                            </div></a>
                        </div>
                        <div className="F5GEoY col-xs-2">
                          <a data-sqe="link" href="/Áo-khoác-Blazer-Nam-Form-rộng-dài-tay-unisex-basic-chất-Flannel-Hàn-cao-cấp-hợp-mọi-thời-đại-phong-cách-Hàn-Quốc-Vest-i.52682650.13493236150?sp_atk=05862c91-9530-43a4-a00c-3b1250abf344&xptdk=05862c91-9530-43a4-a00c-3b1250abf344"><div className="MHQUWx">
                              <div className="e+W1+o">
                                <div style={{pointerEvents: 'none'}}>
                                  <div className="_6WqAAN kSGaAZ">
                                    <img width="invalid-value" height="invalid-value" alt="Áo khoác Blazer Nam Form rộng dài tay unisex basic chất Flannel Hàn cao cấp ,hợp mọi thời đại, phong cách Hàn Quốc, Vest" className="A2biD6 pH6OHR" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/39ba55af4ef2c88080163ecb7a478a13_tn" />
                                    <div className="-mCRW0">
                                      <div className="CGWoC0 LUMhyI" style={{color: 'rgb(242, 82, 32)'}}>
                                        <div className="q8e9m0 QggwUo" />
                                      </div>
                                    </div>
                                    <div className="_20CHwO">
                                      <div className="_5KXYyu r5IeUK DGPJIB">
                                        <span className="percent">43%</span><span className="bzhmIc">giảm</span>
                                      </div>
                                    </div>
                                    <div className="HNz4RL">
                                      <div className="Qr-Y+A" data-sqe="ad">
                                        Tài trợ
                                      </div>
                                    </div>
                                    <div className="_1q4RI2">
                                      <div className="customized-overlay-image">
                                        <img src="https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c" width height />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="phaD5a">
                                  <div className="C2cLca">
                                    <div className="_7qeYIT">
                                      <div className="xu+II7 xIpsKK">
                                        Áo khoác Blazer Nam Form rộng dài tay
                                        unisex basic chất Flannel Hàn cao cấp ,hợp
                                        mọi thời đại, phong cách Hàn Quốc, Vest
                                      </div>
                                    </div>
                                    <div className="YWPF+E">
                                      <div className="_1PWkR nt-medium nt-foot _3nkRL" style={{color: 'rgb(246, 145, 19)'}}>
                                        <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform stroke="currentColor" fill="#f69113" />
                                        </svg>
                                        <div className="_1FKkT _3Ao0A" style={{color: 'white', backgroundColor: 'rgb(246, 145, 19)'}}>
                                          80% Giảm
                                        </div>
                                        <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113" />
                                        </svg>
                                      </div>
                                      <div className="_5-fR0D" style={{color: 'rgb(255, 0, 32)'}}>
                                        #ShopDacBiet
                                      </div>
                                    </div>
                                  </div>
                                  <div className="JLn02i +5sWQF">
                                    <div className="_8pWXgw QH4xqG">
                                      <span className="PBXD50">₫</span><span className="_0pAnxm">249.000</span>
                                    </div>
                                    <div className="Xpegl0 EPTziP">Đã bán 4,1k</div>
                                  </div>
                                </div>
                              </div>
                            </div></a>
                        </div>
                      </div>
                    </div>
                    <div className="alAWLq">
                      <div className="_1oak6t">Vừa xem</div>
                      <div className="_2QKwIt">
                        <a index={0} className="_3J-9cq" href="/Áo-Blazer-Nam-Dài-Áo-khoác-Blazer-Form-Rộng-phong-cách-Hàn-Quốc-UT-i.94523191.20207904414"><div className="_1Zpa2f">
                            <div className="_2TafGB _1NNc5R">
                              <img width="invalid-value" height="invalid-value" className="Q2TwgS" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/dad6bc23db9b9b1882ada4c85aacb16f_tn" />
                            </div>
                          </div>
                          <div className="_24FucX">₫189.000</div></a><a index={1} className="_3J-9cq" href="/áo-khoác-dài-cổ-Vest-form-rộng-chất-Flannel-cao-cấp-áo-khoác-măng-tô-phong-cách-Hàn-Quốc-2-lớp-Blazer-dài-i.52682650.12996239405"><div className="_1Zpa2f">
                            <div className="_2TafGB _1NNc5R">
                              <img width="invalid-value" height="invalid-value" className="Q2TwgS" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/3b88d6c8e65079c9a438386abafe5941_tn" />
                            </div>
                          </div>
                          <div className="_24FucX">₫279.000</div></a><a index={2} className="_3J-9cq" href="/Áo-khoác-Blazer-Nam-Form-rộng-dài-tay-unisex-basic-chất-Flannel-Hàn-cao-cấp-hợp-mọi-thời-đại-phong-cách-Hàn-Quốc-Vest-i.52682650.13493236150"><div className="_1Zpa2f">
                            <div className="_2TafGB _1NNc5R">
                              <img width="invalid-value" height="invalid-value" className="Q2TwgS" style={{objectFit: 'contain'}} src="https://cf.shopee.vn/file/39ba55af4ef2c88080163ecb7a478a13_tn" />
                            </div>
                          </div>
                          <div className="_24FucX">₫249.000</div></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}

export default Cart