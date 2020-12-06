import React from "react";
import "./FixedBoard.css";

let fixedboard = (props) => {
  return (
    <aside className="FixedBoard">
      <div>
        <div>
          <header>{props.User.name}</header>
        </div>
        <div className="List">
          <div>
            <p>
              <strong>Recommended</strong> See All
            </p>
          </div>
          <div>
            <ul>
              <li>user1_Name</li>
              <li>user2_Name</li>
              <li>user3_Name</li>
              <li>user4_Name</li>
              <li>user5_Name</li>
            </ul>
          </div>
        </div>
        <div>
          About, Help, Press, Contact, API, Jobs, Privacy
          <br></br> Terms, Locations
        </div>
        <hr />
        <footer>
          <strong>
            <i>Project by Arun ET</i>
          </strong>
        </footer>
      </div>
    </aside>
  );
};

export default fixedboard;
