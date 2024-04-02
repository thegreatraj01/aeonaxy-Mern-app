import React, { useState } from "react";
import login_image from "../images/login-image.png";

const Login = () => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            setErrorMessage("Username has already been taken");
        } else {
            setErrorMessage("");
            // Submit the form data and create an account
        }
    };

    return (
        <div className=" flex max-h-[100vh]">
            {/* image div start */}
            <div className="hidden md:block w-[35%]">
                <img
                    src={login_image}
                    alt="login-image"
                    className="bg-cover bg-center object-cover w-child h-full"
                />
            </div>
            {/* images div ends  */}

            <div className="w-[60%] bg-white min-h-screen ">
                <div className="my-4">
                    <p className="text-end text-gray-500">
                        Already a member?{" "}
                        <a className="text-blue-500" href="#">
                            Sign In
                        </a>
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <form onSubmit={handleSubmit} className="w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-4 text-black ">
                            Sign up to Dribbble
                        </h2>
                        <p className="text-red-500 mb-4">{errorMessage}</p>
                        <div className="my-3 flex">
                            <div className="w-1/2 mr-2">
                                <label htmlFor="name" className="block text-gray-700">
                                    Name
                                </label>
                                <input
                                    placeholder="Jhon"
                                    type="text"
                                    id="name"
                                    value={name}
                                    className="px-4 py-2 border-gray-200 rounded-md bg-gray-100 text-gray-500 w-full"
                                />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="username" className="block text-gray-700">
                                    Username
                                </label>
                                <input
                                    placeholder="@Joneysing"
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="px-4 py-2 border-gray-200 rounded-md bg-gray-100 text-gray-500 w-full"
                                />
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="px-4 py-2 border-gray-200 rounded-md bg-gray-100 text-gray-500 w-full"
                            />
                        </div>
                        <div className="my-4">
                            <label htmlFor="password" className="block text-gray-700">
                                Password
                            </label>
                            <input
                                placeholder="6+ characters"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="px-4 py-2 border-gray-200 rounded-md bg-gray-100 text-gray-500 w-full"
                            />
                        </div>

                        {/* terms and conditions start  */}
                        <div className="mb-4">
                            <div className="flex items-center">
                                <input
                                    id="agree-terms"
                                    type="checkbox"
                                    className="focus:ring-blue-500 h-6 w-10 text-blue-700 border-gray-300 rounded self-start"
                                />
                                <label
                                    htmlFor="agree-terms"
                                    className="block text-gray-700 ml-2"
                                >
                                    Creating an account means you're okay with our
                                    <a
                                        className="text-blue-800 ml-1"
                                        href="https://policies.google.com/privacy"
                                        target="_blank"
                                    >
                                        Privacy Policy
                                    </a>
                                    ,
                                    <a
                                        className="text-blue-800 ml-1"
                                        href="https://policies.google.com/terms"
                                        target="_blank"
                                    >
                                        Terms of Service
                                    </a>
                                    , and
                                    <a className="text-blue-800 ml-1" href="#">
                                        default Notification Settings
                                    </a>
                                </label>
                            </div>
                        </div>
                        {/* terms and conditions ends  */}

                        {/* submit button start */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                disabled={!username || password.length < 6}
                                className="w-1/2 py-2 px-4 font-medium text-white bg-pink-500 rounded-md hover:bg-pink-600 focus:outline-none"
                            >
                                Create Account
                            </button>
                        </div>
                        {/* submit button ends */}

                        <p className= "mt-5 text-gray-500">
                            This site is protected by reCAPTCHA and the Google
                            <a className="text-blue-500"  >
                                Privacy Policy
                            </a>
                            and
                            <a className="text-blue-500">
                                Terms of Service
                            </a>apply.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
