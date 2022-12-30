import axios from 'axios'
import React, { Component } from 'react'
import AppUrl from '../../api/AppUrl'

export class ProductAttribute extends Component{
    constructor(props){
        super(props)
        this.state = {
            AttributeProductArray: []
        }
    }
    getData(){
        axios.get(AppUrl.ProductAttribute + this.props.id)
        .then((response)=>{
            var data = response.data;
            this.setState({
                AttributeProductArray: data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    componentDidMount(){
        this.getData();
    }
    render() {
        var AttributeProductArray = this.state.AttributeProductArray;
        var myview = AttributeProductArray.map((attribute, i)=>{
            return(
                <div className="OktMMO">
                    <label className="_27NlLf">{attribute.label}</label>
                    <div>{attribute.values}</div>
                </div>
            )
        })
        return (
            <>
                <div className="_2jz573">
                        {myview}
                </div>
            </>
        )

    }
}

export default ProductAttribute