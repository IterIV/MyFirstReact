import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="header_brand">
                    Shop Inter
                </h1>
                <div className="header_group">
                    <div className="header_search">
                        <div className="header_search_icon">
                            <i className="las la-search"></i>
                        </div>
                        <input type="text" placeholder = "Nhập tên để tìm kiếm..."/>
                    </div>
                    <div className="header_cart">
                        <i className="las la-shopping-cart"></i>
                        <span className = "header_cart_count">0</span>
                    </div>
                </div>
            </div>
        )
    }
}
