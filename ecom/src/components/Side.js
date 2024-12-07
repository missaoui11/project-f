import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Side.css";

function Side() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSetActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <ul className="link-list">
      <li
        className={`link-item ${activeIndex === 0 ? "active" : ""}`}
        onClick={() => handleSetActive(0)}
      >
        <Link to="/CardList" className={`link ${activeIndex === 0 ? "active" : ""}`}>
          Voir tous
        </Link>
      </li>
      <li
        className={`link-item ${activeIndex === 1 ? "active" : ""}`}
        onClick={() => handleSetActive(1)}
      >
        <Link to="" className={`link ${activeIndex === 1 ? "active" : ""}`}>
          Men
        </Link>
      </li>
      <li
        className={`link-item ${activeIndex === 2 ? "active" : ""}`}
        onClick={() => handleSetActive(2)}
      >
        <Link to="" className={`link ${activeIndex === 2 ? "active" : ""}`}>
          Femme
        </Link>
      </li>
      <li
        className={`link-item ${activeIndex === 3 ? "active" : ""}`}
        onClick={() => handleSetActive(3)}
      >
        <Link to="" className={`link ${activeIndex === 3 ? "active" : ""}`}>
          Enfant
        </Link>
      </li>
    </ul>
  );
}

export default Side;
