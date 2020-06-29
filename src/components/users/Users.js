import React, { useContext } from "react";
import githubContext from "../../context/githubContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const Users = () => {
  const { loading, allUser } = useContext(githubContext);

  if (loading) return <Spinner />;
  return (
    <div style={userStyle}>
      {allUser.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
