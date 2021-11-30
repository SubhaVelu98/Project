import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const reducer = (state, action) => {
    //state==={count:number}
    //action==={type:'increamnt'||'decrement',amount:1}
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.amount };
        case 'decrement':
            return { ...state, count: state.count - action.amount };
        default:
            return state;
    }
};
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    // const { count } = state;
    return <View>
        <Button title="Increase" onPress={() => {
            dispatch({ type: 'increment', amount: 1 })
        }}
        />
        <Button title="Decrease" onPress={() => {
            dispatch({ type: 'decrement', amount: 1 })
        }} />
        <Text>Current count:{state.count}</Text>
    </View>
}
const styles = StyleSheet.create({});

export default CounterScreen;