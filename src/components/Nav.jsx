import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    name: "register",
    link: "/register",
  },
  {
    name: "users",
    link: "/users",
  },
];

export const Nav = () => {
  return (
    <div>
      {links.map((e, i) => (
        <Link key={i} to={e.link}>
          {" "}
          {e.name}{" "}
        </Link>
      ))}
    </div>
  );
};
