const Display = ({ onClick, userdetails }) => {
    return (
        <div>
            {userdetails.map((user) => (
                <div key = {user.id} onClick = {onClick} className = "users">{user.name}</div>)
            )}
        </div>
    )
}

export default Display;