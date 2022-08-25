// import { CategoryCard } from './CategoryCard';
import HomeImage from '../images/pexels-pixabay-279648.jpg';

export const Home = ({ categories }) => {

  // const category = categories.map( category => {
  //   return <CategoryCard key={ category.id } category={ category } />
  // });

  return (
    <div className='content-container'>
      <h1>Welcome to myDwelling!</h1>
      <h2> A place for new homeowners</h2>
      <p>So you closed escrow on your new home and you finally got your keys. Congradulations! So now what? It is a joy to become a homeowner, but it is also a responsibility.<br/> <br/>Now you need to keep track of your homes maintenance needs, inspections costs. Maybe you'll need to brush up on your DIY skills in order to save money. <em>We</em> are here to help!</p>

      <h2><em>Signup</em> today and start effectively spending far less money!</h2>
       <img src={ HomeImage } alt={HomeImage} width='1500' height='1300'/>
      <p></p>
    </div>
  );
};