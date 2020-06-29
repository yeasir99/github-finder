import React from "react";
import Search from "../layout/Search";
import Users from "../users/Users";

const Home = () => {
  return (
    <div className="container">
      <Search />
      <Users />
    </div>
  );
};

export default Home;
