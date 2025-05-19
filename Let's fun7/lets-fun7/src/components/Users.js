
function Users({users}) {
    return(
        <div className="centred-container">
            <h2>Lista de Usuários</h2>
            <ul>
            {users.map((user, index) => (
                <li key={index}>{user.name} - {user.email}</li>
            ))}
            </ul>
      </div>
    )
}

export default Users