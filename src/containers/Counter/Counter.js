import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterControlhandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => ({ counter: prevState.counter + 1}))
                break;
            case 'dec':
                this.setState((prevState) => ({ counter: prevState.counter - 1}))
                break;
            case 'add':
                this.setState((prevState) => ({ counter: prevState.counter + value}))
                break;
            case 'sub':
                this.setState((prevState) => ({ counter: prevState.counter - value}))
                break;                     
            default:
                break;
        }
    }  

    render() {

        return (
        <div>
            <CounterOutput value={this.state.counter} />
            <CounterControl label="Increment" clicked={() => this.counterControlhandler('inc')}/>
            <CounterControl label="Decrement" clicked={() => this.counterControlhandler('dec')}/>
            <CounterControl label="Add 5" clicked={() => this.counterControlhandler('add', 5)} />
            <CounterControl label="Subtract 5" clicked={() => this.counterControlhandler('sub', 5)} />
        </div>
        );
    
    }
}



export default Counter;