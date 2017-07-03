import React, { Component } from "react";
import Shelf from './Shelf/Shelf';

export default class Shelves extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Shelf id="A" history={ history } />
        <Shelf id="B" history={ history } />
        <Shelf id="C" history={ history } />
        <Shelf id="D" history={ history } />
      </div>
    )
  }
}