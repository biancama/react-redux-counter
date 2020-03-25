import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';
class Counter extends Component {
    
    render() {

        return (
        <div>
            <CounterOutput value={this.props.ctr} />
            <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
            <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
            <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)} />
            <CounterControl label="Subtract 5" clicked={() => this.props.onSubCounter(5)} />
            <hr />
            <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Strore Result</button>
            <ul>
        {this.props.storedResults.map(strRes => <li key={strRes.id} onClick={() => this.props.onDeleteResult(strRes.id)}>{strRes.value}</li>)}                
            </ul>
        </div>
        );
    
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: (value) => dispatch(actionCreators.add(value)),
        onSubCounter: (value) => dispatch(actionCreators.sub(value)),
        onStoreResult: (result) => dispatch(actionCreators.store(result)), 
        onDeleteResult: (id) => dispatch(actionCreators.del(id)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);