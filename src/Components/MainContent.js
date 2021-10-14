import React, { Component } from 'react'
import ListProducts from './ListProducts'
import './MainContent.css'
import ModalProduct from './ModalProduct';
export default class MainContent extends Component {
    state = {
        productSelected: {}
    }
    getInfo = (product) => {
        this.setState({
            productSelected: product
        })
    }
    render() {
        let { dataProduct } = this.props;
        return (
            <div className="mainContent">
                <h2 className="mainContent_header mb-5">Giày Nike</h2>
                <ListProducts
                    dataProduct={dataProduct}
                    showInfo={this.getInfo}
                />
                <ModalProduct productInfo = {this.state.productSelected}/>
            </div>

        )
    }
}
