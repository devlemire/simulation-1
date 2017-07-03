import React, { Component } from "react";
import Bin from './Bin/Bin';

export default class Bins extends Component {
  render() {
    const { id } = this.props.match.params;
    console.log( this.props )
    return (
      <div>
        <Bin number="1" binLink={ `/bin/${id}1` } createLink={ `/create/${id}1` } obj={ { test: true } } />
        <Bin number="2" binLink={ `/bin/${id}2` } createLink={ `/create/${id}2` } obj={ null } />
        <Bin number="3" binLink={ `/bin/${id}3` } createLink={ `/create/${id}3` } obj={ { test: true } } />
        <Bin number="4" binLink={ `/bin/${id}4` } createLink={ `/create/${id}4` } obj={ null } />
        <Bin number="5" binLink={ `/bin/${id}5` } createLink={ `/create/${id}5` } obj={ null } />
      </div>
    )
  }
}