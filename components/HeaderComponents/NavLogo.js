import FullScreenLogo from '../../img/full-screen-logo.png';
import SmallScreenLogo from '../../img/small-screen-logo.png';
import React from 'react';
import Image from 'next/dist/client/image';

function NavLogo() {
    return (
        <React.Fragment>
            <div className='relative w-24 hidden lg:inline-grid cursor-pointer'>
                <Image src={FullScreenLogo}
                    layout='fill' objectFit='contain'
                />
            </div>

            <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                <Image src={SmallScreenLogo}
                    layout='fill' objectFit='contain'
                />
            </div>
        </React.Fragment>
    )
}

export default NavLogo
