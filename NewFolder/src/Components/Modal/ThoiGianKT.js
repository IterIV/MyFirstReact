import React, { Component } from 'react'

export default class ThoiGianKT extends Component {
   
  handleNgayKTChange = () => {
    let ngayKT = this.inputNgayKT.value;
    this.props.onChangeNgayKT(ngayKT);
  }
  render() {
    return (
      <form>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="ngayKT">Ngày kiểm tra</label>
            <input type="date" className="form-control" id="ngayKT"
            ref = {input => this.inputNgayKT = input}
            onChange = {this.handleNgayKTChange} />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="gioBatDau">Giờ bắt đầu</label>
            <input type="time" className="form-control" id="gioBatDau" />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="gioKetThuc">Giờ kết thúc</label>
            <input type="time" className="form-control" id="gioKetThuc" />
          </div>
        </div>
      </form>
    )
  }
}
