import React, { useState } from 'react';
import UseApi from '../components/fetchdata/1/app';

const Home = () => {
    const {data,loading,error} = UseApi('https://jsonplaceholder.typicode.com/users');
    const [deletedUsers, setDeletedUsers] = useState<string[]>([]);

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    if(error){
        return(
            <div>Error {error.message}</div>
        )
    }

    const handleDelete = (userId: string) => {
        // Update the list of deleted users
        setDeletedUsers(prevDeletedUsers => [...prevDeletedUsers, userId]);
    };

     // Filter out the deleted users from the list
     const filteredData = data.filter((user) => !deletedUsers.includes(user.id.toString()));
     // Render the fetched data
  return (
    <div>
         {filteredData.map((val, index) => {
                const { id, name, username, email } = val;
                return (
                    <div key={index}>
                        {name} - {username} - {email}
                        <button onClick={() => handleDelete(id)}>Delete</button>
                    </div>
                );
            })}
    </div>
  )
}

export default Home