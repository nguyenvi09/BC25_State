import React, { Component } from "react";

export default class GlassItem extends Component {
  render() {
    //nhận thông tin sản phẩm
    const { product } = this.props;
    return (
      <div className="col-md-2">
        <img className="img-glass" src={product.url} alt="glass-item" />
      </div>
    );
  }
}
