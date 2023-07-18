import React,{Component} from "react";

class settingAttributes extends Component {
    state={
        count:0,
        
    };
    render() { 
        return(
            <div>
                {/* <img src={this.state.imageUrl} alt="" /> */}
                <span>{this.formatCount()}</span><br />
                <button>Increment</button>
            </div>
        ); 
    }
    formatCount(){
        const{count}=this.state;
        return count === 0? "Zero":count;
    }
}
 
export default settingAttributes;