import { resetUser } from 'redux/actions/user';
import { resetPosts } from 'redux/actions/posts';

const authInterceptor = ({ dispatch }) => (next) => (action) => {
  if (action.payload && action.payload.status === 403 && action.payload.code === 'token_not_valid') {
    console.log('about to');
    dispatch(resetUser());
    dispatch(resetPosts());
  } else {
    next(action);
  }
};

export default authInterceptor;
