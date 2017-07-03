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
    this.save = this.save.bind( this );
    this.delete = this.delete.bind( this );
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { history } = this.props;
    
    axios.get( `${api.bin}/${id}` ).then( response => {
      const { data } = response;
      if ( !data ) {
        history.push(`/create/${id}`);
      } else {
        this.setState({ item: data, name: data.name, price: data.price });
      }
    });
  }

  handleChange(prop, val) {
    this.setState({ [prop]: val });
  }

  save() {
    const { price, name } = this.state;
    const { id } = this.props.match.params;
    if ( isNaN( price ) ) {
      return
    } else {
      axios.put( `${api.bin}/${id}`, { name, price: parseInt( price ) } ).then( response => {
        const { data } = response;
        this.setState({ item: data, name: data.name, price: data.price, editMode: false });
      });
    }
  }

  delete() {
    const { id } = this.props.match.params;
    const { history } = this.props;
    axios.delete( `${api.bin}/${id}` ).then( response => {
      history.push( `/bins/${id[0]}` );
    });
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
                    <button onClick={ this.save }> Save </button> 
                  </div>
                :
                  <div>
                    <p> Name: { item.name } </p>
                    <p> Price: ${ item.price.toFixed(2) } </p>
                    <button onClick={ () => this.handleChange('editMode', true) }> Edit </button>
                  </div>
              }
              <button onClick={ this.delete }> Delete </button>
            </div>
          :
            null
        }
      </div>
    )
  }
}