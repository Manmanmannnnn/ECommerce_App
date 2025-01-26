import { useState } from 'react';
import Nav from './Navigation/Nav';
import Product from './Products/Product';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './Database/data';
import Card from './Components/Card';
import './index.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');

  //Input Filter
  function handleInputChange(e) {
    setQuery(e.target.value);
  }

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  //Radio Filter
  function handleChange(e) {
    setSelectedCategory((s) => e.target.value);
  }

  //Button Filter
  function handleClick(e) {
    setSelectedCategory((s) => e.target.value);
  }

  function filteredData(product, selected, query) {
    let filteredProducts = product;

    //Filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }, index) => (
        <Card
          key={index}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Product result={result} />
    </div>
  );
}

export default App;
