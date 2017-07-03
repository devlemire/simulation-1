import React, { Component } from "react";

export default class Shelf extends Component {
  render() {
    const { id, history } = this.props;
    return (
      <div>
        <span onClick={ () => history.push(`/bins/${id}`) }> Shelf { id } </span>
      </div>
    )
  }
}
