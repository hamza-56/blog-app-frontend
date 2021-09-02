import { connect } from 'react-redux';
import PostDetail from 'components/PostDetail';

const mapStateToProps = (state) => {
  return {
    blog: state.blogs.activeBlog,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPostDetail: () => {
    dispatch(fetchPosts()).then((response) => {
      !response.error
        ? dispatch(fetchPostsSuccess(response.payload.data))
        : dispatch(fetchPostsFailure(response.payload.data));
    });
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
