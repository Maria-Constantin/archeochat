import React from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import Thread from "../../components/Forum/Thread/Thread";
import mockData from "../../utils/mockdata.json";

import styles from './ForumPage.module.scss';

const ForumPage = () => {
  return (
    <div className={styles.forumPage}>
      <NavbarComponent />
      <div className="forum-content">
        <div className="thread-list">
          {mockData.map((user) => 
            user.posts.map((post) => (
              <Thread key={post.postId} post={post} user={user} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
