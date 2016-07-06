import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div classname="post-container">
        {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    )
  }
})

export default PhotoGrid;
