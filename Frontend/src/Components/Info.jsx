import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";

function Info() {
    const phoneNumber = 9843988585;
    const emailAddress = "abc@gmail.com";

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleEmail = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    
    return (
        
        <>
            <section className="bg-[#252233] py-12 px-4 text-white">
                <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="flex flex-col gap-3 items-center">
                        <FaLocationDot className="text-4xl" />
                        <a href="#" className="text-xl">Location</a>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <a href={`tel:${phoneNumber}`} onClick={handleCall}>
                            <BiSolidPhoneCall className="text-4xl" />
                        </a>
                        <a href={`tel:${phoneNumber}`} onClick={handleCall} className="text-xl">{phoneNumber}</a>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <a href={`mailto:${emailAddress}`} onClick={handleEmail}>
                            <CiMail className="text-4xl" />
                        </a>
                        <a href={`mailto:${emailAddress}`} onClick={handleEmail} className="text-xl">{emailAddress}</a>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Info