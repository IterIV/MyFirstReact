import React, { Component } from 'react'
import './ModalProduct.css'
export default class ModalProduct extends Component {
    render() {
        let { productInfo } = this.props;
        return (
            <>
                {productInfo &&
                    (<div className="modal fade" id="productModal" tabIndex={-1}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body productModal_content">
                                    <div className="productModal_img">
                                        <img className="img-fluid"
                                            src={"./asset/img/" + productInfo.alias + ".png"}
                                            alt={productInfo.alias}
                                        />
                                    </div>
                                    <div className="productModal_info">
                                        <div className="row">
                                            <div className="col-10">
                                                <p className="productModal_name">
                                                    {productInfo.name}
                                                </p>
                                            </div>
                                            <div className="col-2">
                                                <p className="productModal_price">
                                                    {"$" + productInfo.price}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="productModal_desc">
                                            <p className="productModal_desc_header">
                                                Mô tả
                                            </p>
                                            <p className="productModal_desc_text">
                                            {productInfo.description}
                                            </p>
                                        </div>
                                        <button className="btn productDetail_btn w-100 py-3 px-3 mt-3">
                                            Thêm vào giỏ hàng
                                            </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </>

        )
    }
}
