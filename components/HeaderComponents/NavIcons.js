import { PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

function NavIcons() {
    return (
        <div className='flex items-center justify-end space-x-4'>
            <HomeIcon className='navBtn text-purple-700' />
            <MenuIcon className='menuIcon text-purple-600' />
            <div className='relative navBtn'>
                <PaperAirplaneIcon className='navBtn rotate-45' />
                <div className='absolute -top-1 -right-2 text-xs
                        w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center
                        text-white animate-bounce'>3</div>
            </div>
            <PlusCircleIcon className='navBtn' />
            <UserGroupIcon className='navBtn' />
            <HeartIcon className='navBtn' />
            <img src='https://jasoncaughers.co.uk/static/media/me.e26d472c.jpg' className='profileIcon' />
        </div>
    )
}

export default NavIcons
