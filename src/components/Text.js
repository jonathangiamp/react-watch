import React, { Component } from 'react';

export default class Text extends Component {
  render() {
    return (
      <text x={this.props.x} y={this.props.y} fontFamily="Verdana" fontSize={this.props.center * 0.35} fill={this.props.colour}>
         {this.props.time < 10 ? `0${this.props.time}` : this.props.time}
       </text>
    );
  }
}