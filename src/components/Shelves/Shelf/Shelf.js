import React, { Component } from "react";

export default class Shelf extends Component {
  render() {
    const { name, history } = this.props;
    return (
      <div>
        <span onClick={ () => history.push(`/bins/${name}`) }> Shelf { name } </span>
      </div>
    )
  }
}
