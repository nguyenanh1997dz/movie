import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../Components/CustomInput";
import { LuLogIn } from "react-icons/lu";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { LoginValidation } from "../Components/Validation/userValidation";
import InlineError from "../Components/inlineError";
import { loginAction } from "../Redux/Action/userAction";
import toast from 'react-hot-toast'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, error } = useSelector(state => state.userLogin);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidation),
  });

  const onSubmit  = (data) => {
    dispatch(loginAction(data))
  };
  useEffect(() => {
    if (isSuccess) {
     navigate('/')
    }
    if (isError) {
      toast.error(error)
      dispatch({type: "USER_LOGIN_RESET"})
    }
  },[isSuccess,isError,isLoading,dispatch,navigate]);
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry  rounded-lg border border-border"
        >
          <img
            src="/images/logo.png"
            alt=""
            className="w-full h-12 object-contain"
          />
          <CustomInput
            name="email"
            register={register("email")}
            label="Email"
            placeholder="abc@gmail.com"
            type="text"
            bg={true}
          />
          {errors.email && (
            <InlineError error={errors.email.message}></InlineError>
          )}
          <CustomInput
            name="password"
            register={register("password")}
            label="Password"
            placeholder="******"
            type="password"
            bg={true}
          />
          {errors.password && (
            <InlineError error={errors.password.message}></InlineError>
          )}
          <button
            disabled = {isLoading}
            type="submit"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <LuLogIn />
            Submit
          </button>
          <p className="text-center text-border">
            Don't have an account?
            <Link className="text-dryGray font-semibold ml-2" to="/register">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
