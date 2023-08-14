import { FormEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/globalHooks";
import {
  LoginButtonContainer,
  LoginForm,
  LoginPageContainer,
} from "../login/styles";
import { images } from "@/assets";
import { Button, CircularProgress, Typography } from "@mui/material";

export default function ResetPassword() {
  const userId = useAppSelector((state) => state.auth.userId);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsPasswordChanged(true);
  };
  return (
    <LoginPageContainer>
      {!userId && <Navigate to="/forgotPassword" replace={true} />}
      <LoginForm>
        <figure>
          <img src={images.logo} />
        </figure>
        <Typography className="formTitle">Password Reset</Typography>
        <form onSubmit={(e: FormEvent) => handleSubmit(e)} className="form">
          <div className="formInput">
            <label htmlFor="password">Enter New Password</label>
            <input
              disabled={isPasswordChanged}
              className="input"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="formInput">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              disabled={isPasswordChanged}
              className="input"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {!(confirmPassword === password) && (
            <div
              style={{
                textAlign: "center",
                color: "coral",
                paddingBottom: ".75rem",
              }}
            >
              passwords do not match
            </div>
          )}
          <LoginButtonContainer isRequestSent={isPasswordChanged}>
            <Button
              sx={{ backgroundColor: isPasswordChanged ? "gray" : "#3730a3" }}
              disabled={isPasswordChanged}
              className="button"
              type="submit"
            >
              Sign In
            </Button>
            {isPasswordChanged && (
              <CircularProgress size={23} sx={{ color: "white" }} />
            )}
          </LoginButtonContainer>
        </form>
      </LoginForm>
    </LoginPageContainer>
  );
}
