import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
 

  render() {
    console.log("counterss rendered...");
    const {onDelete,onIncrement,onReset,counters,onDecrement} = this.props;
    return (
      <div>
        <div className="container">
          <button
            onClick={onReset}
            className="btn btn-primary btn-md mt-5"
          >
            Reset
          </button>
        </div>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            // value={counter.value}
            //  selected={true}
            //   id={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            {/* <h4>Counter # {counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
