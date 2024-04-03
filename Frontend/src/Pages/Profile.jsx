import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="bg-white rounded-lg  p-4">
            <div>
                <h1 className=' font-semibold text-2xl ps-2 pt-2 text-pink-500 font-neue' style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}><Link to='/'>Dribble</Link></h1>
            </div>

            <div className='w-1/2 mt-6 mx-auto'>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome! Let's create your profile</h2>
                <p className="text-gray-600 mb-6">Let others get to know you better! You can do these later</p>
                <form>
                    <div className="mb-4">
                        <p className="block text-gray-700 mb-2 text-md  font-semibold">Add an avatar</p>
                        <div className="flex justify-start">
                            <label htmlFor="avatar-upload" className="flex flex-col items-center justify-center  border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100 rounded-full w-36 h-36 ">
                                <div className="flex flex-col items-center">
                                    <svg aria-hidden="true" className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>

                                </div>
                                <input id="avatar-upload" type="file" className="hidden" />
                            </label>
                            <div className='ms-6 mt-6'>
                                <label htmlFor="avatar-upload" className='font-bold text-slate-700 p-2 border-2 rounded-md'>Choose Image </label>
                                <p className=' text-slate-300 font-semibold text-md  mt-3'> {">"} Or choose one of our defaults </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 font-semibold text-md">Add your location</label>
                        <input type="text" placeholder="Enter a location" className="w-full px-3 py-2 border-b border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-4 mt-8 w-44">
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Next
                        </button>
                    </div>
                    
                </form>
            </div>

        </div>
    );
};

export default Profile;