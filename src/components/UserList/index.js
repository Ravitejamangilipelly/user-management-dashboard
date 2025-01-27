import React from "react";
import "./index.css";

const UserList = ({ users, onEdit, onDelete }) => (
  <div className="user-list">
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.department || "N/A"}</td>
            <td>
              <button onClick={() => onEdit(user)} className="btn edit-btn">
                Edit
              </button>
              <button onClick={() => onDelete(user.id)} className="btn delete-btn">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UserList;