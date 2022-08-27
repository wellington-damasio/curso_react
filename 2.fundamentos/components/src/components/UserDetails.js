const UserDetails = ({firstName, lastName, age, profession}) => {
  let fullName = `${firstName} ${lastName}`

  return (
    <div>
      <h2>{fullName}</h2>
      <ul>
        <li>Nome: {firstName}</li>
        <li>Sobrenome: {lastName}</li>
        <li>Idade: {age}</li>
        <li>Profissão: {profession}</li>
      </ul>
    </div>
  )
}

export default UserDetails