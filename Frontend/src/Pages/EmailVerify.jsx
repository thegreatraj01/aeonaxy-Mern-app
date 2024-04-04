import React from 'react';
import Layout from '../Components/Layout';

const EmailVerification = () => {
    return (
        <Layout>
            <div className="p-4 bg-white mx-auto mt-12 mb-8">
                <div className='mx-auto text-center'>
                    <h2 className="text-2xl font-bold text-center mb-4">Please verify your email</h2>
                    <svg className='mx-auto text-slate-600 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M22 8.98V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1 0 1.48.65 2.79 1.67 3.71L12 11 4 6v2l8 5 5.3-3.32c.54.2 1.1.32 1.7.32 1.13 0 2.16-.39 3-1.02zM16 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></svg>
                </div>

                <p className="text-center mb-4">
                    Please verify your email address. We've sent a confirmation email to: <br></br><span className="font-bold text-pink-500">account@refero.design</span>
                </p>
                <p className="text-center mb-4">
                    Click the confirmation link in that email to begin using Dribbble.
                </p>
                <div className="text-center">
                    <button className=" text-blue-600 py-2 px-4 rounded">
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