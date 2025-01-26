import './Nav.scss';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className='navContainer'>
        <input
          type='text'
          className='SearchInput'
          placeholder='Enter your search shoes'
          onChange={handleInputChange}
          value={query}
        />
      </div>

      <div className='profileContainer'>
        <a href='#'>
          <FiHeart className='navIcons' />
        </a>

        <a href='#'>
          <AiOutlineShoppingCart className='navIcons' />
        </a>

        <a href='#'>
          <AiOutlineUserAdd className='navIcons' />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
