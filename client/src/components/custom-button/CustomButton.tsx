import React from 'react';
import { Link } from 'react-router-dom';

  const CustomButton: React.FC = () => {
  
  return (
  <Link to='/booking'>
    <button
    className='custom-button'  
    >
      Book now
    </button>
  </Link>
  );
}

export default CustomButton;