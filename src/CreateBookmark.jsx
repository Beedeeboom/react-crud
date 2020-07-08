import React, { useState, useContext } from 'react'
import { StateContext } from './store'
import Axios from 'axios'

export default function CreateBookmark(props) {
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [description, setDescription] = useState("")
    const {state, dispatch} = useContext(StateContext)

    const onChange = (e) => {
        switch (e.target.name) {
            case "title": 
                setTitle(e.target.value)
                break
            case "url":
                setUrl(e.target.value)
                break
            case "description":
                setDescription(e.target.value)
                break
        }
    }

    const onSubmit = (e) => {
        const bookmark = { title, url, description }

        e.preventDefault() //prevents the page from reloading
        dispatch({
            type: "setBookmarks",
            data: [...state.bookmarks, bookmark]//expand out the existing bookmarks that we get from the state and add our new bookmark to it.
            //we end up with a new array with our element on the end of the array
        })
        Axios.post('http://localhost:4000/api/bookmarks', bookmark)
        .then(res => props.history.push('/bookmarks'))
        .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <input onChange={onChange} value={title} type="text" name="title" id="title" />
                <label htmlFor="url">URL</label>
                <input onChange={onChange} value={url} type="text" name="url" id="url" />
                <label htmlFor="description">Description</label>
                <textarea onChange={onChange} name="description" id="description" cols="30" rows="10">{description}</textarea>
                <button>Create</button>
            </form>
        </div>
    )
}
