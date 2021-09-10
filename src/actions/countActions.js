import {ADD, SUBTRACT} from "./types";

export const increment = nr => {
    return {
        type: ADD,
        payload: nr
    }
}

export const decrement = nr => {
    return {
        type: SUBTRACT,
        payload: nr
    }
}