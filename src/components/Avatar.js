import React from 'react';
export default function Avatar({ url, user }) {
  return (
    <div>
      <img src={user.avatar_url} width={50} height={50} />
      <div>{user.name}</div>
    </div>
  );
}
