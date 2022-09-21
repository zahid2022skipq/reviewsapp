import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const nextReview = () => {
    const next = index < people.length - 1 ? index + 1 : 0;
    setIndex(next);
  };
  const prevReview = () => {
    const prev = index > 0 ? index - 1 : people.length - 1;
    setIndex(prev);
  };

  const randReview = () => {
    let rand = Math.floor(Math.random() * (people.length - 1 - 0) + 0);
    rand = rand === index ? randReview() : rand;
    console.log(rand);
    setIndex(rand);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          <span>
            <FaChevronLeft />
          </span>
        </button>
        <button className="next-btn" onClick={nextReview}>
          <span>
            <FaChevronRight />
          </span>
        </button>
      </div>
      <button className="random-btn" onClick={randReview}>
        <span>Surprise Me</span>
      </button>
    </article>
  );
};

export default Review;
