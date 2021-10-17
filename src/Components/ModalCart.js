import React, { Component } from "react";
import { connect } from "react-redux";
import "./ModalCart.css";
import ModalCartItem from "./ModalCartItem";

class ModalCart extends Component {
  renderCartList = () => {
    let { cartStore } = this.props;
    return cartStore.map((product, index) => {
      return <ModalCartItem key={index} product={product} />;
    });
  };
  renderTotalPrice = () => {
    let sum = 0;
    let { cartStore } = this.props;
    cartStore.forEach((product) => {
      sum += product.soLuong * product.price;
    });
    return `$ ${sum.toLocaleString()}`;
  };
  render() {
    return (
      <>
        <div className="modal fade" id="cartModal" tabIndex={-1}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-body cartModal_content">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  ref={(btn) => {
                    this.btnClose = btn;
                  }}
                ></button>
                <p className="cartModal_Header_Text ">Giỏ hàng</p>

                <table className="table">
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th className="text-center">Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderCartList()}
                    <tr>
                      <td colSpan="3" className="font-weight-bold">
                        Tổng số
                      </td>
                      <td colSpan="3" className="font-weight-bold">
                        {this.renderTotalPrice()}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="row">
                  <div className="col-4">
                    <button
                      className="btn w-100 cartModal_Header_Countinue"
                      onClick={() => {
                        this.btnClose.click();
                      }}
                    >
                      Tiếp tục mua sắm
                    </button>
                  </div>
                  <div className="col-4"></div>
                  <div className="col-4">
                    <button className="btn btn-success w-100">Mua hàng</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    cartStore: rootReducer.cartStore,
  };
};
export default connect(mapStateToProps)(ModalCart);
