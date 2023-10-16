import React, { Fragment, useState } from "react";
import "../../App.css";

export const User = ({ user }) => {
  const [hovering, setHovering] = useState(false);
  const onHoveringIn = () => {
    setHovering(true);
  };

  const onHoveringOut = () => {
    setHovering(false);
  };

  return (
    <div className="listElement">
      <li onMouseEnter={onHoveringIn} onMouseLeave={onHoveringOut}>
        {!hovering ? (
          <span>{user.name}</span>
        ) : (
          <span>
            Username: {user.username}, Email: {user.email}
          </span>
        )}
      </li>
    </div>
  );
};
