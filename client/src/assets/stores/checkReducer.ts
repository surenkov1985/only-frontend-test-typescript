import {SET_CHECKED, SET_NAME} from "./types"

interface initialStateType {
    checked: boolean,
    userName: string
}

const initialState:initialStateType = {
    checked: false,
    userName: ""
};

export const checkReducer = (state = initialState, action:any):initialStateType => {

    switch (action.type) {
        case SET_CHECKED:
            return {
                ...state,
                checked: action.auth
            };
        case SET_NAME:
            return {
                ...state,
                userName: action.name
            };
        default: return state
    }
};