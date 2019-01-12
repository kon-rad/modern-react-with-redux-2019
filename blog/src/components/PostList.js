import React from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    console.log('this.props', this.props);
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}
              </p>
            </div>
            <UserHeader userId={post.userId}/>
          </div>
        </div>
      )
    })
  }
  render() {
    console.log(this.props.posts);
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

const mpaStateToProps = (state) => {
    console.log(state);
  return { posts: state.posts };
};

export default connect(mpaStateToProps, { fetchPosts })(PostList);