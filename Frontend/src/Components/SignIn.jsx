import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function SignIn() {


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    let navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, password, confirmPassword, dob, address, zipCode, phone, city, state);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;

        if (firstName && lastName && email && password && confirmPassword && dob && address && zipCode && phone && city && state) {
            if (emailRegex.test(email)) {
                if (password === confirmPassword) {
                    if (phoneRegex.test(phone)) {
                        alert("Successful");
                        navigate('/login');
                    } else {
                        alert("Invalid phone number");
                    }
                } else {
                    alert("Passwords do not match");
                }
            } else {
                alert("Invalid email format");
            }
        } else {
            alert("Please fill all the fields");
        }

        try {
            const api = await axios.post("http://localhost:5000/create", {
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                dob,
                address,
                zipCode,
                phone,
                city,
                state
            })
            console.log(api.response);
            alert("Success")

        } catch (error) {
            alert('Failed to send data. Please try again later.');
            console.log("Sorry! Something went wrong")
        }

    }


    return (
        <>


            <section className="p-6 dark:text-gray-900">
                <h1 className="text-3xl md:text-6xl capitalize text-center pb-8">
                    Sign In
                </h1>
                <form
                    noValidate
                    action=""
                    method="post"
                    className="container flex flex-col mx-auto space-y-12 bg-transparent"
                    onSubmit={handleSubmit}
                >
                    <fieldset className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-transparent">
                        <div className="space-y-4 col-span-full lg:col-span-1">
                            <p className="font-medium">Personal Information</p>
                            <p className="text-xs">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, dolor earum pariatur fugit, dolore eaque veritatis inventore sint sapiente nobis maxime vitae, nisi mollitia voluptatibus labore tempora aperiam! Quia, nam.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm font-medium">
                                    First name
                                </label>
                                <input
                                    id="firstname"
                                    type="text"
                                    placeholder="First name"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:border-gray-300 px-3 border py-2 bg-transparent"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm font-medium">
                                    Last name
                                </label>
                                <input
                                    id="lastname"
                                    type="text"
                                    placeholder="Last name"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:border-gray-300 px-3 border py-2 bg-transparent"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:border-gray-300 px-3 border py-2 bg-transparent"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="phone" className="text-sm font-medium">
                                    Mobile
                                </label>
                                <input
                                    id="phone"
                                    type="text"
                                    placeholder="Mobile"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:border-gray-300 px-3 border py-2 bg-transparent"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm font-medium">
                                    Address
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    placeholder="Address"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:border-gray-300 px-3 border py-2 bg-transparent"
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="city" className="text-sm font-medium">
                                    City
                                </label>
                                <input
                                    id="city"
                                    type="text"
                                    placeholder="City"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:border-gray-300 px-3 border py-2 bg-transparent"
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="state" className="text-sm font-medium">
                                    State / Province
                                </label>
                                <input
                                    id="state"
                                    type="text"
                                    placeholder="State / Province"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:border-gray-300 px-3 border py-2 bg-transparent"
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="zip" className="text-sm font-medium">
                                    ZIP / Postal
                                </label>
                                <input
                                    id="zip"
                                    type="text"
                                    placeholder="ZIP / Postal"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:border-gray-300 px-3 border py-2 bg-transparent"
                                    onChange={(e) => setZipCode(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="dob" className="text-sm font-medium">
                                    DOB
                                </label>
                                <input
                                    id="dob"
                                    type="date"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:border-gray-300 px-3 border py-2 bg-transparent"
                                    onChange={(e) => setDob(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="password" className="text-sm font-medium">
                                    Enter Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:border-gray-300 px-3 border py-2 bg-transparent"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="confirm-password" className="text-sm font-medium">
                                    Enter Confirm Password
                                </label>
                                <input
                                    id="confirm-password"
                                    type="password"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:border-gray-300 px-3 border py-2 bg-transparent"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full sm:col-span-6">
                                <button className="py-3 rounded-xl font-semibold bg-[#00b5ff] w-full md:text-2xl capitalize tracking-widest font-serif">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>






        </>
    )
}

export default SignIn