import * as React  from 'react'
import useCounter from '../hooks/use-counter'

type CounterPropTypes = {
  counterValue: number,
  children: React.ReactNode
};

const Counter = ({counterValue=1}: CounterPropTypes) => {
  const {counter, decrement, increment} = useCounter();

  return (
    <div>
      <button
        className='counter-button'
        onClick={() => increment(counterValue)}
      >
        +
      </button>
      {counter}
      <button 
        className='counter-button'
        onClick={() => decrement(counterValue)}
      >
        -
      </button>
    </div>
  )
}

export default Counter