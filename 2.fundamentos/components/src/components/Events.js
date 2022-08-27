const Events = () => {

  function handleMyEvent(event) {
    console.log(event)
    console.log('Ativamos o evento!')
  }

  const renderSomething = x => {
    if(x) {
      return <h3>Renderizando isso...</h3>
    } else {
      return <h3>Também posso renderizar isso!</h3>
    }
  }

  return(
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log('Botão clicado!')}>Clique aqui também!</button>
      </div>
      {renderSomething(true)}
    </div>
  )
}

export default Events