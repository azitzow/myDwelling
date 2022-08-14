import { useNavigate } from 'react-router-dom';

export const PropertyCard = ({ property, onDelete }) => {
  const { id, name, address, image } = property;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/propertyPage/${id}`);
  };

  const handleDelete = () => {
    fetch(`/properties/${id}`, {
      method: 'DELETE',
    })
    .then(alert('Successfully deleted this Dwelling!'))
    .then(onDelete(id));
  };

  return (
    <div className='property-card-container'>
      <h2>{ property.name }</h2>
      <p>{ address }</p>
      <img src={image} alt={name} width='500' height='400' />
      <p>
        <button onClick={ handleClick }>View/Edit Dwelling</button>
        <button onClick={ handleDelete }>Delete Dwelling</button>
      </p>

    </div>
  )
}