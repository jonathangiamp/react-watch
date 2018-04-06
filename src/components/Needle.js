import React, { Component } from 'react';

export default class Needle extends Component {
  getX() {
    return this.props.needle.length * Math.cos(this.props.angle) + this.props.center;
  }
  getY() {
    return (-1) * this.props.needle.length * Math.sin(this.props.angle) + this.props.center;
  }
  render() {
    return (
        <line x1={this.props.center} y1={this.props.center} x2={this.getX()} y2={this.getY()} stroke={this.props.colour} strokeWidth={this.props.needle.width} />
    );
  }
}