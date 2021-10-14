import React, { Component } from 'react'
import BBKT from './BBKT'
import './WordDisplay.css'
export default class WordDisplay extends Component {
    render() {
        return (
            <div className="wordDisplay">
                <div className="wordDisplay_header">
                    <ul className="nav nav-pills" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#bbkt_page" role="tab" aria-selected="true">Biên bản kiểm tra</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#baocao_page" role="tab" aria-selected="false">Báo cáo đề xuất</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#congvan_page" role="tab" aria-selected="false">Công văn nghiệm thu</a>
                        </li>
                    </ul>

                </div>
                <div className="wordDisplay_content">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="bbkt_page" role="tabpanel" aria-labelledby="home-tab">
                            <BBKT/>
                        </div>
                        <div className="tab-pane fade" id="baocao_page" role="tabpanel" aria-labelledby="profile-tab">.câcscas</div>
                        <div className="tab-pane fade" id="congvan_page" role="tabpanel" aria-labelledby="contact-tab">...</div>
                    </div>
                </div>
            </div>
        )
    }
}
