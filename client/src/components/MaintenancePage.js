import { useState, useEffect } from 'react';
import { MaintenanceCard } from './MaintenanceCard';
import { useParams } from 'react-router-dom';

export const MaintenancePage = ( { currentUser }) => {
  const [ myMaintenance, setMyMaintenance ] = useState([])
  const { propertyId } = useParams();

  useEffect(() => {
    if (propertyId !== undefined) {
      fetch(`/properties/${propertyId}/maintenance`)
        .then((res) => res.json())
        .then((data) => setMyMaintenance(data))
    }
  }, [propertyId]);

  const onDelete = (id) => {
    const updatedMaintenanceList = myMaintenance.filter((maintenance) => maintenance.id !== id);
    setMyMaintenance(updatedMaintenanceList)
  };

  const maintenance = myMaintenance.map((maintenance) => {
    return <MaintenanceCard key={maintenance.id} maintenance={ maintenance } onDelete={ onDelete }/>
  });

  return (
    <div>
      <h1>List of Maintenances</h1>
      { maintenance }
    </div>
  )
}