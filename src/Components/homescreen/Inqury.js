import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Inquiry = ({ open, setopen }) => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [number, setnumber] = useState('');
    const [message, setmessage] = useState('');

    const handlenameText = (evt) => {
        setname(evt.target.value);
    };

    const handleemailText = (evt) => {
        setemail(evt.target.value);
    };
    const handlenumberText = (evt) => {
        setnumber(evt.target.value);
    };
    const handlemessageText = (evt) => {
        setmessage(evt.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        var obj = {
            name: name,
            email: email,
            number: number,
            message: message
        };
        fetch("https://ghavaribackend.onrender.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(data => {
                alert("Done");
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };
    const navigate = useNavigate()
    const handlenavigate = () => {
        setopen(false); // Close the form
        navigate("/"); // Navigate to the home page
    }
    const handleClose = () => {
        setopen(false);
    }

    return (
        <>
            {open &&
                <>
                    <div className=" h-screen w-full fixed top-0 left-0 bg-black blur-2xl bg-opacity-0 z-[100]" />
                    <div className=" h-screen w-full fixed top-0 left-0 z-[100]">

                        <main >
                            <div className="max-w-screen-xl mx-auto px-4 text-black md:px-8">

                                <div className=" my-3 rounded max-w-lg mx-auto bg-white p-3">
                                    <form
                                        onSubmit={(e) => e.preventDefault()}
                                    >
                                        <button
                                            onClick={handleClose}
                                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                        <h3>Inquiry Form</h3>
                                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                                            <div>
                                                <label className="font-medium">
                                                    Name
                                                </label>
                                                <input
                                                    type="text" onChange={handlenameText}
                                                    required
                                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border focus:border-indigo-600 shadow-sm rounded-lg"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="font-medium">
                                                Email
                                            </label>
                                            <input
                                                type="email" onChange={handleemailText}
                                                required
                                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <label className="font-medium">
                                                Phone number
                                            </label>
                                            <div className="relative mt-2">
                                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                                        <option>US</option>
                                                        <option>ES</option>
                                                        <option>MR</option>
                                                        <option>IN</option>
                                                    </select>
                                                </div>
                                                <input
                                                    type="number" onChange={handlenumberText}
                                                    placeholder="+1 (555) 000-000"
                                                    required
                                                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="font-medium">
                                                Message
                                            </label>
                                            <textarea required
                                                onChange={handlemessageText}
                                                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                                        </div>
                                        <button onClick={handleSubmit}
                                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                                        >
                                            Submit
                                        </button>
                                        
                                    </form>
                                </div>
                            </div>
                        </main>
                    </div>
                </>
            }
        </>
    )
}