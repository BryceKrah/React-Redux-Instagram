import React from 'react';
import { Link } from 'react-router';

const Photo = React.createClass({
  render() {
    const { post, i, comments } = this.props;
    return (
      <figure className="post-container">
        <div>
          <Link to={`/view/${post.code}`}>
            <img className="post-img" src={post.display_src} alt={post.caption}/>
          </Link>
        </div>
        <figcaption>
          <p>{post.caption}</p>
          <div>
            <button onClick={this.props.increment.bind(null, i)}>&hearts; {post.likes}</button>
            <Link to={`/view/${post.code}`}>
              <span>
                <span></span>
                {comments[post.code] ? comments[post.code].length : 0 }
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }
})

export default Photo;
