import React, { useState } from "react";
import Reply from "../Reply/Reply";
import styles from './Post.module.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button, Form, InputGroup } from "react-bootstrap";

const Post = ({ post, user }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [liked, setLiked] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <div className={styles.userInfo}>
          <img className={styles.profilePic} src={user.profilePic} alt={`${user.username}'s profile`} />
          <span className={styles.username}>{user.username}</span>
        </div>
        <span className={styles.date}>{post.datePosted}</span>
      </div>
      <div className={styles.postContent}>{post.content}</div>
      <div className={styles.postMeta}>
        <button className={styles.toggleReplies} onClick={toggleReplies}>
          {showReplies ? "Hide Replies" : "Show Replies"}
        </button>
        <button className={styles.likeButton} onClick={toggleLike}>
          <i className={`bi ${liked ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up'}`}></i> 
          {post.likes + (liked ? 1 : 0)}
        </button>
      </div>
      <InputGroup className={styles.replyInput}>
      <Form.Control
          placeholder="Reply to this post"
          aria-label="Comment section"
          aria-describedby="basic-addon2"
          className={styles.commentInput}
        />
        <Button className={styles.replyButtonComment}>Reply</Button>
      </InputGroup>

      {showReplies && (
        <div className={styles.repliesSection}>
          {post.replies.map((reply) => (
            <Reply key={reply.replyId} reply={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
