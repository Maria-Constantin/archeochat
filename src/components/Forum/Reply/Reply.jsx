import React, { useState } from "react";
import styles from './Reply.module.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Reply = ({ reply }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={styles.reply}>
      <div className={styles.replyHeader}>
        <span className={styles.username}>{reply.username}</span>
        <span className={styles.date}>{reply.datePosted}</span>
      </div>
      <div className={styles.replyContent}>{reply.content}</div>
      <div className={styles.replyMeta}>
        <button className={styles.likeButton} onClick={toggleLike}>
          <i className={`bi ${liked ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up'}`}></i>
          {reply.likes + (liked ? 1 : 0)}
        </button>
      </div>
    </div>
  );
};

export default Reply;
