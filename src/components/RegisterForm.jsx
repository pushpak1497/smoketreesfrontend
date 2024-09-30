import React, { useEffect, useState } from "react";
import { useRegisterMutation } from "../redux/api/userApi";

function RegisterForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [register, { error, isSuccess }] = useRegisterMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    register({ name, address });
  };
  useEffect(() => {
    if (isSuccess) {
      alert("Registration Successfull");
    }
    if (error) {
      alert("failed to register", error?.data?.message);
    }
  }, [error, isSuccess]);
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          className="input"
          value={name}
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address">Address: </label>
        <input
          type="text"
          id="address"
          value={address}
          className="input address"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button type="submit" className="button">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
