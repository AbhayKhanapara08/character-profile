import { Provider } from "react-redux";
import RouteBase from "./routes";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <RouteBase />
    </Provider>
  );
}

export default App;
