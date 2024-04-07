import React, { useState } from 'react';
import Mycontext from './Mycontext.jsx';
import axios from 'axios';
import { url } from '../config.js';

const MyState = ({ children }) => {
    // Define your state here
    const [ProfilePic, setProfilePic] = useState("");
    const [location, setLocation] = useState("");
    const [profileType, setprofileType] = useState("");
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log(user);


    const data = new FormData();
    data.append('profilePic', ProfilePic);
    data.append('location', location);
    data.append('profileType', profileType);
    data.append('userId', user?._id);


    const hanldeFormSubmit = async () => {
        try {
            const response = await axios.put(`${url}/updateprofile`, data);
            if (response.status === 200) {
                alert(`We have sent you an email on ${user.email} please verify your email`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Mycontext.Provider value={{ ProfilePic, location, profileType, setProfilePic, setLocation, setprofileType, hanldeFormSubmit }}>
            {children}
        </Mycontext.Provider>
    );
};

export default MyState;
