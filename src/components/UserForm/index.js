import React, { useState } from "react";
import "./index.css";

const UserForm = ({ onSubmit, initialData = {}, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: initialData.firstName || "",
    lastName: initialData.lastName || "",
    email: initialData.email || "",
    department: initialData.department || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      name: `${formData.firstName} ${formData.lastName}`,
    });
    setFormData({ firstName: "", lastName: "", email: "", department: "" });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <label htmlFor="firstname">First Name</label>
      <input
      type="text"
      id="firstname"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
   
      <label htmlFor="lastname">Last Name</label>
      <input
      type="text"
      id="lastname"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <label htmlFor="emailid">Email</label>
      <input
      id="emailid"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <label htmlFor="department">Department</label>
      <input
      type="text"
      id="department"
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
        
      <div className="form-actions">
        <button type="submit" className="btn submit-btn">
          Submit
        </button>
        {onCancel && (
          <button type="button" className="btn cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;