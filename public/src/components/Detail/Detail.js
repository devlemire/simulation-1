import React, { Component } from "react";

import axios from "axios";
import api from "../../api";

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      item: null,
      editMode: false,
      name: '',
      price: 0
    };

    this.handleChange = this.handleChange.bind( this );
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { history } = this.props;
    
    axios.get( `${api.bin}/${id}` ).then( response => {
      if ( !response.data ) {
        history.push(`/create/${id}`);
      } else {
        this.setState({ item: response.data[0] });
      }
    });
  }

  handleChange(prop, val) {
    this.setState({ [prop]: val });
  }

  render() {
    const { item, editMode, name, price } = this.state;
    const { history } = this.props;
    return (
      <div>
        { 
          item
          ?
            <div>
              <img src={ item.image } />
              {
                editMode
                ?
                  <div>
                    <input onChange={ (e) => this.handleChange('name', e.target.value) } value={name} />
                    <input onChange={ (e) => this.handleChange('price', e.target.value) } value={price} />
                    <button onClick={ () => this.handleChange('editMode', false) }> Save </button> 
                  </div>
                :
                  <div>
                    <p> Name: { item.name } </p>
                    <p> Price: ${ item.price.toFixed(2) } </p>
                    <button onClick={ () => this.handleChange('editMode', true) }> Edit </button>
                  </div>
              }
            </div>
          :
            null
        }
      </div>
    )
  }
}