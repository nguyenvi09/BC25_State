import React, { Component } from "react";
import Header from "./header";
import User from "./user";
import GlassList from "./glass-list";

export default class TryGlasses extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <User />
        <GlassList />
      </div>
    );
  }
}
