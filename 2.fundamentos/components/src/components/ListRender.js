import { useState } from "react"

const ListRender = () => {
  const [list] = useState(['Matheus', 'Pedro', 'Paulo'])

  const [users, setUsers] = useState([
    {id: 1, name: 'Wellington', age: 19},
    {id: 2, name: 'Rafaela', age: 39},
    {id: 3, name: 'Samuel', age: 11},
    {id: 4, name: 'Livia', age: 32},
    {id: 5, name: 'Anestor', age: 65},
    {id: 6, name: 'Tamara', age: 18}
  ])

  const deleteRandom = () => {
    let max = users.length + 1
    let min = 1

    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)

    setUsers((prevUsers) =>{
      return prevUsers.filter(user => randomNumber !== user.id)
    })
  }

  return(
    <div>
      <ul>
        {list.map((item, index) => ( <li key={index}>{item}</li> ))}
        {users.map( user => ( <li key={user.id}> {user.name} - {user.age} </li>))}
      </ul>
      <button onClick={deleteRandom}>Delete radom user</button>
    </div>
  )
}

export default ListRender