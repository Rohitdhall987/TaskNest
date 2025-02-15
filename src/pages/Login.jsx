import {useState} from 'react';
import {FaGoogle} from "react-icons/fa6";

import {auth , googleAuth, } from "../../config/firebase.js";
import {signInWithPopup}from "firebase/auth";

function Login() {
    const [loginType,setLoginType]=useState(false);
    function switchTypes(){
        setLoginType(!loginType);
    }

    function signIn(provider){
        signInWithPopup(auth ,provider).then((result)=>{alert(result.user.displayName)});
    }


    return (
        <>
            <section className="flex flex-col items-center justify-center w-full">
                <p className="text-7xl font-extrabold mt-8">TaskNest</p>
                <p>An advanced to-do list for daily use.</p>
            </section>
            <section className="flex items-center justify-center w-full mt-8 login-card-wrapper">
                {/*<div className="w-2/3 sm:w-2/5 md:w-1/4  p-4 login-card">*/}
                <div className=" p-4 login-card">
                    <input className='w-full mb-1 text-xl p-1' placeholder="email" type="email" />
                    <input className='w-full mb-1 text-xl p-1' placeholder="password" type="password" />
                    {
                        loginType?<input className='w-full mb-2' placeholder="comfirm-password" type="password" />
                                        :''
                    }

                    <button className='w-full bg-orange-400 text-center text-white text-xl rounded my-1 p-1'>Login</button>
                    <div className='w-full flex justify-end'>
                        <p onClick={switchTypes}>{loginType?"Already have an account?":"Create account?"}</p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <hr className='w-full border-black' />
                        <p className='px-4'>or</p>
                        <hr className='w-full border-black'/>
                    </div>
                    <div className="flex items-center justify-center w-full pt-3">
                        <FaGoogle onClick={()=>signIn(googleAuth)} className='text-4xl p-1 border rounded-full'/>
                     </div>
                </div>
            </section>
        </>
    );
}

export default Login;