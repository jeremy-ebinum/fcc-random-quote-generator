import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";

import quotesData from "../../data/quotes";

import "./App.scss";

const intentUri = `https://twitter.com/intent/tweet?hashtags=quotes`;
const relatedUri = `&related=freecodecamp`;

const App = () => {
  const [quote] = useState(quotesData[0].quote);
  const [author] = useState(quotesData[0].author);

  const quoteUri = `&text="${encodeURIComponent(quote)}" ${encodeURIComponent(
    author
  )}`;

  const tweetUri = `${intentUri}${relatedUri}${quoteUri}`;

  return (
    <div className="o-wrapper">
      <div id="quote-box" className="o-quote-box">
        <div className="c-quote">
          <span id="text" className="c-quote__text lead">
            {quote}
          </span>
          <span id="author" className="c-quote__author">
            {author}
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
          <a id="new-quote" href="#" className="c-cta__new">
            New Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
