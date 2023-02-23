import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const handleAddUser = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("User Added");
        event.target.reset();
        navigate('/')
      });
  };

  const handleEventBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div>
      <h1 className="page_header">add user</h1>
      <form className="text-center" onSubmit={handleAddUser}>
        <input
          className="inputs"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onBlur={handleEventBlur}
        />
        <br />
        <input
          className="inputs"
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          onBlur={handleEventBlur}
        />
        <br />
        <input
          className="inputs"
          type="email"
          name="email"
          id="name"
          placeholder="Email"
          onBlur={handleEventBlur}
        />
        <br />
        <button
          className="rounded-xl bg-blue-600 p-3 font-medium text-white"
          type="submit"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
