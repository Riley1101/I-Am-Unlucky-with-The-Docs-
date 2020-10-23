import React from 'react'

const withAuth = (Component) => {
    return function AuthComponent({ isAuthenticated, ...props }) {

        return <div>
            {isAuthenticated === true ? <Component {...props} /> : <h3>Error no login !</h3>}
        </div>
    }
}

export default withAuth;