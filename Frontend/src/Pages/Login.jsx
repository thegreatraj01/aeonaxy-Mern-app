import React, { useState } from "react";
import login_image from "../images/login-image.png";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { url } from "../config";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [passwordtoggle, setpasswordtoggle] = useState(false);
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .matches(
                /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).*$/,
                'Password must contain at least one number, one uppercase letter, and one special character'
            )
            .required('Password is required'),
        agreeTerms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: '',
            agreeTerms: false,
        },
        validationSchema: validationSchema,

        onSubmit: async (values) => {
            try {
                // alert("hi")
                const response = await axios.post(`${url}/register`, values);
                // console.log(response);
                if (response.status === 201) {
                    localStorage.setItem('login', true);
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    formik.resetForm();
                    navigate('/profile');
                    alert(response.data.message)
                }
            } catch (error) {
                console.log(error);
                alert(error.response.data.message);
            }
        },
    });

    return (
        <div className="p-4 lg:p-0 flex max-h-[100vh] justify-center">
            <div className="hidden md:block w-[35%]">
                <img
                    src={login_image}
                    alt="login"
                    className="bg-cover bg-center object-cover w-child h-full"
                />
            </div>

            <div className="md:w-[65%] bg-white min-h-screen ">
                <div className="my-4 me-5">
                    <p className="md:text-end text-gray-500">
                        Already a member?{" "}
                        <Link className="text-blue-500" to="#">
                            Sign In
                        </Link>
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-4 text-black ">
                            Sign up to Dribbble
                        </h2>

                        <div className="my-3 flex">
                            <div className="w-1/2 mr-2">
                                <label htmlFor="name" className="block text-gray-700">
                                    Name
                                </label>
                                <input
                                    placeholder="Jhon"
                                    type="text"
                                    id="name"
                                    {...formik.getFieldProps('name')}
                                    className="px-4 py-2 border-gray-200 rounded-md bg-gray-100 text-gray-500 w-full"
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="text-red-500">{formik.errors.name}</div>
                                ) : null}
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="username" className="block text-gray-700">
                                    Username
                                </label>
                                <input
                                    placeholder="@Joneysing"
                                    type="text"
                                    id="username"
                                    {...formik.getFieldProps('username')}
                                    className="px-4 py-2 border-gray-200 rounded-md bg-gray-100 text-gray-500 w-full"
                                />
                                {formik.touched.username && formik.errors.username ? (
                                    <div className="text-red-500">{formik.errors.username}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className="my-4">
                            <label htmlFor="email" className="block text-gray-700">
                                Email
                            </label>
                            <input
                                placeholder="account@refero.design"
                                type="email"
                                id="email"
                                {...formik.getFieldProps('email')}
                                className="px-4 py-2 border-gray-200 rounded-md bg-gray-100 text-gray-500 w-full"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="my-4 relative">
                            <label htmlFor="password" className="block text-gray-700">
                                Password
                            </label>
                            <div className=" relative">
                                <input
                                    placeholder="6+ characters"
                                    type={passwordtoggle === false ? "password" : 'text'}
                                    id="password"
                                    {...formik.getFieldProps('password')}
                                    className="px-4 py-2 border-gray-200 rounded-md bg-gray-100 text-gray-500 w-full"
                                />
                                <p className="absolute right-2 bottom-2" onClick={() => setpasswordtoggle(!passwordtoggle)}>
                                    {passwordtoggle === false ? 'show' : 'hide'}
                                </p>
                            </div>

                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-500">{formik.errors.password}</div>
                            ) : null}
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center">
                                <input
                                    id="agree-terms"
                                    type="checkbox"
                                    checked={formik.values.agreeTerms}
                                    onBlur={formik.handleBlur}
                                    onChange={() => formik.setFieldValue('agreeTerms', !formik.values.agreeTerms)}
                                    className="focus:ring-blue-500 h-6 w-6 text-blue-700 border-gray-300 rounded self-start"
                                />


                                <label
                                    htmlFor="agree-terms"
                                    className="block text-gray-700 ml-2 cursor-pointer" // Added cursor-pointer for better UX
                                >
                                    Creating an account means you're okay with our
                                    <Link
                                        className="text-blue-800 ml-1"
                                        to="#"
                                    >
                                        Privacy Policy
                                    </Link>
                                    ,
                                    <Link
                                        className="text-blue-800 ml-1"
                                        to="#"
                                    >
                                        Terms of Service
                                    </Link>
                                    , and
                                    <Link
                                        className="text-blue-800 ml-1"
                                        to="#"
                                    >
                                        default Notification Settings
                                    </Link>
                                </label>
                            </div>
                            {formik.touched.agreeTerms && formik.errors.agreeTerms ? (
                                <div className="text-red-500">{formik.errors.agreeTerms}</div>
                            ) : null}
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                disabled={formik.isSubmitting || !formik.isValid}
                                className="w-1/2 py-2 px-4 font-medium text-white bg-pink-500 rounded-md hover:bg-pink-600 focus:outline-none"
                            >
                                {formik.isSubmitting ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </div>

                        <p className="mt-5 text-gray-500">
                            This site is protected by reCAPTCHA and the Google
                            <Link className="text-blue-500" to="#">
                                Privacy Policy
                            </Link>
                            and
                            <Link className="text-blue-500" to="#">
                                Terms of Service
                            </Link>
                            apply.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
