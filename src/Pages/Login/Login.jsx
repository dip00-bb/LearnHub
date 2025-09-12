import React, { use, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link,} from 'react-router';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../AppContext/Auth/AuthContext';
import { handleEmailPassLogIn } from '../../AuthenticationFunction/authfunction';
import { errorAlert, successAlert } from '../../Utilitis/alertmsg';

export default function Login() {

    useTitle("Login")

    const {userLogIn}=use(AuthContext)

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        handleEmailPassLogIn(userLogIn,formData,successAlert,errorAlert)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };




    return (
        <div
            className="min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8"
            style={{
                backgroundColor: 'var(--background-color)',
                color: 'var(--text-color)'
            }}
        >
            <div className="items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                {/* Logo */}
                <div className="flex justify-center items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    <div
                        className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl"
                        style={{ backgroundColor: 'var(--primary-color)' }}
                    >
                        LH
                    </div>
                    <span
                        className="ml-2 text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold"
                        style={{ color: 'var(--text-color)' }}
                    >
                        Learning Hub
                    </span>
                </div>

                {/* Welcome Text */}
                <div className="text-center mb-6 sm:mb-8 md:mb-8 lg:mb-10">
                    <h1
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-1 sm:mb-2 px-2"
                        style={{ color: 'var(--text-color)' }}
                    >
                        Welcome back!
                    </h1>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                    {/* Email */}
                    <div>
                        <label
                            className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                            style={{ color: 'var(--text-color)' }}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                            style={{
                                backgroundColor: 'var(--background-color)',
                                color: 'var(--text-color)',
                                borderColor: '#d1d5db',
                                '--tw-ring-color': 'var(--primary-color)'
                            }}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                            style={{ color: 'var(--text-color)' }}
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                onChange={handleInputChange}
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-10 sm:pr-12 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                                style={{
                                    backgroundColor: 'var(--background-color)',
                                    color: 'var(--text-color)',
                                    borderColor: '#d1d5db',
                                    '--tw-ring-color': 'var(--primary-color)'
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 p-1"
                                style={{ color: 'var(--text-color)' }}
                            >
                                {showPassword ? <EyeOff size={16} className="sm:w-5 sm:h-5" /> : <Eye size={16} className="sm:w-5 sm:h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Forgot Password Link */}
                    <div className="text-right">
                        <button
                            className="text-xs sm:text-sm font-medium hover:underline touch-manipulation"
                            style={{ color: 'var(--primary-color)' }}
                        >
                            Forgot Password?
                        </button>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="cursor-pointer w-full py-3 sm:py-4 rounded-full text-white font-medium text-base sm:text-lg hover:opacity-90 transition-opacity touch-manipulation"
                        style={{ backgroundColor: 'var(--primary-color)' }}
                    >
                        Sign In
                    </button>

                    {/* Register Link */}
                    <div className="text-center">
                        <span
                            className="text-xs sm:text-sm"
                            style={{ color: 'var(--text-color)' }}
                        >
                            Don't have an account?{' '}
                        </span>
                        <button>
                            <Link to='/register'
                                className="text-xs sm:text-sm font-medium hover:underline touch-manipulation"
                                style={{ color: 'var(--primary-color)' }}
                            >
                                Register
                            </Link>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="relative">
                        <div
                            className="absolute inset-0 flex items-center"
                        >
                            <div
                                className="w-full border-t"
                                style={{ borderColor: '#e5e7eb' }}
                            ></div>
                        </div>
                        <div className="relative flex justify-center text-xs sm:text-sm">
                            <span
                                className="px-3 sm:px-4"
                                style={{
                                    backgroundColor: 'var(--background-color)',
                                    color: 'var(--text-color)'
                                }}
                            >
                                Or sign in with
                            </span>
                        </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <button
                            type="button"
                            className=" cursor-pointer flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors touch-manipulation text-xs sm:text-sm"
                            style={{
                                backgroundColor: 'var(--background-color)',
                                color: 'var(--text-color)',
                                borderColor: '#d1d5db'
                            }}
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="truncate">Sign in with Google</span>
                        </button>
                        <button
                            type="button"
                            className="cursor-pointer flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors touch-manipulation text-xs sm:text-sm"
                            style={{
                                backgroundColor: 'var(--background-color)',
                                color: 'var(--text-color)',
                                borderColor: '#d1d5db'
                            }}
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            <span className="truncate">Sign in with Apple</span>
                        </button>
                    </div>
                </form>
            </div>


        </div>
    );
}