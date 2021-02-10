
import Navbar from './components/navbar';
import React, { Component } from 'react';
import Counters from './components/counters';


class App extends Component {
  constructor( props){
    super(props);
    console.log('App-constructor', this.props);
  }

  componentDidMount(){
      //Ajax call

      console.log("component mount");
  }

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

  handleDecrement = counter =>{
    const counters = [...this.state.counters];
    let index  = counters.indexOf(counter);

    counters[index].value--;
    this.setState({counters});
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
    console.log("in render");
    return ( 
      <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c => c.value >0).length}></Navbar>
      <main className="container">
      <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} onDecrement={this.handleDecrement}></Counters>
      </main>
      {/* <ClassCounter></ClassCounter> */}
   
      </React.Fragment>
     );
  }
}
 
export default App;