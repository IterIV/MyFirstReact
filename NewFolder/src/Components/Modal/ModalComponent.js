import React, { Component } from 'react'
import ThoiGianKT from './ThoiGianKT'

export default class ModalComponent extends Component {
    formatDay = (dateString) => {
        // input format "yyyy-mm-dd"
        let dateValue = new Date(dateString);
        let day = dateValue.getDate();
        let month = dateValue.getMonth() + 1;
        let year = dateValue.getFullYear();
        return `ngày ${day} tháng ${month} năm ${year}`
        //return format ngày 22 tháng 03 năm 2021
    }
    handleNgayKT(ngayKT) {
        console.log(this.formatDay(ngayKT))
    }
    render() {
        return (
            <div>
                <div
                    className="modal fade"
                    id={this.props.id}
                    data-backdrop="static"
                    data-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby={this.props.id + "Label"}
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id={this.props.id + "Label"}
                                >
                                    {this.props.title}
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    ref={button => this.closeBtn = button}
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <ThoiGianKT onChangeNgayKT={this.handleNgayKT.bind(this)} />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-dismiss="modal"
                                    onClick={() => {
                                        this.closeBtn.click();
                                    }}
                                >
                                    Thoát
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                >
                                    Lưu dữ liệu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
