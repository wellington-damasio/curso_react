import MyComponent from './MyComponent'

const FirstComponent = () => {
  // Parte da função em JavaScript

  return(
    <div>
      <h3>Meu primeiro componente</h3>
      <p className="some"></p>
      {/* Aqui ja é JSX... */}
      <MyComponent/>
    </div>
  )

}

export default FirstComponent