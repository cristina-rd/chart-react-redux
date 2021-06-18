import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].payload.atm}`}</p>
        <p className="label">{`X: ${payload[0].payload.name}`}</p>
        <p className="label">{`Y: ${payload[0].payload.uv}`}</p>
      </div>
    );
  }

  return null;
}

export default class Chart extends Component {
  render() {
    return (
      <LineChart
        width={900}
        height={450}
        data={this.props.data}
        margin={{
          top: 5,
          right: 60,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
