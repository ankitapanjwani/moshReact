// import Navbar from "./components/navbar";
import React, { createContext, useReducer } from "react";
// import Counters from "./components/counters";
// import Example from "./components/myExample";
// import HooksMouseEvent from "./components/HooksMouseEvent";
// import MouseContainer from "./components/MouseContainer";
// import IntervalCounterHooks from "./components/IntervalCounterHooks";
// import FetchHooks from "./components/FetchHooks";
// import ComponentA from "./components/ComponentA";
// export const UserContext = createContext();
// import Counter1 from "./components/Counter1";
// import Counter2 from "./components/Counter2";
// import Counter3 from "./components/Counter3";
import CompoA from "./components/ReducerWithContext/CompoA";
import CompoB from "./components/ReducerWithContext/CompoB";
import CompoC from "./components/ReducerWithContext/CompoC";
import Check from './components/Check';
import DataFetching from './components/DataFetchingUseReducer/DataFetchingUsingState';
import DataFetchingUsingReducer from './components/DataFetchingUseReducer/DataFetchingUsingReducer';
export const CountContext = createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
 


  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      {/* <Navbar totalCounters={this.state.counters.filter(c => c.value >0).length}></Navbar> */}
      {/* <main className="container"> */}
      {/* <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} onDecrement={this.handleDecrement}></Counters> */}
      {/* </main> */}
      {/* <ClassCounter></ClassCounter> */}
      {/* <Example /> */}

      {/* <HooksMouseEvent />
       */}

      {/* <MouseContainer /> */}
      {/* <IntervalCounterHooks /> */}
      {/* <FetchHooks/> */}

      {/* <ThemeContext.Provider value={themes.dark}> */}

      {/* <ComponentA />   */}

      {/* </ThemeContext.Provider> */}
      {/* <Counter1/> */}

      {/* <Counter2/> */}
      {/* <Counter3 /> */}
      {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        Count: {count}
        <CompoA />
        <CompoB />
        <CompoC />
      </CountContext.Provider> */}
      {/* <DataFetching /> */}
      <DataFetchingUsingReducer />
    </React.Fragment>
  );
}

export default App;

















// const themes = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee",
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222",
//   },
// };




 // state = {
  //   counters: [
  //     {
  //       id: 1,
  //       value: 4
  //     },
  //     {
  //       id: 2,
  //       value: 0
  //     },
  //     {
  //       id: 3,
  //       value: 0
  //     },
  //     {
  //       id: 4,
  //       value: 0
  //     },
  //     {
  //       id: 5,
  //       value: 0
  //     }
  //   ]
  // };

  // //delete counter
  // handleDelete = id => {
  //   // console.log("Delete Event handler called..", id);
  //   const counters = this.state.counters.filter(c => c.id !== id);
  //   this.setState({ counters });
  // };

  // //incrment counter
  // handleIncrement = counter => {
  //   const counters = [...this.state.counters];
  //   let index = counters.indexOf(counter);
  //   // console.log(index);
  //   counters[index].value++;

  //   // console.log(this.state.counters[index]);
  //   this.setState({ counters });
  // };

  // handleDecrement = counter =>{
  //   const counters = [...this.state.counters];
  //   let index  = counters.indexOf(counter);

  //   counters[index].value--;
  //   this.setState({counters});
  // };

  //reset counter
  // handleReset = () => {
  //   const counters = this.state.counters.map(c => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };

  // console.log("in render");