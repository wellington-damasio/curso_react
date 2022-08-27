const Container = ({children}) => {
  return(
    <div className="border sm">
      <h3>Este é um container</h3>
      {children}
    </div>
  )
}

export default Container