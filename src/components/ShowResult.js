import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state =>({
    counterState: state.counterState
});

const ShowResult = props =>{
    const {counterState} = props;
    return(
        <p>Counter: {counterState.counter}</p>
    )
}

export default connect(mapStateToProps)(ShowResult);