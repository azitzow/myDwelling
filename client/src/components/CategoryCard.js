import MoveIn from '../images/move-in.png';
import Checklist from '../images/checklist.jpeg';
import FallInterior from '../images/Interior fall.webp';
import FallExterior from '../images/exterior fall maintenance.webp';
import WinterInterior from '../images/winter interior.webp';
import WinterExterior from '../images/winter-exterior.jpeg';
import SpringInterior from '../images/Spring interior maintenance.jpeg';
import SpringExterior from '../images/spring exterior maintenance.jpeg';
import SummerExterior from '../images/summer exterior maintenance.webp';
import SummerInterior from '../images/summer interior maintenance.webp';

export const CategoryCard = ({ category }) => {
  const { title } = category;

  return (
    <div className='category-card-container'>
      <h4>{ title }</h4>
      { title === 'Move-In' ? <img src={ MoveIn } alt={ MoveIn } width='300' height='200'/> : null }
      { title === 'Monthly Maintenance Checklist' ? <img src={ Checklist } alt={ Checklist } width='300' height='200'/> : null }
      { title === 'Fall Exterior Home Maintenance' ? <img src={ FallExterior } alt={ FallExterior } width='300' height='200'/> : null }
      { title === 'Fall Interior Home Maintenance' ? <img src={ FallInterior } alt={ FallInterior } width='300' height='200'/> : null }
      { title === 'Winter Exterior Maintenance Checklist' ? <img src={ WinterExterior } alt={ WinterExterior } width='300' height='200'/> : null }
      { title === 'Winter Interior Maintenance Checklist' ? <img src={ WinterInterior } alt={ WinterInterior } width='300' height='200'/> : null }
      { title === 'Spring Exterior Maintenance Checklist' ? <img src={ SpringExterior } alt={ SpringExterior } width='300' height='200'/> : null }
      { title === 'Spring Interior Maintenance Checklist' ? <img src={ SpringInterior } alt={ SpringInterior } width='300' height='200'/> : null }
      { title === 'Summer Exterior Maintenance Checklist' ? <img src={ SummerExterior } alt={ SummerExterior } width='300' height='200'/> : null }
      { title === 'Summer Interior Maintenance Checklist' ? <img src={ SummerInterior } alt={ SummerInterior } width='300' height='200'/> : null }
    </div>
  )
}