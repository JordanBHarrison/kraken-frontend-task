import { useContext } from 'react';
import { BasketContext } from '../context/basket-context';

export default () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};