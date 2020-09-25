import React from "react";
import "./FixedBoard.css";

let fixedboard = (props) => {
  return (
    <aside className="Board">
      <header>User Profile</header>
      <div>
        <h5>Recommended</h5>
        <ul>
          <li>user1</li>
          <li>user2</li>
          <li>user3</li>
          <li>user4</li>
          <li>user5</li>
        </ul>
      </div>
      <div>
        About, Help, Press, Contact, API, Jobs, Privacy, Terms, Locations
      </div>
      <footer>Copyrights</footer>
    </aside>
  );
};

export default fixedboard;
