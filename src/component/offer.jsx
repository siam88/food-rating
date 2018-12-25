import React, { Component } from 'react'
import Reaction from './reaction';
export class Offer extends Component {
  render() {
    return (
        <div className="container">
            <h4>Food Offers :</h4>
            <hr /> 
            <div className="row">
                <div className="chart  card hoverable ">
                    <table className="highlight">
                        <thead>
                            <tr>
                                <th>Restaurent Name</th>
                                <th>Offers</th>
                                <th>Offer price</th>
                                <th>Previous Offer</th>
                                <th>Peoples reaction</th>
                               
                            </tr>
                        </thead>

                        <tbody>
                            {this.props.offerItems.map(e=>
                                <tr>
                                    <td>{e.restrurant}</td>
                                    <td>{e.name}</td>
                                    <td>{e.price}</td>
                                    <td>{e.offerPrice}</td>
                                    <td><Reaction/></td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    )
  }
}

export default Offer
