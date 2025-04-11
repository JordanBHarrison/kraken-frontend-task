import { CompactButton } from './buttons';

type QtySelectorProps = {
  currentQuantity: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
}

const QtySelector = ({ currentQuantity, handleDecrement, handleIncrement }: QtySelectorProps) => {

  return (
    <div
      className='
        relative flex items-center gap-2.5 text-lg
        before:content-["Qty"] before:absolute before:-top-6 before:left-1/2 before:text-xs before:font-light before:text-ice 
        before:transform before:-translate-x-1/2
      '
    >
      <CompactButton onClick={handleDecrement} disabled={currentQuantity < 2}>-</CompactButton>
      <span className='text-2xl w-4 text-center' title='Current quantity'>{currentQuantity}</span>
      <CompactButton onClick={handleIncrement}>+</CompactButton>
    </div>
  )

}

export default QtySelector;