import { connect } from 'react-redux';
import PostsList from 'components/PostsList';
import {
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsFailure,
} from '../redux/actions/posts';

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs.all,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => {
    dispatch(fetchPosts()).then((response) => {
      !response.error
        ? dispatch(fetchPostsSuccess(response.payload.data))
        : dispatch(fetchPostsFailure(response.payload.data));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
