import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppUrl from '../api/AppUrl'

export class BrandMenu extends Component{
    constructor(){
        super()
        this.state = {
            BrandArray : []
        }
    }
    async getData() {
        try {
          const response = await axios.get(AppUrl.AllBrand);
          this.setState({
            BrandArray: response.data,
          });
        } catch (error) {
          console.log(error);
        }
      }
    componentDidMount(){
        this.getData();
    }
    render(){
        var BrandArray = this.state.BrandArray;
        var myview = BrandArray.map((brand, i)=>{
            return(
                <Link to={'/productbybrand/'+brand.id}>
                    <div className="shopee-filter shopee-checkbox-filter">
                        <div className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                            <input type="checkbox" name defaultValue={1802789} />
                            <div className="shopee-checkbox__box">
                            <i> </i>
                            </div>
                            <span className="shopee-checkbox__label">{brand.brandName}</span>
                        </label>
                        </div>
                    </div>
                </Link>
            )
        })
        return(
            <div className="shopee-filter-group shopee-brands-filter">
                <div className="shopee-filter-group__header">Thương Hiệu</div>
                <div className="folding-items shopeee-filter-group__body folding-items--folded">
                    {myview}
                </div>
          </div>
        )
    }
}