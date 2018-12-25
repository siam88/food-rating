import React, { Component } from 'react'
import Form from './form';
export class Navbar extends Component {
    displayOn = () => {
        document.getElementById("form").style.display = "initial";
    }
    render() {
        return (
            <div>

                <nav>
                    <div className="nav-wrapper">
                        <a href="" className="brand-logo center" >Food Rating App</a>
                        <ul className="right hide-on-med-and-down">

                            <li><a href="badges.html" ><i className="material-icons left" onClick={this.displayOn}></i>Add New Item</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar