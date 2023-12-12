// Testimonial.js
import React, { useState } from 'react';
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from './Card';

function Testimonial(props) {

  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randIndex);
  }

  return (
    <div className='w-11/12 max-w-[50rem] bg-white mt-14 mx-auto text-center p-8'>
      <Card reviews={reviews[index]} />
      

      <div className='flex justify-center text-3xl m-5 gap-3 font-bold mx-auto text-violet-400'>
        <button onClick={leftHandler} className='cursor-pointer hover:text-violet-500'>
          <FiChevronLeft />
        </button>
        <button onClick={rightHandler} className='cursor-pointer hover:text-violet-500'>
          <FiChevronRight />
        </button>
      </div>

      <div>
        <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 px-10 py-2 cursor-pointer rounded-md text-white text-lg font-bold transition-all duration-200'>
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
