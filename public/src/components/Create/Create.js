import React, { Component } from "react";

import axios from "axios";
import api from "../../api";

export default class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: 'http://lorempixel.com/200/200/business/',
      price: 0
    };

    this.handleChange = this.handleChange.bind( this );
    this.create = this.create.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }

  create() {
    const { id } = this.props.match.params;
    const { history } = this.props;
    const { name, price, image } = this.state;

    if ( isNaN( price ) ) {
      return
    } else {
      axios.post( `${api.bin}/${id}`, { name, price, image } ).then( response => {
        history.push( `/bins/${id[0]}` );
      });
    }
  }

  render() {
    const { name, price } = this.state;
    return (
      <div>
        <span> Name </span>
        <input value={ name } onChange={ (e) => this.handleChange('name', e.target.value) } />
        <br />
        <span> Price </span>
        <input value={ price } onChange={ (e) => this.handleChange('price', e.target.value) } />
        <br />
        <button onClick={ this.create }> Create </button>
      </div>
    )
  }
}