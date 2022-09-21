import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const nextReview = () => {
    const next = index + 1;
    setIndex(checkNumber(next));
  };
  const prevReview = () => {
    const prev = index - 1;
    setIndex(checkNumber(prev));
  };

  const randReview = () => {
    let rand = Math.floor(Math.random() * (people.length - 1 - 0) + 0);
    rand = rand === index ? rand + 1 : rand;

    setIndex(checkNumber(rand));
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
