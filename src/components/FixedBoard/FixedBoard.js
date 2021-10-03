import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PlaceHolderProfilePic from "../../assets/Images/download.png";
import "./FixedBoard.css";

let Fixedboard = (props) => {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/collections/?client_id=htn3ZJRkveEujzltUO7_r9bkczF-sy-SYLFEmZNkPhY"
      )
      .then((response) => {
        setUsers(response.data.slice(0, 5));
        setIsLoading(false);
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <aside className="FixedBoard">
      <div>
        <header>
          <img
            className="mediumImg"
            alt="ProfilePic"
            src={PlaceHolderProfilePic}
          />
          <h5>{props.User.displayName}</h5>
        </header>
        <div className="List">
          <h6>Recommended See All</h6>
          <ul>
            {isLoading
              ? null
              : users.map((data, i) => {
                  return (
                    <li key={i} className="usersList">
                      <Link
                        to={{
                          pathname: `/account/${data.user.username}`,
                        }}
                      >
                        <div className="userCard">
                          <img
                            className="smallImg"
                            src={data.user.profile_image.large}
                            alt={"user icon"}
                          />
                          <p className="UserName">{data.user.name}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
          </ul>
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

export default Fixedboard;
