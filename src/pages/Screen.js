import "../index.css";
import store from "../helper/store";

import { Provider } from "react-redux";
import InboxScreen from "../components/InboxScreen";

export default function Screen() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}
