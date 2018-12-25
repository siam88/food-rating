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
      { id: 1, name: "Chicken chese", type: "Fastfood", restrurant: "Takeout", location: "banani", price: "240", rating: 3 },
      { id: 2, name: "Chicken chese", type: "Fastfood", restrurant: "chillox", location: "banani", price: "240" ,rating: 5 },
      { id: 3, name: "Chicken chese", type: "Fastfood", restrurant: "Mr.manik", location: "Uttara", price: "240",rating: 4 }

    ],
    offerItems:[
      { id: 1, name: "Chicken chese delight", type: "Fastfood", restrurant: "chillox", location: "banani", price: "240", offerPrice: "150", rating: 5 },
      { id: 2, name: "Chicken chese delight", type: "Fastfood", restrurant: "manik", location: "dhanmondi", price: "240", offerPrice: "150", rating: 4 },
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
       
        <Offer offerItems={this.state.offerItems} />
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
