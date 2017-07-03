import React, { Component } from "react";
import Bin from './Bin/Bin';

import api from "../../api";
import axios from "axios";

export default class Bins extends Component {
  constructor() {
    super();
    this.state = {
      bins: [ null, { test: true }, null, { test: true }, null ]
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get( `${api.shelf}/${id}` ).then( response => {
      this.setState({ bins: response.data });
    });
  }

  render() {
    const { id } = this.props.match.params;
    const { bins } = this.state;
    const Bins = bins.map( (bin, i) => (
      <Bin number={ i + 1 } binLink={ `/bin/${id}${ i + 1 }` } createLink={ `/create/${id}${ i + 1 }` } obj={ bin } />
    ));
    
    return (
      <div>
        { Bins }
      </div>
    )
  }
}