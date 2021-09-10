import { ADD, SUBTRACT } from "../actions/types";

const initialState = {
    count: 10
}

export default function countReducer(state = initialState, action) {
    switch (action.type) {
        case ADD: {
            console.log(...state);
            return {
                ...state,
                count: state.count + action.payload
            }
        }
        case SUBTRACT: {
            return {
                ...state,
                count: state.count - action.payload
            }
        }
        default:
            return state
    }
}