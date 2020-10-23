import React from 'react'
import withAuth from "./withAuth.js";

const HOCWithAuth = (props) => {

    return (
        <div>

            This is only viewable  by authenticated users and
            <br></br>
            <b>Optional props Comes here</b>
            <br></br>
            <ul>
                <li> {props.optional}</li>
            </ul>

        </div>
    )
}

export default withAuth(HOCWithAuth);