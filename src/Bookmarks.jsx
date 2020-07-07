import React, { useContext } from 'react'
import { StateContext } from './store'

export default function Bookmarks() {
    const {state, dispatch} = useContext(StateContext) //StateContext stores the value from the child component
    return (
        <div>
            <h1>Bookmarks</h1>
        </div>
    )
}