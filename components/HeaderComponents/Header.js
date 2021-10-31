import React from 'react';
import NavSearch from './NavSearch';
import NavLogo from './NavLogo';
import NavIcons from './NavIcons';

function Header() {
    return (
        <div className='shadow-sm border-b bg-white
        sticky top-0 z-50'>
            <div className='flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto'>
                <NavLogo />
                <NavSearch />
                <NavIcons />
            </div>
        </div>
    )
}

export default Header
