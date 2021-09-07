import { connect } from 'react-redux';
import CreatePostForm from 'components/CreatePostForm';
import { fetchPostDetails } from 'redux/actions/posts';

const mapStateToProps = (state) => {
  return {
    blog: state.blogs.activeBlog,
    loading: state.blogs.loading,
    error: state.blogs.error 
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPostDetails: (id) => {
    dispatch(fetchPostDetails(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm);
