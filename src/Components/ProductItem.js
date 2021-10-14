import React, { Component } from 'react'

export default class ProductItem extends Component {

    render() {
        let { product, showInfo } = this.props
        return (
            <div className="col-3">
                <div
                    className="productItem"
                    data-toggle="modal"
                    data-target="#productModal"
                    onClick={() => {
                        showInfo(product)
                    }}
                >
                    <div className="productName">
                        <p>{product.name}</p>
                    </div>
                    <div className="productImg">
                        <img
                            className="img-fluid"
                            src={"./asset/img/" + product.alias + ".png"}
                            alt=""
                        />
                    </div>
                    <div className="row align-items-center">
                        <div className="productPrice col">
                            <p className="productPrice_header">
                                Giá tiền
                            </p>
                            <p className="productPrice_cash">
                                {"$" + product.price}
                            </p>
                        </div>
                        <div className="productDetail col">
                            <button
                                className="btn productDetail_btn"
                                data-toggle="modal"
                                data-target="#productModal"
                                onClick={() => {
                                    showInfo(product)
                                }}
                            >
                                Xem chi tiết
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
