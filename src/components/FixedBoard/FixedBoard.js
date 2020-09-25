import React from "react";
import "./FixedBoard.css";

let fixedboard = (props) => {
  return (
    <aside className="Board">
      <header>User Profile</header>
      <div>
        <ul>
          <h4>Recommended</h4>
          <li>user1</li>
          <li>user2</li>
          <li>user3</li>
          <li>user4</li>
          <li>user5</li>
        </ul>
      </div>
      <div>
        About, Help, Press, Contact, API, Jobs, Privacy
        <br></br> Terms, Locations
      </div>
      <footer>Copyrights</footer>
    </aside>
  );
};

export default fixedboard;
