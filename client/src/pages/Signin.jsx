import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSilce";


import Back from "../img/back.png";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !formData.email || !formData.password) {
      return dispatch(signInFailure('please fill all the fields'));
    }

    try {
      dispatch(signInStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
     
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/event');
      }
    } catch (error) {
      dispatch(signInFailure(data.message));
    }
  };

  return (
    
    <div className=" gap-0">
      <div><img src={Back} className="w-full h-[500px] rounded-lg " alt="" /></div>

      

     
      
        <div className=" w-[440px] h-[300px]   bg-slate-300 opacity-75 ml-[500px]  rounded-2xl z-0 mt-[-440px]  absolute">
         
          <div className="flex justify-center items-center mt-2 ">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5  ">
              <div className="flex-1">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                 
                  <div>
                    <h3 className="font-semibold text-slate-400 ml-1">Email</h3>

                    <input
                      className=" bg-slate-100 p-3 rounded-lg w-[300px] h-11"
                      type="email"
                      placeholder="name@company.com"
                      id="email"
                      onChange={handlchange}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-400 ml-1">
                      Password
                    </h3>
                    <input
                      className=" bg-slate-100 p-3 rounded-lg w-[300px] h-11"
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={handlchange}
                    />
                  </div>
                  <button
                    className=" bg-blue-700 text-white p-3 rounded-lg w-[300px] h-11 hover:opacity-90"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <sapn className="pl-3">Loading...</sapn>
                      </>
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </form>
                
                {errorMessage && (
                  <p className="mt-5 text-red-600 bg-black w-300 h-7 rounded-lg text-center ">
                    {errorMessage}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}
