import React, { Component } from 'react';

export default class Circle extends Component {
  render() {
    return (
      <circle cx={this.props.center} cy={this.props.center} r={`${this.props.radius}%`} fill={this.props.colour} onClick={() => this.props.onClick()} />
    );
  }
}