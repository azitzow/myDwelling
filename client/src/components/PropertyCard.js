import { useNavigate } from 'react-router-dom';

export const PropertyCard = ({ property, onDelete }) => {
  const { id, name, address, image } = property;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/propertyPage/${id}`);
  };
  const handleOnClick = () => {
    navigate(`/maintenancePage/${id}`);
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
        <button onClick={ handleOnClick }>View My Maintenance List</button>
      </p>
      <p>Estimated Maintenance Costs: $900,000 @ToDo</p>
      <p>Completed Maintenance Total: $55 @ToDo</p>

    </div>
  )
}