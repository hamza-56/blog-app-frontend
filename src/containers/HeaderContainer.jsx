import { connect } from 'react-redux';
import Header from 'components/Header';
import { resetUser } from 'redux/actions/user';
import { resetPosts } from 'redux/actions/posts';

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(resetUser());
    dispatch(resetPosts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
