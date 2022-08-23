import { CategoryCard } from './CategoryCard';

export const Home = ({ categories }) => {

  return (
    <div className="home-container">
      <h1>Welcome to myDwelling!</h1>
      <h2> A place for new homeowners</h2>
      <p>So you closed escrow on your new home and you finally got your keys. Congradulations! So now what? It is a joy to become a homeowner, but it is also a responsibility.<br/> <br/>Now you need to keep track of your homes maintenance needs, inspections costs. Maybe you'll need to brush up on your DIY skills in order to save money. <em>We</em> are here to help!</p>

      <h3>What to expect!</h3>

      <CategoryCard categories={ categories } />
      <p></p>
    </div>
  );
};