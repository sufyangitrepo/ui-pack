import {useState} from 'react'

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const increment = (incr: number) => {
    setCounter((pre) => pre + incr);
  }
  const decrement = (decr: number) => {
    if(counter >= decr) {
      setCounter((pre) => pre + decr);
    }
  }
  
  return {
    counter,
    increment,
    decrement
  };
};

export default useCounter;
