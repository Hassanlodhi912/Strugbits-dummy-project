import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/Index";
import "./fonts/Axiforma-SemiBold.ttf";
import "./fonts/Axiforma-Medium.ttf";
import "./fonts/Axiforma-ExtraBold.ttf";
import "./fonts/Axiforma-Regular.ttf";
import "./fonts/Axiforma-Bold.ttf";
import "./fonts/Axiforma-Light.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<Provider store={store}>
<App/>

</Provider>
 );


