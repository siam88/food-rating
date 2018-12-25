import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Rafshanul Hoque Siam</h5>
                        <p className="grey-text text-lighten-4">This is a simple food rating app</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>

                            <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/rafsanulhaquesiam.siam">FACEBOOK</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2018 Copyright Rafshanul Hoque Siam
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer
