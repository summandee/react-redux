import React from 'react'

const User = (props) => {
    const {value}= props
    return (
        <div>
            <h1>User component : {value.name}</h1>
            <h1>User component : {value.age}</h1>
            <h1>User component : {value.profe}</h1>

        </div>
    )
}

export default User
