import React, { Component } from "react";
import GlassItem from "./glass-item";

export default class GlassList extends Component {
  renderGlassList = () => {
    return this.props.glassList.map((item) => {
      //truyền props đặt tên là product chứa
      // thông tin chi tiết của từng sản phẩm sang glass-item
      return <GlassItem key={item.id} product={item} />;
    });
  };

  render() {
    console.log(this.props.glassList);
    return (
      <div className="container">
        <div className="row">{this.renderGlassList()}</div>
      </div>
    );
  }
}
