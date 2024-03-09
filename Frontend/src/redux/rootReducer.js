import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slice/app";

// Slices

const rootPersistConfig = {
  key: "root",
  storage: storage,
  keyPrefix: "redux-",
  // whitelist: [],
  // blacklist: [],
};

const rootReducer = combineReducers({
  app: appReducer,
});

export { rootPersistConfig, rootReducer };
