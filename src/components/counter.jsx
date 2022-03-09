import React, { Component } from 'react';


class Counter extends Component {
    state={
        count:0,
        //tags: ['tag1','tag2','tag3']
    };


    //binding this object to allow handleIncrement to access 'this' from counter
        //OPTION 1(binding) -reliable (Option 2(inheriting) is the arrow function in handle increment which is still experimental Before handleIncrement(){ After handleIncrement = () => {)
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)//have to write this line for every event handler to bind the tis object to each event
    // }

    handleIncrement = product => {  //naming convention for reactive elements is "handleSomething"
        //this.state.count++; //this technically increases the count but is not recognized by react
        
        console.log(product);
        this.setState({count: this.state.count + 1}) //this statement tells react that the state of this component will change - then later the render method will be called
    }

    // styles ={
    //     fontSize: 10, //automatically appends px
    //     fontWeight: 'bold',

    // }
    //can use styles tag like so{/* style={this.styles} or do in line style style={{fontSize:30}} */} 



    render() { 
        return (
        <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
            <button 
            onClick={()=> this.handleIncrement(product)} 
            className='btn btn-secondary btn-sm'
            >
                Increment
                </button>

            { <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul> }
        </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
};

 
export default Counter;