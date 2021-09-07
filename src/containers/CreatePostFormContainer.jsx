import { connect } from 'react-redux';
import CreatePostForm from 'components/CreatePostForm';
import { createPost } from 'redux/actions/posts';

const mapStateToProps = (state) => {
  return {
    loading: state.blogs.loading,
    error: state.blogs.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createPost: (title, content) => {
    dispatch(createPost(title, content));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm);
