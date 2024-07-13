export default class commentModel {
  constructor(userId, postId, content) {
    this.commentId = comments.length + 1;
    this.userId = userId;
    this.postId = postId;
    this.content = content;
  }

  static newComment(userId, postId, content) {
    const comment = new commentModel(userId, postId, content);
    comments.push(comment);
    return comment;
  }

  static getComments(postId) {
    const result = comments.filter((c) => c.postId == postId);
    return result;
  }

  static updateComment(userId, commentId, content) {
    console.log(commentId);
    const comment = comments.find(
      (c) => c.userId == userId && c.commentId == Number(commentId)
    );
    if (comment) {
      comment.content = content;
    } else {
      return "comment not found";
    }
  }

  static deleteComment(userId, commentId) {
    const commentIndex = comments.findIndex(
      (c) => c.userId == userId && c.commentId == commentId
    );
    if (commentIndex) {
      comments.splice(commentIndex, 1);
    } else {
      return "comment not found";
    }
  }
}

const comments = [
  {
    commentId: 1,
    userId: 1,
    postId: 1,
    content: "comment1",
  },
  {
    commentId: 2,
    userId: 1,
    postId: 2,
    content: "comment2",
  },
];
