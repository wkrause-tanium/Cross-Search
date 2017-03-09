import { combineReducers } from 'redux';
import { LoginReducer as login } from '../routes/Login/modules/Login';
import { JiraReducer as jira } from '../routes/Jira/modules/Jira';
import { SearchReducer as search } from '../routes/Search/modules/Search';
import { SlackReducer as slack } from '../routes/Slack/modules/Slack';

export const makeRootReducer = () => {
  return combineReducers({
    login,
    jira,
    search,
    slack
  });
};

export default makeRootReducer;
