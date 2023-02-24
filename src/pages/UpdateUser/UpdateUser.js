import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const storeUser = useLoaderData();
  const [user, setUser] = useState(storeUser);


  const handleUpdateUser = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/users/${storeUser._id}`,{
        method: 'PUT', headers: {'content-type': 'application/json'}, body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data=> {
        if(data?.modifiedCount > 0){
            toast.success('User updated')
        }
    })
  };

  const handleOnChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div>
      <h1 className="page_header">Single data</h1>
      <form className="text-center" onSubmit={handleUpdateUser}>
        <input
        defaultValue={storeUser.name}
          className="inputs"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={handleOnChange}
        />
        <br />
        <input
        defaultValue={storeUser.address}
          className="inputs"
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          onChange={handleOnChange}
        />
        <br />
        <input
        defaultValue={storeUser.email}
          className="inputs"
          type="email"
          name="email"
          id="name"
          placeholder="Email"
          onChange={handleOnChange}
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

export default UpdateUser;
