import "./App.css";
import Index from "./pages/home";
import { store } from "./config/redux/store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
