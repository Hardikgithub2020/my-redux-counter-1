import * as actions from '../actions/counterActions';

export const initialState ={
    counter: 0
};

export default function counterReducer(state=initialState,action){
    switch(action.type){
        case actions.COUNTER_INCREMENT:
            return {counter: state.counter + 1};
        case actions.COUNTER_DECREMENT:
            return {counter: state.counter - 1};
        case actions.COUNTER_CUSTOMADD:
            return {counter: state.counter + action.payload};
        case actions.COUNTER_RESET:
            return initialState;
        default: return state;
    }
};