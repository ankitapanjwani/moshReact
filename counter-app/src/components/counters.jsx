import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
 

  render() {
    return (
      <div>
        <div className="container">
          <button
            onClick={this.props.onReset}
            className="btn btn-primary btn-md mt-5"
          >
            Reset
          </button>
        </div>

        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            // value={counter.value}
            //  selected={true}
            //   id={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          >
            {/* <h4>Counter # {counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
