import React, { useContext } from 'react'
import { StateContext } from './store'
import { Link } from 'react-router-dom'

export default function Bookmarks() {
    const { state, dispatch } = useContext(StateContext)

    return (
        <div>
            <h1>Bookmarks</h1>
            <Link to="/bookmarks/new">New Bookmark</Link>
            {
                state.bookmarks.map((bookmark, index) => (
                    <article key={index}>
                        <h3>{bookmark.title}</h3>
                        <p>{bookmark.description}</p>
                        <a href={bookmark.url} target="_blank">{bookmark.url}</a>
                    </article>
                ))
            }
        </div>
    )
}
