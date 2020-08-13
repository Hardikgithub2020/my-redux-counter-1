import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/counterActions'

const mapStateToProps = state =>({
    counterState: state.counterState
});

class UserInput extends Component {
    constructor(props){
        super(props);
        const {dispatch} = props
        this.state = {
            dispatch: dispatch,
            customNumber: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick(event){
        switch(event.target.id){
            case 'add':{
                this.state.dispatch({type:actions.COUNTER_INCREMENT});
                break;
            }
            case 'sub':{
                this.state.dispatch({type:actions.COUNTER_DECREMENT});
                break;
            }
            case 'customAdd':{
                this.state.dispatch({type:actions.COUNTER_CUSTOMADD,payload:Number(this.state.customNumber)})
                const userCustomInput = document.querySelector('.customAdd');
                this.setState({customNumber:0})
                userCustomInput.value = 0;
                break;
            }
            case 'reset':{
                this.state.dispatch({type:actions.COUNTER_RESET});
                break;
            }
            default: console.log(`Can't read event: ${event.target.id}`);
        }
    }
    handleChange(event){
        const userCustomInput = document.querySelector('.customAdd');
        this.setState({customNumber:userCustomInput.value})
    }
    render(){
        return(
            <div>
                <button className="incrementers" id="add" onClick={this.handleClick}>Increment</button>
                <button className="incrementers" id="sub" onClick={this.handleClick}>Decrement</button>
                <br />
                <label>
                    Number:<input type="number" className="customAdd" value={this.state.customNumber} onChange={this.handleChange} /><button id="customAdd" onClick={this.handleClick}>Add</button>
                </label>
                <br />
                <button id="reset" onClick={this.handleClick}>Reset</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(UserInput);