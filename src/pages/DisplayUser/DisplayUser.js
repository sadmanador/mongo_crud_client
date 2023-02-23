import React from "react";
import { BiEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";

const DisplayUser = ({ user }) => {
  const { _id, name, address, email } = user;

  const handleDeleteUser = (event) => {
    console.log(event)
  };

  return (
    <div className="text-center text-xl">
      <ol>
        <li className="mb-2">
          <span className="font-semibold">{name}</span>
          <span> {address} </span>
          <span className="underline">{email}</span>
          <button className="ml-3 rounded-md bg-blue-400 p-1">
            <BiEdit />
          </button>
          <button
            onClick={() => handleDeleteUser(_id)}
            className="ml-3 rounded-md bg-red-400 p-1"
          >
            <TiDelete />
          </button>
        </li>
      </ol>
    </div>
  );
};

export default DisplayUser;
