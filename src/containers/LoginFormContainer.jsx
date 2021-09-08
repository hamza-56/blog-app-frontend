import { connect } from 'react-redux';
import LoginForm from 'components/LoginForm';
import { loginUser } from 'redux/actions/user';

const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
    error: state.user.error 
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => {
    dispatch(loginUser(username, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
