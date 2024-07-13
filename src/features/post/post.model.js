import userModel from "../user/user.model.js";
import { ApplicationError } from "../../error-handler/applicationError.js";

export default class postModel {
  constructor(userId, caption, imageUrl) {
    this.postId = posts.length + 1;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }

  static newPost(userId, caption, imageUrl) {
    const post = new postModel(userId, caption, imageUrl);
    posts.push(post);
  }
  static allPosts() {
    return posts;
  }
  static userPosts(userId) {
    return posts.filter((p) => p.userId == userId);
  }
  static postById(postId) {
    const post = posts.find((p) => p.postId == postId);
    return post;
  }
  static updatePost(userId, postId, caption, imageUrl) {
    const post = posts.find((p) => p.userId == userId && p.postId == postId);
    if (post) {
      post.caption = caption;
      post.imageUrl = imageUrl;
    } else {
      throw new ApplicationError("post not found", 400);
    }
  }
  static deletePost(userId, postId) {
    const postIndex = posts.findIndex(
      (p) => p.userId == userId && p.postId == postId
    );
    if (postIndex) {
      posts.splice(postIndex, 1);
    } else {
      throw new ApplicationError("post not found",400);
    }
  }
}

let posts = [
  {
    userId: 1,
    postId: 1,
    caption: "cap1",
    imageUrl: "url1",
  },
  {
    userId: 1,
    postId: 2,
    caption: "cap2",
    imageUrl: "url2",
  },
];
