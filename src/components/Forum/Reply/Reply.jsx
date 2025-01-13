import React, { useState } from "react";
import styles from './Reply.module.scss';

const Reply = ({ reply }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={styles.reply}>

      {/* header - profilepic + username + date */}
      <div className={styles.replyHeader}>
        <img className={styles.profilePic} src={reply.profilePic} alt={`${reply.username}'s profile`} />
        <span className={styles.username}>{reply.username}</span>
        <span className={styles.date}>{new Date(reply.datePosted).toLocaleString()}</span>
      </div>

      {/* Reply content - image/video */}
      <div className={styles.replyContent}>{reply.content}</div>
      {reply.media.map((mediaItem, index) => (
        <div key={index} className={styles.replyMedia}>
          {mediaItem.type === 'image' && <img src={mediaItem.url} alt={mediaItem.caption} className={styles.mediaImage} />}
          {mediaItem.type === 'video' && <video src={mediaItem.url} className={styles.mediaVideo} controls />}
        </div>
      ))}

      {/* meta content - like + comment */}
      <div className={styles.replyMeta}>
        <button className={styles.likeButton} onClick={toggleLike}>
          <i className={`bi ${liked ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up'}`}></i>
          {reply.likes + (liked ? 1 : 0)}
        </button>
        <span className={styles.commentsCount}>{reply.commentsCount} Comments</span>
      </div>

      {/* reply to comments */}
      {reply.comments && reply.comments.map(comment => (
        <div key={comment.commentId} className={styles.comment}>
          <span className={styles.commentUsername}>{comment.username}</span>
          <span className={styles.commentContent}>{comment.content}</span>
          <span className={styles.commentDate}>{new Date(comment.datePosted).toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

export default Reply;
