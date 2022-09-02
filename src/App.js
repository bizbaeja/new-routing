import logo from "./assets/images/logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Routes2 from "./Routes2";

function App() {
  return (
    <div className="App">
      <Routes>
        {Routes2.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
