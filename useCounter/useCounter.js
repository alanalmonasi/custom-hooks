import { useState } from "react"

export const useCounter = (value = 0) => {

   const [counter, setCounter] = useState(value);

   const increment = (x = 1) => {
      setCounter(counter + x);
   }

   const decrement = (x = 1) => {
      //if (counter === 0) return;
      setCounter(counter - x);
   }

   const reset = () => {
      setCounter(value);
   }

   return {
      counter,
      increment,
      decrement,
      reset
   }
}