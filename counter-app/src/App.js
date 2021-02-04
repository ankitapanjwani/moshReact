
import Navbar from './components/navbar';
import React, { Component } from 'react';
import Counters from './components/counters';


class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      },
      {
        id: 5,
        value: 0
      }
    ]
  };

  //delete counter
  handleDelete = id => {
    // console.log("Delete Event handler called..", id);
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };

  //incrment counter
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    // console.log(index);
    counters[index].value++;
  
    // console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  //reset counter
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() { 
    return ( 
      <React.Fragment>
      <Navbar totalCounters={this.state.counters.length}></Navbar>
      <main className="container">
      <Counters onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} counters={this.state.counters}></Counters>
      </main>
      </React.Fragment>
     );
  }
}
 
export default App;