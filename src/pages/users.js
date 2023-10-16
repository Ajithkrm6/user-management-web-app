import React, { useState, useEffect } from "react";
import { User } from "../components/User";
import { Link } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log("data", data);
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="mainContainer">
      <h1 className="userTitle"> Users List </h1>
      <ul>
        {users.map((user) => {
          return (
            <Link to={`/users/${user.id}`}>
              <User key={user.id} user={user} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
