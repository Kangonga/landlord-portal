import { Button, CircularProgress } from "@mui/material";
import { ForgotPasswordForm, KeyIcon } from "../forgotPassword/styles";
import ResendCodeButton from "@/shared/timer/Timer";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/globalHooks";
import { Navigate, useNavigate } from "react-router-dom";
import useVerifyOtp from "@/hooks/useVerifyOtp";
import { authActions } from "@/features/authentication/authSlice";
import { LoginButtonContainer, LoginPageContainer } from "../login/styles";

export default function SendOtp() {
  const authState = useAppSelector((state) => state.auth);
  const userid = useAppSelector((state) => state.auth.userId);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [showCodeError, setShowCodeError] = useState(false);
  const verificationCodeFormik = useFormik({
    initialValues: { code: "" },
    validationSchema: yup.object().shape({
      code: yup.string().required("A valid verification code is required"),
    }),
    onSubmit: async (values) => {
      setIsCodeSent(true);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const response = await useVerifyOtp(values.code, userid);
      if (response.status == 0) {
        setShowCodeError(false);
        dispatch(authActions.login(response.data));
        navigate("/resetPassword");
      } else {
        setIsCodeSent(false);
        setShowCodeError(true);
      }
    },
  });
  return (
    <LoginPageContainer>
      {!userid && <Navigate to="/forgotPassword" replace={true} />}
      <ForgotPasswordForm>
        <KeyIcon />
        <form onSubmit={verificationCodeFormik.handleSubmit}>
          <label>
            Please enter the verification code sent to {authState.phone}
          </label>
          <input
            value={verificationCodeFormik.values.code}
            onChange={verificationCodeFormik.handleChange}
            onBlur={verificationCodeFormik.handleBlur}
            disabled={isCodeSent}
            name="code"
            id="code"
          />
          <div style={{ color: "coral" }}>
            {verificationCodeFormik.errors.code}
          </div>
          {showCodeError && (
            <div style={{ color: "coral" }}>Invalid or expired code</div>
          )}
          <div
            style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
          >
            <LoginButtonContainer isRequestSent={isCodeSent}>
              <Button
                disabled={isCodeSent}
                sx={{ color: "white" }}
                type="submit"
              >
                Submit
              </Button>
              {isCodeSent && (
                <CircularProgress size={20} sx={{ color: "white" }} />
              )}
            </LoginButtonContainer>
            <ResendCodeButton setShowError={setShowCodeError} />
          </div>
        </form>
        <Button
          onClick={() => navigate("/")}
          type="button"
          sx={{
            textDecoration: "underline",
            color: "gray",
            width: "max-content",
            margin: "auto",
          }}
        >
          Go back to login page
        </Button>
      </ForgotPasswordForm>
    </LoginPageContainer>
  );
}
