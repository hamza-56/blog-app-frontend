import { connect } from 'react-redux';
import PostDetail from 'components/PostDetail';
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

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
