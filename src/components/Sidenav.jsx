import React, { useState } from "react";
import "./Sidenac.css";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState("Dlex Designs");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectTeam = (teamName) => {
    setSelectedTeam(teamName);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <>
      <div className="p-3 sidebar d-md-block d-none">
        <div className="logo-div">
          <img src="/Images/onDark.svg" alt="" />
        </div>

        {/* Team Tag with Dropdown */}
        <div className="tem">
          <div
            className="d-flex team-tag rounded align-items-center justify-content-between"
            onClick={toggleDropdown}
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-items-center">
              <h5 className="rounded-5 p-1 mt-2 me-2">DW</h5>
              <div className="team d-flex flex-column">
                <h4>{selectedTeam}</h4>
                <span>general team</span>
              </div>
            </div>
            <img className="cuss" src="/Images/unfold_more.svg" alt="Expand" />
          </div>

          {isOpen && (
            <div className="dropdown-content team-drop p-2 rounded">
              <p onClick={() => handleSelectTeam("ALEX Designs")}>ALEX Designs</p>
              <p onClick={() => handleSelectTeam("BLEX Designs")}>BLEX Designs</p>
              <p onClick={() => handleSelectTeam("Dlex Designs")}>Dlex Designs</p>
            </div>
          )}
        </div>

        {/* Links */}
        <div className="d-flex flex-column gap-3">
          <div>
            <Link to="/dashboard" className="text-decoration-none">
              <div className="link gap-2 d-flex flex-row align-items-center">
                <img src="/Images/Graph.png" alt="" />
                <h5>Dashboard</h5>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/overview" className="text-decoration-none">
              <div className="link gap-2 d-flex flex-row align-items-center">
                <img src="/Images/Chart.svg" alt="" />
                <h5>Overview</h5>
              </div>
            </Link>
          </div>

          <div>
            <a href="" className="text-decoration-none">
              <div className="link gap-2 d-flex flex-row align-items-center">
                <img src="/Images/Chat.svg" alt="" />
                <h5>Chat</h5>
                <p className="rounded-5">5</p>
              </div>
            </a>
          </div>

          <div>
            <a href="" className="text-decoration-none">
              <div className="link gap-2 d-flex flex-row align-items-center">
                <img src="/Images/User.svg" alt="" />
                <h5>Team</h5>
              </div>
            </a>
          </div>
        </div>

        {/* Shortcuts */}
        <h6 className="short fw-bold">SHORTCUT</h6>
        <div className="d-flex flex-column gap-3">
          <div>
            <a href="" className="text-decoration-none">
              <div className="link gap-2 d-flex flex-row align-items-center">
                <img src="/Images/Document.png" alt="" />
                <h5>Task</h5>
              </div>
            </a>
          </div>

          <div>
            <a href="" className="text-decoration-none">
              <div className="link gap-2 d-flex flex-row align-items-center">
                <img src="/Images/Danger.svg" alt="" />
                <h5>Reports</h5>
              </div>
            </a>
          </div>

          <div>
            <a href="" className="text-decoration-none">
              <div className="link gap-2 d-flex flex-row align-items-center">
                <img src="/Images/Setting.svg" alt="" />
                <h5>Settings</h5>
              </div>
            </a>
          </div>
        </div>

        {/* Storage Section */}
        <div className="storage rounded-1 p-3">
          <div className="d-flex head justify-content-between">
            <h5>Storage</h5>
            <span>Upgrade</span>
          </div>
          <h6>
            <strong>3.4GB</strong> <span>of 15GB</span>
          </h6>

          {/* Progress Bar */}
          <div className="progress mt-2" style={{ height: "4px" }}>
            <div
              className="progress-bar bg-light"
              role="progressbar"
              style={{ width: "23%" }}
              aria-valuenow="3.4"
              aria-valuemin="0"
              aria-valuemax="15"
            ></div>
          </div>
        </div>

        <div className="d-flex bottom-tag align-items-center">
          <img className="imgg" src="/Images/IMG.svg" alt="" />
          <h1>Jane Smith</h1>
          <img className="cuss" src="/Images/unfold_more.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Sidenav;
