import React from 'react'
import './button.style.scss'

export default function Button (props) {
    return (
        <button>
            { props.children }
        </button>
    )
}


