import React from "react";
import styled from "styled-components";

const CenterDiv = styled.div`
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const StyledH3 = styled.h3`
  color: lightgray;
`;

const StyledLabel = styled.label`
  margin: 10px;
  color: lightgray;
`;

const StyledButton = styled.button`
  margin-top: 30px;
  width: 50%;
  align-self: center;
`;

function Login(props) {
  return (
    <React.Fragment>
      <CenterDiv className="card">
        <StyledH3>Login</StyledH3>
        <StyledLabel for="username">
          <b>Username</b>
        </StyledLabel>
        <input
          type="text"
          placeholder="Your Username"
          name="username"
          required
        ></input>
        <StyledLabel for="password">
          <b>Password</b>
        </StyledLabel>
        <input
          type="password"
          placeholder="Your Password"
          name="password"
          required
        ></input>
        <StyledButton type="submit" className="loginbtn" onClick="LoginRequest">
          Login
        </StyledButton>
      </CenterDiv>
    </React.Fragment>
  );
}

export default Login;
