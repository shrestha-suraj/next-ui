import React from "react";
import "./navigation-link.styles.scss";
import { Link } from "react-router-dom";

const NavigationLink = ({ icon, linkText, to, clickHandler,active }) => {
  

    const iconText = (
    <React.Fragment>
      {icon ? icon : null}
      <span className="link-text-right">{linkText}</span>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {to ? (
        <Link to={to} className={`navigation-link ${active?'active':''}`} onClick={clickHandler}>
          {iconText}
        </Link>
      ) : (
        <div className="navigation-link" onClick={clickHandler}>
            {iconText}
        </div>
      )}
    </React.Fragment>
  );
};

export default NavigationLink;
