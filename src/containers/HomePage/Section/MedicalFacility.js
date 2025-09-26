import React, { Component } from "react";
import { connect } from "react-redux";
import "./MedicalFacility.scss";
import Slider from "react-slick";

class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-medical-facility">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cơ Sở y tế nổi bật</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Hệ thống Y tế ABC</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Hệ thống Y tế ABC</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Hệ thống Y tế ABC</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Hệ thống Y tế ABC</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Hệ thống Y tế ABC</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Hệ thống Y tế ABC</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
