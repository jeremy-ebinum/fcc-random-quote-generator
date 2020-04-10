import React, { useState, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import _sample from "lodash.sample";

import quotesData from "../../data/quotes";

import "./App.scss";

const intentUri = `https://twitter.com/intent/tweet?hashtags=quotes`;
const relatedUri = `&related=freecodecamp`;

const App = () => {
  const [currentQuote, setCurrentQuote] = useState({ ...quotesData[0] });

  const quoteBoxRef = useRef();

  const setRandomQuote = useCallback(() => {
    let randomQuote;

    do {
      randomQuote = _sample(quotesData);
    } while (randomQuote.id === currentQuote.id);

    quoteBoxRef.current.classList.add("slideOut");

    setTimeout(() => {
      setCurrentQuote(randomQuote);
      quoteBoxRef.current.classList.remove("slideOut");
    }, 300);
  }, []);

  const encodedQuote = encodeURIComponent(currentQuote.quote);
  const encodedAuthor = encodeURIComponent(currentQuote.author);
  const quoteUri = `&text="${encodedQuote}" ${encodedAuthor}`;
  const tweetUri = `${intentUri}${relatedUri}${quoteUri}`;

  return (
    <div className="o-wrapper">
      <div ref={quoteBoxRef} id="quote-box" className="o-quote-box">
        <div className="c-quote">
          <span id="text" className="c-quote__text lead">
            {currentQuote.quote}
          </span>
          <span id="author" className="c-quote__author">
            {currentQuote.author}
          </span>
        </div>
        <div className="c-cta">
          <a
            id="tweet-quote"
            href={tweetUri}
            className="c-cta__tweet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            id="new-quote"
            href="#"
            className="c-cta__new"
            onClick={setRandomQuote}
          >
            Next Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
