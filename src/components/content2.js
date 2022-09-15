// libraries
import { useState, useEffect } from "react";
import { Button, SIZE } from "baseui/button";

// components
import Spacer from "./spacer";

// css
import "./content.css";

function Content2() {
  return (
    <div className="main-div">
      <h1 className="application-name">
        Explain the difference b/w async/await and Promises with simple examples
      </h1>
      <Spacer height="1rem" />
      <div>
        <p className="paragraph">
          Promises give us an easier way to deal with asynchrony in our code in
          a sequential manner. Considering that our brains are not designed to
          deal with asynchronicity efficiently, this is a much welcome addition.
          Async/await functions, a new addition with ES2017 (ES8), help us even
          more in allowing us to write completely synchronous-looking code while
          performing asynchronous tasks behind the scenes.
        </p>

        <Spacer height="1.5rem" />

        <div>
          <img
            className="img"
            src="https://res.cloudinary.com/benblog-cloudinary/image/upload/v1663141883/samples/async_z4w5ht.png"
          />
        </div>
        <p className="heading">Async/await</p>
        <p className="paragraph">
          Async/await can help make your code cleaner and more readable in cases
          where you need complicated control flow. It also produces more
          debug-friendly code and makes it possible to handle both synchronous
          and asynchronous errors with just try/catch, one of the most
          revolutionary features that have been added to JavaScript in the past
          few years. It makes you realize what a syntactical mess promises are,
          and provides an intuitive replacement.
        </p>

        <Spacer height="1.5rem" />

        <div>
          <img
            className="img"
            src="https://res.cloudinary.com/benblog-cloudinary/image/upload/v1663141872/samples/promises_syxamo.png"
          />
        </div>
        <p className="heading">Promises</p>
        <p className="paragraph">
          A Promise is a special JavaScript object. It produces a value after an
          asynchronous (aka, async) operation completes successfully, or an
          error if it does not complete successfully due to time out, network
          error, and so on. Successful call completions are indicated by the
          resolve function call, and errors are indicated by the reject function
          call.
        </p>
        <p className="paragraph">A JavaScript Promise object can be:</p>
        <ul className="paragraph">
          <li>Pending</li>
          <li>Fulfilled</li>
          <li>Rejected</li>
        </ul>
        <p className="paragraph">
          The Promise object supports two properties: state and result. <br />
          While a Promise object is "pending" (working), the result is
          undefined. <br />
          When a Promise object is "fulfilled", the result is a value. <br />
          When a Promise object is "rejected", the result is an error object.
        </p>
      </div>
    </div>
  );
}

export default Content2;
