import React from "react";
import "./App.css";
import image from "./images/diagram.svg";
import check from "./images/checked.svg";

const App = () => {
  return (
    <div className="body">
      <section class="sec">
        <div class="container">
          <div class="text">
            <h1 class="title">Stay updated</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div class="checked">
              <img src={check} alt="" />
              <p>Product discovery and building what matters</p>
            </div>
            <div class="checked">
              <img src={check} alt="" />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div class="checked">
              <img src={check} alt="" />
              <p>And much more!</p>
            </div>
            <label for="" class="email">
              Email address <br />
              <input
                type="text"
                class="input"
                placeholder="email@company.com"
              />
            </label>
            <button>Subscribe to monthly newsletter</button>
          </div>
          <div class="image-container">
            <img src={image} alt="" class="image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
