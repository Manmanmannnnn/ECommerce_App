import { startTransition } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div>
      <section className='card'>
        <img src={img} alt={title} className='cardImg' />
        <div className='cardDetails'>
          <h4 className='cardTitle'>{title}</h4>
          <section className='cardReviews'>
            {star} {star} {star} {star} {star}
            <span className='totalReviews'>{reviews}</span>
          </section>
          <section className='cardPrice'>
            <div className='price'>
              $<del>{prevPrice}</del> {newPrice}
            </div>
            <div className='bag'>
              <BsFillBagCheckFill className='bagIcon' />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Card;
