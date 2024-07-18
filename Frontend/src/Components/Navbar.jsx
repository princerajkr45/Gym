import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero-bg.jpg'


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className='flex justify-between items-center px-4 md:px-12 py-4  text-white '
         style={{ backgroundImage: `url(${heroImg})`,
             backgroundSize: 'cover', }}>
            <div className='flex items-center'>
                <a className='text-2xl font-medium' href='/'>
                    Neogym
                </a>
            </div>

            {/* Desktop View */}
            <div className='hidden lg:flex items-center gap-12 text-xl'>
                <ul className='flex gap-12'>
                    <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
                    <li><Link to='/why' onClick={closeMobileMenu}>Why Us</Link></li>
                    <li><Link to='/trainner' onClick={closeMobileMenu}>Trainers</Link></li>
                    <li><Link to='/contact' onClick={closeMobileMenu}>Contact Us</Link></li>
                </ul>
                <Link to='/signin'><button className='px-3 py-2 bg-red-500 rounded-lg text-center'>Sign In</button></Link>
                <Link to='/login'><button className='px-3 py-2 bg-green-700 rounded-lg text-center'>Log In</button></Link>
            </div>

            {/* Mobile View */}
            <div className='lg:hidden'>
                <button className='text-white focus:outline-none' onClick={toggleMobileMenu}>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        {mobileMenuOpen ? (
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                        ) : (
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                        )}
                    </svg>
                </button>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className='fixed inset-y-0 right-0 bg-gray-800 text-white py-4 px-6 w-1/3 max-w-sm z-50 shadow-lg'>
                        <ul className='flex flex-col gap-4'>
                            <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
                            <li><Link to='/why' onClick={closeMobileMenu}>Why Us</Link></li>
                            <li><Link to='/trainner' onClick={closeMobileMenu}>Trainers</Link></li>
                            <li><Link to='/contact' onClick={closeMobileMenu}>Contact Us</Link></li>
                            <li><Link to='/signin' onClick={closeMobileMenu}>Sign In</Link></li>
                            <li><Link to='/login' onClick={closeMobileMenu}>Log In</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
