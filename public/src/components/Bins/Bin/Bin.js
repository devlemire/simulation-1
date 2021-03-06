import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Bin extends Component {
  render() {
    console.log( this.props );
    const { number, createLink, binLink, filled } = this.props;
    return (
      <div>
        {
          filled
          ?
            <Link to={ binLink }>
              <span> Bin { number } </span>
            </Link>
          :
            <Link to={ createLink }>
              <span> Add inventory to bin </span>
            </Link>
        }
      </div>
    )
  }
}