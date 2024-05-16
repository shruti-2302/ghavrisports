import { useState } from "react";
import { Link } from "react-router-dom"

export default ({open,setopen}) => {
  const [email,setemail]= useState('');
 const [password,setpassword]=useState('');


const handleemailText=(evt)=>{
  setemail(evt.target.value);
};
const handlepasswordText=(evt)=>{
  setpassword(evt.target.value);
};
const handleLogin=(e)=>{
  e.preventDefault()
var obj={
  
  email:email,
  password:password
};
fetch("https://ghavaribackend.onrender.com/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(obj)
})
.then(response => response.json())
.then(data => {
  alert("Done");
  setopen(!open)
})
.catch(error => {
  console.error("Error:", error);
});
};

    return (
        <main className="w-full  flex flex-col items-center justify-center px-4" >
            <div className="max-w-sm w-full text-white space-y-5">
                <div className="text-center pb-8">

                    <div >
                        <h3 className="text-white text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                    </div>
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-5"
                >
                    <div>
                        <label className="font-medium">

                            Email
                        </label>
                        <input
                            type="email"
                            required onChange={handleemailText}
                            className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            required onChange={handlepasswordText}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div className="flex items-center justify-between text-sm">


                    </div>
                    <button
                      onClick={handleLogin} 
                       className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Login
                    </button>
                    <Link to={'/'}
                        className="no-underline block w-full px-4 py-2 my-3 text-center text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Back to home
                    </Link>

                </form>

            </div>
        </main>
    )
}