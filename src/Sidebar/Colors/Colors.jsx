import Input from '../../Components/Input';
import './Colors.css';

const Colors = ({ handleChange }) => {
  return (
    <div className='colors'>
      <h2 className='sidebaTitle colorTitle'>Color</h2>
      <label className='sidebar-label-container'>
        <input onChange={handleChange} type='radio' value='' name='test1' />
        <span className='checkmark'></span>All
      </label>
      <Input
        handleChange={handleChange}
        value='black'
        title='Black'
        name='test1'
        color='black'
      />
      <Input
        handleChange={handleChange}
        value='blue'
        title='Blue'
        name='test1'
        color='blue'
      />
      <Input
        handleChange={handleChange}
        value='red'
        title='Red'
        name='test1'
        color='red'
      />
      <Input
        handleChange={handleChange}
        value='green'
        title='Green'
        name='test1'
        color='green'
      />
      <label className='sidebar-label-container'>
        <input
          onChange={handleChange}
          type='radio'
          value='white'
          name='test1'
        />
        <span
          className='checkmark'
          style={{
            backgroundColor: 'rgb(239, 241, 211)',
          }}
        ></span>
        White
      </label>
    </div>
  );
};

export default Colors;
