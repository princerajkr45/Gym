import React from 'react'
import contactImg from '../assets/contact-img.jpg'
import Navbar from './Navbar'

function ContactUs() {
    return (
        <>
            <section className="bg-[#272240] py-8 px-4">
                <div className="flex flex-col lg:flex-row items-center gap-8 text-white max-w-7xl mx-auto">
                    <div className="w-full lg:w-1/2">
                        <img src={contactImg} className="w-full h-auto object-cover" alt="Contact Us" />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <h1 className="text-3xl lg:text-4xl">CONTACT US</h1>
                        <form className="flex flex-col gap-4"
                            action='https://formspree.io/f/mzzpzojb'
                            method='POST'
                        >
                            <input
                                className="px-4 py-3 w-full lg:w-auto lg:max-w-md border bg-[#1f1b2e] rounded"
                                type="text"
                                placeholder="Name"
                                name="name"
                            />
                            <input
                                className="px-4 py-3 w-full lg:w-auto lg:max-w-md border bg-[#1f1b2e] rounded"
                                type="email"
                                placeholder="Email"
                                name="email"
                            />
                            <input
                                className="px-4 py-3 w-full lg:w-auto lg:max-w-md border bg-[#1f1b2e] rounded"
                                type="number"
                                placeholder="Mobile Number"
                                name="phone"
                            />
                            <textarea
                                className="px-4 py-3 w-full lg:w-auto lg:max-w-md border bg-[#1f1b2e] rounded h-32"
                                placeholder="Message"
                                name="message"
                            ></textarea>
                            <button type="submit" className="mt-3 text-xl px-8 py-3 bg-red-500 rounded-lg self-start">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactUs