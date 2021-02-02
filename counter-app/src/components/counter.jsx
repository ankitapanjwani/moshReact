import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags:['tag1','tag2','tag3']
     // imgUrl: 'https://picsum.photos/200'
  };

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

    handleIncrement = () =>{

        this.setState({count: this.state.count + 1})
        
        // console.log("Increment Clicked", this);
    }

  render() {
    return (
      <React.Fragment>
        <h1 style={this.heading}>Counter App!!</h1>
        {/* <span class="ml-5">{this.state.count}</span> */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <span className={this.getBadgeClasses()} style={this.styles}>
                {this.formatCount()}
              </span>
              {this.state.tags.length ===0 && 'Please add a new tag...'}
                {this.rendertags()}

            </div>
            <div className="col-md-4">
              <button onClick={this.handleIncrement} class="btn btn-md btn-success ml-5">Increment</button>
            </div>

            {/* <img class="ml-5" src={this.state.imgUrl}/> */}
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    const x = <span>zero</span>;
    return count === 0 ? x : count;
  }

  rendertags(){
      if(this.state.tags.length === 0) return <p>There are no tags available!</p>

      return <ul>
      {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
  </ul>
  }
}

export default Counter;
