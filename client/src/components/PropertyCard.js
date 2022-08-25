import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PropertyCard = ({ property, onDelete }) => {
  const [ myMaintenance, setMyMaintenance ] = useState([]);
  const { id, name, address, image } = property;
  const navigate = useNavigate();
  let cost = 0;

  let completedCosts = 0;

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

  useEffect(() => {
    fetch('/maintenances')
    .then(res => res.json())
    .then( (maintenance) => {
      setMyMaintenance(maintenance)
    })
  }, [])

  const maintenance = myMaintenance.forEach((maintenance) => {
    cost += maintenance.estimated_cost;
  })

  const completedMaintenance = myMaintenance.filter((maintenance) => maintenance.completed === true).forEach((element) => completedCosts += element.estimated_cost);

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
      <p>Estimated Maintenance Costs: ${ cost } </p>
      <p>Completed Maintenance Total: ${ completedCosts }</p>

    </div>
  )
}