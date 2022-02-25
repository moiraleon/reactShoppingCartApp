import React, { Component } from 'react';


class Counter extends Component {
    state={
        count:0,
    };

    // styles ={
    //     fontSize: 10, //automatically appends px
    //     fontWeight: 'bold',

    // }
    //can use styles tag like so{/* style={this.styles} or do in line style style={{fontSize:30}} */} 

    render() { 
        return (
        <React.Fragment>
            <span className='badge badge-primary m-2'>{this.formatCount()}</span> 
            <button className='btn btn-secondary btn-sm'>Increment</button>
        </React.Fragment>
        );
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
};

 
export default Counter;