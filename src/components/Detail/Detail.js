import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    console.log( this.props );
    const { id } = this.props.match.params;
    return (
      <div>
        Details for bin { id }
      </div>
    )
  }
}