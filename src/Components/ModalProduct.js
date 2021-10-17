import React, { Component } from "react";
import "./ModalProduct.css";
import { connect } from "react-redux";

class ModalProduct extends Component {
  handleClickAddProduct = () => {
    this.btnClose.click();
    const action = {
      type: "ADD_PRODUCT",
      product: this.props.selectedProduct,
    };
    this.props.dispatch(action);
  };
  render() {
    let { selectedProduct } = this.props;
    return (
      <>
        {!(Object.keys(selectedProduct).length === 0) && (
          <div className="modal fade" id="productModal" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  ref={(button) => {
                    this.btnClose = button;
                  }}
                ></button>
                <div className="modal-body productModal_content">
                  <div className="productModal_img">
                    <img
                      className="img-fluid"
                      src={selectedProduct.image}
                      alt={selectedProduct.alias}
                    />
                  </div>
                  <div className="productModal_info">
                    <div className="row">
                      <div className="col-10">
                        <p className="productModal_name">
                          {selectedProduct.name}
                        </p>
                      </div>
                      <div className="col-2">
                        <p className="productModal_price">
                          {"$" + selectedProduct.price}
                        </p>
                      </div>
                    </div>
                    <div className="productModal_desc">
                      <p className="productModal_desc_header">Mô tả</p>
                      <p className="productModal_desc_text">
                        {selectedProduct.description}
                      </p>
                    </div>
                    <button
                      className="btn productDetail_btn w-100 py-3 px-3 mt-3"
                      onClick={() => {
                        this.handleClickAddProduct();
                      }}
                    >
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    selectedProduct: rootReducer.selectedProduct,
  };
};

const ModalProductRedux = connect(mapStateToProps)(ModalProduct);
export default ModalProductRedux;
