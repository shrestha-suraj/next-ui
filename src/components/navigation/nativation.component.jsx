import React, { useState } from "react";
import "./navigation.styles.scss";
import companyLogo from "../../assets/logo.png";
import NavigationLink from "../navigation-link/navigation-link.component";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard.svg";
import { ReactComponent as ResourcesIcon } from "../../assets/id-card.svg";
import { ReactComponent as ReportingIcon } from "../../assets/chart.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/right-arrow.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/down-arrow.svg";
import { ReactComponent as PlusIcon } from "../../assets/add.svg";
import { ReactComponent as TreeIcon } from "../../assets/scheme.svg";

const Navigation = () => {
  const [navigationList, setNavigationList] = useState("")
  const [innerNavigationList,setInnerNavigationList]=useState("")
  const [activeTab,setActiveTab]=useState("")

  return (
    <header className="navigation-container">
      <img alt="Next Logo" src={companyLogo} className="company-logo" />
      <nav className="navigation-bar">
        <ul className="navigation-list">
          <div className="dashboard-nav-container">
            <NavigationLink
              icon={<DashboardIcon />}
              linkText="PROJECT DASHBOARD"
              clickHandler={() =>setNavigationList(navigationList!=="project_dashboard"?"project_dashboard":"")}
            />
            {navigationList==="project_dashboard" && (
              <ul className="inner-navigation-list">
                <NavigationLink
                  icon={
                    innerNavigationList ===
                    "proposals" ? (
                      <DownArrowIcon />
                    ) : (
                      <RightArrowIcon />
                    )
                  }
                  linkText="PROPOSALS"
                />
                <div>
                  <NavigationLink
                    icon={
                      innerNavigationList ===
                      "staffing" ? (
                        <DownArrowIcon />
                      ) : (
                        <RightArrowIcon />
                      )
                    }
                    linkText="STAFFING"
                    clickHandler={() =>setInnerNavigationList(innerNavigationList!=="staffing"?"staffing":"")}
                  />
                  {innerNavigationList ===
                    "staffing" && (
                    <ul>
                      <NavigationLink
                        to="/"
                        icon={<PlusIcon />}
                        linkText="NEW STAFFING REQUEST"
                        clickHandler={() =>
                          setActiveTab("new_staffing_request")
                        }
                        active={
                          activeTab === "new_staffing_request"
                        }
                      />
                      <NavigationLink
                        to="/profile"
                        icon={<TreeIcon />}
                        linkText="TEAMS"
                        clickHandler={() => setActiveTab("teams")}
                        active={activeTab === "teams"}
                      />
                    </ul>
                  )}
                </div>
              </ul>
            )}
          </div>
          <NavigationLink icon={<ResourcesIcon />} linkText="RESOURCES" 
              clickHandler={()=>setNavigationList("resources")}
          />
          <NavigationLink icon={<ReportingIcon />} linkText="REPORTING" />
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
