import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Food Rating app</h5>
                        <p className="grey-text text-lighten-4">This is a simple app assigned in Web and Internet Programming</p>
                    </div>
                   
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2018 Copyright Md. Imran Khan
            
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer
