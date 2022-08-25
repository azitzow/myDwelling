import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MaintenancePage = ( { currentUser, categories }) => {
  const { propertyId } = useParams();
  const [ myMaintenance, setMyMaintenance ] = useState([]);

  useEffect(() => {
    if (propertyId !== undefined) {
      fetch(`/properties/${propertyId}/maintenance`)
        .then((res) => res.json())
        .then((data) => {
          setMyMaintenance(data)
        })
    }
  }, [propertyId]);

  return (
    <div className='maintenance-page-container'>
      <h1>List of Maintenances</h1>

      {categories.map(category => {
        return (
          <section key={category.id}>
            <h2>{category.title}</h2>
            <ul>
              {
                myMaintenance
                  .filter(maintenance => maintenance.category_id === category.id)
                  .map(maintenance => <MaintenanceLineItem key={maintenance.id} maintenance={maintenance} propertyId={propertyId}/>)
              }
            </ul>
          </section>
          );
      })}
    </div>
  );
}

const MaintenanceLineItem = ({maintenance, propertyId}) => {
  const [ ischecked, setIsChecked ] = useState(maintenance.completed);

  const toggleCompleted = (e) => {
    fetch(`/properties/${propertyId}/maintenance/${maintenance.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ completed: !ischecked })
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((json) => setIsChecked(!ischecked))
        } else {
          res.json().then((data) => {
            alert(data.errors)
            setIsChecked(!ischecked)
          });
        }
      });
  }

  return (<li>
    <input
      type="checkbox"
      name={maintenance.name}
      value={maintenance.id}
      checked={ ischecked }
      onChange={toggleCompleted}
      />
    <span>(${maintenance.estimated_cost || 0}) </span>
    <label htmlFor={maintenance.name}>{maintenance.name}</label>
  </li>)
}