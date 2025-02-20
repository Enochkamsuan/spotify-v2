import "./App.css";
import { store } from "./config/redux/store/store";
import { Provider } from "react-redux";
import RoutePage from "./config/routes/routes";
import Header from "./component/navigation/header";
import Footer from "./component/navigation/footer";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RoutePage />
      <Footer />
    </Provider>
  );
}

export default App;
