import React from 'react';
import './Product.css';
import Card from '../Components/Card';

const Product = ({ result }) => {
  return (
    <div>
      <section className='cardContainer'>{result}</section>
    </div>
  );
};

export default Product;
