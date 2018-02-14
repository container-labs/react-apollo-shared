import FireClass, {
  createWrapper,
  deleteWrapper,
  listWrapper,
  childListWrapper,
  singleWrapper,
  updateWrapper,
} from './graphql'

import {
  authenticated,
  checkPermission,
  requireAdmin,
  queryLoader,
  refetchOnMount,
  waitingOnData,
} from './hocs';

import {
  Logger,
} from './utils';

export default FireClass;

export {
  createWrapper,
  deleteWrapper,
  listWrapper,
  childListWrapper,
  singleWrapper,
  updateWrapper,

  authenticated,
  checkPermission,
  requireAdmin,
  queryLoader,
  refetchOnMount,
  waitingOnData,

  Logger,
}
