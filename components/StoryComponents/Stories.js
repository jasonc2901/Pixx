import faker from 'faker';
import { useEffect, useState } from 'react';
import Story from './Story';

function Stories() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fakerUsers = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }));

        setUsers(fakerUsers);
    }, []);

    return (
        <div className='flex space-x-2 p-6 
        bg-white mt-8 border border-gray-200 
        rounded-sm overflow-x-scroll scrollbar-thin
        scrollbar-thumb-purple-800'>
            {users.map(user => (
                <Story key={user.id} img={user.avatar} username={user.username} />
            ))}

        </div>
    )
}

export default Stories
