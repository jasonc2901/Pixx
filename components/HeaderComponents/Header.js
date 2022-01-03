import React from 'react';
import NavSearch from './NavSearch';
import NavLogo from './NavLogo';
import NavIcons from './NavIcons';
import { useSession } from 'next-auth/react';

function Header() {
    const { data: session } = useSession();
    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
            <div className='flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto'>
                <NavLogo />
                <NavSearch />
                <NavIcons session={session} />
            </div>
        </div>
    )
}

export default Header;
