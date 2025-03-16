import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./Signin.css";

const Signin = () => {
  const navigate = useNavigate();
  
  // Formik setup with validation
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      keepLoggedIn: false, // Default value
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      // Redirect to dashboard after form submission
      navigate("/dashboard");
    },
  });

  return (
    <div className="login-container py-4 px-5 d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow rounded border-0">
        <h3 className="text-center fw-bold">Login</h3>
        <p className="text-center mb-4">
          Don’t have an account yet?{" "}
          <a href="#" className="text-primary fw-semibold">
            Create an account
          </a>
        </p>

     
        <button className="btn bg-white google-btn btn-light d-flex align-items-center justify-content-center gap-2 w-100 py-2 border rounded">
          <img
            src="https://img.icons8.com/color/24/000000/google-logo.png"
            alt="Google"
          />
          <span className="fw-semibold">Sign up with Google</span>
        </button>

  
        <div className="d-flex align-items-center my-3">
          <hr className="flex-grow-1" />
          <span className="mx-2 text-muted or">OR</span>
          <hr className="flex-grow-1" />
        </div>


        <form onSubmit={formik.handleSubmit}>
  
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              className={`form-control p-2 ${
                formik.touched.username && formik.errors.username
                  ? "is-invalid"
                  : ""
              }`}
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="invalid-feedback">{formik.errors.username}</div>
            )}
          </div>

        
          <div className="mb-2">
            <div className="d-flex rem-div align-items-center justify-content-between">
              <label className="form-label fw-semibold">Password</label>
              <a href="#" className="text-primary">
                Remember me
              </a>
            </div>
            <input
              type="password"
              className={`form-control p-2 ${
                formik.touched.password && formik.errors.password
                  ? "is-invalid"
                  : ""
              }`}
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="invalid-feedback">{formik.errors.password}</div>
            )}
          </div>

          <div className="mb-3 form-check d-flex align-items-center gap-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="keepLoggedIn"
              {...formik.getFieldProps("keepLoggedIn")}
              checked={formik.values.keepLoggedIn}
            />
            <label className="form-check-label" htmlFor="keepLoggedIn">
              Keep me logged in
            </label>
          </div>

    
          <button type="submit" className="btnn text-white w-100 py-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
