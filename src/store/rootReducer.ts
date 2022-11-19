import { combineReducers } from 'redux';
import { access, profile } from './slices';

const reducers = combineReducers({
  access,
  profile,
});

/*const rootReducer = (state: ReturnType<typeof reducers>, action: AnyAction) => {
  return reducers(state, action);
} as typeof reducers;*/

export default reducers;
