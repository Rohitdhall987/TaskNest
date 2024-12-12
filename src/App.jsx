import {useState} from 'react';
function App() {
    const [loginType,setLoginType]=useState(false);
    function switchTypes(){
        setLoginType(!loginType);
    }
    return (
        <>
            <section className="flex flex-col items-center justify-center w-full">
                <p className="text-7xl font-extrabold">TaskNest</p>
                <p>An advanced to-do list for daily use.</p>
            </section>
            <hr/>
            <section className="flex items-center justify-center w-full">
                <div className="w-1/4 border border-black rounded-lg p-4">
                    <input className='w-full' placeholder="email" type="email" />
                    <input className='w-full' placeholder="password" type="password" />
                    {
                        loginType?<input className='w-full' placeholder="comfirm-password" type="password" />
                                        :''
                    }

                    <button>Login</button>
                    <div className='w-full flex justify-end'>
                        <p onClick={switchTypes}>{loginType?"Already have an account?":"Create account?"}</p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <hr className='w-full border-black' />
                        <p className='p-4'>or</p>
                        <hr className='w-full border-black'/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;