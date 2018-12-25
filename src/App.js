import React, { Component } from 'react';
import './App.css';
import Navbar from './component/navbar';
import Form from './component/form';
import Footer from './component/footer';
import Table from './component/table';
class App extends Component {
  state = {
    items: [
      { id: 1, name: "kachi Birani ", type: "Appetizer", restrurant: "Molla Birani", location: "mirpur", price: "140", rating: 3 },
      { id: 2, name: "Chicken Birani", type: "Appetizer", restrurant: "star kabab", location: "banani", price: "260" ,rating: 5 },
      { id: 3, name: "Teheri", type: "Appetizer", restrurant: "salam kitchen", location: "Uttara", price: "280",rating: 4 }

    ],

    item: {
      id: null, name: "", type: "", restrurant: "", location: "", price: "", rating: ""
    }


  };
  inputName = e => {
    var item = { ...this.state.item };
    item.name = e.target.value;
    this.setState({ item })

  }

  inputType = e => {
    var item = { ...this.state.item };
    item.type = e.target.value;
    this.setState({ item })

  }

  inputRestrurant = e => {
    var item = { ...this.state.item };
    item.restrurant = e.target.value;
    this.setState({ item })

  }

  inputLocation = e => {
    var item = { ...this.state.item };
    item.location = e.target.value;
    this.setState({ item })

  }
  inputPrice = e => {
    var item = { ...this.state.item };
    item.price = e.target.value;
    this.setState({ item })

  }
  inputRate = e => {
    var item = { ...this.state.item };
    item.rating = e.target.value;
    this.setState({ item })

  }
  addItem = () => {
    var items = [...this.state.items]
    items.push(this.state.item);
    this.setState({ items });
    




  };
  render() {
    return (
      <div>

        <Navbar />
        <Table items={this.state.items} />
       
        
        <Form
          item={this.props.item}
          inputName={this.inputName}
          inputType={this.inputType}
          inputRestrurant={this.inputRestrurant}
          inputLocation={this.inputLocation}
          inputPrice={this.inputPrice}
          inputRate={this.inputRate}
          addItem={this.addItem}
        />
        
        <Footer/>
      </div>
    );
  }
}

export default App;
