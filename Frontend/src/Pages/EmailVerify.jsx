import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import axios from 'axios';
import { url } from '../config';
import { useLocation, useNavigate } from 'react-router-dom';

const EmailVerification = () => {
    const [user, setUser] = useState(null);
    const [verificationResult, setVerificationResult] = useState(null);

    const navigate = useNavigate();

    // Fetch user from localStorage
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser) {
            navigate('/'); // Navigate to homepage if no user is found
        }
        setUser(storedUser);
    }, [navigate]);

    // Extract token from URL params
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    // Function to resend confirmation email
    const handleResend = async () => {
        try {
            const response = await axios.post(`${url}/resendemail`, { userId: user._id });
            if (response.status === 200) {
                alert('Email sent successfully. Please check your email.');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to resend email. Please try again later.');
        }
    }

    // Function to verify email with token
    useEffect(() => {
        const verifyToken = async () => {
            if (!token || user) return;

            try {
                const response = await axios.get(`${url}/verifyemail?token=${token}`);
                if (response.status === 200) {
                    setVerificationResult('success');
                    alert('Verified email successfully');
                }
            } catch (error) {
                console.error(error);
                setVerificationResult('error');
            }
        }

        verifyToken();
    }, [token, user]);

    return (
        <Layout>
            <div className="p-4 bg-white mx-auto mt-12 mb-8">
                <div className='mx-auto text-center'>
                    <h2 className="text-2xl font-bold text-center mb-4">Please verify your email</h2>
                    <svg className={`mx-auto ${verificationResult === 'success' ? 'text-pink-500' : ''}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M22 8.98V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1 0 1.48.65 2.79 1.67 3.71L12 11 4 6v2l8 5 5.3-3.32c.54.2 1.1.32 1.7.32 1.13 0 2.16-.39 3-1.02zM16 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path>
                    </svg>
                </div>

                {verificationResult === 'success' && (
                    <p className="text-center mb-4">Email verified successfully.</p>
                )}
                {verificationResult === 'error' && (
                    <p className="text-center mb-4">Failed to verify email. Please try again later.</p>
                )}

                {verificationResult !== 'success' && (
                    <p className="text-center mb-4">
                        Please verify your email address. We've sent a confirmation email to: <br />
                        <span className="font-bold text-pink-500">{user?.email}</span>
                    </p>
                )}

                <p className="text-center mb-4">
                    Click the confirmation link in that email to begin using Dribbble.
                </p>
                <div className="text-center">
                    <button onClick={handleResend} className=" text-blue-600 py-2 px-4 rounded">
                        Resend confirmation email
                    </button>
                </div>
                <p className="text-center mt-2">
                    Wrong email address? <span className="underline text-pink-500">Change it</span>.
                </p>
            </div>
        </Layout>
    );
};

export default EmailVerification;
