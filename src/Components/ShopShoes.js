import React, { Component } from 'react'
import dataProduct from '../data.json'
import Header from './Header'
import MainContent from './MainContent'
import ModalProduct from './ModalProduct'
import SideBar from './SideBar'


export default class ShopShoes extends Component {
    
    render() {
        return (
            <div>
                <Header/>
                <SideBar/>
                <MainContent dataProduct = {dataProduct}/>
                <ModalProduct/>
            </div>
        )
    }
}
