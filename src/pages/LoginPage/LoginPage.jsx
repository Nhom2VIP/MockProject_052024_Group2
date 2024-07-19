import { useState } from 'react';
import { Helmet } from 'react-helmet';
import images from '../../assets/images/image';
import capitalizeFirstLetter from '../../utils/CapitalizeFirstLetter';
import { FcGoogle } from 'react-icons/fc';
import validateEmail from '../../utils/isValidEmail';

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
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Email không hợp lệ');
      alert('Email không hợp lệ');
      return;
    }

    if (email === 'user@example.com' && password === 'password123') {
      if (rememberMe) {
        alert('Đăng nhập thành công và token giữ trong 30 ngày!');
      } else {
        alert('Đăng nhập thành công!');
      }
      setError('');
    } else {
      setError('Email hoặc mật khẩu không đúng.');
      alert('Email hoặc mật khẩu không đúng.');
    }

    console.log('email:', email);
    console.log('pass:', password);
  };

  const handleRegister = () => {
    alert(`Not don't yet!`);
  };

  const handleGoogleSignIn = () => {
    alert(`Not don't yet!`);
  };

  const handleForgotPassword = () => {
    alert(`Not don't yet!`);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  error && console.error('Error:', error);

  return (
    <section className="flex w-full">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="hidden md:block md:w-1/2">
        <img
          src={images.loginBanner}
          className="h-screen w-full"
          alt="Login Thumbnail"
        />
      </div>
      <div className="flex h-screen w-full flex-col items-center justify-center md:w-1/2">
        <div className="flex h-screen w-full max-w-xl flex-col justify-center p-6">
          <h1 className="text-left text-3xl font-semibold text-primary">
            Login
          </h1>
          <h1 className="mb-6 text-left text-sm font-medium">
            Welcome Back! Please enter your details.
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="floating_filled_email email"
                name="email"
                className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-secondary bg-primary px-2.5 pb-2.5 pt-5 text-sm text-primary focus:border-secondary focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="floating_filled_email"
                className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-primary duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-accent rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="floating_filled_password password"
                name="password"
                placeholder=" "
                className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-secondary bg-primary px-2.5 pb-2.5 pt-5 text-sm text-primary focus:border-secondary focus:outline-none focus:ring-0"
              />
              <label
                htmlFor="floating_filled_password"
                className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-primary duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-accent rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Password
              </label>
            </div>
            <div className="flex w-full justify-between">
              <div className="flex items-center">
                <input
                  id="checkbox"
                  className="mr-2 h-4 w-4"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={toggleRememberMe}
                />
                <span id="checkbox" className="text-sm">
                  Remember me for 30 days
                </span>
              </div>
              <div
                onClick={() => {
                  handleForgotPassword();
                }}
                className="transform cursor-pointer text-sm underline decoration-dotted underline-offset-2 transition duration-300 ease-in-out hover:scale-105 hover:font-medium"
              >
                {capitalizeFirstLetter('forgot password ?')}
              </div>
            </div>
            <button
              type="submit"
              className="hover:bg-buttonPrimaryHover focus:bg-button w-full transform rounded-md bg-btnPrimary py-3 font-semibold text-secondary transition duration-300 ease-in-out hover:scale-105 focus:outline-none"
            >
              Login
            </button>
          </form>
          <button
            onClick={() => handleRegister()}
            className="focus:bg-button mt-5 w-full transform rounded-md border border-black bg-btnSecondary py-3 font-semibold text-primary transition duration-300 ease-in-out hover:scale-105 focus:outline-none"
          >
            Register
          </button>
          <div className="relative my-5 w-full">
            <div className="absolute left-0 top-1/2 z-0 h-[1px] w-full -translate-y-1/2 transform bg-black"></div>
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform bg-primary px-2 text-center">
              or
            </div>
          </div>
          <button
            onClick={() => handleGoogleSignIn()}
            className="focus:bg-button flex w-full transform items-center justify-center rounded-md border border-black bg-btnSecondary py-3 text-center font-semibold text-primary transition duration-300 ease-in-out hover:scale-105 focus:outline-none"
          >
            <FcGoogle className="mx-2" />
            {capitalizeFirstLetter('sign in with google')}
          </button>
        </div>
        <div
          onClick={() => handleRegister()}
          className="my-5 mt-4 text-center text-sm text-gray-600"
        >
          <p>
            Don&apos;t have an account?{' '}
            <a href="#" className="text-black underline">
              Sign up for free
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
