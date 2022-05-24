import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <div className="container user">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              className="img-model"
              src="./glassesImage/model.jpg"
              alt="model"
            />
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
    );
  }
}
