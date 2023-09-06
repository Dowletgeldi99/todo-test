export const errors = {
  INVALID_CREDO: {
    message: 'Incorrect user name or password',
    code: 'INVALID_CREDO',
  },
  INVALID_TOKEN: {
    message: 'Incorrect token or user do not exist',
    code: 'INVALID_TOKEN',
  },
  INVALID_ID: {
    message: 'Incorrect id format',
    code: 'INVALID_ID',
  },
  CREATE_TASK_ERROR: {
    message: 'Error on create new task',
    code: 'CREATE_TASK_ERROR',
  },
  TASK_NOT_FOUND: {
    message: 'Task not found',
    code: 'TASK_NOT_FOUND',
  },
  USER_EXIST: { message: 'User already exists', code: 'USER_EXIST' },
  USER_NOT_EXIST: { message: 'User does not exists', code: 'USER_NOT_EXIST' },
  NO_ACCESS: {
    message: 'You have no access',
    code: 'NO_ACCESS',
  },
  SOMETHING_WRONG: {
    message: 'Sorry, something went wrong, try again later',
    code: 'SOMETHING_WRONG',
  },
  USER_DELETED: {
    message: 'User deleted or is not active',
    code: 'USER_DELETED',
  },
  SAME_STATUS: { message: 'same status', code: 'SAME_STATUS' },
};
