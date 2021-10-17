import React, { Component } from "react";

export default class ModalCartItem extends Component {
  render() {
    let { product } = this.props;
    return (
      <tr>
        <td className="cartModal_colInfo">
          <div className="cartItem d-flex align-items-center">
            <img
              className="cartModal_colInfo_img"
              src={product.image}
              alt="adidas-prophere"
            />
            <div>
              <p className="cartModal_colInfo_name mb-1">{product.name}</p>
              <p className="cartModal_colInfo_desc mb-0">
                {product.shortDescription}
              </p>
            </div>
          </div>
        </td>
        <td className="cartModal_colCount">
          <i className="fa fa-plus cartModal_colCount_increase"></i>
          <span className="cartModal_colCount_number">{product.soLuong}</span>
          <i className="fa fa-minus cartModal_colCount_decrease"></i>
        </td>
        <td className="cartModal_colMoney">{"$" + product.price}</td>
        <td className="cartModal_colMoney">
          {"$" + product.soLuong * product.price}
        </td>
        <td>
          <span className="ml-1 cartModal_remove">Xóa</span>
        </td>
      </tr>
    );
  }
}
