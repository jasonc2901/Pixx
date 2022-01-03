import { PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { signIn, signOut } from 'next-auth/react';
import { Fragment } from 'react';

function NavIcons({ session }) {
    return (
        <div className='flex items-center justify-end space-x-4'>
            <HomeIcon className='navBtn text-purple-700' />
            <MenuIcon className='menuIcon text-purple-600' />

            {session ? (
                <>
                    <div className='relative navBtn'>
                        <PaperAirplaneIcon className='navBtn rotate-45' />
                        <div className='absolute -top-1 -right-2 text-xs
                        w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center
                        text-white animate-bounce'>3</div>
                    </div>
                    <PlusCircleIcon className='navBtn' />
                    <UserGroupIcon className='navBtn' />
                    <HeartIcon className='navBtn' />
                    <img title={`Sign out of ${session?.user?.name}`} src={session.user?.image} className='profileIcon' referrerPolicy="no-referrer" onClick={signOut} />
                </>
            ) : (
                <button onClick={signIn} className="navBtn bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white px-3 mt-1 border border-purple-500 hover:border-transparent rounded"> Sign in </button>
            )}

        </div>
    )
}

export default NavIcons
