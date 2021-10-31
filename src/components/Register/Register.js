import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from '../../hooks/useAuth';

const Register = () => {
 
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/register';
 
 const {handleGoogleSignIn, error} = useAuth();

 const signInWithGoogle = () =>{
    handleGoogleSignIn();
    history.push(redirect_url);
 }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="mt-5 pt-5 mx-auto w-50">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2 w-100"
          placeholder="Name"
          {...register("name", {
            pattern: /^[A-Za-z]+$/i,
            required: true,
            maxLength: 20,
          })}
        />
        <br />
        <input
          className="mb-2 w-100"
          placeholder="Email"
          type="email"
          {...register("email", {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            required: true,
          })}
        />
        <br />
        <input
          className="mb-2 w-100"
          placeholder="Password"
          type="password"
          {...register("password", {
            pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
            required: true,
          })}
        />
        <br />
        <p className="text-danger">
          {errors.email && <span>Invalid Email !!!</span>}
          {errors.password && (
            <span>
              Required(6-16 characters, uppercase, lowercase, digit and special
              character)
            </span>
          )}
        </p>
        <input className="btn btn-success" type="submit" />
        &nbsp;<button onClick={signInWithGoogle} className="btn btn-danger">Google</button>
        <p className='text-danger'>{error}</p>
      </form>
    </div>
  );
};

export default Register;
