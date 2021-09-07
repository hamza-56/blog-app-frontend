import { connect } from 'react-redux';
import SignUpForm from 'components/SignUpForm';
import { signupUser } from 'redux/actions/user';

const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
    error: state.user.error 
  };
};

const mapDispatchToProps = (dispatch) => ({
  signup: (username, password) => {
    dispatch(signupUser(username, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
