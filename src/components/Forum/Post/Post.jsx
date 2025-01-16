import React, { useState } from "react";
import Reply from "../Reply/Reply";
import styles from './Post.module.scss';
import { Button, Form, InputGroup } from "react-bootstrap";

const Post = ({ post, user }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleSaved = () => {
    setSaved(!saved);
  }

  const formattedTime = new Date(post.datePosted).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  const formattedDate = new Date(post.datePosted).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit'
  });

  return (
    <div className={styles.post}>
      {/* Post Header */}
      <div className={styles.postHeader}>
        <div className={styles.userInfo}>
          <img className={styles.profilePic} src={user.profilePic} alt={`${user.username}'s profile`} />
          <span className={styles.username}>{user.username}</span>
        </div>
        <span className={styles.date}>
          {formattedDate} - {formattedTime}
        </span>
      </div>

      {/* Post Content */}
      <div className={styles.postContent}>{post.content}</div>
      {post.media.map((mediaItem, index) => (
        <div key={index} className={styles.postMedia}>
          {mediaItem.type === 'image' && <img src={mediaItem.url} alt={mediaItem.caption} className={styles.mediaImage} />}
          {mediaItem.type === 'video' && <video src={mediaItem.url} className={styles.mediaVideo} controls />}
        </div>
      ))}

      {/* Tags Section */}
      <div className={styles.postTags}>
        {post.tags.map(tag => <span key={tag} className={styles.tag}>#{tag}</span>)}
      </div>

      {/* Meta Section */}
      <div className={styles.postMeta}>
        <span className={styles.commentsCount}>{post.commentsCount} Comments</span>

        {/* Save Button Section */}
        <div className={styles.saveButtonSection} onClick={toggleSaved}>
          <i className={`bi ${saved ? 'bi-bookmark-fill' : 'bi-bookmark'} ${styles.saveIcon}`}></i>
          <span className={styles.saveText}>{saved ? "Saved" : "Save"}</span>
        </div>

        {/* share section */}
        <div className={styles.shareSection}>
          <i className={`bi bi-share ${styles.shareIcon}`}></i>
          <span>Share</span>
        </div>

        {/* Likes Section */}
        <div className={styles.likeSection} onClick={toggleLike}>
          <i className={`bi ${liked ? 'bi-heart-fill' : 'bi-heart'} ${styles.likeIcon}`}></i>
          <span className={styles.likesCount}>{post.likes + (liked ? 1 : 0)}</span>
        </div>

        {/* views section */}
        <div className={styles.viewCount}>
          <i className={`bi bi-eye ${styles.viewIcon}`}></i>
          <span>{post.viewCount} Views</span>
        </div>

      </div>

      {/* Comment Section */}
      <InputGroup className={styles.replyInput}>
        <Form.Control
          placeholder="Reply to this post"
          aria-label="Comment section"
          aria-describedby="basic-addon2"
          className={styles.commentInput}
        />
        <Button className={styles.replyButtonComment}>Reply</Button>
      </InputGroup>

      {/* Show Replies */}
      {showReplies && (
        <div className={styles.repliesSection}>
          {post.replies.map(reply => (
            <Reply key={reply.replyId} reply={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
