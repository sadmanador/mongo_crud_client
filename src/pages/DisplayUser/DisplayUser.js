import React from "react";
import { toast } from "react-hot-toast";
import { BiEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";

const DisplayUser = ({ user }) => {
  const { name, address, email } = user;

  const handleDeleteUser = (user) => {
    const agree = window.confirm(
      `Are you sure you want to delete: ${user.name}`
    );

    if (agree) {
      // console.log('deleting user with id: ', user._id)
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          if (data.deletedCount > 0) {
            toast.success("User deleted successfully.");
            window.location.reload(true);
          }
        });
    }
  };

  return (
    <div className="text-center text-xl">
      <ol>
        <li className="mb-2">
          <span className="font-semibold">{name}</span>
          <span> {address} </span>
          <span className="underline">{email}</span>
          <Link
            to={`/updateUser/${user._id}`}
            className="ml-3 inline rounded-md bg-blue-400 p-1"
          >
            <button><BiEdit /></button>
          </Link>
          <button
            onClick={() => handleDeleteUser(user)}
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
