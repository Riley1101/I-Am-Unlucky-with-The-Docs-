import React, { useContext } from 'react'
import './index.css'
import ThemeContext from './context'
const A = () => {
    const value = useContext(ThemeContext)

    return (
        <div>
            <h1>Context test</h1>
            {value}
        </div>

    )
}


export default A;