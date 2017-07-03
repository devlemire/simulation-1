import React, { Component } from "react";

import axios from "axios";
import api from "../../api";

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      item: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get( `${api.bin}/${id}` ).then( response => {
      this.setState({ item: response.data });
    })
  }

  render() {
    console.log( this.state );
    const { item } = this.state;
    return (
      <div>
        { 
          item
          ?
            <div>
              Item found
            </div>
          :
            null
        }
      </div>
    )
  }
}