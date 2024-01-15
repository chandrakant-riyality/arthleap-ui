import { createStore } from "redux";
import loanReducer from "./components/reducers/loanReducer";

const store = createStore( loanReducer );

export default store;