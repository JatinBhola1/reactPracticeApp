import React, { Component } from 'react';
import UpdatingTheState from './updatingTheState';

class multiple extends Component {
     
    render() { 
        return (
            <div>
                <button
                  onClick={this.props.onReset}
                  className="btn btn-primary btn-sm m-2"
                >Reset</button>
                {this.props.counters.map(counter =>(
                <UpdatingTheState 
                    key={counter.id} 
                    onDelete={this.props.onDelete} 
                    onIncrement={this.props.onIncrement}
                    // value={counter.value} 
                    // id={counter.id}
                    counter={counter}
                    />
                    
                
                ))}

            </div>
        );
    }
}
 
export default multiple;