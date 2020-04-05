import users from './users';
import gallery from './gallery';
import error from './error';

export default {
  ...users,
  ...gallery,
  ...error,
};
