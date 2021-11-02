import {
    BookmarkIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
    ChatIcon
} from '@heroicons/react/outline';

import { HeartIcon as HeartSolid } from '@heroicons/react/solid';

function Post({ id, username, userImg, post, caption }) {
    return (
        <div className='bg-white my-7 border rounded-sm mx-2'>
            <div className='flex items-center p-5'>
                <img src={userImg} className='rounded-full h-12 w-12 object-contain
                border-2 border-purple-600 p-[1.5px] mr-3' />
                <p className='flex-1 font-bold'>{username}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>
            <img src={post} className='object-cover w-full' />
            <div className='flex justify-between px-4 pt-4'>
                <div className='flex space-x-4'>
                    <HeartIcon className='postBtn' />
                    <ChatIcon className='postBtn' />
                    <PaperAirplaneIcon className='postBtn' />
                </div>
                <BookmarkIcon className='postBtn' />
            </div>
            <p className='p-5 truncate'>
                <span className='font-bold mr-1'>
                    {username}
                </span>
                {caption}
            </p>
            <form className='flex items-center p-4'>
                <EmojiHappyIcon className='h-7' />
                <input type='text'
                    placeholder='Add a Comment'
                    className='border-none flex-1 focus:ring-0
                outline-none' />
                <button className='font-semibold text-purple-600'>Post</button>
            </form>
        </div>
    )
}

export default Post
