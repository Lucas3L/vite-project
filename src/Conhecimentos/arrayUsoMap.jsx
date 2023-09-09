function ArrayUsoMap(){

    const users = [
        {
          name: 'Carlos',
          address: 'Rua X',
          age: 28,
          isAdmin: false,
        },
        {
          name: 'Maria',
          address: 'Rua XX',
          age: 31,
          isAdmin: true,
        },
        {
          name: 'Matheus',
          address: 'Rua XI',
          age: 22,
          isAdmin: false,
        }
      ]

    return(
        <>
            <div>
                {users.map((users) => (
                <div>Cliente: {users.name}. Mora em: {users.address}.
                Idade: {users.age}.</div>
                ))}
            </div>
        </>
    )
}
    export default ArrayUsoMap