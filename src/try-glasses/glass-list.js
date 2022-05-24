import React, { Component } from "react";
import GlassItem from "./glass-item";

export default class GlassList extends Component {
  renderGlassList = () => {
    return this.props.glassList.map((item) => {
      //truyền props đặt tên là product chứa
      // thông tin chi tiết của từng sản phẩm sang glass-item
      // truyền cho glass-item props để lấy dữ liệu
      return (
        <GlassItem
          key={item.id}
          product={item}
          getProduct={this.props.getProduct}
        />
      );
    });
  };

  render() {
    return (
      <div className="container bg-light p-3">
        <div className="row">{this.renderGlassList()}</div>
      </div>
    );
  }
}
