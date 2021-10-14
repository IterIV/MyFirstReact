import React, { Component } from 'react'
import './SideBar.css'
export default class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul className="sidebar_listmenu">

                    <li className="sidebar_menuitem active">
                        <div className="menuitem_content">
                            <i className="fa fa-angle-down"></i>
                            <span>Giày thời trang</span>
                        </div>
                        <div className="sidebar_submenu">
                            <ul>
                                <li className="sidebar_subMenuitem active">
                                    <span>Giày thể thao</span>
                                </li>
                                <li className="sidebar_subMenuitem">
                                    <span>Giày đi mưa</span>
                                </li>
                                <li className="sidebar_subMenuitem">
                                    <span>Giày da</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="sidebar_menuitem">
                        <div className="menuitem_content">
                            <i className="fa fa-angle-down"></i>
                            <span>Áo thể thao</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
