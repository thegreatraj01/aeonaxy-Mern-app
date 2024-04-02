import React from "react";
import login_image from "../images/login-image.png";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
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
        onSubmit: (values) => {
            console.log('Form submitted with values:', values);
            // Here you can submit the form data and create an account
        },
    });

    return (
        <div className="flex max-h-[100vh]">
            <div className="hidden md:block w-[35%]">
                <img
                    src={login_image}
                    alt="login"
                    className="bg-cover bg-center object-cover w-child h-full"
                />
            </div>

            <div className="w-[60%] bg-white min-h-screen ">
                <div className="my-4">
                    <p className="text-end text-gray-500">
                        Already a member?{" "}
                        <Link className="text-blue-500" to="/signin">
                            Sign In
                        </Link>
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-4 text-black ">
                            Sign up to Dribbble
                        </h2>
                        <p className="text-red-500 mb-4">{formik.errors.username}</p>
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
                        <div className="my-4">
                            <label htmlFor="password" className="block text-gray-700">
                                Password
                            </label>
                            <input
                                placeholder="6+ characters"
                                type="password"
                                id="password"
                                {...formik.getFieldProps('password')}
                                className="px-4 py-2 border-gray-200 rounded-md bg-gray-100 text-gray-500 w-full"
                            />
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
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="focus:ring-blue-500 h-6 w-10 text-blue-700 border-gray-300 rounded self-start"
                                />
                                <label
                                    htmlFor="agree-terms"
                                    className="block text-gray-700 ml-2"
                                >
                                    Creating an account means you're okay with our
                                    <Link
                                        className="text-blue-800 ml-1"
                                        to="/privacy-policy"
                                        target="_blank"
                                    >
                                        Privacy Policy
                                    </Link>
                                    ,
                                    <Link
                                        className="text-blue-800 ml-1"
                                        to="/terms-of-service"
                                        target="_blank"
                                    >
                                        Terms of Service
                                    </Link>
                                    , and
                                    <Link
                                        className="text-blue-800 ml-1"
                                        to="/notification-settings"
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
                            <Link className="text-blue-500" to="/privacy-policy">
                                Privacy Policy
                            </Link>
                            and
                            <Link className="text-blue-500" to="/terms-of-service">
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
