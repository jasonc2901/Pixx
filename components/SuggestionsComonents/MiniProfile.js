function MiniProfile() {
    return (
        <div className='flex items-center justify-between mt-14 ml-10'>
            <img className='rounded-full h-16 w-16 border p-[2px]'
                src='https://jasoncaughers.co.uk/static/media/me.e26d472c.jpg' />

            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>@jasoncaughers</h2>
                <h3 className='text-sm text-gray-400'>Welcome to Pixx!</h3>
            </div>
            <button className='text-purple-600 text-sm font-semibold ml-5'>Sign Out</button>
        </div>
    )
}

export default MiniProfile
