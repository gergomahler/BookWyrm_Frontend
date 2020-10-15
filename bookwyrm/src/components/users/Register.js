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

const StyledInput = styled.input`
  margin-top: 30px;
  width: 50%;
  align-self: center;
`;

const StyledForm = styled.form`
  margin: auto;
`;

function Register(props) {
  return (
    <React.Fragment>
      <CenterDiv className="card">
        <StyledH3>Register</StyledH3>
        <StyledForm /*action=... method=POST*/>
          <StyledLabel for="username">
            <b>Username</b>
          </StyledLabel>
          <input
            type="text"
            placeholder="username"
            name="username"
            required
          ></input>
          <StyledLabel for="password">
            <b>Password</b>
          </StyledLabel>
          <input
            type="password"
            placeholder="password"
            name="password"
            required
          ></input>
          <StyledInput
            type="submit"
            className="registerbtn"
            value="Register"
          ></StyledInput>
        </StyledForm>
      </CenterDiv>
    </React.Fragment>
  );
}

export default Register;
