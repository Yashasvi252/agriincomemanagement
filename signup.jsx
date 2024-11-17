// SignupPage.jsx
import React, { useState } from "react";
import styled from "styled-components";

const SignupPage = ({ handleSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(username, password);
  };

  return (
    <SignupContainer>
      <SignupForm onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </SignupForm>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fff;

  h2 {
    margin-bottom: 20px;
  }

  input {
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
  }

  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background-color: #45a049;
    }
  }
`;

export default SignupPage;
