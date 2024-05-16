import React from 'react'
import { useState } from 'react';
const Contact = () => {
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
  return (
    <div>
      <section class="text-gray-600 body-font relative" id='contact'>
  <div class="absolute inset-0 bg-gray-300">
  <iframe
  width="100%"
  height="800"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
  title="map"
  // scrolling="no"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.4246596138397!2d75.901301!3d22.5816629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e505a293f883%3A0xd4b1a3ea083fbee6!2sGhavri%20Sports%20Academy!5e0!3m2!1sen!2sin!4v1633063785812!5m2!1sen!2sin"
></iframe>
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-slate-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact us</h2>
      <div class="relative mb-4">
        <label for="text" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="email" id="email" name="email" onChange={handlenameText} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Phone number</label>
        <input type="email" id="email" name="email" onChange={handlenumberText} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" onChange={handleemailText} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" onChange={handlemessageText} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button onClick={handleSubmit} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none  hover:bg-indigo-600 rounded text-lg">Submit</button>

    </div>
  </div>
</section>
    </div>
  )
}

export default Contact