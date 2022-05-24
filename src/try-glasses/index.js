import React, { Component } from "react";
import Header from "./header";
import User from "./user";
import GlassList from "./glass-list";
import dataGlasses from "./dataGlasses.json";

export default class TryGlasses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      glassList: dataGlasses,
    };
  }

  render() {
    //   bóc tách
    const { glassList } = this.state;
    return (
      <div className="app">
        <Header />
        <User />
        {/* truyền props vô danh sách kính */}
        <GlassList glassList={glassList} />
      </div>
    );
  }
}
