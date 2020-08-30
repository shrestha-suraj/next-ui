import React from "react";
import "./inpagenavigation.styles.scss";
import { Link } from "react-router-dom";

const InPageNavigation = (props) => {
  return (
    <nav className="in-page-navigation">
      <ul className="in-page-list">
        <Link className="in-page-list-link">
          <li className="in-page-list-item">Requet Form</li>
        </Link>
        <Link className="in-page-list-link">
          <li className="in-page-list-item">Member Attributes</li>
        </Link>
        <Link className="in-page-list-link">
          <li className="in-page-list-item">Team Chemistry</li>
        </Link>
        <Link className="in-page-list-link">
          <li className="in-page-list-item">Confirmation</li>
        </Link>
      </ul>
      <hr />
    </nav>
  );
};

export default InPageNavigation;
