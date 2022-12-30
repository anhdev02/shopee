import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppUrl from '../api/AppUrl'

export class HomeCategory extends Component{
    constructor(){
        super()
        this.state = {
            CategoryArray: []
        }
    }

    getData(){
        axios.get(AppUrl.CategoryHeader)
        .then((reponse)=>{
            var data = reponse.data;
            this.setState({
                CategoryArray: data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    componentDidMount(){
        this.getData();
    }
    render(){
        var CategoryArray = this.state.CategoryArray;
        var myview = CategoryArray.map((category, i)=>{
            return(
                <div className="pFceVIcanh">
                  <Link className="UPUwyq" to={'/productbycategory/'+category.id}>
                      {category.categoryName}
                  </Link>
                </div>
            )
        })
        return(
            <>
                {myview}
            </>
        )
    }
}

export default HomeCategory