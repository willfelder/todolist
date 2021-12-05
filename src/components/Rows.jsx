import React, { Component } from 'react';

export default class Rows extends Component {
    constructor(props){
        super(props);
    }

    render = () => {
        return(
                <tr>
                  <td>{this.props.value.action}</td>
                  <td>
                    <input type="checkbox" checked={this.props.value.done} onChange={() => this.props.callback(this.props.value)} />
                  </td>
                </tr>
        )
    }
}