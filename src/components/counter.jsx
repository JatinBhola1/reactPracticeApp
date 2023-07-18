import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0
    };
    render() { 
        return(
            <div>
                <span style={{fontSize:50}}className='badge badge-primary m-2'>{this.formatCount()}</span><br />
                <button className='btn btn-Secondary'>Increment</button>
            </div>
        ); 
    }
    formatCount(){
        const{count}=this.state;
        return count === 0? "Zero":count;
    }
}
 
export default Counter;