import { createContext } from "react"

const StateContext = createContext()

const stateReducer = (state, action) => {
    switch (action.type) {
        case 'setBookmarks': 
            return {
                ...state, //will expand out the existing value of the state
                bookmarks: action.data
            }
        default: 
            return state //default returns the state unchanged
    }
}

export { StateContext, stateReducer }