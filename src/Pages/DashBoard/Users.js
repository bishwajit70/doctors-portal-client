import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://glacial-temple-64740.herokuapp.com/users', {
        method: 'GET',
        headers: {
            authorizatoin: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(users);
    return (
        <div>
            <h2 className='text-center text-primary text-2xl pb-5'>All Users:{users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Email Address</th>
                            <th>Action</th>
                            <th>Remeove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                index={index}
                                key={user._id}
                                user={user}
                                refetch={refetch}

                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default Users;