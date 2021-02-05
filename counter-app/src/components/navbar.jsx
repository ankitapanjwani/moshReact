import React from 'react';
//Statless Functional Component
const Navbar = ({totalCounters}) =>{
    console.log('navbar rendered');
    return ( 
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
            Number of Counters:  #<span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </a>
       
        </nav> 
      
      );
}

 
export default Navbar;