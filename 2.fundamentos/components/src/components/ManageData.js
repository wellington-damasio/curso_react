import { useState } from 'react'

const ManageData = () => {
  const [number, setNumber] = useState(15)

  return (
    <div>
      <p>Valor: {number}</p>

      <button onClick={() => setNumber(22)}>Mudar número</button>
    </div>
  )
}

export default ManageData