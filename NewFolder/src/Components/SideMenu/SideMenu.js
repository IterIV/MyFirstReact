import React, { Component } from 'react'
import ModalComponent from '../Modal/ModalComponent';
import './SideMenu.css'
export default class SideMenu extends Component {

    renderMenu(modals) {
        return modals.map((modal, index) => {
            return (
                <li key={modal.id} className="sideMenu_menuItem">
                    <button data-toggle="modal" data-target={"#" + modal.id}>
                        <i className="las la-check mr-2"></i>
                        <span>{modal.title}</span>
                    </button>
                </li>
            );
        })
    }
    renderModal(modal) {
        return <ModalComponent
            key={modal.id}
            id={modal.id}
            title={modal.title}/>
    }
    render() {
        let modals = [{
            id: "thoiGian",
            title: "Thời gian kiểm tra"
        }]
        return (
            <div className='sideMenu'>
                <div className="sideMenu_header">
                    <h1 className="text-center">NGHIỆM THU PCCC</h1>
                </div>
                <ul className="sideMenu_lstMenu mt-3">
                    {this.renderMenu(modals)}
                </ul>
                {this.renderModal(modals[0])}
            </div>

        )
    }
}
