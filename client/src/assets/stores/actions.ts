import { SET_CHECKED, SET_NAME } from "./types"

type actionsType = {
    type: string
    auth?: boolean
    name?: string
}



export const setChecked = (auth: boolean):actionsType => {

    return {
        type: SET_CHECKED,
        auth
    }
};

export const setName = (name:string):actionsType => {

    return{
        type: SET_NAME,
        name
    }
};