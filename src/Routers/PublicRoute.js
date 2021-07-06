import React from 'react'

import { Route, Redirect } from "react-router-dom"

function PublicRoute({
    component: Component,
    isAuth,
    restricted,
    ...rest
}) {
    return ( <
        Route {...rest }
        component = {
            (props) =>
            isAuth && restricted ? ( <
                Redirect to = "/login" / >
            ) : ( <
                Component {...props }
                />

            )
        }
        />
    );
}
export default PublicRoute;