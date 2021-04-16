import React from 'react'

const User = props => {
    const { userList } = props
    return (
        <div>
            {userList.map(user => {
                return (
                    <div key={user.name}>
                        <h2>{user.name}</h2>
                        <h3>{user.email}</h3>
                        <h4>{user.password}</h4>
                        <h4>{user.tos}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default User;