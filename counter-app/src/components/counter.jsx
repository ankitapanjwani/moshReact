import React, { Component } from "react";

class Counter extends Component {
  
// componentDidUpdate(prevProps,prevState){
//   // console.log("in did update");
//   console.log('prevprops', prevProps);
//   console.log('prevstate', prevState);
//   if(prevProps.counter.value !==  this.props.counter.value){
//     // ajax call
//   }
// }
// componentWillUnmount(){
//   console.log("counter unmount");
// }

  styles = {
    fontSize: 25,
    textAlign: "center"
  };
  heading = {
    marginTop: 5,
    textAlign: "center"
  };


//   use callback unction to get value of this in event handlers
        //   constructor(){
        //       super();
        //       this.handleIncrement = this.handleIncrement.bind(this);
        //   }

    // handleIncrement = () =>{
   
    //     this.setState({value: this.state.value + 1})
        
    //     // console.log("Increment Clicked", this);
    // }
    
  render() {
    console.log("counter rendereed..");
const {counter,onDelete,onIncrement,onDecrement} = this.props;
    // console.log('props', this.props);  
    return (
      <React.Fragment>
        {/* <h1 style={this.heading}>Counter App!!</h1> */}
        {/* <span class="ml-5">{this.state.count}</span> */}
        <div className="container mt-5">
        {/* <h4>Counter #{this.props.id}</h4> */}
        {/* {this.props.children} */}
          <div className="row">
            <div className="col-md-4">
              <span className={this.getBadgeClasses()} style={this.styles}>
                {this.formatCount()}
              </span>
              {/* {this.state.tags.length ===0 && 'Please add a new tag...'} */}
                {/* {this.rendertags()} */}

            </div>
            <div className="col-md-4">
              <button onClick={() =>{onIncrement(counter)}} className="btn btn-md btn-success ml-5">+</button>
              <button onClick={() =>{onDecrement(counter)}} className="btn btn-md btn-secondary ml-5"  disabled = {counter.value===0 ? "disabled": null}>-</button>
              <button onClick={()=> {onDelete(counter.id)}} className="btn btn-md btn-danger ml-5">x</button>

            </div>

            {/* <img class="ml-5" src={this.state.imgUrl}/> */}
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    const x = <span>zero</span>;
    return value === 0 ? x : value;
  }

//   rendertags(){
//       if(this.state.tags.length === 0) return <p>There are no tags available!</p>

//       return <ul>
//       {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
//   </ul>
//   }
}

export default Counter;
