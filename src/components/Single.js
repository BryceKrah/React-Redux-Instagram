import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
// import comments

const Single = React.createClass({
  render() {
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);

    // get us the post
    const post = this.props.posts[i];

    const postComments = this.props.comments[this.props.params.postId] || [];

    return (
      <div>
        <Photo i={i} post={post} {...this.props} />
        <Comments {...this.props} postComments={postComments}/>
      </div>
    )
  }
})

export default Single;
