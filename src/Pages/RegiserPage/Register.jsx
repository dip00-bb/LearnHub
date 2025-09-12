import React, { use, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router';
import useTitle from '../../Hooks/useTitle';

import { AuthContext } from '../../AppContext/Auth/AuthContext';
import { validatePassword } from '../../Functions/passwordValidation';
import { axiosPublic } from '../../AxiosInstance/useAxiosPublic';
import { axiosFileUpload } from '../../AxiosInstance/useFileUpload';

export default function Register() {


    useTitle("Register")

    const [formData, setFormData] = useState()

    const [showPassword, setShowPassword] = useState(false);

    const [passwordError, setPasswordError] = useState(null)

    const [profileImage, setProfileImage] = useState("")

    const [imageUrl, setImageUrl] = useState("")

    const { registerUser, updateUser, setUser } = use(AuthContext)


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };



    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (!file) return
        else {
            setProfileImage(file)
        }

    }


    const handleFileUpload = async () => {
        const file = profileImage
        if (!file) return
        else {
            const data = new FormData()
            data.append("file", file)
            data.append("upload_preset", "seller-product")
            data.append("cloud_name", "dxnz82n6g")
            const response = await axiosFileUpload.post('/dxnz82n6g/image/upload', data)
            setImageUrl(response.data.url)
        }

    }

    const handleSubmit = (e) => {
        console.log(formData)
        const validate = validatePassword(formData.password, setPasswordError)
        e.preventDefault()

        if (validate) {
            handleFileUpload()

            registerUser(formData.email, formData.password)
                .then((res) => {
                    if (res.user) {

                        const user = res.user
                        updateUser(formData.userName, imageUrl).then(() => {

                            setUser({ ...user, displayName: formData.userName, photoURL: imageUrl });

                            const userInformation = {
                                fName: formData.firstName,
                                lName: formData.lastName,
                                email: formData.email,
                                photoURL: imageUrl,
                            };

                            axiosPublic.post('/user', userInformation)
                                .then(() => {
                                    console.log("JHJ")
                                    // registerSuccessSwal(formData.userName)
                                    // navigate('/')
                                }).catch((err) => {
                                    console.log(err)
                                })

                        }).catch(error => {
                            console.log(error)
                            console.log(error.message)
                        })

                    }


                })
                .catch((error) => {
                    console.log(error)
                });
        }

    }



    return (
        <div
            className="min-h-screen flex items-center justify-center p-4"
            style={{
                backgroundColor: 'var(--background-color)',
                color: 'var(--text-color)'
            }}
        >
            <div className="w-full max-w-md mx-auto">
                {/* Logo */}
                <div className="flex justify-center items-center mb-12">
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                        style={{ backgroundColor: 'var(--primary-color)' }}
                    >
                        LH
                    </div>
                    <span
                        className="ml-2 text-xl font-semibold"
                        style={{ color: 'var(--text-color)' }}
                    >
                        Learn Hub
                    </span>
                </div>

                {/* Welcome Text */}
                <div className="text-center mb-8">
                    <h1
                        className="text-3xl font-normal mb-2"
                        style={{ color: 'var(--text-color)' }}
                    >
                        Hi! Welcome to
                    </h1>
                    <div className="flex items-center justify-center">
                        <span
                            className="text-3xl font-normal"
                            style={{ color: 'var(--text-color)' }}
                        >
                            Wealth Wave dude
                        </span>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First Name and Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label
                                className="block text-sm font-medium mb-2"
                                style={{ color: 'var(--text-color)' }}
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder='First Name'
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                                style={{
                                    backgroundColor: 'var(--background-color)',
                                    color: 'var(--text-color)',
                                    borderColor: '#d1d5db',
                                    '--tw-ring-color': 'var(--primary-color)'
                                }}
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium mb-2"
                                style={{ color: 'var(--text-color)' }}
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder='Last Name'
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                                style={{
                                    backgroundColor: 'var(--background-color)',
                                    color: 'var(--text-color)',
                                    borderColor: '#d1d5db',
                                    '--tw-ring-color': 'var(--primary-color)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            className="block text-sm font-medium mb-2"
                            style={{ color: 'var(--text-color)' }}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder='jhondoe@gmail.com'
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
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
                            className="block text-sm font-medium mb-2"
                            style={{ color: 'var(--text-color)' }}
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder='***********'
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
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
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                style={{ color: 'var(--text-color)' }}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>


                        </div>

                        <p className='my-2 text-center text-red-500'>{passwordError && passwordError}</p>
                    </div>


                    <div>
                        <label
                            className="block text-sm font-medium mb-2"
                            style={{ color: 'var(--text-color)' }}
                        >
                            Upload Profile Image
                        </label>
                        <input
                            type="file"
                            name="profileImage"
                            onChange={handleFileChange}
                            className="block w-full text-sm text-gray-500 
               file:mr-4 file:py-2 file:px-4
               file:rounded-full file:border-0
               file:text-sm file:font-medium
               file:bg-[var(--primary-color)] file:text-white
               hover:file:opacity-90
               cursor-pointer"
                            style={{
                                backgroundColor: 'var(--background-color)',
                                color: 'var(--text-color)',
                                borderColor: '#d1d5db'
                            }}
                        />
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-full text-white font-medium text-lg hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: 'var(--primary-color)' }}
                    >
                        Sign up
                    </button>

                    {/* Sign In Link */}
                    <div className="text-center">
                        <span
                            className="text-xs sm:text-sm"
                            style={{ color: 'var(--text-color)' }}
                        >
                            Already have an account?{' '}
                        </span>
                        <Link to='/login'
                            className="text-xs sm:text-sm font-medium hover:underline touch-manipulation"
                            style={{ color: 'var(--primary-color)' }}
                        >
                            Sign In
                        </Link>
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
                                Or with email
                            </span>
                        </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <button
                            type="button"
                            className="cursor-pointer flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors touch-manipulation text-xs sm:text-sm"
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
                            <span className="truncate">Sign up with Google</span>
                        </button>
                        <button
                            type="button"
                            className=" cursor-pointer flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors touch-manipulation text-xs sm:text-sm"
                            style={{
                                backgroundColor: 'var(--background-color)',
                                color: 'var(--text-color)',
                                borderColor: '#d1d5db'
                            }}
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            <span className="truncate">Sign up with Apple</span>
                        </button>
                    </div>
                </form>
            </div>


        </div>
    );
}