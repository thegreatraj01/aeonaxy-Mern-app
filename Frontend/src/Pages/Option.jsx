import React, { useState } from "react";
import { Link } from "react-router-dom";
import hire_img from '../images/hire.png';
import designer_img from '../images/designer.png';
import inspire_img from '../images/inspire.png';

const Option = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (option) => {
        if (selectedOption === option) {
            setSelectedOption(null); // Unselect if already selected
        } else {
            setSelectedOption(option);
        }
    };

    return (
        <div className="bg-white rounded-lg p-4">
            <div className="flex">
                <h1 className="font-semibold text-2xl ps-2 pt-2 text-pink-500 font-neue" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                    <Link to="/">Dribbble</Link>
                </h1>
                <Link className="ms-5 mt-3 h-8 w-8 bg-slate-100 rounded-md text-center">{"<"}</Link>
            </div>

            <div className="w-2/3 mt-6 mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">What brings you to Dribbble?</h2>
                <p className="text-gray-600 mb-6 text-center">Select the options that best describe you. Don't worry, you can explore other options later.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">

                    <div className="bg-white rounded-lg shadow-md p-4 border min-h-[43vh] flex flex-col flex-grow-2 relative">
                        <div className={`flex flex-col items-center justify-center`}>
                            <div className={`text-center ${selectedOption === 'designer' ? "-translate-y-14" : ""}`}>
                                <img className="h-36 mx-auto" src={designer_img} alt="looding for designer" />
                                <p className="text-gray-800 font-semibold text-center">
                                    I'm a designer looking to share my work
                                </p>
                                <p className={selectedOption === 'designer' ? "" : "hidden"}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="flex items-center justify-center absolute bottom-4 left-0 right-0">
                                <input name="option" type="radio" className="rounded-full form-checkbox text-blue-500 h-5 w-5" onChange={() => handleRadioChange('designer')} checked={selectedOption === 'designer'} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4 border min-h-[43vh] flex flex-col flex-grow-2 relative">
                        <div className={`flex flex-col items-center justify-center`}>
                            <div className={`text-center ${selectedOption === 'hire' ? "-translate-y-14" : ""}`}>
                                <img className="h-36 mx-auto" src={hire_img} alt="hiring" />
                                <p className="text-gray-800 font-semibold text-center">
                                    I'm looking to hire a designer
                                </p>
                                <p className={selectedOption === 'hire' ? "" : "hidden"}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="flex items-center justify-center absolute bottom-4 left-0 right-0">
                                <input name="option" type="radio" className="rounded-full form-checkbox text-blue-500 h-5 w-5" onChange={() => handleRadioChange('hire')} checked={selectedOption === 'hire'} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4 border min-h-[43vh] flex flex-col flex-grow-2 relative">
                        <div className={`flex flex-col items-center justify-center`}>
                            <div className={`text-center ${selectedOption === 'inspire' ? "-translate-y-14" : ""}`}>
                                <img className="h-36 mx-auto" src={inspire_img} alt="inspiration" />
                                <p className="text-gray-800 font-semibold text-center">
                                    I'm looking for design inspiration
                                </p>
                                <p className={selectedOption === 'inspire' ? "" : "hidden"}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="flex items-center justify-center absolute bottom-4 left-0 right-0">
                                <input name="option" type="radio" className="rounded-full form-checkbox text-blue-500 h-5 w-5" onChange={() => handleRadioChange('inspire')} checked={selectedOption === 'inspire'} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <button className="bg-pink-500 text-white px-6 py-3 rounded-md font-semibold">Finish</button>
                </div>
            </div>
        </div>
    )
};

export default Option;
