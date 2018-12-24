import React, { Component } from 'react';
import Rating from './rating';

class Table extends Component {

    changeRate = (count) => {

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="chart  card hoverable ">
                        <table className="highlight">
                            <thead>
                                <tr>
                                    <th>Item Name</th>
                                    <th>Item Type</th>
                                    <th>Restrurant Name</th>
                                    <th>Location</th>
                                    <th>Item Price</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.props.items.map(e =>
                                    <tr>
                                        <td>{e.name}</td>
                                        <td>{e.type}</td>
                                        <td>{e.restrurant}</td>
                                        <td>{e.location}</td>
                                        <td>{e.price}</td>
                                        <td><Rating changeRate={e.rating} /></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        );
    }
}

export default Table;