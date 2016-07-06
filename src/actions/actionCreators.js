// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(postId, author, comment) {
  console.log("dispatching");
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, commentIndex) {
  return {
    type: 'REMOVE_COMMENT',
    commentIndex,
    postId
  }
}
