export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const COUNTER_CUSTOMADD = 'COUNTER_CUSTOMADD';
export const COUNTER_RESET     = 'COUNTER_RESET';

export const counterIncrement = () =>({
    type: COUNTER_INCREMENT
});
export const counterDecrement = () =>({
    type: COUNTER_DECREMENT
});
export const counterCustomAdd = (val) =>({
    type: COUNTER_CUSTOMADD,
    payload: val
});
export const counterReset = () =>({
    type: COUNTER_RESET
});