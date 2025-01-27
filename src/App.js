import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data.map(user => ({
          ...user,
          firstName: user.name.split(" ")[0],
          lastName: user.name.split(" ")[1] || "",
        })));
      } catch (error) {
        setError("Failed to fetch users.");
      }
    };
    fetchUsers();
  }, []);

  const handleAddUser = async (userData) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        userData
      );
      setUsers([...users, { ...userData, id: response.data.id }]);
    } catch (error) {
      setError("Failed to add user.");
    }
  };

  const handleEditUser = async (id, updatedData) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedData);
      setUsers(users.map((user) => (user.id === id ? { ...user, ...updatedData } : user)));
      setSelectedUser(null);
    } catch (error) {
      setError("Failed to update user.");
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      setError("Failed to delete user.");
    }
  };

  return (
    <div className="app-container">
      <h1>User Management Dashboard</h1>
      {error && <div className="error-message">{error}</div>}
      {selectedUser ? (
        <UserForm
          onSubmit={(data) => handleEditUser(selectedUser.id, data)}
          initialData={selectedUser}
          onCancel={() => setSelectedUser(null)}
        />
      ) : (
        <UserForm onSubmit={handleAddUser} />
      )}
      <UserList
        users={users}
        onEdit={(user) => setSelectedUser(user)}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};

export default App;