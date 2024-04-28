import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slice/app";
import authReducer from "./slice/auth";
import conversationReducer from "./slice/conversation";

// Slices

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  // whitelist: [],
  // blacklist: [],
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  conversation:conversationReducer,
});

export { rootPersistConfig, rootReducer };


