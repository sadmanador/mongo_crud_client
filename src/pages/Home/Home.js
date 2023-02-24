import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayUser from "../DisplayUser/DisplayUser";

const Home = () => {
  const displayUsers = useLoaderData();
 

  return (
    <div>
      <h1 className="page_header">home</h1>
      {
        displayUsers.map(user => <DisplayUser key={user._id} user={user} ></DisplayUser>)
      }
    </div>
  );
};

export default Home;
