import { useEffect, useState } from "react"
import React from 'react'

const Dashboard = () => {
    const [tableItems,settableItems] = useState([ {} ])
useEffect(()=>{
    fetch("https://ghavaribackend.onrender.com/contact", {
        method: "GET"
    })
        .then(response => response.json())
        .then(data => {
           settableItems(data);
            //console.log(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
},[])
  return (
    <div>
       <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-lg">
                <h3 className="text-white text-xl font-bold sm:text-2xl">
                    Inquiry Data
                </h3>
               
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-black font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Number</th>
                            <th className="py-3 px-6">Message</th>
                        </tr>
                    </thead>
                    <tbody className="text-white divide-y">
                        {
                            tableItems?.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.number}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.message}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Dashboard

