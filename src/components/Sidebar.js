import React from 'react';
import Widget from './Widget';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <ul>
      <li>
        <Link to="/">Logo</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/notification">Notification</Link>
      </li>
      <li>
        <Link to="/lists">Lists</Link>
      </li>
      <li>
        <Link to="/stories">Stories</Link>
      </li>
      <li>
        <Link to="/write">Write</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  );
}
