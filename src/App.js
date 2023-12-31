import React, { Component } from 'react';
import Navbar from './components/navbar';
import Multiple from './components/multiple';

import './App.css';

class App extends Component{
  state = {  
    counters:[
        {id:1,value:4 },
        {id:2,value:0 },
        {id:3,value:0 },
        {id:4,value:0 }
    ]
};
handleIncrement= counter=>{
    console.log(counter)
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters})
};
handleReset = () => {
    const counters=this.state.counters.map(c => {
        c.value=0;
        return c;
    });
    this.setState({counters});
}
handleDelete=(counterId)=>{
    console.log('Event Handler Called',counterId);
    const counters=this.state.counters.filter(c=>c.id!== counterId);
    this.setState({counters: counters}); //first one is the initial counters written in the state and second is the one with which it will be overwritten
}
  render(){
    return (
      <React.Fragment>
        <Navbar
        totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <main className="container">
        <Multiple 
           counters={this.state.counters}
           onReset={this.handleReset}
           onIncrement={this.handleIncrement}
           onDelete={this.handleDelete}
        /> 
        </main>
    </React.Fragment>
  );
}
}

export default App;
