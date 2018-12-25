import React, { Component } from 'react';
import Reaction from './reaction';


class Table extends Component {

    changeRate = (count) => {

    }
    render() {
        return (
            
            <div className="container">
            
                <div className="row">
                    
                    <div className="chart col s6 offset-s3 card hoverable ">
                        
                        <table className="highlight">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Restrurant</th>
                                    <th>Location</th>
                                    <th>Price</th>
                                    <th>Rating</th>
                                    <th>like/dislike</th>
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
                                        <td>{e.rating} </td>
                                        <td><Reaction/></td>
                                        
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