import {useState} from 'react';
import {FaGoogle, FaFacebook} from "react-icons/fa6";

import {auth , googleAuth, facebookAuth} from "../../config/firebase.js";
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
                <p className="text-7xl font-extrabold">TaskNest</p>
                <p>An advanced to-do list for daily use.</p>
            </section>
            <hr className="my-8" />
            <section className="flex items-center justify-center w-full">
                <div className="w-2/3 sm:w-2/5 md:w-1/4 border border-black rounded-lg p-4">
                    <input className='w-full mb-1 text-xl p-1' placeholder="email" type="email" />
                    <input className='w-full mb-1 text-xl p-1' placeholder="password" type="password" />
                    {
                        loginType?<input className='w-full mb-2' placeholder="comfirm-password" type="password" />
                                        :''
                    }

                    <button className='w-full bg-gray-950 text-center text-white text-xl rounded my-1 p-1'>Login</button>
                    <div className='w-full flex justify-end'>
                        <p onClick={switchTypes}>{loginType?"Already have an account?":"Create account?"}</p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <hr className='w-full border-black' />
                        <p className='p-4'>or</p>
                        <hr className='w-full border-black'/>
                    </div>
                    <div className="flex items-center justify-center w-full gap-2">
                        <FaGoogle onClick={()=>signIn(googleAuth)} className='text-4xl p-1 border rounded-full'/>
                        <FaFacebook onClick={()=>signIn(facebookAuth)} className='text-4xl p-1 border rounded-full'/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;