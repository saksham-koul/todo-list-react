import React, { useState } from 'react'

export default function FilterButton(props) {
    const [filter, setFilter] = useState("all")

    return (
        <button 
            type="button" 
            className="btn toggle-btn" 
            aria-pressed="true"
        >
            <span className="visually-hidden">Show </span>
            <span>{props.name}</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    )
}