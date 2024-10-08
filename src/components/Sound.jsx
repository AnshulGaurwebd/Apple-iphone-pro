import React from "react";
import { left } from "webgi";

function Sound() {
  const handleLearn = () => {
    const element = document.querySelector(".display-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behaviour: "smooth",
    });
  };

  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="Sound-section-content content">
          <h2 className="title">New Sound System</h2>
          <p className="text">Feel the base</p>
          <span className="description">
            From $50.99/mo. for 24 mo. or $1500 before trade-in
          </span>
          <ul className="links">
            <li>
              <button className="button">Buy</button>
            </li>
            <li>
              <a className="link" onClick={handleLearn}>
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sound;
