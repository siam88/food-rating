import React, { Component } from 'react';
import './App.css';
import Navbar from './component/navbar';
import Form from './component/form';
import Footer from './component/footer';
import Table from './component/table';
import Offer from './component/offer';
class App extends Component {
  state = {
    items: [
      { id: 1, name: "Chicken chese", type: "burger", restrurant: "chillox", location: "banani", price: "240", rating: 2 },
      { id: 2, name: "Chicken chese", type: "burger", restrurant: "chillox", location: "banani", price: "240", rating: 2 },
      { id: 3, name: "Chicken chese", type: "burger", restrurant: "chillox", location: "banani", price: "240", rating: 1 }

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
        <Table items={this.state.items}
        />
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
        <Offer/>
        <Footer/>
      </div>
    );
  }
}

export default App;
