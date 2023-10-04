import { configureStore } from "@reduxjs/toolkit";
import addmyevent from "../store/slics"


const store = configureStore({
  reducer: {
    addmyevent,
  }
});

export default store;
