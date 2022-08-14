export const PropertyCard = ({ property }) => {
  const { name, address, image } = property;

  return (
    <div className='property-card-container'>
      <h2>{property.name}</h2>
      <p>{ address }</p>
      <img src={image} alt={name} width='400' height='400' />
    </div>
  )
}