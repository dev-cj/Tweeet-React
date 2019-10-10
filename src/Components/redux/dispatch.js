import store from "./store";

store.dispatch({ type: "loggedIn", payload: "sup random user" });

store.dispatch({ type: "loggedOut", payload: "Guest" });

