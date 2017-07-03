import React, { Component } from "react";

export default class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: 0
    };

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }

  render() {
    return (
      <div>
        Create
      </div>
    )
  }
}