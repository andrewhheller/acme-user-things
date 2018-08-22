import React from 'react';
import Thing from './Thing';

const User = ({ user }) => {
  
  return (
    <div className="grid-item">
      <p className="user">{user.name}</p>
      <Thing userthings={user.userthings} />
    </div>

  )
}



export default User;
