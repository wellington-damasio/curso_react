const CarDetails = ({brand, model, color, km}) => {
  return(
    <div>
      <h2>Car Details</h2>
      <ul>
        <li>Brand: {brand}</li>
        <li>Model: {model}</li>
        <li>Color: {color}</li>
        <li>Already Runned: {km} Km/h</li>
      </ul>
    </div>
  )
}

export default CarDetails