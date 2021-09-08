import { connect } from 'react-redux';
import PostsList from 'components/PostsList';
import {
  fetchPosts,
} from '../redux/actions/posts';

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs.all,
    error: state.blogs.error,
    loading: state.blogs.loading
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => {
    dispatch(fetchPosts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
