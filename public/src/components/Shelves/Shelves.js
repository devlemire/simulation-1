import React, { Component } from "react";
import Shelf from './Shelf/Shelf';

export default class Shelves extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Shelf name="A" history={ history } />
        <Shelf name="B" history={ history } />
        <Shelf name="C" history={ history } />
        <Shelf name="D" history={ history } />
      </div>
    )
  }
}