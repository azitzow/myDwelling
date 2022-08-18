import MoveIn from '../images/move-in.png';
import Checklist from '../images/checklist.jpeg';

export const MaintenanceCard = ( { maintenance, onDelete }) => {
  const { name, description, category } = maintenance;

  return (
    <div>
      <h3>{ name }</h3>
      <p>{`Category Type: ${ category }`}</p>
      <p>{`Action: ${ description }`}</p>
      { name === 'Move-In' ? <img src={ MoveIn } alt={ MoveIn } width='500' height='400'/> : null }
      { name === 'Monthly Maintenance Checklist' ? <img src={ Checklist } alt={ Checklist } width='500' height='400'/> : null }
    </div>
  );
};