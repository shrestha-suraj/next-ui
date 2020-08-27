import React,{useState} from "react";
import "./navigation.styles.scss";
import companyLogo from "../../assets/logo.png";
import NavigationLink from "../navigation-link/navigation-link.component";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard.svg";
import { ReactComponent as ResourcesIcon } from "../../assets/id-card.svg";
import { ReactComponent as ReportingIcon } from "../../assets/chart.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/right-arrow.svg";
const Navigation = () => {

    const [dasboardTabs,setDashboardTabs]=useState([false,false])
  return (
    <header className="navigation-container">
      <img alt="Next Logo" src={companyLogo} className="company-logo" />
      <nav className="navigation-bar">
        <ul className="navigation-list">
          <div className="dashboard-nav-container">
            <NavigationLink
              icon={<DashboardIcon />}
              linkText="PROJECT DASHBOARD"
              clickHandler={()=>setDashboardTabs([!dasboardTabs[0],false])}
            />
            <ul className={`inner-navigation-list ${dasboardTabs[0]?'show':''}`}>
              <NavigationLink icon={<RightArrowIcon />} linkText="PROPOSALS" />
              <NavigationLink icon={<RightArrowIcon />} linkText="STAFFING" />
            </ul>
          </div>
          <NavigationLink
            icon={<ResourcesIcon />}
            linkText="RESOURCES"
          />
          <NavigationLink
            icon={<ReportingIcon />}
            linkText="REPORTING"
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
