import { images } from "@/assets";
import {
  ForgotPassword,
  LoginButtonContainer,
  LoginForm,
  LoginPageContainer,
} from "./styles";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import handleLogin from "@/hooks/useLogin";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/globalHooks";
import { authActions } from "@/features/authentication/authSlice";
import { useFormik } from "formik";
import { validationSchema } from "@/pages/login/validationSchema";
import { apiResult, formInterface } from "@/pages/login/interfaces";

export default function Login() {
  const dispatch = useAppDispatch();
  const [isError, setIsError] = useState(false);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const state = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = async (values: formInterface) => {
    setIsRequestSent(true);
    const response: apiResult = await handleLogin({
      phone: values.phone,
      password: values.password,
    });
    if (response.status === 1) {
      setIsError(true);
      setIsRequestSent(false);
      console.log("state not updated");
    } else {
      const user = response.data.user;
      const token = response.data.token;
      setIsError(false);
      dispatch(authActions.login({ user, token }));
      dispatch(authActions.updatePhoneNumber(values.phone));
      navigate("/home");
    }
  };
  const formData = {
    phone: "",
    password: "",
    keepLoggedIn: false,
  };

  const formik = useFormik({
    initialValues: formData,
    validationSchema: validationSchema,
    onSubmit: async (values: formInterface) => await handleSubmit(values),
  });

  return (
    <LoginPageContainer>
      <LoginForm>
        <figure>
          <img src={images.logo} />
        </figure>
        <Typography className="formTitle">Landord Login</Typography>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="formInput">
            <label htmlFor="phone">Phone Number</label>
            <input
              disabled={isRequestSent}
              className="input"
              value={formik.values.phone}
              id="phone"
              name="phone"
              type="text"
              placeholder="e.g 0712345678"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.phone && formik.errors.phone && (
              <Typography color="coral" fontSize=".9rem">
                {formik.errors.phone}
              </Typography>
            )}
          </div>
          <div className="formInput">
            <label htmlFor="password">Password</label>
            <input
              disabled={isRequestSent}
              className="input"
              value={formik.values.password}
              id="password"
              name="password"
              type="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password && (
              <Typography color="coral" fontSize=".9rem">
                {formik.errors.password}
              </Typography>
            )}
          </div>
          <>
            {isError && (
              <Typography textAlign="center" margin=".75rem" color="coral">
                Invalid phone number or password
              </Typography>
            )}
          </>
          {/* <div className='keepLoggedInSection'>
            <label>Keep me signed in</label>
              <input 
              checked={formik.values.keepLoggedIn}
              type='checkbox'
              onChange={formik.handleChange}
              name='keepLoggedIn' style={{marginLeft:'1rem'}}/>
          </div> */}
          <LoginButtonContainer isRequestSent={isRequestSent}>
            <Button disabled={isRequestSent} className="button" type="submit">
              Sign In
            </Button>
            {isRequestSent && (
              <CircularProgress size={25} sx={{ color: "white" }} />
            )}
          </LoginButtonContainer>
        </form>
        <ForgotPassword className="forgotPassword">
          <Button onClick={() => navigate("/forgotPassword")}>
            Forgot password? Click to reset
          </Button>
        </ForgotPassword>
      </LoginForm>
    </LoginPageContainer>
  );
}
