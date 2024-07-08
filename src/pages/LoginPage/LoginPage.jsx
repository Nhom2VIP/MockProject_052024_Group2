import { useState } from "react";
import { Helmet } from "react-helmet";
import images from "../../assets/images/image";
import capitalizeFirstLetter from "../../utils/CapitalizeFirstLetter";
import { FcGoogle } from "react-icons/fc";
import validateEmail from "../../utils/isValidEmail";

const TITLE = 'Login Page';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Vui lòng điền đầy đủ thông tin.');
            alert('Vui lòng điền đầy đủ thông tin.')
            return;
        }

        if (!validateEmail(email)) {
            setError('Email không hợp lệ');
            alert('Email không hợp lệ')
            return;
        }

        if (email === 'user@example.com' && password === 'password123') {
            if(rememberMe){
                alert('Đăng nhập thành công và token giữ trong 30 ngày!');
            } else{
                alert('Đăng nhập thành công!');
            }
            setError('');
        } else {
            setError('Email hoặc mật khẩu không đúng.');
            alert('Email hoặc mật khẩu không đúng.')
        }

        console.log('email:', email);
        console.log('pass:', password);
    }

    const handleRegister = () => {
        alert(`Not don't yet!`);
    }

    const handleGoogleSignIn = () => {
        alert(`Not don't yet!`);
    }

    const handleForgotPassword = () => {
        alert(`Not don't yet!`);
    }

    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    }

    error && console.error('Error:', error);


    return(
        <section className="flex w-full">
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div className="hidden md:w-1/2 md:block">
                <img src={images.loginBanner} className="h-screen w-full" alt="Login Thumbnail"/>
            </div>
            <div className="w-full md:w-1/2 flex flex-col h-screen items-center justify-center">
                <div className="max-w-xl w-full h-screen p-6 justify-center flex flex-col">
                    <h1 className="text-3xl font-semibold text-left text-primary">Login</h1>
                    <h1 className="text-sm mb-6 font-medium text-left">Welcome Back! Please enter your details.</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="floating_filled_email email"
                            name="email"
                            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-primary bg-primary border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                            placeholder=" "
                            />
                            <label 
                            htmlFor="floating_filled_email" 
                            className="absolute text-sm text-primary duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent"
                            >Email</label>
                        </div>
                        
                        <div className="relative">
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="floating_filled_password password"
                            name="password"
                            placeholder=" "
                            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-primary bg-primary border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                            />
                        <label
                        htmlFor="floating_filled_password" 
                        className="absolute text-sm text-primary duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent"
                        >Password</label>
                        </div>
                        <div className="w-full flex justify-between">
                            <div className="flex items-center">
                                <input id="checkbox" 
                                    className="w-4 h-4 mr-2" 
                                    type="checkbox" 
                                    checked={rememberMe}
                                    onChange={toggleRememberMe}/>
                                <span id="checkbox" className="text-sm">Remember me for 30 days</span>
                            </div>
                            <div onClick={() => {handleForgotPassword()}}
                            className="hover:scale-105 text-sm transform transition ease-in-out duration-300 hover:font-medium underline decoration-dotted underline-offset-2 cursor-pointer"
                            >{capitalizeFirstLetter('forgot password ?')}</div>
                        </div>
                        <button type="submit"
                        className="hover:scale-105 transform transition ease-in-out w-full bg-btnPrimary text-secondary py-3 font-semibold rounded-md hover:bg-buttonPrimaryHover focus:bg-button focus:outline-none duration-300"
                        >Login</button>
                    </form>
                    <button onClick={() => handleRegister()}
                        className="hover:scale-105 transform transition ease-in-out border border-black mt-5 w-full bg-btnSecondary text-primary py-3 font-semibold rounded-md focus:bg-button focus:outline-none duration-300"
                    >Register</button>
                    <div className="w-full my-5 relative">
                        <div className="absolute w-full h-[1px] z-0 bg-black top-1/2 transform -translate-y-1/2 left-0"></div>
                        <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 left-1/2 bg-primary px-2 text-center z-10">
                        or</div>
                    </div>
                    <button onClick={() => handleGoogleSignIn()}
                        className="flex items-center justify-center text-center hover:scale-105 transform transition ease-in-out border border-black w-full bg-btnSecondary text-primary py-3 font-semibold rounded-md focus:bg-button focus:outline-none duration-300"
                    ><FcGoogle className="mx-2"/>{capitalizeFirstLetter('sign in with google')}</button>
                </div>
                <div onClick={() => handleRegister()} className="mt-4 text-sm my-5 text-gray-600 text-center">
                    <p>Don&apos;t have an account? <a href="#" className="text-black underline">Sign up for free</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default LoginPage