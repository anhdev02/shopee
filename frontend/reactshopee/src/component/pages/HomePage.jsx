import React, { Component } from 'react'
import HeaderHome from '../common/HeaderHome';
import Home from '../home/Home';
import FooterHome from '../common/FooterHome';
import '../../assets/css/Style.scss'

class HomePage extends Component {
    render() {
        return(
            <div className='react_main'>
                <HeaderHome />
                <Home />
                <FooterHome/>
            </div>
        )
    }
}

export default HomePage