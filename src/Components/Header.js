import React, { Component } from "react";
import "./Header.css";
import { connect } from "react-redux";

class Header extends Component {
  renderCountProductCart = () => {
    let count = 0;
    this.props.cartStore.forEach((product) => {
      count += product.soLuong;
    });
    return count;
  };
  render() {
    return (
      <div className="header">
        <h1 className="header_brand">Shop Inter</h1>
        <div className="header_group">
          <div className="header_search">
            <div className="header_search_icon">
              <i className="las la-search"></i>
            </div>
            <input type="text" placeholder="Nhập tên để tìm kiếm..." />
          </div>
          <div
            className="header_cart"
            data-toggle="modal"
            data-target="#cartModal"
          >
            <i className="las la-shopping-cart"></i>
            <span className="header_cart_count">
              {this.renderCountProductCart()}
            </span>
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

export default connect(mapStateToProps)(Header);
