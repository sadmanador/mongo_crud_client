import React, { useState } from "react";

const AddUser = () => {
    const [user, setUser] = useState([]);

    const handleAddUser = (event) => {  
      event.preventDefault();
      console.log(user);
      event.target.reset();
    }
    
    const handleEventBlur  = (event) => {
      const value = event.target.value;
      const field = event.target.name;
      const newUser = {...user};
      newUser[field] = value;
      setUser(newUser);
    }
    

  return (
    <div>
      <h1 className="uppercase text-4xl text-center font-semibold">add user</h1>
      <form className="text-center" onSubmit={handleAddUser}>
        <input  className="border border-indigo-800 rounded-lg p-3 my-3" type="text" name="name" id="name" placeholder="Name" onBlur={handleEventBlur}/><br />
        <input  className="border border-indigo-800 rounded-lg p-3 my-3" type="text" name="address" id="address" placeholder="Address" onBlur={handleEventBlur}/><br />
        <input  className="border border-indigo-800 rounded-lg p-3 my-3" type="email" name="email" id="name" placeholder="Email" onBlur={handleEventBlur}/><br />
        <button className="text-white bg-blue-600 p-3 rounded-xl font-medium" type="submit">Create User</button>
      </form>
    </div>
  );
};

export default AddUser;
