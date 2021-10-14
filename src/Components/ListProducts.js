import React, { Component } from 'react'
import './ListProducts.css'
import ProductItem from './ProductItem'
export default class ListProducts extends Component {
    renderProductList = () => {
        let {dataProduct,showInfo} = this.props;
        return dataProduct.map(
            (productItem) => {
                return <ProductItem 
                key = {productItem.id}
                product = {productItem}
                showInfo = {showInfo}
                />
            }
        )
    }
    render() {
        
        return (
            <div>
                <div className="row productList">
                    {this.renderProductList()}
                </div>
            </div>
        )
    }
}
