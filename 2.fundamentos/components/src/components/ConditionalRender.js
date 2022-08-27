import { useState } from 'react'

const ConditionalRender = () => {
  const [x] = useState(false)

  const [name, setName] = useState("Gustavo")

  return(
    <div>
      <h1>Isse será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>No caso x é falso, então... Não!</p>}

      <h1>If ternário</h1>
      {name === "Wellington" ? (
        <div>
          <p>O meu nome é Wellington</p>
        </div>
      ) : (
        <div>
          <p>O meu nome não é Wellington</p>
        </div>
      )}

      <button onClick={() => setName("Wellington")}>Set name to Wellington</button>
    </div>
  )
}

export default ConditionalRender