import React from 'react';
import PropTypes from 'prop-types';

export const UserItem = ({ user }) => (
  <tr>
    <td>{user.name}</td>
    <td>{user.surname}</td>
    <td>{user.email}</td>
    <td>{user.age}</td>
  </tr>
);


UserItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserItem;
