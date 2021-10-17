import "./App.css";
import ShopShoes from "./Components/ShopShoes";

import { store } from "./redux/configStore";
import { Provider } from "react-redux";
function App() {
  return (
    <div>
      <Provider store={store}>
        <ShopShoes />
      </Provider>
    </div>
  );
}

export default App;
