import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useFormik } from "formik";
import { object, string ,ref } from "yup";
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
const SignUp = () => {

    let userSchema = object({
        name: string().required(),
        email: string().required().email(),
        password: string().required().min(6),
        confirmPassword: string().oneOf([ref('password'),null],"Password must match").required(),        
    });

    const formik = useFormik({
        validationSchema: userSchema,
        initialValues:{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: (data)=>{
            console.log(data);
            signUpApiCall(data);
        }
    })

    const { errors , getFieldProps} = formik;
    useEffect(()=>{
        console.log(errors);    
    },[errors])

    const signUpApiCall = (data) => {
      console.log(apiUrl);
      axios.post(`${apiUrl}/api/users/signup`,data).then(res=>{
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    }
    
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <a
                href="#"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </a>
            </p>
            <form noValidate onSubmit={formik.handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base flex items-center font-medium text-gray-900"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                      {...getFieldProps('name')}
                    ></input>
                    {
                        errors.name&&
                        <label className="text-sm text-red-700">
                            {errors.name}
                        </label>
                    }
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base flex items-center font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      {...getFieldProps('email')}
                    ></input>
                    {
                        errors.email &&
                        <label className="text-sm text-red-700">
                            {errors.email}
                        </label>
                    }
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      {...getFieldProps('password')}
                    ></input>
                    {
                        errors.password&&
                        <label className="text-sm text-red-700">
                            {errors.password}
                        </label>
                    }
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="confirmpassword"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      confirmPassword{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Re-type Password"
                      id="conformpassword"
                      {...getFieldProps('confirmPassword')}
                    ></input>
                    {
                        errors.confirmPassword&&
                        <label className="text-sm text-red-700">
                            {errors.confirmPassword}
                        </label>
                    }
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
