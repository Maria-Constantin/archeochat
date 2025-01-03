import React from "react";
import Post from "../Post/Post";
import styles from './Thread.module.scss';
import mockdata from "../../../utils/mockdata.json";

const Thread = () => {
  return (
    <div className={styles.thread}>
      {mockdata.map((user) => (
        <div key={user.userId}>
          {user.posts.map((post) => (
            <Post key={post.postId} post={post} user={user} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Thread;
