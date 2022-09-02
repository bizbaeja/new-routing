import logo from "./assets/images/logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            render={(props) => <route.element {...props} />}
          ></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
