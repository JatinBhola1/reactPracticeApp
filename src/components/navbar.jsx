import React, { Component } from 'react';

//Class Component
class Navbar extends Component {
    
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge bdge-pill badge-secondary">{this.props.totalCounters}</span>
            </a>
            </nav>
        );
    }
}

//Stateless Functional Component
// const Navbar=(props)=>{
//     return (
//         <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//             Navbar <span className="badge bdge-pill badge-secondary">{props.totalCounters}</span>
//         </a>
//         </nav>
//     );
// }
 
export default Navbar;