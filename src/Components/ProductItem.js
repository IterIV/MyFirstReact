import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  handleClickBtnDetail = () => {
    const action = {
      type: "RETURN_SELECTED",
      product: this.props.product,
    };
    this.props.dispatch(action);
  };
  render() {
    let { product } = this.props;
    return (
      <div className="col-3">
        <div
          className="productItem"
          data-toggle="modal"
          data-target="#productModal"
          onClick={() => {
            this.handleClickBtnDetail();
          }}
        >
          <div className="productName">
            <p>{product.name}</p>
          </div>
          <div className="productImg ">
            <img className="img-fluid" src={product.image} alt="" />
          </div>
          <div className="row align-items-center">
            <div className="productPrice col">
              <p className="productPrice_header">Giá tiền</p>
              <p className="productPrice_cash">{"$" + product.price}</p>
            </div>
            <div className="productDetail col">
              <button
                className="btn productDetail_btn w-100"
                data-toggle="modal"
                data-target="#productModal"
                onClick={() => {
                  this.handleClickBtnDetail();
                }}
              >
                Chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    cartStore: rootReducer.cartStore,
  };
};
export default connect(mapStateToProps)(ProductItem);
