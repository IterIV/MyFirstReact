import React, { Component } from 'react'
import './BBKT.css'
export default class BBKT extends Component {
    state = {
        thoiGian: {
            ngayKT: "ngayKT",
            gioBatDau: "gioBatDau",
            gioKetThuc: "gioKetThuc"
        },
        thongTin: {
            tenCongTrinh: "tenCongTrinh",
            tenHangMuc: "tenHangMuc",
            diaDiem: "diaDiem",
            chuDauTu: "chuDauTu",
            donViTC: ["donViThiCong1", "donViThiCong2"]
        }
    }
    renderThoiGian() {
        return `Hồi ${this.state.thoiGian.gioBatDau} ${this.state.thoiGian.ngayKT}, tại ${this.state.thongTin.tenCongTrinh}.`
    }
    renderDiaDiem() {
        return `Địa chỉ ${this.state.thongTin.diaDiem}.`
    }
    exportWord() {
        let sourceHTML = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office'
              xmlns:w='urn:schemas-microsoft-com:office:word'
              xmlns='http://www.w3.org/TR/REC-html40'
        >
        <head>
            <meta charset='utf-8'>
            <title>Export HTML to Word Document with JavaScript</title>
            <style>
                p{
                    font-size: 14pt;
                }
                .font-weight-bold {
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            ${document.getElementById("bbkt_content").innerHTML}
        </body>
        </html>
        `
        var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        var fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'Bien ban kiem tra.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
    }

    render() {
        let styleBBKT = {
            fontFamily: 'Times New Roman',
            fontSize: '14pt',
            margin: '0 auto',
            padding: "2cm 2cm 2cm 3cm",
            textIndent: "1.27cm",
            textAlign: "justify"
        }
        return (
            <div>
                <div className="bbkt_header row align-items-center">
                    <div className="col">
                        <p className="mb-0"> BIÊN BẢN KIỂM TRA (THẨM DUYỆT - ĐẠT)</p>
                    </div>
                    <div className="col text-right">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.exportWord();
                            }}
                        >
                            Tải xuống
                        </button>
                    </div>
                </div>
                <div className="bbkt_word mt-3">
                    <div id="bbkt_content" style={styleBBKT}>
                        <p>{this.renderThoiGian()}</p>
                        <p>{this.renderDiaDiem()}</p>
                        <p>Chúng tôi gồm:</p>

                    </div>
                </div>
            </div>
        )
    }
}
