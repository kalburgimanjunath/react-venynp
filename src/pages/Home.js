import React from 'react';
import Avatar from '../components/Avatar';
import Sidebar from '../components/Sidebar';
import RightBar from '../components/RightBar';
import Social from '../components/Social';
export default function Home() {
  const post = {
    id: 1,
    title: 'How To Become A Content Writer With Zero Experience',
    user: {
      id: 1,
      name: 'manjunath kalburgi',
      date: '20-2-22',
      avatar_url:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
    image_url: 'https://picsum.photos/id/237/200/300',
    description: 'description',
    category: ['Personal Development', 'money'],
  };
  return (
    <>
      <div className="content_part">
        <div>
          <>
            <Avatar user={post.user} />
            <Social />
          </>
          <h1>{post.title}</h1>
          <div>
            <img src={post.image_url} />
          </div>
          <div>{post.description}</div>
          <div>
            {post.category &&
              post.category.map((item) => {
                return <span>{item}, </span>;
              })}
          </div>
          <div>Post Footers</div>
        </div>
      </div>
      <div className="rightbar">
        <RightBar />
      </div>
    </>
  );
}
