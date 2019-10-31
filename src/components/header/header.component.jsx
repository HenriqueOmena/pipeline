import React from 'react'
import './header.style.scss'
import Button from '../button/button.component'

const Header = props =>  {
    return (
        <header>
            <Button> dentro do header </Button>
            { props.children }
        </header>
    )
}

export default Header
