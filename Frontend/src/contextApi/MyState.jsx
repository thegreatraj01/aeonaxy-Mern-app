import React, { useState } from 'react';
import Mycontext from './Mycontext.jsx';

const MyState = ({ children }) => {
    // Define your state here
    const [count, setCount] = useState(0);
    const [ProfilePic, setProfilePic] = useState();

    return (
        <Mycontext.Provider value={{ count, setCount }}>
            {children}
        </Mycontext.Provider>
    );
};

export default MyState;
