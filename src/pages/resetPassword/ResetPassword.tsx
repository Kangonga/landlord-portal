import { FormEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useUpdatePassword from "@/hooks/useUpdatePassword";
import { useAppSelector } from "@/globalHooks";
import {
  LoginButtonContainer,
  LoginForm,
  LoginPageContainer,
} from "../login/styles";
import { images } from "@/assets";
import { Button, CircularProgress, Typography } from "@mui/material";

export default function ResetPassword() {
  const state = useAppSelector((state) => state.auth);
  const token = useAppSelector((state) => state.auth.token);
  const userId = useAppSelector((state) => state.auth.userId);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsPasswordChanged(true);
    if (confirmPassword === password) {
      (async () => {
        const response = await useUpdatePassword(userId, password, token);
        if (response.status == 0) navigate("/");
        else {
          setIsPasswordChanged(false);
          setShowErrors(true);
        }
      })();
    }
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
            {showErrors && (
              <div color="coral">Password update unsuccessful. Try again</div>
            )}
          </LoginButtonContainer>
        </form>
      </LoginForm>
    </LoginPageContainer>
  );
}
