import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './userItem';


export const UserList = ({ users }) => (
    <div>
        <h3>User list</h3>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <UserItem key={index} user={user} />
                ))}
            </tbody>
        </table>
    </div>
);

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            surname: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
        })
    ).isRequired,
};


