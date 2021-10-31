import { SearchIcon } from '@heroicons/react/outline';

function NavSearch() {
    return (
        <div className='max-w-xs'>
            <div className='mt-1 relative p-3 rounded-md'>
                <div className='absolute inset-y-0 pl-3 flex items-center 
            pointer-events-none'>
                    <SearchIcon className='h-5 w-5 text-gray-500' />
                </div>
                <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-purple-700
            rounded-md focus:ring-purple-700 focus:border-purple-700 focus:border-3'
                    type='text'
                    placeholder='Search' />
            </div>
        </div>
    )
}

export default NavSearch
