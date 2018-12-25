import React, { Component } from 'react';

class Form extends Component {
    displayOff =()=>{
        document.getElementById("form").style.display="none";
    }
    render() {
        return (



            <div className="row ">
            <div id="form">
            
                <div className="valign-wrapper row" >
                
                    <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4 mainForm">
                        <h4 className="center">New Food Item</h4>
                        <hr/>
                            <button className="btn waves-effect waves-light right" type="submit" onClick={this.displayOff} name="action" >Hide
                                  
                            </button>
                        <div className="input-field col s12 ">
                            
                            <input id="last_name" type="text" className="validate" onChange={e => this.props.inputName(e)}
                            />
                            <label for="last_name">InputName</label>
                        </div>

                            <div className="input-field col s12">
                            
                            <input id="last_name" type="text" className="validate" onChange={e => this.props.inputType(e)} />
                            <label for="last_name">Item Type</label>
                        </div>

                            <div className="input-field col s12">
                            
                            <input id="last_name" type="text" className="validate" onChange={e => this.props.inputRestrurant(e)} />
                            <label for="last_name">Restrurant Name</label>
                        </div>

                            <div className="input-field col s12">
                           
                            <input id="last_name" type="text" className="validate" onChange={e => this.props.inputLocation(e)}
                            />
                            <label for="last_name">Location</label>
                        </div>
                            <div className="input-field col s12">
                            
                            <input id="last_name" type="text" className="validate" onChange={e => this.props.inputPrice(e)} />
                            <label for="last_name">Price</label>
                        </div>
                            <div className="input-field col s12">
                           
                            <input id="last_name" type="text" className="validate" onChange={e => this.props.inputRate(e)} />
                            <label for="last_name">Rating(input should be in number)</label>
                        </div>
                        
                        <div className="input-field col s12 ">
                            <button className="btn waves-effect waves-light right" type="submit" onClick={this.props.addItem} name="action">Submit
                                 
                            </button> 
                                

                              
                        </div>

                    </div>
                </div>
                </div>
            </div>


        );
    }
}

export default Form;