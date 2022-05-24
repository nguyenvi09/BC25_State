import React, { Component } from "react";
import GlassList from "./glass-list";
import dataGlasses from "./dataGlasses.json";

export default class TryGlasses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      glassList: dataGlasses,
      //tạo 1 state sản phẩm mặc định thứ 0
      changeGlass: dataGlasses[0],
    };
  }

  //index muốn nhận dữ liệu truyền từ sau ra thì ta phải có hàm nhận dữ liệu từ con truyền ra
  // B1: ta truyền method này sang glass-list trước
  // B2: truyền từ glass-list -> glass-item
  handleChangeGlass = (product) => {
    this.setState({
      changeGlass: product,
    });
  };

  render() {
    //   bóc tách
    const { glassList, changeGlass } = this.state;
    return (
      <div className="app">
        <div className="overplay"></div>
        <h1 className="header">TRY GLASSES APP ONLINE</h1>
        <div className="container user">
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                className="img-model"
                src="./glassesImage/model.jpg"
                alt="model"
              />
              <img className="change-glass" src={changeGlass.url} alt="glass" />
            </div>
            <div className="col-md-6 text-center">
              <img
                className="img-model"
                src="./glassesImage/model.jpg"
                alt="model"
              />
            </div>
          </div>
        </div>
        {/* truyền props đặt tên getProduct vô danh sách kính */}
        <GlassList glassList={glassList} getProduct={this.handleChangeGlass} />
      </div>
    );
  }
}
